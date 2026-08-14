import Link from "next/link";
import { SectionHeader } from "@/components/sections/section-header";
import { getSurfaceGridCellClass, SurfaceGrid } from "@/components/sections/surface-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type ContentBlock = {
  title: string;
  bluf: string;
  details?: string;
  relatedLink?: { href: string; label: string };
};

export type MethodStep = {
  step: string;
  title: string;
  description: string;
};

type ContentBlocksSectionProps = {
  label: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
  methodSection?: {
    label: string;
    title: string;
    description: string;
  };
  methodSteps?: MethodStep[];
};

export function ContentBlocksSection({
  label,
  title,
  description,
  blocks,
  methodSection,
  methodSteps,
}: ContentBlocksSectionProps) {
  return (
    <section className="section-divider-top bg-white section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader label={label} title={title} description={description} />

        <SurfaceGrid columns={2} className="mt-10">
          {blocks.map((block, index) => (
            <article
              key={block.title}
              className={getSurfaceGridCellClass(index, blocks.length, 2)}
            >
              <h2 className="text-xl font-bold leading-snug text-brand-navy md:text-2xl">
                {block.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{block.bluf}</p>
              {block.details ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {block.details}
                </p>
              ) : null}
              {block.relatedLink ? (
                <p className="mt-4">
                  <Link
                    href={block.relatedLink.href}
                    className="text-sm font-semibold text-brand-teal underline decoration-brand-teal/30 underline-offset-2 transition-colors hover:text-brand-teal-dim"
                  >
                    {block.relatedLink.label}
                  </Link>
                </p>
              ) : null}
            </article>
          ))}
        </SurfaceGrid>

        {methodSection && methodSteps && methodSteps.length > 0 ? (
          <div className="mt-16 border-t border-slate-100 pt-16">
            <SectionHeader
              label={methodSection.label}
              title={methodSection.title}
              description={methodSection.description}
              titleClassName="max-w-2xl text-3xl md:text-4xl"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {methodSteps.map((item) => (
                <Card key={item.title} variant="outline" className="rounded-2xl">
                  <CardHeader variant="section">
                    <CardTitle variant="feature">
                      <span className="mr-2 font-mono text-sm text-brand-teal">{item.step}</span>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
