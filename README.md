# Proxi IT — site web (preview refonte)

Preview Next.js de la refonte proxi-it.fr, basée sur l'audit Kaitos Book.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- **shadcn/ui** (style base-nova) : Button, Card, Badge, Accordion, Sheet, Input, Select…
- Lucide React

## Design

Inspiré de [Faillefox](https://faillefox.com/) :
- **Hero sombre** : cadrillage + colonnes de code en fond + console + CTA
- **Menu desktop (accueil)** : pill flottante transparente, solidifiée au scroll (comme Kaitos)
- **Reste du site en light** : fond `#f4f7fb`, cartes blanches, ombres douces
- **Section Fonctionnalités** : grille 3×2 dans une carte blanche avec séparateurs
- Labels uppercase teal, titres navy, corps gris

## Homepage

Ordre des sections : Hero → Services → Odoo (secondaire) → Trust → FAQ → CTA final.

## Démarrage

**Repo :** [github.com/KaitosAgency/proxit-it](https://github.com/KaitosAgency/proxit-it)

```bash
git clone https://github.com/KaitosAgency/proxit-it.git
cd proxit-it
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Pages preview

| Route | Description |
|---|---|
| `/` | Home — positionnement IT clair, Odoo secondaire |
| `/infogerance-informatique-bourges` | Page service pilier |
| `/services-manages-bourges` | Supervision 24/7 |
| `/cybersecurite-pme-bourges` | Cybersécurité PME |
| `/sauvegarde-entreprise-bourges` | Sauvegardes |
| `/integrateur-odoo-bourges` | Silo Odoo |
| `/contact` | Formulaire + carte + coordonnées |
| `/mentions-legales` | Mentions légales |
| `/politique-de-confidentialite` | RGPD |

## Structure

```
app/                 Routes Next.js
components/          UI, sections, layout, SEO
lib/site.ts          Constantes marque (NAP, nav, FAQ, stats, etc.)
public/              Logo clean (long light/dark, mid), llms.txt
```

## Variables d'environnement

| Variable | Obligatoire ? | Rôle |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Non | URL canonique (défaut : `https://www.proxi-it.fr`) |
| **Odoo — connexion API** | | |
| `ODOO_URL` | **Oui** (si Odoo) | URL instance (ex. `https://xxx.odoo.com`) |
| `ODOO_DB` | **Oui** (si Odoo) | Nom de la base |
| `ODOO_LOGIN` | **Oui** (si Odoo) | Login utilisateur technique |
| `ODOO_API_KEY` | **Oui** (si Odoo) | Clé API de cet utilisateur |
| **Odoo — contenu opportunité** | | |
| `ODOO_LEAD_SUBJECT` | Non | Sujet CRM — défaut : `Nouveau contact site web` |
| **Odoo — équipe / vendeur** (au moins une option) | | |
| Param. Odoo `proxi_website.crm_team_id` | Recommandé | ID équipe « Ventes » — modifiable dans Odoo sans redéployer |
| Param. Odoo `proxi_website.crm_user_id` | Recommandé | ID vendeur en charge — idem |
| `ODOO_CRM_TEAM_ID` | Non | Secours env si param. Odoo absent |
| `ODOO_CRM_USER_ID` | Non | Secours env si param. Odoo absent |
| **Alternatives au lieu d'Odoo API** | | |
| `ODOO_WEBHOOK_URL` | Non | Webhook n8n / controller (sans les 4 vars Odoo ci-dessus) |
| `RESEND_API_KEY` + `CONTACT_TO` | Non | Email secours |

**En résumé :** pour Odoo, il faut **4 variables** (`URL`, `DB`, `LOGIN`, `API_KEY`). Le reste est optionnel ou se configure dans Odoo. Sans aucune de ces configs, le formulaire ne part pas en production (sauf mode dev qui logue en console).

### Routage CRM sans redéployer le site

Dans Odoo : **Paramètres → Technique → Paramètres système**, créer :

| Clé | Valeur |
|-----|--------|
| `proxi_website.crm_team_id` | ID numérique de l'équipe (ex. Ventes) |
| `proxi_website.crm_user_id` | ID numérique du vendeur (ex. Quentin) |

Proxi IT modifie équipe / vendeur ici — équivalent du sélecteur dans l'éditeur de formulaire Odoo Website.

En développement, le formulaire logue la payload si Odoo n'est pas configuré. En production, Odoo API est requis (ou webhook / email de secours).

## SEO

- JSON-LD `LocalBusiness` global (layout)
- `FAQPage` sur la home et pages service avec FAQ
- `Service` sur chaque page service
- Open Graph : image générée automatiquement (`/opengraph-image`, 1200×630)
- Fichier `public/llms.txt` pour les moteurs IA
- **Sitemap** : `/sitemap.xml` (auto-généré)
- **Robots** : `/robots.txt` (auto-généré)
- **Google Analytics 4** : si `NEXT_PUBLIC_GA_MEASUREMENT_ID` est défini (chargé **après consentement** via bandeau cookies)
- **Google Search Console** : vérification via `GOOGLE_SITE_VERIFICATION`
- **Conversion GA4** : événement `generate_lead` à chaque formulaire contact envoyé

| Variable | Obligatoire ? | Rôle |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommandé | URL canonique — sitemap, JSON-LD, **og:image** (doit = URL partagée) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Recommandé | ID de mesure GA4 (`G-XXXXXXXXXX`) |
| `GOOGLE_SITE_VERIFICATION` | Recommandé | Code de vérification GSC (balise HTML) |

## Configuration Open Graph (aperçu de lien)

📖 **[Image Open Graph sur Vercel](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/open-graph-vercel.md)**

Guide pas à pas : `NEXT_PUBLIC_SITE_URL`, vérifier `/opengraph-image`, dépannage Discord/LinkedIn, démo vs prod.

## Configuration Google Analytics & Search Console

📖 **[Google Analytics et Search Console](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/google-analytics-gsc.md)**

Guide pas à pas : créer GA4, vérifier GSC, configurer Vercel, soumettre le sitemap, baseline.

## Configuration Odoo : guide complet

Pour configurer l'intégration du formulaire de contact avec Odoo CRM, **suivez le guide détaillé** :

📖 **[Intégration du formulaire de contact avec Odoo CRM](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/odoo-form-integration.md)**

Ce guide explique pas à pas :
- Comment trouver chaque variable d'environnement dans Odoo
- Comment créer une clé API (et ce qu'elle permet de faire)
- Où configurer les secrets (Vercel vs GitHub)
- Comment tester l'intégration
- Questions fréquentes sur la sécurité et la maintenance

**Prérequis :** accès admin à l'instance Odoo de Proxi IT + accès au projet Vercel.

## Choix de React au lieu du Website Builder Odoo

Ce projet utilise React/Next.js au lieu du Website Builder Odoo natif. **Pourquoi ce choix ?**

📖 **[Vue technique : Décision React vs Odoo Builder](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/vue-technique.md#décision--react-au-lieu-du-website-builder-odoo)**

Résumé : rapidité de création agentique (15 pages en 2h), fluidité UX, design sur mesure, génération programmatique de contenu (pSEO), SEO technique sans compromis. L'intégration Odoo CRM reste native via l'API JSON-RPC.

## Prochaines étapes

1. Configurer Odoo CRM (suivre le guide ci-dessus)
2. Configurer GA4 + GSC (suivre le guide ci-dessus)
3. Ajouter pages pSEO (`/infogerance/[ville]`)
4. Déployer sur Vercel et basculer les DNS OVH

📖 **[Déploiement Vercel & DNS OVH](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/deploiement-vercel-ovh.md)** — guide pas à pas pour mettre le site en ligne.

📖 **[Modifier le site](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/modifications-site.md)** — repo GitHub, édition agentique (Cursor, Claude, Antigravity), push ou fork.

## Référence

Audit stratégique : `kaitos-book` → espace Proxi IT → `audit-proxi-it`
