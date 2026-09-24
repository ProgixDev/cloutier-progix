/**
 * Central site config — the single source for metadata, robots, sitemap, and
 * manifest. Replace name/description and set NEXT_PUBLIC_SITE_URL per app (it
 * drives canonical + Open Graph URLs).
 */
export const site = {
  name: "Progix · Harmonia",
  shortName: "Harmonia",
  description:
    "Devis contractuel Progix : conception, développement et publication de la première version d’Harmonia, application d’accompagnement relationnel et de communication personnelle — mieux se comprendre, mieux s’exprimer, mieux interagir. Conversation avec l’IA en texte ou à la voix, règles fondamentales versionnées et protégées, sécurité de l’utilisateur (SOS, personne de confiance, plan de sécurité), espace personnel, accessibilité, hébergement au Canada, application iOS et Android. Livraison en 2 mois.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_CA",
} as const;
