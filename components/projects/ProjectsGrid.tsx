import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsGrid({ showAll = false, hideHeading = false }: { showAll?: boolean; hideHeading?: boolean }) {
  const list = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        {!hideHeading && (
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Built by Seeable Labs.
              </h2>
            </Reveal>
            {!showAll && (
              <Reveal delay={0.1}>
                <MagneticButton href="/work" variant="secondary">
                  View All Work
                </MagneticButton>
              </Reveal>
            )}
          </div>
        )}

        <RevealGroup className="mt-14 grid gap-6" stagger={0.1}>
          {list.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
