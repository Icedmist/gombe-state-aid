'use client'

import { useState } from 'react'
import { lookupTicket } from '@/actions/register'
import type { TicketData } from '@/lib/ticket'
import TicketCard from '@/components/TicketCard'

export default function TicketLookup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'searching' | 'error'>('idle')
  const [error, setError] = useState('')
  const [ticket, setTicket] = useState<TicketData | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('searching')
    setError('')
    setTicket(null)
    const result = await lookupTicket(email)
    if (result.success && result.ticket) {
      setTicket(result.ticket)
      setStatus('idle')
    } else {
      setStatus('error')
      setError(result.error || 'Not found.')
    }
  }

  return (
    <div className="bg-milk py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-3 block">My Ticket</span>
          <h1 className="text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">View Your Pass</h1>
          <p className="text-slate-500 mt-4">Enter the email you registered with to retrieve your summit pass.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-emerald-950/5 p-6 md:p-8 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-slate-300 p-3 bg-milk text-sm focus:border-emerald-500 focus:ring-emerald-500 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'searching'}
              className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-3 px-8 rounded-xl text-sm uppercase tracking-widest transition-all disabled:opacity-60"
            >
              {status === 'searching' ? 'Searching...' : 'Find Ticket'}
            </button>
          </form>
          {status === 'error' && (
            <div className="mt-3 bg-red-50 text-red-700 p-3 rounded-xl text-sm font-semibold text-center">{error}</div>
          )}
        </div>

        {ticket && <TicketCard ticket={ticket} />}
      </div>
    </div>
  )
}
