import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function WhatWeveDone() {
  return (
    <section id="work" className="border-t border-border py-28 md:py-40">
      <div className="container-lab">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionLabel>Selected Work</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticButton href="/work" variant="secondary">
              View All Work
            </MagneticButton>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 flex flex-col gap-24 md:gap-32" stagger={0.1}>
          {projects.map((project, i) => (
            <RevealItem key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div
                  className={cn(
                    "grid gap-8 md:grid-cols-2 md:items-center md:gap-14",
                    i % 2 === 1 && "md:[&>*:first-child]:order-2"
                  )}
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                      {project.category}
                    </p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-5xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 max-w-md text-ink-muted">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border-strong px-3 py-1 text-xs text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                      View Project
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>

                  <ProjectVisual className="aspect-[4/3] transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
