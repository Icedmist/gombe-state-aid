export default function Resources() {
  const documents = [
    { name: "Summit Concept Note", size: "1.2 MB", type: "PDF" },
    { name: "Call for Abstracts Guidelines", size: "845 KB", type: "PDF" },
    { name: "Sponsorship & Partnership Pack", size: "2.4 MB", type: "PDF" },
    { name: "Official Summit Poster", size: "5.1 MB", type: "JPG" },
  ];

  return (
    <div className="bg-milk py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Resource Library</h1>
          <p className="text-xl text-gray-600">
            Download official documents, guidelines, promotional materials, and policy briefs related to the summit.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-100/50 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Official Documents</h2>
            <div className="relative">
              <input type="text" placeholder="Search resources..." className="pl-9 pr-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-green-500 focus:border-green-500 w-64" />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <ul className="divide-y divide-gray-100">
            {documents.map((doc, i) => (
              <li key={i} className="p-6 hover:bg-white transition-colors flex items-center justify-between group">
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl mr-4 ${doc.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                    {doc.type === 'PDF' ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{doc.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{doc.type} Document • {doc.size}</p>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-800 bg-green-50 hover:bg-green-100 p-2 rounded-full transition-colors" title="Download">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
