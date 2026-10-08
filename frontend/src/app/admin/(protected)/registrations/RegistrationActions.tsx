'use client'

import { useState } from 'react'
import { updateRegistrationStatus } from '@/actions/admin'

export default function RegistrationActions({ id, currentStatus }: { id: string, currentStatus: string }) {
  const [isUpdating, setIsUpdating] = useState(false)

  const handleStatusUpdate = async (status: string) => {
    setIsUpdating(true)
    await updateRegistrationStatus(id, status)
    setIsUpdating(false)
  }

  return (
    <div className="flex space-x-2">
      {currentStatus !== 'CONFIRMED' && (
        <button 
          onClick={() => handleStatusUpdate('CONFIRMED')}
          disabled={isUpdating}
          className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-3 py-1 rounded text-xs font-semibold transition"
        >
          Approve
        </button>
      )}
      {currentStatus !== 'REJECTED' && (
        <button 
          onClick={() => handleStatusUpdate('REJECTED')}
          disabled={isUpdating}
          className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-xs font-semibold transition"
        >
          Reject
        </button>
      )}
    </div>
  )
}
