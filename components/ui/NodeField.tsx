"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NodeFieldProps {
  className?: string;
  variant?: "light" | "dark";
}

const nodes = [
  { x: 60, y: 90 },
  { x: 220, y: 40 },
  { x: 380, y: 120 },
  { x: 520, y: 30 },
  { x: 640, y: 140 },
  { x: 760, y: 60 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 3],
];

export function NodeField({ className, variant = "light" }: NodeFieldProps) {
  const stroke = variant === "dark" ? "rgba(167, 139, 250, 0.5)" : "rgba(139, 92, 246, 0.35)";
  const dot = variant === "dark" ? "#a78bfa" : "#8b5cf6";

  return (
    <svg
      aria-hidden
      viewBox="0 0 800 180"
      className={cn("pointer-events-none select-none", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={stroke}
          strokeWidth={1}
          strokeDasharray="4 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.6, 0.2], strokeDashoffset: [0, -40] }}
          transition={{ duration: 6, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
        />
      ))}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={3.5}
          fill={dot}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        />
      ))}
    </svg>
  );
}
