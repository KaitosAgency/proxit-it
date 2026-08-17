import type { MetadataRoute } from "next";
import { routes } from "@/lib/site";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type SeoRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** Date ISO (YYYY-MM-DD) du dernier changement de contenu significatif */
  lastModified?: string;
};

/** Mettre à jour lastModified lors d’un changement de contenu sur la route concernée. */
export const indexableRoutes: SeoRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1, lastModified: "2026-08-17" },
  { path: routes.infogerance, changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-17" },
  { path: routes.supervision, changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-17" },
  { path: routes.cybersecurite, changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-17" },
  { path: routes.sauvegarde, changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-17" },
  { path: routes.odoo, changeFrequency: "monthly", priority: 0.85, lastModified: "2026-08-17" },
  { path: routes.contact, changeFrequency: "monthly", priority: 0.85, lastModified: "2026-08-17" },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-08-17" },
  {
    path: "/politique-de-confidentialite",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-08-17",
  },
];
