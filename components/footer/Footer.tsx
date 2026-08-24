import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

const social = [
  { href: "https://x.com", label: "X" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-bg">
      <div className="container-lab grid gap-12 py-16 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Image src="/brand/mark.png" alt="" width={32} height={32} className="rounded-md" />
            <span className="text-sm font-semibold tracking-[0.14em] text-ink">SEEABLE LABS</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">From idea to software.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-soft transition-colors duration-200 hover:text-accent"
          >
            Talk to Seeable Labs →
          </Link>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Navigation</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-accent-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm text-ink-muted transition-colors duration-200 hover:text-accent-soft"
              >
                Contact
              </Link>
            </li>
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
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-accent-soft"
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
          {legal.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-200 hover:text-accent-soft">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
