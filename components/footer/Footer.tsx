import Link from "next/link";
import Image from "next/image";

const social = [
  { href: "https://x.com", label: "X" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-bg">
      <div className="container-lab flex flex-col-reverse items-center gap-6 py-10 text-sm text-ink-faint md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/brand/mark.png" alt="" width={20} height={20} className="rounded" />
          <span>© 2026 Seeable Labs.</span>
        </div>

        <div className="flex items-center gap-6">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-accent-soft"
            >
              {item.label}
            </a>
          ))}
          <Link href="/privacy" className="transition-colors duration-200 hover:text-accent-soft">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors duration-200 hover:text-accent-soft">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
