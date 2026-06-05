export function AnimatedBackground() {
  // Particles: top%, left%, size, opacity, duration, delay
  const particles = [
    { top: "8%",  left: "12%", size: "3px", opacity: 0.5, duration: "18s", delay: "0s"  },
    { top: "15%", left: "75%", size: "2px", opacity: 0.4, duration: "22s", delay: "3s"  },
    { top: "28%", left: "90%", size: "4px", opacity: 0.35,duration: "16s", delay: "1s"  },
    { top: "42%", left: "5%",  size: "2px", opacity: 0.45,duration: "24s", delay: "5s"  },
    { top: "55%", left: "60%", size: "3px", opacity: 0.3, duration: "20s", delay: "2s"  },
    { top: "68%", left: "30%", size: "2px", opacity: 0.5, duration: "17s", delay: "7s"  },
    { top: "80%", left: "82%", size: "3px", opacity: 0.4, duration: "25s", delay: "4s"  },
    { top: "92%", left: "18%", size: "2px", opacity: 0.35,duration: "19s", delay: "6s"  },
    { top: "35%", left: "48%", size: "2px", opacity: 0.3, duration: "21s", delay: "9s"  },
    { top: "72%", left: "55%", size: "4px", opacity: 0.25,duration: "28s", delay: "11s" },
    { top: "5%",  left: "40%", size: "2px", opacity: 0.4, duration: "15s", delay: "8s"  },
    { top: "48%", left: "22%", size: "3px", opacity: 0.35,duration: "23s", delay: "12s" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Dot pattern */}
      <div className="bg-grid absolute inset-0 opacity-[0.75]" />

      {/* Deep background gradient — light */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-transparent to-blue-100/40 dark:opacity-0" />

      {/* Deep background gradient — dark navy */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(0,77,153,0.25)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(0,119,182,0.2)_0%,transparent_60%)]" />

      {/* Floating neon blobs */}
      <div className="absolute -top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px] animate-float-a" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/7 blur-[110px] animate-float-b" />
      <div className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-tertiary/5 blur-[90px] animate-float-c" />
      <div className="absolute bottom-1/3 right-1/4 h-[280px] w-[280px] rounded-full bg-primary/6 blur-[80px] animate-pulse-glow" />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            "--size": p.size,
            "--opacity": p.opacity,
            "--duration": p.duration,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
