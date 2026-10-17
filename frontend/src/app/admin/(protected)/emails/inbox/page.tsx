import { prisma } from '@/lib/prisma'
import InboxList from './InboxList'
import { type InboxMail, type StoredAttachment } from './InboxItem'

export const dynamic = 'force-dynamic'

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function parseMail(id: string, emailId: string | null, receivedAt: Date, details: unknown): InboxMail {
  const root = asRecord(details)
  const data = asRecord(root.data ?? root)
  const headers = asRecord(data.headers)

  const from = str(data.from || headers.from || data.sender || 'Unknown sender')
  const to = str(
    Array.isArray(data.to) ? data.to.join(', ') : data.to || headers.to || ''
  )
  const subject = str(data.subject || headers.subject || '(no subject)')
  const messageId = str(data.message_id || headers['message-id'] || headers['Message-ID'] || '')
  const receivedFor = str(
    Array.isArray(data.received_for)
      ? data.received_for.join(', ')
      : data.received_for || headers['x-received-for'] || ''
  )
  const resolvedEmailId = emailId || str(data.email_id || data.id || root.id || '') || null

  const storedHtml = str(root.html || data.html || '') || undefined
  const storedText = str(root.text || data.text || '') || undefined
  const storedRawUrl = str(root.rawUrl || (data.raw as { download_url?: string })?.download_url || '') || undefined

  const rawAttachments = Array.isArray(root.cachedAttachments)
    ? root.cachedAttachments
    : Array.isArray(data.attachments)
    ? data.attachments
    : Array.isArray(root.attachments)
    ? root.attachments
    : []

  const attachments: StoredAttachment[] = []
  for (const a of rawAttachments) {
    if (a && typeof a === 'object') {
      const item = a as Record<string, unknown>
      attachments.push({
        id: str(item.id || item.filename || String(Math.random())),
        filename: str(item.filename || item.name || 'attachment'),
        size: typeof item.size === 'number' ? item.size : undefined,
        contentType: str(item.content_type || item.contentType || ''),
        downloadUrl: str(item.download_url || item.downloadUrl || ''),
      })
    }
  }

  let raw = ''
  try {
    raw = JSON.stringify(details, null, 2)
  } catch {
    raw = String(details)
  }

  return {
    id,
    emailId: resolvedEmailId,
    receivedAt: receivedAt.toLocaleString(),
    eventType: str(root.type) || 'email',
    from,
    to,
    subject,
    messageId: messageId || undefined,
    receivedFor: receivedFor || undefined,
    storedHtml,
    storedText,
    storedRawUrl,
    attachments,
    attachmentCount: attachments.length,
    raw,
  }
}

export default async function AdminInbox() {
  const logs = await prisma.auditLog.findMany({
    where: { action: 'INBOUND_EMAIL' },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })
  const mails = logs.map((log) => parseMail(log.id, log.entityId, log.createdAt, log.details))

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Received Mail</h2>
      <p className="text-sm text-gray-500 mb-6">
        Inbound messages from delegates, speakers, and partners, plus delivery notifications ({mails.length} total).
      </p>
      {mails.length === 0 ? (
        <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-12 text-center">
          <p className="text-gray-500 font-medium">No received mail stored yet.</p>
          <p className="text-sm text-gray-400 mt-2">
            Point Resend receiving at /webhooks/email/inbound and replies will land here.
          </p>
        </div>
      ) : (
        <InboxList mails={mails} />
      )}
    </div>
  )
}
