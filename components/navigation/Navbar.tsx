"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-bg/40 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container-lab flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/brand/mark.png" alt="" width={36} height={36} className="rounded-md" priority />
          <span className="text-sm font-semibold tracking-[0.14em] text-ink">SEEABLE LABS</span>
        </Link>

        <Link
          href="/contact"
          className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
