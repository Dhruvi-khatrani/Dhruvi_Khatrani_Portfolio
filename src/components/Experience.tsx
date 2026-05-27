import { experience } from "@/lib/data";
import { Icon } from "./Icon";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]">
      <div className="pointer-events-none absolute inset-0 bg-surface-container-lowest" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

      <div className="relative mx-auto max-w-[var(--spacing-container-max)]">
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <div className="gs-up mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/8 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-secondary uppercase sm:px-4 sm:py-1.5 sm:text-[length:var(--text-label-mono)]">
            <Icon name="timeline" className="text-xs sm:text-sm" />
            Journey
          </div>
          <h2 className="gs-fade text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] lg:text-[length:var(--text-headline-lg)]">
            Professional <span className="gradient-text">Odyssey</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div id="timeline-line" className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-tertiary/20 md:left-1/2 md:-translate-x-px" />

          {experience.map((item, idx) => (
            <div
              key={item.title}
              className={`timeline-item relative mb-10 flex gap-6 md:mb-14 md:gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`absolute left-4 top-1 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-surface-container-low md:left-1/2 sm:h-4 sm:w-4 ${item.dotColor}`} />
              <div className={`ml-8 w-full md:ml-0 md:w-[calc(50%-2rem)] sm:ml-10 ${idx % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <div className="glass-card glass-card-shine rounded-2xl p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8 sm:p-6">
                  <div className="mb-2 flex flex-col gap-1 sm:mb-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-bold text-on-surface sm:text-xl">{item.title}</h3>
                    <span className={`font-mono text-[10px] tracking-wide sm:text-[length:var(--text-label-mono)] ${item.periodColor}`}>{item.period}</span>
                  </div>
                  <p className="mb-3 text-[13px] leading-relaxed text-on-surface-variant sm:mb-4 sm:text-base">{item.description}</p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono text-primary sm:px-3 sm:py-1 sm:text-xs">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
