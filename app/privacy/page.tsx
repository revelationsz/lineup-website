export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Privacy Policy</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your privacy is important to us. Learn how we collect, use, and protect your personal data.
        </p>
      </div>

      {/* Privacy Content */}
      <div className="space-y-8">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal
            data when you use Lineup.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">2. Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed mb-4">We may collect the following information:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Account Information:</strong> Name, email address, profile photo.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Google Login Information:</strong> If you sign in using Google, we store your Google login credentials as provided through Google Sign-In services.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Location Data:</strong> To show nearby bars and calculate distances.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Usage Data:</strong> Information about how you interact with the app.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Device Information:</strong> Device type, operating system, and app version.</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">We use your data to:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Provide and improve app functionality.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Show relevant bar recommendations.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Send important updates or notifications.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Ensure compliance with our Terms of Service.</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">4. Sharing Your Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">We do not sell or rent your personal data to third parties. We may share your data with:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Service Providers:</strong> To assist in operating the app.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Legal Authorities:</strong> If required by law or to enforce our Terms.</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">5. Data Retention</h2>
          <p className="text-gray-300 leading-relaxed">
            We retain your data only as long as necessary to provide the app&apos;s services or comply with legal obligations.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">6. Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We use reasonable measures to protect your data. However, no method of transmission over the internet is 100%
            secure.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">7. Your Rights</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Access, update, or delete your personal data.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Object to or restrict certain data processing.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Withdraw consent for data collection.</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">8. Third-Party Services</h2>
          <p className="text-gray-300 leading-relaxed">
            The app may link to third-party services (e.g., Google authentication). We store Google login credentials
            provided by Google Sign-In to facilitate your login and enhance your user experience. We are not responsible for
            their privacy practices.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">9. Children&apos;s Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            The app is not intended for children under 18. We don&apos;t knowingly collect data from minors.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">10. Changes to Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. Continued use of the app signifies acceptance of the
            updated policy.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold gradient-text mb-4">11. Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:lineup.barapp@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors underline">
              lineup.barapp@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="glass-card p-8 md:p-12 rounded-3xl text-center glow">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Privacy Questions?</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Have concerns about your privacy or data? We&apos;re committed to transparency and are here to help.
        </p>
        <a
          href="/contact"
          className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold text-white inline-flex items-center gap-3 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Contact Us
        </a>
      </div>
    </div>
  )
}

