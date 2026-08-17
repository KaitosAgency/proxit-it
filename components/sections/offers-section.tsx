import { LinkButton } from "@/components/ui/link-button";
import { routes } from "@/lib/site";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const offers = [
  {
    level: "Supervision 24/7",
    title: "Supervision complète",
    subtitle: "Gestion proactive 24/7",
    description:
      "Vous déléguez l'intégralité de la supervision à notre équipe : nous anticipons, corrigeons et optimisons en continu.",
    features: [
      "Supervision 24/7",
      "Mises à jour automatisées (OS et logiciels)",
      "Sauvegardes sécurisées",
      "Alertes instantanées et interventions rapides",
      "Sécurité informatique et gestion préventive du parc",
      "Support illimité et dépannage sur site",
    ],
    href: routes.supervision,
    highlighted: true,
  },
  {
    level: "Infogérance",
    title: "Maintenance informatique",
    subtitle: "Accompagnement fiable",
    description:
      "Un contrat adapté aux structures souhaitant une infogérance efficace, sans gestion interne complexe.",
    features: [
      "Suivi régulier des mises à jour systèmes et logicielles",
      "Mise en place d'une stratégie de sauvegarde",
      "Suivi matériel et logiciel du parc",
      "Visites de contrôle",
      "Assistance à distance illimitée",
    ],
    href: routes.infogerance,
    highlighted: false,
  },
] as const;

export function OffersSection() {
  return (
    <section className="section-glow section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
          Nos offres
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-brand-navy md:text-5xl">
          Deux niveaux d'accompagnement, un même engagement.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Choisissez le niveau de délégation adapté à votre structure. Tarif au poste,
          transparent et prévisible.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={cn(
                "card-surface offer-card relative overflow-hidden rounded-2xl p-8",
                offer.highlighted && "offer-card--highlighted",
              )}
            >
              {offer.highlighted && (
                <div className="absolute right-6 top-6">
                  <span className="inline-block rounded-full bg-brand-teal/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-brand-teal">
                    Recommandé
                  </span>
                </div>
              )}

              <p className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-teal">
                {offer.level}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-brand-navy">{offer.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {offer.subtitle}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {offer.description}
              </p>

              <ul className="mt-6 space-y-3">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <LinkButton
                  href={offer.href}
                  variant={offer.highlighted ? "brand" : "brandOutline"}
                  size="default"
                  className="w-full"
                >
                  En savoir plus
                </LinkButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Besoin d'un conseil pour choisir ?{" "}
          <a
            href="/contact"
            className="font-medium text-brand-teal underline decoration-brand-teal/30 underline-offset-2 transition-colors hover:text-brand-teal-dim hover:decoration-brand-teal-dim/30"
          >
            Contactez-nous pour un devis personnalisé
          </a>
          .
        </p>
      </div>
    </section>
  );
}
