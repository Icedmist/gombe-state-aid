export default function MediaGallery() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Media & Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Browse through official photos, videos, and graphics from past and current events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Demo Graphic */}
          <div className="group rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer relative aspect-video">
            <div className="absolute inset-0 bg-green-900 flex items-center justify-center text-white p-6 text-center">
              <div>
                <h3 className="font-bold text-lg mb-2">Official 2026 Summit Poster</h3>
                <span className="text-xs uppercase tracking-widest font-semibold bg-green-800 px-3 py-1 rounded-full">Graphic</span>
              </div>
            </div>
          </div>
          
          {/* Video Placeholder */}
          <div className="group rounded-xl overflow-hidden shadow-sm bg-gray-200 cursor-pointer relative aspect-video flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400 group-hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
               <p className="text-white font-medium">Message from the Commissioner</p>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="group rounded-xl overflow-hidden shadow-sm bg-gray-300 cursor-pointer relative aspect-video">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-gray-500 font-medium">Photo: 2025 Review Meeting</span>
             </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="border border-green-700 text-green-700 hover:bg-green-50 font-semibold py-2 px-6 rounded-md transition-colors">
            Load More Media
          </button>
        </div>
      </div>
    </div>
  );
}
