import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { NodeField } from "@/components/ui/NodeField";
import { projects } from "@/data/projects";

export function WhatWeveDone() {
  return (
    <section id="work" className="border-t border-border py-28 md:py-40">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>What We&apos;ve Done</SectionLabel>
        </Reveal>

        <RevealGroup className="mt-12 divide-y divide-border border-t border-border" stagger={0.08}>
          {projects.map((project) => (
            <RevealItem key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group relative grid gap-3 overflow-hidden py-10 transition-colors duration-300 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:py-14"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 hidden w-72 items-center justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex"
                >
                  <NodeField className="h-28 w-72" />
                </div>

                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-ink-muted">{project.description}</p>
                </div>

                <span className="relative flex shrink-0 items-center gap-2 text-sm font-medium text-ink-muted transition-colors duration-300 group-hover:text-ink">
                  View Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
