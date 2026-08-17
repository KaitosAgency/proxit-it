import nodemailer from "nodemailer";
import type { ContactLeadPayload } from "@/lib/odoo/crm-lead";

function requiredEnv(name: string): string | null {
  const value = process.env[name]?.trim();
  return value || null;
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    requiredEnv("SMTP_HOST") &&
      requiredEnv("SMTP_USER") &&
      requiredEnv("SMTP_PASS") &&
      requiredEnv("CONTACT_TO"),
  );
}

function buildEmailContent(payload: ContactLeadPayload): { text: string; html: string } {
  const lines = [
    `Nom : ${payload.name}`,
    `E-mail : ${payload.email}`,
    `Société : ${payload.company}`,
    payload.phone ? `Téléphone : ${payload.phone}` : null,
    `Sujet : ${payload.topic}`,
    payload.attribution ? `Comment nous avez-vous connu : ${payload.attribution}` : null,
    "",
    "Message :",
    payload.message,
  ].filter((line) => line !== null);

  const text = lines.join("\n");
  const html = lines
    .map((line) => (line === "" ? "<br>" : `<p>${escapeHtml(line)}</p>`))
    .join("\n");

  return { text, html };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactEmail(payload: ContactLeadPayload): Promise<void> {
  const host = requiredEnv("SMTP_HOST");
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const to = requiredEnv("CONTACT_TO");

  if (!host || !user || !pass || !to) {
    throw new Error("Configuration SMTP incomplète");
  }

  const port = Number.parseInt(process.env.SMTP_PORT?.trim() ?? "587", 10);
  const secure =
    process.env.SMTP_SECURE === "true" || (process.env.SMTP_SECURE !== "false" && port === 465);
  const from = requiredEnv("SMTP_FROM") ?? `Proxi IT <${user}>`;
  const subject =
    requiredEnv("CONTACT_EMAIL_SUBJECT") ??
    `[Site web] ${payload.topic} — ${payload.company}`;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const { text, html } = buildEmailContent(payload);

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}
