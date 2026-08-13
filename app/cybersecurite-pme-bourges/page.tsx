import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/service-page-layout";

export const metadata: Metadata = {
  title: "Cybersécurité PME à Bourges",
  description:
    "Protection des données, sauvegardes, mises à jour et sensibilisation pour les PME du Cher. Proxi IT, MSP local à Bourges.",
};

export default function CybersecuritePage() {
  return (
    <ServicePageLayout
      title="Cybersécurité pour PME à Bourges"
      path="/cybersecurite-pme-bourges"
      intro="Proxi IT sécurise l'informatique des TPE et PME de Bourges : sauvegardes, mises à jour, gestion des accès et sensibilisation des équipes."
      bullets={[
        "Mises à jour et correctifs de sécurité",
        "Sauvegardes et tests de restauration",
        "Gestion des accès et des mots de passe",
        "Protection contre les ransomwares",
        "Sensibilisation des collaborateurs",
        "Intervention locale dans le Cher",
      ]}
    />
  );
}
