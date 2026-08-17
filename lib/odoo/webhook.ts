import type { ContactLeadPayload } from "@/lib/odoo/crm-lead";

export async function sendContactWebhook(
  payload: ContactLeadPayload,
): Promise<void> {
  const webhookUrl = process.env.ODOO_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("ODOO_WEBHOOK_URL non configuré");
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const webhookSecret = process.env.ODOO_WEBHOOK_SECRET?.trim();
  if (webhookSecret) {
    headers["X-Webhook-Secret"] = webhookSecret;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      source: "proxi-it-website",
      ...payload,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Webhook Odoo HTTP ${response.status}`);
  }
}
