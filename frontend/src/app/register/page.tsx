export default function Register() {
  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Register for the Summit</h1>
          <p className="text-gray-600 mb-8">Please fill out the form below to secure your spot at the Gombe State 2026 AIDS Summit.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
              <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Participant Category</label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 bg-white">
                <option>Government / Policy Maker</option>
                <option>Health Professional</option>
                <option>Development Partner</option>
                <option>NGO / CSO</option>
                <option>Researcher / Academic</option>
                <option>Community Representative</option>
                <option>Other</option>
              </select>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button type="button" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-md transition-colors">
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
