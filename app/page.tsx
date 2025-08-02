import WaitlistCounter from '../components/WaitlistCounter'
import EmailSignup from '../components/EmailSignup'

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 pt-12">
        <div className="floating">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-6">
            Welcome to Lineup
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          <span className="gradient-text font-semibold"> Download the app now</span> to  
          join the waitlist for our
          <span className="gradient-text font-semibold"> LIMITED LAUNCH!!</span>
        </p>
        
        {/* Waitlist Counter */}
        <WaitlistCounter className="py-8" />
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Join those who are already on the waitlist! Download the app to secure your spot 
          and be ready when we launch with Boston's hottest venues.
        </p>
        
        {/* Download CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
          <a
            href="https://apps.apple.com/app/id6743187492?"
            className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold text-white flex items-center gap-3 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Join Waitlist
          </a>
          
          <a
            href="https://apps.apple.com/app/id6743187492?"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-14"
            />
          </a>
        </div>
      </section>

      {/* App Icon Section */}
      {/* <section className="floating">
        <a
          href="https://apps.apple.com/app/id6743187492?"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-105 transition-transform duration-300"
        >
          <div className="glass-card p-8 rounded-3xl glow">
            <img
              src="https://i.postimg.cc/YSKwW9Pk/appicon-Bright.png"
              alt="Lineup App Icon"
              width="200"
              height="200"
              className="mx-auto rounded-2xl"
            />
          </div>
        </a>
      </section> */}

      {/* Why a Waitlist? */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Power in Numbers */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="glass p-3 rounded-xl mr-4 group-hover:glow transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <circle cx="12" cy="8" r="3"></circle>
                  <circle cx="5" cy="10" r="2"></circle>
                  <circle cx="19" cy="10" r="2"></circle>
                  <path d="M12 11a4 4 0 00-4 4v3h8v-3a4 4 0 00-4-4z"></path>
                  <path d="M5 12a4 4 0 00-4 4v2h4"></path>
                  <path d="M19 12a4 4 0 014 4v2h-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Power in Numbers</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Every signup shows Boston bars that real people are ready for Lineup. The bigger our community,
              the easier it is to bring venues—and perks—to you.
            </p>
          </div>

          {/* Unlock Exclusive Deals */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="glass p-3 rounded-xl mr-4 group-hover:glow transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M4 9V5a2 2 0 012-2h12a2 2 0 012 2v4a3 3 0 010 6v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a3 3 0 010-6z"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Unlock Exclusive Deals</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              When we can prove hundreds want in, bars offer drink specials, skip-the-line access and other
              rewards—available only to our waitlisters.
            </p>
          </div>

          {/* Shape the Launch */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="glass p-3 rounded-xl mr-4 group-hover:glow transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M4 13l6 6 5-5-6-6-5 5z"></path>
                  <path d="M14 7l3-3 4 4-3 3"></path>
                  <path d="M9 18l-5 2 2-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Shape the Launch</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Joining early means you vote on which bars we onboard next and what features we build—helping shape your ideal nightlife app.
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="floating">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Want Launch Updates?
          </h2>
          </div>
          <p className="text-xl text-gray-300">
            Get notified when we go live in your city and receive exclusive early access perks.
          </p>
        </div>
        <EmailSignup />
      </section>

      {/* Learn More Section */}
      <section className="w-full max-w-3xl mx-auto text-center">
        <p className="text-xl text-gray-300 mb-12">
          Curious about how Lineup will work once we launch?
        </p>
        <a
          href="/about"
          className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold text-white hover:scale-105 transition-transform"
        >
          See How It Works
        </a>
      </section>
    </div>
  )
}

