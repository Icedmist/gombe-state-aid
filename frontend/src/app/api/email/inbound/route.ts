import { Webhook } from 'svix'
import { prisma } from '@/lib/prisma'

// Receiving webhook for Resend inbound email.
// In Resend dashboard -> Webhooks, subscribe receiving events to:
//   https://<your-vercel-domain>/api/email/inbound
// and set RESEND_WEBHOOK_SECRET on the server.
export async function POST(req: Request) {
  const secret = process.env.RESEND_WEBHOOK_SECRET
  if (!secret) {
    return Response.json({ error: 'Inbound email not configured.' }, { status: 500 })
  }
  const payload = await req.text()
  const headers = {
    'svix-id': req.headers.get('svix-id') || '',
    'svix-timestamp': req.headers.get('svix-timestamp') || '',
    'svix-signature': req.headers.get('svix-signature') || '',
  }
  let event: { type?: string; data?: any }
  try {
    event = new Webhook(secret).verify(payload, headers) as unknown as typeof event
  } catch {
    return Response.json({ error: 'Invalid signature.' }, { status: 400 })
  }
  try {
    await prisma.auditLog.create({
      data: {
        action: 'INBOUND_EMAIL',
        entityType: 'EMAIL',
        entityId: typeof event.data?.email_id === 'string' ? event.data.email_id : null,
        details: { type: event.type || 'unknown', data: event.data || {} },
      },
    })
  } catch (error) {
    console.error('Failed to log inbound email:', error)
  }
  return Response.json({ received: true })
}
