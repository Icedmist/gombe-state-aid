export default function Partners() {
  const categories = [
    {
      title: "Strategic Partners",
      partners: [
        { id: 1, name: "[Demo] Ministry of Health", logo: "MOH", desc: "Leading the state-wide health response." },
        { id: 2, name: "[Demo] WHO Regional Office", logo: "WHO", desc: "Technical guidance and global health standards." }
      ]
    },
    {
      title: "Development Partners",
      partners: [
        { id: 3, name: "[Demo] Global Fund", logo: "GF", desc: "Major funding organization." },
        { id: 4, name: "[Demo] USAID", logo: "USAID", desc: "Supporting local health initiatives." }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Partners & Sponsors</h1>
          <p className="text-xl text-gray-600">
            We thank our dedicated partners and sponsors for their continued support in the fight against TB and HIV in Gombe State.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-green-900 mb-8 border-b border-green-200 pb-2">{cat.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.partners.map((partner) => (
                  <div key={partner.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold text-2xl mb-6">
                      {partner.logo}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-500">{partner.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-green-900 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-green-800 opacity-50 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Become a Partner or Sponsor</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Join us in making a significant impact. Partnership opportunities are available for organizations committed to public health.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 px-8 py-3 rounded-md font-bold transition-colors">
              Request Partnership Pack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
