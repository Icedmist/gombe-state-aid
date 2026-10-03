import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 text-white flex flex-col">
        <div className="p-4 border-b border-green-800">
          <h2 className="text-xl font-bold tracking-tight">Admin CMS</h2>
          <p className="text-xs text-green-300 mt-1">Gombe AIDS Summit</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            <li><Link href="/admin" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">Dashboard</Link></li>
            <li><Link href="/admin/registrations" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">Registrations</Link></li>
            <li><Link href="/admin/abstracts" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">Abstracts</Link></li>
            <li><Link href="/admin/speakers" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">Speakers</Link></li>
            <li><Link href="/admin/programme" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">Programme</Link></li>
            <li><Link href="/admin/partners" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">Partners & Sponsors</Link></li>
            <li><Link href="/admin/news" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">News</Link></li>
            <li><Link href="/admin/settings" className="block px-4 py-2 rounded text-sm font-medium hover:bg-green-800 transition">Settings</Link></li>
          </ul>
        </nav>
        <div className="p-4 border-t border-green-800">
          <button className="w-full text-left px-4 py-2 text-sm text-green-200 hover:text-white hover:bg-green-800 rounded transition">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Super Admin</span>
            <div className="h-8 w-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold">
              SA
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
