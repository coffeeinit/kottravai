import React from 'react';

const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
          Privacy Policy
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Your Privacy Matters
        </h1>
        <p className="text-xl text-purple-700 font-semibold mb-4 max-w-2xl mx-auto">
          We are committed to protecting your privacy and ensuring the security of your personal information.
        </p>
      </div>
    </section>
    
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <div className="space-y-8">
          
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              At Kottravai, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700">
              <strong>Last updated:</strong> January 1, 2025
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Personal Information:</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Address and location information</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Automatically Collected Information:</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your orders and payments</li>
              <li>To communicate with you about our programs and events</li>
              <li>To improve our website and user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect against fraud and abuse</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
            <p className="text-gray-700 mb-3">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal data on a need-to-know basis</li>
              <li>Secure hosting and data storage practices</li>
            </ul>
          </div>

          {/* Cookies and Tracking */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies and Tracking Technologies</h3>
            <p className="text-gray-700 mb-3">
              We use cookies and similar technologies to enhance your browsing experience and analyze website usage.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Essential Cookies:</strong> Required for basic website functionality</p>
              <p><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</p>
              <p><strong>Marketing Cookies:</strong> Used to deliver relevant content and advertisements</p>
            </div>
            <p className="text-gray-700 mt-3">
              You can control cookie settings through your browser preferences.
            </p>
          </div>

          {/* Third-Party Services */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h3>
            <p className="text-gray-700 mb-3">
              We may use trusted third-party services for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Payment processing (secure and PCI compliant)</li>
              <li>Website analytics and performance monitoring</li>
              <li>Email communication and marketing</li>
              <li>Customer support and service management</li>
            </ul>
            <p className="text-gray-700 mt-3">
              These services have their own privacy policies, and we recommend reviewing them.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Privacy Rights</h3>
            <p className="text-gray-700 mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h3>
            <p className="text-gray-700">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Typically, we retain data for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
              <li>Account information: Until account deletion or 7 years after last activity</li>
              <li>Transaction data: 7 years for tax and legal compliance</li>
              <li>Marketing communications: Until you unsubscribe</li>
              <li>Website analytics: 26 months maximum</li>
        </ul>
          </div>

          {/* Children's Privacy */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Children's Privacy</h3>
            <p className="text-gray-700">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </div>

          {/* International Transfers */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">International Data Transfers</h3>
            <p className="text-gray-700">
              Your personal data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy and applicable laws.
            </p>
          </div>

          {/* Changes to Policy */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h3>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-700 mb-3">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-purple-50 rounded-lg p-4 space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> support@kottravai.in
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 97870 30811
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Kottravai Head Office, Vaazhai Incubator Campus, Puliyangudi, Tenkasi, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              <strong>Legal Disclaimer:</strong> This privacy policy is provided for informational purposes. For a legally binding privacy policy tailored to your specific needs, please consult with a qualified legal professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy; 