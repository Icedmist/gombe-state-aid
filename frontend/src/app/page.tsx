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
                A Critical Health Intervention.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                The Gombe State 2026 AIDS Summit acts as the central health command assembly bringing together medical professionals, NGOs, and government responders to tackle the TB-HIV crisis head-on.
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
    </div>
  );
}
