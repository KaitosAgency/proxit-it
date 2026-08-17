import { cache } from "react";
import { googleReviewsFallback, site, type GoogleReview } from "@/lib/site";

export type GoogleReviewsData = {
  score: number;
  count: number;
  reviews: GoogleReview[];
  source: "google" | "fallback";
};

const PLACE_DETAILS_FIELDS = "rating,userRatingCount,reviews";

type PlacesReview = {
  name?: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string };
};

type PlacesDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
};

function mapPlacesReviews(reviews: PlacesReview[]): GoogleReview[] {
  return reviews
    .map((review, index) => ({
      id: review.name ?? `google-review-${index}`,
      author: review.authorAttribution?.displayName ?? "Client Google",
      rating: review.rating ?? 5,
      text: review.text?.text ?? review.originalText?.text ?? "",
      relativeTime: review.relativePublishTimeDescription ?? "",
    }))
    .filter((review) => review.text.length > 0);
}

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const configured = process.env.GOOGLE_PLACE_ID?.trim();
  if (configured) {
    return configured;
  }

  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({
      textQuery: "Proxi IT 8 rue Jules Ferry Bourges",
      languageCode: "fr",
    }),
    next: { revalidate: 604800 },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as { places?: { id?: string }[] };
  const placeId = data.places?.[0]?.id;
  return placeId ?? null;
}

async function fetchFromGooglePlaces(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (!apiKey) {
    return null;
  }

  const placeId = await resolvePlaceId(apiKey);
  if (!placeId) {
    return null;
  }

  const placeResource = placeId.startsWith("places/") ? placeId : `places/${placeId}`;

  const response = await fetch(`https://places.googleapis.com/v1/${placeResource}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": PLACE_DETAILS_FIELDS,
    },
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as PlacesDetailsResponse;
  const reviews = mapPlacesReviews(data.reviews ?? []);

  if (reviews.length === 0) {
    return null;
  }

  return {
    score: data.rating ?? site.googleRating.score,
    count: data.userRatingCount ?? site.googleRating.count,
    reviews: reviews.slice(0, 8),
    source: "google",
  };
}

function getFallbackReviews(): GoogleReviewsData {
  return {
    score: site.googleRating.score,
    count: site.googleRating.count,
    reviews: googleReviewsFallback,
    source: "fallback",
  };
}

/** True when GOOGLE_PLACES_API_KEY is set (live fetch attempted at build/SSR). */
export function isGooglePlacesApiEnabled(): boolean {
  return Boolean(process.env.GOOGLE_PLACES_API_KEY?.trim());
}

/** For future JSON-LD Review[] — same source as the home reviews band. */
export async function getReviewsForStructuredData(): Promise<GoogleReviewsData> {
  return getGoogleReviews();
}

export const getGoogleReviews = cache(async (): Promise<GoogleReviewsData> => {
  try {
    const live = await fetchFromGooglePlaces();
    if (live) {
      return live;
    }
  } catch (error) {
    console.warn("[google-reviews] fetch failed, using fallback", error);
  }

  return getFallbackReviews();
});
