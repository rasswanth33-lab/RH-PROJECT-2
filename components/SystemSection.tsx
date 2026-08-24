import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { NodeField } from "@/components/ui/NodeField";
import { systemFlow } from "@/data/technologies";

export function SystemSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-bg-elevated py-24 md:py-32">
      <NodeField
        variant="dark"
        className="pointer-events-none absolute -left-16 bottom-0 h-40 w-[560px] opacity-40 md:h-52 md:w-[720px]"
      />
      <div className="container-lab">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionLabel>Beyond Websites</SectionLabel>
            <h2 className="text-balance mt-6 max-w-lg text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              We don&apos;t just build websites.
              <br />
              We build digital systems.
            </h2>
            <p className="mt-6 max-w-md text-ink-muted">
              A website gets attention. A product changes how a business works.
            </p>
          </Reveal>

          <RevealGroup className="flex flex-col gap-3" stagger={0.1}>
            {systemFlow.map((step, i) => (
              <RevealItem key={step} y={16}>
                <div className="flex items-center gap-4">
                  <span className="w-6 shrink-0 text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="flex-1 rounded-xl border border-border bg-bg px-6 py-4 text-lg font-medium tracking-tight text-ink transition-colors duration-300 hover:border-accent"
                    style={{ marginLeft: `${i * 12}px` }}
                  >
                    {step}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
