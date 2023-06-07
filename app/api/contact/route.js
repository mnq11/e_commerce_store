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
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };


  try {
    let info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully.' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email.' });
  }
}
