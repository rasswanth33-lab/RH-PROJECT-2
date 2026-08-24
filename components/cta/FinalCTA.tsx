import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NodeField } from "@/components/ui/NodeField";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <NodeField
        variant="dark"
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-[720px] -translate-x-1/2 opacity-30"
      />
      <div className="container-lab relative text-center">
        <Reveal>
          <h2 className="text-balance mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Have something worth building?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-ink-muted">
            Tell us what you&apos;re trying to build. We&apos;ll figure out the technology.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact">Start a Project</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              Talk to Seeable Labs
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
