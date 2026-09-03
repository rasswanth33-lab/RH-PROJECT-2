"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { projects } from "@/data/projects";

export function WhatWeveDone() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-48%"]);

  return (
    <section ref={sectionRef} id="work" className="border-t border-border md:min-h-[280vh]">
      <div className="sticky top-0 overflow-x-auto py-28 md:overflow-hidden md:flex md:h-screen md:flex-col md:justify-center md:py-0">
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

        <motion.div style={{ x }} className="mt-16 flex w-max gap-6 md:gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={project.demoUrl ?? `/work/${project.slug}`} className="group block w-[82vw] max-w-[620px] shrink-0 md:w-[42vw]">
              <div className="grid gap-6 md:gap-8">
                <ProjectVisual
                  thumbnail={project.thumbnail}
                  alt={`${project.name} preview`}
                  className="aspect-[3/2] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />

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

              </div>
            </Link>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
