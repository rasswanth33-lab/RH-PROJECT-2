import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhatWeDo() {
  return (
    <section className="border-t border-border py-28 md:py-40">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
          <p className="text-balance mt-8 max-w-4xl text-3xl font-medium leading-snug tracking-tight text-ink sm:text-4xl md:text-5xl">
            We build <span className="text-accent">software</span>,{" "}
            <span className="text-accent">SaaS products</span>, and{" "}
            <span className="text-accent">AI-powered solutions</span> that solve real-world
            problems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
