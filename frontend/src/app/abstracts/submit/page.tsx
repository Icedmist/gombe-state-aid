import { submitAbstract } from '../../actions/abstract'

export default function SubmitAbstract() {
  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit an Abstract</h1>
          <p className="text-gray-600 mb-8">Share your research, innovations, and evidence for a stronger TB-HIV response.</p>
          
          <form action={submitAbstract} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Abstract Title</label>
              <input name="title" type="text" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Author Name</label>
                <input name="authorName" type="text" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input name="email" type="email" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization / Institution</label>
              <input name="organization" type="text" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Theme / Sub-theme</label>
              <select name="themeId" className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 bg-white">
                <option value="1">Strengthening resource mobilization in the face of decline external funding.</option>
                <option value="2">Integrate, innovate and fund.</option>
                <option value="3">Building a Resilient, People-Centred TB-HIV Response for Gombe State.</option>
                <option value="4">TB/HIV program science in Gombe state: where we are and what next.</option>
                <option value="5">One plan, coordinated action and shared responsibility.</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Abstract Content</label>
              <p className="text-xs text-gray-500 mb-2">Maximum 500 words.</p>
              <textarea name="text" rows={8} required className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2"></textarea>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-md transition-colors">
                Submit Abstract
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
