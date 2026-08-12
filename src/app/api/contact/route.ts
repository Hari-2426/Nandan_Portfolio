import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "vedavyas2410@gmail.com";

    // 1. Try sending via FormSubmit API (Free & direct email forwarding to vedavyas2410@gmail.com)
    let emailSent = false;
    try {
      const fsResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `[Portfolio Inquiry] ${subject || "New Message from " + name}`,
          message: message,
          _template: "table",
        }),
      });

      if (fsResponse.ok) {
        emailSent = true;
      }
    } catch (fsErr) {
      console.warn("FormSubmit API error:", fsErr);
    }

    // 2. Optional Nodemailer fallback if custom SMTP environment variables are defined
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (user && pass) {
      try {
        const host = process.env.SMTP_HOST || "smtp.gmail.com";
        const port = parseInt(process.env.SMTP_PORT || "587");
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
        });

        await transporter.sendMail({
          from: `"${name}" <${user}>`,
          replyTo: email,
          to: recipientEmail,
          subject: `[Portfolio Inquiry] ${subject || "New Message from " + name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        });
        emailSent = true;
      } catch (nmErr) {
        console.warn("Nodemailer error:", nmErr);
      }
    }

    console.log(`[Contact Form Received] From: ${name} (${email}) | Subject: ${subject} | Delivered: ${emailSent}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent to vedavyas2410@gmail.com.",
        delivered: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
