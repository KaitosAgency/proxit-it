import Link from "next/link";
import {
  Clock,
  HardDrive,
  MapPin,
  Package,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    number: "01",
    title: "Supervision 24/7",
    description:
      "Monitoring continu, alertes proactives et gestion des incidents avant qu'ils bloquent votre activité.",
    href: "/services-manages-bourges",
    icon: Clock,
  },
  {
    number: "02",
    title: "Infogérance complète",
    description:
      "Maintenance préventive, visites sur site et gestion de votre parc informatique au quotidien.",
    href: "/infogerance-informatique-bourges",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Cybersécurité PME",
    description:
      "Mises à jour, sauvegardes, gestion des accès et sensibilisation de vos équipes.",
    href: "/cybersecurite-pme-bourges",
    icon: Shield,
  },
  {
    number: "04",
    title: "Sauvegardes fiables",
    description:
      "Backup automatisé, tests de restauration et plan de reprise d'activité pour vos données.",
    href: "/sauvegarde-entreprise-bourges",
    icon: HardDrive,
  },
  {
    number: "05",
    title: "Proximité locale",
    description:
      "Basés à Bourges, intervention sur site dans le Cher avec un interlocuteur unique et réactif.",
    href: "/contact",
    icon: MapPin,
  },
  {
    number: "06",
    title: "Odoo certifié",
    description:
      "Partenaire Odoo Learning Partner : ERP, CRM et facturation électronique avec le même prestataire.",
    href: "/integrateur-odoo-bourges",
    icon: Package,
  },
];

function FeatureIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative mb-5 flex h-12 w-12 items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-brand-teal/10" />
      <Icon className="relative h-6 w-6 text-brand-navy" strokeWidth={1.75} aria-hidden />
      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-sm bg-brand-teal/80" aria-hidden />
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="section-glow section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
          Fonctionnalités
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-brand-navy md:text-5xl">
          Tout ce qu&apos;il faut pour une IT sereine.
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_-20px_rgba(0,27,54,0.12)]">
          <div className="grid md:grid-cols-3">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className={cn(
                  "group block p-8 transition-colors hover:bg-slate-50/80",
                  index < 3 && "border-b border-slate-100",
                  index % 3 !== 2 && "md:border-r md:border-slate-100",
                )}
              >
                <FeatureIcon icon={feature.icon} />
                <p className="text-sm font-bold text-brand-teal">{feature.number}</p>
                <h3 className="mt-1 text-lg font-bold text-brand-navy group-hover:text-brand-teal-dim">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
