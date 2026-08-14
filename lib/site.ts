export const site = {
  name: "Proxi IT",
  legalName: "PROXI IT",
  tagline: "Votre informatique, on s'en occupe.",
  description:
    "Infogérance et services managés pour les entreprises à Bourges et dans le Cher. Supervision 24/7, maintenance proactive, support humain. Intégrateur Odoo certifié.",
  phone: "+33 2 18 15 05 30",
  phoneHref: "tel:+33218150530",
  email: "contact@proxi-it.fr",
  address: {
    street: "8 rue Jules Ferry",
    city: "Bourges",
    postalCode: "18000",
    region: "Cher",
    country: "FR",
    full: "8 rue Jules Ferry, 18000 Bourges",
  },
  geo: {
    latitude: 47.081,
    longitude: 2.398,
  },
  googleRating: {
    score: 5.0,
    count: 4,
    display: "5/5 Google",
    contactDisplay: "5/5 sur Google · avis vérifiés",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Proxi+IT+8+rue+Jules+Ferry+18000+Bourges+France",
  },
  contactMapHref: "/contact#carte",
  experienceYears: 15,
  social: {
    linkedin: "https://www.linkedin.com/company/proxiit/",
  },
} as const;

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://www.proxi-it.fr";
}

export const interventionZones = {
  titlePrefix: "Intervention sur site dans ",
  description:
    "Basés 8 rue Jules Ferry à Bourges, nous intervenons sur site dans le Cher et les départements limitrophes du Centre-Val de Loire. Support humain local avec réponse en moins de 4 h pour l'infogérance, le dépannage et l'intégration Odoo.",
  destination: "Proxi IT, 8 rue Jules Ferry, 18000 Bourges, France",
  hub: {
    name: "Bourges",
    detail: "Siège · intervention prioritaire",
    origin: "Bourges, Cher, France",
    /** Point de départ explicite — évite que Google utilise la position GPS quand origine ≈ destination */
    directionsOrigin: "Gare de Bourges, 18000 Bourges, France",
  },
  cities: [
    { name: "Vierzon", origin: "Vierzon, Cher, France" },
    { name: "Saint-Doulchard", origin: "Saint-Doulchard, Cher, France" },
    { name: "Saint-Amand-Montrond", origin: "Saint-Amand-Montrond, Cher, France" },
    { name: "Mehun-sur-Yèvre", origin: "Mehun-sur-Yèvre, Cher, France" },
    { name: "La Chapelle-Saint-Ursin", origin: "La Chapelle-Saint-Ursin, Cher, France" },
    { name: "Saint-Florent-sur-Cher", origin: "Saint-Florent-sur-Cher, Cher, France" },
  ],
  /** Départements couverts — article inclus pour un français correct dans le titre animé */
  coveredDepartments: [
    "le Cher (18)",
    "le Loir-et-Cher (41)",
    "l'Indre (36)",
    "le Loiret (45)",
    "la Nièvre (58)",
    "l'Allier (03)",
    "la Creuse (23)",
  ],
  mapEmbedQuery: "Proxi+IT+8+rue+Jules+Ferry+Bourges",
} as const;

export function getDrivingDirectionsUrl(origin: string): string {
  const destination = `${site.geo.latitude},${site.geo.longitude}`;
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "driving",
  });

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export type GoogleReview = {
  id: string;
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

/** Fallback statique — remplacé par l’API Places si GOOGLE_PLACES_API_KEY est configurée. */
export const googleReviewsFallback: GoogleReview[] = [
  {
    id: "fallback-1",
    author: "Thomas M.",
    rating: 5,
    text: "Réactivité au top : panne un vendredi soir, intervention le lundi matin sans stress. On sent une vraie équipe locale.",
    relativeTime: "il y a 2 mois",
  },
  {
    id: "fallback-2",
    author: "Sophie L.",
    rating: 5,
    text: "Enfin un interlocuteur unique à Bourges, pas un numéro vert. Explications claires et tarif au poste transparent.",
    relativeTime: "il y a 3 mois",
  },
  {
    id: "fallback-3",
    author: "Cabinet Comptable B.",
    rating: 5,
    text: "Infogérance sérieuse pour notre TPE : sauvegardes, mises à jour et support humain. On recommande sans hésiter.",
    relativeTime: "il y a 5 mois",
  },
  {
    id: "fallback-4",
    author: "Marc D.",
    rating: 5,
    text: "Supervision efficace et interventions sur site quand il le faut. Proxi IT connaît bien les contraintes des PME du Cher.",
    relativeTime: "il y a 6 mois",
  },
];

export const logos = {
  longLight: "/logo-long-light.svg",
  longDark: "/logo-long-dark.svg",
  mid: "/logo-mid.svg",
  default: "/logo.svg",
  only: "/logo-only.svg",
  odoo: "/odoo-logo.svg",
  odooLearningPartner: "/odoo-learning-partner.png",
} as const;

export const nav = {
  services: [
    { label: "Supervision 24/7", href: "/services-manages-bourges" },
    { label: "Infogérance", href: "/infogerance-informatique-bourges" },
    { label: "Cybersécurité", href: "/cybersecurite-pme-bourges" },
    { label: "Sauvegardes", href: "/sauvegarde-entreprise-bourges" },
  ],
  main: [
    { label: "Services IT", href: "/infogerance-informatique-bourges" },
    { label: "Odoo", href: "/integrateur-odoo-bourges" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Plan du site", href: "/sitemap.xml" },
  { label: "llms.txt", href: "/llms.txt" },
] as const;

export const proofStats = [
  { label: "Expérience", value: `${site.experienceYears} ans` },
  { label: "Supervision", value: "24/7" },
  { label: "Clients actifs", value: "50+" },
  { label: "Postes supervisés", value: "300+" },
] as const;

export const odooProofStats = [
  { value: "15M+", label: "utilisateurs" },
  { value: "50K+", label: "clients en France" },
  { value: "Suite", label: "modulaire complète" },
] as const;

export const statsBandBadges = [
  { label: "Réponse < 4h" },
  { label: "Intervention sur site" },
  { label: "Interlocuteur unique" },
] as const;

// Messages dynamiques selon le moment (timezone Europe/Paris)
export const statsBandMessages = {
  morningWeekday: {
    figure: "0",
    headline: "appel en urgence ce matin.",
    aside: "On a eu le temps de faire le café.",
  },
  lunchWeekday: {
    figure: "0",
    headline: "ticket urgent avant le déjeuner.",
    aside: "L'équipe mange tranquille.",
  },
  afternoonWeekday: {
    figure: "0",
    headline: "incident critique cet après-midi.",
    aside: "Les serveurs tournent, l'équipe aussi.",
  },
  eveningWeekday: {
    figure: "0",
    headline: "alerte ce soir.",
    aside: "Vos systèmes sont surveillés, bonne soirée.",
  },
  weekend: {
    figure: "0",
    headline: "panne ce week-end.",
    aside: "Même le dimanche, on veille.",
  },
  mondayMorning: {
    figure: "0",
    headline: "urgence du week-end.",
    aside: "Lundi, tout roule déjà.",
  },
} as const;

export type StatsBandMessage = (typeof statsBandMessages)[keyof typeof statsBandMessages];

export const trustPillars = [
  {
    title: "Interlocuteur unique",
    description: "Un contact dédié, pas de centre d'appels. Vous parlez à l'équipe basée à Bourges.",
  },
  {
    title: "Tarif transparent",
    description: "Modèle au poste, fixe et prévisible. Vous adaptez votre contrat à la taille de votre parc, sans surprise.",
  },
  {
    title: "Intervention locale",
    description: "Basés 8 rue Jules Ferry, nous intervenons sur site dans le Cher et le Centre-Val de Loire.",
  },
  {
    title: "15 ans d'expérience",
    description: "Une équipe qui connaît les entreprises locales, leurs contraintes et leurs urgences.",
  },
] as const;

export const heroCodeBackdrop = {
  left: [
    "$ proxi-it --monitor",
    "ping gateway... ok",
    "agents online: 47",
    "tickets open: 0",
    "backup job... done",
    "patch tuesday: applied",
    "disk usage: 62%",
    "antivirus: updated",
    "helpdesk: online",
    "sla response: 4h",
    "network: stable",
    "firewall: active",
  ],
  midLeft: [
    "tail -f /var/log/syslog",
    "auth: session ok",
    "vpn tunnel: up",
    "dhcp lease renewed",
    "switch core-01: ok",
    "wifi proxi-it: 42 clients",
    "ups battery: 98%",
    "temp server: 41°C",
    "raid array: healthy",
  ],
  center: [
    "docker ps --status",
    "container backup: running",
    "cron nightly: scheduled",
    "ssl cert: valid 94d",
    "dns resolve: ok",
    "smtp relay: active",
    "ldap sync: complete",
    "snapshot vm-02: done",
  ],
  midRight: [
    "scan malware... clean",
    "policy update: applied",
    "mfa enforced: 100%",
    "encrypt volume: ok",
    "restore test: passed",
    "audit log: exported",
    "patch kb503: installed",
    "alert queue: empty",
  ],
  right: [
    "GET /health",
    "200 OK",
    "POST /ticket",
    "201 Created",
    "GET /backup/status",
    "200 OK",
    "region: cher-18",
    "site: bourges",
    "monitoring: 24/7",
    "support: humain",
    "trust=local",
    "odoo=partner",
  ],
} as const;

export const homeFaq = [
  {
    question: "Comment fonctionne le modèle de tarification ?",
    answer:
      "Tarif au poste, fixe et prévisible. Vous choisissez votre niveau de service et payez par poste informatique. Aucune surprise, vous adaptez votre contrat selon l'évolution de votre parc.",
  },
  {
    question: "Quel est le délai d'intervention en cas de problème ?",
    answer:
      "Support humain avec réponse garantie en moins de 4 h. Selon la criticité et votre contrat, nous intervenons à distance ou sur site dans le Cher. Aucun centre d'appels, vous parlez directement à l'équipe technique.",
  },
  {
    question: "Pourquoi choisir Proxi IT plutôt qu'un grand prestataire ?",
    answer:
      "Interlocuteur unique basé à Bourges, intervention locale et décisions rapides. Vous évitez les tickets perdus dans un centre d'appels national et bénéficiez d'une équipe qui connaît les contraintes des entreprises du Cher.",
  },
  {
    question: "Gérez-vous aussi l'ERP Odoo ?",
    answer:
      "Oui, nous sommes partenaire Odoo Learning Partner. Votre IT et votre ERP peuvent être suivis par le même interlocuteur, avec une vision globale de vos systèmes et une meilleure cohérence technique.",
  },
] as const;

export const contactTopicOptions = [
  { value: "infogerance", label: "Infogérance / services managés" },
  { value: "odoo", label: "Intégration Odoo" },
  { value: "other", label: "Autre" },
] as const;

export function getContactTopicLabel(value: string): string {
  return contactTopicOptions.find((option) => option.value === value)?.label ?? value;
}

export const contactTopicLabels = contactTopicOptions.map((option) => option.label);

export const attributionOptions = [
  "Recherche Google",
  "ChatGPT / Perplexity / IA",
  "Recommandation",
  "LinkedIn",
  "Autre",
] as const;

export type FaqItem = { question: string; answer: string };
