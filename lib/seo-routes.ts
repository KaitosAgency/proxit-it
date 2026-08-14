import type { MetadataRoute } from "next";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type SeoRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const indexableRoutes: SeoRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/infogerance-informatique-bourges", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services-manages-bourges", changeFrequency: "monthly", priority: 0.9 },
  { path: "/cybersecurite-pme-bourges", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sauvegarde-entreprise-bourges", changeFrequency: "monthly", priority: 0.9 },
  { path: "/integrateur-odoo-bourges", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-de-confidentialite", changeFrequency: "yearly", priority: 0.3 },
];
