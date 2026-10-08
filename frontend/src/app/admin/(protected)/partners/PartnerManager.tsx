'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPartner, deletePartner, updatePartner, type PartnerInput } from '@/actions/admin'

type Row = PartnerInput & { id: string }
type Kind = 'partner' | 'sponsor'

const EMPTY: PartnerInput = { name: '', description: '', category: '', logoUrl: '', websiteUrl: '', order: 0, published: false }

export default function PartnerManager({ kind, title, initial }: { kind: Kind; title: string; initial: Row[] }) {
  const router = useRouter()
  const [showAdd, setShowAdd] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<PartnerInput>(EMPTY)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  const set = (key: keyof PartnerInput, value: string | boolean | number) =>
    setForm((d) => ({ ...d, [key]: value }))

  const startEdit = (row: Row) => {
    setEditingId(row.id)
    setForm({ ...row })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    const result = editingId
      ? await updatePartner(kind, editingId, form)
      : await createPartner(kind, form)
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

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"?`)) return
    const result = await deletePartner(kind, id)
    if (result.success) router.refresh()
    else alert(result.error || 'Delete failed')
  }

  const input = 'w-full rounded-xl border border-gray-300 p-2.5 bg-gray-50 text-sm focus:border-emerald-500 focus:ring-emerald-500'

  const formJsx = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Name *</label>
          <input required value={form.name} onChange={(e) => set('name', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Category</label>
          <input value={form.category || ''} onChange={(e) => set('category', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Logo URL</label>
          <input value={form.logoUrl || ''} onChange={(e) => set('logoUrl', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Website URL</label>
          <input value={form.websiteUrl || ''} onChange={(e) => set('websiteUrl', e.target.value)} className={input} />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1">Display Order</label>
          <input type="number" value={form.order ?? 0} onChange={(e) => set('order', Number(e.target.value))} className={input} />
        </div>
        <div className="flex items-end pb-1">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input type="checkbox" checked={form.published ?? false} onChange={(e) => set('published', e.target.checked)} className="rounded text-emerald-600" />
            Published on site
          </label>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-1">Description</label>
        <textarea value={form.description || ''} onChange={(e) => set('description', e.target.value)} rows={2} className={input} />
      </div>
      {error && <div className="bg-red-50 text-red-700 p-2.5 rounded-lg text-sm font-semibold">{error}</div>}
      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-2.5 px-6 rounded-xl text-sm uppercase tracking-widest disabled:opacity-60">
          {saving ? 'Saving...' : editingId ? 'Save Changes' : `Add ${title.slice(0, -1)}`}
        </button>
        <button type="button" onClick={() => { setEditingId(null); setShowAdd(false); setForm(EMPTY); }} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-6 rounded-xl text-sm uppercase tracking-widest">
          Cancel
        </button>
      </div>
    </form>
  )

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{title} ({initial.length})</h3>
        {!editingId && (
          <button onClick={() => setShowAdd((s) => !s)} className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
            {showAdd ? 'Hide form' : `Add ${title.slice(0, -1)}`}
          </button>
        )}
      </div>
      {(showAdd || editingId) && formJsx}
      <div className="space-y-3 mt-4">
        {initial.length === 0 && !showAdd && <p className="text-sm text-gray-500">None yet.</p>}
        {initial.map((row) => (
          <div key={row.id} className="border border-gray-100 rounded-xl p-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-bold text-gray-900">{row.name}</div>
              <div className="text-xs text-gray-500">{row.category || 'Uncategorised'} • order {row.order ?? 0}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${row.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                {row.published ? 'Published' : 'Draft'}
              </span>
              <button onClick={() => startEdit(row)} className="text-sm font-bold text-emerald-700 hover:text-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-200">Edit</button>
              <button onClick={() => handleDelete(row.id, row.name)} className="text-sm font-bold text-red-600 hover:text-red-800 px-3 py-1.5 rounded-lg border border-red-200">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
