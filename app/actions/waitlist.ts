"use server"

import { supabase } from "@/lib/supabase-client"

export async function getWaitlistCount(): Promise<{ count: number; error?: string }> {
  try {
    console.log("Fetching waitlist count")
    // Fetch count from waitlist table
    const { data, error } = await supabase
      .from('signup_stats')
      .select('*')

    if (error) {
      console.error("Error fetching waitlist count:", error)
      return { count: 0, error: error.message } // fallback to default
    }

    return { count: data[0].total_signups, error: '' }
  } catch (error) {
    console.error("Unexpected error fetching waitlist:", error)
    return { count: 2847, error: "Failed to fetch count" }
  }
}

export async function addEmailToLaunchUpdates(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    console.log("Adding email to launch updates:", email)
    
    // Insert email into email_launch_updates table
    const { data, error } = await supabase
      .from('email_launch_updates')
      .insert([{ email: email }])
      .select()

    if (error) {
      console.error("Error inserting email:", error)
      return { success: false, error: error.message }
    }

    console.log(data)

    return { success: true }
  } catch (error) {
    console.error("Unexpected error adding email:", error)
    return { success: false, error: "Failed to add email" }
  }
} 