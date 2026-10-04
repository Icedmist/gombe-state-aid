import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl animate-fade-in-up">
        <span className="text-red-700 font-bold tracking-widest text-sm uppercase mb-3 block">About the Event</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Gombe State 2026 AIDS Summit</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-2xl text-gray-800 font-light mb-12 leading-relaxed border-l-4 border-red-600 pl-6">
            The Gombe State 2026 AIDS Summit is a premier gathering of public health officials, practitioners, and community leaders dedicated to strengthening the TB-HIV response in Gombe State.
          </p>
          
          <div className="bg-red-50 p-8 rounded-sm border border-red-100 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-32 h-32 text-red-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <h2 className="text-2xl font-black text-red-900 mt-0 relative z-10">Observing World AIDS Day</h2>
            <p className="text-red-950 font-medium relative z-10 mb-0">
              This summit is strategically aligned with <strong>World AIDS Day</strong>, a global event held on December 1st each year. Since 1988, World AIDS Day has served as an international day dedicated to raising awareness of the AIDS pandemic, showing support for people living with HIV, and mourning those who have died of the disease. The Gombe State Summit marks our localized, aggressive action plan to meet this global mandate.
            </p>
          </div>
          
          <h2 className="text-2xl font-black text-gray-900 mt-12 mb-4">Our Vision</h2>
          <p>
            To achieve a healthier, HIV and TB-free Gombe State through sustained, integrated, and well-funded community-driven responses. We are taking ownership of our health architecture to protect our most vulnerable communities.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Context</h2>
          <p>
            In the face of declining external funding, it has become imperative for Gombe State and its partners to innovate, integrate, and take ownership of the health initiatives that protect our communities. This summit serves as the critical intersection where global policy meets local practice.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-12 mb-6">Who Should Attend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Government Officials", desc: "Policy makers and state health administrators." },
              { title: "Healthcare Professionals", desc: "Doctors, nurses, and clinical officers." },
              { title: "Development Partners", desc: "International NGOs and funding agencies." },
              { title: "Researchers", desc: "Scientists contributing to program science." },
              { title: "Community Groups", desc: "Civil society organizations and advocates." }
            ].map((audience, i) => (
              <div key={i} className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
                <h4 className="font-bold text-gray-900 m-0">{audience.title}</h4>
                <p className="text-sm text-gray-600 m-0 mt-2">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm font-black text-lg uppercase tracking-wide transition-all shadow-md">
            Register for the Summit
          </Link>
        </div>
      </div>
    </div>
  );
}
