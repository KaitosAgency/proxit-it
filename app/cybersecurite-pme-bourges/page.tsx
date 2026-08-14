import type { Metadata } from "next";
import { PillarServicePageLayout } from "@/components/sections/pillar-service-page-layout";
import { createServicePageMetadata } from "@/lib/service-page-metadata";

export const metadata: Metadata = createServicePageMetadata({
  title: "Cybersécurité PME à Bourges (18)",
  description:
    "Cybersécurité pour entreprises à Bourges : sauvegardes, mises à jour, gestion des accès, sensibilisation anti-ransomware. MSP local dans le Cher. Devis gratuit.",
  path: "/cybersecurite-pme-bourges",
});

export default function CybersecuritePage() {
  return (
    <PillarServicePageLayout
      title="Cybersécurité pour entreprises à Bourges"
      path="/cybersecurite-pme-bourges"
      serviceLabel="Services IT · Bourges"
      updatedAt="août 2026"
      contentSection={{
        label: "Protection de votre SI",
        title: "Ce que couvre notre accompagnement cybersécurité à Bourges",
        description:
          "Quatre piliers pour protéger les TPE et PME du Cher : correctifs, sauvegardes, accès et sensibilisation.",
      }}
      offerSection={{
        label: "Nos offres",
        title: "Une protection adaptée à votre niveau de risque",
        description:
          "Inclus dans l'infogérance ou en renfort ponctuel. Audit de sécurité gratuit pour évaluer votre exposition.",
        includedLabel: "Cybersécurité",
        includedDescription:
          "Protection des données, pare-feu, sauvegardes et sensibilisation pour les entreprises de Bourges et du Cher.",
      }}
      methodSection={{
        label: "Notre méthode",
        title: "De l'audit à la protection continue",
        description:
          "Un plan de sécurisation progressif, sans paralyser la productivité de vos équipes.",
      }}
      faqTitle="Tout sur la cybersécurité PME à Bourges"
      intro="Proxi IT sécurise l'informatique des entreprises à Bourges (18) et dans le Cher : mises à jour dans les 48 h, sauvegardes chiffrées, gestion des accès et sensibilisation anti-ransomware. Basés 8 rue Jules Ferry, nous protégeons 300+ postes pour 50+ clients depuis 15 ans."
      bullets={[
        "Mises à jour et correctifs de sécurité dans les 48 h",
        "Sauvegardes chiffrées et tests de restauration trimestriels",
        "Gestion des accès, MFA et politique de mots de passe",
        "Protection contre les ransomwares et le phishing",
        "Sensibilisation des collaborateurs (sessions annuelles)",
        "Intervention locale dans le Cher en cas d'incident",
      ]}
      contentBlocks={[
        {
          title: "Correctifs de sécurité et mises à jour système",
          bluf:
            "Proxi IT déploie les correctifs Windows, Linux et applicatifs dans les 48 h après validation, avec inventaire des logiciels obsolètes et fenêtres de maintenance planifiées.",
          details:
            "Les failles connues sont corrigées avant exploitation. Tests sur un poste pilote avant déploiement massif. Réduction de la surface d'attaque sans bloquer vos équipes.",
        },
        {
          title: "Sauvegardes, chiffrement et protection anti-ransomware",
          bluf:
            "Vos données sont sauvegardées quotidiennement, chiffrées et conservées 30 jours avec règle 3-2-1 (3 copies, 2 supports, 1 hors site). Tests de restauration trimestriels documentés.",
          details:
            "En cas de ransomware, restauration depuis une sauvegarde saine testée. Supervision des jobs de backup avec alerte immédiate en cas d'échec.",
          relatedLink: {
            href: "/sauvegarde-entreprise-bourges",
            label: "En savoir plus sur les sauvegardes entreprise",
          },
        },
        {
          title: "Gestion des accès, MFA et pare-feu",
          bluf:
            "Proxi IT configure l'authentification multifacteur (MFA), les droits utilisateurs par rôle et les pare-feu (Fortinet, pfSense) pour limiter les accès non autorisés à votre réseau.",
          details:
            "Revue des comptes administrateurs, désactivation des accès des anciens collaborateurs sous 24 h, segmentation réseau pour isoler les serveurs critiques.",
        },
        {
          title: "Sensibilisation et prévention du phishing",
          bluf:
            "Proxi IT forme vos équipes aux risques courants (phishing, mots de passe faibles, USB inconnues) avec sessions annuelles et campagnes de simulation de phishing.",
          details:
            "80 % des incidents partent d'une erreur humaine. La sensibilisation réduit drastiquement le risque d'infection par ransomware ou vol de credentials.",
        },
      ]}
      personas={[
        {
          title: "PME sans politique de sécurité formalisée (5 à 30 postes)",
          description:
            "Vous n'avez pas de DSI et ne savez pas par où commencer. Proxi IT réalise un audit gratuit et déploie un plan de sécurisation progressif adapté à votre budget.",
        },
        {
          title: "Entreprise ayant subi ou craignant un ransomware",
          description:
            "Vous voulez des sauvegardes testées, des correctifs à jour et une équipe joignable 7j/7 en cas d'incident. Proxi IT intervient sur site dans le Cher sous 4 h.",
        },
        {
          title: "Structure soumise à des exigences clients ou assureur",
          description:
            "Vos clients ou votre assurance demandent des preuves de sécurisation (sauvegardes, MFA, sensibilisation). Proxi IT documente vos mesures et fournit un reporting.",
        },
      ]}
      methodSteps={[
        {
          step: "01",
          title: "Audit de sécurité",
          description:
            "Analyse de votre parc (postes, serveurs, accès, sauvegardes, pare-feu), identification des vulnérabilités et priorisation des actions.",
        },
        {
          step: "02",
          title: "Plan de sécurisation",
          description:
            "Roadmap chiffrée : correctifs, sauvegardes, MFA, sensibilisation. Déploiement par phases pour limiter l'impact sur votre activité.",
        },
        {
          step: "03",
          title: "Déploiement",
          description:
            "Mise en place des sauvegardes, correctifs, MFA et pare-feu. Configuration des alertes et documentation des procédures d'incident.",
        },
        {
          step: "04",
          title: "Suivi & sensibilisation",
          description:
            "Maintenance continue, tests de restauration trimestriels, sessions de sensibilisation annuelles et revue de sécurité semestrielle.",
        },
      ]}
      differentiator={{
        title: "Cybersécurité incluse ou renfort ponctuel : comment choisir ?",
        paragraphs: [
          "La cybersécurité de base (correctifs, sauvegardes, gestion des accès) est incluse dans tous les contrats d'infogérance Proxi IT à Bourges. C'est le socle minimum pour protéger votre activité.",
          "Le renfort cybersécurité ajoute un audit approfondi, des campagnes de phishing simulées, une segmentation réseau avancée et un accompagnement post-incident. Recommandé après un incident ou pour les parcs sensibles.",
          "Dans les deux cas, même interlocuteur basé 8 rue Jules Ferry, intervention sur site dans le Cher et pas de sous-traitance opaque.",
        ],
      }}
      slaItems={[
        "Correctifs de sécurité déployés dans les 48 h après validation",
        "Sauvegardes quotidiennes chiffrées, testées tous les trimestres",
        "Désactivation des accès des anciens collaborateurs sous 24 h",
        "Intervention sur site dans le Cher sous 4 h en cas d'incident critique",
        "Sessions de sensibilisation annuelles pour vos équipes",
        "Interlocuteur unique basé à Bourges, pas de centre d'appels",
      ]}
      faq={[
        {
          question: "Combien coûte la cybersécurité pour une PME à Bourges ?",
          answer:
            "Les mesures de base (correctifs, sauvegardes, accès) sont incluses dans l'infogérance à partir de 15€ HT/mois par poste. Un renfort cybersécurité (audit, phishing simulé, segmentation) démarre à partir de 500€ HT ponctuel ou 5€ HT/mois/poste en option.",
        },
        {
          question: "Que faire en cas de ransomware ?",
          answer:
            "Contactez Proxi IT immédiatement au 02 18 15 05 30. Nous isolons les postes infectés, analysons l'étendue et restaurons depuis une sauvegarde saine testée. Intervention sur site dans le Cher sous 4 h en criticité haute.",
        },
        {
          question: "Proxi IT est-il conforme RGPD ?",
          answer:
            "Proxi IT applique les bonnes pratiques RGPD : chiffrement des sauvegardes, gestion des accès, traçabilité des interventions. Nous accompagnons vos démarches de mise en conformité sans prétendre remplacer un DPO.",
        },
        {
          question: "Faites-vous des audits de sécurité ?",
          answer:
            "Oui. Audit gratuit de 1 h pour les prospects, audit approfondi payant pour les clients (inventaire, vulnérabilités, recommandations chiffrées). Rapport livré sous 5 jours ouvrés.",
        },
        {
          question: "Sensibilisez-vous les équipes au phishing ?",
          answer:
            "Oui. Sessions annuelles en présentiel ou visio, plus campagnes de simulation de phishing avec reporting individuel. Objectif : réduire le taux de clic sur les emails frauduleux de 80 % en 12 mois.",
        },
        {
          question: "La cybersécurité est-elle incluse dans l'infogérance ?",
          answer:
            "Oui, le socle minimum (correctifs, sauvegardes, gestion des accès) est inclus. Les options avancées (audit, phishing simulé, segmentation réseau) sont disponibles en complément selon votre niveau de risque.",
        },
      ]}
      relatedServices={[
        {
          href: "/sauvegarde-entreprise-bourges",
          label: "Sauvegardes entreprise",
          description: "Backup automatisé, tests de restauration et plan de reprise.",
        },
        {
          href: "/infogerance-informatique-bourges",
          label: "Infogérance informatique",
          description: "Maintenance, support et cybersécurité de base incluse.",
        },
        {
          href: "/services-manages-bourges",
          label: "Services managés 24/7",
          description: "Supervision avancée et gestion proactive des incidents.",
        },
        {
          href: "/contact",
          label: "Demander un audit gratuit",
          description: "Audit de sécurité gratuit, réponse sous 24 h.",
        },
        {
          href: "/integrateur-odoo-bourges",
          label: "Intégrateur Odoo Bourges",
          description: "ERP sécurisé avec le même interlocuteur IT.",
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
