import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FinalCTA() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <div className="container-lab text-center">
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
