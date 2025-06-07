import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, venue, email, phone, bestNight } = body;
    
    if (!name || !venue || !email || !phone || !bestNight) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // TODO: Integrate with your CRM/database
    // For now, just log the submission
    console.log('Partner application received:', {
      name,
      venue,
      email,
      phone,
      bestNight,
      timestamp: new Date().toISOString(),
    });
    
    // TODO: Send confirmation email
    // TODO: Add to partner database
    // TODO: Notify business team
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully! We\'ll be in touch within 24 hours.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Partner application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 