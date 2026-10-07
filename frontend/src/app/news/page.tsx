import Link from 'next/link';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Registration Officially Opens for 2026 Summit",
      date: "September 15, 2026",
      category: "Announcement",
      summary: "We are thrilled to announce that registration for the Gombe State 2026 AIDS Summit is now open to all healthcare professionals and stakeholders."
    },
    {
      id: 2,
      title: "Call for Abstracts: Submission Guidelines Released",
      date: "September 10, 2026",
      category: "Abstracts",
      summary: "Researchers and practitioners are invited to submit their abstracts. View the newly published guidelines and theme requirements."
    },
    {
      id: 3,
      title: "Major Sponsors Announced for the 2026 Event",
      date: "September 5, 2026",
      category: "Partnerships",
      summary: "Several key international development organizations have pledged their support to ensure the success of this year's state-wide summit."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Announcements</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay updated with the latest information, deadlines, and press releases regarding the summit.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="inline-flex rounded-md shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <button className="px-4 py-2 text-sm font-medium bg-green-700 text-white border border-green-700 rounded-l-lg hover:bg-green-800">
                Latest
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-200 hover:bg-gray-50">
                Press Releases
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-200 rounded-r-lg hover:bg-gray-50">
                Updates
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow flex flex-col">
              <div className="h-48 bg-gray-200 relative">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5L18.5 7H20z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-800 uppercase tracking-wide">
                  {item.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm text-gray-500 mb-3">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{item.summary}</p>
                <Link href="#" className="text-green-700 font-semibold hover:text-green-800 flex items-center mt-auto">
                  Read full article
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
