import { JsonLd, faqJsonLd } from "@/components/seo/json-ld";
import { CoverageSection } from "@/components/sections/coverage-section";
import { CtaBand } from "@/components/sections/cta-band";
import { HeroSection } from "@/components/sections/hero-section";
import { OdooBand } from "@/components/sections/odoo-band";
import { OffersSection } from "@/components/sections/offers-section";
import { ReviewsBand } from "@/components/sections/reviews-band";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsBand } from "@/components/sections/stats-band";
import { homeFaq } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <HeroSection />
      <StatsBand />
      <ServicesSection />
      <ReviewsBand />
      <OffersSection />
      <OdooBand />
      <CoverageSection />
      <CtaBand />
    </>
  );
}
