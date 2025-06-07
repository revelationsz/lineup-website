"use client"

import type React from "react"
import { useState } from "react"

type FAQItem = {
  question: string
  answer: React.ReactNode
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    {
      question: "What is Lineup?",
      answer: (
        <p className="leading-relaxed">
          Lineup is your real-time nightlife guide. It helps you discover and decide where to go by showing live data on
          bar crowd levels, line length, music style, cover charge, and distance.
        </p>
      ),
    },
    {
      question: "How does the app know what's happening at each bar?",
      answer: (
        <p className="leading-relaxed">
          Our community of users updates each bar's info live by submitting quick reviews. You help others by
          sharing your experience—and they help you too.
        </p>
      ),
    },
    {
      question: "How do reviews work?",
      answer: (
        <div className="space-y-3">
          <p className="leading-relaxed">
            When you leave a review, it contributes to the overall bar rating using our custom algorithm.
          </p>
          <p className="leading-relaxed">
            You won&apos;t see your review posted directly, but it still influences the public data.
          </p>
          <p className="leading-relaxed">
            If no one has reviewed that bar in the past 24 hours, your review becomes the main one shown until another
            update comes in.
          </p>
        </div>
      ),
    },
    {
      question: "What kind of info can I review?",
      answer: (
        <p className="leading-relaxed">
          You can update the bar's line length, music genre, crowd level, and cover charge using easy sliders and
          dropdowns.
        </p>
      ),
    },
    {
      question: "Can I find bars based on what I'm looking for?",
      answer: (
        <div className="space-y-3">
          <p className="leading-relaxed">Yes! You can filter by:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Music style (Jazz, Pop, Rock, etc.)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Line length (Short, Medium, Long)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Distance from you</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Bar tags like Rooftop, Dance Club, Brewery, and more</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can I explore bars on a map?",
      answer: (
        <p className="leading-relaxed">
          Absolutely. Use the Map View to browse bars near you or switch to List View to sort them by distance, line, or
          music.
        </p>
      ),
    },
    {
      question: "What is the Trust Score?",
      answer: (
        <p className="leading-relaxed">
          Your Trust Score reflects how helpful and accurate your reviews are. The more consistent and timely you are,
          the more influence your input has.
        </p>
      ),
    },
    {
      question: "How do I sign in?",
      answer: (
        <p className="leading-relaxed">
          Use your Google account, Apple ID, or your email and an app-specific password to sign in and start earning Trust Points, saving favorites, and leaving reviews.
        </p>
      ),
    },
    {
      question: "How do I reset my password?",
      answer: (
        <p className="leading-relaxed">
          On the sign-in screen, tap &ldquo;Forgot Password&rdquo;. You&apos;ll receive an email with a link to reset your password.
        </p>
      ),
    },
    {
      question: "Can I favorite my go-to spots?",
      answer: (
        <p className="leading-relaxed">
          Yes, just tap the star icon on any bar to save it to your Favorites for quick access later.
        </p>
      ),
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about Lineup and how to make the most of your nightlife experience.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
            >
              <span className="text-lg md:text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                {item.question}
              </span>
              <div className="glass p-2 rounded-lg group-hover:glow transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-purple-400 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div
              className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 pb-8" : "max-h-0"
              }`}
            >
              <div className="text-gray-300 border-t border-purple-500/20 pt-6">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="glass-card p-8 md:p-12 rounded-3xl text-center glow">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Still have questions?</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Can&apos;t find what you&apos;re looking for? Our support team is here to help.
        </p>
        <a
          href="/contact"
          className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold text-white inline-flex items-center gap-3 group"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Contact Support
        </a>
      </div>
    </div>
  )
}
