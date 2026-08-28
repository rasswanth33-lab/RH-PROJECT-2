import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whoWeWorkWith } from "@/data/technologies";

export function WhoWeWorkWith() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>About Seeable Labs</SectionLabel>
          <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            From first idea to enterprise scale.
          </h2>
          <p className="mt-6 max-w-xl text-ink-muted">
            Seeable Labs is a digital product and technology company — not a traditional
            web-design agency. We understand the business first, then build the software,
            websites, and AI systems behind it.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {whoWeWorkWith.map((item) => (
            <RevealItem key={item.title}>
              <div className="card-shadow h-full rounded-2xl border border-border bg-bg-elevated p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_0_1px_var(--accent),0_20px_40px_-24px_rgba(139,92,246,0.35)]">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
