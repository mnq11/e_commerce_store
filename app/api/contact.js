// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: email,
      to: 'support@mohammedn.info',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new submission from the contact form. \n\n Name: ${name} \n Email: ${email} \n Phone Number: ${phoneNumber} \n Message: ${message}`
    };

    const result = await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
