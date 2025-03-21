"use server"

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)


export async function sendContactForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill out all fields",
      }
    }

    if (!email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "LineUp Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: process.env.CONTACT_EMAIL!, // Your email address
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
              `,
              replyTo: email,
            })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }
    return {  
      success: true,
      message: "Your message has been sent! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error in contact form:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}

