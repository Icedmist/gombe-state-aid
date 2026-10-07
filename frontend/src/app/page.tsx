import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* PREMIUM MODERN HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center bg-slate-950 overflow-hidden text-center">
        {/* Ambient Animated Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-600/30 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[150px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-600/10 rounded-[100%] blur-[120px] mix-blend-screen transform -rotate-45 pointer-events-none"></div>
        
        {/* Modern Dot Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pt-32 pb-40 flex flex-col items-center">
          
          {/* Glassmorphic Date Badge */}
          <div className="inline-flex items-center gap-3 mb-10 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 backdrop-blur-xl shadow-2xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="text-slate-200 font-medium tracking-[0.2em] text-[11px] sm:text-xs uppercase">
              1st December 2026 • World AIDS Day
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-black text-white tracking-tighter mb-4 leading-[0.9]">
            GOMBE STATE 2026 <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-emerald-300 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] mt-2">
              HIV-TB SUMMIT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-300/80 italic mb-10 font-light tracking-wide">
            in commemoration with World AIDS Day
          </p>
          
          <p className="text-2xl md:text-3xl font-medium text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
            "Stronger Partnerships for a Healthier, HIV & TB Free Gombe State"
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full sm:w-auto">
            <Link href="/register" className="group relative w-full sm:w-auto bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white px-10 py-4 rounded-full font-semibold text-center transition-all shadow-[0_0_40px_rgba(225,29,72,0.3)] hover:shadow-[0_0_60px_rgba(225,29,72,0.5)] transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 text-sm uppercase tracking-widest">Register as Delegate</span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_ease-out]"></div>
            </Link>
            <Link href="/register" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-slate-100 border border-white/10 px-10 py-4 rounded-full font-semibold text-center transition-all text-sm uppercase tracking-widest backdrop-blur-md hover:border-white/20 transform hover:-translate-y-1">
              Exhibition & Vendors
            </Link>
          </div>
        </div>

        {/* Elegant Bottom Fade to next section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* FLOATING QUICK INFO (WHITE CARD, EMERALD TEXT, MIXED ICONS) */}
      <section className="relative z-30 -mt-24 mx-4 md:mx-auto max-w-6xl">
        <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-8 flex items-center justify-center md:justify-start gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">Date</div>
                <div className="text-lg font-black text-emerald-950">01 Dec 2026</div>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center md:justify-start gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">Location</div>
                <div className="text-lg font-black text-emerald-950">TBA, Gombe</div>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center md:justify-start gap-4 hover:bg-slate-50 transition-colors md:col-span-2">
              <div className="w-12 h-12 bg-emerald-950 text-white rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="w-full text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1 flex justify-between">
                  <span>Countdown</span>
                  <span className="text-rose-600 hidden sm:inline">Registration Open</span>
                </div>
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH OVERVIEW */}
      <section className="pt-32 pb-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-1 bg-emerald-500 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight tracking-tight">
                A Global Mandate:<br/>World AIDS Day.
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                The Gombe State 2026 AIDS Summit officially aligns with World AIDS Day, uniting program experts, health professionals, and government responders to decisively strengthen the TB-HIV program innovation and state response.
              </p>
              <Link href="/about" className="inline-flex items-center text-emerald-950 font-bold text-lg hover:text-emerald-700 transition-colors group uppercase tracking-widest text-sm">
                Read our vision
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Program Innovation", desc: "Sharing program breakthroughs and science." },
                { title: "Resource Mobilization", desc: "Securing sustainable funding for health facilities." },
                { title: "Frontline Partnership", desc: "Building resilient stakeholder networks." },
                { title: "State Response", desc: "Aligning government action with community needs." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-emerald-100">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS / SUBTHEMES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-3 block">Sub-Themes</span>
              <h2 className="text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">Pillars of the Health Response</h2>
            </div>
            <Link href="/programme" className="bg-emerald-950 text-white hover:bg-emerald-900 px-8 py-4 font-bold text-sm transition-colors rounded-lg shadow-md uppercase tracking-widest">
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
              <div key={i} className="group relative bg-slate-50 p-10 hover:bg-emerald-950 transition-colors duration-300 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="text-5xl font-black text-emerald-100 group-hover:text-emerald-800 transition-colors mb-6 font-serif">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </div>
                <h3 className="text-xl font-bold text-emerald-950 group-hover:text-white transition-colors leading-snug">
                  {theme}
                </h3>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-teal-400 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABSTRACTS CTA (ROSE RED) */}
      <section className="relative py-32 bg-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-rose-700 transform skew-x-[-20deg] origin-top opacity-50 pointer-events-none"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Call for Abstracts</h2>
          <p className="text-xl text-rose-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Share your clinical research, medical innovations, and epidemiological evidence contributing to a stronger TB-HIV response. Help shape the scientific dialogue.
          </p>
          <Link href="/abstracts" className="inline-block bg-emerald-950 hover:bg-emerald-900 text-white px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest transition-transform transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(2,44,34,0.3)]">
            Submit Your Research
          </Link>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-6 tracking-tight">
            Institutional Partnerships
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
            Join hands with the Gombe State Government and other clinical stakeholders to support the TB-HIV response. Discover partnership and sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/partners" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 font-bold text-center transition-colors text-sm uppercase tracking-widest rounded-lg shadow-md">
              Explore Partnerships
            </Link>
            <Link href="/contact" className="bg-white hover:bg-slate-50 text-emerald-950 border border-slate-300 px-10 py-4 font-bold text-center transition-colors text-sm uppercase tracking-widest rounded-lg">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
