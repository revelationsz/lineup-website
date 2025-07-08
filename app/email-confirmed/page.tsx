'use client';

import { useEffect, useState } from 'react';

export default function EmailConfirmed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      return mobileKeywords.some(keyword => userAgent.includes(keyword));
    };

    setIsMobile(checkMobile());
  }, []);

  const handleDeeplink = () => {
    // Try to open the app
    window.location.href = 'lineup://signin';
    
    // Fallback: if the app doesn't open within 2 seconds, suggest download
    setTimeout(() => {
      if (confirm('Unable to open the Lineup app. Would you like to download it from the App Store?')) {
        window.open('https://apps.apple.com/app/id6743187492', '_blank');
      }
    }, 2000);
  };

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
        Thank you for signing up for Lineup! Your email has been successfully verified. Please try logging back into the app again!
      </p>

      <div className="flex flex-col items-center gap-4 w-full">
        {isMobile && (
          <button
            onClick={handleDeeplink}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 w-full max-w-sm"
          >
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
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Open Lineup App
          </button>
        )}

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://apps.apple.com/app/id6743187492"
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
          
          <p className="text-gray-400 text-sm">
            {isMobile ? "Don't have the app yet?" : "Download the Lineup app:"}
          </p>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-8 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">What&apos;s Next?</h2>
        <ul className="text-left text-gray-300 space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Head back to the app and start exploring bars near you!!</span>
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

  

    </div>
  )
}

