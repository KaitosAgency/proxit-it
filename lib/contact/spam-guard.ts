import { isbot } from "isbot";
import { attributionOptions } from "@/lib/site";
import type { ContactLeadPayload } from "@/lib/odoo/crm-lead";

export type ContactFormPayload = ContactLeadPayload & {
  /** Honeypot — doit rester vide (bots / autofill). */
  _gotcha?: string;
  _formLoadedAt?: string | number;
};

export const FIELD_LIMITS = {
  name: 100,
  company: 150,
  email: 254,
  phone: 30,
  message: 5000,
} as const;

export const MAX_BODY_BYTES = 32 * 1024;
export const MIN_SUBMIT_DELAY_MS = 3000;

const isDev = process.env.NODE_ENV === "development";

export type SpamCheckReason =
  | "honeypot"
  | "timing"
  | "bot"
  | "field_length"
  | "attribution"
  | "body_size";

export type SpamCheckResult =
  | { ok: true }
  | { ok: false; reason: SpamCheckReason; silent?: boolean };

export function stripSpamFields(payload: ContactFormPayload): ContactLeadPayload {
  const lead = { ...payload };
  delete lead._gotcha;
  delete lead._formLoadedAt;
  return lead;
}

export function checkSpam(
  payload: ContactFormPayload,
  userAgent: string | null,
  bodySize: number,
): SpamCheckResult {
  if (payload._gotcha?.trim()) {
    return { ok: false, reason: "honeypot", silent: true };
  }

  if (!isDev && userAgent && isbot(userAgent)) {
    return { ok: false, reason: "bot", silent: true };
  }

  const loadedAt = Number(payload._formLoadedAt);
  if (!isDev && Number.isFinite(loadedAt) && Date.now() - loadedAt < MIN_SUBMIT_DELAY_MS) {
    return { ok: false, reason: "timing", silent: true };
  }

  if (bodySize > MAX_BODY_BYTES) {
    return { ok: false, reason: "body_size" };
  }

  if (
    payload.name.length > FIELD_LIMITS.name ||
    payload.company.length > FIELD_LIMITS.company ||
    payload.email.length > FIELD_LIMITS.email ||
    payload.message.length > FIELD_LIMITS.message ||
    (payload.phone && payload.phone.length > FIELD_LIMITS.phone)
  ) {
    return { ok: false, reason: "field_length" };
  }

  if (
    payload.attribution &&
    !attributionOptions.includes(payload.attribution as (typeof attributionOptions)[number])
  ) {
    return { ok: false, reason: "attribution" };
  }

  return { ok: true };
}
