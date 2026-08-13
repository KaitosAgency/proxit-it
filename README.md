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

```bash
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
public/              Logo clean (long light/dark, mid), llms.txt, og.png
```

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique (défaut : `https://www.proxi-it.fr`) |
| `RESEND_API_KEY` | Envoi email formulaire (production) |
| `CONTACT_TO` | Destinataire des demandes |
| `ODOO_WEBHOOK_URL` | Alternative webhook CRM |

En développement, le formulaire accepte les soumissions et logue la payload. En production sans clé configurée, une erreur explicite est renvoyée.

## SEO

- JSON-LD `LocalBusiness` global (layout)
- `FAQPage` sur la home et pages service avec FAQ
- `Service` sur chaque page service
- Open Graph image : `/og.png`
- Fichier `public/llms.txt` pour les moteurs IA

## Prochaines étapes

1. Brancher Resend ou webhook Odoo CRM
2. Ajouter pages pSEO (`/infogerance/[ville]`)
3. Déployer preview Vercel (`preview.proxi-it.fr`)

## Référence

Audit stratégique : `kaitos-book` → espace Proxi IT → `audit-proxi-it`
