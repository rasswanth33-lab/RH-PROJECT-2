import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whySeeableLabs } from "@/data/technologies";

export function WhySeeableLabs() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>Why Seeable Labs</SectionLabel>
          <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Technology should solve problems.
            <br />
            Not create more of them.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2" stagger={0.08}>
          {whySeeableLabs.map((item, i) => (
            <RevealItem key={item.title}>
              <div className="h-full bg-bg-elevated p-8 md:p-10">
                <span className="text-xs font-medium text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-ink-muted">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
