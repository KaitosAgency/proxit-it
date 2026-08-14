import { NextResponse } from "next/server";
import { isOdooConfigured } from "@/lib/odoo/client";
import { createContactOpportunity, type ContactLeadPayload } from "@/lib/odoo/crm-lead";
import { sendContactWebhook } from "@/lib/odoo/webhook";
import { contactTopicLabels } from "@/lib/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePayload(body: ContactLeadPayload): ContactLeadPayload {
  return {
    name: body.name.trim(),
    email: body.email.trim(),
    company: body.company.trim(),
    phone: body.phone?.trim() || undefined,
    topic: body.topic.trim(),
    attribution: body.attribution?.trim() || undefined,
    message: body.message.trim(),
  };
}

export async function POST(request: Request) {
  let payload: ContactLeadPayload;

  try {
    payload = normalizePayload((await request.json()) as ContactLeadPayload);
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

  if (!contactTopicLabels.includes(payload.topic as (typeof contactTopicLabels)[number])) {
    return NextResponse.json({ error: "Sujet de demande invalide." }, { status: 400 });
  }

  try {
    if (isOdooConfigured()) {
      const leadId = await createContactOpportunity(payload);
      return NextResponse.json({ ok: true, odooLeadId: leadId });
    }

    if (process.env.ODOO_WEBHOOK_URL) {
      await sendContactWebhook(payload);
      return NextResponse.json({ ok: true, via: "webhook" });
    }

    if (process.env.RESEND_API_KEY) {
      // TODO: brancher Resend en secours si Odoo indisponible
      console.info("[contact] RESEND_API_KEY présent — envoi email à brancher", payload);
      return NextResponse.json({ ok: true, via: "email" });
    }

    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          error:
            "Formulaire indisponible : configurez Odoo (ODOO_URL, ODOO_DB, ODOO_LOGIN, ODOO_API_KEY).",
        },
        { status: 503 },
      );
    }

    console.info("[contact] Nouvelle demande Proxi IT (dev)", payload);
    return NextResponse.json({ ok: true, via: "dev-log" });
  } catch (error) {
    console.error("[contact] Échec envoi", error);
    return NextResponse.json(
      { error: "Impossible d'enregistrer votre demande pour le moment. Réessayez ou appelez-nous." },
      { status: 502 },
    );
  }
}
