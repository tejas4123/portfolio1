"use client";

import { EXPERIENCES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-badge";
import { FadeIn } from "@/components/animations/fade-in";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Experience"
            title="Professional Journey"
            description="Hands-on experience in quality assurance for enterprise-grade applications."
          />
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-6 hidden h-full w-px bg-border md:left-1/2 md:block" />

          {EXPERIENCES.map((exp, index) => (
            <FadeIn
              key={exp.company}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="relative mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute top-8 left-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-accent bg-background md:left-1/2 md:block" />

                <div className="md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                  {/* Left side - Company info */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right" : "md:order-2"
                    } mb-6 md:mb-0`}
                  >
                    <div
                      className={`${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      } max-w-md`}
                    >
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        <Briefcase size={12} />
                        {exp.role}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-dark">
                        {exp.company}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-secondary">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Metrics Cards */}
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {exp.metrics.slice(0, 6).map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-xl border border-border bg-surface p-3 text-center"
                          >
                            <span className="font-heading text-lg font-bold text-dark">
                              {metric.value}
                            </span>
                            <span className="mt-0.5 block text-[10px] leading-tight text-muted">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side - Responsibilities */}
                  <div
                    className={
                      index % 2 === 0 ? "" : "md:order-1 md:text-right"
                    }
                  >
                    <div
                      className={`${
                        index % 2 !== 0 ? "md:ml-auto" : ""
                      } max-w-md`}
                    >
                      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                          Key Contributions
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm leading-relaxed text-secondary"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              <span className={index % 2 !== 0 ? "md:text-left" : ""}>
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <TechBadge key={tech} name={tech} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
