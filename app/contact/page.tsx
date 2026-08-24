import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell Seeable Labs what you're trying to build. We'll figure out the technology.",
};

export default function ContactPage() {
  return (
    <section className="pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="container-lab grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Project Enquiry</SectionLabel>
            <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Have something worth building?
            </h1>
            <p className="mt-6 max-w-sm text-ink-muted">
              Tell us what you&apos;re trying to build. We&apos;ll figure out the technology.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
