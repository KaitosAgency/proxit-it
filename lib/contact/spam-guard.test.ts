import { describe, expect, it } from "vitest";
import {
  checkSpam,
  FIELD_LIMITS,
  MAX_BODY_BYTES,
  MIN_SUBMIT_DELAY_MS,
  stripSpamFields,
  type ContactFormPayload,
} from "@/lib/contact/spam-guard";

const HUMAN_USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const basePayload: ContactFormPayload = {
  name: "Jean Dupont",
  email: "jean@example.com",
  company: "Acme SARL",
  topic: "Infogérance",
  message: "Bonjour, je souhaite un devis.",
  _formLoadedAt: Date.now() - MIN_SUBMIT_DELAY_MS - 1000,
};

describe("checkSpam", () => {
  it("accepte une soumission légitime", () => {
    expect(checkSpam(basePayload, HUMAN_USER_AGENT, 500)).toEqual({ ok: true });
  });

  it("rejette silencieusement si le honeypot est rempli", () => {
    const result = checkSpam(
      { ...basePayload, _gotcha: "https://spam.com" },
      HUMAN_USER_AGENT,
      500,
    );
    expect(result).toEqual({ ok: false, reason: "honeypot", silent: true });
  });

  it("rejette silencieusement si soumission trop rapide", () => {
    const result = checkSpam(
      { ...basePayload, _formLoadedAt: Date.now() },
      HUMAN_USER_AGENT,
      500,
    );
    expect(result).toEqual({ ok: false, reason: "timing", silent: true });
  });

  it("rejette silencieusement les bots connus", () => {
    const result = checkSpam(basePayload, "Googlebot/2.1", 500);
    expect(result).toEqual({ ok: false, reason: "bot", silent: true });
  });

  it("rejette un body trop volumineux", () => {
    const result = checkSpam(basePayload, HUMAN_USER_AGENT, MAX_BODY_BYTES + 1);
    expect(result).toEqual({ ok: false, reason: "body_size" });
  });

  it("rejette un message trop long", () => {
    const result = checkSpam(
      { ...basePayload, message: "x".repeat(FIELD_LIMITS.message + 1) },
      HUMAN_USER_AGENT,
      500,
    );
    expect(result).toEqual({ ok: false, reason: "field_length" });
  });

  it("rejette une attribution non whitelistée", () => {
    const result = checkSpam(
      { ...basePayload, attribution: "Spam Source" },
      HUMAN_USER_AGENT,
      500,
    );
    expect(result).toEqual({ ok: false, reason: "attribution" });
  });

  it("accepte une attribution valide", () => {
    const result = checkSpam(
      { ...basePayload, attribution: "Recherche Google" },
      HUMAN_USER_AGENT,
      500,
    );
    expect(result).toEqual({ ok: true });
  });
});

describe("stripSpamFields", () => {
  it("retire les champs anti-spam avant envoi CRM", () => {
    expect(
      stripSpamFields({
        ...basePayload,
        _gotcha: "",
        _formLoadedAt: 123,
      }),
    ).toEqual({
      name: basePayload.name,
      email: basePayload.email,
      company: basePayload.company,
      topic: basePayload.topic,
      message: basePayload.message,
    });
  });
});
