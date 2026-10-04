import Link from 'next/link';

export default function Speakers() {
  const demoSpeakers = [
    {
      id: 1,
      name: "[Demo] Prof. Amina Yakubu",
      title: "Commissioner of Health",
      organization: "Gombe State Government",
      category: "Keynote Speaker",
      image: "https://ui-avatars.com/api/?name=Amina+Yakubu&background=0A2518&color=fff&size=512",
    },
    {
      id: 2,
      name: "[Demo] Dr. James Okon",
      title: "Regional Director",
      organization: "Global Health Initiative",
      category: "Panelist",
      image: "https://ui-avatars.com/api/?name=James+Okon&background=0A2518&color=fff&size=512",
    },
    {
      id: 3,
      name: "[Demo] Sarah Ibrahim",
      title: "Lead Researcher",
      organization: "TB-HIV Research Institute",
      category: "Technical Presenter",
      image: "https://ui-avatars.com/api/?name=Sarah+Ibrahim&background=0A2518&color=fff&size=512",
    },
    {
      id: 4,
      name: "[Demo] Hon. Musa Bello",
      title: "Policy Advisor",
      organization: "Federal Ministry of Health",
      category: "Special Guest",
      image: "https://ui-avatars.com/api/?name=Musa+Bello&background=0A2518&color=fff&size=512",
    },
  ];

  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-gray-100 pb-12">
          <div className="max-w-3xl">
            <span className="text-red-600 font-bold tracking-widest text-sm uppercase mb-3 block">Delegation</span>
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Summit Speakers &<br />Special Guests
            </h1>
          </div>
          <p className="text-lg text-gray-500 max-w-md font-light">
            Hear from leading experts, policymakers, and community leaders driving the TB-HIV response forward across the state and nation.
          </p>
        </div>

        {/* Filter Categories - Editorial Style */}
        <div className="flex flex-wrap gap-4 mb-16">
          {['All Speakers', 'Keynote', 'Panelist', 'Technical Presenter', 'Moderator'].map((cat, i) => (
            <button key={i} className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all rounded-sm ${i === 0 ? 'bg-[#0A2518] text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {demoSpeakers.map((speaker) => (
            <Link href={`/speakers/${speaker.id}`} key={speaker.id} className="group block">
              <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden mb-6 rounded-sm">
                <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 bg-red-600 text-[#0A2518] text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                  {speaker.category}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-red-700 transition-colors mb-1">{speaker.name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-2">{speaker.title}</p>
                <div className="h-px w-8 bg-red-600 mb-2 transition-all duration-300 group-hover:w-full"></div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A2518]">{speaker.organization}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
