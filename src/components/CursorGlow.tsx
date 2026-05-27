"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on real mouse devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ring = ringRef.current!;
    const dot  = dotRef.current!;

    let mouseX = window.innerWidth  / 2;
    let mouseY = window.innerHeight / 2;
    let ringX  = mouseX;
    let ringY  = mouseY;
    let rafId  = 0;
    let shown  = false;

    // ── rAF loop: lerp ring toward mouse ──────────────────────────────────
    function loop() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top  = ringY + "px";
      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    // ── Mouse move: snap dot, update mouse target ─────────────────────────
    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Snap dot directly
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";

      // Show on first move
      if (!shown) {
        shown = true;
        ring.style.opacity = "1";
        dot.style.opacity  = "1";
      }

      // Hover: enlarge ring, shrink dot
      const target = e.target as HTMLElement;
      const hover  = !!target.closest("a,button,[role='button'],input,textarea,select,label");
      ring.style.width  = hover ? "60px" : "40px";
      ring.style.height = hover ? "60px" : "40px";
      dot.style.width   = hover ? "5px"  : "8px";
      dot.style.height  = hover ? "5px"  : "8px";
    }

    // ── Click feedback ────────────────────────────────────────────────────
    function onDown() {
      ring.style.transform = "translate(-50%,-50%) scale(0.75)";
      dot.style.transform  = "translate(-50%,-50%) scale(1.5)";
    }
    function onUp() {
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      dot.style.transform  = "translate(-50%,-50%) scale(1)";
    }

    // ── Hide when leaving window ──────────────────────────────────────────
    function onLeave() { ring.style.opacity = dot.style.opacity = "0"; }
    function onEnter() { if (shown) { ring.style.opacity = dot.style.opacity = "1"; } }

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* ── Outer ring — trails behind via lerp ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:        "fixed",
          width:           "40px",
          height:          "40px",
          borderRadius:    "50%",
          border:          "1.5px solid rgba(85, 22, 190, 0.75)",
          backgroundColor: "transparent",
          pointerEvents:   "none",
          zIndex:          2147483647,
          opacity:         0,
          transform:       "translate(-50%, -50%)",
          transition:
            "width 0.3s cubic-bezier(0.34,1.56,0.64,1)," +
            "height 0.3s cubic-bezier(0.34,1.56,0.64,1)," +
            "opacity 0.3s ease," +
            "transform 0.2s ease",
          willChange: "left, top, width, height",
        }}
      />

      {/* ── Inner dot — snaps instantly ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:        "fixed",
          width:           "8px",
          height:          "8px",
          borderRadius:    "50%",
          backgroundColor: "rgba(55, 10, 180, 0.95)",
          pointerEvents:   "none",
          zIndex:          2147483647,
          opacity:         0,
          transform:       "translate(-50%, -50%)",
          transition:
            "width 0.2s ease," +
            "height 0.2s ease," +
            "opacity 0.3s ease," +
            "transform 0.15s ease",
          willChange: "left, top",
        }}
      />
    </>
  );
}
