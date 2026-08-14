import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/json-ld";
import { SiteAnalytics } from "@/components/seo/site-analytics";
import { googleSiteVerification } from "@/lib/analytics";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Proxi IT — Infogérance à Bourges",
      },
    ],
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
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <SiteAnalytics />
      </body>
    </html>
  );
}
