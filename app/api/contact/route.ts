import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { name, email, phone, company, message, platforms, services, to } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Format the email content
    const platformsList = platforms.length > 0 ? platforms.join(', ') : 'None selected'
    const servicesList = services.length > 0 ? services.join(', ') : 'None selected'

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
          New Contact Form Submission - Cars Marketing
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        </div>

        <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Platforms of Interest</h3>
          <p>${platformsList}</p>
        </div>

        <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Services Needed</h3>
          <p>${servicesList}</p>
        </div>

        ${message ? `
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Additional Information</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        ` : ''}

        <div style="background-color: #0d9488; color: white; padding: 15px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 0; font-weight: bold;">Next Steps:</p>
          <p style="margin: 5px 0 0 0;">Please respond to this inquiry within 24 hours to maintain our professional service standards.</p>
        </div>

        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          This email was sent from the Cars Marketing contact form on ${new Date().toLocaleDateString()}.
        </p>
      </div>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Cars Marketing <noreply@cars-marketing.com>',
      to: [to],
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
