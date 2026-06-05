import { experience } from "@/lib/data";
import { Icon } from "./Icon";

export function Experience() {
  const item = experience[0];

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-surface-container-lowest" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

      <div className="relative mx-auto max-w-[var(--spacing-container-max)]">
        {/* Section header */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <div className="gs-up mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase sm:px-4 sm:py-1.5 sm:text-[length:var(--text-label-mono)]">
            {/* <Icon name="briefcase" className="text-xs sm:text-sm" /> */}
            Work Experience
          </div>
          <h2 className="gs-fade text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[length:var(--text-headline-lg)]">
            Professional <span className="gradient-text">Background</span>
          </h2>
        </div>

        {/* Single role — featured card layout */}
        <div className="mx-auto max-w-4xl">
          <div className="glass-card glass-card-shine rounded-3xl p-6 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">

              {/* Left — role info */}
              <div>
                {/* Role title + period */}
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-[22px] font-extrabold tracking-tight text-on-surface sm:text-[28px] lg:text-[32px]">
                    {item.title}
                  </h3>
                  {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 font-mono text-[11px] tracking-wide text-primary sm:text-[length:var(--text-label-mono)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-dot-pulse" />
                    {item.period}
                  </span> */}
                </div>

                {/* Divider */}
                <div className="mb-6 h-px w-full bg-gradient-to-r from-on-surface/15 via-on-surface/6 to-transparent" />

                {/* Description */}
                <p className="mb-8 text-[15px] leading-relaxed text-on-surface-variant sm:text-base sm:leading-loose">
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-wide text-primary sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right — big stat */}
              <div className="flex flex-row gap-4 lg:flex-col lg:items-end lg:gap-6">
                {/* Years stat */}
                <div className="soft-panel flex flex-1 flex-col items-center justify-center rounded-2xl p-5 text-center lg:w-36 lg:flex-none lg:p-6">
                  <span className="mb-0.5 text-[36px] font-extrabold leading-none tracking-tight text-on-surface lg:text-[44px]">
                    2.5<span className="text-[24px] lg:text-[28px]">+</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase sm:text-[11px]">
                    Years
                  </span>
                </div>

                {/* Status badge */}
                <div className="soft-panel flex flex-1 flex-col items-center justify-center rounded-2xl p-5 text-center lg:w-36 lg:flex-none lg:p-6">
                  <div className="mb-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                    <Icon name="verified" className="text-base text-primary" filled />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase sm:text-[11px]">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
