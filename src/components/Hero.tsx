"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

const NAME = "DHRUVI KHATRANI";
const TYPED_PHRASES = [
  "UI/UX Enthusiast & Full Stack Developer",
  "React & Next.js Expert",
  "Node.js Engineer",
  "Building Scalable Web Experiences",
];

function TypingText() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const phrase = TYPED_PHRASES[phraseIdx];
    const speed = isDeleting ? 38 : 75;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        const next = phrase.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === phrase) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        const next = displayed.slice(0, -1);
        setDisplayed(next);
        if (next === "") {
          setIsDeleting(false);
          setPhraseIdx((p) => (p + 1) % TYPED_PHRASES.length);
        }
      }
    }, speed);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, phraseIdx]);

  return <span className="typing-cursor">{displayed}</span>;
}

const FEATURE_CARDS = [
  {
    icon: "palette",
    title: "Design-first UI",
    text: "Pixel-perfect interfaces built for every screen.",
  },
  {
    icon: "bolt",
    title: "Fast APIs",
    text: "Scalable backends, real-time flows, automation.",
  },
  {
    icon: "rocket_launch",
    title: "Launch-ready",
    text: "Performance, SEO & maintainability from day one.",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 md:px-10 lg:px-[var(--spacing-margin-desktop)]"
    >
      {/* Neon orbital rings — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center" aria-hidden>
        <div className="relative h-[520px] w-[520px]">
          <div className="absolute inset-0 rounded-full border border-primary/15 animate-ring-pulse" />
          <div className="absolute inset-10 rounded-full border border-secondary/10 animate-ring-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-20 rounded-full border border-primary/8 animate-ring-pulse" style={{ animationDelay: "0.8s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ animation: "orbitSpin 8s linear infinite" }} className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,180,216,0.9)]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ animation: "orbitSpin 13s linear infinite reverse" }} className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(72,202,228,0.8)]" />
          </div>
        </div>
      </div>

      {/* Accent dots */}
      <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-primary animate-dot-pulse hidden sm:block shadow-[0_0_8px_rgba(0,180,216,0.8)]" />
      <div className="absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-secondary animate-dot-pulse hidden sm:block" style={{ animationDelay: "0.7s" }} />
      <div className="absolute top-2/3 right-1/3 h-1 w-1 rounded-full bg-primary/70 animate-dot-pulse hidden sm:block" style={{ animationDelay: "1.4s" }} />

      <div className="relative z-10 w-full max-w-4xl text-center">

        {/* Badge */}
        <div id="hero-badge" className="eyebrow mt-6 mb-7 animate-neon-border">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-dot-pulse shadow-[0_0_6px_rgba(0,180,216,0.9)]" />
          Full-Stack Engineer · Available for Work
        </div>

        {/* ── Name — Bricolage Grotesque SemiBold, uppercase ── */}
        <h1
          className="mb-5 flex flex-wrap justify-center text-[38px] font-semibold uppercase leading-[1.08]  sm:text-[54px] md:text-[66px] lg-text-[70px]"
          //  lg:text-[length:var(--text-display-lg)]"
          style={{ fontFamily: "var(--font-display)" }}
          aria-label={NAME}
        >
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block"
              style={{ animationDelay: `${0.08 + i * 0.032}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* ── Typing subtitle — Jost SemiBold 600 ── */}
        <h2
          id="hero-title"
          className="mb-5 text-[18px] font-semibold leading-tight tracking-wide text-primary sm:text-[24px] md:text-[28px]"
          style={{ fontWeight: 600, minHeight: "1.5em" }}
        >
          <TypingText />
        </h2>

        {/* ── Sub paragraph — Jost Light 300 ── */}
        <p
          id="hero-sub"
          className="mx-auto mb-10 max-w-xl text-[15px] leading-relaxed text-on-surface-variant sm:max-w-2xl sm:text-[17px]"
          style={{ fontWeight: 300 }}
        >
          I create clean and modern digital experiences with a focus on
          performance, usability, and scalable solutions.
        </p>

        {/* ── Feature cards — wide landscape rectangles (lamb choras) ── */}
        <div className="mb-10 grid gap-3 sm:mx-auto sm:max-w-3xl sm:grid-cols-3">
          {FEATURE_CARDS.map((item) => (
            <article
              key={item.title}
              className="glass-card flex flex-col items-start gap-2 rounded-2xl px-5 py-4 text-left"
            >
              {/* Icon */}
              <Icon name={item.icon} className="text-xl text-primary" />
              {/* Title — Jost SemiBold 600 */}
              <h3
                className="text-sm text-on-surface sm:text-[15px]"
                style={{ fontWeight: 600 }}
              >
                {item.title}
              </h3>
              {/* Body — Jost Light 300, capped 2 lines */}
              <p
                className="line-clamp-2 text-[12px] leading-snug text-on-surface-variant sm:text-[13px]"
                style={{ fontWeight: 300 }}
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>

        {/* ── CTAs — Jost SemiBold 600 ── */}
        <div id="hero-ctas" className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="magnetic-btn glow-button group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3.5 text-[15px] text-on-primary shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            style={{ fontWeight: 600 }}
          >
            <Icon name="work" className="text-base sm:text-lg" />
            View Projects
            <span className="btn-shine" />
          </a>
          <a
            href="#contact"
            className="magnetic-btn flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/40 bg-primary/8 px-6 py-3.5 text-[15px] text-primary backdrop-blur-sm transition-all hover:bg-primary/16 hover:border-primary/70 hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            style={{ fontWeight: 600 }}
          >
            <Icon name="mail" className="text-base sm:text-lg" />
            Contact Me
          </a>
        </div>

        {/* Tech pills */}
        <div id="hero-stack" className="mt-8 flex flex-wrap justify-center gap-1.5 sm:mt-10 sm:gap-2">
          {["React.js", "Next.js", "Node.js", "TypeScript", "Socket.IO", "GSAP"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/25 bg-primary/8 px-2.5 py-0.5 font-mono text-[10px] text-primary transition-all hover:border-primary/60 hover:bg-primary/16 hover:shadow-[0_0_10px_rgba(0,180,216,0.2)] sm:px-3 sm:py-1 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div id="hero-scroll" className="absolute bottom-2 flex flex-col items-center gap-1.5 sm:bottom-10 sm:gap-2">
        <span className="font-mono text-[10px] tracking-widest text-primary/70 uppercase sm:text-xs"></span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-primary/35 p-1 sm:h-10 sm:w-6 sm:p-1.5">
          <div className="h-1.5 w-0.5 rounded-full bg-primary animate-scroll-bounce shadow-[0_0_6px_rgba(0,180,216,0.8)] sm:h-2 sm:w-1" />
        </div>
      </div>
    </section>
  );
}
