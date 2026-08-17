import { NextResponse } from "next/server";
import { isSmtpConfigured, sendContactEmail } from "@/lib/contact/smtp";
import { isOdooConfigured } from "@/lib/odoo/client";
import { createContactOpportunity, type ContactLeadPayload } from "@/lib/odoo/crm-lead";
import { sendContactWebhook } from "@/lib/odoo/webhook";
import { contactTopicLabels } from "@/lib/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function logContactSuccess(via: string, details: Record<string, unknown>): void {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  console.info(`[contact] OK via ${via}`, details);
}

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
      logContactSuccess("odoo", { odooLeadId: leadId, email: payload.email });
      return NextResponse.json({ ok: true, odooLeadId: leadId });
    }

    if (process.env.ODOO_WEBHOOK_URL) {
      await sendContactWebhook(payload);
      logContactSuccess("webhook", { email: payload.email });
      return NextResponse.json({ ok: true, via: "webhook" });
    }

    if (isSmtpConfigured()) {
      await sendContactEmail(payload);
      logContactSuccess("smtp", { email: payload.email, to: process.env.CONTACT_TO?.trim() });
      return NextResponse.json({ ok: true, via: "smtp" });
    }

    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          error:
            "Formulaire indisponible : configurez Odoo, un webhook (ODOO_WEBHOOK_URL) ou SMTP OVH (SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_TO).",
        },
        { status: 503 },
      );
    }

    console.info("[contact] Nouvelle demande Proxi IT (dev)", payload);
    logContactSuccess("dev-log", { email: payload.email });
    return NextResponse.json({ ok: true, via: "dev-log" });
  } catch (error) {
    console.error("[contact] Échec envoi", error);
    return NextResponse.json(
      { error: "Impossible d'enregistrer votre demande pour le moment. Réessayez ou appelez-nous." },
      { status: 502 },
    );
  }
}
