import type { Metadata } from "next";
import { PillarServicePageLayout } from "@/components/sections/pillar-service-page-layout";
import { createServicePageMetadata } from "@/lib/service-page-metadata";

export const metadata: Metadata = createServicePageMetadata({
  title: "Supervision et services managés à Bourges (18)",
  description:
    "Services managés et supervision 24/7 pour entreprises à Bourges : monitoring proactif, helpdesk illimité, gestion des incidents. MSP local dans le Cher. Devis gratuit.",
  path: "/services-manages-bourges",
});

export default function ServicesManagesPage() {
  return (
    <PillarServicePageLayout
      title="Supervision complète et services managés à Bourges"
      path="/services-manages-bourges"
      serviceLabel="Services IT · Bourges"
      updatedAt="août 2026"
      contentSection={{
        label: "Supervision 24/7",
        title: "Ce que couvrent nos services managés à Bourges",
        description:
          "Quatre piliers pour les entreprises du Cher dont l'infrastructure ne doit jamais s'arrêter : monitoring, incidents, sécurité et reporting.",
      }}
      offerSection={{
        label: "Nos offres",
        title: "Un niveau de service adapté à votre criticité",
        description:
          "Supervision avancée au poste ou par serveur. Contrat évolutif selon la complexité de votre parc.",
        includedLabel: "Services managés",
        includedDescription:
          "Monitoring proactif, helpdesk illimité et gestion des incidents pour votre parc informatique à Bourges.",
      }}
      methodSection={{
        label: "Notre méthode",
        title: "De l'audit à la supervision continue",
        description:
          "Un déploiement structuré pour passer d'une IT réactive à une infrastructure supervisée en permanence.",
      }}
      faqTitle="Tout sur les services managés à Bourges"
      intro="Proxi IT supervise votre parc informatique 24 h/24 et 7 j/7 à Bourges (18) : alertes proactives, helpdesk illimité et gestion des incidents avant qu'ils bloquent votre activité. Basés 8 rue Jules Ferry, nous monitorons 300+ postes et serveurs pour 50+ clients depuis 15 ans."
      bullets={[
        "Monitoring et supervision 24 h/24 et 7 j/7",
        "Helpdesk illimité à distance avec interlocuteur unique",
        "Gestion des incidents et escalade technique immédiate",
        "Mises à jour et correctifs de sécurité dans les 48 h",
        "Reporting mensuel et revue de parc trimestrielle",
        "SLA adaptés aux TPE et PME du Cher",
      ]}
      contentBlocks={[
        {
          title: "Monitoring proactif et alertes en temps réel",
          bluf:
            "Proxi IT supervise vos postes, serveurs et services critiques 24 h/24 et 7 j/7 depuis Bourges, avec alertes automatiques dès qu'un seuil est dépassé (CPU, disque, réseau, sauvegarde).",
          details:
            "Agents de supervision déployés sur l'ensemble du parc. Les anomalies sont détectées et traitées avant impact utilisateur. Tableaux de bord accessibles et revue mensuelle avec votre interlocuteur dédié basé 8 rue Jules Ferry.",
        },
        {
          title: "Gestion des incidents et escalade technique",
          bluf:
            "Proxi IT prend en charge les incidents de bout en bout : diagnostic, résolution à distance ou sur site dans le Cher sous 4 h en criticité haute, avec escalade vers un ingénieur senior si nécessaire.",
          details:
            "Procédures documentées par type d'incident (serveur down, réseau coupé, ransomware suspecté). Astreinte 7j/7 pour les parcs critiques. Vous n'avez plus à coordonner plusieurs prestataires.",
          relatedLink: {
            href: "/infogerance-informatique-bourges",
            label: "Comparer avec l'infogérance classique",
          },
        },
        {
          title: "Correctifs de sécurité et mises à jour automatisées",
          bluf:
            "Proxi IT déploie les correctifs Windows, Linux et applicatifs dans les 48 h après validation, avec fenêtres de maintenance planifiées pour limiter les interruptions.",
          details:
            "Inventaire des logiciels, gestion des versions obsolètes et tests avant déploiement massif. Réduction de la surface d'attaque sans bloquer la productivité de vos équipes.",
          relatedLink: {
            href: "/cybersecurite-pme-bourges",
            label: "En savoir plus sur la cybersécurité PME",
          },
        },
        {
          title: "Reporting, SLA et pilotage de votre parc",
          bluf:
            "Proxi IT fournit un reporting mensuel (disponibilité, tickets, incidents, recommandations) et une revue de parc trimestrielle pour anticiper les renouvellements matériels et les montées en charge.",
          details:
            "Indicateurs clairs : temps de résolution, taux de disponibilité, postes à renouveler. Vous pilotez votre IT avec des chiffres, pas des impressions.",
        },
      ]}
      personas={[
        {
          title: "PME avec serveurs critiques (10 à 50 postes)",
          description:
            "Votre activité dépend de serveurs locaux ou cloud (ERP, messagerie, fichiers). Vous avez besoin d'une supervision 24/7 et d'une astreinte, pas seulement d'un helpdesk en heures ouvrées.",
        },
        {
          title: "Entreprise multi-sites dans le Centre-Val de Loire",
          description:
            "Vous gérez plusieurs sites dans le Cher et les départements limitrophes. Proxi IT centralise la supervision et intervient sur site dans un rayon de 80 km autour de Bourges.",
        },
        {
          title: "Structure passant de l'infogérance aux services managés",
          description:
            "Votre parc a grossi ou vos enjeux de disponibilité ont augmenté. Vous complétez votre contrat d'infogérance par une supervision avancée sans changer de prestataire.",
        },
      ]}
      methodSteps={[
        {
          step: "01",
          title: "Audit & cartographie",
          description:
            "Inventaire des actifs (postes, serveurs, réseau, cloud), identification des services critiques et définition des seuils d'alerte et des SLA.",
        },
        {
          step: "02",
          title: "Déploiement agents",
          description:
            "Installation des agents de monitoring, configuration des alertes, intégration helpdesk et documentation des procédures d'escalade.",
        },
        {
          step: "03",
          title: "Supervision active",
          description:
            "Monitoring 24/7, traitement proactif des alertes et gestion des incidents. Les pannes sont anticipées ou résolues avant impact métier.",
        },
        {
          step: "04",
          title: "Pilotage & amélioration",
          description:
            "Reporting mensuel, revue trimestrielle et recommandations d'évolution (capacité, sécurité, renouvellement matériel).",
        },
      ]}
      differentiator={{
        title: "Services managés ou infogérance classique : quelle différence ?",
        paragraphs: [
          "Les services managés chez Proxi IT ajoutent une supervision 24 h/24 et 7 j/7, un monitoring proactif et une gestion des incidents en amont. C'est le niveau supérieur pour les parcs avec serveurs critiques ou forte exigence de disponibilité.",
          "L'infogérance classique couvre la maintenance, le support et la gestion quotidienne. Elle convient aux parcs de 5 à 30 postes sans infrastructure complexe. Les deux offres peuvent être combinées.",
          "Dans les deux cas, même interlocuteur unique basé 8 rue Jules Ferry à Bourges, sans centre d'appels national ni ticket perdu.",
        ],
      }}
      slaItems={[
        "Supervision et alertes 24 h/24 et 7 j/7 sur les parcs sous contrat",
        "Réponse helpdesk sous 4 h ouvrées, astreinte 7j/7 en option",
        "Intervention sur site dans le Cher sous 4 h en criticité haute",
        "Correctifs de sécurité déployés dans les 48 h après validation",
        "Reporting mensuel et revue de parc trimestrielle incluse",
        "Interlocuteur unique basé à Bourges, pas de centre d'appels",
      ]}
      faq={[
        {
          question: "Combien coûtent les services managés à Bourges ?",
          answer:
            "Le tarif dépend du nombre de postes, serveurs et du niveau d'astreinte. Comptez 20 à 35€ HT/mois par poste pour une supervision avancée incluant monitoring 24/7. Devis personnalisé gratuit selon votre parc et votre criticité.",
        },
        {
          question: "Quelle différence avec l'infogérance ?",
          answer:
            "L'infogérance couvre maintenance et support quotidien. Les services managés ajoutent monitoring proactif 24/7, alertes automatiques, gestion avancée des incidents et reporting. Recommandé dès que vous avez des serveurs critiques ou plus de 15 postes.",
        },
        {
          question: "Supervisez-vous Azure, OVH et serveurs locaux ?",
          answer:
            "Oui. Proxi IT supervise Windows Server, Linux, Azure, OVH et infrastructures hybrides. Monitoring CPU, RAM, disques, services et jobs de sauvegarde depuis notre plateforme basée à Bourges.",
        },
        {
          question: "Proposez-vous une astreinte week-end et jours fériés ?",
          answer:
            "Oui, en option pour les contrats avec serveurs critiques. Astreinte 7j/7 avec intervention sur site dans le Cher sous 4 h en criticité haute (serveur indisponible, réseau coupé).",
        },
        {
          question: "Puis-je garder Proxi IT si je passe aux services managés ?",
          answer:
            "Oui. La plupart de nos clients services managés étaient déjà en infogérance chez Proxi IT. Le passage se fait sans rupture : même équipe, même adresse 8 rue Jules Ferry, déploiement progressif des agents de supervision.",
        },
        {
          question: "Quel délai pour déployer la supervision ?",
          answer:
            "Audit et déploiement des agents en 5 à 10 jours ouvrés selon la taille du parc. Supervision active dès la fin du déploiement, avec période de calibrage des alertes la première semaine.",
        },
      ]}
      relatedServices={[
        {
          href: "/infogerance-informatique-bourges",
          label: "Infogérance informatique",
          description: "Maintenance, support et gestion quotidienne de votre parc.",
        },
        {
          href: "/cybersecurite-pme-bourges",
          label: "Cybersécurité PME",
          description: "Protection des données, pare-feu et sensibilisation des équipes.",
        },
        {
          href: "/sauvegarde-entreprise-bourges",
          label: "Sauvegardes entreprise",
          description: "Backup automatisé, tests de restauration et plan de reprise.",
        },
        {
          href: "/contact",
          label: "Demander un devis",
          description: "Devis gratuit, réponse sous 24 h. Indiquez postes et serveurs.",
        },
        {
          href: "/integrateur-odoo-bourges",
          label: "Intégrateur Odoo Bourges",
          description: "ERP et facturation électronique avec le même interlocuteur IT.",
        },
        {
          href: "/contact#carte",
          label: "Zone d'intervention",
          description: "Bourges, Cher et Centre-Val de Loire · 8 rue Jules Ferry.",
        },
      ]}
    />
  );
}
