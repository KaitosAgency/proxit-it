import Link from "next/link";
import type { BreadcrumbItem } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

type ServiceBreadcrumbProps = {
  items: readonly BreadcrumbItem[];
  className?: string;
};

export function ServiceBreadcrumb({ items, className }: ServiceBreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="text-slate-300" aria-hidden>
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className="font-medium text-slate-600" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-brand-teal"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
