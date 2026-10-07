export default function Programme() {
  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="mb-20 text-center">
          <span className="text-red-700 font-bold tracking-widest text-sm uppercase mb-3 block">Schedule</span>
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Official Programme
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            A comprehensive schedule of keynotes, technical sessions, and collaborative workshops for December 1st, 2026.
          </p>
        </div>

        {/* Premium Timeline Interface */}
        <div className="space-y-8">
          
          {/* Demo Session 1 */}
          <div className="bg-white p-8 md:p-10 rounded-sm border-l-4 border-[#0A2518] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
              <div className="md:w-40 shrink-0">
                <span className="text-3xl font-extrabold text-[#0A2518] tracking-tight block mb-1">09:00</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Main Hall</span>
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-[10px] font-black uppercase tracking-widest mb-4">
                  Opening Ceremony
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">Welcome Address & Keynote Presentation</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">Official commencement of the Gombe State 2026 AIDS Summit. Setting the stage for the theme: "Integrate, fund, sustain and own TB-HIV Response".</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#0A2518] flex items-center justify-center text-white text-sm font-bold">AY</div>
                  <div>
                    <p className="font-bold text-gray-900">[Demo] Prof. Amina Yakubu</p>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Commissioner of Health</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Session 2 */}
          <div className="bg-white p-8 md:p-10 rounded-sm border-l-4 border-red-600 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
              <div className="md:w-40 shrink-0">
                <span className="text-3xl font-extrabold text-[#0A2518] tracking-tight block mb-1">10:30</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Hall B</span>
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-[10px] font-black uppercase tracking-widest mb-4">
                  Plenary Session
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">Building a Resilient, People-Centred TB-HIV Response</h3>
                <p className="text-gray-600 font-light leading-relaxed">Discussion focusing on strengthening healthcare systems and community engagement for better health outcomes in Gombe State.</p>
              </div>
            </div>
          </div>

          {/* Break Session */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-center gap-6 border border-gray-200 border-dashed">
            <div className="md:w-40 shrink-0 text-center md:text-left">
              <span className="text-xl font-bold text-gray-500 tracking-tight">12:00 PM</span>
            </div>
            <div className="flex-1 flex items-center justify-center md:justify-start text-gray-600 font-bold uppercase tracking-widest text-sm">
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Networking & Tea Break
            </div>
          </div>

          {/* Demo Session 3 */}
          <div className="bg-white p-8 md:p-10 rounded-sm border-l-4 border-red-600 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
              <div className="md:w-40 shrink-0">
                <span className="text-3xl font-extrabold text-[#0A2518] tracking-tight block mb-1">12:45</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Breakout Rooms</span>
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-red-50 text-red-800 text-[10px] font-black uppercase tracking-widest mb-4">
                  Technical Session
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">Strengthening Resource Mobilization</h3>
                <p className="text-gray-600 font-light leading-relaxed">Strategic planning for navigating the decline in external funding and finding innovative financing mechanisms.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
