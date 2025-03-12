"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-neutral-900 text-white p-4 sticky top-0 z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          Lineup
        </Link>
        {/* Hamburger button for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Full navigation for larger screens */}
        <ul className="hidden md:flex space-x-4">
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
      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <nav className="md:hidden container mx-auto mt-2 px-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400 transition-colors text-right">
                Home
              </Link>
            </li>
            <li>
              <Link href="/terms" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400 transition-colors text-right">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400 transition-colors text-right">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400 transition-colors text-right">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
