"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";
import { gaMeasurementId, isGoogleAnalyticsEnabled } from "@/lib/analytics";
import {
  readCookieConsent,
  writeCookieConsent,
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_OPEN_EVENT,
} from "@/lib/cookie-consent";
import { updateGoogleConsent } from "@/lib/google-consent";

function subscribeCookieConsent(onStoreChange: () => void): () => void {
  window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function CookieConsentManager() {
  const analyticsConfigured = isGoogleAnalyticsEnabled();
  const storedConsent = useSyncExternalStore(
    subscribeCookieConsent,
    readCookieConsent,
    () => null,
  );
  const [forceBanner, setForceBanner] = useState(false);

  useEffect(() => {
    function handleOpenBanner() {
      setForceBanner(true);
    }

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpenBanner);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpenBanner);
  }, []);

  const analyticsAllowed = storedConsent?.analytics === true;
  const showBanner =
    analyticsConfigured && (forceBanner || storedConsent === null);

  function acceptAnalytics() {
    writeCookieConsent(true);
    updateGoogleConsent(true);
    setForceBanner(false);
  }

  function refuseAnalytics() {
    writeCookieConsent(false);
    updateGoogleConsent(false);
    setForceBanner(false);
  }

  return (
    <>
      {analyticsConfigured && analyticsAllowed ? (
        <GoogleAnalytics gaId={gaMeasurementId} />
      ) : null}

      {showBanner ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200/80 bg-white/95 p-4 shadow-[0_-8px_30px_rgb(0_27_54_/_0.08)] backdrop-blur-sm md:p-5"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="space-y-1">
              <p
                id="cookie-consent-title"
                className="text-sm font-semibold text-brand-navy"
              >
                Cookies et mesure d&apos;audience
              </p>
              <p id="cookie-consent-description" className="text-sm leading-relaxed text-muted-foreground">
                Nous utilisons Google Analytics pour comprendre l&apos;usage du site et
                l&apos;améliorer. Vous pouvez accepter ou refuser ce traceur.{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="font-medium text-brand-navy underline decoration-brand-navy/25 underline-offset-2 hover:text-brand-teal-dim"
                >
                  En savoir plus
                </Link>
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2">
              <Button type="button" variant="brandOutline" size="default" onClick={refuseAnalytics}>
                Refuser
              </Button>
              <Button type="button" variant="brand" size="default" onClick={acceptAnalytics}>
                Accepter
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
