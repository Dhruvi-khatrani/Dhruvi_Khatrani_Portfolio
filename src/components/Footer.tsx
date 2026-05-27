import { Icon } from "./Icon";

export function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", icon: "business_center", href: "#" },
    { label: "GitHub", icon: "code", href: "#" },
    { label: "Twitter / X", icon: "alternate_email", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-outline-variant/10 bg-surface-dim px-[var(--spacing-margin-mobile)] py-16 md:px-[var(--spacing-margin-desktop)]">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-[var(--spacing-container-max)]">
        <div className="mb-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 text-2xl font-bold tracking-tighter">
              <span className="gradient-text">Dhruvi</span>{" "}
              <span className="text-on-surface">Khatrani</span>
            </div>
            <p className="mb-5 text-sm text-on-surface-variant leading-relaxed">
              Full-Stack Developer crafting high-performance web applications
              with beautiful UI/UX and powerful backend systems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="glass-card flex h-10 w-10 items-center justify-center rounded-xl text-on-surface-variant transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon name={icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-mono text-xs tracking-widest text-on-surface-variant uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-mono text-xs tracking-widest text-on-surface-variant uppercase">
              Get In Touch
            </h4>
            <a
              href="mailto:dhruvikhatraniup@gmail.com"
              className="group mb-3 flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              <Icon name="mail" className="text-base text-primary" />
              dhruvikhatraniup@gmail.com
            </a>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary/20"
            >
              <Icon name="send" className="text-sm" />
              Send a Message
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-outline-variant/10 pt-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-[length:var(--text-label-mono)] tracking-[var(--text-label-mono--letter-spacing)] text-on-surface-variant opacity-60">
            © 2026 Dhruvi Khatrani. All rights reserved.
          </p>
          <p className="font-mono text-xs text-on-surface-variant opacity-40">
            Built with Next.js · Tailwind CSS · GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
