import type React from "react"
import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">About Bar Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your ultimate nightlife companion app designed to make your night out easier, more enjoyable, and completely
          hassle-free.
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg p-8 shadow-lg mb-12">
        <p className="text-gray-300 mb-6">
          Welcome to Bar Me, your ultimate nightlife companion app designed to make your night out easier, more
          enjoyable, and completely hassle-free. Whether you&apos;re exploring new spots or visiting your favorite local
          venues, Bar Me offers real-time crowd-sourced insights to ensure you always have the best night possible.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://i.postimg.cc/05CxBfCX/bar-app-mockup-for-website-copy.png"
            alt="Bar Me App Interface"
            width={600}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            }
            title="Smart Sorting and Filtering"
            description="Easily filter bars by distance, wait times, music type, and more."
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
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">How Reviews Work</h2>
        <p className="text-gray-300 mb-4">
          When you leave a review on a bar, your input directly shapes the bar&apos;s overall rating. Here&apos;s how it
          works:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>
            Your personal review isn&apos;t publicly displayed individually but influences the collective rating shown.
          </li>
          <li>
            An intelligent algorithm blends your input with other recent reviews to create a dynamic, accurate picture
            of the bar&apos;s atmosphere.
          </li>
          <li>
            If a bar hasn&apos;t received any reviews within the past 24 hours, your review sets the current public
            rating until new ones are added.
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Privacy and Security</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <span className="font-semibold">Secure Authentication:</span> Safely sign in using Google authentication
              for a streamlined, secure login.
            </li>
            <li>
              <span className="font-semibold">Data Protection:</span> Your personal information and review data are
              securely stored and managed with industry-standard encryption.
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Support and Contact</h2>
          <p className="text-gray-300 mb-4">
            Encounter an issue or have feedback? Reach out to us directly from the app or email us at{" "}
            <a href="mailto:support@barmeapp.com" className="text-purple-400 hover:underline">
              support@barmeapp.com
            </a>
            .
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Get Started Today!</h2>
        <p className="text-white mb-6">
          Download Bar Me, sign in, and transform how you experience nightlife. We&apos;re excited to have you join our
          growing community!
        </p>
        <Link
          href="https://apps.apple.com/app/i6743187492?"
          className="inline-block bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Now
        </Link>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
      <div className="flex items-start">
        <div className="mr-4 mt-1">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-300">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}
