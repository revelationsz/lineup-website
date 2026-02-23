"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-content mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
          LINEUP
        </Link>

        {/* Hamburger button for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Full navigation for larger screens */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
            About
          </Link>
          <Link href="/faq" className="text-white/80 hover:text-white transition-colors text-sm">
            FAQ
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
            Contact
          </Link>
          <a
            href="https://apps.apple.com/app/id6743187492"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime text-sm !py-2 !px-5"
          >
            Download App
          </a>
        </div>
      </nav>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <nav className="md:hidden bg-[#141414] border-t border-white/5">
          <ul className="flex flex-col p-4 space-y-1">
            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <a
                href="https://apps.apple.com/app/id6743187492"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block btn-lime text-center text-sm"
              >
                Download App
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
