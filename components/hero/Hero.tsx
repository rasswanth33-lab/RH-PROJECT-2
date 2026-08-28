"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      <div className="container-lab relative z-10 flex flex-1 flex-col justify-center py-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Seeable Labs
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mt-6 max-w-3xl text-[13vw] font-semibold leading-[0.96] tracking-tight sm:text-7xl md:text-8xl lg:max-w-2xl lg:text-[5.6rem]"
        >
          We build
          <br />
          products that
          <br />
          make <span className="text-accent">ideas real.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-balance mt-8 max-w-md text-lg text-ink-muted"
        >
          Websites, SaaS platforms, and AI-powered software — designed and engineered end to
          end for businesses ready to move.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/contact">Start a Project</MagneticButton>
          <MagneticButton href="/work" variant="secondary">
            View Our Work
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
