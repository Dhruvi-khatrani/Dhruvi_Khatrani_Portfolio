import Image from "next/image";
import { projects } from "@/lib/data";
import { Icon } from "./Icon";

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const others   = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-[var(--spacing-container-max)] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-12 md:flex-row md:items-end lg:mb-16">
        <div className="max-w-xl">
          <h2 className="gs-fade mb-3 text-[28px] font-bold leading-tight tracking-tight sm:mb-4 sm:text-[36px] lg:text-[length:var(--text-headline-lg)]">
            Featured Works
          </h2>
          <p className="text-[14px] text-on-surface-variant sm:text-base">
            A curated selection of projects where design meets technical excellence.
          </p>
        </div>
        <div className="hidden gap-3 md:flex">
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant transition-colors hover:bg-surface-variant sm:h-12 sm:w-12" aria-label="Previous project">
            <Icon name="arrow_back" />
          </button>
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant transition-colors hover:bg-surface-variant sm:h-12 sm:w-12" aria-label="Next project">
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {/* Featured */}
        <div className="project-card group glass-card relative h-[300px] overflow-hidden rounded-2xl sm:h-[380px] lg:col-span-2 lg:h-[460px]">
          <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 66vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 lg:p-8">
            <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-primary/30 bg-primary/20 px-2.5 py-0.5 font-mono text-[10px] text-primary sm:px-3 sm:py-1 sm:text-xs">{tag}</span>
              ))}
            </div>
            <h3 className="mb-1.5 text-xl font-bold text-white sm:mb-2 sm:text-2xl lg:text-3xl">{featured.title}</h3>
            <p className="mb-4 line-clamp-2 text-[13px] text-white/70 sm:mb-5 sm:text-sm">{featured.description}</p>
            <button type="button" className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition-colors group-hover:bg-primary sm:px-6 sm:py-3">
              View Project <Icon name="arrow_outward" />
            </button>
          </div>
        </div>

        {/* Others */}
        {others.map((project) => (
          <div key={project.title} className="project-card group glass-card relative min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[280px]">
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 lg:p-6">
              <h3 className="mb-1 text-base font-bold text-white sm:mb-2 sm:text-xl">{project.title}</h3>
              <p className="mb-3 text-[12px] text-white/70 sm:mb-4 sm:text-sm">{project.description}</p>
              {"linkLabel" in project && project.linkLabel && (
                <span className="font-mono text-[10px] text-primary hover:underline sm:text-xs">{project.linkLabel}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
