"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-badge";
import { FadeIn } from "@/components/animations/fade-in";
import {
  ArrowUpRight,
  ChevronDown,
  Lightbulb,
  Target,
  Beaker,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-surface py-section-sm lg:py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Featured Projects"
            title="Quality in Action"
            description="Real-world testing projects that demonstrate problem-solving, strategic testing, and measurable impact."
          />
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <FadeIn key={project.title} delay={index * 0.15}>
                <motion.div
                  layout
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300",
                    isExpanded
                      ? "shadow-lg md:col-span-2"
                      : "cursor-pointer hover:-translate-y-1 hover:shadow-md",
                    project.size === "large" && !isExpanded && "md:col-span-1"
                  )}
                  onClick={() =>
                    !isExpanded && setExpandedIndex(index)
                  }
                >
                  {/* Project Header */}
                  <div className="p-6 sm:p-8">
                    {/* Top row */}
                    <div className="mb-4 flex items-start justify-between">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        Project {String(index + 1).padStart(2, "0")}
                      </span>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(isExpanded ? null : index);
                        }}
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="rounded-full p-1.5 text-muted transition-colors hover:bg-hover hover:text-dark"
                        aria-label={
                          isExpanded ? "Collapse details" : "Expand details"
                        }
                      >
                        <ChevronDown size={18} />
                      </motion.button>
                    </div>

                    {/* Title & Overview */}
                    <h3 className="font-heading text-xl font-bold text-dark sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      {project.overview}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                            {/* Problem */}
                            <div className="rounded-xl bg-hover p-4">
                              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-dark">
                                <Target
                                  size={16}
                                  className="text-danger"
                                />
                                Problem
                              </div>
                              <p className="text-xs leading-relaxed text-secondary">
                                {project.problem}
                              </p>
                            </div>

                            {/* Testing Strategy */}
                            <div className="rounded-xl bg-hover p-4">
                              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-dark">
                                <Beaker
                                  size={16}
                                  className="text-accent"
                                />
                                Testing Strategy
                              </div>
                              <p className="text-xs leading-relaxed text-secondary">
                                {project.testingStrategy}
                              </p>
                            </div>

                            {/* Challenges */}
                            <div className="rounded-xl bg-hover p-4">
                              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-dark">
                                <Lightbulb
                                  size={16}
                                  className="text-warning"
                                />
                                Challenges
                              </div>
                              <p className="text-xs leading-relaxed text-secondary">
                                {project.challenges}
                              </p>
                            </div>

                            {/* Results */}
                            <div className="rounded-xl bg-accent/[0.03] border border-accent/10 p-4">
                              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-dark">
                                <CheckCircle2
                                  size={16}
                                  className="text-success"
                                />
                                Results
                              </div>
                              <ul className="space-y-1.5">
                                {project.results.map((result, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-xs leading-relaxed text-secondary"
                                  >
                                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-success" />
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
