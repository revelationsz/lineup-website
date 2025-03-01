import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"  // Adjust the path as needed

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
        <Navbar />
        <main className="container mx-auto mt-8 px-4 flex-grow">
          {children}
        </main>
        <footer className="bg-neutral-900 text-white py-6 mt-12 shadow-md">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 LineUp App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
