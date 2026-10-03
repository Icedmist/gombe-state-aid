export default function Programme() {
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Programme & Agenda</h1>
          <p className="text-xl text-gray-600">
            A comprehensive schedule of keynotes, technical sessions, and collaborative workshops for December 1st, 2026.
          </p>
        </div>

        {/* Timeline Interface */}
        <div className="relative border-l-2 border-green-200 ml-3 md:ml-6 space-y-12">
          
          {/* Demo Session 1 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-6 h-6 bg-green-700 rounded-full -left-[13px] top-1 border-4 border-white shadow-sm"></div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="md:w-32 flex-shrink-0 pt-1">
                <span className="text-lg font-bold text-green-800">09:00 AM</span>
                <p className="text-sm text-gray-500">Main Auditorium</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  Opening Ceremony
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome Address & Keynote Presentation</h3>
                <p className="text-gray-600 mb-4">Official commencement of the Gombe State 2026 AIDS Summit. Setting the stage for the theme: "Integrate, fund, sustain and own TB-HIV Response".</p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4 mt-4">
                  <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-white text-xs font-bold">AY</div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">[Demo] Prof. Amina Yakubu</p>
                    <p className="text-gray-500 text-xs">Commissioner of Health</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Session 2 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-6 h-6 bg-yellow-500 rounded-full -left-[13px] top-1 border-4 border-white shadow-sm"></div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="md:w-32 flex-shrink-0 pt-1">
                <span className="text-lg font-bold text-green-800">10:30 AM</span>
                <p className="text-sm text-gray-500">Hall B</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  Plenary Session
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Building a Resilient, People-Centred TB-HIV Response</h3>
                <p className="text-gray-600 mb-4">Discussion focusing on strengthening healthcare systems and community engagement for better health outcomes in Gombe State.</p>
              </div>
            </div>
          </div>

          {/* Break Session */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-6 h-6 bg-gray-300 rounded-full -left-[13px] top-1 border-4 border-white shadow-sm"></div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="md:w-32 flex-shrink-0 pt-1">
                <span className="text-lg font-bold text-gray-600">12:00 PM</span>
              </div>
              <div className="flex-1 py-3 border-t border-b border-dashed border-gray-300 flex items-center text-gray-500 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Networking & Tea Break
              </div>
            </div>
          </div>

          {/* Demo Session 3 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-6 h-6 bg-green-700 rounded-full -left-[13px] top-1 border-4 border-white shadow-sm"></div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="md:w-32 flex-shrink-0 pt-1">
                <span className="text-lg font-bold text-green-800">12:45 PM</span>
                <p className="text-sm text-gray-500">Breakout Rooms</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  Technical Session
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strengthening Resource Mobilization</h3>
                <p className="text-gray-600 mb-4">Strategic planning for navigating the decline in external funding and finding innovative financing mechanisms.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
