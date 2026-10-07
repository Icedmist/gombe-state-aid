'use server'

import { prisma } from '@/lib/prisma'

export async function submitRegistration(formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const organization = formData.get('organization') as string;
    const activeTab = formData.get('activeTab') as string;
    const category = formData.get('category') as string;
    
    await prisma.registration.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        organization,
        participantCategory: activeTab === 'vendor' ? 'VENDOR' : 'DELEGATE',
        organizationType: category || null,
        status: activeTab === 'vendor' ? 'PENDING' : 'CONFIRMED'
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'Registration failed. Email might already be registered.' };
  }
}
