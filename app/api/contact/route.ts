import { type NextRequest, NextResponse } from "next/server"

// Type for form submission data
interface ContactFormData {
  name: string
  email: string
  phone: string
  address: string
  systemType: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: In production, you would:
    // 1. Save this lead to your database (Supabase, etc.)
    // 2. Send email notifications to your team
    // 3. Send confirmation email to the customer
    // For now, we'll just log it (in production, remove logs or use proper logging)
    console.log("Lead received:", body)

    // Simulate processing
    // In a real app, integrate with:
    // - Email service (Resend, SendGrid, Mailgun, etc.)
    // - Database (Supabase, Neon, etc.)
    // - CRM system

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received",
        leadData: {
          name: body.name,
          email: body.email,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
