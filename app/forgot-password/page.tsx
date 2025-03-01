"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // This is where you would integrate with Supabase
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to send reset email")
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Forgot Password</h1>

      {success ? (
        <div className="text-center">
          <div className="bg-green-500 rounded-full p-3 mx-auto w-16 h-16 mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <p className="text-lg mb-4 text-gray-300">Password reset instructions sent!</p>
          <p className="text-gray-400 mb-6">
            We&apos;ve sent an email to <strong>{email}</strong> with instructions to reset your password.
          </p>
          <p className="text-gray-400">
            Didn&apos;t receive the email? Check your spam folder or{" "}
            <button onClick={() => setSuccess(false)} className="text-purple-400 hover:underline">
              try again
            </button>
          </p>
        </div>
      ) : (
        <>
          <p className="mb-6 text-gray-300">
            Enter your email address below and we&apos;ll send you instructions to reset your password.
          </p>

          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-300 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Instructions"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-purple-400 hover:underline">
              Back to Login
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

