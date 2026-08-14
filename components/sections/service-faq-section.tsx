import { FaqAccordion } from "@/components/sections/faq-accordion";
import { SectionHeader } from "@/components/sections/section-header";
import type { FaqItem } from "@/lib/site";

type ServiceFaqSectionProps = {
  items: readonly FaqItem[];
  title?: string;
};

export function ServiceFaqSection({
  items,
  title = "Ce que vous devez savoir",
}: ServiceFaqSectionProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeader label="Questions fréquentes" title={title} align="center" />
      <FaqAccordion items={items} className="mt-10" />
    </div>
  );
}
