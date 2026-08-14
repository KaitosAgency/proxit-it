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

const FRENCH_MONTHS: Record<string, string> = {
  janvier: "01",
  fevrier: "02",
  février: "02",
  mars: "03",
  avril: "04",
  mai: "05",
  juin: "06",
  juillet: "07",
  aout: "08",
  août: "08",
  septembre: "09",
  octobre: "10",
  novembre: "11",
  decembre: "12",
  décembre: "12",
};

export function parseFrenchMonthYear(value: string): string | undefined {
  const match = value.trim().match(/^([a-zàâéèêëîïôùûüç]+)\s+(\d{4})$/i);
  if (!match) {
    return undefined;
  }

  const month = FRENCH_MONTHS[match[1].toLowerCase()];
  if (!month) {
    return undefined;
  }

  return `${match[2]}-${month}-01`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#organization`,
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

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: {
      "@id": `${site.url}/#organization`,
    },
    inLanguage: "fr-FR",
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

function breadcrumbEntity(path: string, breadcrumbs: readonly BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${path}#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

function webPageEntity(
  title: string,
  description: string,
  path: string,
  dateModified?: string,
) {
  return {
    "@type": "WebPage",
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name: title,
    description,
    inLanguage: "fr-FR",
    isPartOf: {
      "@id": `${site.url}/#website`,
    },
    about: {
      "@id": `${site.url}${path}#service`,
    },
    ...(dateModified ? { dateModified } : {}),
  };
}

export function serviceJsonLd(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: title,
    description,
    url: `${site.url}${path}`,
    serviceType: title,
    provider: {
      "@id": `${site.url}/#organization`,
    },
    areaServed: [
      {
        "@type": "City",
        name: site.address.city,
      },
      {
        "@type": "AdministrativeArea",
        name: site.address.region,
      },
    ],
  };
}

export function pillarPageJsonLd({
  title,
  intro,
  path,
  faq,
  breadcrumbs,
  updatedAt,
}: {
  title: string;
  intro: string;
  path: string;
  faq: readonly FaqItem[];
  breadcrumbs: readonly BreadcrumbItem[];
  updatedAt?: string;
}) {
  const dateModified = updatedAt ? parseFrenchMonthYear(updatedAt) : undefined;
  const service = serviceJsonLd(title, intro, path);
  delete (service as { "@context"?: string })["@context"];

  const graph: Record<string, unknown>[] = [
    webPageEntity(title, intro, path, dateModified),
    service,
    breadcrumbEntity(path, breadcrumbs),
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${site.url}${path}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
