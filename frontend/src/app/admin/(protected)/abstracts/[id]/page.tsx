import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { getAbstractFileUrl } from '@/actions/abstract'
import AbstractDecision from './AbstractDecision'

export const dynamic = 'force-dynamic'

export default async function AdminAbstractDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const abs = await prisma.abstract.findUnique({
    where: { id },
    include: { reviews: { orderBy: { createdAt: 'desc' } } },
  })
  if (!abs) notFound()
  const fileUrl = await getAbstractFileUrl(abs.fileUrl)

  const rows: Array<[string, string]> = [
    ['ID', abs.id],
    ['Title', abs.title],
    ['Author', abs.authorName],
    ['Co-authors', abs.coAuthors || '-'],
    ['Email', abs.email],
    ['Phone', abs.phone || '-'],
    ['Organization', abs.organization],
    ['Theme', abs.themeId || '-'],
    ['Presentation type', abs.presentationType || '-'],
    ['Keywords', abs.keywords || '-'],
    ['Status', abs.status],
    ['Submitted', abs.createdAt.toLocaleString()],
  ]

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Abstract Details</h2>
        <AbstractDecision id={abs.id} currentStatus={abs.status} />
      </div>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6 mb-6">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{k}</dt>
              <dd className="text-sm text-gray-900 break-words">{v}</dd>
            </div>
          ))}
          <div>
            <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Document</dt>
            <dd className="text-sm">
              {fileUrl ? (
                <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 font-semibold">
                  View file
                </a>
              ) : (
                <span className="text-gray-400">No file attached</span>
              )}
            </dd>
          </div>
        </dl>
      </div>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Abstract Text</h3>
        <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">{abs.text}</p>
      </div>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Reviews ({abs.reviews.length})</h3>
        {abs.reviews.length === 0 ? (
          <p className="text-sm text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="space-y-3">
            {abs.reviews.map((r) => (
              <li key={r.id} className="border border-gray-100 rounded-xl p-4 text-sm">
                <div className="font-bold text-gray-900">
                  Score: {r.score ?? '-'} • {r.recommendation || 'No recommendation'}
                </div>
                {r.notes && <p className="text-gray-600 mt-1">{r.notes}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
