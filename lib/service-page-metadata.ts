import type { Metadata } from "next";
import { site } from "@/lib/site";

type ServicePageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createServicePageMetadata({
  title,
  description,
  path,
}: ServicePageMetadataInput): Metadata {
  const pageTitle = `${title} | Proxi IT`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      title: pageTitle,
      description,
      url: `${site.url}${path}`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og.png"],
    },
  };
}
