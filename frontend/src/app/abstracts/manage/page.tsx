'use client'

import { useState } from 'react'
import { lookupAbstracts, updateAbstractSubmission, type AbstractSummary } from '@/actions/abstract'

const input = 'w-full rounded-xl border border-gray-300 p-3 bg-gray-50 text-sm focus:border-emerald-500 focus:ring-emerald-500 transition-all'

export default function ManageAbstract() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'idle' | 'searching' | 'error'>('idle')
  const [error, setError] = useState('')
  const [results, setResults] = useState<AbstractSummary[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const selected = results.find((r) => r.id === selectedId) || null

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('searching')
    setError('')
    setResults([])
    setSelectedId(null)
    setSaved(false)
    const res = await lookupAbstracts(query)
    if (res.success && res.results) {
      setResults(res.results)
      if (res.results.length === 1) setSelectedId(res.results[0].id)
      setStatus('idle')
    } else {
      setStatus('error')
      setError(res.error || 'Not found.')
    }
  }

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selected) return
    setSaving(true)
    setSaved(false)
    setError('')
    const res = await updateAbstractSubmission(selected.id, new FormData(e.currentTarget))
    setSaving(false)
    if (res.success && res.result) {
      setResults(results.map((r) => (r.id === res.result!.id ? res.result! : r)))
      setSaved(true)
    } else {
      setError(res.error || 'Update failed.')
    }
  }

  return (
    <div className="bg-milk py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-3 block">My Abstract</span>
          <h1 className="text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">View & Update</h1>
          <p className="text-slate-500 mt-4">Enter your abstract ID or submission email.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-emerald-950/5 p-6 md:p-8 mb-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              placeholder="Abstract ID or email"
              className="flex-1 rounded-xl border border-slate-300 p-3 bg-milk text-sm focus:border-emerald-500 focus:ring-emerald-500 transition-all"
            />
            <button type="submit" disabled={status === 'searching'} className="bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-3 px-8 rounded-xl text-sm uppercase tracking-widest transition-all disabled:opacity-60">
              {status === 'searching' ? 'Searching...' : 'Find'}
            </button>
          </form>
          {status === 'error' && (
            <div className="mt-3 bg-red-50 text-red-700 p-3 rounded-xl text-sm font-semibold text-center">{error}</div>
          )}
        </div>

        {results.length > 1 && (
          <div className="bg-white rounded-3xl shadow-xl border border-emerald-950/5 p-6 mb-6">
            <h3 className="font-bold text-emerald-950 mb-3">Select submission</h3>
            <div className="space-y-2">
              {results.map((r) => (
                <button
                  key={r.id}
                  onClick={() => { setSelectedId(r.id); setSaved(false); }}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${selectedId === r.id ? 'border-emerald-600 bg-emerald-50 font-bold text-emerald-950' : 'border-slate-200 hover:border-emerald-300 text-slate-700'}`}
                >
                  {r.title} <span className="text-xs text-slate-400">• {r.status}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {selected && (
          <div className="bg-white rounded-3xl shadow-xl border border-emerald-950/5 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-emerald-950">Edit submission</h3>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-yellow-100 text-yellow-800">{selected.status}</span>
            </div>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Title</label>
                <input name="title" required defaultValue={selected.title} className={input} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Lead Author</label>
                  <input name="authorName" required defaultValue={selected.authorName} className={input} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Organization</label>
                  <input name="organization" required defaultValue={selected.organization} className={input} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Co-Authors</label>
                  <input name="coAuthors" defaultValue={selected.coAuthors || ''} className={input} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Phone</label>
                  <input name="phone" defaultValue={selected.phone || ''} className={input} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Theme</label>
                  <select name="themeId" defaultValue={selected.themeId || ''} className={input}>
                    <option value="resource">Resource Mobilization</option>
                    <option value="integrate">Integrate, Innovate, Fund</option>
                    <option value="resilient">Resilient Responses</option>
                    <option value="science">Program Science</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Presentation Type</label>
                  <select name="presentationType" defaultValue={selected.presentationType || ''} className={input}>
                    <option value="">Select type</option>
                    <option>Oral Presentation</option>
                    <option>Poster Presentation</option>
                    <option>Either</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Keywords</label>
                <input name="keywords" defaultValue={selected.keywords || ''} className={input} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Abstract Text</label>
                <textarea name="text" required rows={6} defaultValue={selected.text} className={input} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Replace document (optional)</label>
                <input type="file" name="file" accept=".pdf,.doc,.docx" className="w-full rounded-xl border border-gray-300 p-2.5 bg-gray-50 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-950 file:text-white file:text-xs file:font-bold" />
                {selected.fileUrl && <p className="text-xs text-gray-500 mt-1">A file is already attached; uploading replaces it.</p>}
              </div>
              {error && <div className="bg-red-50 text-red-700 p-3 rounded-xl text-sm font-semibold text-center">{error}</div>}
              {saved && <div className="bg-green-50 text-green-800 p-3 rounded-xl text-sm font-semibold text-center">Saved successfully.</div>}
              <button type="submit" disabled={saving} className="w-full bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl transition-all text-sm uppercase tracking-widest disabled:opacity-60">
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
