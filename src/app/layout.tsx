import type { Metadata } from "next";
import { Bricolage_Grotesque, Jost, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { getSiteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

/* ── Hero name font ─────────────────────────────────────────────────────── */
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600"],
});

/* ── Body / UI font ─────────────────────────────────────────────────────── */
const jost = Jost({
  variable: "--font-inter",   // keeps existing CSS var name so all components still work
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/* ── Mono font ──────────────────────────────────────────────────────────── */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.shortName,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className={`${bricolage.variable} ${jost.variable} ${jetbrains.variable} min-h-screen font-sans text-[length:var(--text-body-md)] leading-[var(--text-body-md--line-height)] antialiased`}
      >
        {/* CursorGlow is OUTSIDE ThemeProvider so it mounts immediately,
            not blocked by ThemeProvider's null-until-mounted gate */}
        <CursorGlow />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
