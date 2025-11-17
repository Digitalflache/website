import { NextRequest, NextResponse } from "next/server";

const REQUIRED_FIELDS = ["name", "email", "projectType", "message"] as const;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const missing = REQUIRED_FIELDS.filter((field) => {
      const value = String(data?.[field] ?? "").trim();
      return value.length === 0;
    });

    if (missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Bitte fülle alle Pflichtfelder aus, bevor du die Anfrage sendest."
        },
        { status: 400 }
      );
    }

    const email = String(data.email).trim();
    if (!email.includes("@")) {
      return NextResponse.json(
        {
          ok: false,
          message: "Bitte gib eine gültige E-Mail-Adresse an."
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Die Anfrage wurde erfolgreich übermittelt. In der produktiven Version würde hier eine E-Mail versendet oder ein Ticket erstellt."
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Beim Verarbeiten der Anfrage ist ein Fehler aufgetreten."
      },
      { status: 500 }
    );
  }
}
