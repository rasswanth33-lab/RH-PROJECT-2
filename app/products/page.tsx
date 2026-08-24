import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { FinalCTA } from "@/components/cta/FinalCTA";

export const metadata: Metadata = {
  title: "Products",
  description: "Digital products designed, built, and operated by Seeable Labs.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-20 pb-8 md:pt-28">
        <div className="container-lab">
          <Reveal>
            <SectionLabel>Products</SectionLabel>
            <h1 className="text-balance mt-6 max-w-2xl text-5xl font-semibold tracking-tight md:text-6xl">
              Built by Seeable Labs.
            </h1>
            <p className="mt-6 max-w-lg text-ink-muted">
              Alongside client work, Seeable Labs designs and operates its own digital products —
              built with the same engineering standard.
            </p>
          </Reveal>
        </div>
      </section>
      <ProjectsGrid showAll hideHeading />
      <FinalCTA />
    </>
  );
}
