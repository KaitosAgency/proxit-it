export const COOKIE_CONSENT_STORAGE_KEY = "proxi-it-cookie-consent";

export type CookieConsentChoice = {
  analytics: boolean;
  decidedAt: string;
};

export function readCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as CookieConsentChoice;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.decidedAt !== "string") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(analytics: boolean): CookieConsentChoice {
  const choice: CookieConsentChoice = {
    analytics,
    decidedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(choice));
  return choice;
}

export function hasAnalyticsConsent(): boolean {
  return readCookieConsent()?.analytics === true;
}
