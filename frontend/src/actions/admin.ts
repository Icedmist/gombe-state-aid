'use server'

import { prisma } from '@/lib/prisma'
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
