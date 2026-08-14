import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { BreadcrumbItem } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

type ServiceBreadcrumbProps = {
  items: readonly BreadcrumbItem[];
  className?: string;
};

function breadcrumbLabel(item: BreadcrumbItem) {
  return item.shortName ?? item.name;
}

export function ServiceBreadcrumb({ items, className }: ServiceBreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane" className={cn("text-xs text-slate-500", className)}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isLink = Boolean(item.path) && !isLast;

          return (
            <li key={item.path ?? `${item.name}-${index}`} className="flex items-center gap-1">
              {index > 0 ? (
                <ChevronRight
                  className="size-3.5 shrink-0 text-slate-300"
                  strokeWidth={2}
                  aria-hidden
                />
              ) : null}
              {isLast ? (
                <span className="font-medium text-slate-700" aria-current="page">
                  {breadcrumbLabel(item)}
                </span>
              ) : isLink ? (
                <Link
                  href={item.path!}
                  className="transition-colors hover:text-brand-teal"
                >
                  {breadcrumbLabel(item)}
                </Link>
              ) : (
                <span className="text-slate-500">{breadcrumbLabel(item)}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function ServiceBreadcrumbBar({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <div className="border-b border-slate-200/80 bg-slate-50/80">
      <div className="mx-auto max-w-6xl px-4 py-2.5 md:px-6">
        <ServiceBreadcrumb items={items} />
      </div>
    </div>
  );
}
