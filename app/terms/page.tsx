export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Terms of Service</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Please read these terms carefully before using Lineup. By using our app, you agree to these terms.
        </p>
      </div>

      {/* Terms Content */}
      <div className="space-y-8">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Lineup! By using our app, you agree to these Terms of Service ("Terms"). If you do not
            agree, you may not use the app.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">2. Description of Service</h2>
          <p className="text-gray-300 leading-relaxed">
            Lineup is a platform that helps users discover bars, track line lengths, view current music, and navigate
            nightlife locations. The service includes features such as a bar list, map view, and user reviews.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">3. Eligibility</h2>
          <p className="text-gray-300 leading-relaxed">
            You must be at least 21 years old to use this app. By using the app, you represent that you are of legal
            drinking age in your country.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">4. User Accounts</h2>
          <p className="text-gray-300 leading-relaxed">
            You may be required to create an account to use some features. You are responsible for maintaining the security
            of your account and for all activities that occur under your account.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">5. Prohibited Conduct</h2>
          <p className="text-gray-300 leading-relaxed mb-4">You agree not to:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Use the app for any unlawful or unauthorized purpose.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Submit false or misleading information.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Interfere with or disrupt the app's functionality.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Attempt to reverse engineer or hack the app.</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">6. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            All content, logos, and trademarks within the app are the property of Lineup and its licensors. You may not
            reproduce or distribute this content without written permission.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-gray-300 leading-relaxed">
            The app is provided "AS IS" without warranties of any kind. We do not guarantee the accuracy or
            availability of information provided.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            We are not liable for any damages resulting from your use of the app, including but not limited to loss of data,
            loss of revenue, or personal injury.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">9. Termination</h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to suspend or terminate your access to the app at any time for violation of these Terms.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">10. Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms are governed by the laws of The United States. Any disputes will be resolved in the courts of Massachusetts, United States.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">11. Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to update these Terms at any time. Continued use of the app after changes signifies
            acceptance.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">12. Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have questions about these Terms, contact us at{" "}
            <a href="mailto:lineup.barapp@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors underline">
              lineup.barapp@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="glass-card p-8 md:p-12 rounded-3xl text-center glow">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Questions about our Terms?</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Need clarification on any of these terms? We&apos;re here to help.
        </p>
        <a
          href="/contact"
          className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold text-white inline-flex items-center gap-3 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Contact Us
        </a>
      </div>
    </div>
  )
}

