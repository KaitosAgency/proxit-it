import { ExternalLink } from "lucide-react";
import { ReviewsCarousel } from "@/components/sections/reviews-carousel";
import { BandBottomArc } from "@/components/ui/band-bottom-arc";
import { getGoogleReviews } from "@/lib/google-reviews";import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn("inline-flex text-amber-400", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="sr-only">{rating} sur 5</span>
    </span>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export async function ReviewsBand() {
  const { score, count, reviews } = await getGoogleReviews();
  const reviewLabel = `${count} avis Google`;

  return (
    <section className="section-divider-top relative z-10 bg-brand-navy pb-5 md:pb-6">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
              Avis clients
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-4xl">
              Ils nous font confiance à Bourges
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
              Avis vérifiés Google : réactivité, proximité locale et accompagnement humain au quotidien.
            </p>
          </div>

          <a
            href={site.googleRating.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-brand-teal/30 hover:bg-white/[0.06]"
            aria-label={`Voir les ${count} avis Google de ${site.name} (${score}/5)`}
          >
            <GoogleMark className="h-8 w-8 shrink-0" />
            <span>
              <span className="flex items-center gap-2">
                <span className="text-2xl font-bold leading-none text-white">
                  {score.toLocaleString("fr-FR", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}
                </span>
                <StarRating rating={Math.round(score)} className="scale-90" />
              </span>
              <span className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-slate-400 group-hover:text-brand-teal/90">
                {reviewLabel}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </span>
            </span>
          </a>
        </div>

        <ReviewsCarousel initialReviews={reviews} />
      </div>

      <BandBottomArc />
    </section>  );
}
