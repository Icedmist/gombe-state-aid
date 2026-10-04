'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-4 h-4 bg-red-600 rounded-sm transform rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase">Gombe State Govt</span>
              <span className="font-extrabold text-xl text-gray-900 tracking-tight leading-none mt-0.5">
                AIDS SUMMIT <span className="text-red-600">.</span>
              </span>
            </div>
          </Link>
          
          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">About</Link>
            <Link href="/programme" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Programme</Link>
            <Link href="/speakers" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Speakers</Link>
            <Link href="/abstracts" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Abstracts</Link>
            <Link href="/partners" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Partners</Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white px-7 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_4px_14px_0_rgb(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)]">
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-gray-900 p-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
