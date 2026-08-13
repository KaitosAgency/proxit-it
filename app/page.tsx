import { JsonLd, faqJsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OdooBand } from "@/components/sections/odoo-band";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsBand } from "@/components/sections/stats-band";
import { TrustSection } from "@/components/sections/trust-section";
import { homeFaq } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <HeroSection />
      <StatsBand />
      <ServicesSection />
      <OdooBand />
      <TrustSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
