'use server'

import { prisma } from '@/lib/prisma'
import { getResend } from '@/lib/resend'
import { buildSender, plainToHtml, summitEmailShell } from '@/lib/email-templates'
import type { TicketData } from '@/lib/ticket'
import { ticketCode } from '@/lib/ticket'

type SubmitResult =
  | { success: true; ticket: TicketData }
  | { success: false; error: string }

export async function submitRegistration(formData: FormData): Promise<SubmitResult> {
  try {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const organization = formData.get('organization') as string;
    const activeTab = formData.get('activeTab') as string;
    const category = formData.get('category') as string;
    
    const registration = await prisma.registration.create({
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

    const code = ticketCode(registration.id)

    // Confirmation email carrying the ticket ID. Never fails the registration.
    try {
      const resend = getResend()
      if (resend) {
        const from = buildSender('Gombe Summit', 'registration')
        const subject = `Your summit pass is ready - ${code}`
        const html = summitEmailShell({
          subject,
          heading: `You're registered, ${registration.firstName}!`,
          bodyHtml: plainToHtml(
            `Your ${registration.participantCategory === 'VENDOR' ? 'exhibitor' : 'delegate'} registration for the Gombe State 2026 HIV-TB Summit is ${registration.status.toLowerCase()}.\n\nYour Ticket ID is ${code}.\n\nPresent this ID at the entrance for check-in, or retrieve your pass anytime with your email address.\n\nEvent: 1 December 2026 (World AIDS Day).`
          ),
        })
        await resend.emails.send({ from, to: registration.email, subject, html })
      }
    } catch (emailError) {
      console.error('Confirmation email failed (registration kept):', emailError)
    }

    return {
      success: true,
      ticket: {
        id: registration.id,
        firstName: registration.firstName,
        lastName: registration.lastName,
        email: registration.email,
        organization: registration.organization,
        participantCategory: registration.participantCategory,
        status: registration.status,
      },
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'Registration failed. Email might already be registered.' };
  }
}

export async function lookupTicket(email: string): Promise<{ success: boolean; ticket?: TicketData; error?: string }> {
  const clean = email.trim().toLowerCase()
  if (!clean) return { success: false, error: 'Enter your registration email.' }
  try {
    const reg = await prisma.registration.findFirst({ where: { email: clean } })
    if (!reg) return { success: false, error: 'No registration found for this email.' }
    return {
      success: true,
      ticket: {
        id: reg.id,
        firstName: reg.firstName,
        lastName: reg.lastName,
        email: reg.email,
        organization: reg.organization,
        participantCategory: reg.participantCategory,
        status: reg.status,
      },
    }
  } catch (error) {
    console.error('Ticket lookup error:', error)
    return { success: false, error: 'Lookup failed. Try again.' }
  }
}
