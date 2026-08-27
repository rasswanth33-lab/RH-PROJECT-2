"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden pt-20 pb-24 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      <div className="container-lab">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Seeable Labs
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mt-8 max-w-4xl text-[11vw] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.6rem]"
        >
          We build products that make ideas real.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </span>
            See what we&apos;ve built
          </a>
        </motion.div>
      </div>
    </section>
  );
}
