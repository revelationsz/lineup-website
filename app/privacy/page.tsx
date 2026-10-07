export default function Privacy() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Purple blobs background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="gradient-blob absolute w-[500px] h-[500px] rounded-full opacity-80"
          style={{
            background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.9), transparent 65%)',
            filter: 'blur(100px)',
            top: '10%',
            right: '5%',
          }}
        />
        <div
          className="gradient-blob absolute w-[400px] h-[400px] rounded-full opacity-85"
          style={{
            background: 'radial-gradient(ellipse, rgba(71, 1, 235, 0.85), transparent 65%)',
            filter: 'blur(100px)',
            bottom: '25%',
            left: '5%',
          }}
        />
      </div>
    <div className="relative z-10 max-w-4xl mx-auto space-y-8 pt-24 px-6 pb-24">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-6xl md:text-7xl font-bold text-[#8B5CF6]">Privacy Policy</h1>
        <p className="text-lg font-semibold text-gray-300">
          Effective Date: <time dateTime="2026-10-06">October 6, 2026</time>
        </p>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your privacy is important to us. Learn how we collect, use, and protect your personal data.
        </p>
      </div>

      {/* Privacy Content */}
      <div className="space-y-8">
        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">1. Introduction</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              This Privacy Policy describes how LineUp (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and shares your information when you use the LineUp mobile application (&quot;App&quot;). By using the App, you agree to the practices described in this Privacy Policy. If you do not agree, do not use the App.
            </p>
            <p>
              This Privacy Policy should be read together with our Terms of Service.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">2. Information We Collect</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We collect the following categories of information:
            </p>
            <p>
              2.1 <strong>Account Information.</strong> When you create an account, we collect your name, email address, and profile photo. If you sign in using Google Sign-In, Google provides us with your name, email address, and profile photo through Google&#x27;s OAuth authentication service. We receive an authentication token from Google to verify your identity. We do not receive, access, or store your Google account password.
            </p>
            <p>
              2.2 <strong>User-Generated Content.</strong> When you use the App, you may submit ratings (such as line length, cover charge, music, and atmosphere), written reviews, and photos of venues. This content is stored on our servers and is visible to other users of the App.
            </p>
            <p>
              2.3 <strong>Social Information.</strong> If you use the App&#x27;s friends feature, we store your connections with other users. Your ratings and activity may be visible to users you have added as friends.
            </p>
            <p>
              2.4 <strong>Usage Data.</strong> We collect information about how you interact with the App, including the features you use, the screens you view, the times and dates of your activity, and the frequency and duration of your sessions.
            </p>
            <p>
              2.5 <strong>Device Information.</strong> We collect information about the device you use to access the App, including device type, operating system and version, unique device identifiers, and App version.
            </p>
            <p>
              2.6 <strong>Push Notification Tokens.</strong> If you enable push notifications, we collect a device token to deliver notifications to your device.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">3. Information We Do Not Collect</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              3.1 <strong>Location Data.</strong> The App uses your device&#x27;s built-in location services to determine whether you are within 0.2 miles of a venue for rating and photo upload purposes. All location processing is performed locally on your device. We do not collect, transmit, receive, or store your geographic coordinates or any other location data on our servers. We never have access to your precise location.
            </p>
            <p>
              3.2 <strong>Payment Information.</strong> The App does not process payments and does not collect any financial or payment information.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">4. How We Use Your Information</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We use the information we collect for the following purposes:
            </p>
            <p>
              (i) To create and maintain your account;
            </p>
            <p>
              (ii) To display your ratings, reviews, and photos to other users of the App;
            </p>
            <p>
              (iii) To enable the friends feature and display relevant activity from your connections;
            </p>
            <p>
              (iv) To send you push notifications about App updates, activity from friends, or other relevant information (if you have opted in);
            </p>
            <p>
              (v) To analyze usage patterns and improve the App&#x27;s features and performance;
            </p>
            <p>
              (vi) To enforce our Terms of Service and protect against misuse of the App;
            </p>
            <p>
              (vii) To respond to your inquiries and provide support; and
            </p>
            <p>
              (viii) To comply with legal obligations.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">5. How We Share Your Information</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:
            </p>
            <p>
              5.1 <strong>With Other Users.</strong> Your profile name, profile photo, ratings, reviews, and uploaded photos are visible to other users of the App. If you use the friends feature, your connected friends can see your ratings and activity.
            </p>
            <p>
              5.2 <strong>With Service Providers.</strong> We may share information with third-party service providers who help us operate the App, such as cloud hosting providers and analytics services. These providers are contractually obligated to use your information only to provide services to us and not for their own purposes.
            </p>
            <p>
              5.3 <strong>For Legal Purposes.</strong> We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
            </p>
            <p>
              5.4 <strong>In Connection with a Business Transfer.</strong> If LineUp is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change by posting the updated Privacy Policy within the App.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">6. Google User Data</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              When you sign in with Google, we access your Google account information (name, email address, and profile photo) solely to create and maintain your LineUp account. We store this information as part of your account profile. We do not access any other data from your Google account. We do not share your Google user data with third parties except as described in Section 5 of this Privacy Policy. Our use of Google user data complies with the Google API Services User Data Policy, including the Limited Use requirements.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">7. Data Retention</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              7.1 <strong>Account Data.</strong> We retain your account information for as long as your account is active. If you delete your account, we will delete your personal information within thirty (30) days, except as described below.
            </p>
            <p>
              7.2 <strong>User-Generated Content.</strong> Ratings, reviews, and photos you submit are retained for as long as your account is active. When you delete your account, your User Content will be removed within a commercially reasonable time. Aggregated or anonymized data derived from your content (such as average venue ratings) may persist after deletion.
            </p>
            <p>
              7.3 <strong>Legal Obligations.</strong> We may retain certain information for longer periods if required by law or to resolve disputes, enforce our Terms, or protect our legal rights.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">8. Data Security</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We use commercially reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. These measures include encryption of data in transit, secure server infrastructure, and access controls limiting who can view personal information.
            </p>
            <p>
              No method of electronic transmission or storage is completely secure. We cannot guarantee absolute security, and you use the App at your own risk.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">9. Your Rights and Choices</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              9.1 <strong>Access and Update.</strong> You can access and update your account information (name, email, and profile photo) through the App&#x27;s settings at any time.
            </p>
            <p>
              9.2 <strong>Delete Your Account.</strong> You may delete your account at any time through the App&#x27;s settings or by contacting us at <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a>. Upon deletion, we will remove your personal information and User Content in accordance with Section 7.
            </p>
            <p>
              9.3 <strong>Delete Specific Content.</strong> You may delete individual ratings, reviews, or photos you have submitted through the App at any time.
            </p>
            <p>
              9.4 <strong>Push Notifications.</strong> You may opt out of push notifications at any time through your device&#x27;s settings.
            </p>
            <p>
              9.5 <strong>Location Services.</strong> You may disable location services for the App through your device&#x27;s settings at any time. Note that disabling location services will prevent you from submitting ratings and photos, as those features require proximity verification.
            </p>
            <p>
              9.6 <strong>Additional Rights.</strong> Depending on where you live, you may have additional rights under applicable privacy laws, including the right to request a copy of your personal information, the right to request deletion, the right to object to or restrict certain processing, and the right to withdraw consent. To exercise any of these rights, contact us at <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a>. We will respond within thirty (30) days.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">10. Children&#x27;s Privacy</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The App is intended for users who are at least 21 years old. We do not knowingly collect personal information from anyone under the age of 21. If we learn that we have collected information from a user under 21, we will delete that information and terminate the associated account promptly. If you believe a user under 21 has provided us with personal information, please contact us at <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a>.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">11. Third-Party Services</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The App integrates with Google Sign-In for authentication purposes. When you use Google Sign-In, your interaction with Google is governed by Google&#x27;s Privacy Policy and Terms of Service. We encourage you to review Google&#x27;s privacy practices.
            </p>
            <p>
              The App may contain links to third-party websites or services (such as venue websites or map services). We are not responsible for the privacy practices of those third parties. We encourage you to read the privacy policies of any third-party service you access through the App.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">12. Changes to This Privacy Policy</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time. When we make changes, we will update the &quot;Effective Date&quot; at the top of this page and post the revised Privacy Policy within the App. Your continued use of the App after any changes constitutes your acceptance of the updated Privacy Policy. If we make material changes that significantly affect how we handle your personal information, we will provide prominent notice within the App before the changes take effect.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-card">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">13. Contact Us</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, contact us at:
            </p>
            <p>
              <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a>
            </p>
          </div>
        </section>
      </div>

      {/* Contact CTA */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 rounded-card text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#8B5CF6] mb-4">Privacy Questions?</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Have concerns about your privacy or data? We&apos;re committed to transparency and are here to help.
        </p>
        <a
          href="/contact"
          className="btn-lime px-8 py-4 rounded-2xl text-lg font-semibold inline-flex items-center gap-3 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Contact Us
        </a>
      </div>
    </div>
    </div>
  )
}
