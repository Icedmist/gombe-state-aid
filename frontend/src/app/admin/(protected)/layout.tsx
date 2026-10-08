import Link from 'next/link'
import { redirect } from 'next/navigation'
import { logoutAdmin } from '@/actions/admin-session'
import { isAdminAuthenticated } from '@/lib/admin-auth'

const LINKS = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/registrations', label: 'Registrations' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/abstracts', label: 'Abstracts' },
  { href: '/admin/speakers', label: 'Speakers' },
  { href: '/admin/programme', label: 'Programme' },
  { href: '/admin/partners', label: 'Partners & Sponsors' },
  { href: '/admin/news', label: 'News' },
  { href: '/admin/checkin', label: 'QR Check-in' },
  { href: '/admin/settings', label: 'Settings' },
]

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login')
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-emerald-950 text-white flex flex-col">
        <div className="p-4 border-b border-emerald-900">
          <h2 className="text-xl font-bold tracking-tight">Admin CMS</h2>
          <p className="text-xs text-emerald-400 mt-1">Gombe AIDS Summit</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block px-4 py-2 rounded text-sm font-medium hover:bg-emerald-900 transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-emerald-900">
          <form action={logoutAdmin}>
            <button type="submit" className="w-full text-left px-4 py-2 text-sm text-emerald-300 hover:text-white hover:bg-emerald-900 rounded transition">
              Sign Out
            </button>
          </form>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-b h-16 flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Super Admin</span>
            <div className="h-8 w-8 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold">
              SA
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
