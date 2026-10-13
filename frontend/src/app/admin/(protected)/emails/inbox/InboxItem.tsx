'use client'

import { useState } from 'react'
import {
  getInboundEmailBody,
  getInboundAttachmentUrl,
  type InboundEmailAttachment,
} from '@/actions/admin'

export type StoredAttachment = InboundEmailAttachment

export type InboxMail = {
  id: string
  emailId: string | null
  receivedAt: string
  eventType: string
  from: string
  to: string
  subject: string
  messageId?: string
  receivedFor?: string
  storedHtml?: string
  storedText?: string
  storedRawUrl?: string
  attachments: StoredAttachment[]
  attachmentCount: number
  raw: string
}

export default function InboxItem({ mail }: { mail: InboxMail }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [html, setHtml] = useState<string | null>(mail.storedHtml || null)
  const [text, setText] = useState<string | null>(mail.storedText || null)
  const [attachments, setAttachments] = useState<InboundEmailAttachment[]>(mail.attachments || [])
  const [rawUrl, setRawUrl] = useState<string | null>(mail.storedRawUrl || null)
  const [note, setNote] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [fetchingAttachmentId, setFetchingAttachmentId] = useState<string | null>(null)

  const toggle = async () => {
    const next = !open
    setOpen(next)
    if (next && !loaded) {
      const needsFetch = (!html && !text) || attachments.some((a) => !a.downloadUrl)
      if (needsFetch) {
        setLoading(true)
        setError('')
        const res = await getInboundEmailBody(mail.emailId, mail.id)
        if (res.success) {
          if (res.html) setHtml(res.html)
          if (res.text) setText(res.text)
          if (res.rawUrl) setRawUrl(res.rawUrl)
          if (res.note) setNote(res.note)
          if (res.attachments && res.attachments.length > 0) {
            setAttachments(res.attachments)
          }
        } else {
          setError(res.error || 'Could not load content from mail server.')
        }
        setLoading(false)
      }
      setLoaded(true)
    }
  }

  const handleFetchAttachmentUrl = async (att: InboundEmailAttachment) => {
    if (!mail.emailId) return
    setFetchingAttachmentId(att.id)
    try {
      const res = await getInboundAttachmentUrl(mail.emailId, att.id)
      if (res.success && res.downloadUrl) {
        setAttachments((prev) =>
          prev.map((a) => (a.id === att.id ? { ...a, downloadUrl: res.downloadUrl } : a))
        )
        window.open(res.downloadUrl, '_blank', 'noopener,noreferrer')
      } else {
        alert(res.error || 'Attachment link not available on mail server.')
      }
    } catch (e) {
      alert((e as Error)?.message || 'Failed to fetch attachment download URL.')
    } finally {
      setFetchingAttachmentId(null)
    }
  }

  const totalAttachments = attachments.length > 0 ? attachments.length : mail.attachmentCount

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-5 transition-all">
      <button onClick={toggle} className="w-full text-left cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 truncate text-base">{mail.subject}</span>
              {totalAttachments > 0 ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-0.5">
                  📎 {totalAttachments}
                </span>
              ) : null}
            </div>
            <div className="text-sm text-gray-600 truncate mt-0.5">
              <span className="font-semibold text-gray-700">From:</span> {mail.from}
              {mail.to ? (
                <>
                  <span className="mx-1 text-gray-300">•</span>
                  <span className="text-gray-500">To: {mail.to}</span>
                </>
              ) : null}
            </div>
          </div>
          <div className="text-xs text-gray-400 whitespace-nowrap shrink-0 flex items-center gap-2">
            <span>{mail.receivedAt}</span>
            <span className="font-medium text-emerald-800 bg-emerald-50 rounded-md px-2 py-1">
              {open ? 'Hide ▲' : 'Open ▼'}
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
          {/* Header Metadata Summary Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              <div>
                <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px]">From</span>
                <span className="font-medium text-gray-900 break-all">{mail.from}</span>
              </div>
              <div>
                <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px]">To / Recipient</span>
                <span className="font-medium text-gray-900 break-all">{mail.to || 'Summit Mailbox'}</span>
              </div>
              {mail.receivedFor && (
                <div>
                  <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px]">Received For</span>
                  <span className="font-mono text-emerald-950 break-all">{mail.receivedFor}</span>
                </div>
              )}
              {mail.messageId && (
                <div>
                  <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px]">Message-ID</span>
                  <span className="font-mono text-gray-600 break-all">{mail.messageId}</span>
                </div>
              )}
              {mail.emailId && (
                <div>
                  <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px]">Resend Email ID</span>
                  <span className="font-mono text-gray-500 break-all">{mail.emailId}</span>
                </div>
              )}
              <div>
                <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px]">Event Type</span>
                <span className="inline-block px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 font-mono text-[11px] font-semibold">
                  {mail.eventType}
                </span>
              </div>
            </div>
          </div>

          {loading && (
            <div className="flex items-center gap-2 text-sm text-gray-500 p-3 bg-gray-50 rounded-xl">
              <span className="animate-spin">🔄</span> Loading message content and attachments...
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          {/* Attachments Section */}
          {!loading && attachments.length > 0 && (
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <span>📎</span> Attached Files ({attachments.length})
              </div>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {attachments.map((f) => (
                  <div
                    key={f.id}
                    className="inline-flex items-center gap-2 bg-white border border-emerald-300 rounded-lg px-3 py-2 shadow-xs text-xs"
                  >
                    <span className="text-base">📄</span>
                    <div className="min-w-0 max-w-xs">
                      <div className="font-bold text-gray-900 truncate">{f.filename}</div>
                      {f.size ? (
                        <div className="text-[11px] text-gray-500 font-normal">{(f.size / 1024).toFixed(0)} KB</div>
                      ) : null}
                    </div>
                    {f.downloadUrl ? (
                      <a
                        href={f.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 font-bold text-xs bg-emerald-800 hover:bg-emerald-900 text-white px-2.5 py-1 rounded-md transition"
                      >
                        Download
                      </a>
                    ) : mail.emailId ? (
                      <button
                        type="button"
                        onClick={() => handleFetchAttachmentUrl(f)}
                        disabled={fetchingAttachmentId === f.id}
                        className="ml-2 font-bold text-xs bg-emerald-700 hover:bg-emerald-800 text-white px-2.5 py-1 rounded-md transition disabled:opacity-50"
                      >
                        {fetchingAttachmentId === f.id ? 'Loading...' : 'Download'}
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Note if body not retained */}
          {note && !html && !text && (
            <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl text-sm leading-relaxed">
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <span>ℹ️</span> Notice: Message Body Not Retained on Mail Server
              </div>
              <p className="text-xs text-amber-800">
                {note}
              </p>
            </div>
          )}

          {/* Email Body: HTML */}
          {!loading && html && (
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Message Preview</div>
              <iframe
                title={`Email from ${mail.from}`}
                srcDoc={html}
                sandbox=""
                className="w-full h-[460px] bg-white border border-gray-200 rounded-xl"
              />
            </div>
          )}

          {/* Email Body: Text (when no HTML) */}
          {!loading && !html && text && (
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Message Text</div>
              <pre className="text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre-wrap break-words max-h-96 overflow-y-auto font-sans leading-relaxed">
                {text}
              </pre>
            </div>
          )}

          {/* Footer Actions & Raw Payload */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            {rawUrl && (
              <div>
                <a
                  href={rawUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1"
                >
                  📥 Download original raw email (.eml)
                </a>
              </div>
            )}
            <details className="w-full">
              <summary className="text-xs font-bold uppercase tracking-widest text-gray-400 cursor-pointer hover:text-gray-600 transition">
                Raw Webhook Payload JSON
              </summary>
              <pre className="mt-2 text-xs bg-gray-50 border border-gray-200 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-all max-h-64 overflow-y-auto font-mono text-gray-700">
                {mail.raw}
              </pre>
            </details>
          </div>
        </div>
      )}
    </div>
  )
}
