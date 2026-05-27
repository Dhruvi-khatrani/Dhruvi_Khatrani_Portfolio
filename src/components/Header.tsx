"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";
import { Icon } from "./Icon";
import { useTheme } from "./ThemeProvider";

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={`theme-toggle ${className}`}
    >
      <span className="theme-toggle-thumb">
        {isDark ? (
          /* moon icon */
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          </svg>
        ) : (
          /* sun icon */
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM4.22 5.64a1 1 0 0 1 1.42-1.42l1.41 1.42a1 1 0 0 1-1.41 1.41L4.22 5.64zm12.72 12.72a1 1 0 0 1 1.41-1.41l1.42 1.41a1 1 0 0 1-1.42 1.42l-1.41-1.42zM3 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm16 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zM4.22 18.36l1.41-1.42a1 1 0 0 1 1.41 1.41L5.64 19.78a1 1 0 0 1-1.42-1.42zm12.72-12.72 1.42-1.41a1 1 0 0 1 1.41 1.42l-1.41 1.41a1 1 0 0 1-1.42-1.42z" />
          </svg>
        )}
      </span>
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="site-header"
      className="fixed top-0 right-0 left-0 z-50 h-20 border-b border-outline-variant/20 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-full w-full max-w-[var(--spacing-container-max)] items-center justify-between px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-[length:var(--text-headline-md)] font-bold tracking-tighter text-on-surface transition-opacity hover:opacity-80"
        >
          <span className="gradient-text">DK</span>
          <span className="hidden sm:inline text-on-surface-variant font-normal text-lg">
            · Dhruvi Khatrani
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-[var(--spacing-stack-lg)] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-[length:var(--text-label-mono)] tracking-[var(--text-label-mono--letter-spacing)] text-on-surface-variant transition-colors duration-300 hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle — always visible */}
          <ThemeToggle />

          <button
            type="button"
            className="hidden cursor-pointer items-center gap-1.5 rounded-lg border border-outline-variant/30 px-3 py-2 font-mono text-xs text-on-surface-variant transition-all hover:border-primary/40 hover:text-primary md:flex"
            title="Download CV"
            aria-label="Download CV"
          >
            <Icon name="download" className="text-base" />
            Resume
          </button>
          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 font-bold text-on-primary shadow-md shadow-primary/20 transition-all hover:opacity-90 active:scale-95 md:block"
          >
            Hire Me
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-outline-variant/30 text-on-surface transition-all hover:border-primary/40 hover:text-primary md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu-panel border-t border-outline-variant/20 px-[var(--spacing-margin-mobile)] py-5 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-mono text-[length:var(--text-label-mono)] tracking-[var(--text-label-mono--letter-spacing)] text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-outline-variant/30 py-3 font-mono text-xs text-on-surface-variant"
              >
                <Icon name="download" className="text-base" />
                Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary py-3 font-bold text-on-primary"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
