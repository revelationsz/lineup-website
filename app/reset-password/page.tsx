"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

export default function ResetPassword() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)
  const [type, setType] = useState<string | null>(null)

  // Get the token from the URL query parameters
  useEffect(() => {
    const hash = window.location.hash; // e.g., "#access_token=eyJhbGciOiJIUzI1N..."
    const hashParams = new URLSearchParams(hash.substring(1)); // Remove the '#' before parsing
    if(hashParams.get("access_token") != null){
      setAccessToken(hashParams.get("access_token")) 
    } 
    if(hashParams.get("type") != null){
       setType(hashParams.get("type"));
    }
    if(hashParams.get("refresh_token") != null){
      setRefreshToken(hashParams.get("refresh_token"))
    }
    console.log(type, accessToken);
  
  },[])


  const validatePassword = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      return false
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return false
    }
    return true
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!accessToken) {
      setError("Invalid or missing access token")
      return
    }

    if (!refreshToken) {
      setError("Invalid or missing refresh token")
      return
    }

    if (!validatePassword()) {
      return
    }

    setLoading(true)

    try {
      // This is where you would integrate with Supabase
      const response = await fetch("/lineup-website/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken,
          password,
          refreshToken
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to reset password")
      }

      setSuccess(true)
      // Redirect to login page after 3 seconds
      setTimeout(() => {
      //  router.push("/login")
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Reset Your Password</h1>

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
          <p className="text-lg mb-4 text-gray-300">Your password has been successfully reset!</p>
          <p className="text-gray-400">Please go back to the app and try logging in again</p>
        </div>
      ) : (
        <>
          <p className="mb-6 text-gray-300">
            Enter your new password below. Make sure it&apos;s at least 8 characters long and includes a mix of letters,
            numbers, and symbols for better security.
          </p>

          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-300 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {!accessToken && (
            <div className="bg-yellow-500 bg-opacity-20 border border-yellow-500 text-yellow-300 px-4 py-3 rounded mb-4">
              No reset token found. Please make sure you clicked the link from your email.
            </div>
          )}            

          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label htmlFor="password" className="block mb-1 font-medium text-gray-300">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-1 font-medium text-gray-300">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || !accessToken}
            >
              {loading ? "Resetting Password..." : "Reset Password"}
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
