"use client";

import { openCookieConsentBanner } from "@/lib/cookie-consent";
import { isGoogleAnalyticsEnabled } from "@/lib/analytics";

export function CookiePreferencesLink() {
  if (!isGoogleAnalyticsEnabled()) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openCookieConsentBanner}
      className="transition-colors hover:text-white"
    >
      Gérer mes cookies
    </button>
  );
}
