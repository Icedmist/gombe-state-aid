import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      
      {/* PREMIUM HEALTH HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-slate-950 overflow-hidden">
        {/* Medical / Emergency Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-red-900/40 via-slate-950 to-slate-950 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0"></div>
        
        {/* Subtle Health Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-red-600 text-white font-bold rounded-sm text-lg">+</div>
              <span className="text-red-400 font-bold tracking-[0.2em] text-sm uppercase">Global Health Initiative</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.05]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-slate-400">GOMBE STATE 2026</span><br />
              AIDS SUMMIT
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-12 max-w-3xl leading-snug border-l-4 border-red-500 pl-6">
              "Integrate, fund, sustain and own TB-HIV Response"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/register" className="bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-sm font-bold text-center transition-transform transform hover:-translate-y-1 text-lg uppercase tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                REGISTER AS DELEGATE
              </Link>
              <Link href="/register" className="bg-transparent hover:bg-blue-900/30 text-blue-200 border border-blue-500/50 px-10 py-5 rounded-sm font-bold text-center transition-colors text-lg uppercase tracking-wide">
                EXHIBITION & VENDORS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP WITH COUNTDOWN */}
      <section className="bg-white border-y border-slate-200 relative z-30 shadow-2xl -mt-12 mx-4 md:mx-auto max-w-6xl rounded-sm">
        <div className="px-8 py-10 border-t-4 border-t-red-600">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100 items-center">
            <div className="px-4">
              <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Global Event</div>
              <div className="text-lg font-bold text-slate-900">World AIDS Day</div>
            </div>
            <div className="px-4">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Date</div>
              <div className="text-lg font-bold text-slate-900">1st December 2026</div>
            </div>
            <div className="px-4">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Location</div>
              <div className="text-lg font-bold text-slate-900">To be announced</div>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Countdown</div>
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* SUMMIT OVERVIEW */}
      <section className="pt-32 pb-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Health Mandate</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                A Global Mandate: World AIDS Day.
              </h2>
              <Link href="/about" className="inline-flex items-center text-red-600 font-bold text-lg hover:text-red-700 transition-colors group">
                Read our full vision
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                The Gombe State 2026 AIDS Summit officially aligns with World AIDS Day, uniting clinical experts, health professionals, development partners, and civil society to decisively strengthen the TB-HIV medical response.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Clinical Protocols", desc: "Aligning government medical action with community needs." },
                  { title: "Medical Innovation", desc: "Sharing clinical breakthroughs and program science." },
                  { title: "Resource Mobilization", desc: "Securing sustainable funding for health facilities." },
                  { title: "Frontline Partnership", desc: "Building resilient medical stakeholder networks." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 border-l-4 border-blue-500 shadow-sm rounded-r-sm">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN THEMES SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-red-600 font-bold tracking-widest text-sm uppercase mb-3 block">Sub-Themes</span>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Pillars of the Health Response</h2>
            </div>
            <Link href="/programme" className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 font-bold text-sm transition-colors rounded-sm inline-block shadow-md uppercase tracking-wider">
              View Programme
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
              <div key={i} className="group relative bg-slate-50 p-10 hover:bg-blue-900 transition-colors duration-300 rounded-sm overflow-hidden border border-slate-200 shadow-sm">
                <div className="absolute right-0 top-0 w-24 h-24 bg-red-600 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110 opacity-10 group-hover:opacity-100"></div>
                <div className="text-5xl font-extrabold text-slate-200 group-hover:text-blue-800/50 transition-colors mb-6 font-serif relative z-10">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors leading-snug relative z-10">
                  {theme}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT / CTA SECTION */}
      <section className="relative py-32 bg-red-700 text-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-red-800 transform skew-x-[-20deg] origin-top opacity-30 pointer-events-none"></div>
        {/* Subtle cross pattern on the red */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Call for Abstracts</h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Share your clinical research, medical innovations, and epidemiological evidence contributing to a stronger TB-HIV response. Help shape the scientific dialogue of Gombe State's future health architecture.
          </p>
          <Link href="/abstracts" className="inline-block bg-white hover:bg-slate-100 text-red-900 px-10 py-5 rounded-sm font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
            SUBMIT YOUR RESEARCH
          </Link>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <span className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Institutional Partnerships
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Join hands with the Gombe State Government and other clinical stakeholders to support the TB-HIV response. Discover partnership and sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/partners" className="bg-slate-900 hover:bg-black text-white px-8 py-4 font-bold text-center transition-colors text-sm uppercase tracking-wide rounded-sm shadow-md">
              Explore Partnerships
            </Link>
            <Link href="/contact" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-4 font-bold text-center transition-colors text-sm uppercase tracking-wide rounded-sm">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
