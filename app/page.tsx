import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Welcome to BarHopper</h1>
      <p className="text-xl mb-16 text-center max-w-2xl text-gray-300">
        Stay up to date on lines, cover, and music for bars so you never have a dull night out!!
      </p>
      {/* <a
        href='https://postimg.cc/9Rv9NShr' 
        target='_blank'> */}
        <img  
          className='mb-40' 
          src='https://i.postimg.cc/9Rv9NShr/Screenshot-2025-02-19-172650-copy.png' 
          border='0' 
          alt='Screenshot-2025-02-19-172650-copy'/>
        {/* </a> */}
      <a
        // href="#download"
        className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        Download Comming Soon...
      </a>
    </div>
  )
}

