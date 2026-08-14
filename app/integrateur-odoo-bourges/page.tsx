import type { Metadata } from "next";
import { PillarServicePageLayout } from "@/components/sections/pillar-service-page-layout";
import { createServicePageMetadata } from "@/lib/service-page-metadata";

export const metadata: Metadata = createServicePageMetadata({
  title: "Intégrateur Odoo à Bourges (18)",
  description:
    "Proxi IT, seul partenaire Odoo Learning Partner basé à Bourges. ERP, CRM, facturation électronique 2026-2027 pour les entreprises du Cher. Démo gratuite.",
  path: "/integrateur-odoo-bourges",
});

export default function OdooPage() {
  return (
    <PillarServicePageLayout
      title="Intégrateur Odoo certifié à Bourges"
      path="/integrateur-odoo-bourges"
      serviceLabel="Odoo · Bourges"
      updatedAt="août 2026"
      contactCtaLabel="Demander une démo Odoo"
      contactCtaHint="Indiquez votre secteur et vos processus clés. Démo personnalisée sous 48 h."
      contentSection={{
        label: "ERP & outils métier",
        title: "Ce que couvre notre accompagnement Odoo à Bourges",
        description:
          "Quatre piliers pour digitaliser votre entreprise dans le Cher : ERP, facturation électronique, déploiement et support.",
      }}
      offerSection={{
        label: "Nos offres",
        title: "Un projet Odoo adapté à votre activité",
        description:
          "De l'audit au go-live, avec le même interlocuteur pour votre IT et votre ERP.",
        includedLabel: "Intégration Odoo",
        includedTitle: "Ce qui est inclus",
        includedDescription:
          "Audit, déploiement, migration des données, formation et support pour votre ERP Odoo à Bourges.",
      }}
      methodSection={{
        label: "Notre méthode",
        title: "De l'audit au go-live Odoo",
        description:
          "Un déploiement structuré pour migrer sereinement vers Odoo sans bloquer votre activité.",
      }}
      slaSection={{
        description:
          "Proxi IT s'engage sur des délais concrets pour les projets Odoo des entreprises de Bourges et du Cher.",
      }}
      faqTitle="Tout sur Odoo à Bourges"
      intro="Proxi IT est le seul partenaire Odoo Learning Partner basé à Bourges (18). Nous déployons ERP, CRM et facturation électronique pour les entreprises du Cher, avec le même interlocuteur pour votre IT et vos outils métier. Basés 8 rue Jules Ferry depuis 15 ans."
      bullets={[
        "Audit et cadrage de votre projet Odoo",
        "Déploiement, migration des données et paramétrage",
        "Formation de vos équipes en présentiel à Bourges",
        "Support et évolutions avec interlocuteur unique",
        "Préparation facturation électronique 2026-2027",
        "Hébergement, sauvegardes et sécurité inclus",
      ]}
      contentBlocks={[
        {
          title: "ERP, CRM et gestion commerciale intégrée",
          bluf:
            "Proxi IT déploie Odoo pour centraliser votre gestion commerciale, comptabilité, stocks et production dans un ERP unique, adapté aux TPE et PME du Cher.",
          details:
            "Modules Ventes, Achats, Inventaire, Comptabilité et CRM configurés selon vos processus. Fini les tableurs Excel et les doubles saisies entre outils.",
        },
        {
          title: "Facturation électronique 2026-2027",
          bluf:
            "Proxi IT prépare votre entreprise à la facturation électronique obligatoire avec Odoo : format Factur-X, connexion PDP/PPF et paramétrage conforme avant l'échéance réglementaire.",
          details:
            "Odoo 17+ intègre nativement la facturation électronique. Proxi IT paramètre les flux, forme vos équipes et teste les échanges avant la deadline 2026-2027.",
        },
        {
          title: "Migration, déploiement et formation sur site",
          bluf:
            "Proxi IT migre vos données (clients, produits, historique comptable), paramètre Odoo et forme vos équipes en présentiel à Bourges ou en visio, avec go-live accompagné.",
          details:
            "Méthode par phases : module pilote, recette utilisateur, bascule progressive. Vous ne coupez pas votre activité le jour J.",
        },
        {
          title: "Support, évolutions et hébergement sécurisé",
          bluf:
            "Proxi IT héberge, sauvegarde et maintient votre instance Odoo avec mises à jour, support réactif sous 4 h et évolutions fonctionnelles selon votre croissance.",
          details:
            "Sauvegardes PostgreSQL quotidiennes, tests trimestriels, correctifs de sécurité. Même interlocuteur que pour votre infogérance IT.",
          relatedLink: {
            href: "/infogerance-informatique-bourges",
            label: "Découvrir notre infogérance IT",
          },
        },
      ]}
      personas={[
        {
          title: "PME sans ERP ou avec Excel/tableurs (5 à 30 utilisateurs)",
          description:
            "Vous gérez comptabilité, stocks et devis dans des fichiers dispersés. Proxi IT déploie Odoo pour centraliser vos processus avec un budget maîtrisé.",
        },
        {
          title: "Entreprise avec ERP obsolète ou coûteux",
          description:
            "Votre ERP actuel est vieillissant, mal adapté ou trop cher en maintenance. Odoo offre une alternative open source avec un coût total de possession 2 à 3 fois inférieur.",
        },
        {
          title: "Dirigeant voulant un interlocuteur IT + ERP unique",
          description:
            "Vous ne voulez plus jongler entre un infogéreur et un intégrateur ERP. Proxi IT combine IT et Odoo avec une seule équipe basée 8 rue Jules Ferry.",
        },
      ]}
      methodSteps={[
        {
          step: "01",
          title: "Audit & cadrage",
          description:
            "Analyse de vos processus métier, identification des modules Odoo nécessaires et estimation chiffrée du projet (déploiement, migration, formation).",
        },
        {
          step: "02",
          title: "Déploiement",
          description:
            "Paramétrage Odoo, migration des données, intégrations (banque, e-commerce) et recette utilisateur avant go-live.",
        },
        {
          step: "03",
          title: "Formation & go-live",
          description:
            "Formation de vos équipes en présentiel à Bourges, bascule progressive et accompagnement renforcé les 30 premiers jours.",
        },
        {
          step: "04",
          title: "Support & évolutions",
          description:
            "Support réactif, mises à jour Odoo, évolutions fonctionnelles et préparation facturation électronique 2026-2027.",
        },
      ]}
      differentiator={{
        title: "Odoo ou ERP traditionnel : pourquoi choisir Odoo avec Proxi IT ?",
        paragraphs: [
          "Odoo est un ERP open source modulaire, adapté aux TPE et PME. Coût de licence nul (Community) ou abordable (Enterprise), personnalisation flexible et communauté active de 12 millions d'utilisateurs.",
          "Proxi IT est le seul partenaire Odoo Learning Partner basé à Bourges. Vous bénéficiez d'un intégrateur certifié et d'un infogéreur local dans la même équipe, sans sous-traitance.",
          "Comparé aux ERP traditionnels (SAP, Sage, Cegid), Odoo se déploie en 2 à 4 mois pour une PME, avec un coût total 2 à 3 fois inférieur et une prise en main plus rapide.",
        ],
      }}
      slaItems={[
        "Réponse support Odoo sous 4 h ouvrées",
        "Sauvegardes PostgreSQL quotidiennes, testées trimestriellement",
        "Mises à jour Odoo planifiées avec fenêtre de maintenance",
        "Formation initiale incluse, sessions complémentaires sur demande",
        "Préparation facturation électronique avant échéance 2026-2027",
        "Interlocuteur unique basé à Bourges, pas de centre d'appels",
      ]}
      faq={[
        {
          question: "Combien coûte un projet Odoo pour une PME à Bourges ?",
          answer:
            "Un déploiement Odoo standard (Ventes, Achats, Comptabilité, CRM) pour 5 à 15 utilisateurs : 8 000 à 20 000€ HT (audit, paramétrage, migration, formation). Hébergement et support : 150 à 400€ HT/mois selon modules et utilisateurs.",
        },
        {
          question: "Proxi IT est-il vraiment certifié Odoo ?",
          answer:
            "Oui. Proxi IT est partenaire Odoo Learning Partner, seul intégrateur certifié basé à Bourges. Certification vérifiable sur odoo.com/partners. 15 ans d'expérience IT locale en complément.",
        },
        {
          question: "Odoo est-il prêt pour la facturation électronique 2026 ?",
          answer:
            "Oui. Odoo 17+ intègre nativement le format Factur-X et les connexions PDP/PPF. Proxi IT paramètre les flux et forme vos équipes avant l'échéance réglementaire (septembre 2026 pour les grandes entreprises, 2027 pour les PME).",
        },
        {
          question: "Combien de temps pour déployer Odoo ?",
          answer:
            "Projet standard (5 modules, 10 utilisateurs) : 2 à 4 mois de l'audit au go-live. Projets complexes (production, multi-sites) : 4 à 6 mois. Déploiement par phases pour limiter l'impact sur votre activité.",
        },
        {
          question: "Puis-je garder mon infogéreur ET Proxi IT pour Odoo ?",
          answer:
            "Oui, mais combiner IT et Odoo chez Proxi IT simplifie la coordination : un interlocuteur, une facture, pas de ping-pong entre prestataires. 70 % de nos clients Odoo sont aussi en infogérance chez nous.",
        },
        {
          question: "Odoo Community ou Enterprise : lequel choisir ?",
          answer:
            "Community : gratuit, modules de base, idéal pour démarrer. Enterprise : 13€ HT/utilisateur/mois, modules avancés (comptabilité complète, studio, IoT). Proxi IT vous conseille selon vos besoins lors de l'audit gratuit.",
        },
      ]}
      relatedServices={[
        {
          href: "/infogerance-informatique-bourges",
          label: "Infogérance informatique",
          description: "IT et Odoo avec le même interlocuteur basé à Bourges.",
        },
        {
          href: "/sauvegarde-entreprise-bourges",
          label: "Sauvegardes entreprise",
          description: "Backup PostgreSQL Odoo et plan de reprise.",
        },
        {
          href: "/cybersecurite-pme-bourges",
          label: "Cybersécurité PME",
          description: "Sécurisation de votre instance Odoo et de vos données.",
        },
        {
          href: "/contact",
          label: "Demander une démo Odoo",
          description: "Démo personnalisée gratuite, réponse sous 48 h.",
        },
        {
          href: "/services-manages-bourges",
          label: "Services managés 24/7",
          description: "Supervision de votre infrastructure Odoo.",
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
