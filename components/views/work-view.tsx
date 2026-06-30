"use client";

import { useState } from "react";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollRevealImage } from "@/components/shared/scroll-reveal-image";
import { TechBadge } from "@/components/shared/tech-badge";
import { GridBackground } from "@/components/shared/grid-background";
import { GlowCard } from "@/components/shared/glow-card";
import { PROJECTS } from "@/lib/constants";
import { Target, Beaker, Lightbulb, CheckCircle2, ChevronRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECT_IMAGES = [
  "/images/dashboard_mockup.png",
  "/images/api_testing_mockup.png",
];

export default function WorkPage() {
  const [filter, setFilter] = useState<"All" | "Automation" | "Manual" | "API">("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Automation") return project.techStack.includes("Automation Testing") || project.techStack.includes("TestNG");
    if (filter === "Manual") return project.techStack.includes("Manual Testing");
    if (filter === "API") return project.techStack.includes("MySQL") || project.techStack.includes("MSSQL") || project.techStack.includes("Automation Testing");
    return true;
  });

  return (
    <PageTransition className="pt-24 pb-16 relative overflow-hidden min-h-screen">
      {/* Background grid */}
      <GridBackground />

      <section className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading
          label="Portfolio"
          title="Case Studies & Projects"
          description="Detailed validation strategies, defect management reports, and testing metrics from real-world products."
          align="left"
        />

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap gap-2 mt-8">
          {(["All", "Automation", "Manual", "API"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={cn(
                "rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 border",
                filter === tab
                  ? "bg-dark text-white border-dark shadow-sm"
                  : "text-secondary border-border bg-surface hover:text-dark hover:border-dark/20"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Case Studies Loop */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => {
            const imageSrc = PROJECT_IMAGES[index] || "/images/dashboard_mockup.png";
            return (
              <div
                key={project.title}
                className="grid gap-8 lg:grid-cols-12 items-start border-t border-border pt-12 first:border-none first:pt-0"
              >
                {/* Visual mockup (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <ScrollRevealImage
                    src={imageSrc}
                    alt={`${project.title} project interface`}
                    width={600}
                    height={400}
                    aspectRatio="video"
                  />

                  {/* Highlights GlowCard */}
                  <GlowCard className="p-6" glowColor="rgba(34, 197, 94, 0.05)">
                    <h4 className="font-heading text-sm font-bold text-dark mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-success" />
                      Impact & Results
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((res, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs leading-relaxed text-secondary">
                          <ChevronRight size={12} className="text-accent shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </GlowCard>
                </div>

                {/* Text Content (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <span className="font-mono text-xs text-accent font-semibold tracking-widest uppercase">
                        CASE STUDY {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-3xl font-bold text-dark text-glow-gradient mt-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* GitHub Link Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-bold text-secondary transition-all hover:border-dark hover:text-dark hover:shadow-sm"
                    >
                      <Code2 size={14} />
                      Repository
                    </a>
                  </div>

                  <p className="text-sm leading-relaxed text-secondary sm:text-base">
                    {project.overview}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Problem */}
                    <GlowCard className="p-4" glowColor="rgba(239, 68, 68, 0.03)">
                      <h4 className="text-xs font-semibold text-dark flex items-center gap-2 mb-2">
                        <Target size={14} className="text-danger" />
                        Problem Statement
                      </h4>
                      <p className="text-xs leading-relaxed text-secondary">
                        {project.problem}
                      </p>
                    </GlowCard>

                    {/* Testing Strategy */}
                    <GlowCard className="p-4" glowColor="rgba(37, 99, 235, 0.03)">
                      <h4 className="text-xs font-semibold text-dark flex items-center gap-2 mb-2">
                        <Beaker size={14} className="text-accent" />
                        Testing Strategy
                      </h4>
                      <p className="text-xs leading-relaxed text-secondary">
                        {project.testingStrategy}
                      </p>
                    </GlowCard>

                    {/* Challenges */}
                    <GlowCard className="p-4 sm:col-span-2" glowColor="rgba(245, 158, 11, 0.03)">
                      <h4 className="text-xs font-semibold text-dark flex items-center gap-2 mb-2">
                        <Lightbulb size={14} className="text-warning" />
                        Challenges Overcome
                      </h4>
                      <p className="text-xs leading-relaxed text-secondary">
                        {project.challenges}
                      </p>
                    </GlowCard>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
