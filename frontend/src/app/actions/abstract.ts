'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function submitAbstract(formData: FormData) {
  try {
    const data = {
      title: formData.get('title') as string,
      authorName: formData.get('authorName') as string,
      email: formData.get('email') as string,
      organization: formData.get('organization') as string,
      themeId: formData.get('themeId') as string,
      text: formData.get('text') as string,
    }

    const abstract = await prisma.abstract.create({
      data,
    })

    return { success: true, id: abstract.id }
  } catch (error) {
    console.error('Abstract submission error:', error)
    return { success: false, error: 'Failed to submit abstract' }
  }
}
