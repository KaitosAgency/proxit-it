import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/lib/seo-routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexableRoutes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
