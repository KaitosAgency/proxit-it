import type { Metadata } from "next";
import { PillarServicePageLayout } from "@/components/sections/pillar-service-page-layout";
import { createServicePageMetadata } from "@/lib/service-page-metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = createServicePageMetadata({
  title: "Infogérance informatique à Bourges (18)",
  description:
    "Infogérance informatique Bourges : maintenance 24/7, sauvegardes, support sous 4h. Tarif au poste fixe. Basés 8 rue Jules Ferry. Devis gratuit.",
  path: "/infogerance-informatique-bourges",
});

export default function InfogerancePage() {
  return (
    <PillarServicePageLayout
      title="Infogérance informatique à Bourges"
      path="/infogerance-informatique-bourges"
      serviceLabel="Services IT · Bourges"
      updatedAt="août 2026"
      contentSection={{
        label: "Votre contrat d'infogérance",
        title: "Ce que couvre notre accompagnement à Bourges",
        description:
          "Quatre piliers alignés sur les attentes des entreprises du Cher : maintenance, sécurité, infrastructure et conseil.",
      }}
      faqTitle="Tout sur l'infogérance à Bourges"
      intro="Proxi IT assure l'infogérance informatique des entreprises à Bourges (18) et dans le Cher : supervision 24/7, maintenance proactive, sauvegardes automatisées et support humain avec réponse sous 4 h. Tarif au poste fixe. Basés 8 rue Jules Ferry à Bourges, nous supervisons 300+ postes pour 50+ clients depuis 15 ans."
      bullets={[
        "Maintenance préventive et corrective de votre parc",
        "Supervision et alertes proactives 24/7",
        "Sauvegardes et plan de reprise d'activité",
        "Support helpdesk avec interlocuteur unique",
        "Interventions sur site dans le Cher",
        "Contrat clair, tarif au poste sans surprise",
      ]}
      contentBlocks={[
        {
          title: "Maintenance proactive et support technique aux utilisateurs",
          bluf:
            "Proxi IT assure la maintenance préventive et corrective de votre parc informatique à Bourges, avec un helpdesk local basé 8 rue Jules Ferry et un interlocuteur unique disponible 7j/7.",
          details:
            "Mises à jour système, correctifs de sécurité et alertes sont gérés en amont, pas après la panne. Support humain avec réponse garantie sous 4 h ouvrées, intervention sur site dans le Cher selon criticité.",
        },
        {
          title: "Sécurisation des données, pare-feu et sauvegardes automatisées",
          bluf:
            "Vos données sont protégées par des sauvegardes quotidiennes automatisées, un plan de reprise d'activité (PRA) testé tous les trimestres et des mises à jour de sécurité appliquées dans les 48 h sur l'ensemble du parc.",
          details:
            "Proxi IT gère les accès utilisateurs, le déploiement des correctifs et la sensibilisation de vos équipes aux risques courants (phishing, mots de passe faibles, ransomware). Sauvegardes chiffrées conservées 30 jours.",
          relatedLink: {
            href: "/cybersecurite-pme-bourges",
            label: "En savoir plus sur la cybersécurité PME à Bourges",
          },
        },
        {
          title: "Hébergement cloud et gestion des serveurs physiques",
          bluf:
            "Proxi IT supervise vos serveurs locaux (Windows Server, Linux) et cloud (Azure, OVH) 24 h/24 et 7 j/7, avec alertes proactives en cas d'anomalie et intervention sur site dans le Cher sous 4 h en criticité haute.",
          details:
            "Monitoring des performances (CPU, RAM, disques), gestion des incidents et escalade technique immédiate. Votre infrastructure reste disponible même en dehors des horaires de bureau, week-end inclus.",
          relatedLink: {
            href: routes.supervision,
            label: "Découvrir notre supervision 24/7",
          },
        },
        {
          title: "Conseil IT et évolution du parc informatique",
          bluf:
            "Proxi IT vous accompagne dans le dimensionnement, le renouvellement matériel (cycles de 3 à 5 ans) et la montée en charge, avec audit de parc gratuit tous les 6 mois et recommandations chiffrées.",
          details:
            "Planification des investissements, anticipation des obsolescences (Windows, serveurs, postes) et conseil sur les migrations cloud ou hybrides. Vous évitez les pannes coûteuses en renouvelant au bon moment.",
        },
      ]}
      personas={[
        {
          title: "Entreprise sans service IT interne (5 à 30 postes)",
          description:
            "Vous externalisez l'intégralité de votre informatique à Proxi IT, prestataire local basé 8 rue Jules Ferry à Bourges, qui connaît les contraintes des TPE et PME du Cher et intervient sur site sous 4 h.",
        },
        {
          title: "Structure en croissance (30 à 80 postes)",
          description:
            "Votre parc s'agrandit et vous avez besoin d'un contrat évolutif au poste (de 15 à 25€ HT/mois selon services), sans recruter un technicien IT à temps plein (coût moyen 35 à 40 k€ annuels).",
        },
        {
          title: "Dirigeant seul responsable de l'IT",
          description:
            "Vous voulez un interlocuteur unique, joignable rapidement, qui prend en charge les urgences et la maintenance au quotidien.",
        },
      ]}
      methodSteps={[
        {
          step: "01",
          title: "Audit & cadrage",
          description:
            "Inventaire de votre parc (postes, serveurs, logiciels), analyse des risques et définition du niveau de service adapté.",
        },
        {
          step: "02",
          title: "Déploiement",
          description:
            "Installation des agents de supervision, configuration des sauvegardes et mise en place du helpdesk avec votre interlocuteur dédié.",
        },
        {
          step: "03",
          title: "Supervision",
          description:
            "Monitoring 24/7, alertes proactives et maintenance préventive. Les incidents sont traités avant d'impacter votre activité.",
        },
        {
          step: "04",
          title: "Suivi & évolution",
          description:
            "Reporting régulier, revue de parc trimestrielle et recommandations pour faire évoluer votre infrastructure en phase avec votre croissance.",
        },
      ]}
      differentiator={{
        title: "Infogérance classique ou supervision 24/7 : quelle différence ?",
        paragraphs: [
          "L'infogérance chez Proxi IT couvre la maintenance, le support et la gestion quotidienne de votre parc informatique à Bourges. C'est le contrat de base pour externaliser votre IT.",
          "La supervision 24/7 va plus loin : monitoring proactif, alertes automatiques et gestion des incidents en amont. Si vous avez des serveurs critiques ou un parc complexe, la supervision 24/7 complète votre contrat d'infogérance.",
          "Dans les deux cas, vous bénéficiez du même interlocuteur unique basé 8 rue Jules Ferry, sans ticket perdu dans un centre d'appels national.",
        ],
      }}
      slaItems={[
        "Réponse helpdesk garantie en moins de 4 h ouvrées",
        "Supervision et alertes 24/7 sur les parcs sous contrat",
        "Intervention sur site dans le Cher selon criticité",
        "Sauvegardes testées et plan de reprise documenté",
        "Interlocuteur unique basé à Bourges, pas de centre d'appels",
        "Contrat au poste, fixe et prévisible, sans surprise en fin de mois",
      ]}
      faq={[
        {
          question: "Combien coûte l'infogérance à Bourges ?",
          answer:
            "Proxi IT propose un tarif au poste de 15 à 25€ HT/mois selon le niveau de service (maintenance seule ou supervision 24/7 incluse). Pour un parc de 10 postes : 150 à 250€ HT/mois. Devis personnalisé gratuit avec nombre de postes, serveurs et criticité.",
        },
        {
          question: "Combien de postes et serveurs gérez-vous ?",
          answer:
            "Proxi IT supervise plus de 300 postes pour 50+ clients dans le Cher et le Centre-Val de Loire. Nous accompagnons des parcs de 3 à 80 postes, avec ou sans serveurs locaux ou cloud.",
        },
        {
          question: "Intervenez-vous hors de Bourges ?",
          answer:
            "Oui. Proxi IT couvre Bourges, Vierzon, Saint-Amand-Montrond et l'ensemble du Cher (18), avec intervention sur site dans les départements limitrophes du Centre-Val de Loire : Loir-et-Cher (41), Indre (36), Loiret (45), Nièvre (58), Allier (03) et Creuse (23). Rayon d'intervention : 80 km autour de Bourges.",
        },
        {
          question: "Proxi IT ou un grand prestataire national ?",
          answer:
            "Proxi IT combine proximité locale, interlocuteur unique et réactivité. Vous parlez à une équipe basée 8 rue Jules Ferry à Bourges, pas à un centre d'appels. Décisions rapides, connaissance du tissu local.",
        },
        {
          question: "Quelle différence entre infogérance et supervision 24/7 ?",
          answer:
            "L'infogérance couvre la maintenance et le support quotidien. La supervision 24/7 ajoute un monitoring proactif, des alertes automatiques et une gestion avancée des incidents. Les deux peuvent être combinés selon la criticité de votre parc.",
        },
        {
          question: "Quel délai de prise en charge en cas de panne critique ?",
          answer:
            "Réponse helpdesk garantie sous 4 h ouvrées maximum. En criticité haute (serveur indisponible, réseau coupé), intervention sur site dans le Cher sous 4 h, 7j/7 pour les contrats avec astreinte. À distance : prise en main immédiate via TeamViewer ou RDP.",
        },
      ]}
      relatedServices={[
        {
          href: routes.supervision,
          label: "Supervision informatique 24/7",
          description: "Monitoring proactif, alertes automatiques et gestion des incidents.",
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
