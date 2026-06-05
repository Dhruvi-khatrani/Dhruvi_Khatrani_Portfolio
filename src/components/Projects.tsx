import Image from "next/image";
import { projects } from "@/lib/data";
import { Icon } from "./Icon";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[var(--spacing-container-max)] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-[var(--spacing-margin-desktop)] lg:py-[var(--spacing-section-gap)]"
    >
      {/* Header */}
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-12 md:flex-row md:items-end lg:mb-16">
        <div className="max-w-2xl">
          <div className="eyebrow mb-3">Portfolio</div>
          <h2 className="gs-fade mb-3 text-[28px] font-bold leading-tight tracking-tight text-on-surface sm:mb-4 sm:text-[36px] lg:text-[length:var(--text-headline-lg)]">
            Featured Works
          </h2>
          <p className="text-[14px] text-on-surface-variant sm:text-base">
            Product thinking, UI detail, and engineering — shipped together.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
          {projects.length} Projects
        </div>
      </div>

      {/* 2 rows × 3 cols — all equal cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card glass-card glass-card-shine group flex flex-col overflow-hidden rounded-[24px]"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden sm:h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Top-left: first tag as category label */}
              {project.tags.length > 0 && (
                <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-primary/20 px-2.5 py-0.5 font-mono text-[9px] tracking-wide text-primary backdrop-blur-md sm:text-[10px]">
                  {project.tags[0]}
                </span>
              )}

              {/* Top-right: external link icon if available */}
              {"link" in project && project.link && (
                <a
                  href={project.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-primary hover:border-primary"
                  aria-label={`Open ${project.title}`}
                >
                  <Icon name="arrow_outward" className="text-xs" />
                </a>
              )}
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-[16px] font-bold tracking-tight text-on-surface sm:text-[17px]">
                {project.title}
              </h3>

              <p className="mb-4 flex-1 text-[12px] leading-relaxed text-on-surface-variant sm:text-[13px]">
                {project.description}
              </p>

              {/* Highlights — small bullet list */}
              {"highlights" in project && Array.isArray(project.highlights) && (
                <ul className="mb-4 space-y-1.5">
                  {(project.highlights as string[]).map((h: string) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-[11px] text-on-surface-variant sm:text-xs"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/8 px-2 py-0.5 font-mono text-[9px] text-primary sm:text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
