export default function Terms() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Purple blobs background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="gradient-blob absolute w-[450px] h-[450px] rounded-full opacity-80"
          style={{
            background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.9), transparent 65%)',
            filter: 'blur(100px)',
            top: '20%',
            left: '5%',
          }}
        />
        <div
          className="gradient-blob absolute w-[420px] h-[420px] rounded-full opacity-85"
          style={{
            background: 'radial-gradient(ellipse, rgba(71, 16, 199, 0.85), transparent 65%)',
            filter: 'blur(100px)',
            bottom: '15%',
            right: '10%',
          }}
        />
      </div>
    <div className="relative z-10 max-w-4xl mx-auto space-y-8 pt-24 px-6 pb-24">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-6xl md:text-7xl font-bold text-[#8B5CF6]">Terms of Service</h1>
        <p className="text-lg font-semibold text-gray-300">
          Effective Date: <time dateTime="2026-10-06">October 6, 2026</time>
        </p>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Please read these terms carefully before using LineUp. By using our app, you agree to these terms.
        </p>
      </div>

      {/* Terms Content */}
      <div className="space-y-8">
        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">1. Acceptance of Terms</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              By downloading, installing, or using the LineUp mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">2. Description of Service</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              LineUp is a mobile application that helps users discover bars and nightlife venues, navigate to locations, and access real-time, user-generated ratings and information. Features include:
            </p>
            <p>
              (i) A bar directory and interactive map for discovering and navigating to nightlife venues;
            </p>
            <p>
              (ii) User-submitted ratings on venue conditions such as line length, cover charge, music, and atmosphere;
            </p>
            <p>
              (iii) Photo uploads showing current venue conditions; and
            </p>
            <p>
              (iv) A social feature that allows you to connect with other users and view their ratings.
            </p>
            <p>
              Ratings and photo uploads are available only when you are within 0.2 miles of a venue. LineUp does not partner with, endorse, or have any affiliation with any venue listed on the App.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">3. Eligibility</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              You must be at least 21 years old and a resident of the United States to use this App. By using the App, you represent and warrant that you meet these requirements. If we learn that a user does not meet these eligibility requirements, we may terminate their account without notice.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">4. User Accounts</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              4.1 <strong>Account Creation.</strong> You may be required to create an account to access certain features of the App. You agree to provide accurate and complete information during registration and to keep your account information current.
            </p>
            <p>
              4.2 <strong>Account Security.</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to notify us immediately at <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a> if you become aware of any unauthorized use of your account.
            </p>
            <p>
              4.3 <strong>One Account Per User.</strong> Each user may maintain only one account. We reserve the right to remove duplicate accounts without notice.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">5. User-Generated Content</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              5.1 <strong>Your Content.</strong> &quot;User Content&quot; means any ratings, reviews, photos, or other material you submit through the App.
            </p>
            <p>
              5.2 <strong>License Grant.</strong> By submitting User Content, you grant LineUp a non-exclusive, royalty-free, worldwide, transferable, sublicensable license to use, display, reproduce, modify, and distribute your User Content solely in connection with operating and providing the App. This license continues for as long as your User Content remains on the App and ends when you delete your User Content or your account, except where your User Content has been shared with other users or incorporated into aggregated data.
            </p>
            <p>
              5.3 <strong>Your Representations.</strong> You represent and warrant that: (i) you own or have the necessary rights to submit your User Content; (ii) your User Content does not infringe the intellectual property, privacy, or other rights of any third party; and (iii) your User Content is accurate and not misleading.
            </p>
            <p>
              5.4 <strong>Content Moderation.</strong> LineUp may, but is not obligated to, review, monitor, edit, or remove any User Content at its sole discretion, for any reason, including User Content that violates these Terms or that we find objectionable.
            </p>
            <p>
              5.5 <strong>No Endorsement.</strong> User Content reflects the views of the individual user who submitted it, not the views of LineUp. We do not endorse, verify, or guarantee the accuracy of any User Content.
            </p>
            <p>
              5.6 <strong>Content Removal by You.</strong> You may delete your own User Content through the App at any time. Upon deletion, we will remove your User Content within a commercially reasonable time, though cached or archived copies may persist for a limited period.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">6. Content Standards</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              You agree that any User Content you submit will not: (i) be false, misleading, or deceptive; (ii) be defamatory, obscene, threatening, harassing, or abusive; (iii) infringe any third party&#x27;s intellectual property, privacy, or publicity rights; (iv) contain viruses, malware, or other harmful code; (v) promote illegal activity; (vi) impersonate any person or entity; or (vii) violate any applicable law or regulation.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">7. Copyright Complaints</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              If you believe that User Content on the App infringes your copyright, you may submit a notice to <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a> containing: (i) a description of the copyrighted work you claim has been infringed; (ii) a description of where the allegedly infringing content is located within the App; (iii) your contact information; (iv) a statement that you have a good faith belief the use is not authorized by the copyright owner, its agent, or the law; and (v) a statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the owner.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">8. Intellectual Property</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              All content, features, functionality, branding, logos, and trademarks within the App (excluding User Content) are the property of LineUp and its licensors and are protected by United States copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any of this material without prior written permission from LineUp.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">9. Privacy and Location Data</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              9.1 <strong>Location Data.</strong> The App uses your device&#x27;s location services to determine whether you are within 0.2 miles of a venue for rating and photo upload purposes. All location processing is performed locally on your device. LineUp does not collect, transmit, or store your geographic coordinates on its servers.
            </p>
            <p>
              9.2 <strong>Privacy Policy.</strong> Your use of the App is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the App, you consent to the practices described in the Privacy Policy.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">10. Prohibited Conduct</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              You agree not to: (i) use the App for any unlawful or unauthorized purpose; (ii) submit false or misleading ratings, reviews, or other information; (iii) attempt to manipulate ratings or reviews, including by using multiple accounts; (iv) interfere with or disrupt the App&#x27;s functionality or servers; (v) attempt to reverse engineer, decompile, or extract the source code of the App; (vi) use automated tools, bots, or scrapers to access the App or collect data from it; (vii) harass, threaten, or intimidate other users; or (viii) use the App to advertise or promote products or services without our prior written consent.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">11. Disclaimer of Warranties</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. LINEUP DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY INFORMATION PROVIDED THROUGH THE APP, INCLUDING USER-GENERATED RATINGS AND REVIEWS, IS ACCURATE, COMPLETE, OR RELIABLE.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">12. Limitation of Liability</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, LINEUP AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF REVENUE, OR LOSS OF BUSINESS OPPORTUNITY, REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR WHETHER LINEUP WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              LINEUP&#x27;S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE APP WILL NOT EXCEED ONE HUNDRED DOLLARS ($100.00).
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">13. Indemnification</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              You agree to indemnify, defend, and hold harmless LineUp and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&#x27; fees) arising out of or related to: (i) your use of the App; (ii) your User Content; (iii) your violation of these Terms; or (iv) your violation of any third party&#x27;s rights.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">14. Dispute Resolution</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              14.1 <strong>Informal Resolution.</strong> Before filing any formal proceeding, you agree to contact us at <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a> and attempt to resolve the dispute informally for at least thirty (30) days.
            </p>
            <p>
              14.2 <strong>Binding Arbitration.</strong> If the dispute is not resolved informally, either party may elect to resolve it through binding individual arbitration administered by the American Arbitration Association (&quot;AAA&quot;) under its Consumer Arbitration Rules. The arbitration will take place in the State of Florida. The arbitrator&#x27;s decision will be final and binding and may be entered as a judgment in any court of competent jurisdiction.
            </p>
            <p>
              14.3 <strong>Class Action Waiver.</strong> YOU AND LINEUP AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.
            </p>
            <p>
              14.4 <strong>Exceptions.</strong> Either party may bring a claim in small claims court if the claim qualifies. Either party may seek injunctive or equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement of intellectual property rights.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">15. Termination</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              15.1 <strong>By LineUp.</strong> We may suspend or terminate your account and access to the App at any time, with or without cause, and with or without notice. Grounds for termination include, but are not limited to, violation of these Terms or conduct that we determine is harmful to other users or the App.
            </p>
            <p>
              15.2 <strong>By You.</strong> You may stop using the App and delete your account at any time.
            </p>
            <p>
              15.3 <strong>Effect of Termination.</strong> Upon termination, your right to use the App ceases immediately. Sections 5.2 (License Grant), 11 (Disclaimer of Warranties), 12 (Limitation of Liability), 13 (Indemnification), 14 (Dispute Resolution), and 17 (Governing Law) survive termination.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">16. Changes to Terms</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              We may update these Terms at any time by posting the revised version within the App. We will update the &quot;Effective Date&quot; at the top of these Terms when changes are made. Your continued use of the App after any changes constitutes your acceptance of the updated Terms. If you do not agree with the changes, you must stop using the App.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">17. Governing Law</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.
            </p>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-[#8B5CF6] mb-4">18. General Provisions</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              18.1 <strong>Severability.</strong> If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.
            </p>
            <p>
              18.2 <strong>Entire Agreement.</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and LineUp regarding your use of the App and supersede all prior agreements and understandings.
            </p>
            <p>
              18.3 <strong>Assignment.</strong> LineUp may assign its rights and obligations under these Terms without restriction. You may not assign your rights or obligations under these Terms without our prior written consent.
            </p>
            <p>
              18.4 <strong>Waiver.</strong> The failure of LineUp to enforce any right or provision of these Terms will not be considered a waiver of that right or provision.
            </p>
            <p>
              18.5 <strong>Contact.</strong> If you have questions about these Terms, contact us at <a href="mailto:lineup.barapp@gmail.com" className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors underline">lineup.barapp@gmail.com</a>.
            </p>
          </div>
        </section>
      </div>

      {/* Contact CTA */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#8B5CF6] mb-4">Questions about our Terms?</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Need clarification on any of these terms? We&apos;re here to help.
        </p>
        <a
          href="/contact"
          className="btn-lime px-8 py-4 rounded-2xl text-lg font-semibold text-white inline-flex items-center gap-3 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Contact Us
        </a>
      </div>
    </div>
    </div>
  )
}
