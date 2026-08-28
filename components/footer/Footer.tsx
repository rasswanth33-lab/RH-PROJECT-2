import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "https://x.com", label: "X" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-bg">
      <div className="container-lab grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/brand/mark.png" alt="" width={28} height={28} className="rounded-sm" />
            <span className="text-sm font-semibold tracking-[0.14em] text-ink">SEEABLE LABS</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Websites, SaaS platforms, and AI-powered software — designed and built end to end.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Site</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Connect</p>
          <ul className="mt-4 space-y-2.5">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-lab flex flex-col-reverse gap-4 border-t border-border py-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
        <p>© 2026 Seeable Labs. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="transition-colors duration-200 hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors duration-200 hover:text-ink">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
