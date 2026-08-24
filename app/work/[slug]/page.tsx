import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="pt-20 pb-16 md:pt-28">
        <div className="container-lab">
          <Reveal>
            <SectionLabel>{project.category}</SectionLabel>
            <h1 className="text-balance mt-6 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-border-strong px-4 py-2 text-sm text-ink">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-lab grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Problem</h2>
            <p className="mt-4 text-lg text-ink">{project.problem}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Solution</h2>
            <p className="mt-4 text-lg text-ink">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container-lab">
          <MagneticButton href="/work" variant="secondary">
            Back to Work
          </MagneticButton>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
