import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/service-page-layout";

export const metadata: Metadata = {
  title: "Infogérance informatique à Bourges (18)",
  description:
    "Contrat d'infogérance pour TPE/PME à Bourges : maintenance proactive, sauvegardes, support illimité. Tarif au poste, sans surprise. Devis gratuit.",
};

export default function InfogerancePage() {
  return (
    <ServicePageLayout
      title="Infogérance informatique à Bourges"
      path="/infogerance-informatique-bourges"
      intro="Proxi IT propose l'infogérance aux TPE et PME de Bourges et du Cher, avec supervision 24/7, maintenance proactive et tarification au poste."
      bullets={[
        "Maintenance préventive et corrective de votre parc",
        "Supervision et alertes proactives 24/7",
        "Sauvegardes et plan de reprise d'activité",
        "Support helpdesk avec interlocuteur unique",
        "Interventions sur site dans le Cher",
        "Contrat clair, tarif au poste sans surprise",
      ]}
      faq={[
        {
          question: "Combien coûte l'infogérance à Bourges ?",
          answer:
            "Le tarif dépend du nombre de postes et du niveau de service. Proxi IT propose un modèle au poste, fixe et prévisible. Demandez un devis personnalisé.",
        },
        {
          question: "Intervenez-vous hors de Bourges ?",
          answer:
            "Oui. Proxi IT couvre Bourges et l'ensemble du Cher, avec intervention sur site selon vos besoins.",
        },
        {
          question: "Proxi IT ou un grand prestataire national ?",
          answer:
            "Proxi IT combine proximité locale, interlocuteur unique et réactivité. Vous parlez à une équipe basée 8 rue Jules Ferry, pas à un centre d'appels.",
        },
      ]}
    />
  );
}
