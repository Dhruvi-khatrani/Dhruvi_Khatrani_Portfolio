import { skills } from "@/lib/data";
import { Icon } from "./Icon";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-surface-container-lowest px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="relative mx-auto max-w-[var(--spacing-container-max)]">

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

        <div className="gs-stagger grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="skill-card glass-card glass-card-shine group relative flex flex-col items-center justify-center gap-2 rounded-2xl p-4 sm:gap-3 sm:p-6 lg:p-8"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:to-secondary/5 group-hover:opacity-100" />
              <Icon name={skill.icon} className="relative z-10 text-3xl text-on-surface-variant transition-all duration-300 group-hover:scale-110 group-hover:text-primary sm:text-4xl" />
              <span className="relative z-10 text-center font-mono text-[10px] tracking-wide text-on-surface-variant transition-colors group-hover:text-on-surface sm:text-[length:var(--text-label-mono)]">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
