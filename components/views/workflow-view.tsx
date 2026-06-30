"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { GridBackground } from "@/components/shared/grid-background";
import { GlowCard } from "@/components/shared/glow-card";
import { useCounter } from "@/components/animations/counter";
import { WORKFLOW_STEPS, QUALITY_METRICS, TOOLS } from "@/lib/constants";

export default function WorkflowPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <PageTransition className="pt-24 pb-16 relative overflow-hidden min-h-screen">
      {/* Background grids */}
      <GridBackground />

      {/* Editorial Header */}
      <section className="mx-auto max-w-6xl px-6 mb-16 relative z-10">
        <SectionHeading
          label="Workflow"
          title="QA Pipeline & Metrics"
          description="A systematic and data-driven approach to testing enterprise microservices and frontend platforms."
          align="left"
        />

        {/* Workflow Diagram */}
        <div ref={containerRef} className="relative mt-12">
          <h3 className="font-heading text-lg font-bold text-dark mb-8 border-b border-border pb-4 text-glow-gradient">
            Software Test Life Cycle (STLC)
          </h3>

          {/* Desktop flow (Grid layout) */}
          <div className="hidden md:block relative">
            {/* Glowing Dashed connector line */}
            <div className="absolute top-16 right-8 left-8 h-[2px]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full origin-left bg-gradient-to-r from-accent/10 via-accent/40 to-accent-light/10 shadow-sm"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-6">
              {WORKFLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group text-center"
                  >
                    {/* Circle badge */}
                    <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-accent bg-background text-xs font-bold text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white shadow-sm">
                      {step.step}
                    </div>

                    <GlowCard className="p-5" glowColor="rgba(37, 99, 235, 0.04)">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                        <Icon size={24} />
                      </div>
                      <h4 className="font-heading text-sm font-semibold text-dark">
                        {step.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-secondary">
                        {step.description}
                      </p>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline (Vertical flow) */}
          <div className="md:hidden space-y-4 relative">
            <div className="absolute top-4 bottom-4 left-6 w-px bg-border" />
            
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-4 pl-2"
                >
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent bg-background text-xs font-bold text-accent">
                    {step.step}
                  </div>

                  <GlowCard className="flex flex-1 items-center gap-3 p-4 w-full" glowColor="rgba(37, 99, 235, 0.03)">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-dark">
                        {step.title}
                      </h4>
                      <p className="text-xs text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="border-y border-border bg-surface/40 py-16 mb-16 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            label="Performance"
            title="Quality Metrics Dashboard"
            description="Verified statistical results confirming quality gains, automation time-savings, and test run volumes."
            align="left"
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 mt-8">
            {QUALITY_METRICS.map((metric, idx) => (
              <MetricCounterCard key={metric.label} metric={metric} delay={idx * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Cloud */}
      <section className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading
          label="Arsenal"
          title="Tools & Technologies"
          align="left"
        />

        <StaggerContainer
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8"
          staggerDelay={0.06}
        >
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <StaggerItem key={tool.name}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center shadow-sm hover:border-dark/10"
                >
                  {/* Neon top glow line */}
                  <div
                    className="absolute top-0 right-0 left-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: tool.color, boxShadow: `0 0 8px ${tool.color}33` }}
                  />

                  <div
                    className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-200"
                    style={{
                      backgroundColor: `${tool.color}10`,
                      color: tool.color,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <h4 className="font-heading text-sm font-semibold text-dark">
                    {tool.name}
                  </h4>
                  <p className="mt-1 text-xs text-secondary">
                    {tool.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>
    </PageTransition>
  );
}

function MetricCounterCard({
  metric,
  delay,
}: {
  metric: (typeof QUALITY_METRICS)[number];
  delay: number;
}) {
  const Icon = metric.icon;
  const { count, ref } = useCounter({ end: metric.value, duration: 1500 });

  return (
    <FadeIn delay={delay} className="w-full">
      <GlowCard className="w-full p-6" glowColor="rgba(37, 99, 235, 0.04)">
        <div ref={ref} className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
            <Icon size={20} />
          </div>
          
          <span className="font-heading text-3xl font-bold tracking-tight text-dark md:text-4xl text-glow-gradient">
            {count}
            {metric.suffix}
          </span>
          
          <span className="mt-2 block text-xs uppercase tracking-wider text-secondary">
            {metric.label}
          </span>
        </div>
      </GlowCard>
    </FadeIn>
  );
}
