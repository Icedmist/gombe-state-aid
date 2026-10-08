'use client'

import { useState } from 'react'
import { updateAbstractStatus } from '@/actions/admin'

export default function AbstractActions({ id, currentStatus }: { id: string, currentStatus: string }) {
  const [isUpdating, setIsUpdating] = useState(false)

  const handleStatusUpdate = async (status: string) => {
    setIsUpdating(true)
    await updateAbstractStatus(id, status)
    setIsUpdating(false)
  }

  return (
    <div className="flex space-x-2">
      {currentStatus !== 'ACCEPTED' && (
        <button 
          onClick={() => handleStatusUpdate('ACCEPTED')}
          disabled={isUpdating}
          className="bg-green-100 hover:bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-semibold transition"
        >
          Approve
        </button>
      )}
      {currentStatus !== 'REJECTED' && (
        <button 
          onClick={() => handleStatusUpdate('REJECTED')}
          disabled={isUpdating}
          className="bg-red-100 hover:bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-semibold transition"
        >
          Reject
        </button>
      )}
    </div>
  )
}
