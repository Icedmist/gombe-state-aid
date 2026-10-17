'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { updateAbstractStatus } from '@/actions/admin'

export default function AbstractDecision({ id, currentStatus }: { id: string; currentStatus: string }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  const decide = async (status: string) => {
    setBusy(true)
    await updateAbstractStatus(id, status)
    setBusy(false)
    router.refresh()
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => decide('ACCEPTED')} disabled={busy || currentStatus === 'ACCEPTED'} className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-2 px-5 rounded-xl text-xs uppercase tracking-widest transition disabled:opacity-50">
        Approve
      </button>
      <button onClick={() => decide('REJECTED')} disabled={busy || currentStatus === 'REJECTED'} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl text-xs uppercase tracking-widest transition disabled:opacity-50">
        Reject
      </button>
    </div>
  )
}
