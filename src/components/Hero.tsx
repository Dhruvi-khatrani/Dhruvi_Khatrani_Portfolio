import { Icon } from "./Icon";

const NAME = "Dhruvi Khatrani";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 md:px-10 lg:px-[var(--spacing-margin-desktop)]"
    >
      {/* Blobs */}
      <div className="blob absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 animate-float-a sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]" />
      <div className="blob absolute -right-16 bottom-1/4 h-56 w-56 rounded-full bg-secondary/8 animate-float-b sm:h-72 sm:w-72 md:h-[360px] md:w-[360px]" />
      <div className="blob absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tertiary/8 animate-pulse-glow md:h-64 md:w-64" />

      {/* Orbital rings — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center" aria-hidden>
        <div className="relative h-[480px] w-[480px]">
          <div className="absolute inset-0 rounded-full border border-primary/8 animate-ring-pulse" />
          <div className="absolute inset-8 rounded-full border border-secondary/6 animate-ring-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ animation: "orbitSpin 8s linear infinite" }} className="h-2.5 w-2.5 rounded-full bg-primary/60 shadow-[0_0_10px_rgba(85,22,190,0.6)]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ animation: "orbitSpin 13s linear infinite reverse" }} className="h-2 w-2 rounded-full bg-secondary/70 shadow-[0_0_8px_rgba(5,102,217,0.6)]" />
          </div>
        </div>
      </div>

      {/* Accent dots */}
      <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-primary animate-dot-pulse hidden sm:block" />
      <div className="absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-secondary animate-dot-pulse hidden sm:block" style={{ animationDelay: "0.7s" }} />
      <div className="absolute top-2/3 right-1/3 h-1 w-1 rounded-full bg-tertiary animate-dot-pulse hidden sm:block" style={{ animationDelay: "1.4s" }} />

      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Badge */}
        <div
          id="hero-badge"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] text-primary uppercase sm:px-5 sm:py-2 sm:text-[length:var(--text-label-mono)] sm:tracking-[0.2em]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-dot-pulse" />
          Full-Stack Engineer · Available for Work
        </div>

        {/* Name */}
        <h1
          className="mb-4 flex flex-wrap justify-center gap-x-[0.02em] text-[36px] leading-[1.15] font-extrabold tracking-[-0.02em] sm:text-[52px] md:text-[64px] lg:text-[length:var(--text-display-lg)]"
          aria-label={NAME}
        >
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block"
              style={{ animationDelay: `${0.08 + i * 0.038}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Title */}
        <h2
          id="hero-title"
          className="gradient-text-animated mb-5 text-[22px] font-bold leading-tight tracking-[-0.01em] sm:text-[28px] md:text-[36px] lg:text-[length:var(--text-headline-lg)]"
        >
          Full-Stack Developer
        </h2>

        {/* Subtext */}
        <p
          id="hero-sub"
          className="mx-auto mb-8 max-w-xl text-[15px] leading-relaxed text-on-surface-variant sm:mb-10 sm:max-w-2xl sm:text-[length:var(--text-body-lg)] sm:leading-[var(--text-body-lg--line-height)]"
        >
          I craft modern, scalable, high-performance web applications with
          beautiful UI/UX and powerful backend systems — from concept to deployment.
        </p>

        {/* CTAs */}
        <div
          id="hero-ctas"
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#projects"
            className="magnetic-btn glow-button group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-base font-bold text-on-primary shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            <Icon name="work" className="text-lg sm:text-xl" />
            View Projects
            <span className="btn-shine" />
          </a>
          <a
            href="#contact"
            className="magnetic-btn flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/35 bg-primary/6 px-6 py-3.5 text-base font-bold text-primary backdrop-blur-sm transition-all hover:bg-primary/14 hover:border-primary hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            <Icon name="mail" className="text-lg sm:text-xl" />
            Contact Me
          </a>
        </div>

        {/* Tech pills */}
        <div
          id="hero-stack"
          className="mt-8 flex flex-wrap justify-center gap-1.5 sm:mt-10 sm:gap-2"
        >
          {["React.js", "Next.js", "Node.js", "TypeScript", "Socket.IO", "n8n"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-outline-variant/30 bg-surface-container-low px-2.5 py-0.5 font-mono text-[10px] text-on-surface-variant transition-all hover:border-primary/40 hover:text-primary sm:px-3 sm:py-1 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div id="hero-scroll" className="absolute bottom-6 flex flex-col items-center gap-1.5 sm:bottom-10 sm:gap-2">
        <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase sm:text-xs">Scroll</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-outline-variant/40 p-1 sm:h-10 sm:w-6 sm:p-1.5">
          <div className="h-1.5 w-0.5 rounded-full bg-primary animate-scroll-bounce sm:h-2 sm:w-1" />
        </div>
      </div>
    </section>
  );
}
