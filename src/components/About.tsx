import Image from "next/image";
import { aboutImage } from "@/lib/data";
import { Icon } from "./Icon";

const stats = [
  { counter: "2.5", suffix: "+", label: "Years Experience",   color: "text-primary" },
  { counter: "15",  suffix: "+", label: "Projects Delivered", color: "text-secondary" },
  { counter: "100", suffix: "%", label: "Client Satisfaction",color: "text-tertiary" },
  { counter: "8",   suffix: "+", label: "Technologies",       color: "text-primary" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[var(--spacing-container-max)] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">

        {/* Left */}
        <div className="gs-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-primary uppercase sm:px-4 sm:py-1.5 sm:text-[length:var(--text-label-mono)]">
            <Icon name="person" className="text-xs sm:text-sm" />
            Who I Am
          </div>
          <h2 className="gs-fade mb-5 text-[28px] font-bold leading-tight tracking-tight sm:text-[36px] md:text-[40px] lg:text-[length:var(--text-headline-lg)]">
            Bridging Code and{" "}
            <span className="gradient-text">User Experience</span>
          </h2>
          <p className="mb-4 text-[15px] leading-relaxed text-on-surface-variant sm:text-[length:var(--text-body-lg)] sm:leading-[var(--text-body-lg--line-height)]">
            With over <span className="font-bold text-primary">2.5 years of experience</span>, I specialize in engineering high-performance digital solutions. My expertise spans E-commerce ecosystems, LinkedIn-style networking platforms, sophisticated HRMS workflows, and real-time communication systems.
          </p>
          <p className="mb-8 text-[15px] leading-relaxed text-on-surface-variant sm:text-[length:var(--text-body-lg)] sm:leading-[var(--text-body-lg--line-height)]">
            I care deeply about clean architecture, pixel-perfect UI, and delivering products that users love.
          </p>

          <div id="about-stats" className="gs-stagger grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map(({ counter, suffix, label, color }) => (
              <div key={label} className="tilt-card glass-card glass-card-shine rounded-2xl p-4 sm:p-5">
                <div data-counter={counter} data-suffix={suffix} className={`counter-val mb-1 text-2xl font-extrabold sm:text-[length:var(--text-headline-md)] ${color}`}>
                  0{suffix}
                </div>
                <div className="font-mono text-[10px] text-on-surface-variant sm:text-[length:var(--text-label-mono)]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="gs-right relative mt-8 md:mt-0">
          <div className="tilt-card glass-card glass-card-shine aspect-square overflow-hidden rounded-3xl p-1.5 sm:p-2">
            <Image src={aboutImage} alt="Professional workspace" width={600} height={600} className="h-full w-full rounded-2xl object-cover" />
          </div>
          <div className="glass-card gs-scale absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl p-3 sm:-bottom-6 sm:-left-4 sm:gap-4 sm:p-4 lg:p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 sm:h-12 sm:w-12">
              <Icon name="verified" className="text-primary text-sm sm:text-base" filled />
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface sm:text-base">Frontend Architect</div>
              <div className="text-[10px] text-on-surface-variant sm:text-xs">Performance Focused</div>
            </div>
          </div>
          <div className="glass-card gs-scale absolute -top-3 -right-2 flex items-center gap-2 rounded-2xl p-2.5 sm:-top-4 sm:-right-4 sm:gap-3 sm:p-3 lg:p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/20 sm:h-10 sm:w-10">
              <Icon name="bolt" className="text-secondary text-sm" filled />
            </div>
            <div>
              <div className="text-xs font-bold text-on-surface sm:text-sm">Full-Stack</div>
              <div className="text-[10px] text-on-surface-variant">React · Node</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
