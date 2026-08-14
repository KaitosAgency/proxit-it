import { CoverageMapSection } from "@/components/sections/coverage-map-section";
import { FaqWithStructuredData } from "@/components/sections/faq-with-structured-data";
import { homeFaq } from "@/lib/site";

export function CoverageSection() {
  return (
    <section className="section-glow section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <CoverageMapSection />

        <div className="mx-auto mt-20 max-w-3xl">
          <FaqWithStructuredData items={homeFaq} className="mt-10">
            <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
              Ce que vous devez savoir
            </h2>
          </FaqWithStructuredData>
        </div>
      </div>
    </section>
  );
}
