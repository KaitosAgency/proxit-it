import { FaqWithStructuredData } from "@/components/sections/faq-with-structured-data";
import { LinkButton } from "@/components/ui/link-button";
import { JsonLd, serviceJsonLd } from "@/components/seo/json-ld";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaBand } from "@/components/sections/cta-band";
import type { FaqItem } from "@/lib/site";

type ServicePageProps = {
  title: string;
  intro: string;
  path: string;
  bullets: string[];
  faq?: FaqItem[];
};

export function ServicePageLayout({ title, intro, path, bullets, faq = [] }: ServicePageProps) {
  return (
    <>
      <JsonLd data={serviceJsonLd(title, intro, path)} />

      <section className="section-glow border-b border-slate-200/80 section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
            Services IT · Bourges
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" variant="brand" size="cta">
              Demander un devis
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <Card variant="outline" className="rounded-2xl">
            <CardHeader variant="section">
              <CardTitle variant="section">Ce qui est inclus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {bullets.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="font-bold text-brand-teal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card variant="outline" className="rounded-2xl">
            <CardHeader variant="section">
              <CardTitle variant="section">Pour qui ?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Entreprises du Cher sans service IT interne, structures en croissance ou
                dirigeants qui veulent un interlocuteur unique, local et réactif à Bourges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {faq.length > 0 ? (
        <section className="section-glow border-t border-slate-200/80 section-padding-sm">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="text-2xl font-bold text-brand-navy">Questions fréquentes</h2>
            <FaqWithStructuredData items={faq} className="mt-6" />
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
