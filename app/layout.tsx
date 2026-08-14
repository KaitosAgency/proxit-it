import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { CookieConsentManager } from "@/components/consent/cookie-consent-manager";
import { GoogleConsentDefaults } from "@/components/consent/google-consent-defaults";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/json-ld";
import { googleSiteVerification, isGoogleAnalyticsEnabled } from "@/lib/analytics";
import { site, getSiteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Infogérance et services managés à Bourges | Proxi IT",
    template: "%s | Proxi IT",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: "Infogérance et services managés à Bourges | Proxi IT",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Infogérance et services managés à Bourges | Proxi IT",
    description: site.description,
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn("h-full", geist.variable, jetbrainsMono.variable, "font-sans")}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {isGoogleAnalyticsEnabled() ? <GoogleConsentDefaults /> : null}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsentManager />
      </body>
    </html>
  );
}
