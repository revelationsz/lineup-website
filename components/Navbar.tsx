"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="glass sticky top-0 z-50 border-b border-purple-500/20">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          Lineup
        </Link>
        
        {/* Hamburger button for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="glass-button p-2 rounded-lg focus:outline-none"
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
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-300 hover:text-purple-300 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-purple-300 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-300 hover:text-purple-300 transition-colors relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-gray-300 hover:text-purple-300 transition-colors relative group">
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-gray-300 hover:text-purple-300 transition-colors relative group">
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="glass-button px-4 py-2 rounded-lg text-white font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <nav className="md:hidden glass-card mx-4 mb-4 rounded-lg border border-purple-500/30">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)} 
                className="block text-gray-300 hover:text-purple-300 transition-colors py-2 px-3 rounded hover:bg-purple-500/10"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setMenuOpen(false)} 
                className="block text-gray-300 hover:text-purple-300 transition-colors py-2 px-3 rounded hover:bg-purple-500/10"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/faq" 
                onClick={() => setMenuOpen(false)} 
                className="block text-gray-300 hover:text-purple-300 transition-colors py-2 px-3 rounded hover:bg-purple-500/10"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                href="/terms" 
                onClick={() => setMenuOpen(false)} 
                className="block text-gray-300 hover:text-purple-300 transition-colors py-2 px-3 rounded hover:bg-purple-500/10"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link 
                href="/privacy" 
                onClick={() => setMenuOpen(false)} 
                className="block text-gray-300 hover:text-purple-300 transition-colors py-2 px-3 rounded hover:bg-purple-500/10"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={() => setMenuOpen(false)} 
                className="block glass-button text-center py-2 px-3 rounded text-white font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
