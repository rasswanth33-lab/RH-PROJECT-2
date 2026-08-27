import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const email = "hello@seeablelabs.com";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-28 md:py-40">
      <div className="container-lab text-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink-faint">
            Have an idea worth building?
          </p>

          <a
            href={`mailto:${email}`}
            className="group mt-8 inline-block text-balance text-4xl font-semibold tracking-tight text-ink transition-colors duration-300 hover:text-accent sm:text-5xl md:text-6xl"
          >
            {email}
            <span className="mt-3 block h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
          </a>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
            <Link href="/contact" className="transition-colors duration-200 hover:text-accent-soft">
              Send a detailed brief →
            </Link>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-accent-soft"
            >
              X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-accent-soft"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
