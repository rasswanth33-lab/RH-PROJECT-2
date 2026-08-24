import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-bg-elevated p-8 transition-colors duration-300 hover:border-ink md:p-12"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
            {project.category}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{project.name}</h3>
          <p className="mt-4 max-w-lg text-ink-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-border-strong px-3 py-1 text-xs text-ink-muted">
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
            View Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
