import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase-client"


export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 })
    }

    // Send password reset email
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
    //  redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
      redirectTo: `http://localhost:3000/lineup-website/reset-password`,

    })

    if (error) {
      console.error("Error sending reset email:", error)
      return NextResponse.json({ message: error.message || "Failed to send reset email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Unexpected error during password reset request:", error)
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 })
  }
}

