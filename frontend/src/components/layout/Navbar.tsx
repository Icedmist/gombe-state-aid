'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-3 z-50 mx-3 sm:mx-6 rounded-[1.75rem] border border-emerald-950/5 bg-milk shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center transform group-hover:-rotate-3 transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase transition-colors">Gombe State Government</span>
              <span className="font-black text-2xl text-emerald-950 tracking-tight leading-none mt-0.5">
                HIV-TB SUMMIT<span className="text-rose-600">.</span>
              </span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300">About</Link>
            <Link href="/programme" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300">Programme</Link>
            <Link href="/speakers" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300">Speakers</Link>
            <Link href="/abstracts" className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300">Abstracts</Link>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/abstracts/submit" className="text-sm font-bold text-emerald-950 hover:text-rose-600 transition-colors duration-300 uppercase tracking-wide">
              Submit Abstract
            </Link>
            <Link href="/register" className="bg-rose-600 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_4px_14px_0_rgba(225,29,72,0.39)] hover:shadow-[0_6px_20px_rgba(225,29,72,0.23)] hover:-translate-y-0.5">
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
