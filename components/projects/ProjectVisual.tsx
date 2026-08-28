"use client";

import { motion } from "framer-motion";
import { NodeField } from "@/components/ui/NodeField";

/**
 * Abstract, generative stand-in for a product interface — geometric panels and
 * connective lines rendered in code, not a screenshot of the real product.
 */
export function ProjectVisual({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border bg-bg-elevated ${className ?? ""}`}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 30% 30%, rgba(139,92,246,0.14) 0%, transparent 70%)",
        }}
      />

      <NodeField shape="field" variant="dark" className="absolute inset-0 h-full w-full opacity-40" />

      <div className="absolute inset-0 flex items-center justify-center p-7">
        <div className="grid h-full w-full grid-cols-6 grid-rows-6 gap-2.5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-6 row-span-1 rounded-lg border border-border-strong bg-bg/70"
          />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="col-span-2 row-span-5 rounded-lg border border-accent/60 bg-bg/70"
          />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="col-span-4 row-span-2 rounded-lg border border-border-strong bg-bg/70"
          />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="col-span-2 row-span-2 rounded-lg border border-accent/60 bg-bg/70"
          />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="col-span-2 row-span-2 rounded-lg border border-border-strong bg-bg/70"
          />
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.35)",
        }}
      />
    </div>
  );
}
