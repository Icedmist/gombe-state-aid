export default function FAQ() {
  const faqs = [
    {
      question: "Who can attend the Gombe State AIDS Summit?",
      answer: "The summit is open to government officials, healthcare professionals, development partners, civil society organizations, researchers, academics, and community representatives working in the TB and HIV sectors."
    },
    {
      question: "Is registration free?",
      answer: "Details regarding registration fees (if applicable) and sponsorship for local community representatives will be announced shortly. Please check the Registration page for updates."
    },
    {
      question: "How do I submit an abstract?",
      answer: "You can submit an abstract through our online portal by clicking 'Submit Abstract' in the main navigation. You will need to provide your details, co-authors, and a summary of up to 500 words."
    },
    {
      question: "What is the abstract submission deadline?",
      answer: "The submission deadline is tentatively set for October 15th, 2026. Please ensure all abstracts are submitted through the portal before this date."
    },
    {
      question: "Can I attend virtually?",
      answer: "Yes, a hybrid format is being planned. Links for virtual attendance will be provided to registered participants closer to the summit date."
    },
    {
      question: "Where will the summit take place?",
      answer: "The exact venue in Gombe State is currently being finalized. Once confirmed, it will be updated on the website and all registered participants will receive an email notification."
    },
    {
      question: "Will certificates of attendance be provided?",
      answer: "Yes, digital certificates of attendance will be issued to all participants who check in physically or log into the virtual sessions."
    }
  ];

  return (
    <div className="bg-milk py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about registration, abstract submission, and the summit agenda.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-green-700 mr-3 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                {faq.question}
              </h3>
              <p className="text-gray-600 ml-9 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="/contact" className="inline-block bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-2 px-6 rounded-full transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
