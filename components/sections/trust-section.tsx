import { trustPillars } from "@/lib/site";

export function TrustSection() {
  return (
    <section className="border-y border-slate-200/80 bg-white section-padding-sm">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
          Pourquoi Proxi IT
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">
          Un partenaire IT local, pas un prestataire anonyme.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar, index) => (
            <div key={pillar.title}>
              <p className="text-sm font-bold text-brand-teal">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-lg font-bold text-brand-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
