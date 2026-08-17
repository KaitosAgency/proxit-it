import type { Metadata } from "next";
import { PillarServicePageLayout } from "@/components/sections/pillar-service-page-layout";
import { createServicePageMetadata } from "@/lib/service-page-metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = createServicePageMetadata({
  title: "Sauvegarde informatique entreprise à Bourges (18)",
  description:
    "Sauvegardes entreprise à Bourges : backup chiffré, tests trimestriels, PRA formalisé. 8 rue Jules Ferry. Devis gratuit.",
  path: "/sauvegarde-entreprise-bourges",
});

export default function SauvegardePage() {
  return (
    <PillarServicePageLayout
      title="Sauvegarde et continuité d'activité à Bourges"
      path="/sauvegarde-entreprise-bourges"
      serviceLabel="Services IT · Bourges"
      updatedAt="août 2026"
      contentSection={{
        label: "Continuité d'activité",
        title: "Ce que couvre notre accompagnement sauvegarde à Bourges",
        description:
          "Quatre piliers pour garantir la reprise de votre activité après un incident : backup, restauration, PRA et supervision.",
      }}
      offerSection={{
        label: "Nos offres",
        title: "Une stratégie de sauvegarde adaptée à vos données",
        description:
          "Règle 3-2-1 appliquée par défaut. Volume de données et fréquence ajustés à votre criticité métier.",
        includedLabel: "Sauvegardes",
        includedDescription:
          "Backup automatisé, tests de restauration et plan de reprise pour les entreprises de Bourges et du Cher.",
      }}
      methodSection={{
        label: "Notre méthode",
        title: "De l'audit à la reprise testée",
        description:
          "Un plan de sauvegarde documenté, testé et supervisé en permanence.",
      }}
      faqTitle="Tout sur les sauvegardes entreprise à Bourges"
      intro="Proxi IT met en place des sauvegardes fiables et un plan de reprise pour les entreprises à Bourges (18) et dans le Cher : backup quotidien chiffré, tests de restauration trimestriels et supervision 24/7. Basés 8 rue Jules Ferry, nous protégeons les données de 50+ clients depuis 15 ans."
      bullets={[
        "Sauvegardes automatisées locales et cloud (règle 3-2-1)",
        "Tests de restauration trimestriels documentés",
        "Plan de reprise d'activité (PRA) formalisé",
        "Supervision 24/7 des jobs de backup",
        "Alertes immédiates en cas d'échec de sauvegarde",
        "Accompagnement en cas d'incident ou ransomware",
      ]}
      contentBlocks={[
        {
          title: "Sauvegardes automatisées locales et cloud",
          bluf:
            "Proxi IT sauvegarde quotidiennement vos postes, serveurs et données métier avec la règle 3-2-1 : 3 copies, 2 supports différents, 1 copie hors site chiffrée conservée 30 jours.",
          details:
            "Backup incrémental nocturne sans impact sur la productivité. Données chiffrées en transit et au repos. Stockage local (NAS) et cloud (OVH, Azure) selon vos contraintes.",
        },
        {
          title: "Tests de restauration et validation des backups",
          bluf:
            "Proxi IT teste la restauration de vos sauvegardes tous les trimestres sur un environnement isolé, avec rapport documenté et délai de reprise mesuré (RTO/RPO).",
          details:
            "Une sauvegarde non testée n'est pas une sauvegarde. Chaque test valide que vos fichiers, bases de données et machines virtuelles sont réellement récupérables.",
        },
        {
          title: "Plan de reprise d'activité (PRA) formalisé",
          bluf:
            "Proxi IT rédige un plan de reprise d'activité documenté : procédures par scénario (panne serveur, ransomware, incendie), contacts d'urgence et délais de reprise cibles (RTO 4 h, RPO 24 h).",
          details:
            "Vous savez exactement quoi faire et qui appeler en cas d'incident majeur. Le PRA est revu semestriellement et adapté à l'évolution de votre parc.",
          relatedLink: {
            href: "/cybersecurite-pme-bourges",
            label: "En savoir plus sur la cybersécurité PME",
          },
        },
        {
          title: "Supervision des jobs et alertes en temps réel",
          bluf:
            "Proxi IT supervise vos jobs de sauvegarde 24 h/24 et 7 j/7 depuis Bourges, avec alerte immédiate par email et téléphone en cas d'échec, espace disque insuffisant ou corruption détectée.",
          details:
            "Monitoring proactif : vous n'apprenez pas qu'une sauvegarde a échoué le jour où vous en avez besoin. Intervention corrective sous 4 h ouvrées.",
          relatedLink: {
            href: routes.supervision,
            label: "Découvrir notre supervision 24/7",
          },
        },
      ]}
      personas={[
        {
          title: "PME sans sauvegarde formalisée (5 à 30 postes)",
          description:
            "Vous sauvegardez sur clé USB ou ne savez pas si vos backups fonctionnent. Proxi IT met en place une stratégie fiable en 5 à 10 jours avec tests de restauration inclus.",
        },
        {
          title: "Entreprise avec serveur de fichiers ou ERP local",
          description:
            "Vos données métier sont critiques (comptabilité, ERP, fichiers clients). Vous avez besoin d'un PRA documenté et de restaurations testées tous les trimestres.",
        },
        {
          title: "Structure ayant subi une perte de données",
          description:
            "Vous ne voulez plus revivre une panne sans backup. Proxi IT déploie une stratégie 3-2-1, supervise les jobs et intervient sur site dans le Cher en cas d'incident.",
        },
      ]}
      methodSteps={[
        {
          step: "01",
          title: "Audit des données",
          description:
            "Cartographie de vos données critiques (fichiers, bases, ERP), volumes, fréquence de modification et contraintes de reprise (RTO/RPO).",
        },
        {
          step: "02",
          title: "Architecture backup",
          description:
            "Conception de la stratégie 3-2-1 : fréquence, rétention 30 jours, chiffrement, stockage local et cloud. Devis chiffré avant déploiement.",
        },
        {
          step: "03",
          title: "Déploiement & PRA",
          description:
            "Installation des agents, configuration des jobs, premier backup complet et rédaction du plan de reprise d'activité.",
        },
        {
          step: "04",
          title: "Tests & supervision",
          description:
            "Tests de restauration trimestriels, supervision 24/7 des jobs et revue semestrielle du PRA.",
        },
      ]}
      differentiator={{
        title: "Sauvegardes seules ou incluses dans l'infogérance : quelle différence ?",
        paragraphs: [
          "Les sauvegardes de base (backup quotidien, rétention 7 jours) sont incluses dans tous les contrats d'infogérance Proxi IT à Bourges. C'est le minimum pour protéger votre activité.",
          "L'offre sauvegarde dédiée ajoute la règle 3-2-1 complète, des tests de restauration trimestriels documentés, un PRA formalisé et une supervision 24/7 des jobs. Recommandé pour les parcs avec serveurs ou ERP local.",
          "Dans les deux cas, même équipe basée 8 rue Jules Ferry, intervention sur site dans le Cher et accompagnement en cas de ransomware.",
        ],
      }}
      slaItems={[
        "Sauvegardes quotidiennes automatisées, chiffrées et conservées 30 jours",
        "Tests de restauration trimestriels avec rapport documenté",
        "Alerte immédiate en cas d'échec de job de backup",
        "Intervention corrective sous 4 h ouvrées",
        "PRA formalisé avec RTO 4 h et RPO 24 h cibles",
        "Interlocuteur unique basé à Bourges, pas de centre d'appels",
      ]}
      faq={[
        {
          question: "Combien coûtent les sauvegardes entreprise à Bourges ?",
          answer:
            "Le tarif dépend du volume de données et du nombre de postes/serveurs. Comptez 3 à 8€ HT/mois par poste pour une stratégie 3-2-1 complète avec tests trimestriels. Devis personnalisé gratuit selon vos volumes.",
        },
        {
          question: "Qu'est-ce que la règle 3-2-1 ?",
          answer:
            "3 copies de vos données, sur 2 supports différents (disque local + cloud), dont 1 copie hors site. Proxi IT applique cette règle par défaut pour garantir la reprise même en cas d'incendie ou ransomware.",
        },
        {
          question: "Testez-vous vraiment les restaurations ?",
          answer:
            "Oui, tous les trimestres. Proxi IT restaure un échantillon de vos données sur un environnement isolé, mesure le délai de reprise (RTO) et livre un rapport. C'est la seule preuve qu'une sauvegarde fonctionne.",
        },
        {
          question: "Que se passe-t-il en cas de ransomware ?",
          answer:
            "Proxi IT isole les postes infectés, identifie la dernière sauvegarde saine et restaure vos données. Intervention sur site dans le Cher sous 4 h. Le PRA documenté accélère la reprise.",
        },
        {
          question: "Sauvegardez-vous Odoo et les ERP ?",
          answer:
            "Oui. Proxi IT sauvegarde les bases PostgreSQL Odoo, les fichiers ERP et les machines virtuelles. Restauration testée trimestriellement, compatible avec notre offre intégrateur Odoo.",
        },
        {
          question: "Quel délai pour mettre en place les sauvegardes ?",
          answer:
            "Audit et déploiement en 5 à 10 jours ouvrés selon le volume. Premier backup complet la nuit suivante le déploiement. Premier test de restauration sous 30 jours.",
        },
      ]}
      relatedServices={[
        {
          href: "/cybersecurite-pme-bourges",
          label: "Cybersécurité PME",
          description: "Protection anti-ransomware, correctifs et sensibilisation.",
        },
        {
          href: "/infogerance-informatique-bourges",
          label: "Infogérance informatique",
          description: "Maintenance, support et sauvegardes de base incluses.",
        },
        {
          href: routes.supervision,
          label: "Supervision informatique 24/7",
          description: "Supervision avancée des jobs de backup et alertes.",
        },
        {
          href: "/contact",
          label: "Demander un devis",
          description: "Devis gratuit, réponse sous 24 h. Indiquez vos volumes.",
        },
        {
          href: "/integrateur-odoo-bourges",
          label: "Intégrateur Odoo Bourges",
          description: "Sauvegarde et hébergement Odoo avec le même interlocuteur.",
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
