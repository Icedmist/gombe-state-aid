export default function Contact() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions about the summit, registration, or partnership opportunities? Reach out to the organizing committee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden">
          
          {/* Contact Information */}
          <div className="bg-green-900 text-white p-10 lg:p-12">
            <h2 className="text-2xl font-bold mb-8">Official Contact Details</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-800 p-3 rounded-full mr-4 shrink-0">
                  <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                  <p className="text-green-100 leading-relaxed">
                    Gombe State Ministry of Health<br />
                    State Secretariat Complex<br />
                    Gombe, Gombe State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-800 p-3 rounded-full mr-4 shrink-0">
                  <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-green-100">info@gombeaids-summit2026.gov.ng</p>
                  <p className="text-green-100">abstracts@gombeaids-summit2026.gov.ng</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-800 p-3 rounded-full mr-4 shrink-0">
                  <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                  <p className="text-green-100">+234 (0) 800 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" required className="w-full rounded-md border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-green-500 focus:ring-green-500 border p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" required className="w-full rounded-md border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-green-500 focus:ring-green-500 border p-2" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full rounded-md border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-green-500 focus:ring-green-500 border p-2 bg-white">
                  <option>General Inquiry</option>
                  <option>Registration Support</option>
                  <option>Abstract Submission</option>
                  <option>Partnership/Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} required className="w-full rounded-md border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-green-500 focus:ring-green-500 border p-2"></textarea>
              </div>

              <button type="button" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
