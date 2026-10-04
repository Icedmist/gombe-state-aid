import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-[6px] border-rose-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">Gombe State 2026<br/>AIDS Summit</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              An official medical and policy initiative by the Gombe State Ministry of Health to integrate, fund, sustain, and own the TB-HIV response.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-slate-500">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-rose-400 transition-colors">About the Summit</Link></li>
              <li><Link href="/programme" className="hover:text-rose-400 transition-colors">Official Programme</Link></li>
              <li><Link href="/speakers" className="hover:text-rose-400 transition-colors">Clinical Speakers</Link></li>
              <li><Link href="/news" className="hover:text-rose-400 transition-colors">News & Announcements</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-slate-500">Participate</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/register" className="hover:text-rose-400 transition-colors">Delegate Registration</Link></li>
              <li><Link href="/abstracts" className="hover:text-rose-400 transition-colors">Call for Abstracts</Link></li>
              <li><Link href="/partners" className="hover:text-rose-400 transition-colors">Partnership Inquiry</Link></li>
              <li><Link href="/contact" className="hover:text-rose-400 transition-colors">Contact Secretariat</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-slate-500">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy" className="hover:text-rose-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-rose-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/resources" className="hover:text-rose-400 transition-colors">Medical Library</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
          <p>&copy; 2026 Gombe State Government.</p>
          <p className="mt-2 md:mt-0 text-rose-500/80">World AIDS Day Global Observance</p>
        </div>
      </div>
    </footer>
  );
}
