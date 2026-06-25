import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["zeynep.uyan@ozu.edu.tr"],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001524; border-bottom: 2px solid #FF7D00; padding-bottom: 12px;">
            New Contact Form Message
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 16px; border-left: 3px solid #FF7D00; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
