'use client'

import { useState } from 'react'
import { getInboundEmailBody, type InboundEmailAttachment } from '@/actions/admin'

export type InboxMail = {
  id: string
  emailId: string | null
  receivedAt: string
  eventType: string
  from: string
  to: string
  subject: string
  attachmentCount?: number
  raw: string
}

export default function InboxItem({ mail }: { mail: InboxMail }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [html, setHtml] = useState<string | null>(null)
  const [text, setText] = useState<string | null>(null)
  const [attachments, setAttachments] = useState<InboundEmailAttachment[]>([])
  const [rawUrl, setRawUrl] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  const toggle = async () => {
    const next = !open
    setOpen(next)
    if (next && !loaded) {
      setLoading(true)
      setError('')
      if (!mail.emailId) {
        setError('No email reference stored for this message.')
      } else {
        const res = await getInboundEmailBody(mail.emailId)
        if (res.success) {
          setHtml(res.html || null)
          setText(res.text || null)
          setAttachments(res.attachments || [])
          setRawUrl(res.rawUrl || null)
        } else {
          setError(res.error || 'Could not load content.')
        }
      }
      setLoaded(true)
      setLoading(false)
    }
  }

  const hasAttachments = attachments.length > 0 || (mail.attachmentCount && mail.attachmentCount > 0)

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-5">
      <button onClick={toggle} className="w-full text-left cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 truncate">{mail.subject}</span>
              {hasAttachments ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
                  📎 {attachments.length > 0 ? attachments.length : mail.attachmentCount}
                </span>
              ) : null}
            </div>
            <div className="text-sm text-gray-500 truncate">
              From {mail.from}
              {mail.to ? ` to ${mail.to}` : ''}
            </div>
          </div>
          <div className="text-xs text-gray-400 whitespace-nowrap shrink-0">
            {mail.receivedAt} • {open ? 'Hide ▲' : 'Open ▼'}
          </div>
        </div>
      </button>
      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
          {loading && <p className="text-sm text-gray-500">Loading message and attachments...</p>}
          {error && <div className="bg-red-50 text-red-700 p-3 rounded-xl text-sm font-semibold">{error}</div>}

          {!loading && attachments.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-600">
                Attached Files ({attachments.length})
              </div>
              <div className="flex flex-wrap gap-2">
                {attachments.map((f) =>
                  f.downloadUrl ? (
                    <a
                      key={f.id}
                      href={f.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-white border border-emerald-300 rounded-lg px-3 py-1.5 shadow-xs transition hover:bg-emerald-50"
                    >
                      <span>📎</span>
                      <span className="truncate max-w-xs">{f.filename || 'Attachment'}</span>
                      {f.size ? <span className="text-gray-500 font-normal">({(f.size / 1024).toFixed(0)} KB)</span> : null}
                    </a>
                  ) : (
                    <span
                      key={f.id}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg px-3 py-1.5"
                    >
                      <span>📎</span>
                      <span className="truncate max-w-xs">{f.filename || 'Attachment'}</span>
                      {f.size ? <span className="text-gray-400 font-normal">({(f.size / 1024).toFixed(0)} KB)</span> : null}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {!loading && !error && html && (
            <iframe title={`Email from ${mail.from}`} srcDoc={html} sandbox="" className="w-full h-[420px] bg-white border border-gray-100 rounded-xl" />
          )}
          {!loading && !error && !html && text && (
            <pre className="text-sm text-gray-800 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
              {text}
            </pre>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            {rawUrl && (
              <a
                href={rawUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-800 hover:underline"
              >
                Download original raw email (.eml)
              </a>
            )}
            <details className="w-full">
              <summary className="text-xs font-bold uppercase tracking-widest text-gray-400 cursor-pointer">Raw payload</summary>
              <pre className="mt-2 text-xs bg-gray-50 border border-gray-100 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-all max-h-64 overflow-y-auto">
                {mail.raw}
              </pre>
            </details>
          </div>
        </div>
      )}
    </div>
  )
}
