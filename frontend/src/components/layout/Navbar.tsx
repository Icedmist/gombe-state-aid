import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl text-green-800 tracking-tight">
              Gombe AIDS Summit 2026
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium text-sm">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium text-sm">About</Link>
            <Link href="/programme" className="text-gray-700 hover:text-green-600 font-medium text-sm">Programme</Link>
            <Link href="/speakers" className="text-gray-700 hover:text-green-600 font-medium text-sm">Speakers</Link>
            <Link href="/abstracts" className="text-gray-700 hover:text-green-600 font-medium text-sm">Abstracts</Link>
            <Link href="/partners" className="text-gray-700 hover:text-green-600 font-medium text-sm">Partners</Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium text-sm">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/abstracts/submit" className="text-sm font-medium text-green-700 hover:text-green-800">
              Submit Abstract
            </Link>
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors">
              Register
            </Link>
          </div>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  );
}
