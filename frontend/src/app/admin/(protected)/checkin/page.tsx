import { processCheckIn } from '../../../actions/checkin'

export default function CheckInScanner() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">QR Code Check-in</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center">
          <div className="w-full max-w-sm aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-6 relative overflow-hidden">
            {/* Placeholder for actual QR scanner component */}
            <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              <p className="text-sm font-medium text-gray-500">Camera active. Point at QR code.</p>
            </div>
            {/* Scanning line animation placeholder */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          </div>
          
          <form className="w-full max-w-sm flex gap-2">
            <input type="text" placeholder="Or enter Registration ID manually" className="flex-1 rounded-md border-gray-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:border-green-500 focus:ring-green-500 border p-2 text-sm" />
            <button type="button" className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
              Verify
            </button>
          </form>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex items-center justify-center min-h-[400px]">
          <div className="text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium">Awaiting scan...</p>
            <p className="text-sm">Scan a participant's QR code to view their details here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
