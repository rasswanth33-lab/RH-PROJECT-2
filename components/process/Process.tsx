import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/technologies";

export function Process() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            How we build.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 divide-y divide-border border-t border-border" stagger={0.08}>
          {processSteps.map((step) => (
            <RevealItem key={step.index}>
              <div className="grid gap-3 py-8 md:grid-cols-[100px_1fr_2fr] md:items-baseline md:gap-8">
                <span className="text-sm font-medium text-accent">{step.index}</span>
                <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="max-w-md text-ink-muted">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
