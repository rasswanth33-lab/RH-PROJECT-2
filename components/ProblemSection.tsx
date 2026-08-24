import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { problems } from "@/data/technologies";

export function ProblemSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="text-balance mt-6 max-w-lg text-4xl font-semibold tracking-tight md:text-5xl">
                Your idea shouldn&apos;t stay an idea.
              </h2>
              <p className="mt-6 max-w-md text-ink-muted">
                Most businesses are held back by technology that wasn&apos;t built to grow with
                them. Seeable Labs turns those problems into software.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <RevealItem key={problem}>
                <div className="h-full rounded-2xl border border-border bg-bg-elevated p-6 transition-colors duration-300 hover:border-ink">
                  <p className="text-sm font-medium text-ink">{problem}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
