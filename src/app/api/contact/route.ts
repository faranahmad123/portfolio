import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting: max 5 requests per 10 minutes per IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous";

    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, projectType, contact, honeypot } = body;

    // Honeypot check: If the hidden honeypot field is filled, silently ignore bot spam
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Message dispatched successfully." },
        { status: 200 }
      );
    }

    // Input validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedProjectType = typeof projectType === "string" ? projectType.trim() : "";
    const trimmedContact = typeof contact === "string" ? contact.trim() : "";

    if (!trimmedName || !trimmedProjectType || !trimmedContact) {
      return NextResponse.json(
        { error: "Please fill out all fields (name, project type, and contact info)." },
        { status: 400 }
      );
    }

    if (trimmedName.length > 100 || trimmedProjectType.length > 200 || trimmedContact.length > 200) {
      return NextResponse.json(
        { error: "Input exceeds maximum character length." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please ensure RESEND_API_KEY is set in .env.local or environment variables.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = "contactfaranahmad@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: trimmedContact.includes("@") ? trimmedContact : undefined,
      subject: `New Portfolio Inquiry from ${trimmedName}`,
      text: [
        `New Portfolio Inquiry:`,
        `Name: ${trimmedName}`,
        `Project Type: ${trimmedProjectType}`,
        `Contact: ${trimmedContact}`,
        ``,
        `Message:`,
        `Hi Faran, my name is ${trimmedName} and I am looking for a developer for ${trimmedProjectType}. You can reach me at ${trimmedContact} to discuss this further.`,
      ].join("\n"),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; background-color: #07080c; color: #f4f4f5; border-radius: 16px; border: 1px solid #27272a;">
          <div style="margin-bottom: 20px;">
            <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #00e0ff; background-color: rgba(0, 224, 255, 0.1); border: 1px solid rgba(0, 224, 255, 0.2); padding: 4px 10px; border-radius: 20px;">
              New Inquiry
            </span>
            <h2 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 14px 0 6px 0;">
              Portfolio Message Received
            </h2>
            <p style="color: #a1a1aa; font-size: 14px; margin: 0;">
              Someone reached out via your developer portfolio contact form.
            </p>
          </div>

          <div style="background-color: #0f1119; padding: 20px; border-radius: 12px; border: 1px solid #27272a; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-size: 14px;">
              <strong style="color: #a1a1aa; font-family: monospace; text-transform: uppercase; font-size: 11px;">Name:</strong><br />
              <span style="color: #ffffff; font-size: 16px; font-weight: 600;">${escapeHtml(trimmedName)}</span>
            </p>
            <p style="margin: 0 0 10px 0; font-size: 14px;">
              <strong style="color: #a1a1aa; font-family: monospace; text-transform: uppercase; font-size: 11px;">Project Type:</strong><br />
              <span style="color: #00e0ff; font-size: 15px;">${escapeHtml(trimmedProjectType)}</span>
            </p>
            <p style="margin: 0; font-size: 14px;">
              <strong style="color: #a1a1aa; font-family: monospace; text-transform: uppercase; font-size: 11px;">Contact Info:</strong><br />
              <span style="color: #34d399; font-size: 15px; font-family: monospace;">${escapeHtml(trimmedContact)}</span>
            </p>
          </div>

          <div style="background-color: #12131c; padding: 18px; border-radius: 12px; border-left: 3px solid #8b5cf6; font-style: italic; color: #e4e4e7; font-size: 14px; line-height: 1.6;">
            &ldquo;Hi Faran, my name is <strong>${escapeHtml(trimmedName)}</strong> and I am looking for a developer for <strong>${escapeHtml(trimmedProjectType)}</strong>. You can reach me at <strong>${escapeHtml(trimmedContact)}</strong> to discuss this further.&rdquo;
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1f2029; font-size: 11px; font-family: monospace; color: #71717a; text-align: center;">
            Faran Ahmad Portfolio • Automatic Notification
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to dispatch email via Resend." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!", id: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API internal error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message. Please try again later." },
      { status: 500 }
    );
  }
}
