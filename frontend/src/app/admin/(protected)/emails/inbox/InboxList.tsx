'use client'

import { useState } from 'react'
import InboxItem, { type InboxMail } from './InboxItem'

export default function InboxList({ mails }: { mails: InboxMail[] }) {
  const [filter, setFilter] = useState<'received' | 'all' | 'delivery'>('received')

  const receivedMails = mails.filter(
    (m) =>
      m.eventType === 'email.received' ||
      (!m.eventType.startsWith('email.sent') &&
        !m.eventType.startsWith('email.delivered') &&
        !m.eventType.startsWith('email.bounced'))
  )
  const deliveryMails = mails.filter(
    (m) =>
      m.eventType.startsWith('email.sent') ||
      m.eventType.startsWith('email.delivered') ||
      m.eventType.startsWith('email.bounced')
  )

  const activeMails =
    filter === 'received'
      ? receivedMails
      : filter === 'delivery'
      ? deliveryMails
      : mails

  return (
    <div className="space-y-4">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3">
        <button
          type="button"
          onClick={() => setFilter('received')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
            filter === 'received'
              ? 'bg-emerald-950 text-white shadow-xs'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span>📥 Received Replies</span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] ${
              filter === 'received' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {receivedMails.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setFilter('delivery')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
            filter === 'delivery'
              ? 'bg-emerald-950 text-white shadow-xs'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span>✓ Delivery Receipts</span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] ${
              filter === 'delivery' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {deliveryMails.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
            filter === 'all'
              ? 'bg-emerald-950 text-white shadow-xs'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span>All Events</span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] ${
              filter === 'all' ? 'bg-emerald-800 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {mails.length}
          </span>
        </button>
      </div>

      {activeMails.length === 0 ? (
        <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-12 text-center">
          <p className="text-gray-500 font-medium">No messages found in this category.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {activeMails.map((mail) => (
            <InboxItem key={mail.id} mail={mail} />
          ))}
        </div>
      )}
    </div>
  )
}
