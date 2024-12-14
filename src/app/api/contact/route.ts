import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Yahoo',
  auth: {
    user: "anu.bn@yahoo.com",
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(req: Request) {
  if (!process.env.EMAIL_PASSWORD) {
    console.error('EMAIL_PASSWORD environment variable is not set');
    return NextResponse.json(
      { error: 'Email configuration error' },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await req.json();

    const mailOptions = {
      from: 'anu.bn@yahoo.com',
      to: 'anu.bn@yahoo.com',
      subject: `Portfolio Contact: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
} 