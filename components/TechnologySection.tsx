import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { technologies } from "@/data/technologies";

export function TechnologySection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-lab">
        <Reveal>
          <SectionLabel>Technology</SectionLabel>
          <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Built with modern technology.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {technologies.map((group) => (
            <RevealItem key={group.category}>
              <div className="h-full rounded-2xl border border-border p-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                  {group.category}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm font-medium text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
