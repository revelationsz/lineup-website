import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LineUp App",
  description: "Organize your life with LineUp",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-t from-neutral-900 to-purple-900 text-gray-200 flex flex-col min-h-screen`}
      >
        <header className="bg-neutral-900 text-white p-4 sticky top-0 z-10 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-400">
              LineUp
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4 flex-grow">{children}</main>
        <footer className="bg-neutral-900 text-white py-6 mt-12 shadow-md">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 LineUp App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

