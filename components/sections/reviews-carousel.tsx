"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { GoogleReview } from "@/lib/site";
import { cn } from "@/lib/utils";

type ReviewsCarouselProps = {
  initialReviews: GoogleReview[];
};

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setVisibleCount(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visibleCount;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="sr-only">{rating} sur 5</span>
    </span>
  );
}

function ReviewCard({ review, className }: { review: GoogleReview; className?: string }) {
  return (
    <figure
      className={cn(
        "flex flex-col self-start rounded-xl border border-white/15 bg-white/[0.05] p-4 shadow-[0_8px_28px_-14px_rgb(0_0_0_/_0.4)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <StarRating rating={review.rating} />
        {review.relativeTime ? (
          <span className="shrink-0 font-mono text-[10px] text-slate-500">{review.relativeTime}</span>
        ) : null}
      </div>

      <blockquote
        className="mt-2.5 line-clamp-3 text-sm leading-snug text-slate-200"
        title={review.text}
      >
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>

      <figcaption className="mt-2.5 text-xs font-semibold text-white">{review.author}</figcaption>
    </figure>
  );
}

function CarouselDots({
  reviews,
  activeIndex,
  onSelect,
}: {
  reviews: GoogleReview[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-4 flex items-center justify-center gap-1.5">
      {reviews.map((review, dotIndex) => (
        <button
          key={review.id}
          type="button"
          aria-label={`Afficher l'avis ${dotIndex + 1}`}
          onClick={() => onSelect(dotIndex)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            dotIndex === activeIndex
              ? "w-7 bg-brand-teal"
              : "w-2 bg-white/20 hover:bg-white/35",
          )}
        />
      ))}
    </div>
  );
}

export function ReviewsCarousel({ initialReviews }: ReviewsCarouselProps) {
  const [reviews] = useState(initialReviews);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const visibleCount = useVisibleCount();
  const isTouchCarousel = visibleCount === 1;

  const slideCount = reviews.length;
  const canRotate = slideCount > visibleCount;
  const activeIndex = slideCount > 0 ? ((index % slideCount) + slideCount) % slideCount : 0;

  const advance = useCallback(() => {
    if (!canRotate || isAnimating) {
      return;
    }
    setIsAnimating(true);
    setIndex((current) => (current + 1) % slideCount);
    window.setTimeout(() => setIsAnimating(false), 500);
  }, [canRotate, isAnimating, slideCount]);

  useEffect(() => {
    if (!canRotate || isTouchCarousel) {
      return;
    }

    const timer = window.setInterval(advance, 4500);
    return () => window.clearInterval(timer);
  }, [advance, canRotate, isTouchCarousel]);

  const scrollToIndex = useCallback((targetIndex: number) => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const slide = container.children[targetIndex] as HTMLElement | undefined;
    if (!slide) {
      return;
    }

    container.scrollTo({
      left: slide.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
    setIndex(targetIndex);
  }, []);

  const handleTouchScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(container.children).forEach((child, childIndex) => {
      const element = child as HTMLElement;
      const elementCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(containerCenter - elementCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = childIndex;
      }
    });

    setIndex(closestIndex);
  }, []);

  const visibleReviews = Array.from({ length: visibleCount }, (_, offset) => {
    return reviews[(activeIndex + offset) % slideCount];
  });

  if (isTouchCarousel && slideCount > 1) {
    return (
      <div className="mt-8">
        <div
          ref={scrollRef}
          className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-live="polite"
          onScroll={handleTouchScroll}
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              className="w-[min(85vw,22rem)] shrink-0 snap-center"
            />
          ))}
        </div>

        <CarouselDots reviews={reviews} activeIndex={activeIndex} onSelect={scrollToIndex} />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div
        className={cn(
          "grid items-start gap-3 transition-opacity duration-500 sm:gap-4",
          visibleCount === 3 && "lg:grid-cols-3",
          visibleCount === 2 && "sm:grid-cols-2",
          visibleCount === 1 && "grid-cols-1",
          isAnimating ? "opacity-90" : "opacity-100",
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {visibleReviews.map((review, offset) => (
          <ReviewCard
            key={`${review.id}-${activeIndex}-${offset}`}
            review={review}
            className="review-carousel-enter"
          />
        ))}
      </div>

      {canRotate ? (
        <CarouselDots reviews={reviews} activeIndex={activeIndex} onSelect={setIndex} />
      ) : null}
    </div>
  );
}
