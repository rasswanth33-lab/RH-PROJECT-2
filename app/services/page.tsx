import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Process } from "@/components/process/Process";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, SaaS, AI products, web applications, automation, and product development from Seeable Labs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-8 md:pt-28">
        <div className="container-lab">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="text-balance mt-6 max-w-2xl text-5xl font-semibold tracking-tight md:text-6xl">
              We don&apos;t just build websites. We build digital systems.
            </h1>
            <p className="mt-6 max-w-lg text-ink-muted">
              Websites are one capability. SaaS, AI, automation, applications, and product
              development are equally important.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="container-lab">
          <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.08}>
            {services.map((service) => (
              <RevealItem key={service.id}>
                <div className="h-full rounded-3xl border border-border bg-bg-elevated p-8 transition-colors duration-300 hover:border-ink md:p-10">
                  <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
                  <p className="mt-3 text-ink-muted">{service.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full border border-border-strong px-3 py-1.5 text-xs text-ink"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-14 flex justify-center">
            <MagneticButton href="/contact">Start a Project</MagneticButton>
          </Reveal>
        </div>
      </section>

      <Process />
      <FinalCTA />
    </>
  );
}
