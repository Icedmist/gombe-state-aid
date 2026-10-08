'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAdmin } from '@/actions/admin-session'

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    const result = await loginAdmin(password)
    if (result.success) {
      router.push('/admin')
      router.refresh()
    } else {
      setStatus('error')
      setError(result.error || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md">
        <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h1 className="text-2xl font-black text-emerald-950 mb-2">Admin Sign In</h1>
        <p className="text-sm text-slate-500 mb-8">Gombe State 2026 HIV-TB Summit CMS</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-300 p-3 bg-slate-50 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          {status === 'error' && (
            <div className="bg-red-50 text-red-700 p-3 rounded-xl text-sm font-semibold text-center">{error}</div>
          )}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl transition-colors uppercase tracking-widest text-sm disabled:opacity-60"
          >
            {status === 'submitting' ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
