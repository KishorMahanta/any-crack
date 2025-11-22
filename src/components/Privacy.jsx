import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">
                ANY-CRACK-IG does NOT collect, store, or transmit any personal information. The Instagram usernames 
                entered into the application are processed locally in your browser and are not saved to any server or database.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">2. No Data Storage</h2>
              <p className="leading-relaxed">
                We do not maintain any databases of user information, search queries, or generated passwords. 
                All processing happens in real-time in your web browser and is not recorded.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">3. Payment Information</h2>
              <p className="leading-relaxed">
                Payment transactions are processed securely through Razorpay, a third-party payment gateway. 
                We do not collect, store, or have access to your payment card details. All payment information 
                is handled directly by Razorpay in accordance with their privacy policy and PCI-DSS compliance standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">4. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                This application does not use cookies, analytics, or any tracking technologies. Your browsing 
                activity on this site is completely private.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">5. Third-Party Services</h2>
              <p className="leading-relaxed">
                We use the following third-party services:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Razorpay:</strong> For payment processing (subject to their privacy policy)</li>
                <li><strong>Vite/React:</strong> For application framework (no data collection)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">6. Security</h2>
              <p className="leading-relaxed">
                Since we don't collect or store any data, there is no risk of your information being compromised 
                through our service. All password generation is done using mathematical algorithms with no external data sources.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">7. Children's Privacy</h2>
              <p className="leading-relaxed">
                This service is not intended for users under 18 years of age. We do not knowingly collect 
                information from minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">8. Changes to Privacy Policy</h2>
              <p className="leading-relaxed">
                We reserve the right to update this privacy policy at any time. Changes will be posted on this page 
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">9. Contact</h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy, please contact us through the feedback 
                mechanism provided in the application.
              </p>
            </section>
          </div>

          <div className="mt-8 p-4 bg-gray-100 border-l-4 border-gray-800 rounded">
            <p className="text-sm text-gray-700">
              <strong>Last Updated:</strong> November 22, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}