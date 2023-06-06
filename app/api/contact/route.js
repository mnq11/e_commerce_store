// app/api/contact/route.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, phone, message } = req.body;

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
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error sending email.' });
  }
}
