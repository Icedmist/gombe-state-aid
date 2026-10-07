'use server'

import { prisma } from '@/lib/prisma'

export async function submitAbstract(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const authorName = formData.get('authorName') as string;
    const email = formData.get('email') as string;
    const organization = formData.get('organization') as string;
    const themeId = formData.get('themeId') as string;
    const content = formData.get('text') as string;
    
    await prisma.abstract.create({
      data: {
        title,
        authorName,
        email,
        organization,
        themeId,
        text: content,
        status: 'SUBMITTED'
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Abstract submission error:', error);
    return { success: false, error: 'Abstract submission failed.' };
  }
}
