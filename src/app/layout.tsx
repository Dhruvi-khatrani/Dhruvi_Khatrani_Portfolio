import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Dhruvi Khatrani | Full-Stack Engineer Portfolio",
  description:
    "Full-stack developer portfolio — modern, scalable web applications with beautiful UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen font-sans text-[length:var(--text-body-md)] leading-[var(--text-body-md--line-height)] antialiased`}
      >
        {/* CursorGlow is OUTSIDE ThemeProvider so it mounts immediately,
            not blocked by ThemeProvider's null-until-mounted gate */}
        <CursorGlow />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
