import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { FinalCTA } from "@/components/cta/FinalCTA";

export const metadata: Metadata = {
  title: "Work",
  description: "Products and platforms designed and built by Seeable Labs.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-20 pb-8 md:pt-28">
        <div className="container-lab">
          <Reveal>
            <SectionLabel>Work</SectionLabel>
            <h1 className="text-balance mt-6 max-w-2xl text-5xl font-semibold tracking-tight md:text-6xl">
              Built by Seeable Labs.
            </h1>
            <p className="mt-6 max-w-lg text-ink-muted">
              A growing collection of websites, SaaS platforms, and digital products we&apos;ve
              designed and engineered end-to-end.
            </p>
          </Reveal>
        </div>
      </section>
      <ProjectsGrid showAll hideHeading />
      <FinalCTA />
    </>
  );
}
