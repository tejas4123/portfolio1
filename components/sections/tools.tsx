"use client";

import { TOOLS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { motion } from "framer-motion";

export function Tools() {
  return (
    <section id="tools" className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Tech Stack"
            title="Tools & Technologies"
            description="The essential tools I use daily to ensure software quality across the development lifecycle."
          />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          staggerDelay={0.08}
        >
          {TOOLS.map((tool) => {
            const Icon = tool.icon;

            return (
              <StaggerItem key={tool.name}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center shadow-sm"
                >
                  {/* Colored accent bar on hover */}
                  <div
                    className="absolute top-0 right-0 left-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: tool.color }}
                  />

                  <div
                    className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-200"
                    style={{
                      backgroundColor: `${tool.color}15`,
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
      </div>
    </section>
  );
}
