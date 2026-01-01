import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ message: "Ungültige Anfrage." }, { status: 400 });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const projectType = String(body.projectType || "").trim();
    const budget = String(body.budget || "").trim();
    const message = String(body.message || "").trim();

    // Honeypot gegen Bots: Feld muss leer bleiben
    const website = String(body.website || "").trim();
    if (website) {
      // Bot → tu so, als ob alles ok wäre
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Server-side Validation (nie nur auf Client vertrauen)
    if (!name || !email || !isValidEmail(email) || !projectType || message.length < 20) {
      return NextResponse.json(
        { message: "Bitte fülle alle Pflichtfelder korrekt aus." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !to || !from) {
      console.error(
        "Missing env vars: RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL"
      );
      // Nutzer soll NICHT sehen, dass Mail-Versand kaputt ist:
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const subject = `Kontaktformular: ${name} (${projectType})`;
    const text = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Unternehmen: ${company || "-"}`,
      `Projekt: ${projectType}`,
      `Budget: ${budget || "-"}`,
      "",
      "Nachricht:",
      message,
      "",
      `Zeit: ${new Date().toISOString()}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email, // damit du direkt auf den Absender antworten kannst
    });

    if (error) {
      console.error("Resend error:", error);
      // UI soll trotzdem “normal” bleiben
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    // UI soll trotzdem “normal” bleiben
    return NextResponse.json({ ok: true }, { status: 200 });
  }
}
