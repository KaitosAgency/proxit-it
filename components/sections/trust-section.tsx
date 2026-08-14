import { Award, BadgeEuro, MapPin, UserRound, type LucideIcon } from "lucide-react";
import { trustPillars } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

const trustIcons: LucideIcon[] = [UserRound, BadgeEuro, MapPin, Award];

function TrustCardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative mb-4 flex h-10 w-10 items-center justify-center">
      <div className="absolute inset-0 rounded-lg bg-brand-teal/10" />
      <Icon className="relative h-5 w-5 text-brand-navy" strokeWidth={1.75} aria-hidden />
      <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-sm bg-brand-teal/80" aria-hidden />
    </div>
  );
}

type TrustSectionProps = {
  className?: string;
};

export function TrustSection({ className }: TrustSectionProps) {
  return (
    <div className={cn("mt-16 md:mt-20", className)}>
      <SectionHeader
        label="Pourquoi Proxi IT"
        title="Un partenaire IT local, pas un prestataire anonyme."
        description="Ce qui nous distingue d'un prestataire national ou d'un centre d'appels :"
        titleClassName="max-w-2xl text-2xl md:text-3xl"
      />

      <div className="trust-cards mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {trustPillars.map((pillar, index) => {
          const Icon = trustIcons[index] ?? UserRound;

          return (
            <div
              key={pillar.title}
              className={cn(
                "trust-card flex h-full flex-col rounded-2xl p-5 sm:p-6",
                pillar.title === "Intervention locale" && "trust-card-default",
              )}
            >
              <TrustCardIcon icon={Icon} />
              <h3 className="text-base font-bold leading-snug text-brand-navy sm:text-lg">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
