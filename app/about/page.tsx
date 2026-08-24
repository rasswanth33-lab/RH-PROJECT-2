import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhySeeableLabs } from "@/components/WhySeeableLabs";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { TechnologySection } from "@/components/TechnologySection";
import { FinalCTA } from "@/components/cta/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Seeable Labs is a digital product and technology company — from idea to software.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-lab">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="text-balance mt-6 max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl">
              A digital product and technology company.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Seeable Labs designs and builds websites, SaaS platforms, AI solutions, and digital
              products that help businesses operate, grow, and scale. We should feel like a
              product engineering company, not a traditional web-design agency.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">
              Websites are one capability. SaaS, AI, automation, applications, and product
              development are equally important — we start where a business is, and build the
              digital infrastructure behind it as it grows.
            </p>
          </Reveal>
        </div>
      </section>

      <WhySeeableLabs />
      <WhoWeWorkWith />
      <TechnologySection />
      <FinalCTA />
    </>
  );
}
