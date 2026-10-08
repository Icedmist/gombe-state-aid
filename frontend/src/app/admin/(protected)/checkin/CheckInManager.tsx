'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  checkInRegistration,
  checkoutRegistration,
  lookupRegistration,
  type CheckInSummary,
} from '@/actions/admin'

function ParticipantCard({
  participant,
  onChanged,
}: {
  participant: CheckInSummary
  onChanged: () => void
}) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const run = async (fn: (id: string) => Promise<{ success: boolean; error?: string }>) => {
    setBusy(true)
    setError('')
    const result = await fn(participant.id)
    setBusy(false)
    if (result.success) {
      onChanged()
      router.refresh()
    } else {
      setError(result.error || 'Operation failed.')
    }
  }

  return (
    <div className="border border-gray-100 rounded-xl p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="font-bold text-gray-900 text-lg">
            {participant.firstName} {participant.lastName}
          </div>
          <div className="text-sm text-gray-500">{participant.email} • {participant.phoneNumber}</div>
          <div className="text-xs text-gray-500 mt-1">
            {participant.organization || '-'} • {participant.participantCategory || 'DELEGATE'} • {participant.status}
          </div>
          <div className="mt-2">
            {participant.checkInStatus ? (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                Checked in{participant.checkInTime ? ` • ${new Date(participant.checkInTime).toLocaleString()}` : ''}
              </span>
            ) : (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">Not checked in</span>
            )}
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          {!participant.checkInStatus ? (
            <button
              onClick={() => run(checkInRegistration)}
              disabled={busy}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-5 rounded-xl text-sm uppercase tracking-widest transition disabled:opacity-60"
            >
              {busy ? 'Working...' : 'Check In'}
            </button>
          ) : (
            <button
              onClick={() => run(checkoutRegistration)}
              disabled={busy}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-5 rounded-xl text-sm uppercase tracking-widest transition disabled:opacity-60"
            >
              {busy ? 'Working...' : 'Check Out'}
            </button>
          )}
        </div>
      </div>
      {error && <div className="mt-3 bg-red-50 text-red-700 p-2.5 rounded-lg text-sm font-semibold">{error}</div>}
    </div>
  )
}

export default function CheckInManager({ checkedIn }: { checkedIn: CheckInSummary[] }) {
  const [query, setQuery] = useState('')
  const [looking, setLooking] = useState(false)
  const [found, setFound] = useState<CheckInSummary | null>(null)
  const [lookupError, setLookupError] = useState('')

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLooking(true)
    setLookupError('')
    setFound(null)
    const result = await lookupRegistration(query)
    setLooking(false)
    if (result.success && result.participant) setFound(result.participant)
    else setLookupError(result.error || 'Not found.')
  }

  const refreshFound = async () => {
    const result = await lookupRegistration(query)
    if (result.success && result.participant) setFound(result.participant)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Find Participant</h3>
        <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Registration ID or email"
            className="flex-1 rounded-xl border border-gray-300 p-2.5 bg-gray-50 text-sm focus:border-emerald-500 focus:ring-emerald-500 transition-all"
          />
          <button
            type="submit"
            disabled={looking}
            className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-2.5 px-6 rounded-xl text-sm uppercase tracking-widest transition disabled:opacity-60"
          >
            {looking ? 'Searching...' : 'Look Up'}
          </button>
        </form>
        {lookupError && (
          <div className="mt-3 bg-red-50 text-red-700 p-2.5 rounded-lg text-sm font-semibold">{lookupError}</div>
        )}
        {found && (
          <div className="mt-4">
            <ParticipantCard participant={found} onChanged={refreshFound} />
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Checked In ({checkedIn.length})
        </h3>
        {checkedIn.length === 0 ? (
          <p className="text-sm text-gray-500">Nobody checked in yet.</p>
        ) : (
          <div className="space-y-3">
            {checkedIn.map((p) => (
              <ParticipantCard
                key={p.id}
                participant={p}
                onChanged={() => window.location.reload()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
