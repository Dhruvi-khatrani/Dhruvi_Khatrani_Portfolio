import { chatFeatures } from "@/lib/data";
import { Icon } from "./Icon";

export function ChatFeature() {
  return (
    <section id="chat-demo" className="bg-surface-container px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]">
      <div className="mx-auto grid max-w-[var(--spacing-container-max)] items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">

        <div className="gs-left">
          <div className="mb-3 font-mono text-[11px] tracking-widest text-primary uppercase sm:text-[length:var(--text-label-mono)]">REAL-TIME ENGINE</div>
          <h2 className="gs-fade mb-4 text-[26px] font-bold leading-tight tracking-tight sm:mb-5 sm:text-[32px] lg:text-[length:var(--text-headline-lg)]">
            Fluid Communication Systems
          </h2>
          <p className="mb-6 text-[14px] leading-relaxed text-on-surface-variant sm:mb-7 sm:text-[length:var(--text-body-lg)] sm:leading-[var(--text-body-lg--line-height)]">
            Specialized in Socket.IO integration, I build communication layers that feel instantaneous. From typing indicators and read receipts to complex multi-room architectures, the focus is always on sub-100ms latency and high reliability.
          </p>
          <ul className="space-y-3 sm:space-y-4">
            {chatFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-[14px] sm:gap-3 sm:text-base">
                <Icon name="check_circle" className="text-primary flex-shrink-0" filled />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="gs-right glass-card glass-card-shine relative rounded-2xl p-4 shadow-2xl sm:rounded-3xl sm:p-6">
          <div className="flex h-64 flex-col gap-3 overflow-hidden rounded-xl bg-surface-container-highest p-3 sm:h-80 sm:gap-4 sm:rounded-2xl sm:p-4">
            <div className="chat-bubble flex gap-2.5 sm:gap-3">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/30 text-[10px] sm:h-8 sm:w-8 sm:text-xs">U1</div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-surface-variant p-2.5 text-[12px] sm:p-3 sm:text-sm">
                Hey, how&apos;s the Socket.io implementation?
              </div>
            </div>
            <div className="chat-bubble flex flex-row-reverse gap-2.5 sm:gap-3">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary/30 text-[10px] sm:h-8 sm:w-8 sm:text-xs">DK</div>
              <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-primary-container p-2.5 text-[12px] text-on-primary-container shadow-lg shadow-primary/20 sm:p-3 sm:text-sm">
                Lightning fast. Latency is minimal! ⚡️
              </div>
            </div>
            <div className="chat-bubble mt-auto flex gap-2.5 sm:gap-3">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/30 text-[10px] sm:h-8 sm:w-8 sm:text-xs">U1</div>
              <div className="flex items-center gap-1 rounded-full bg-surface-variant px-2.5 py-1.5 sm:px-3 sm:py-2">
                {[0, 0.2, 0.4].map((d) => (
                  <div key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-on-surface-variant" style={{ animationDelay: `${d}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
