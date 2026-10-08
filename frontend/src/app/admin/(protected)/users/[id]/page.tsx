import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function AdminUserDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const user = await prisma.user.findUnique({
    where: { id },
    include: { auditLogs: { take: 10, orderBy: { createdAt: 'desc' } } },
  })
  if (!user) notFound()

  const rows: Array<[string, string]> = [
    ['ID', user.id],
    ['Name', user.name || '-'],
    ['Email', user.email],
    ['Role', user.role],
    ['Joined', user.createdAt.toLocaleString()],
    ['Last updated', user.updatedAt.toLocaleString()],
  ]

  return (
    <div>
      <Link href="/admin/users" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 mb-4 inline-block">
        &larr; Back to users
      </Link>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">User Details</h2>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6 mb-6">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{k}</dt>
              <dd className="text-sm text-gray-900 break-all">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
        {user.auditLogs.length === 0 ? (
          <p className="text-sm text-gray-500">No recorded activity.</p>
        ) : (
          <ul className="space-y-2">
            {user.auditLogs.map((log) => (
              <li key={log.id} className="text-sm text-gray-700 border-b border-gray-100 last:border-0 pb-2">
                <span className="font-semibold">{log.action}</span>
                {` on ${log.entityType}`}{log.entityId ? ` (${log.entityId})` : ''} — {log.createdAt.toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
