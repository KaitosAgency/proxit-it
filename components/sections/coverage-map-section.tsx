import { CoverageDepartmentLabel } from "@/components/sections/coverage-department-label";
import { Card, CardContent } from "@/components/ui/card";
import { getDrivingDirectionsUrl, interventionZones } from "@/lib/site";
import { MapPin } from "lucide-react";

export function CoverageMapSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-12">
      <div className="flex flex-col">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
          Zone d&apos;intervention
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
          {interventionZones.titlePrefix}
          <CoverageDepartmentLabel variant="title" />
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">{interventionZones.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={getDrivingDirectionsUrl(interventionZones.hub.directionsOrigin)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-teal/30 bg-brand-teal/10 px-3 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/50 hover:bg-brand-teal/15"
            aria-label={`Itinéraire voiture depuis ${interventionZones.hub.name} vers Proxi IT`}
          >
            <MapPin className="h-4 w-4 text-brand-teal" aria-hidden />
            {interventionZones.hub.name}
            <span className="font-normal text-muted-foreground">
              · {interventionZones.hub.detail}
            </span>
          </a>
          {interventionZones.cities.map((city) => (
            <a
              key={city.name}
              href={getDrivingDirectionsUrl(city.origin)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-brand-teal/30 hover:bg-brand-teal/5 hover:text-brand-navy"
              aria-label={`Itinéraire voiture depuis ${city.name} vers Proxi IT`}
            >
              {city.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex h-full min-h-0 flex-col lg:pt-16">
        <Card
          variant="outline"
          className="flex min-h-72 flex-1 flex-col overflow-hidden rounded-2xl py-0 md:min-h-80 lg:min-h-0"
        >
          <CardContent className="flex flex-1 flex-col p-0">
            <iframe
              title="Zone d'intervention Proxi IT"
              src={`https://maps.google.com/maps?q=${interventionZones.mapEmbedQuery}&output=embed`}
              className="h-full min-h-72 w-full flex-1 border-0 md:min-h-80 lg:min-h-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
