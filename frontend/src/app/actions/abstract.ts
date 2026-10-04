'use server'

// Temporarily disabled Prisma for local preview
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

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

    console.log("Mock Abstract Created:", data);

    // const abstract = await prisma.abstract.create({ data })
    return { success: true, id: "mock_id_456" }
  } catch (error) {
    console.error('Abstract submission error:', error)
    return { success: false, error: 'Failed to submit abstract' }
  }
}
