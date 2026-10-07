import Link from 'next/link';

export default function AbstractsLanding() {
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl font-black text-gray-900 mb-6 border-l-8 border-red-600 pl-6">Abstract Submissions</h1>
        
        <div className="prose prose-lg prose-red max-w-none text-gray-700 mb-12">
          <p className="lead text-2xl text-gray-800 font-light mb-8">
            The Scientific Committee of the Gombe State 2026 AIDS Summit invites researchers, public health professionals, and front-line workers to submit abstracts sharing critical evidence, clinical innovations, and epidemiological data.
          </p>
          
          <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
            <h3 className="text-xl font-bold text-red-900 mt-0">Important Deadlines</h3>
            <ul className="text-red-800 space-y-2">
              <li><strong>Submission Opens:</strong> September 15, 2026</li>
              <li><strong>Final Deadline:</strong> October 15, 2026</li>
              <li><strong>Acceptance Notification:</strong> November 1, 2026</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Submission Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-red-600">
            <li>Abstracts must be strictly related to TB-HIV response and program science.</li>
            <li>Maximum word count is 500 words.</li>
            <li>Must include clear sections: Background, Methods, Results, and Conclusions.</li>
            <li>Authors must declare any conflicts of interest.</li>
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-10 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Ready to Submit?</h3>
          <Link href="/abstracts/submit" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm font-black text-lg uppercase tracking-wide transition-all shadow-[0_10px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1">
            Open Submission Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
