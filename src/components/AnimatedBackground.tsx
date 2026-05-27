export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Grid */}
      <div className="bg-grid absolute inset-0 opacity-[0.45]" />
      {/* Blobs */}
      <div className="absolute -top-1/4 left-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[130px] animate-float-a" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/8 blur-[110px] animate-float-b" />
      <div className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-tertiary/6 blur-[90px] animate-float-c" />
      <div className="absolute bottom-1/4 right-1/3 h-[280px] w-[280px] rounded-full bg-primary/5 blur-[80px] animate-pulse-glow" />
    </div>
  );
}
