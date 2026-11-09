import React from 'react';

const TermsOfUse = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Terms of Use
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Terms & Conditions
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          Please read these terms carefully before using our services and website.
        </p>
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Use Agreement</h2>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
            <p className="mb-3">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Use License</h3>
            <p className="mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on Kottravai's website for personal, non-commercial transitory viewing only.</p>
            <p className="mb-3">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Disclaimer</h3>
            <p className="mb-3">The materials on Kottravai's website are provided on an 'as is' basis. Kottravai makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Limitations</h3>
            <p className="mb-3">In no event shall Kottravai or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kottravai's website, even if Kottravai or a Kottravai authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Accuracy of Materials</h3>
            <p className="mb-3">The materials appearing on Kottravai's website could include technical, typographical, or photographic errors. Kottravai does not warrant that any of the materials on its website are accurate, complete or current. Kottravai may make changes to the materials contained on its website at any time without notice.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Links</h3>
            <p className="mb-3">Kottravai has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kottravai of the site. Use of any such linked website is at the user's own risk.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Modifications</h3>
            <p className="mb-3">Kottravai may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Governing Law</h3>
            <p className="mb-3">These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Information</h3>
            <p className="mb-3">If you have any questions about these Terms of Use, please contact us at:</p>
            <p className="mb-3">Email: support@kottravai.in</p>
            <p className="mb-3">Address: Kottravai, Tamil Nadu, India</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-purple-50 rounded-lg">
          <p className="text-gray-600 text-sm">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This is a sample terms of use agreement. Please consult your legal advisor for a complete and legally binding version.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default TermsOfUse; 