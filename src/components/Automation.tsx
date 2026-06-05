import { automationItems } from "@/lib/data";
import { Icon } from "./Icon";

export function Automation() {
  return (
    <section
      id="automation"
      className="relative overflow-hidden bg-surface-container-lowest px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative mx-auto max-w-[var(--spacing-container-max)]">

        {/* Header */}
        <div className="mb-12 text-center lg:mb-16">
          <div className="gs-up mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase sm:px-4 sm:py-1.5">
            <Icon name="auto_awesome" className="text-xs sm:text-sm" />
            Workflow Automation
          </div>
          <h2 className="gs-fade mb-4 text-[26px] font-bold leading-tight tracking-tight sm:text-[32px] lg:text-[length:var(--text-headline-lg)]">
            Automation &amp; Orchestration
          </h2>
          <p className="gs-up mx-auto max-w-lg text-[14px] leading-relaxed text-on-surface-variant sm:max-w-xl sm:text-base">
            Beyond development — automating business processes with n8n and custom API pipelines to maximise efficiency and eliminate manual work.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="gs-stagger relative mx-auto max-w-4xl">

          {/* Connecting line behind cards — desktop */}
          <div className="pointer-events-none absolute top-1/2 left-0 right-0 hidden -translate-y-1/2 md:block" aria-hidden>
            <svg className="w-full" height="2" preserveAspectRatio="none">
              <line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#00b4d8" stopOpacity="0" />
                  <stop offset="20%"  stopColor="#00b4d8" stopOpacity="0.6" />
                  <stop offset="80%"  stopColor="#48cae4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#48cae4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {automationItems.map((item, idx) => (
              <div key={item.label} className="relative flex flex-col">
                {/* Step number */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-[11px] font-bold text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent sm:hidden" />
                </div>

                {/* Card */}
                <div
                  className={`auto-card glass-card glass-card-shine flex flex-1 flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${item.color.split(" ")[1]}`}
                >
                  {/* Icon container */}
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}>
                    <Icon
                      name={item.icon}
                      className={`text-2xl ${item.color.split(" ")[0]}`}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="mb-2 text-base font-semibold text-on-surface sm:text-[17px]">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed text-on-surface-variant sm:text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow between cards — desktop only */}
                {idx < automationItems.length - 1 && (
                  <div className="absolute -right-4 top-[calc(50%+1rem)] z-10 hidden -translate-y-1/2 sm:block lg:-right-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-surface-container-lowest">
                      <Icon name="arrow_forward" className="text-xs text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom stat bar */}
          <div className="mt-10 grid grid-cols-3 divide-x divide-primary/15 rounded-2xl border border-primary/15 bg-surface-container sm:mt-12">
            {[
              { value: "100%", label: "Process Automated" },
              { value: "<50ms", label: "Webhook Latency" },
              { value: "Zero", label: "Manual Overhead" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-5 px-3">
                <span className="mb-1 text-[20px] font-bold text-primary sm:text-[24px]">
                  {stat.value}
                </span>
                <span className="text-center font-mono text-[10px] tracking-wide text-on-surface-variant sm:text-[11px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
