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
import { TrustSection } from "@/components/sections/trust-section";
import { getSurfaceGridCellClass, SurfaceGrid } from "@/components/sections/surface-grid";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Supervision 24/7",
    description:
      "Monitoring continu, alertes proactives et gestion des incidents avant qu'ils bloquent votre activité.",
    href: routes.supervision,
    icon: Clock,
  },
  {
    title: "Infogérance complète",
    description:
      "Maintenance préventive, visites sur site et gestion de votre parc informatique au quotidien.",
    href: routes.infogerance,
    icon: Wrench,
  },
  {
    title: "Cybersécurité",
    description:
      "Mises à jour, sauvegardes, gestion des accès et sensibilisation de vos équipes.",
    href: routes.cybersecurite,
    icon: Shield,
  },
  {
    title: "Sauvegardes fiables",
    description:
      "Backup automatisé, tests de restauration et plan de reprise d'activité pour vos données.",
    href: routes.sauvegarde,
    icon: HardDrive,
  },
  {
    title: "Proximité locale",
    description:
      "Basés à Bourges, intervention sur site dans le Cher avec un interlocuteur unique et réactif.",
    href: routes.contact,
    icon: MapPin,
  },
  {
    title: "Odoo certifié",
    description:
      "Partenaire Odoo Learning Partner : ERP, CRM et facturation électronique avec le même prestataire.",
    href: routes.odoo,
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

        <SurfaceGrid className="mt-10">
          {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className={cn(
                  "btn-fill btn-fill-flat group relative block transition-colors hover:bg-slate-50/80",
                  getSurfaceGridCellClass(index, features.length, 3),
                )}
              >
                <FeatureIcon icon={feature.icon} />
                <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal-dim">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Link>
            ))}
        </SurfaceGrid>

        <TrustSection />
      </div>
    </section>
  );
}
