export default function About() {
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About the Summit</h1>
        
        <div className="prose prose-lg prose-green max-w-none text-gray-700">
          <p className="lead text-2xl text-green-900 font-light mb-8 leading-relaxed">
            The Gombe State 2026 AIDS Summit is a premier gathering of public health officials, practitioners, and community leaders dedicated to strengthening the TB-HIV response in Gombe State.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Vision</h2>
          <p>
            To achieve a healthier, HIV and TB-free Gombe State through sustained, integrated, and well-funded community-driven responses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Context</h2>
          <p>
            In the face of declining external funding, it has become imperative for Gombe State and its partners to innovate, integrate, and take ownership of the health initiatives that protect our communities. This summit serves as the critical intersection where policy meets practice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who Should Attend?</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-green-600">
            <li><strong>Government Officials:</strong> Policy makers, Ministry of Health representatives, and state health administrators.</li>
            <li><strong>Healthcare Professionals:</strong> Doctors, nurses, and clinical officers operating on the frontlines of TB and HIV care.</li>
            <li><strong>Development Partners:</strong> International and local NGOs, funding agencies, and strategic health partners.</li>
            <li><strong>Researchers & Academics:</strong> Scientists and public health researchers contributing to program science.</li>
            <li><strong>Community Representatives:</strong> Civil society organizations and community-led monitoring groups.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
