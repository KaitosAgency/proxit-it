import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookie-consent";

/** Script inline exécuté avant tout tag Google — Consent Mode v2. */
export const googleConsentDefaultsScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;

var analyticsGranted = false;
try {
  var raw = localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_STORAGE_KEY)});
  if (raw) {
    var parsed = JSON.parse(raw);
    analyticsGranted = parsed.analytics === true;
  }
} catch (e) {}

gtag('consent', 'default', {
  analytics_storage: analyticsGranted ? 'granted' : 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
`.trim();

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function updateGoogleConsent(analyticsGranted: boolean): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: analyticsGranted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
