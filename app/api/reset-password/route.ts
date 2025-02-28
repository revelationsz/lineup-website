import { supabase } from "@/lib/supabase-client"
import { NextResponse } from "next/server"


export async function POST(request: Request) {
  try {
    const { accessToken, password, refreshToken } = await request.json()

    if (!accessToken || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create Supabase client with service role key for admin operations
     const {data: data, error: err} = await supabase.auth.setSession({ 
            access_token: accessToken, 
            refresh_token: refreshToken
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

