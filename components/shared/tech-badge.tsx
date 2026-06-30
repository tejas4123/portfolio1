import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-hover px-3 py-1 font-mono text-xs font-medium text-secondary transition-colors duration-200 hover:border-accent/30 hover:text-accent",
        className
      )}
    >
      {name}
    </span>
  );
}
