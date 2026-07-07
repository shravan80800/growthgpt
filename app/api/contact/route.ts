import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Securely pull the URL from your environment variables
    const WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL!;

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error('Failed to route lead to webhook');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}