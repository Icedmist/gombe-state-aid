'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-xl shadow-inner">
              +
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Gombe State Government</span>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight leading-none mt-0.5">
                AIDS SUMMIT
              </span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-red-600 font-bold text-sm transition-colors">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-red-600 font-bold text-sm transition-colors">About</Link>
            <Link href="/programme" className="text-slate-600 hover:text-red-600 font-bold text-sm transition-colors">Programme</Link>
            <Link href="/speakers" className="text-slate-600 hover:text-red-600 font-bold text-sm transition-colors">Speakers</Link>
            <Link href="/abstracts" className="text-slate-600 hover:text-red-600 font-bold text-sm transition-colors">Abstracts</Link>
            <Link href="/partners" className="text-slate-600 hover:text-red-600 font-bold text-sm transition-colors">Partners</Link>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-5">
            <Link href="/abstracts/submit" className="text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors">
              Submit Abstract
            </Link>
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-sm font-bold text-sm transition-all shadow-md">
              Register / Exhibition
            </Link>
          </div>

          <div className="lg:hidden">
            <button className="text-slate-900 p-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
