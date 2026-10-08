'use client'

import { useState } from 'react'
import { sendSummitEmail, type EmailAudience } from '@/actions/admin'

export default function EmailComposer() {
  const [audience, setAudience] = useState<EmailAudience>('CONFIRMED')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [result, setResult] = useState('')

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!confirm(`Send this email to ${audience === 'all' ? 'ALL registrants' : `${audience} registrants`}?`)) return
    setStatus('sending')
    setResult('')
    const res = await sendSummitEmail({ audience, subject, message })
    if (res.success) {
      setStatus('done')
      setResult(`Sent to ${res.sent} recipient${res.sent === 1 ? '' : 's'}.`)
      setSubject('')
      setMessage('')
    } else {
      setStatus('error')
      setResult(res.error || `Sent ${res.sent}, failed ${res.failed}.`)
    }
  }

  const input = 'w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-sm focus:border-emerald-500 focus:ring-emerald-500 transition-all'

  return (
    <form onSubmit={handleSend} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Audience</label>
          <select value={audience} onChange={(e) => setAudience(e.target.value as EmailAudience)} className={input}>
            <option value="CONFIRMED">Confirmed registrants</option>
            <option value="PENDING">Pending registrants</option>
            <option value="all">All registrants</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Subject</label>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} required maxLength={120} placeholder="Summit update" className={input} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-1">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={8} placeholder="Write your announcement. Blank lines become paragraphs." className={input} />
      </div>
      {result && (
        <div className={`${status === 'done' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'} p-3 rounded-xl text-sm font-semibold`}>
          {result}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-3 px-8 rounded-xl text-sm uppercase tracking-widest transition disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Branded Email'}
      </button>
      <p className="text-xs text-gray-500">
        Sent from your verified Resend sender domain via the summit-branded template. Requires RESEND_API_KEY on the server.
      </p>
    </form>
  )
}
