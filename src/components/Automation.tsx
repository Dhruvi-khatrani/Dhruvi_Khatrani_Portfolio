import { automationItems } from "@/lib/data";
import { Icon } from "./Icon";

export function Automation() {
  return (
    <section id="automation" className="mx-auto max-w-[var(--spacing-container-max)] overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]">
      <div className="mb-10 text-center sm:mb-12 lg:mb-16">
        <h2 className="gs-fade mb-3 text-[26px] font-bold leading-tight tracking-tight sm:mb-4 sm:text-[32px] lg:text-[length:var(--text-headline-lg)]">
          Automation &amp; Orchestration
        </h2>
        <p className="gs-up mx-auto max-w-lg text-[14px] leading-relaxed text-on-surface-variant sm:max-w-2xl sm:text-base">
          Beyond development: Automating business processes using n8n and custom API pipelines to maximize efficiency.
        </p>
      </div>

      <div className="relative flex justify-center">
        <div className="gs-stagger grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {automationItems.map((item) => (
            <div
              key={item.label}
              className={`auto-card glass-card glass-card-shine rounded-2xl border-dashed p-4 text-center transition-transform hover:scale-105 sm:p-6 ${item.color.split(" ")[1]}`}
            >
              <Icon name={item.icon} className={`mb-1.5 text-2xl sm:mb-2 sm:text-3xl ${item.color.split(" ")[0]}`} />
              <div className="text-sm font-bold sm:text-base">{item.label}</div>
            </div>
          ))}
        </div>
        <svg className="absolute inset-0 -z-10 h-full w-full opacity-20" viewBox="0 0 800 200" aria-hidden>
          <path d="M100,100 Q400,0 700,100" fill="none" stroke="#5516be" strokeDasharray="5,5" strokeWidth="2" />
          <path d="M100,100 Q400,200 700,100" fill="none" stroke="#0566d9" strokeDasharray="5,5" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
}
