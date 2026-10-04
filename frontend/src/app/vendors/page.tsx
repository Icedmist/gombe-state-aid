export default function Vendors() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl animate-fade-in-up">
        <div className="bg-white rounded-xl shadow-xl border-t-8 border-t-red-600 overflow-hidden p-8 md:p-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Vendor & Exhibition Registration</h1>
              <p className="text-gray-600 text-lg">Secure your booth at the Gombe State TB-HIV Summit 2026.</p>
            </div>
            <div className="bg-red-100 text-red-800 font-black px-4 py-2 rounded-lg text-xl text-center">
              <span className="block text-xs uppercase tracking-widest text-red-600 mb-1">Registration Fee</span>
              ₦ 10,000
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Company / Organization Name</label>
                <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Contact Person</label>
                <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Exhibition Category</label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3 bg-white">
                <option>Medical Equipment & Supplies</option>
                <option>Pharmaceuticals</option>
                <option>NGO / CSO Display</option>
                <option>Health Tech / Software</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mt-4">
              <h4 className="font-bold text-gray-900 mb-2">Payment Instruction</h4>
              <p className="text-sm text-gray-600 mb-4">Upon submitting this form, you will be redirected to the secure payment gateway to process the <strong>₦ 10,000</strong> registration fee. Booth space is limited and allocated on a first-come, first-served basis.</p>
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3 rounded text-red-600 focus:ring-red-500" />
                <span className="text-sm text-gray-700">I agree to the exhibition terms and acknowledge the registration fee is non-refundable.</span>
              </label>
            </div>

            <div className="pt-6">
              <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 px-4 rounded-md transition-all uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1">
                Proceed to Payment (₦10,000)
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
