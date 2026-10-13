import { prisma } from '@/lib/prisma'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

type StoredFile = {
  name?: string
  filename?: string
  path?: string
  url?: string
  bucket?: string
  size?: number
}

function normalizeFile(f: unknown): { name: string; path: string; bucket?: string; url?: string } {
  if (typeof f === 'string') {
    return { name: f.split('/').pop() || 'Attachment', path: f }
  }
  if (f && typeof f === 'object') {
    const item = f as StoredFile
    const path = item.path || ''
    const name = item.name || item.filename || (path ? path.split('/').pop() : '') || 'Attachment'
    return { name, path, bucket: item.bucket, url: item.url }
  }
  return { name: 'Attachment', path: '' }
}

export default async function AdminSent() {
  const sends = await prisma.sentEmail.findMany({ orderBy: { sentAt: 'desc' }, take: 100 })
  const supabase = getSupabaseAdmin()

  const links = await Promise.all(
    sends.map(async (s) => {
      const rawFiles = Array.isArray(s.attachments) ? s.attachments : []
      const urls: Record<string, string> = {}
      if (supabase) {
        for (const raw of rawFiles) {
          const f = normalizeFile(raw)
          if (f.url) {
            urls[f.path || f.name] = f.url
            continue
          }
          if (!f.path) continue

          try {
            const bucket = f.bucket || 'email-attachments'
            let signedUrl: string | null = null
            const { data } = await supabase.storage.from(bucket).createSignedUrl(f.path, 3600, { download: f.name })
            if (data?.signedUrl) {
              signedUrl = data.signedUrl
            } else {
              // Fallback to abstracts bucket if needed
              const { data: fallbackData } = await supabase.storage.from('abstracts').createSignedUrl(f.path, 3600, { download: f.name })
              if (fallbackData?.signedUrl) {
                signedUrl = fallbackData.signedUrl
              }
            }
            if (signedUrl) urls[f.path] = signedUrl
          } catch (storageErr) {
            console.warn(`Error generating signed URL for ${f.path}:`, storageErr)
          }
        }
      }
      return { id: s.id, urls }
    })
  )

  const urlFor = (id: string, path: string) => links.find((l) => l.id === id)?.urls[path] || null

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Sent Mail</h2>
      <p className="text-sm text-gray-500 mb-6">Broadcasts dispatched from the composer, with archived attachments ({sends.length} stored).</p>
      {sends.length === 0 ? (
        <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-12 text-center">
          <p className="text-gray-500 font-medium">Nothing sent yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sends.map((s) => {
            const rawFiles = Array.isArray(s.attachments) ? s.attachments : []
            const files = rawFiles.map(normalizeFile)
            return (
              <div key={s.id} className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 truncate">{s.subject}</div>
                    <div className="text-sm text-gray-500">
                      From {s.fromName} &lt;{s.fromLocal}@gombestateaidsummit.ng&gt; • {s.recipientCount} recipient{s.recipientCount === 1 ? '' : 's'} • {s.audience}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap shrink-0">{s.sentAt.toLocaleString()}</div>
                </div>
                {files.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                    {files.map((f, idx) => {
                      const url = urlFor(s.id, f.path) || f.url
                      const key = f.path || `${s.id}-${idx}`
                      return url ? (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg px-3 py-1.5 transition"
                        >
                          <span>📎</span>
                          <span>{f.name}</span>
                        </a>
                      ) : (
                        <span
                          key={key}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5"
                        >
                          <span>📎</span>
                          <span>{f.name}</span>
                        </span>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
