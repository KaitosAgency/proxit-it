import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaq } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
          Questions fréquentes
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">
          On répond directement.
        </h2>

        <Accordion className="mt-8 w-full">
          {homeFaq.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`} className="border-slate-200">
              <AccordionTrigger className="text-left text-base font-semibold text-brand-navy hover:text-brand-teal">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
