import { skills, backendSkills } from "@/lib/data";
import { Icon } from "./Icon";

type Skill = { icon: string; label: string };

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="group flex flex-shrink-0 items-center gap-3 rounded-2xl border border-primary/20 bg-surface-container px-5 py-3.5 transition-all duration-300 hover:border-primary/55 hover:bg-surface-container-high hover:shadow-[0_0_18px_rgba(0,180,216,0.18)]">
      <Icon
        name={skill.icon}
        className="text-xl text-primary/70 transition-colors duration-300 group-hover:text-primary sm:text-2xl"
      />
      <span className="whitespace-nowrap font-mono text-[12px] tracking-wide text-on-surface-variant transition-colors duration-300 group-hover:text-primary sm:text-[13px]">
        {skill.label}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  label,
}: {
  items: readonly Skill[];
  direction?: "left" | "right";
  label: string;
}) {
  // Duplicate enough times so the strip never looks empty at any screen width
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="space-y-2">
      {/* Row label */}
      <div className="flex items-center gap-3 px-1">
        <span className="font-mono text-[10px] tracking-[0.2em] text-primary/60 uppercase sm:text-[11px]">
          {label}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/25 to-transparent" />
      </div>

      {/* Scrolling strip */}
      <div className="marquee-track marquee-fade overflow-hidden">
        <div
          className={`flex gap-3 ${
            direction === "left"
              ? "animate-marquee-left"
              : "animate-marquee-right"
          }`}
          style={{ width: "max-content" }}
        >
          {repeated.map((skill, i) => (
            <SkillPill key={`${skill.label}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-surface-container-lowest py-16 sm:py-20 md:py-24 lg:py-[var(--spacing-section-gap)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-[var(--spacing-container-max)] px-4 sm:px-6 md:px-10 lg:px-[var(--spacing-margin-desktop)]">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <div className="gs-up mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase sm:px-4 sm:py-1.5 sm:text-[length:var(--text-label-mono)]">
            <Icon name="code" className="text-xs sm:text-sm" />
            Tech Stack
          </div>
          <h2 className="gs-fade mb-3 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[length:var(--text-headline-lg)]">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="gs-up mx-auto max-w-md text-[14px] leading-relaxed text-on-surface-variant sm:max-w-xl sm:text-[length:var(--text-body-lg)]">
            Leveraging modern frameworks and high-performance technologies to build the future of the web.
          </p>
        </div>
      </div>

      {/* Marquee rows — full width, no side padding so they bleed edge-to-edge */}
      <div className="space-y-6 px-4 sm:px-6 md:px-10 lg:px-[var(--spacing-margin-desktop)]">
        <MarqueeRow items={skills}        direction="left"  label="Frontend" />
        <MarqueeRow items={backendSkills} direction="right" label="Backend"  />
      </div>
    </section>
  );
}
