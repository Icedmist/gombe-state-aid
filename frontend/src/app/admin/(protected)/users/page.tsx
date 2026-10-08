import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function AdminUsers() {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Users</h2>
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Email</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Role</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Joined</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Details</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-gray-500">
                    No users yet. Run the seed script to create the initial admin user.
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
                    <td className="py-3 px-4 text-sm font-semibold text-gray-900">{u.name || '-'}</td>
                    <td className="py-3 px-4 text-sm">{u.email}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-medium border border-emerald-100">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">{u.createdAt.toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-sm">
                      <Link href={`/admin/users/${u.id}`} className="text-emerald-700 hover:text-emerald-900 font-semibold">
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
