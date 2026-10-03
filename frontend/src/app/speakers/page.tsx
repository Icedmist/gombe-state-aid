import Link from 'next/link';

export default function Speakers() {
  const demoSpeakers = [
    {
      id: 1,
      name: "[Demo] Prof. Amina Yakubu",
      title: "Commissioner of Health",
      organization: "[Sample] Gombe State Government",
      category: "Keynote Speaker",
      image: "https://ui-avatars.com/api/?name=Amina+Yakubu&background=166534&color=fff&size=256",
    },
    {
      id: 2,
      name: "[Demo] Dr. James Okon",
      title: "Regional Director",
      organization: "[Sample] Global Health Initiative",
      category: "Panelist",
      image: "https://ui-avatars.com/api/?name=James+Okon&background=166534&color=fff&size=256",
    },
    {
      id: 3,
      name: "[Demo] Sarah Ibrahim",
      title: "Lead Researcher",
      organization: "[Sample] TB-HIV Research Institute",
      category: "Technical Presenter",
      image: "https://ui-avatars.com/api/?name=Sarah+Ibrahim&background=166534&color=fff&size=256",
    },
    {
      id: 4,
      name: "[Demo] Hon. Musa Bello",
      title: "Policy Advisor",
      organization: "[Sample] Federal Ministry of Health",
      category: "Special Guest",
      image: "https://ui-avatars.com/api/?name=Musa+Bello&background=166534&color=fff&size=256",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Summit Speakers</h1>
          <p className="text-xl text-gray-600">
            Hear from leading experts, policymakers, and community leaders driving the TB-HIV response forward.
          </p>
        </div>

        {/* Filter Categories Placeholder */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All Speakers', 'Keynote', 'Panelist', 'Technical Presenter', 'Moderator'].map((cat, i) => (
            <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-green-700 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {demoSpeakers.map((speaker) => (
            <Link href={`/speakers/${speaker.id}`} key={speaker.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                {/* Using external UI avatars for demo purposes only */}
                <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full" />
                <div className="absolute top-4 left-4 bg-yellow-500 text-green-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {speaker.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-1">{speaker.name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-3">{speaker.title}</p>
                <div className="h-px w-full bg-gray-100 mb-3"></div>
                <p className="text-sm text-green-800 font-semibold">{speaker.organization}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
