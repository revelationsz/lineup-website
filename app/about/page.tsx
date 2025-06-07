import type React from "react"
import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">About Lineup</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Your ultimate nightlife companion app designed to make your night out easier, more enjoyable, and completely
          <span className="gradient-text font-semibold"> hassle-free</span>.
        </p>
      </div>

      {/* Main Description */}
      <div className="glass-card p-8 md:p-12 rounded-3xl glow">
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Welcome to Lineup, your ultimate nightlife companion app designed to make your night out easier, more
          enjoyable, and completely hassle-free. Whether you&apos;re exploring new spots or visiting your favorite local
          venues, Lineup offers real-time crowd-sourced insights and social connections to ensure you always have the best night possible.
          Connect with friends, see their latest reviews, and compete on leaderboards while discovering the perfect spots for your night out.
        </p>

        <div className="flex justify-center">
          <div className="glass-card p-6 rounded-2xl">
            <img
              src="https://i.postimg.cc/05CxBfCX/bar-app-mockup-for-website-copy.png"
              alt="Lineup App Interface"
              width={600}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={
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
            }
            title="Live Bar Updates"
            description="Instantly view current line lengths, music genres, cover charges, crowd density, and more."
          />
          <FeatureCard
            icon={
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
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
            }
            title="Interactive Map View"
            description="Effortlessly locate and navigate to bars around you with our interactive map."
          />
          <FeatureCard
            icon={
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
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            }
            title="Personalized Bar Lists"
            description="Favorite your go-to spots and discover new bars tailored to your tastes."
          />
          <FeatureCard
            icon={
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
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            }
            title="Community Reviews"
            description="Contribute anonymously to collective bar ratings, shaping the overall community experience."
          />
          <FeatureCard
            icon={
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
            }
            title="Favorites and Recommendations"
            description="Mark bars as favorites and quickly access them from your profile."
          />
          <FeatureCard
            icon={
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            title="Friends & Leaderboards"
            description="Add friends, view their latest reviews, and compete on point-based rankings while discovering nightlife together."
          />
        </div>
      </section>

      {/* Social Nightlife Experience */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">Social Nightlife Experience</h2>
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Nightlife is better with friends. Lineup&apos;s social features let you connect with your crew and discover new spots together through trusted recommendations and friendly competition.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold gradient-text">Connect & Discover</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="glass p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    Add friends and see their latest bar reviews and recommendations in real-time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="glass p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    Make group decisions based on trusted friend recommendations and shared experiences.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="glass p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    Build your nightlife network with like-minded people who share your venue preferences.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold gradient-text">Compete & Earn Points</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="glass p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    Climb the leaderboards by contributing helpful and accurate venue reviews.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="glass p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    Earn points for active participation and see how you rank among your friends.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="glass p-2 rounded-lg mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    Discover who the top nightlife experts are in your friend group and city.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Reviews Work */}
      <div className="glass-card p-8 md:p-12 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">How Reviews Work</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          When you leave a review on a bar, your input directly shapes the bar&apos;s overall rating. Here&apos;s how it
          works:
        </p>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <div className="glass p-2 rounded-lg mt-1">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="leading-relaxed">
              Your personal review isn&apos;t publicly displayed individually but influences the collective rating shown.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="glass p-2 rounded-lg mt-1">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="leading-relaxed">
              An intelligent algorithm blends your input with other recent reviews to create a dynamic, accurate picture
              of the bar&apos;s atmosphere.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="glass p-2 rounded-lg mt-1">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="leading-relaxed">
              If a bar hasn&apos;t received any reviews within the past 24 hours, your review sets the current public
              rating until new ones are added.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="glass p-2 rounded-lg mt-1">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="leading-relaxed">
              Your friends can see your latest reviews and recommendations, helping your social circle discover great spots together.
            </span>
          </li>
        </ul>
      </div>

      {/* Privacy and Support Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold gradient-text mb-6">Privacy and Security</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <div className="glass p-2 rounded-lg mt-1">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-white">Secure Authentication:</span>
                <span className="block text-gray-300 mt-1">Safely sign in using Google authentication for a streamlined, secure login.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="glass p-2 rounded-lg mt-1">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-white">Data Protection:</span>
                <span className="block text-gray-300 mt-1">Your personal information and review data are securely stored and managed with industry-standard encryption.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold gradient-text mb-6">Support and Contact</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Encounter an issue or have feedback? Reach out to us directly from the app or through our contact form.
          </p>
          <Link
            href="/contact"
            className="glass-button px-6 py-3 rounded-xl text-white font-medium inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <div className="glass-card p-12 rounded-3xl text-center glow">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Get Started Today!</h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Download Lineup, sign in, and transform how you experience nightlife. We&apos;re excited to have you join our
          growing community!
        </p>
        <Link
          href="https://apps.apple.com/app/id6743187492?"
          className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold text-white inline-flex items-center gap-3 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download Now
        </Link>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="glass p-3 rounded-xl group-hover:glow transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
