"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NodeField } from "@/components/ui/NodeField";
import { heroFlow } from "@/data/technologies";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 82% 8%, var(--accent-tint) 0%, transparent 65%)",
        }}
      />
      <NodeField className="pointer-events-none absolute -right-10 top-8 -z-10 h-40 w-[560px] opacity-70 md:h-52 md:w-[720px]" />

      <div className="container-lab">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Seeable Labs / Digital Product Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mt-8 max-w-4xl text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.4rem]"
        >
          From idea
          <br />
          to <span className="text-accent">software.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-balance mt-8 max-w-xl text-lg text-ink-muted"
        >
          We design and build websites, SaaS platforms, AI products, and digital systems for
          businesses ready to move faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/contact">Start a Project</MagneticButton>
          <MagneticButton href="/work" variant="secondary">
            See What We Build
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center gap-2 md:gap-3"
        >
          {heroFlow.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:gap-3">
              <span className="rounded-full border border-border-strong bg-bg-elevated px-4 py-2 text-sm font-medium text-ink-muted">
                {step}
              </span>
              {i < heroFlow.length - 1 && (
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="text-accent"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
