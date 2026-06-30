import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="mb-3 inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </span>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
