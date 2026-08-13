export const site = {
  name: "Proxi IT",
  legalName: "PROXI IT",
  tagline: "Votre informatique, on s'en occupe.",
  description:
    "Infogérance et services managés pour TPE/PME à Bourges et dans le Cher. Supervision 24/7, maintenance proactive, support humain. Intégrateur Odoo certifié.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.proxi-it.fr",
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
} as const;

export const logos = {
  longLight: "/logo-long-light.svg",
  longDark: "/logo-long-dark.svg",
  mid: "/logo-mid.svg",
  default: "/logo.svg",
  odoo: "/odoo-logo.svg",
} as const;

export const nav = {
  services: [
    { label: "Supervision 24/7", href: "/services-manages-bourges" },
    { label: "Infogérance", href: "/infogerance-informatique-bourges" },
    { label: "Cybersécurité PME", href: "/cybersecurite-pme-bourges" },
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
] as const;

export const proofStats = [
  { label: "Expérience", value: `${site.experienceYears} ans` },
  { label: "Supervision", value: "24/7" },
  { label: "Clients actifs", value: "50+" },
  { label: "Postes supervisés", value: "300+" },
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
    title: "Intervention locale",
    description: "Basés 8 rue Jules Ferry, nous intervenons sur site dans le Cher et le Centre-Val de Loire.",
  },
  {
    title: "Odoo certifié",
    description: "Partenaire Odoo Learning Partner : IT et ERP gérés par le même prestataire.",
  },
  {
    title: "15 ans d'expérience",
    description: "Une équipe qui connaît les TPE et PME locales, leurs contraintes et leurs urgences.",
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
    question: "Combien coûte l'infogérance à Bourges ?",
    answer:
      "Le tarif dépend du nombre de postes et du niveau de service. Proxi IT propose un modèle au poste, fixe et prévisible. Demandez un devis personnalisé.",
  },
  {
    question: "Intervenez-vous hors de Bourges ?",
    answer:
      "Oui. Proxi IT couvre Bourges et l'ensemble du Cher, avec intervention sur site selon vos besoins.",
  },
  {
    question: "Proxi IT ou un grand prestataire national ?",
    answer:
      "Proxi IT combine proximité locale, interlocuteur unique et réactivité. Vous parlez à une équipe basée 8 rue Jules Ferry, pas à un centre d'appels.",
  },
  {
    question: "Proposez-vous aussi Odoo ?",
    answer:
      "Oui. Proxi IT est partenaire Odoo Learning Partner à Bourges. IT et ERP peuvent être gérés par le même interlocuteur.",
  },
] as const;

export const attributionOptions = [
  "Recherche Google",
  "ChatGPT / Perplexity / IA",
  "Recommandation",
  "LinkedIn",
  "Autre",
] as const;

export type FaqItem = { question: string; answer: string };
