import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">1. Educational Purpose Only</h2>
              <p className="leading-relaxed">
                ANY-CRACK-IG is a simulated educational tool designed for entertainment and learning purposes only. 
                This application does NOT crack actual passwords, access real accounts, or breach any security systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">2. No Real Password Access</h2>
              <p className="leading-relaxed">
                All "passwords" displayed by this application are randomly generated based on mathematical algorithms. 
                They are NOT real passwords and have NO connection to any actual Instagram accounts or user credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">3. Legal Compliance</h2>
              <p className="leading-relaxed">
                Users must not attempt to use this tool or its concepts for any illegal activities, including but not limited to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Unauthorized access to computer systems or accounts</li>
                <li>Identity theft or impersonation</li>
                <li>Privacy violations</li>
                <li>Any form of cybercrime</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">4. Payment Service</h2>
              <p className="leading-relaxed">
                The "decode password" feature is a simulated premium service. Payment processing is handled by Razorpay. 
                The decoded password is also randomly generated and has no connection to real credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">5. Disclaimer</h2>
              <p className="leading-relaxed">
                The creators and operators of ANY-CRACK-IG are not responsible for any misuse of this tool. 
                By using this service, you acknowledge that this is purely educational and agree not to use it for any illegal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">6. Age Restriction</h2>
              <p className="leading-relaxed">
                Users must be 18 years or older to use this service. By using this tool, you confirm that you meet this age requirement.
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