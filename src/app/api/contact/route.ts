import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, phone, message } =
            await request.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "Please fill in all required fields" },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // or your email service
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your app password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL_USER,
            to: "kevalai24@gmail.com", // Recipient email
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
                    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${
                            phone || "Not provided"
                        }</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1e3a8a;">
                            ${message}
                        </div>
                    </div>
                    <p style="color: #64748b; font-size: 14px;">
                        This message was sent from the KevalAI contact form.
                    </p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
