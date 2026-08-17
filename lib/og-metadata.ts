export const openGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Proxi IT — Infogérance et supervision 24/7 à Bourges",
  type: "image/png",
} as const;

export const twitterImage = {
  url: "/twitter-image",
  width: 1200,
  height: 630,
  alt: openGraphImage.alt,
  type: "image/png",
} as const;

export function createDefaultMetadata(siteUrl: string) {
  const metadataBase = new URL(siteUrl);

  return {
    metadataBase,
    title: {
      default: "Infogérance informatique à Bourges (18) | Support 24/7 · Proxi IT",
      template: "%s | Proxi IT",
    },
    openGraph: {
      type: "website" as const,
      locale: "fr_FR",
      siteName: "Proxi IT",
      title: "Infogérance informatique à Bourges (18) | Support 24/7 · Proxi IT",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: "Infogérance informatique à Bourges (18) | Support 24/7 · Proxi IT",
      images: [twitterImage.url],
    },
  };
}
