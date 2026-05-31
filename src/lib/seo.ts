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

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
