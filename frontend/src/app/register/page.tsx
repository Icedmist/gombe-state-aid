'use client'

import { useState } from 'react'

export default function Register() {
  const [activeTab, setActiveTab] = useState<'delegate' | 'vendor'>('delegate');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-gray-50 py-24 min-h-screen flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-lg border-t-8 border-t-red-600 text-center max-w-lg">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-8">
            {activeTab === 'vendor' 
              ? "Your exhibition request has been received. You will be redirected to the payment gateway shortly." 
              : "Your delegate registration has been processed. A confirmation email has been sent."}
          </p>
          <button onClick={() => setStatus('idle')} className="bg-red-600 text-white font-bold py-3 px-8 rounded-sm hover:bg-red-700 transition-colors uppercase tracking-widest">
            Register Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl animate-fade-in-up">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('delegate')}
              className={`flex-1 py-6 text-center font-black uppercase tracking-widest transition-colors ${activeTab === 'delegate' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              Delegate Registration
            </button>
            <button 
              onClick={() => setActiveTab('vendor')}
              className={`flex-1 py-6 text-center font-black uppercase tracking-widest transition-colors ${activeTab === 'vendor' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              Vendor & Exhibition
            </button>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl font-black text-gray-900 mb-2">
                {activeTab === 'delegate' ? 'Delegate Registration' : 'Exhibition Booking'}
              </h1>
              <p className="text-gray-600">
                {activeTab === 'delegate' 
                  ? 'Join public health professionals at the Gombe State 2026 AIDS Summit.' 
                  : 'Secure your exhibition booth. Registration fee: ₦10,000.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" required className="w-full rounded-sm border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" required className="w-full rounded-sm border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full rounded-sm border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full rounded-sm border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Organization / Company</label>
                <input type="text" required className="w-full rounded-sm border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50" />
              </div>

              {activeTab === 'vendor' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Exhibition Category</label>
                  <select required className="w-full rounded-sm border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50">
                    <option value="">Select Category</option>
                    <option>Medical Equipment & Supplies</option>
                    <option>Pharmaceuticals</option>
                    <option>NGO / CSO Display</option>
                    <option>Health Tech / Software</option>
                  </select>
                </div>
              )}

              {activeTab === 'vendor' && (
                <div className="bg-red-50 p-4 rounded-sm border border-red-100 mt-6">
                  <h4 className="font-bold text-red-900 mb-2">Payment Instruction (₦10,000)</h4>
                  <p className="text-sm text-red-800 mb-4">You will be redirected to the secure payment gateway to process the non-refundable registration fee.</p>
                  <label className="flex items-start">
                    <input type="checkbox" required className="mt-1 mr-3 rounded text-red-600 focus:ring-red-500" />
                    <span className="text-sm text-red-900 font-medium">I agree to the exhibition terms.</span>
                  </label>
                </div>
              )}

              <div className="pt-6">
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 px-4 rounded-sm transition-all uppercase tracking-widest shadow-md">
                  {status === 'submitting' ? 'Processing...' : activeTab === 'vendor' ? 'Proceed to Payment' : 'Complete Registration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
