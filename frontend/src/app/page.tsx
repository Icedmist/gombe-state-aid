import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* PREMIUM STATE GOVERNMENT HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#0A2518] overflow-hidden">
        {/* Subtle Background Patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-900 rounded-full blur-[120px] opacity-40 z-0 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-yellow-500"></div>
              <span className="text-yellow-500 font-bold tracking-[0.2em] text-sm uppercase">Gombe State Official Event</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.05]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">GOMBE STATE 2026</span><br />
              AIDS SUMMIT
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light mb-12 max-w-3xl leading-snug border-l-4 border-red-600 pl-6">
              "Integrate, fund, sustain and own TB-HIV Response"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold text-center transition-transform transform hover:-translate-y-1 text-lg uppercase tracking-wide shadow-lg">
                REGISTER AS DELEGATE
              </Link>
              <Link href="/register" className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-10 py-5 rounded-sm font-bold text-center transition-colors text-lg uppercase tracking-wide">
                EXHIBITION & VENDORS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP WITH COUNTDOWN */}
      <section className="bg-white border-y border-gray-200 relative z-30 shadow-2xl -mt-12 mx-4 md:mx-auto max-w-6xl rounded-sm">
        <div className="px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100 items-center">
            <div className="px-4">
              <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Global Event</div>
              <div className="text-lg font-bold text-gray-900">World AIDS Day</div>
            </div>
            <div className="px-4">
              <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Date</div>
              <div className="text-lg font-bold text-gray-900">1st December 2026</div>
            </div>
            <div className="px-4">
              <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Location</div>
              <div className="text-lg font-bold text-gray-900">To be announced</div>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Countdown</div>
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* SUMMIT OVERVIEW */}
      <section className="pt-32 pb-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
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
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                The Gombe State 2026 AIDS Summit officially aligns with World AIDS Day, uniting government institutions, health professionals, development partners, and civil society organizations to decisively strengthen the TB-HIV response.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Clinical Protocols", desc: "Aligning government action with community needs." },
                  { title: "Knowledge Exchange", desc: "Sharing clinical innovations and program science." },
                  { title: "Resource Mobilization", desc: "Securing sustainable funding strategies." },
                  { title: "Partnership", desc: "Building resilient stakeholder networks." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 border-l-4 border-green-700 shadow-sm rounded-r-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
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
              <span className="text-green-700 font-bold tracking-widest text-sm uppercase mb-3 block">Sub-Themes</span>
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Pillars of the 2026 Response</h2>
            </div>
            <Link href="/programme" className="bg-[#0A2518] text-white hover:bg-green-900 px-8 py-4 font-bold text-sm transition-colors rounded-sm inline-block shadow-md uppercase tracking-wider">
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
              <div key={i} className="group relative bg-gray-50 p-10 hover:bg-[#0A2518] transition-colors duration-300 rounded-lg overflow-hidden border border-gray-100">
                <div className="text-5xl font-extrabold text-gray-200 group-hover:text-green-800/50 transition-colors mb-6 font-serif">
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

      {/* IMPACT / CTA SECTION */}
      <section className="relative py-32 bg-red-700 text-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-red-800 transform skew-x-[-20deg] origin-top opacity-30 pointer-events-none"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Call for Abstracts</h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Share your research, clinical innovations, and epidemiological evidence contributing to a stronger TB-HIV response. Help shape the scientific dialogue of Gombe State's future health architecture.
          </p>
          <Link href="/abstracts" className="inline-block bg-white hover:bg-gray-100 text-red-900 px-10 py-5 rounded-sm font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg">
            SUBMIT YOUR RESEARCH
          </Link>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <span className="w-16 h-16 mx-auto bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Institutional Partnerships
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Join hands with the Gombe State Government and other stakeholders to support the TB-HIV response. Discover partnership and sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/partners" className="bg-[#0A2518] hover:bg-black text-white px-8 py-4 font-bold text-center transition-colors text-sm uppercase tracking-wide rounded-sm">
              Explore Partnerships
            </Link>
            <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 font-bold text-center transition-colors text-sm uppercase tracking-wide rounded-sm">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
