import type { MetadataRoute } from "next";
import { routes } from "@/lib/site";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type SeoRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const indexableRoutes: SeoRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: routes.infogerance, changeFrequency: "monthly", priority: 0.9 },
  { path: routes.supervision, changeFrequency: "monthly", priority: 0.9 },
  { path: routes.cybersecurite, changeFrequency: "monthly", priority: 0.9 },
  { path: routes.sauvegarde, changeFrequency: "monthly", priority: 0.9 },
  { path: routes.odoo, changeFrequency: "monthly", priority: 0.85 },
  { path: routes.contact, changeFrequency: "monthly", priority: 0.85 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-de-confidentialite", changeFrequency: "yearly", priority: 0.3 },
];
