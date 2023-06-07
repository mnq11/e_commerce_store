// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.text();
  const { name, email, phone, message } = JSON.parse(body);
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #444;">
        <h1 style="font-size: 22px; color: #444;">📧 New Message</h1>
        <p style="font-size: 18px; line-height: 24px;">
          <strong>Name:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Message:</strong> ${message}<br>
        </p>
      </div>
    `,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully.' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email.' });
  }
}
