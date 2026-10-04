import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t-4 border-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center border border-red-600/30">
                <div className="w-6 h-6 rounded-full border border-red-500 border-dashed"></div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Gombe State 2026<br/>AIDS Summit</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              An official initiative by the Gombe State Ministry of Health to integrate, fund, sustain, and own the TB-HIV response.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center cursor-pointer transition-colors border border-white/10">
                <span className="text-xs font-bold">X</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center cursor-pointer transition-colors border border-white/10">
                <span className="text-xs font-bold">IN</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-red-500">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><Link href="/about" className="hover:text-red-400 transition-colors">About the Summit</Link></li>
              <li><Link href="/programme" className="hover:text-red-400 transition-colors">Official Programme</Link></li>
              <li><Link href="/speakers" className="hover:text-red-400 transition-colors">Speakers & Guests</Link></li>
              <li><Link href="/news" className="hover:text-red-400 transition-colors">News & Announcements</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-red-500">Participate</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><Link href="/register" className="hover:text-red-400 transition-colors">Delegate Registration</Link></li>
              <li><Link href="/abstracts/submit" className="hover:text-red-400 transition-colors">Call for Abstracts</Link></li>
              <li><Link href="/partners" className="hover:text-red-400 transition-colors">Partnership Inquiry</Link></li>
              <li><Link href="/contact" className="hover:text-red-400 transition-colors">Contact Secretariat</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-red-500">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><Link href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-red-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/resources" className="hover:text-red-400 transition-colors">Document Library</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-gray-500">
          <p>&copy; 2026 Gombe State Government, Ministry of Health. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Developed for the Official AIDS Summit Framework</p>
        </div>
      </div>
    </footer>
  );
}
