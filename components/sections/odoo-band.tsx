import { LinkButton } from "@/components/ui/link-button";

export function OdooBand() {
  return (
    <section className="section-glow section-padding-sm">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(0,27,54,0.1)] md:flex-row md:items-center md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
              Offre complémentaire
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">
              Aussi intégrateur Odoo certifié à Bourges
            </h2>
            <p className="mt-3 text-muted-foreground">
              ERP, CRM, facturation électronique : un seul interlocuteur pour votre IT et vos
              outils métier.
            </p>
          </div>
          <LinkButton href="/integrateur-odoo-bourges" variant="brandNavy" size="cta">
            Demander une démo Odoo
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
