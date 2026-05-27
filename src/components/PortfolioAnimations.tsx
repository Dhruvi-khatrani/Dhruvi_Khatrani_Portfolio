"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── 1. Lenis smooth scroll ─────────────────────────────────────────── */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    if (prefersReduced) {
      // Show everything immediately, no animations
      document.querySelectorAll<HTMLElement>(
        ".gs-fade, .gs-left, .gs-right, .gs-up, .gs-scale, [data-counter]"
      ).forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return () => { lenis.destroy(); ScrollTrigger.getAll().forEach(t => t.kill()); };
    }

    /* ── 2. Header scroll class ─────────────────────────────────────────── */
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: () => {
        const h = document.getElementById("site-header");
        if (h) h.classList.toggle("header-scrolled", window.scrollY > 60);
      },
    });

    /* ── 3. Hero entrance ───────────────────────────────────────────────── */
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
    heroTl
      .from("#hero-badge",   { y: 30, opacity: 0, duration: 0.7 })
      .from(".hero-char",    { y: 70, opacity: 0, rotateX: -50, stagger: 0.032, duration: 0.8, ease: "back.out(1.6)" }, "-=0.4")
      .from("#hero-title",   { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
      .from("#hero-sub",     { y: 25, opacity: 0, duration: 0.7 }, "-=0.5")
      .from("#hero-ctas",    { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
      .from("#hero-stack",   { y: 15, opacity: 0, duration: 0.6 }, "-=0.4")
      .from("#hero-scroll",  { y: -10, opacity: 0, duration: 0.5 }, "-=0.3");

    /* ── 4. Generic scroll reveals ──────────────────────────────────────── */
    const fadeEls = gsap.utils.toArray<HTMLElement>(".gs-fade");
    fadeEls.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
      });
    });

    gsap.utils.toArray<HTMLElement>(".gs-left").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        x: -60, opacity: 0, duration: 1, ease: "power3.out",
      });
    });

    gsap.utils.toArray<HTMLElement>(".gs-right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        x: 60, opacity: 0, duration: 1, ease: "power3.out",
      });
    });

    gsap.utils.toArray<HTMLElement>(".gs-up").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
      });
    });

    gsap.utils.toArray<HTMLElement>(".gs-scale").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        scale: 0.85, opacity: 0, duration: 0.8, ease: "back.out(1.6)",
      });
    });

    /* stagger grids */
    gsap.utils.toArray<HTMLElement>(".gs-stagger").forEach((container) => {
      const children = container.children;
      gsap.from(children, {
        scrollTrigger: { trigger: container, start: "top 82%", once: true },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out",
      });
    });

    /* ── 5. Stat counters ───────────────────────────────────────────────── */
    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
      const target = parseFloat(el.dataset.counter || "0");
      const suffix = el.dataset.suffix || "";
      const obj = { val: 0 };
      gsap.to(obj, {
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        val: target, duration: 2, ease: "power2.out",
        onUpdate() {
          el.textContent = (target % 1 !== 0 ? obj.val.toFixed(1) : Math.round(obj.val).toString()) + suffix;
        },
      });
    });

    /* ── 6. Timeline line draw ──────────────────────────────────────────── */
    gsap.from("#timeline-line", {
      scrollTrigger: { trigger: "#experience", start: "top 75%", once: true },
      scaleY: 0, transformOrigin: "top", duration: 1.6, ease: "power2.inOut",
    });

    gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        x: i % 2 === 0 ? -50 : 50, opacity: 0, duration: 0.9, ease: "power3.out",
      });
    });

    /* ── 7. Skill cards stagger ─────────────────────────────────────────── */
    gsap.from(".skill-card", {
      scrollTrigger: { trigger: "#skills", start: "top 78%", once: true },
      y: 50, opacity: 0, scale: 0.88,
      stagger: { each: 0.07, grid: "auto", from: "start" },
      duration: 0.7, ease: "back.out(1.6)",
    });

    /* ── 8. Project cards ───────────────────────────────────────────────── */
    gsap.from(".project-card", {
      scrollTrigger: { trigger: "#projects", start: "top 78%", once: true },
      y: 60, opacity: 0, scale: 0.94, stagger: 0.1, duration: 0.9, ease: "power3.out",
    });

    /* ── 9. Chat bubbles ────────────────────────────────────────────────── */
    gsap.from(".chat-bubble", {
      scrollTrigger: { trigger: "#chat-demo", start: "top 80%", once: true },
      y: 25, opacity: 0, scale: 0.88, stagger: 0.3, duration: 0.7, ease: "back.out(1.5)",
    });

    /* ── 10. Automation cards ───────────────────────────────────────────── */
    gsap.from(".auto-card", {
      scrollTrigger: { trigger: "#automation", start: "top 82%", once: true },
      y: 40, opacity: 0, rotation: -4, stagger: 0.15, duration: 0.8, ease: "back.out(1.6)",
    });

    /* ── 11. Contact section ────────────────────────────────────────────── */
    const contactTl = gsap.timeline({
      scrollTrigger: { trigger: "#contact", start: "top 80%", once: true },
    });
    contactTl
      .from(".contact-label",   { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(".contact-heading", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .from("#contact-card",    { y: 50, opacity: 0, scale: 0.97, duration: 1, ease: "power3.out" }, "-=0.3")
      .from(".contact-info",    { x: -40, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.6")
      .from(".contact-form",    { x: 40, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.9");

    /* ── 12. 3D tilt on hover ───────────────────────────────────────────── */
    const tiltHandlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
        gsap.to(card, { rotateY: x, rotateX: y, duration: 0.4, ease: "power2.out", transformPerspective: 900 });
      };
      const leave = () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      tiltHandlers.push({ el: card, move, leave });
    });

    /* ── 13. Magnetic buttons ───────────────────────────────────────────── */
    const magHandlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    document.querySelectorAll<HTMLElement>(".magnetic-btn").forEach((btn) => {
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.3, ease: "power2.out" });
      };
      const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.5)" });
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      magHandlers.push({ el: btn, move, leave });
    });

    /* ── 14. Nav hover lift ─────────────────────────────────────────────── */
    document.querySelectorAll<HTMLElement>(".nav-link").forEach((link) => {
      link.addEventListener("mouseenter", () => gsap.to(link, { y: -2, duration: 0.2, ease: "power2.out" }));
      link.addEventListener("mouseleave", () => gsap.to(link, { y: 0, duration: 0.3, ease: "power2.out" }));
    });

    /* ── Cleanup ────────────────────────────────────────────────────────── */
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      heroTl.kill();
      tiltHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
      magHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return null;
}
