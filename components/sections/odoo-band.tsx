import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import { logos, odooProofStats } from "@/lib/site";

export function OdooBand() {
  return (
    <section className="section-glow section-padding-sm border-y border-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="card-surface flex flex-col gap-8 rounded-2xl p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="min-w-0 flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#714B67] px-2.5 py-0.5 shadow-sm shadow-black/20">
                <Image
                  src={logos.odoo}
                  alt="Odoo"
                  width={96}
                  height={28}
                  className="h-7 w-auto brightness-0 invert"
                />
              </span>
              <p className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-teal">
                Intégration ERP
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">
              Intégrateur Odoo certifié à Bourges
            </h2>
            <p className="mt-3 text-muted-foreground">
              ERP, CRM, facturation électronique 2026-2027 : un seul interlocuteur pour votre IT
              et vos outils métier.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
              {odooProofStats.map((stat) => (
                <li
                  key={stat.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-teal/15 bg-slate-50/90 px-3 py-1.5 font-mono text-[11px] text-slate-600"
                >
                  <span className="font-bold text-brand-teal">{stat.value}</span>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0 md:self-center">
            <LinkButton
              href="/integrateur-odoo-bourges"
              variant="brandNavy"
              size="cta"
              className="w-full md:w-auto"
            >
              Demander une démo
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
