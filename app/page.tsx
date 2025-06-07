export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 pt-16">
        <div className="floating">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-6">
            Welcome to Lineup
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Stay up to date on lines, cover, and music for bars so you never have a dull night out with 
          <span className="gradient-text font-semibold"> real-time updates</span> from other users
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
            Download Now
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
      <section className="floating">
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
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Real-time Updates */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="glass p-3 rounded-xl mr-4 group-hover:glow transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Live Updates</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Get real-time information about line lengths, cover charges, and crowd density from other users.
            </p>
          </div>

          {/* Community Reviews */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="glass p-3 rounded-xl mr-4 group-hover:glow transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Smart Reviews</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Rate bars and read community reviews to discover the best spots and earn rewards with our partners.
            </p>
          </div>

          {/* Music & Atmosphere */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="glass p-3 rounded-xl mr-4 group-hover:glow transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-400"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Music & Vibe</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Know what music is playing and the atmosphere before you arrive. Never walk into the wrong vibe again.
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="w-full max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl glow">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="glass p-6 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Earn Rewards for Your Reviews
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Rate bars and contribute to the community to earn points. Get exclusive deals and discounts 
                with our partner venues. The more you help others, the more you save!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshot */}
      <section className="w-full max-w-4xl mx-auto">
        <div className="glass-card p-8 rounded-3xl">
          <img
            src="https://i.postimg.cc/KvVWqkCs/bar-app-mockup-for-website-copy2.png"
            alt="Lineup App Screenshot"
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-4xl mx-auto">
        <div className="glass-card p-12 rounded-3xl text-center glow">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to find the best bars tonight?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Download Lineup now and never wait in line again! Join thousands of users who are already 
            making smarter nightlife decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://apps.apple.com/app/id6743187492?"
              className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold text-white flex items-center gap-3 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Get Started Now
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
        </div>
      </section>
    </div>
  )
}

