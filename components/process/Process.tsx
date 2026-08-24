"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/technologies";

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            How we build.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mt-16">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[47px]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent shadow-[0_0_8px_var(--accent)] md:left-[47px]"
          />

          <RevealGroup className="divide-y divide-border" stagger={0.08}>
            {processSteps.map((step) => (
              <RevealItem key={step.index}>
                <div className="relative grid gap-3 py-8 pl-8 md:grid-cols-[100px_1fr_2fr] md:items-baseline md:gap-8 md:pl-24">
                  <span className="absolute left-0 top-9 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg md:left-10" />
                  <span className="text-sm font-medium text-accent">{step.index}</span>
                  <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="max-w-md text-ink-muted">{step.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
