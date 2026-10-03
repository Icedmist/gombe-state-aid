export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Total Registrations</div>
          <div className="text-3xl font-bold text-gray-900">1,248</div>
          <div className="text-sm text-green-600 mt-2">↑ 12% from last week</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Abstract Submissions</div>
          <div className="text-3xl font-bold text-gray-900">342</div>
          <div className="text-sm text-yellow-600 mt-2">45 awaiting review</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Confirmed Speakers</div>
          <div className="text-3xl font-bold text-gray-900">48</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-1">Partners & Sponsors</div>
          <div className="text-3xl font-bold text-gray-900">15</div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Registrations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Organization</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Category</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm">Dr. Amina Yusuf</td>
                <td className="py-3 px-4 text-sm">Ministry of Health</td>
                <td className="py-3 px-4 text-sm">Government</td>
                <td className="py-3 px-4 text-sm"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Confirmed</span></td>
                <td className="py-3 px-4 text-sm">Today</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm">Prof. Samuel Okafor</td>
                <td className="py-3 px-4 text-sm">University of Abuja</td>
                <td className="py-3 px-4 text-sm">Academic</td>
                <td className="py-3 px-4 text-sm"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Confirmed</span></td>
                <td className="py-3 px-4 text-sm">Yesterday</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm">John Doe</td>
                <td className="py-3 px-4 text-sm">Global Health NGO</td>
                <td className="py-3 px-4 text-sm">NGO</td>
                <td className="py-3 px-4 text-sm"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
                <td className="py-3 px-4 text-sm">2 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
