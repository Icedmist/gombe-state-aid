import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

type ParsedMail = {
  id: string
  receivedAt: Date
  eventType: string
  from: string
  to: string
  subject: string
  raw: string
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {}
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function parseMail(id: string, receivedAt: Date, details: unknown): ParsedMail {
  const root = asRecord(details)
  const data = asRecord(root.data ?? root)
  const headers = asRecord(data.headers)
  const from = str(data.from || headers.from || data.sender || 'Unknown sender')
  const to = str(
    Array.isArray(data.to) ? data.to.join(', ') : data.to || headers.to || ''
  )
  const subject = str(data.subject || headers.subject || '(no subject)')
  let raw = ''
  try {
    raw = JSON.stringify(details, null, 2)
  } catch {
    raw = String(details)
  }
  return { id, receivedAt, eventType: str(root.type) || 'email', from, to, subject, raw }
}

export default async function AdminInbox() {
  const logs = await prisma.auditLog.findMany({
    where: { action: 'INBOUND_EMAIL' },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })
  const mails = logs.map((log) => parseMail(log.id, log.createdAt, log.details))

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Received Mail</h2>
      <p className="text-sm text-gray-500 mb-6">
        Inbound mail stored from the Resend receiving webhook ({mails.length} stored).
      </p>
      {mails.length === 0 ? (
        <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-12 text-center">
          <p className="text-gray-500 font-medium">No received mail stored yet.</p>
          <p className="text-sm text-gray-400 mt-2">
            Point Resend receiving at /api/email/inbound and replies will land here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {mails.map((mail) => (
            <details
              key={mail.id}
              className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-5 group"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 truncate">{mail.subject}</div>
                    <div className="text-sm text-gray-500 truncate">
                      From {mail.from}
                      {mail.to ? ` to ${mail.to}` : ''}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap shrink-0">
                    {mail.receivedAt.toLocaleString()} • {mail.eventType}
                  </div>
                </div>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Raw payload</div>
                <pre className="text-xs bg-gray-50 border border-gray-100 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-all max-h-96 overflow-y-auto">
                  {mail.raw}
                </pre>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  )
}
