import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/service-page-layout";

export const metadata: Metadata = {
  title: "Sauvegarde informatique entreprise à Bourges",
  description:
    "Sauvegardes automatisées et plan de reprise d'activité pour TPE/PME à Bourges. Proxi IT, infogéreur local dans le Cher.",
};

export default function SauvegardePage() {
  return (
    <ServicePageLayout
      title="Sauvegarde et continuité d'activité à Bourges"
      path="/sauvegarde-entreprise-bourges"
      intro="Proxi IT met en place des sauvegardes fiables et un plan de reprise pour les entreprises de Bourges et du Cher, avec supervision et tests réguliers."
      bullets={[
        "Sauvegardes automatisées locales et cloud",
        "Tests de restauration réguliers",
        "Plan de reprise d'activité (PRA)",
        "Supervision des jobs de backup",
        "Alertes en cas d'échec",
        "Accompagnement en cas d'incident",
      ]}
    />
  );
}
