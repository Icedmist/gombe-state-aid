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
