'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/75 backdrop-blur-xl shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center transform group-hover:-rotate-3 transition-transform shadow-lg shadow-emerald-600/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.25em] text-emerald-600 uppercase">Gombe State Government</span>
              <span className="font-black text-2xl text-slate-900 tracking-tight leading-none mt-1">
                HIV-TB SUMMIT<span className="text-rose-600">.</span>
              </span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wider transition-colors">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wider transition-colors">About</Link>
            <Link href="/programme" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wider transition-colors">Programme</Link>
            <Link href="/speakers" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wider transition-colors">Speakers</Link>
            <Link href="/abstracts" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wider transition-colors">Abstracts</Link>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/abstracts/submit" className="text-sm font-bold text-emerald-950 hover:text-rose-600 transition-colors uppercase tracking-wide">
              Submit Abstract
            </Link>
            <Link href="/register" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Register
            </Link>
          </div>

          <div className="lg:hidden">
            <button className="text-emerald-950 p-2">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
