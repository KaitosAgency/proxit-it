import Script from "next/script";
import { googleConsentDefaultsScript } from "@/lib/google-consent";

export function GoogleConsentDefaults() {
  return (
    <Script id="google-consent-defaults" strategy="beforeInteractive">
      {googleConsentDefaultsScript}
    </Script>
  );
}
