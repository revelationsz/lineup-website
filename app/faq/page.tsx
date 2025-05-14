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
      question: "What is Bar Me?",
      answer: (
        <p>
          Bar Me is your real-time nightlife guide. It helps you discover and decide where to go by showing live data on
          bar crowd levels, line length, music style, cover charge, and distance.
        </p>
      ),
    },
    {
      question: "How does the app know what's happening at each bar?",
      answer: (
        <p>
          Our community of users updates each bar&apos;s info live by submitting quick reviews. You help others by
          sharing your experience—and they help you too.
        </p>
      ),
    },
    {
      question: "How do reviews work?",
      answer: (
        <div>
          <p className="mb-2">
            When you leave a review, it contributes to the overall bar rating using our custom algorithm.
          </p>
          <p className="mb-2">
            You won&apos;t see your review posted directly, but it still influences the public data.
          </p>
          <p>
            If no one has reviewed that bar in the past 24 hours, your review becomes the main one shown until another
            update comes in.
          </p>
        </div>
      ),
    },
    {
      question: "What kind of info can I review?",
      answer: (
        <p>
          You can update the bar&apos;s line length, music genre, crowd level, and cover charge using easy sliders and
          dropdowns.
        </p>
      ),
    },
    {
      question: "Can I find bars based on what I'm looking for?",
      answer: (
        <div>
          <p className="mb-2">Yes! You can filter by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Music style (Jazz, Pop, Rock, etc.)</li>
            <li>Line length (Short, Medium, Long)</li>
            <li>Distance from you</li>
            <li>Bar tags like Rooftop, Dance Club, Brewery, and more.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can I explore bars on a map?",
      answer: (
        <p>
          Absolutely. Use the Map View to browse bars near you or switch to List View to sort them by distance, line, or
          music.
        </p>
      ),
    },
    {
      question: "What is the Trust Score?",
      answer: (
        <p>
          Your Trust Score reflects how helpful and accurate your reviews are. The more consistent and timely you are,
          the more influence your input has.
        </p>
      ),
    },
    {
      question: "How do I sign in?",
      answer: (
        <p>Use your Google account, Apple Id, or your email and a app specific password to sign in and start earning Trust Points, saving favorites, and leaving reviews.</p>
      ),
    },
    {
        question: "How do I reset my password?",
        answer: (
          <p>On the sign-in screen, tap “Forgot Password”. You’ll receive an email with a link to reset your password.</p>
        ),
      },
    {
      question: "Can I favorite my go-to spots?",
      answer: <p>Yes, just tap the star icon on any bar to save it to your Favorites for quick access later.</p>,
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-purple-400">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-purple-300">{item.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-purple-400 transition-transform duration-200 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <div className="text-gray-300">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
