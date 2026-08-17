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
components/forms/    Formulaire contact (client)
app/api/contact/     Route API — validation + envoi Odoo / fallbacks
lib/odoo/            Client JSON-RPC, webhook, mapping CRM
lib/contact/         E-mail secours SMTP OVH
lib/analytics-events.ts  Événements GA4 côté navigateur
```

## Formulaire de contact

Page **`/contact`** — composant `ContactForm` → route **`POST /api/contact`**.

### Champs collectés

| Champ | Obligatoire | Envoyé à Odoo / webhook |
|---|---|---|
| Nom | Oui | `contact_name` (opportunité) |
| E-mail | Oui | `email_from` |
| Société | Oui | `partner_name` |
| Téléphone | Non | `phone` |
| Sujet (infogérance, Odoo, etc.) | Oui | Ligne dans la description du lead |
| « Comment nous avez-vous connu ? » | Non | Ligne dans la description |
| Message | Oui | Corps de la description |

Validation côté serveur : champs obligatoires, format e-mail, sujet dans la liste autorisée (`lib/site.ts`).

### Parcours technique

```
Visiteur soumet le formulaire (navigateur)
         ↓
POST /api/contact (JSON)
         ↓
Validation serveur
         ↓
┌─ Odoo API configurée ? ──→ crm.lead create (opportunité CRM)
│
├─ Sinon ODOO_WEBHOOK_URL ? ──→ POST JSON vers n8n / controller custom
│
├─ Sinon SMTP OVH configuré ? ──→ e-mail vers CONTACT_TO
│
├─ Sinon production ──→ 503 « Formulaire indisponible »
│
└─ Sinon dev ──→ log console + réponse OK
         ↓
Si réponse OK (2xx) : message « Message envoyé » côté UI
         ↓
Si cookies analytics acceptés + GA4 configuré :
  événement GA4 generate_lead (voir ci-dessous)
```

**Priorité stricte :** Odoo API d’abord, puis webhook, puis email de secours. Une seule destination par soumission.

En **développement** (`npm run dev`), sans aucune config, la payload est loguée en console — pratique pour tester l’UI sans Odoo.

### Odoo CRM (recommandé)

Crée une **opportunité** (`crm.lead`, type `opportunity`) — équivalent du formulaire Website Builder Odoo.

- Sujet du lead : `ODOO_LEAD_SUBJECT` ou défaut `Nouveau contact site web`
- Équipe / vendeur : paramètres Odoo `proxi_website.crm_team_id` et `proxi_website.crm_user_id`, ou secours `ODOO_CRM_TEAM_ID` / `ODOO_CRM_USER_ID`

Guide détaillé : [Intégration Odoo CRM](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/odoo-form-integration.md)

### Fallbacks (sans Odoo API)

| Mécanisme | Variables | État |
|---|---|---|
| Webhook | `ODOO_WEBHOOK_URL` | **Actif** — POST JSON `{ source: "proxi-it-website", ...payload }` |
| E-mail SMTP OVH | `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO` (+ optionnels ci-dessous) | **Actif** — notification par mail si Odoo absent |

Variables SMTP optionnelles : `SMTP_PORT` (défaut `587`), `SMTP_SECURE` (`false` en 587, `true` en 465), `SMTP_FROM`, `CONTACT_EMAIL_SUBJECT`.

Exemple OVH : `SMTP_HOST=ssl0.ovh.net`, port `587`, identifiants du compte mail OVH.

### Google Analytics 4 (conversion)

Ce n’est **pas** une notification serveur : c’est un **événement côté navigateur**, déclenché **uniquement après** une soumission réussie (`/api/contact` → HTTP 2xx).

**Conditions cumulées :**

1. `NEXT_PUBLIC_GA_MEASUREMENT_ID` défini (ex. `G-XXXXXXXXXX`)
2. Visiteur a **accepté** les cookies analytics (bandeau cookies + Consent Mode v2)
3. Le formulaire a reçu une réponse succès du serveur

**Événement envoyé** (`lib/analytics-events.ts`) :

| Propriété GA4 | Valeur |
|---|---|
| Nom d’événement | `generate_lead` |
| `method` | `contact_form` |
| `topic` | Libellé du sujet choisi (ex. « Infogérance », « Intégration Odoo ») |

Dans GA4 Admin, marquer `generate_lead` comme **événement clé / conversion** pour le suivi des leads site.

Si le visiteur **refuse** les cookies analytics, le lead part quand même vers Odoo (ou webhook) — seul le tracking GA4 est absent.

Guide GA4 + GSC : [Google Analytics et Search Console](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/google-analytics-gsc.md)

### Fichiers concernés

| Fichier | Rôle |
|---|---|
| `components/forms/contact-form.tsx` | UI, envoi fetch, déclenchement GA4 |
| `app/api/contact/route.ts` | Validation + chaîne Odoo / webhook / secours |
| `lib/odoo/crm-lead.ts` | Mapping payload → opportunité CRM |
| `lib/odoo/webhook.ts` | Envoi webhook JSON |
| `lib/contact/smtp.ts` | Envoi e-mail secours (SMTP OVH) |
| `lib/analytics-events.ts` | `trackContactFormSubmit` → `generate_lead` |

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
| **SMTP OVH (secours e-mail)** | | |
| `SMTP_HOST` | Oui (si SMTP) | Relais OVH — ex. `ssl0.ovh.net` |
| `SMTP_PORT` | Non | Défaut `587` (STARTTLS) ; `465` pour SSL |
| `SMTP_SECURE` | Non | `true` si port 465, sinon `false` |
| `SMTP_USER` | Oui (si SMTP) | Adresse mail OVH complète |
| `SMTP_PASS` | Oui (si SMTP) | Mot de passe du compte mail |
| `SMTP_FROM` | Non | Expéditeur — défaut `Proxi IT <SMTP_USER>` |
| `CONTACT_TO` | Oui (si SMTP) | Destinataire des leads (ex. `contact@proxi-it.fr`) |
| `CONTACT_EMAIL_SUBJECT` | Non | Préfixe sujet — défaut `[Site web] {sujet} — {société}` |

**En résumé :** pour Odoo, il faut **4 variables** (`URL`, `DB`, `LOGIN`, `API_KEY`). Le reste est optionnel ou se configure dans Odoo. Sans aucune de ces configs, le formulaire ne part pas en production (sauf mode dev qui logue en console).

### Routage CRM sans redéployer le site

Dans Odoo : **Paramètres → Technique → Paramètres système**, créer :

| Clé | Valeur |
|-----|--------|
| `proxi_website.crm_team_id` | ID numérique de l'équipe (ex. Ventes) |
| `proxi_website.crm_user_id` | ID numérique du vendeur (ex. Quentin) |

Proxi IT modifie équipe / vendeur ici — équivalent du sélecteur dans l'éditeur de formulaire Odoo Website.

Comportement complet du formulaire (fallbacks, GA4) : section [Formulaire de contact](#formulaire-de-contact) ci-dessus.

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
- **Conversion formulaire contact** : événement GA4 `generate_lead` — voir section [Formulaire de contact](#formulaire-de-contact)

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
