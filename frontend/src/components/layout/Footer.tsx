import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white px-3 sm:px-6 pb-6 pt-2">
      <div className="bg-emerald-950 text-emerald-100 pt-20 pb-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-emerald-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">Gombe State 2026<br/>AIDS Summit</h3>
            </div>
            <p className="text-emerald-200/70 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              An official medical and policy initiative by the Gombe State Ministry of Health to integrate, fund, sustain, and own the TB-HIV response.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-emerald-500">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About the Summit</Link></li>
              <li><Link href="/programme" className="hover:text-white transition-colors">Official Programme</Link></li>
              <li><Link href="/speakers" className="hover:text-white transition-colors">Clinical Speakers</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Announcements</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-emerald-500">Participate</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/register" className="hover:text-white transition-colors">Delegate Registration</Link></li>
              <li><Link href="/abstracts" className="hover:text-white transition-colors">Call for Abstracts</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Partnership Inquiry</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Secretariat</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-emerald-500">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Medical Library</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-emerald-700 uppercase tracking-widest">
          <p>&copy; 2026 Gombe State Government.</p>
          <p className="mt-2 md:mt-0 text-emerald-500/80">World AIDS Day Global Observance</p>
        </div>
        </div>
      </div>
    </footer>
  );
}
