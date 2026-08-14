import Link from "next/link";
import {
  Clock,
  HardDrive,
  MapPin,
  Package,
  Phone,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { getSurfaceGridCellClass, SurfaceGrid } from "@/components/sections/surface-grid";
import { cn } from "@/lib/utils";

export type RelatedService = {
  href: string;
  label: string;
  description: string;
};

const iconByHref: Record<string, LucideIcon> = {
  "/services-manages-bourges": Clock,
  "/cybersecurite-pme-bourges": Shield,
  "/sauvegarde-entreprise-bourges": HardDrive,
  "/integrateur-odoo-bourges": Package,
  "/infogerance-informatique-bourges": Wrench,
  "/contact": Phone,
  "/contact#carte": MapPin,
};

function FeatureIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative mb-5 flex h-12 w-12 items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-brand-teal/10" />
      <Icon className="relative h-6 w-6 text-brand-navy" strokeWidth={1.75} aria-hidden />
      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-sm bg-brand-teal/80" aria-hidden />
    </div>
  );
}

type RelatedServicesSectionProps = {
  services: RelatedService[];
};

export function RelatedServicesSection({ services }: RelatedServicesSectionProps) {
  return (
    <section className="section-glow section-divider-top section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Services associés"
          title="Continuer à explorer"
          description="Découvrez les autres expertises Proxi IT ou contactez-nous pour un devis personnalisé."
        />

        <SurfaceGrid className="mt-10">
          {services.map((service, index) => {
              const Icon = iconByHref[service.href] ?? Wrench;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={cn(
                    "btn-fill btn-fill-flat group relative block transition-colors hover:bg-slate-50/80",
                    getSurfaceGridCellClass(index, services.length, 3),
                  )}
                >
                  <FeatureIcon icon={Icon} />
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal-dim">
                    {service.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </Link>
              );
            })}
        </SurfaceGrid>
      </div>
    </section>
  );
}
