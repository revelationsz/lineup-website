"use client"

import { useState } from "react"
import { sendContactForm } from "../actions/contact"

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    isSubmitting: boolean
  }>({
    isSubmitting: false,
  })

  async function handleSubmit(formData: FormData) {
    setFormStatus({ isSubmitting: true })

    try {
      const result = await sendContactForm(formData)

      setFormStatus({
        success: result.success,
        message: result.message,
        isSubmitting: false,
      })

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      console.log(error)
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
        isSubmitting: false,
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="floating">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text">Contact Us</h1>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Have questions or feedback? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to
          you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="glass-card p-8 md:p-12 rounded-3xl glow">
        {formStatus.message && (
          <div
            className={`p-6 mb-8 rounded-2xl border ${
              formStatus.success
                ? "bg-green-500/10 border-green-500/30 text-green-300"
                : "bg-red-500/10 border-red-500/30 text-red-300"
            } backdrop-blur-sm`}
          >
            <div className="flex items-center gap-3">
              {formStatus.success ? (
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span className="font-medium">{formStatus.message}</span>
            </div>
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 glass rounded-xl border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 text-white placeholder-gray-400 transition-all duration-300"
                placeholder="Your full name"
                required
                disabled={formStatus.isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 glass rounded-xl border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 text-white placeholder-gray-400 transition-all duration-300"
                placeholder="your.email@example.com"
                required
                disabled={formStatus.isSubmitting}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 glass rounded-xl border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 text-white placeholder-gray-400 transition-all duration-300 resize-none"
              placeholder="Tell us what's on your mind..."
              required
              disabled={formStatus.isSubmitting}
            ></textarea>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full glass-button px-8 py-4 rounded-xl text-lg font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Additional Contact Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="glass p-3 rounded-xl">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Response Time</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            We typically respond to all inquiries within 24 hours during business days.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="glass p-3 rounded-xl">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Support</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Need help with the app? Check out our FAQ section or reach out directly for technical support.
          </p>
        </div>
      </div>
    </div>
  )
}

