'use client'

import { ticketCode, type TicketData } from '@/lib/ticket'

export default function TicketCard({ ticket }: { ticket: TicketData }) {
  const isVendor = ticket.participantCategory === 'VENDOR'

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-emerald-950/10">
        <div className={`${isVendor ? 'bg-rose-700' : 'bg-emerald-950'} px-8 py-6 text-center`}>
          <div className="text-[10px] font-bold tracking-[0.25em] text-emerald-200/80 uppercase mb-1">
            Gombe State 2026 HIV-TB Summit
          </div>
          <div className="text-2xl font-black text-white tracking-tight">
            {isVendor ? 'EXHIBITOR PASS' : 'DELEGATE PASS'}
          </div>
          <div className="text-xs font-bold tracking-widest text-emerald-200/70 uppercase mt-1">
            1 Dec 2026 • World AIDS Day
          </div>
        </div>

        <div className="bg-white px-8 py-6">
          <div className="text-center mb-6">
            <div className="text-3xl font-black text-emerald-950">
              {ticket.firstName} {ticket.lastName}
            </div>
            <div className="text-sm text-slate-500 font-medium mt-1">
              {ticket.organization || 'Independent'} • {ticket.participantCategory || 'DELEGATE'}
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-5 text-center bg-milk">
            <div className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-1">Ticket ID</div>
            <div className="text-3xl font-black tracking-[0.15em] text-emerald-950">{ticketCode(ticket.id)}</div>
            <div className="text-xs text-slate-500 mt-2 break-all">{ticket.email}</div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
              ticket.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {ticket.status}
            </span>
          </div>

          <p className="text-xs text-slate-500 text-center mt-4">
            Present this Ticket ID at the entrance for check-in.
          </p>
        </div>
      </div>

      <button
        onClick={() => window.print()}
        className="mt-6 w-full bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl transition-all duration-300 uppercase tracking-widest text-sm print:hidden"
      >
        Print / Save Ticket
      </button>
    </div>
  )
}
