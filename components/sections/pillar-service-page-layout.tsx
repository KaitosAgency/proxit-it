import { Check } from "lucide-react";
import {
  ContentBlocksSection,
  type ContentBlock,
} from "@/components/sections/content-blocks-section";
import { CoverageMapSection } from "@/components/sections/coverage-map-section";
import { CtaBand } from "@/components/sections/cta-band";
import {
  RelatedServicesSection,
  type RelatedService,
} from "@/components/sections/related-services-section";
import { ReviewsBand } from "@/components/sections/reviews-band";
import { SectionHeader } from "@/components/sections/section-header";
import { ServiceFaqSection } from "@/components/sections/service-faq-section";
import { TrustSection } from "@/components/sections/trust-section";
import { JsonLd, pillarPageJsonLd, type BreadcrumbItem } from "@/components/seo/json-ld";
import { ServiceBreadcrumb } from "@/components/seo/service-breadcrumb";
import { LinkButton } from "@/components/ui/link-button";
import type { FaqItem } from "@/lib/site";
export type { ContentBlock };

export type Persona = {
  title: string;
  description: string;
};

export type MethodStep = {
  step: string;
  title: string;
  description: string;
};

export type { RelatedService };

export type PillarServicePageProps = {
  title: string;
  titleAccent?: string;
  intro: string;
  path: string;
  serviceLabel?: string;
  updatedAt?: string;
  bullets: string[];
  contentBlocks: ContentBlock[];
  personas: Persona[];
  methodSteps: MethodStep[];
  differentiator: {
    title: string;
    paragraphs: string[];
  };
  slaItems: string[];
  faq: FaqItem[];
  relatedServices: RelatedService[];
  contactHref?: string;
  contentSection?: {
    label: string;
    title: string;
    description: string;
  };
  offerSection?: {
    label: string;
    title: string;
    description: string;
    includedLabel?: string;
    includedTitle?: string;
    includedDescription?: string;
  };
  methodSection?: {
    label: string;
    title: string;
    description: string;
  };
  slaSection?: {
    description?: string;
  };
  faqTitle?: string;
  contactCtaLabel?: string;
  contactCtaHint?: string;
};

export async function PillarServicePageLayout({
  title,
  titleAccent,
  intro,
  path,
  serviceLabel = "Services IT · Bourges",
  updatedAt,
  bullets,
  contentBlocks,
  personas,
  methodSteps,
  differentiator,
  slaItems,
  faq,
  relatedServices,
  contactHref = "/contact",
  contentSection = {
    label: "Notre accompagnement",
    title: "Ce que couvre notre service à Bourges",
    description:
      "Quatre piliers alignés sur les attentes des entreprises du Cher : maintenance, sécurité, infrastructure et conseil.",
  },
  offerSection = {
    label: "Nos offres",
    title: "Un contrat adapté à votre structure",
    description:
      "Tarif au poste, transparent et prévisible. Choisissez le niveau de délégation qui correspond à vos besoins.",
  },
  methodSection = {
    label: "Notre méthode",
    title: "De l'audit au suivi quotidien",
    description: "Un processus clair pour externaliser sereinement votre informatique.",
  },
  slaSection = {
    description:
      "Proxi IT s'engage sur des délais concrets pour les entreprises de Bourges et du Cher.",
  },
  faqTitle = "Ce que vous devez savoir",
  contactCtaLabel = "Demander un devis",
  contactCtaHint = "Précisez le nombre de postes et de serveurs. Nous adaptons le devis à votre parc.",
}: PillarServicePageProps) {
  const hubLabel = serviceLabel.replace(/\s·\sBourges$/, "");
  const hubPath =
    path === "/integrateur-odoo-bourges"
      ? "/integrateur-odoo-bourges"
      : "/infogerance-informatique-bourges";

  const breadcrumbs: BreadcrumbItem[] =
    path === hubPath
      ? [
          { name: "Accueil", path: "/" },
          { name: title, path },
        ]
      : [
          { name: "Accueil", path: "/" },
          { name: hubLabel, path: hubPath },
          { name: title, path },
        ];

  return (
    <>
      <JsonLd
        data={pillarPageJsonLd({
          title,
          intro,
          path,
          faq,
          breadcrumbs,
          updatedAt,
        })}
      />

      <section className="section-glow border-b border-slate-200/80 section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ServiceBreadcrumb items={breadcrumbs} className="mb-4" />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
            {serviceLabel}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
            {title}
            {titleAccent ? (
              <>
                <br className="hidden sm:block" />
                <span className="sm:ml-2">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          {updatedAt ? (
            <p className="mt-4 font-mono text-xs text-slate-400">
              Dernière mise à jour : {updatedAt}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href={contactHref} variant="brand" size="cta">
              {contactCtaLabel}
            </LinkButton>
            <p className="max-w-md text-sm text-muted-foreground">{contactCtaHint}</p>
          </div>
        </div>
      </section>

      <ContentBlocksSection
        label={contentSection.label}
        title={contentSection.title}
        description={contentSection.description}
        blocks={contentBlocks}
        methodSection={methodSection}
        methodSteps={methodSteps}
      />

      <section className="section-glow section-divider-top section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <TrustSection />

          <div className="card-surface mt-16 overflow-hidden rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">
              {differentiator.title}
            </h2>
            <div className="mt-5 space-y-4">
              {differentiator.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="card-surface offer-card mt-8 rounded-2xl p-8">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-teal">
              Engagements
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy">SLA et délais clairs</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">{slaSection.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {slaItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ReviewsBand />

      <section className="section-glow section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeader
            label={offerSection.label}
            title={offerSection.title}
            description={offerSection.description}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="card-surface offer-card offer-card--highlighted relative overflow-hidden rounded-2xl p-8">
              <div className="absolute right-6 top-6">
                <span className="inline-block rounded-full bg-brand-teal/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-brand-teal">
                  Inclus
                </span>
              </div>

              <p className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-teal">
                {offerSection.includedLabel ?? "Infogérance"}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-brand-navy">
                {offerSection.includedTitle ?? "Ce qui est inclus"}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {offerSection.includedDescription ??
                  "Maintenance, support et gestion quotidienne de votre parc informatique à Bourges."}
              </p>

              <ul className="mt-6 space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <LinkButton href={contactHref} variant="brand" size="default" className="w-full">
                  {contactCtaLabel}
                </LinkButton>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
                Pour qui ?
              </p>
              {personas.map((persona) => (
                <div key={persona.title} className="trust-card rounded-2xl p-5 sm:p-6">
                  <h3 className="text-base font-bold text-brand-navy sm:text-lg">{persona.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {persona.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServicesSection services={relatedServices} />

      <section className="section-glow section-divider-top section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ServiceFaqSection items={faq} title={faqTitle} />
        </div>
      </section>

      <section className="section-glow section-divider-top section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <CoverageMapSection />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
