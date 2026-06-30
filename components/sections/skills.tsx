"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, SKILL_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="bg-surface py-section-sm lg:py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Technical Skills"
            title="Tools of the Trade"
            description="A comprehensive skill set spanning manual testing, automation, API validation, and quality engineering methodologies."
          />
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === category
                    ? "text-white"
                    : "text-secondary hover:text-dark hover:bg-hover"
                )}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="skill-filter"
                    className="absolute inset-0 rounded-lg bg-dark"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <StaggerItem key={skill.name}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-default rounded-xl border border-border bg-background p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
                  >
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <p className="text-xs font-medium text-dark sm:text-sm">
                      {skill.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted">
                      {skill.category}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </AnimatePresence>
        </StaggerContainer>
      </div>
    </section>
  );
}
