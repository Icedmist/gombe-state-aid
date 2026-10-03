'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function submitRegistration(formData: FormData) {
  try {
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      organization: formData.get('organization') as string,
      participantCategory: formData.get('participantCategory') as string,
    }

    const registration = await prisma.registration.create({
      data,
    })

    return { success: true, id: registration.id }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error: 'Failed to submit registration' }
  }
}
