import Link from "next/link"
import Image from "next/image"

export default function EmailConfirmed() {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
      <div className="bg-green-500 rounded-full p-4 mb-6">
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
          className="text-white"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>

      <h1 className="text-4xl font-bold mb-4 text-purple-400">Email Confirmed!</h1>

      <p className="text-xl mb-6 text-gray-300">
        Thank you for signing up for BarHopper! Your email has been successfully verified.
      </p>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">What&apos;s Next?</h2>
        <ul className="text-left text-gray-300 space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Complete your profile to get personalized bar recommendations</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Explore nearby bars and check their current status</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Save your favorite venues for quick access</span>
          </li>
        </ul>
      </div>


      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/dashboard"
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/profile/edit"
          className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-900 hover:bg-opacity-30 transition-colors"
        >
          Complete Your Profile
        </Link>
      </div>
    </div>
  )
}

