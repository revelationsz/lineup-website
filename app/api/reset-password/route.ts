import { supabase } from "@/lib/supabase-client"
import { NextResponse } from "next/server"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

export async function POST(request: Request) {
  try {
    const { token, password, type } = await request.json()

    if (!token || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create Supabase client with service role key for admin operations

    const {data: data, error: err} = await supabase.auth.verifyOtp(
                                                    { token_hash: token, 
                                                      type: type
                                                    })
    console.log('tt', data, err)                                              
    // Update the user's password using the token
    const { error } = await supabase.auth.updateUser(
      { password },
    )

    if (error) {
      console.error("Error resetting password:", error)
      return NextResponse.json({ message: error.message || "Failed to reset password" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Unexpected error during password reset:", error)
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 })
  }
}

