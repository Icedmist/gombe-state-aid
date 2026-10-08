'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSpeaker, deleteSpeaker, updateSpeaker, type SpeakerInput } from '@/actions/admin'

type Speaker = SpeakerInput & { id: string }

const EMPTY: SpeakerInput = { name: '', title: '', organization: '', country: '', biography: '', photoUrl: '', category: '', published: false, order: 0 }

function SpeakerForm({
  initial,
  submitLabel,
  onSubmit,
  onCancel,
}: {
  initial: SpeakerInput
  submitLabel: string
  onSubmit: (data: SpeakerInput) => Promise<{ success: boolean; error?: string }>
  onCancel?: () => void
}) {
  const router = useRouter()
  const [data, setData] = useState<SpeakerInput>(initial)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  const set = (key: keyof SpeakerInput, value: string | boolean | number) =>
    setData((d) => ({ ...d, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    const result = await onSubmit(data)
    setSaving(false)
    if (result.success) {
      router.refresh()
      if (onCancel) onCancel()
      else setData(EMPTY)
    } else {
      setError(result.error || 'Something went wrong')
    }
  }

  const input = 'w-full rounded-lg border border-gray-300 p-2.5 bg-gray-50 text-sm focus:border-emerald-500 focus:ring-emerald-500'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Name *</label>
          <input required value={data.name} onChange={(e) => set('name', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Title</label>
          <input value={data.title || ''} onChange={(e) => set('title', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Organization</label>
          <input value={data.organization || ''} onChange={(e) => set('organization', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Country</label>
          <input value={data.country || ''} onChange={(e) => set('country', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Category</label>
          <input value={data.category || ''} onChange={(e) => set('category', e.target.value)} placeholder="Keynote, Panelist..." className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Photo URL</label>
          <input value={data.photoUrl || ''} onChange={(e) => set('photoUrl', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Display Order</label>
          <input type="number" value={data.order ?? 0} onChange={(e) => set('order', Number(e.target.value))} className={input} />
        </div>
        <div className="flex items-end pb-1">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input type="checkbox" checked={data.published ?? false} onChange={(e) => set('published', e.target.checked)} className="rounded text-emerald-600" />
            Published on site
          </label>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-1">Biography</label>
        <textarea value={data.biography || ''} onChange={(e) => set('biography', e.target.value)} rows={3} className={input} />
      </div>
      {error && <div className="bg-red-50 text-red-700 p-2.5 rounded-lg text-sm font-semibold">{error}</div>}
      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-2.5 px-6 rounded-xl text-sm uppercase tracking-widest disabled:opacity-60">
          {saving ? 'Saving...' : submitLabel}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-6 rounded-xl text-sm uppercase tracking-widest">
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default function SpeakerManager({ initialSpeakers }: { initialSpeakers: Speaker[] }) {
  const router = useRouter()
  const [showAdd, setShowAdd] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete speaker "${name}"?`)) return
    const result = await deleteSpeaker(id)
    if (result.success) router.refresh()
    else alert(result.error || 'Delete failed')
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Add Speaker</h3>
          <button onClick={() => setShowAdd((s) => !s)} className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
            {showAdd ? 'Hide form' : 'Show form'}
          </button>
        </div>
        {showAdd && <SpeakerForm initial={EMPTY} submitLabel="Add Speaker" onSubmit={createSpeaker} />}
      </div>

      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">All Speakers ({initialSpeakers.length})</h3>
        {initialSpeakers.length === 0 ? (
          <p className="text-sm text-gray-500">No speakers yet. Add the first one above.</p>
        ) : (
          <div className="space-y-4">
            {initialSpeakers.map((s) => (
              <div key={s.id} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-gray-900">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.title || ''}{s.organization ? ` • ${s.organization}` : ''}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${s.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                      {s.published ? 'Published' : 'Draft'}
                    </span>
                    <button onClick={() => setEditingId(editingId === s.id ? null : s.id)} className="text-sm font-bold text-emerald-700 hover:text-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-200">
                      {editingId === s.id ? 'Close' : 'Edit'}
                    </button>
                    <button onClick={() => handleDelete(s.id, s.name)} className="text-sm font-bold text-red-600 hover:text-red-800 px-3 py-1.5 rounded-lg border border-red-200">
                      Delete
                    </button>
                  </div>
                </div>
                {editingId === s.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <SpeakerForm initial={s} submitLabel="Save Changes" onSubmit={(d) => updateSpeaker(s.id, d)} onCancel={() => setEditingId(null)} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
