"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NodeFieldProps {
  className?: string;
  variant?: "light" | "dark";
  shape?: "strip" | "field";
}

const stripNodes = [
  { x: 60, y: 90 },
  { x: 220, y: 40 },
  { x: 380, y: 120 },
  { x: 520, y: 30 },
  { x: 640, y: 140 },
  { x: 760, y: 60 },
];

const stripEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 3],
];

const fieldNodes = [
  { x: 80, y: 60 },
  { x: 240, y: 140 },
  { x: 420, y: 70 },
  { x: 560, y: 190 },
  { x: 180, y: 280 },
  { x: 380, y: 320 },
  { x: 540, y: 400 },
  { x: 90, y: 440 },
  { x: 300, y: 500 },
  { x: 500, y: 560 },
  { x: 150, y: 600 },
  { x: 440, y: 660 },
];

const fieldEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
  [5, 6],
  [4, 7],
  [7, 8],
  [5, 8],
  [8, 9],
  [7, 10],
  [8, 11],
  [9, 11],
];

export function NodeField({ className, variant = "light", shape = "strip" }: NodeFieldProps) {
  const stroke = variant === "dark" ? "rgba(167, 139, 250, 0.5)" : "rgba(139, 92, 246, 0.35)";
  const dot = variant === "dark" ? "#a78bfa" : "#8b5cf6";
  const nodes = shape === "field" ? fieldNodes : stripNodes;
  const edges = shape === "field" ? fieldEdges : stripEdges;
  const viewBox = shape === "field" ? "0 0 640 700" : "0 0 800 180";

  return (
    <svg
      aria-hidden
      viewBox={viewBox}
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
          r={shape === "field" ? 4.5 : 3.5}
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
