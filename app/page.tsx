import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to LineUp</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Organize your life, streamline your tasks, and boost your productivity with LineUp - the ultimate app for
        staying on top of your game.
      </p>
      <Image
        src="/placeholder.svg?height=300&width=300"
        alt="LineUp App Screenshot"
        width={300}
        height={300}
        className="rounded-lg shadow-lg mb-8"
      />
      <a
        href="#download"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Download Now
      </a>
    </div>
  )
}

