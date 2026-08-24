import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { NodeField } from "@/components/ui/NodeField";
import { technologies } from "@/data/technologies";

export function TechnologySection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-bg-lavender py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 85%)",
          opacity: 0.5,
        }}
      />
      <NodeField
        variant="dark"
        className="pointer-events-none absolute right-0 top-0 h-40 w-[560px] opacity-30 md:h-52 md:w-[720px]"
      />

      <div className="container-lab relative">
        <Reveal>
          <SectionLabel>Technology</SectionLabel>
          <h2 className="text-balance mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Built with modern technology.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {technologies.map((group) => (
            <RevealItem key={group.category}>
              <div className="card-shadow h-full rounded-2xl border border-border bg-bg-elevated p-7 transition-colors duration-300 hover:border-accent">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
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
