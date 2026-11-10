'use client'

import { useMemo, useState } from 'react'
import AttendeeTag, { type TagAttendee } from '@/components/AttendeeTag'
import { attendeeRole } from '@/lib/event'
import { attendeeCode } from '@/lib/ticket'

const ROLES = ['ALL', 'DELEGATE', 'EXHIBITOR', 'SPEAKER', 'VOLUNTEER', 'MEDIA']

export default function TagGenerator({ attendees }: { attendees: TagAttendee[] }) {
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('ALL')
  const [selected, setSelected] = useState<string[]>([])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return attendees.filter((a) => {
      if (roleFilter !== 'ALL' && attendeeRole(a.participantCategory) !== roleFilter) return false
      if (!q) return true
      const haystack = [
        a.firstName,
        a.lastName,
        a.email,
        a.organization,
        attendeeRole(a.participantCategory),
        attendeeCode(a.id),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [attendees, query, roleFilter])

  const selectedAttendees = useMemo(
    () =>
      selected
        .map((id) => attendees.find((a) => a.id === id))
        .filter((a): a is TagAttendee => Boolean(a)),
    [attendees, selected]
  )

  const toggle = (id: string) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    )
  }

  const selectAllFiltered = () => {
    setSelected((current) => Array.from(new Set([...current, ...filtered.map((a) => a.id)])))
  }

  const clearSelection = () => setSelected([])

  const print = () => {
    if (selected.length === 0) return
    window.print()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Attendee Tags</h2>
          <p className="mt-1 text-sm text-gray-500">
            Generate printable wearables with each attendee&apos;s role, ID number and the summit one-liner.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <span className="text-sm font-medium text-gray-600">
            {selected.length} selected
          </span>
          <button
            type="button"
            onClick={print}
            disabled={selected.length === 0}
            className="rounded-xl bg-emerald-950 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Print {selected.length > 0 ? selected.length : ''} Tag{selected.length === 1 ? '' : 's'}
          </button>
        </div>
      </div>

      <div className="tag-layout grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
        <section className="rounded-xl border border-gray-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] print:hidden">
          <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, organisation or ID"
              className="flex-1 rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm transition-all focus:border-emerald-500 focus:ring-emerald-500"
            />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm font-medium focus:border-emerald-500 focus:ring-emerald-500"
            >
              {ROLES.map((role) => (
                <option key={role} value={role}>
                  {role === 'ALL' ? 'All roles' : role}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 px-4 py-3 text-sm">
            <button
              type="button"
              onClick={selectAllFiltered}
              className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-800 transition hover:bg-emerald-100"
            >
              Select all filtered ({filtered.length})
            </button>
            <button
              type="button"
              onClick={clearSelection}
              disabled={selected.length === 0}
              className="rounded-lg border border-gray-200 px-3 py-1.5 font-semibold text-gray-600 transition hover:bg-gray-50 disabled:opacity-40"
            >
              Clear selection
            </button>
          </div>

          <div className="max-h-[62vh] overflow-auto">
            {filtered.length === 0 ? (
              <p className="p-6 text-sm text-gray-500">No attendees match this search.</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {filtered.map((attendee) => {
                  const checked = selected.includes(attendee.id)
                  return (
                    <li key={attendee.id}>
                      <label
                        className={`flex cursor-pointer items-center gap-3 px-4 py-3 transition ${
                          checked ? 'bg-emerald-50/70' : 'hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(attendee.id)}
                          className="h-4 w-4 rounded border-gray-300 text-emerald-700 focus:ring-emerald-500"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-gray-900">
                            {attendee.firstName} {attendee.lastName}
                          </span>
                          <span className="block truncate text-xs text-gray-500">
                            {attendee.organization || 'Independent'} • {attendee.email}
                          </span>
                        </span>
                        <span className="hidden shrink-0 text-right sm:block">
                          <span className="block text-xs font-bold uppercase tracking-wide text-gray-700">
                            {attendeeRole(attendee.participantCategory)}
                          </span>
                          <span className="block text-[11px] font-mono text-gray-500">
                            {attendeeCode(attendee.id)}
                          </span>
                        </span>
                        {attendee.status && (
                          <span
                            className={`shrink-0 rounded px-2 py-1 text-[10px] font-bold ${
                              attendee.status === 'CONFIRMED'
                                ? 'bg-green-100 text-green-800'
                                : attendee.status === 'REJECTED'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {attendee.status}
                          </span>
                        )}
                      </label>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </section>

        <section className="min-w-0">
          <div className="mb-3 flex items-center justify-between print:hidden">
            <h3 className="text-lg font-bold text-gray-900">Tag Preview</h3>
            <span className="text-xs font-medium text-gray-500">
              {selectedAttendees.length === 0
                ? 'Select attendees to preview'
                : `${selectedAttendees.length} tag${selectedAttendees.length === 1 ? '' : 's'} ready`}
            </span>
          </div>

          <div id="tag-print-area" className="space-y-6">
            {selectedAttendees.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center print:hidden">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h10"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  Pick one or more attendees from the list to generate their tags.
                </p>
              </div>
            ) : (
              selectedAttendees.map((attendee) => (
                <div key={attendee.id} className="tag-sheet">
                  <AttendeeTag attendee={attendee} />
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
