import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, city, service, message } = await request.json();

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "scrapetoshape@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}${service ? ` — ${service}` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `City: ${city || "—"}`,
      `Service: ${service || "—"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
