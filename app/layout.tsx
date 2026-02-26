import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, VT323 } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
})
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-retro",
})

export const metadata: Metadata = {
  title: "LineUp App",
  description: "Know Where the Night is Going",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${vt323.variable} font-body bg-[#0A0A0A] text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>

        <footer
          className="py-16 px-8"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, #6B5B7A, #3A3A4A, #4A3A5A)',
          }}
        >
          <div className="max-w-content mx-auto text-center space-y-6">
            <p className="font-retro text-sm tracking-widest text-white/60 uppercase">
              Boston, MA
            </p>
            <p className="font-retro text-lg tracking-widest text-white/80 uppercase">
              LineUp App
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>|</span>
              <span>&copy; 2025 LineUp App</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
