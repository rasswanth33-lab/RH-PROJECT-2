"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function MagneticButton({ href, children, variant = "primary", className }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition-[transform,background-color,color,border-color] duration-300 ease-out will-change-transform",
        variant === "primary"
          ? "bg-accent text-white hover:bg-accent-soft"
          : "border border-border-strong text-ink hover:border-accent hover:text-accent",
        className
      )}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
    </Link>
  );
}
