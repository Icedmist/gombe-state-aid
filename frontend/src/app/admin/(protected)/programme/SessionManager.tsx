'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSession, deleteSession, updateSession, type SessionInput } from '@/actions/admin'

export type SessionRow = SessionInput & { id: string }
export type SpeakerOption = { id: string; name: string }

const EMPTY: SessionInput = { title: '', description: '', startTime: '', endTime: '', room: '', sessionType: '', track: '', moderator: '', published: false, speakerIds: [] }

function toLocalInput(value: string | null | undefined) {
  if (!value) return ''
  const d = new Date(value)
  if (isNaN(d.getTime())) return ''
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

export default function SessionManager({ initial, speakers }: { initial: SessionRow[]; speakers: SpeakerOption[] }) {
  const router = useRouter()
  const [showAdd, setShowAdd] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<SessionInput>(EMPTY)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  const set = (key: keyof SessionInput, value: string | boolean | string[]) =>
    setForm((d) => ({ ...d, [key]: value }))

  const toggleSpeaker = (id: string) =>
    setForm((d) => ({
      ...d,
      speakerIds: (d.speakerIds || []).includes(id)
        ? (d.speakerIds || []).filter((s) => s !== id)
        : [...(d.speakerIds || []), id],
    }))

  const startEdit = (row: SessionRow) => {
    setEditingId(row.id)
    setForm({ ...row, startTime: toLocalInput(row.startTime), endTime: toLocalInput(row.endTime) })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    const result = editingId ? await updateSession(editingId, form) : await createSession(form)
    setSaving(false)
    if (result.success) {
      setForm(EMPTY)
      setEditingId(null)
      setShowAdd(false)
      router.refresh()
    } else {
      setError(result.error || 'Save failed')
    }
  }

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete session "${title}"?`)) return
    const result = await deleteSession(id)
    if (result.success) router.refresh()
    else alert(result.error || 'Delete failed')
  }

  const input = 'w-full rounded-xl border border-gray-300 p-2.5 bg-gray-50 text-sm focus:border-emerald-500 focus:ring-emerald-500'

  const formJsx = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-gray-600 mb-1">Title *</label>
          <input required value={form.title} onChange={(e) => set('title', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Start</label>
          <input type="datetime-local" value={form.startTime || ''} onChange={(e) => set('startTime', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">End</label>
          <input type="datetime-local" value={form.endTime || ''} onChange={(e) => set('endTime', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Room</label>
          <input value={form.room || ''} onChange={(e) => set('room', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Session type</label>
          <input value={form.sessionType || ''} onChange={(e) => set('sessionType', e.target.value)} placeholder="Keynote, Panel, Workshop..." className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Track</label>
          <input value={form.track || ''} onChange={(e) => set('track', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Moderator</label>
          <input value={form.moderator || ''} onChange={(e) => set('moderator', e.target.value)} className={input} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-gray-600 mb-1">Description</label>
          <textarea value={form.description || ''} onChange={(e) => set('description', e.target.value)} rows={2} className={input} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-gray-600 mb-2">Speakers</label>
          {speakers.length === 0 ? (
            <p className="text-xs text-gray-500">No speakers yet - add them under Speakers first.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {speakers.map((s) => (
                <label key={s.id} className={`px-3 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition ${(form.speakerIds || []).includes(s.id) ? 'bg-emerald-950 text-white border-emerald-950' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-emerald-300'}`}>
                  <input type="checkbox" checked={(form.speakerIds || []).includes(s.id)} onChange={() => toggleSpeaker(s.id)} className="sr-only" />
                  {s.name}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-end pb-1">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input type="checkbox" checked={form.published ?? false} onChange={(e) => set('published', e.target.checked)} className="rounded text-emerald-600" />
            Published on site
          </label>
        </div>
      </div>
      {error && <div className="bg-red-50 text-red-700 p-2.5 rounded-lg text-sm font-semibold">{error}</div>}
      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-2.5 px-6 rounded-xl text-sm uppercase tracking-widest disabled:opacity-60">
          {saving ? 'Saving...' : editingId ? 'Save Changes' : 'Add Session'}
        </button>
        <button type="button" onClick={() => { setEditingId(null); setShowAdd(false); setForm(EMPTY); }} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-6 rounded-xl text-sm uppercase tracking-widest">
          Cancel
        </button>
      </div>
    </form>
  )

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Add Session</h3>
          {!editingId && (
            <button onClick={() => setShowAdd((s) => !s)} className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
              {showAdd ? 'Hide form' : 'Show form'}
            </button>
          )}
        </div>
        {(showAdd || editingId) && formJsx}
      </div>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">All Sessions ({initial.length})</h3>
        {initial.length === 0 ? (
          <p className="text-sm text-gray-500">No sessions yet.</p>
        ) : (
          <div className="space-y-3">
            {initial.map((s) => (
              <div key={s.id} className="border border-gray-100 rounded-xl p-4 flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-gray-900">{s.title}</div>
                  <div className="text-xs text-gray-500">
                    {[s.startTime ? new Date(s.startTime).toLocaleString() : null, s.room, s.sessionType].filter(Boolean).join(' • ') || 'Unscheduled'}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${s.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                    {s.published ? 'Published' : 'Draft'}
                  </span>
                  <button onClick={() => startEdit(s)} className="text-sm font-bold text-emerald-700 hover:text-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-200">Edit</button>
                  <button onClick={() => handleDelete(s.id, s.title)} className="text-sm font-bold text-red-600 hover:text-red-800 px-3 py-1.5 rounded-lg border border-red-200">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
