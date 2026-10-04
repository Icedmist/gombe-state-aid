import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      {/* HEALTH & EMERGENCY HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-center bg-gray-900 overflow-hidden">
        {/* Dynamic Health Overlay & Pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-900/40 via-[#0A2518]/80 to-gray-900 z-0"></div>
        
        {/* Heartbeat / ECG SVG line running across */}
        <svg className="absolute bottom-1/4 w-full h-32 text-red-600/20 z-0 animate-[slide_10s_linear_infinite]" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none" stroke="currentColor">
          <path d="M0,50 L200,50 L220,20 L240,90 L260,10 L280,70 L300,50 L1000,50" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-24 pb-32">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/></svg>
              </div>
              <span className="text-red-400 font-bold tracking-[0.2em] text-sm uppercase">Public Health Emergency Response</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
              GOMBE STATE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">TB-HIV</span> SUMMIT
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 font-light mb-12 max-w-3xl leading-snug border-l-4 border-red-600 pl-6">
              "Integrate, fund, sustain and own TB-HIV Response"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black text-center transition-all text-lg tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] transform hover:-translate-y-1 hover:scale-105">
                REGISTER AS DELEGATE
              </Link>
              <Link href="/vendors" className="bg-white hover:bg-gray-100 text-red-900 px-10 py-5 rounded-sm font-bold text-center transition-all text-lg tracking-wide shadow-lg transform hover:-translate-y-1">
                EXHIBITION & VENDORS
              </Link>
            </div>

            {/* Countdown Component */}
            <div className="mt-8">
              <h3 className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">Time Remaining to Summit</h3>
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="bg-red-700 text-white py-6 border-y-4 border-red-900 relative z-30 shadow-xl">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-red-500/50">
            <div className="px-6 flex items-center justify-center md:justify-start gap-4">
              <svg className="w-8 h-8 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-red-300">Date</div>
                <div className="text-lg font-black tracking-wide">01 / 12 / 2026</div>
              </div>
            </div>
            <div className="px-6 pt-4 md:pt-0 flex items-center justify-center md:justify-start gap-4">
              <svg className="w-8 h-8 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-red-300">Location</div>
                <div className="text-lg font-black tracking-wide">Will Soon Be Available</div>
              </div>
            </div>
            <div className="px-6 pt-4 md:pt-0 flex items-center justify-center md:justify-start gap-4">
              <svg className="w-8 h-8 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-red-300">Vendors/Exhibition</div>
                <div className="text-lg font-black tracking-wide">₦ 10,000 Registration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH OVERVIEW */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight border-l-8 border-red-600 pl-6">
                A Global Mandate: World AIDS Day.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                The Gombe State 2026 AIDS Summit officially aligns with **World AIDS Day**, a global event observed every year on December 1st. We are uniting medical professionals, NGOs, and government responders on this historic day to tackle the TB-HIV crisis head-on and show support for those affected globally.
              </p>
              <Link href="/about" className="inline-flex items-center text-red-700 font-bold text-lg hover:text-red-800 transition-colors group">
                Read the Health Directives
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-red-50 rounded-full blur-3xl opacity-50 z-0"></div>
              {[
                { title: "Clinical Protocols", desc: "Aligning emergency response with community needs." },
                { title: "Medical Innovation", desc: "Sharing clinical breakthroughs and program science." },
                { title: "Resource Mobilization", desc: "Securing funding for emergency health interventions." },
                { title: "Partnership", desc: "Building resilient front-line networks." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-xl relative z-10 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/></svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS / THEMES SECTION (RESTORED) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-red-700 font-bold tracking-widest text-sm uppercase mb-3 block">Sub-Themes</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Pillars of the 2026 Response</h2>
            </div>
            <Link href="/programme" className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 font-bold text-sm transition-colors rounded-sm inline-block shadow-md">
              VIEW PROGRAMME
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Strengthening resource mobilization in the face of decline external funding.",
              "Integrate, innovate and fund.",
              "Building a Resilient, People-Centred TB-HIV Response for Gombe State.",
              "TB/HIV program science in Gombe state: where we are and what next.",
              "One plan, coordinated action and shared responsibility."
            ].map((theme, i) => (
              <div key={i} className="group relative bg-white p-10 hover:bg-red-700 transition-colors duration-300 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
                <div className="text-5xl font-black text-gray-100 group-hover:text-red-800/50 transition-colors mb-6 font-serif">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors leading-snug relative z-10">
                  {theme}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT / CTA SECTION (RESTORED) */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-red-800 transform skew-x-[-20deg] origin-top opacity-30 pointer-events-none"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Call for Abstracts</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Share your research, clinical innovations, and epidemiological evidence contributing to a stronger TB-HIV response. Help shape the scientific dialogue of Gombe State's health architecture.
          </p>
          <Link href="/abstracts" className="inline-block bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-sm font-black text-lg uppercase tracking-wider transition-transform transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(220,38,38,0.2)]">
            SUBMIT YOUR RESEARCH
          </Link>
        </div>
      </section>

      {/* PARTNERSHIP CTA (RESTORED) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <span className="w-16 h-16 mx-auto bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
            Institutional Partnerships
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Join hands with the Gombe State Government and medical responders to support the TB-HIV health intervention. Discover partnership and sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/partners" className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 font-black text-center transition-colors text-sm uppercase tracking-wide rounded-sm shadow-md">
              Explore Partnerships
            </Link>
            <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 font-black text-center transition-colors text-sm uppercase tracking-wide rounded-sm">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
