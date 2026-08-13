import { site, type FaqItem } from "@/lib/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone.replace(/\s/g, ""),
    email: site.email,
    description: site.description,
    image: `${site.url}/og.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.address.region,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleRating.score,
      reviewCount: site.googleRating.count,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "$$",
  };
}

export function faqJsonLd(faq: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: `${site.url}${path}`,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.city,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.address.region,
    },
  };
}
