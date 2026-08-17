# Plan d'optimisation technique — Proxi IT

> Fichier temporaire de suivi. À supprimer une fois tous les lots cochés.

**Repo :** `KaitosAgency/proxit-it` · **Stack :** Next.js 16 App Router · Vercel

**Doc refonte (API Places) :** [kaitos-book — plan-refonte.md](../../../Repos/kaitos-book/spaces/proxi-it/documents/audit-proxi-it/pages/plan-refonte.md#phase-5-bis--api-google-places--rich-results-avis)

---

## Suivi des lots

| Lot | Thème | Statut |
|-----|-------|--------|
| 1 | Prod & sécurité (headers, spam-guard, API, erreurs, badge Odoo) | done |
| 2 | SEO & perf (canonicals, avis, robots, sitemap, Places prep) | done |
| 3 | Accessibilité & UX légère | done |
| 4 | Qualité (CI, tests, nettoyage) | done |
| 5 | Refonte différée (OG par page, header split, CAPTCHA) | documenté kaitos-book |

---

## Checklist Vercel

### Variables existantes (inchangées)

- `NEXT_PUBLIC_SITE_URL`
- Odoo : `ODOO_URL`, `ODOO_DB`, `ODOO_LOGIN`, `ODOO_API_KEY`
- Webhook : `ODOO_WEBHOOK_URL`
- SMTP : `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, …
- GA4 : `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- GSC : `GOOGLE_SITE_VERIFICATION`

### Nouvelles variables (optionnelles)

| Variable | Lot | Usage |
|----------|-----|-------|
| `ODOO_WEBHOOK_SECRET` | 1 | Header `X-Webhook-Secret` sur POST webhook n8n |
| `GOOGLE_PLACES_API_KEY` | 2/5 | Avis Google live (quand client fournit la clé) |
| `GOOGLE_PLACE_ID` | 2/5 | ID lieu — évite la recherche texte à chaque build |

### Après déploiement

- [ ] Vérifier headers : `curl -I https://www.proxi-it.fr`
- [ ] Tester formulaire contact (soumission normale)
- [ ] Vérifier badge Odoo Learning Partner dans le footer
- [ ] Vérifier pages 404 (`/page-inexistante`)

---

## Rate limit sans service externe

Le middleware Edge limite **5 POST / 15 min / IP** sur `/api/contact`.

**Limite connue :** compteur en mémoire **par instance Vercel** (pas global). Suffisant pour un site vitrine ; pour une campagne massive, prévoir Vercel KV ou Upstash (Lot 5).

Mesures complémentaires sans friction visiteur :

- Honeypot (`company_website`)
- Délai minimum 3 s entre affichage et soumission
- Plafonds de longueur par champ
- Filtrage User-Agent bot (`isbot`)

---

## Lot 5 — Hors scope code (refonte)

Voir section **Phase 5 bis** dans kaitos-book :

- OG image par page service
- Header server/client split
- JSON-LD `Review[]` dynamiques + `aggregateRating` live
- Rate limit global (KV)
- CAPTCHA Turnstile (si spam persistant)
