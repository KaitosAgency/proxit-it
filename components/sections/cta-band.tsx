import { LinkButton } from "@/components/ui/link-button";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-t border-slate-200/80 bg-white section-padding">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
          Prêt à externaliser ?
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
          Parlons de votre informatique.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Devis gratuit, réponse sous 24h. Basés à Bourges, nous couvrons le Cher et le
          Centre-Val de Loire.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-stretch">
          <LinkButton href="/contact" variant="brand" size="cta">
            Demander un devis gratuit
          </LinkButton>
          <LinkButton href={site.phoneHref} variant="brandOutline" size="cta">
            {site.phone}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
