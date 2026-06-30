"use client";

import { ABOUT, EDUCATION } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { GraduationCap, Target, Lightbulb, BookOpen } from "lucide-react";

const VALUES_ICONS = [Target, Lightbulb, BookOpen, Target];

export function About() {
  return (
    <section id="about" className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="About Me"
            title="Quality-Driven Engineer"
            description="Dedicated to ensuring every release meets the highest standards of reliability and performance."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Story */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-dark">
                  My Story
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {ABOUT.story}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-dark">
                  The Journey
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {ABOUT.journey}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-dark">
                  Current Focus
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {ABOUT.focus}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Philosophy, Values, Education */}
          <div className="space-y-6">
            <FadeIn delay={0.2} direction="right">
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-6">
                <h3 className="font-heading text-lg font-semibold text-dark">
                  Testing Philosophy
                </h3>
                <blockquote className="mt-3 border-l-2 border-accent pl-4 text-sm italic leading-relaxed text-secondary">
                  &ldquo;{ABOUT.philosophy}&rdquo;
                </blockquote>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="right">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-dark">
                  Core Values
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {ABOUT.values.map((value, i) => {
                    const Icon = VALUES_ICONS[i];
                    return (
                      <div
                        key={value}
                        className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors duration-200 hover:border-accent/30 hover:bg-hover"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-medium text-dark">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="right">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-lg font-semibold text-dark">
                  Education
                </h3>
                <div className="space-y-4">
                  {EDUCATION.map((edu) => (
                    <div
                      key={edu.degree}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-hover text-secondary">
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-dark">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-secondary">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-muted">
                          {edu.duration} · CGPA: {edu.cgpa}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
