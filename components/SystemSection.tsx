import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { systemFlow } from "@/data/technologies";

export function SystemSection() {
  return (
    <section className="border-t border-border bg-ink py-24 text-bg md:py-32">
      <div className="container-lab">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionLabel dark>Beyond Websites</SectionLabel>
            <h2 className="text-balance mt-6 max-w-lg text-4xl font-semibold tracking-tight text-white md:text-5xl">
              We don&apos;t just build websites.
              <br />
              We build digital systems.
            </h2>
            <p className="mt-6 max-w-md text-white/60">
              A website gets attention. A product changes how a business works.
            </p>
          </Reveal>

          <RevealGroup className="flex flex-col gap-3" stagger={0.1}>
            {systemFlow.map((step, i) => (
              <RevealItem key={step} y={16}>
                <div className="flex items-center gap-4">
                  <span className="w-6 shrink-0 text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-lg font-medium tracking-tight text-white transition-colors duration-300 hover:border-accent/60"
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
