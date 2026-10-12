import { Webhook } from 'svix'
import { prisma } from '@/lib/prisma'

// Receiving webhook for Resend inbound email (frontend service, which boots
// reliably - the backend /api/* service is down). Subscribe in Resend to:
//   https://www.gombestateaidsummit.ng/webhooks/email/inbound
// and set RESEND_WEBHOOK_SECRET on the frontend service.
export async function POST(req: Request) {
  const secret = process.env.RESEND_WEBHOOK_SECRET
  if (!secret) {
    return Response.json({ error: 'Inbound email not configured.' }, { status: 500 })
  }
  const payload = await req.text()
  const headers: Record<string, string> = {}
  req.headers.forEach((val, key) => {
    headers[key.toLowerCase()] = val
  })

  let event: { type?: string; data?: Record<string, unknown>; id?: string }
  try {
    event = JSON.parse(payload)
  } catch {
    return Response.json({ error: 'Invalid payload.' }, { status: 400 })
  }

  try {
    new Webhook(secret).verify(payload, headers)
  } catch (err) {
    console.warn('Inbound email signature verification failed:', (err as Error)?.message)
    return Response.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  try {
    const eventType = typeof event.type === 'string' ? event.type : ''
    if (eventType && eventType !== 'email.received') {
      return Response.json({ received: true, skipped: eventType })
    }

    const emailId =
      (typeof event.data?.email_id === 'string' && event.data.email_id) ||
      (typeof event.data?.id === 'string' && event.data.id) ||
      (typeof event.id === 'string' && event.id) ||
      null

    const sanitizedDetails = JSON.parse(
      JSON.stringify({ type: event.type || 'email.received', data: event.data || {} }).replace(/\\u0000/g, '')
    )

    await prisma.auditLog.create({
      data: {
        action: 'INBOUND_EMAIL',
        entityType: 'EMAIL',
        entityId: emailId,
        details: sanitizedDetails,
      },
    })
  } catch (error) {
    console.error('Failed to log inbound email:', error)
    const e = error as { code?: unknown; errorCode?: unknown; name?: unknown; message?: unknown }
    const code = String(e.code ?? e.errorCode ?? e.name ?? 'unknown')
    const detail = String(e.message || '')
      .replace(/:[^:@\s]+@/g, ':***@')
      .replace(/whsec_[A-Za-z0-9]+/g, 'whsec_***')
      .replace(/re_[A-Za-z0-9_]+/g, 're_***')
      .slice(0, 160)
    return Response.json({ error: 'Failed to store inbound email.', code, detail }, { status: 500 })
  }
  return Response.json({ received: true })
}
