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
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
        isSubmitting: false,
      })
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Contact Us</h1>
      <p className="mb-6 text-gray-300">
        Have questions or feedback? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to
        you as soon as possible.
      </p>

      {formStatus.message && (
        <div
          className={`p-4 mb-6 rounded-md ${
            formStatus.success
              ? "bg-green-500 bg-opacity-20 border border-green-500 text-green-300"
              : "bg-red-500 bg-opacity-20 border border-red-500 text-red-300"
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <form id="contact-form" action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            required
            disabled={formStatus.isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            required
            disabled={formStatus.isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            required
            disabled={formStatus.isSubmitting}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
          disabled={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}

