import { type NextRequest, NextResponse } from "next/server"

interface ContactData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json()

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@example.com"

    if (!RESEND_API_KEY) {
      console.warn("[v0] RESEND_API_KEY not configured, storing locally only")
      return NextResponse.json(
        {
          success: true,
          message: "Contact form submitted (stored locally - configure RESEND_API_KEY to send emails)",
        },
        { status: 200 },
      )
    }

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@resend.dev",
        to: CONTACT_EMAIL,
        replyTo: body.email,
        subject: `New Contact Form Submission from ${body.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f5f5f5; padding: 10px; border-radius: 5px;">${body.message}</p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("[v0] Resend API error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully and email sent",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
