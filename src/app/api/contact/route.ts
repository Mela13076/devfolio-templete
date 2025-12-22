import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import siteConfig from '@/config/siteConfig';
import { ContactRequestBody } from '@/types';


export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "Resend API key not configured. Please add it to your .env file" }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json() as ContactRequestBody

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const {error} = await resend.emails.send({
      from: siteConfig.resend.fromEmail, // you can use a verified domain later
      to: siteConfig.resend.toEmail, // your personal email
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error){
      console.error("Resend Error: ", error)
      return NextResponse.json(
        {success: false, message: error.message},
        {status: 500}
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
} 