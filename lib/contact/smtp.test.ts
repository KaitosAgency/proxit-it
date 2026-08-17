import { describe, expect, it } from "vitest";
import { sanitizeReplyTo } from "@/lib/contact/smtp";

describe("sanitizeReplyTo", () => {
  it("accepte un e-mail valide", () => {
    expect(sanitizeReplyTo("contact@proxi-it.fr")).toBe("contact@proxi-it.fr");
  });

  it("supprime les retours ligne en fin d'e-mail", () => {
    expect(sanitizeReplyTo("contact@proxi-it.fr\r\n")).toBe("contact@proxi-it.fr");
  });

  it("rejette un e-mail invalide", () => {
    expect(() => sanitizeReplyTo("pas-un-email")).toThrow("Adresse reply-to invalide");
  });
});
