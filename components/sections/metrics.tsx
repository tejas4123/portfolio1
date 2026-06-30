"use client";

import { QUALITY_METRICS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { useCounter } from "@/components/animations/counter";

function MetricCard({
  value,
  suffix,
  label,
  icon: Icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  index: number;
}) {
  const { count, ref } = useCounter({ end: value, duration: 2000 });

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Background decoration */}
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/[0.03] transition-all duration-300 group-hover:scale-150 group-hover:bg-accent/[0.06]" />

      <div className="relative">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon size={24} />
        </div>
        <span className="font-heading text-3xl font-bold tracking-tight text-dark md:text-4xl">
          {count}
          {suffix}
        </span>
        <span className="mt-2 block text-sm text-secondary">{label}</span>
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <section
      id="metrics"
      className="bg-surface py-section-sm lg:py-section"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Quality Metrics"
            title="Impact by the Numbers"
            description="Quantifiable results that demonstrate the value of systematic quality assurance."
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {QUALITY_METRICS.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.1}>
              <MetricCard
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                icon={metric.icon}
                index={index}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
