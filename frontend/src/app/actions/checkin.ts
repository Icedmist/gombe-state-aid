'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function processCheckIn(registrationId: string, adminId: string) {
  try {
    const registration = await prisma.registration.findUnique({
      where: { id: registrationId }
    })

    if (!registration) {
      return { success: false, error: 'Registration not found' }
    }

    if (registration.checkInStatus) {
      return { success: false, error: 'Participant already checked in' }
    }

    await prisma.$transaction([
      prisma.registration.update({
        where: { id: registrationId },
        data: { checkInStatus: true, checkInTime: new Date() }
      }),
      prisma.checkIn.create({
        data: {
          registrationId,
          scannedBy: adminId
        }
      })
    ])

    return { success: true, participant: registration }
  } catch (error) {
    console.error('Check-in error:', error)
    return { success: false, error: 'Failed to process check-in' }
  }
}
