'use client'

import { useState } from 'react'
import { submitRegistration } from '@/actions/register'
import type { TicketData } from '@/lib/ticket'
import Countdown from '@/components/Countdown'
import TicketCard from '@/components/TicketCard'

export default function Register() {
  const [activeTab, setActiveTab] = useState<'delegate' | 'vendor'>('delegate');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [ticket, setTicket] = useState<TicketData | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append('activeTab', activeTab);

    const result = await submitRegistration(formData);

    if (result.success) {
      setTicket(result.ticket);
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong');
    }
  };

  const handleReset = () => {
    setTicket(null);
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="bg-milk py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-emerald-950 mb-2">Registration Successful!</h2>
            <p className="text-gray-600">
              {activeTab === 'vendor'
                ? "Your exhibition request has been received. You will be redirected to the payment gateway shortly."
                : "Your delegate pass is ready below."}
            </p>
          </div>
          {ticket && <TicketCard ticket={ticket} />}
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={handleReset} className="bg-white border border-slate-300 text-emerald-950 font-bold py-3 px-8 rounded-xl hover:bg-slate-50 transition-all duration-300 uppercase tracking-widest text-sm">
              Register Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-milk py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl animate-fade-in-up">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-rose-600 mb-1">Registration closes in</div>
            <div className="text-sm text-gray-500 font-medium">The summit begins 1 Dec 2026 — secure your seat.</div>
          </div>
          <Countdown />
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('delegate')}
              className={`flex-1 py-6 text-center font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'delegate' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              Delegate Registration
            </button>
            <button 
              onClick={() => setActiveTab('vendor')}
              className={`flex-1 py-6 text-center font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'vendor' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
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
                  <input type="text" name="firstName" required className="w-full rounded-xl border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" name="lastName" required className="w-full rounded-xl border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50 transition-all duration-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full rounded-xl border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phoneNumber" required className="w-full rounded-xl border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50 transition-all duration-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Organization / Company</label>
                <input type="text" name="organization" required className="w-full rounded-xl border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50 transition-all duration-300" />
              </div>

              {activeTab === 'vendor' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Exhibition Category</label>
                  <select name="category" required className="w-full rounded-xl border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-red-500 focus:ring-red-500 border p-3 bg-gray-50 transition-all duration-300">
                    <option value="">Select Category</option>
                    <option>Medical Equipment & Supplies</option>
                    <option>Pharmaceuticals</option>
                    <option>NGO / CSO Display</option>
                    <option>Health Tech / Software</option>
                  </select>
                </div>
              )}

              {activeTab === 'vendor' && (
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-6">
                  <h4 className="font-bold text-red-900 mb-2">Payment Instruction (₦10,000)</h4>
                  <p className="text-sm text-red-800 mb-4">You will be redirected to the secure payment gateway to process the non-refundable registration fee.</p>
                  <label className="flex items-start">
                    <input type="checkbox" required className="mt-1 mr-3 rounded text-red-600 focus:ring-red-500" />
                    <span className="text-sm text-red-900 font-medium">I agree to the exhibition terms.</span>
                  </label>
                </div>
              )}

              {errorMessage && (
                <div className="bg-red-50 text-red-700 p-3 rounded text-sm text-center font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="pt-6">
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 px-4 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-70 disabled:hover:translate-y-0">
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
