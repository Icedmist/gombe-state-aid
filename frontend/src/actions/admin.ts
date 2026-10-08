'use server'

import { prisma } from '@/lib/prisma'
import { getResend, getResendFrom } from '@/lib/resend'
import { plainToHtml, summitEmailShell } from '@/lib/email-templates'
import { revalidatePath } from 'next/cache'

export async function updateRegistrationStatus(id: string, status: string) {
  try {
    await prisma.registration.update({
      where: { id },
      data: { status }
    })
    revalidatePath('/admin/registrations')
    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    console.error('Error updating registration:', error)
    return { success: false, error: 'Failed to update registration' }
  }
}

export async function updateAbstractStatus(id: string, status: string) {
  try {
    await prisma.abstract.update({
      where: { id },
      data: { status }
    })
    revalidatePath('/admin/abstracts')
    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    console.error('Error updating abstract:', error)
    return { success: false, error: 'Failed to update abstract' }
  }
}

export type SpeakerInput = {
  name: string
  title?: string | null
  organization?: string | null
  country?: string | null
  biography?: string | null
  photoUrl?: string | null
  category?: string | null
  published?: boolean
  order?: number
}

function toSpeakerData(data: SpeakerInput) {
  return {
    name: data.name,
    title: data.title || null,
    organization: data.organization || null,
    country: data.country || null,
    biography: data.biography || null,
    photoUrl: data.photoUrl || null,
    category: data.category || null,
    published: data.published ?? false,
    order: Number(data.order ?? 0),
  }
}

export async function createSpeaker(data: SpeakerInput) {
  try {
    await prisma.speaker.create({ data: toSpeakerData(data) })
    revalidatePath('/admin/speakers')
    return { success: true }
  } catch (error) {
    console.error('Error creating speaker:', error)
    return { success: false, error: 'Failed to create speaker' }
  }
}

export async function updateSpeaker(id: string, data: SpeakerInput) {
  try {
    await prisma.speaker.update({ where: { id }, data: toSpeakerData(data) })
    revalidatePath('/admin/speakers')
    return { success: true }
  } catch (error) {
    console.error('Error updating speaker:', error)
    return { success: false, error: 'Failed to update speaker' }
  }
}

export async function deleteSpeaker(id: string) {
  try {
    await prisma.speaker.delete({ where: { id } })
    revalidatePath('/admin/speakers')
    return { success: true }
  } catch (error) {
    console.error('Error deleting speaker:', error)
    return { success: false, error: 'Failed to delete speaker' }
  }
}

export type CheckInSummary = {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  organization: string | null
  participantCategory: string | null
  status: string
  checkInStatus: boolean
  checkInTime: string | null
  checkInCount: number
}

export async function lookupRegistration(query: string): Promise<{ success: boolean; participant?: CheckInSummary; error?: string }> {
  const q = query.trim()
  if (!q) return { success: false, error: 'Enter a registration ID or email.' }
  try {
    const reg = await prisma.registration.findFirst({
      where: { OR: [{ id: q }, { email: q }] },
      include: { _count: { select: { checkIns: true } } },
    })
    if (!reg) return { success: false, error: 'No registration found.' }
    return {
      success: true,
      participant: {
        id: reg.id,
        firstName: reg.firstName,
        lastName: reg.lastName,
        email: reg.email,
        phoneNumber: reg.phoneNumber,
        organization: reg.organization,
        participantCategory: reg.participantCategory,
        status: reg.status,
        checkInStatus: reg.checkInStatus,
        checkInTime: reg.checkInTime ? reg.checkInTime.toISOString() : null,
        checkInCount: reg._count.checkIns,
      },
    }
  } catch (error) {
    console.error('Error looking up registration:', error)
    return { success: false, error: 'Lookup failed.' }
  }
}

export async function checkInRegistration(id: string) {
  try {
    const reg = await prisma.registration.findUnique({ where: { id } })
    if (!reg) return { success: false, error: 'Registration not found.' }
    await prisma.registration.update({
      where: { id },
      data: { checkInStatus: true, checkInTime: new Date() },
    })
    await prisma.checkIn.create({ data: { registrationId: id, scannedBy: 'admin' } })
    revalidatePath('/admin/checkin')
    revalidatePath('/admin/registrations')
    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    console.error('Error checking in:', error)
    return { success: false, error: 'Check-in failed.' }
  }
}

export async function checkoutRegistration(id: string) {
  try {
    const reg = await prisma.registration.findUnique({ where: { id } })
    if (!reg) return { success: false, error: 'Registration not found.' }
    await prisma.registration.update({
      where: { id },
      data: { checkInStatus: false, checkInTime: null },
    })
    revalidatePath('/admin/checkin')
    revalidatePath('/admin/registrations')
    revalidatePath('/admin')
    return { success: true }
  } catch (error) {
    console.error('Error checking out:', error)
    return { success: false, error: 'Check-out failed.' }
  }
}

export type EmailAudience = 'all' | 'CONFIRMED' | 'PENDING'

export async function sendSummitEmail(input: { audience: EmailAudience; subject: string; message: string }) {
  const resend = getResend()
  if (!resend) {
    return { success: false, sent: 0, failed: 0, error: 'Email service is not configured (RESEND_API_KEY missing).' }
  }
  const subject = input.subject.trim()
  const message = input.message.trim()
  if (!subject || !message) {
    return { success: false, sent: 0, failed: 0, error: 'Subject and message are required.' }
  }
  try {
    const recipients = await prisma.registration.findMany({
      where: input.audience === 'all' ? {} : { status: input.audience },
      select: { email: true, firstName: true },
    })
    if (recipients.length === 0) {
      return { success: false, sent: 0, failed: 0, error: 'No recipients in this audience.' }
    }
    const html = summitEmailShell({ subject, heading: subject, bodyHtml: plainToHtml(message) })
    const from = getResendFrom()
    let sent = 0
    let failed = 0
    for (let i = 0; i < recipients.length; i += 10) {
      const chunk = recipients.slice(i, i + 10)
      const results = await Promise.allSettled(
        chunk.map((r) => resend.emails.send({ from, to: r.email, subject, html }))
      )
      for (const res of results) {
        if (res.status === 'fulfilled' && !res.value.error) sent += 1
        else failed += 1
      }
    }
    revalidatePath('/admin/emails')
    return { success: failed === 0, sent, failed }
  } catch (error) {
    console.error('Error sending summit email:', error)
    return { success: false, sent: 0, failed: 0, error: 'Failed to send emails.' }
  }
}
