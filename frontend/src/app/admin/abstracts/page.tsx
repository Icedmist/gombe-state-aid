import Link from 'next/link'

export default function AdminAbstracts() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Abstract Submissions</h2>
        <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
          Export CSV
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input type="text" placeholder="Search abstracts..." className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-sm" />
          <select className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-sm bg-white">
            <option>All Statuses</option>
            <option>Submitted</option>
            <option>Under Review</option>
            <option>Accepted</option>
            <option>Rejected</option>
            <option>Revision Requested</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-sm bg-white">
            <option>All Themes</option>
            <option>Theme 1</option>
            <option>Theme 2</option>
            <option>Theme 3</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">ID</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Title</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Author</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Theme</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Demo Data Row 1 */}
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm font-medium text-gray-500">ABS-1042</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900 max-w-xs truncate">Evaluating the integration of TB screening in rural HIV clinics</td>
                <td className="py-3 px-4 text-sm">Dr. Ibrahim Musa</td>
                <td className="py-3 px-4 text-sm">Theme 2</td>
                <td className="py-3 px-4 text-sm"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Under Review</span></td>
                <td className="py-3 px-4 text-sm">
                  <button className="text-green-600 hover:text-green-800 font-medium">Review</button>
                </td>
              </tr>
              {/* Demo Data Row 2 */}
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm font-medium text-gray-500">ABS-1043</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900 max-w-xs truncate">Digital innovations in sustaining external funding models</td>
                <td className="py-3 px-4 text-sm">Ngozi Chukwu</td>
                <td className="py-3 px-4 text-sm">Theme 1</td>
                <td className="py-3 px-4 text-sm"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Submitted</span></td>
                <td className="py-3 px-4 text-sm">
                  <button className="text-green-600 hover:text-green-800 font-medium">Assign</button>
                </td>
              </tr>
              {/* Demo Data Row 3 */}
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 text-sm font-medium text-gray-500">ABS-1044</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900 max-w-xs truncate">Community-led monitoring of TB/HIV co-infection rates</td>
                <td className="py-3 px-4 text-sm">Fatima Bello</td>
                <td className="py-3 px-4 text-sm">Theme 3</td>
                <td className="py-3 px-4 text-sm"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Accepted</span></td>
                <td className="py-3 px-4 text-sm">
                  <button className="text-green-600 hover:text-green-800 font-medium">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
          <div>Showing 1 to 3 of 342 entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Prev</button>
            <button className="px-3 py-1 border border-green-600 bg-green-50 text-green-700 rounded">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">3</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
