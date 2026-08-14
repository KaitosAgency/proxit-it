import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function StarRating({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex text-amber-400", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

type GoogleRatingBadgeProps = {
  className?: string;
};

export function GoogleRatingBadge({ className }: GoogleRatingBadgeProps) {
  const { score, mapsUrl } = site.googleRating;

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex flex-col items-end gap-1.5 rounded-md transition-colors",
        className,
      )}
      aria-label={`${score}/5 sur Google — avis vérifiés`}
    >
      <StarRating />
      <span className="inline-flex flex-wrap items-center justify-end gap-x-1 gap-y-0.5 text-xs leading-none">
        <span className="font-semibold text-slate-700 group-hover:text-brand-navy">
          {score}/5 sur Google
        </span>
        <span className="text-muted-foreground">· avis vérifiés</span>
        <ExternalLink
          className="h-3 w-3 shrink-0 text-slate-400 group-hover:text-brand-teal"
          aria-hidden
        />
      </span>
    </a>
  );
}
