import type { BreadcrumbItem } from "@/components/seo/json-ld";
import { routes } from "@/lib/site";

const PILLAR_SHORT_NAMES: Record<string, string> = {
  [routes.infogerance]: "Infogérance informatique",
  [routes.supervision]: "Supervision 24/7",
  [routes.cybersecurite]: "Cybersécurité",
  [routes.sauvegarde]: "Sauvegardes",
  [routes.odoo]: "Intégrateur Odoo",
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
