import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800" />
        
        <div className="container relative z-20 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-red-600/90 text-sm font-semibold tracking-wide uppercase">
              1st December 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              GOMBE STATE 2026<br />AIDS SUMMIT
            </h1>
            <p className="text-xl md:text-2xl text-green-100 font-light mb-8 max-w-2xl">
              &quot;Integrate, fund, sustain and own TB-HIV Response&quot;
            </p>
            <p className="text-lg text-white mb-10 border-l-4 border-yellow-500 pl-4">
              Stronger Partnerships for a Healthier, HIV & TB Free Gombe State
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-semibold text-center transition-colors text-lg shadow-lg">
                REGISTER FOR THE SUMMIT
              </Link>
              <Link href="/abstracts/submit" className="bg-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-md font-semibold text-center transition-colors text-lg shadow-lg">
                SUBMIT AN ABSTRACT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMIT OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Summit</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Gombe State 2026 AIDS Summit brings together government institutions, health professionals, development partners, civil society organizations, researchers, community representatives, private-sector organizations and other stakeholders to strengthen the TB-HIV response in Gombe State.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="text-green-800 font-bold text-lg mb-1">Date</div>
                  <div className="text-gray-600">1st December 2026</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="text-green-800 font-bold text-lg mb-1">Location</div>
                  <div className="text-gray-600">Venue details to be announced</div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 lg:p-12 border border-green-100">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Target Participants</h3>
              <ul className="space-y-4">
                {[
                  "Government & Policy Makers",
                  "Health Professionals & Practitioners",
                  "Development & Funding Partners",
                  "Civil Society Organizations (CSOs)",
                  "Researchers & Academics",
                  "Community Representatives"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-green-800">
                    <svg className="h-6 w-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THEMES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Themes & Sub-themes</h2>
            <p className="text-xl text-green-800 font-medium">
              &quot;Integrate, fund, sustain and own TB-HIV Response&quot;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Strengthening resource mobilization in the face of decline external funding.",
              "Integrate, innovate and fund.",
              "Building a Resilient, People-Centred TB-HIV Response for Gombe State.",
              "TB/HIV program science in Gombe state: where we are and what next.",
              "One plan, coordinated action and shared responsibility."
            ].map((theme, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">{theme}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL FOR ABSTRACTS CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Call for Abstracts</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Share your research, innovations, experiences and evidence contributing to a stronger TB-HIV response.
          </p>
          <Link href="/abstracts/submit" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-green-900 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg">
            SUBMIT ABSTRACT
          </Link>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stronger partnerships. Shared responsibility. Better outcomes.
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Join hands with the Gombe State Government and other stakeholders to support the TB-HIV response. Discover partnership and sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/partners/join" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-md font-semibold text-center transition-colors text-lg">
              BECOME A PARTNER
            </Link>
            <Link href="/sponsors/join" className="bg-white hover:bg-gray-50 text-green-800 border-2 border-green-700 px-8 py-4 rounded-md font-semibold text-center transition-colors text-lg">
              BECOME A SPONSOR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
