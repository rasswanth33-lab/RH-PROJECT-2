"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function WhatWeBuild() {
  const [active, setActive] = useState(services[0].id);
  const activeService = services.find((s) => s.id === active) ?? services[0];

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Websites, software, and AI — engineered as one system.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActive(service.id)}
                className={cn(
                  "shrink-0 rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors duration-300 lg:shrink",
                  active === service.id
                    ? "border-ink bg-ink text-bg"
                    : "border-border text-ink-muted hover:border-border-strong hover:text-ink"
                )}
              >
                {service.title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border bg-bg-elevated p-8 md:p-12"
          >
            <p className="text-2xl font-medium tracking-tight md:text-3xl">{activeService.title}</p>
            <p className="mt-4 max-w-lg text-ink-muted">{activeService.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {activeService.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-border-strong px-4 py-2 text-sm text-ink"
                >
                  {example}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
