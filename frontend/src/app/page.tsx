import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white selection:bg-red-100 selection:text-red-900">
      
      {/* ULTRA-MODERN HERO SECTION */}
      <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden">
        {/* Minimalist Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50 rounded-full blur-[120px] opacity-50 z-0 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            Official State Event
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.95] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Gombe State<br />
            2026 AIDS Summit<span className="text-red-600">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Integrate, fund, sustain, and own the TB-HIV response. A unified global mandate observing World AIDS Day.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/register" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_4px_14px_0_rgb(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)]">
              Register as Delegate
            </Link>
            <Link href="/abstracts" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-sm">
              Submit Abstracts
            </Link>
          </div>
        </div>
      </section>

      {/* MINIMALIST COUNTDOWN & QUICK INFO */}
      <section className="relative z-20 -mt-24 mb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Countdown to World AIDS Day</h3>
                <Countdown />
              </div>
              <div className="hidden lg:block w-px h-24 bg-gray-100"></div>
              <div className="flex-1 grid grid-cols-2 gap-8 w-full">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Date</div>
                  <div className="text-xl font-bold text-gray-900">01 Dec 2026</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Location</div>
                  <div className="text-xl font-bold text-gray-900">To Be Announced</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Vendor Booth</div>
                  <div className="text-xl font-bold text-gray-900">₦10,000</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Status</div>
                  <div className="text-xl font-bold text-red-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span> Open
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ULTRA-CLEAN OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
                A Global Mandate:<br/>World AIDS Day.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-normal">
                The Gombe State 2026 AIDS Summit officially aligns with World AIDS Day, a global event observed every year on December 1st. We are uniting medical professionals, NGOs, and government responders on this historic day to tackle the TB-HIV crisis head-on and show support for those affected globally.
              </p>
              <Link href="/about" className="inline-flex items-center text-gray-900 font-semibold text-lg hover:text-red-600 transition-colors group">
                Read the Health Directives
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Clinical Protocols", desc: "Aligning emergency response with community needs." },
                { title: "Medical Innovation", desc: "Sharing clinical breakthroughs and program science." },
                { title: "Resource Mobilization", desc: "Securing funding for emergency health interventions." },
                { title: "Partnership", desc: "Building resilient front-line networks." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ELEGANT PILLARS SECTION */}
      <section className="py-32 bg-gray-50 rounded-t-[3rem] mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Pillars of the 2026 Response</h2>
            </div>
            <Link href="/programme" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-red-600 transition-colors">
              View Programme &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Strengthening resource mobilization in the face of decline external funding.",
              "Integrate, innovate and fund.",
              "Building a Resilient, People-Centred TB-HIV Response for Gombe State.",
              "TB/HIV program science in Gombe state: where we are and what next.",
              "One plan, coordinated action and shared responsibility."
            ].map((theme, i) => (
              <div key={i} className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-bold text-red-600 mb-6">0{i + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 leading-snug tracking-tight group-hover:text-red-600 transition-colors">
                  {theme}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINIMALIST PARTNERSHIP SECTION */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">
            Institutional Partnerships
          </h2>
          <p className="text-xl text-gray-500 mb-12 font-medium">
            Join hands with the Gombe State Government and medical responders to support the TB-HIV health intervention.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-full font-semibold text-lg transition-all">
              Book Exhibition Booth
            </Link>
            <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-10 py-4 rounded-full font-semibold text-lg transition-all">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
