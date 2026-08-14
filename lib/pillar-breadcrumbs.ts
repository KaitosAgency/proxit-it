import type { BreadcrumbItem } from "@/components/seo/json-ld";

const PILLAR_SHORT_NAMES: Record<string, string> = {
  "/infogerance-informatique-bourges": "Infogérance informatique",
  "/services-manages-bourges": "Services managés",
  "/cybersecurite-pme-bourges": "Cybersécurité",
  "/sauvegarde-entreprise-bourges": "Sauvegardes",
  "/integrateur-odoo-bourges": "Intégrateur Odoo",
};

export function buildPillarBreadcrumbs({
  path,
  title,
  hubPath,
  hubLabel,
}: {
  path: string;
  title: string;
  hubPath: string;
  hubLabel: string;
}): BreadcrumbItem[] {
  const pageShortName = PILLAR_SHORT_NAMES[path] ?? title;

  if (path === hubPath) {
    return [
      { name: "Accueil", path: "/" },
      { name: title, path, shortName: pageShortName },
    ];
  }

  return [
    { name: "Accueil", path: "/" },
    { name: hubLabel, shortName: hubLabel },
    { name: title, path, shortName: pageShortName },
  ];
}
