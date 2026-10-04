import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-sm transform rotate-45"></div>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Gombe AIDS Summit<span className="text-red-600">.</span>
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8 font-medium">
              An official initiative by the Gombe State Ministry of Health to integrate, fund, sustain, and own the TB-HIV response.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-gray-900">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/about" className="hover:text-red-600 transition-colors">About the Summit</Link></li>
              <li><Link href="/programme" className="hover:text-red-600 transition-colors">Official Programme</Link></li>
              <li><Link href="/speakers" className="hover:text-red-600 transition-colors">Speakers & Guests</Link></li>
              <li><Link href="/news" className="hover:text-red-600 transition-colors">News & Announcements</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-gray-900">Participate</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/register" className="hover:text-red-600 transition-colors">Delegate Registration</Link></li>
              <li><Link href="/register" className="hover:text-red-600 transition-colors">Exhibition & Vendors</Link></li>
              <li><Link href="/abstracts" className="hover:text-red-600 transition-colors">Call for Abstracts</Link></li>
              <li><Link href="/partners" className="hover:text-red-600 transition-colors">Partnership Inquiry</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-gray-900">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-red-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-gray-400">
          <p>&copy; 2026 Gombe State Government, Ministry of Health.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest text-[10px]">World AIDS Day Global Observance</p>
        </div>
      </div>
    </footer>
  );
}
