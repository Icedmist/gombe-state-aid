import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Gombe State 2026 AIDS Summit</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Integrate, fund, sustain and own TB-HIV Response. <br />
              Stronger Partnerships for a Healthier, HIV & TB Free Gombe State.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-200">Quick Links</h4>
            <ul className="space-y-2 text-sm text-green-100">
              <li><Link href="/about" className="hover:text-white transition">About the Summit</Link></li>
              <li><Link href="/programme" className="hover:text-white transition">Programme</Link></li>
              <li><Link href="/speakers" className="hover:text-white transition">Speakers</Link></li>
              <li><Link href="/partners" className="hover:text-white transition">Partners & Sponsors</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-200">Participate</h4>
            <ul className="space-y-2 text-sm text-green-100">
              <li><Link href="/register" className="hover:text-white transition">Registration</Link></li>
              <li><Link href="/abstracts/submit" className="hover:text-white transition">Abstract Submission</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-200">Legal</h4>
            <ul className="space-y-2 text-sm text-green-100">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-300">
          <p>&copy; 2026 Gombe State AIDS Summit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
