import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Yahoo',
  auth: {
    user: "anu.bn@yahoo.com",
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
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
    const { name, email, date, time, timezone, message } = await req.json();

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the date and time for display
    const bookingDateTime = new Date(`${date}T${time}`);
    const formattedDate = bookingDateTime.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = bookingDateTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const mailOptions = {
      from: 'anu.bn@yahoo.com',
      to: 'anu.bn@yahoo.com',
      subject: `New Meeting Booking Request from ${name}`,
      text: `
Meeting Booking Request

Name: ${name}
Email: ${email}
Date: ${formattedDate}
Time: ${formattedTime}
Timezone: ${timezone || 'Not specified'}
${message ? `Message: ${message}` : ''}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">New Meeting Booking Request</h2>
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Name:</strong> 
              <span style="color: #333; margin-left: 10px;">${name}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Email:</strong> 
              <span style="color: #333; margin-left: 10px;">${email}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Date:</strong> 
              <span style="color: #333; margin-left: 10px;">${formattedDate}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Time:</strong> 
              <span style="color: #333; margin-left: 10px;">${formattedTime}</span>
            </div>
            ${timezone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #666;">Timezone:</strong> 
              <span style="color: #333; margin-left: 10px;">${timezone}</span>
            </div>
            ` : ''}
            ${message ? `
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <strong style="color: #666;">Message:</strong>
              <p style="color: #333; margin-top: 10px; line-height: 1.6;">${message}</p>
            </div>
            ` : ''}
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: 'anu.bn@yahoo.com',
      to: email,
      subject: `Meeting Booking Confirmation - ${formattedDate}`,
      text: `
Hi ${name},

Thank you for booking a meeting with me!

Meeting Details:
Date: ${formattedDate}
Time: ${formattedTime}
Timezone: ${timezone || 'Not specified'}

I'll review your request and confirm the meeting shortly. You'll receive a calendar invite with the Google Meet link once confirmed.

Best regards,
Anu Bilegdemberel
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Meeting Booking Confirmation</h2>
            <p style="color: #666; margin-bottom: 20px;">Hi ${name},</p>
            <p style="color: #666; margin-bottom: 20px;">Thank you for booking a meeting with me!</p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 15px;">Meeting Details:</h3>
              <p style="color: #666; margin-bottom: 8px;"><strong>Date:</strong> ${formattedDate}</p>
              <p style="color: #666; margin-bottom: 8px;"><strong>Time:</strong> ${formattedTime}</p>
              ${timezone ? `<p style="color: #666;"><strong>Timezone:</strong> ${timezone}</p>` : ''}
            </div>
            <p style="color: #666; margin-bottom: 20px;">I'll review your request and confirm the meeting shortly. You'll receive a calendar invite with the Google Meet link once confirmed.</p>
            <p style="color: #666; margin-top: 20px;">Best regards,<br>Anu Bilegdemberel</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true, message: 'Meeting booking request sent successfully' });
  } catch (error: unknown) {
    console.error('Email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to send booking request', details: errorMessage },
      { status: 500 }
    );
  }
}

