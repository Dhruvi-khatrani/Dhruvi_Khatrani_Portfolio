export const siteConfig = {
  name: "Dhruvi Khatrani",
  shortName: "Dhruvi Khatrani",
  title: "Dhruvi Khatrani | Full-Stack Developer Portfolio",
  description:
    "Full-stack developer — React, Next.js, Node.js & TypeScript. Scalable web apps, e-commerce, real-time systems & beautiful UI/UX.",
  jobTitle: "Full-Stack Developer",
  email: "dhruvikhatraniup@gmail.com",
  locale: "en_US",
  keywords: [
    "Dhruvi Khatrani",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Socket.IO",
    "E-commerce Developer",
    "UI/UX Developer",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Socket.IO",
    "Tailwind CSS",
    "REST APIs",
    "E-commerce",
    "Real-time Web Applications",
  ],
} as const;

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, "");
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

/**
 * Site URL for canonical, Open Graph, and sitemap.
 * On Vercel, VERCEL_URL is the per-deployment hostname (e.g. *-oil1a2lct.vercel.app),
 * not your stable production domain — use NEXT_PUBLIC_SITE_URL or VERCEL_PROJECT_PRODUCTION_URL.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return normalizeSiteUrl(explicit);
  }

  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionDomain) {
    return normalizeSiteUrl(productionDomain);
  }

  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL?.trim()) {
    return normalizeSiteUrl(process.env.VERCEL_URL);
  }

  if (process.env.VERCEL_URL?.trim()) {
    return normalizeSiteUrl(process.env.VERCEL_URL);
  }

  return "http://localhost:3000";
}
