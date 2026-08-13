import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/service-page-layout";

export const metadata: Metadata = {
  title: "Supervision et services managés à Bourges",
  description:
    "Supervision 24/7, helpdesk illimité et gestion proactive de votre parc informatique à Bourges. Proxi IT, MSP local dans le Cher.",
};

export default function ServicesManagesPage() {
  return (
    <ServicePageLayout
      title="Supervision complète et services managés à Bourges"
      path="/services-manages-bourges"
      intro="Proxi IT supervise votre parc informatique 24/7 à Bourges : alertes proactives, helpdesk et gestion des incidents avant qu'ils bloquent votre activité."
      bullets={[
        "Monitoring et supervision 24/7",
        "Helpdesk illimité à distance",
        "Gestion des incidents et escalade",
        "Mises à jour et correctifs de sécurité",
        "Reporting et suivi de votre parc",
        "SLA adaptés aux TPE et PME",
      ]}
    />
  );
}
