import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"  // Adjust the path as needed

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
})

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
        className={`${inter.variable} ${spaceGrotesk.variable} font-body animated-gradient text-fg flex flex-col min-h-screen`}
      >
        {/* Confetti blob background */}
        <div className="bg fixed inset-0 -z-10" />

        <Navbar />
        <main className="container mx-auto mt-8 px-4 flex-grow">
          {children}
        </main>
        <footer className="glass-card mt-12 py-8 border-t border-purple-500/20">
          <div className="container mx-auto text-center">
            <p className="text-gray-300">&copy; 2024 LineUp App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
