
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-400 text-center">Welcome to Lineup</h1>
      <p className="text-xl mb-16 text-center max-w-2xl text-gray-300">
        Stay up to date on lines, cover, and music for bars so you never have a dull night out with real time updates from other users
      </p>

     {/* New download button right after intro text */}
     <a
        href="https://apps.apple.com/app/i6743187492?"
        className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors mb-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Now
      </a>

      <a
        href='https://apps.apple.com/app/i6743187492?' 
        target='_blank'>
        <img  
          className='mb-10' 
          src='https://i.postimg.cc/YSKwW9Pk/appicon-Bright.png' 
          alt='Screenshot-2025-02-19-172650-copy'
          width='300'
          height='300'/>
      </a>

      <div className="bg-gradient-to-r from-purple-900 to-purple-700 p-6 rounded-lg shadow-lg mb-8 w-full max-w-2xl">
        <div className="flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-300"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <p className="text-lg font-medium text-white">
            Rate Bars and Others reviews to get points which get you sweet deals with our partners in the future!!
          </p>
        </div>
      </div>

      <div className="relative w-5/6 mb-10">
        <img
          src="https://i.postimg.cc/KvVWqkCs/bar-app-mockup-for-website-copy2.png"
          alt="Lineup App Screenshot"
        />
      </div>

      {/* Final download CTA with App Store badge */}
      <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Ready to find the best bars tonight?</h2>
        <p className="text-gray-300 mb-6">Download Lineup now and never wait in line again!</p>
        <a
          href="https://apps.apple.com/app/i6743187492?"
          className="inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-12"
          />
        </a>
      </div>

    </div>
  )
}

