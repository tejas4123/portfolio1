"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WORKFLOW_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="workflow" className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Testing Workflow"
            title="Systematic Quality Assurance"
            description="A structured approach to ensuring quality at every stage of the software development lifecycle."
          />
        </FadeIn>

        <div ref={containerRef} className="relative">
          {/* Desktop: Horizontal flow */}
          <div className="hidden lg:block">
            {/* Connection line */}
            <div className="absolute top-16 right-12 left-12 h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="h-full origin-left bg-gradient-to-r from-accent/20 via-accent to-accent/20"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {/* First row */}
              {WORKFLOW_STEPS.slice(0, 4).map((step, index) => (
                <WorkflowCard
                  key={step.title}
                  step={step}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Arrow connector between rows */}
            <div className="my-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scaleY: 1 }
                    : { opacity: 0, scaleY: 0 }
                }
                transition={{ duration: 0.5, delay: 1.2 }}
                className="h-8 w-px origin-top bg-accent/30"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {/* Second row (reversed for visual flow) */}
              {WORKFLOW_STEPS.slice(4, 8)
                .reverse()
                .map((step, index) => (
                  <WorkflowCard
                    key={step.title}
                    step={step}
                    index={index + 4}
                    isInView={isInView}
                  />
                ))}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical flow */}
          <div className="lg:hidden">
            <div className="relative space-y-4">
              {/* Vertical line */}
              <div className="absolute top-4 bottom-4 left-8 w-px">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="h-full origin-top bg-gradient-to-b from-accent via-accent/50 to-accent/20"
                />
              </div>

              {WORKFLOW_STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="relative flex items-center gap-4 pl-4"
                  >
                    {/* Step dot */}
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-accent">
                      <span className="text-xs font-bold">{step.step}</span>
                    </div>

                    <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-dark">
                          {step.title}
                        </p>
                        <p className="text-xs text-secondary">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual workflow card
function WorkflowCard({
  step,
  index,
  isInView,
}: {
  step: (typeof WORKFLOW_STEPS)[number];
  index: number;
  isInView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
      className="group relative"
    >
      {/* Step number dot on the line */}
      <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-background text-xs font-bold text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
        {step.step}
      </div>

      <div className="rounded-xl border border-border bg-surface p-5 text-center shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:border-accent/30 group-hover:shadow-md">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
          <Icon size={24} />
        </div>
        <h4 className="font-heading text-sm font-semibold text-dark">
          {step.title}
        </h4>
        <p className="mt-1.5 text-xs leading-relaxed text-secondary">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
