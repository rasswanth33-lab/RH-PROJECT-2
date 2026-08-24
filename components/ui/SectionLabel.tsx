import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em]",
        dark ? "text-white/50" : "text-ink-muted",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
