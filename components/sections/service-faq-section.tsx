import { FaqWithStructuredData } from "@/components/sections/faq-with-structured-data";
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
      <FaqWithStructuredData items={items} className="mt-10">
        <SectionHeader label="Questions fréquentes" title={title} align="center" />
      </FaqWithStructuredData>
    </div>
  );
}
