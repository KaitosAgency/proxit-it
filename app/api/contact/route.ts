import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  topic?: string;
  attribution?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.company || !payload.message || !payload.topic) {
    return NextResponse.json(
      { error: "Merci de renseigner tous les champs obligatoires." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(payload.email)) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    // TODO: brancher Resend
    // await resend.emails.send({ from, to: process.env.CONTACT_TO, subject, html })
    console.info("[contact] RESEND_API_KEY présent — envoi email à brancher", payload);
    return NextResponse.json({ ok: true });
  }

  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      {
        error:
          "Formulaire en mode preview : configurez RESEND_API_KEY ou ODOO_WEBHOOK_URL pour activer l'envoi.",
      },
      { status: 503 },
    );
  }

  console.info("[contact] Nouvelle demande Proxi IT (dev)", payload);
  return NextResponse.json({ ok: true });
}
