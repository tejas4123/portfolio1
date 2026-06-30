"use client";

import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollRevealImage } from "@/components/shared/scroll-reveal-image";
import { TechBadge } from "@/components/shared/tech-badge";
import { GridBackground } from "@/components/shared/grid-background";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollHighlightText } from "@/components/shared/scroll-highlight-text";
import { ABOUT, EDUCATION, EXPERIENCES, CERTIFICATES } from "@/lib/constants";
import { GraduationCap, Target, Lightbulb, BookOpen, Briefcase, Calendar, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const VALUES_ICONS = [Target, Lightbulb, BookOpen, Target];

export default function AboutPage() {
  return (
    <PageTransition className="pt-24 pb-16 relative overflow-hidden min-h-screen">
      {/* Soothing grid background */}
      <GridBackground />

      {/* Profile Section */}
      <section className="mx-auto max-w-6xl px-6 mb-16 relative z-10">
        <SectionHeading
          label="Profile"
          title="About & Experience"
          description="A detailed view of my career journey, testing philosophy, and quality engineering credentials."
          align="left"
        />

        {/* Story Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start mt-12">
          {/* Left: Avatar with Scroll Zoom */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollRevealImage
              src="/images/profile_avatar.png"
              alt="Vaishali Sharma QA Engineer illustration"
              width={600}
              height={600}
              aspectRatio="square"
              priority
            />
            
            <GlowCard className="border-accent/10 bg-surface/50" glowColor="rgba(37, 99, 235, 0.05)">
              <h3 className="font-heading text-base font-semibold text-dark">
                Testing Philosophy
              </h3>
              <blockquote className="mt-3 border-l border-accent pl-4 text-xs italic leading-relaxed text-secondary">
                &ldquo;{ABOUT.philosophy}&rdquo;
              </blockquote>
            </GlowCard>
          </div>

          {/* Right: Biography highlighted on scroll */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-sm sm:text-base md:text-lg">
              <h3 className="font-heading text-2xl font-bold text-dark text-glow-gradient">
                My Story & Approach
              </h3>
              <ScrollHighlightText text={ABOUT.story} className="leading-relaxed" />
              <ScrollHighlightText text={ABOUT.journey} className="leading-relaxed" />
              <ScrollHighlightText text={ABOUT.focus} className="leading-relaxed" />
            </div>

            {/* Core Values with Glow Cards */}
            <div className="border-t border-border pt-8">
              <h4 className="font-heading text-base font-semibold text-dark mb-4">
                Core Quality Values
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {ABOUT.values.map((value, i) => {
                  const Icon = VALUES_ICONS[i] || Target;
                  return (
                    <div
                      key={value}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 transition-colors duration-200 hover:border-accent/30"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon size={14} />
                      </div>
                      <span className="text-xs font-semibold text-dark">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-y border-border bg-surface/40 py-16 mb-16 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            label="History"
            title="Work Experience"
            description="Chronological breakdown of QA engineering roles and testing impact."
            align="left"
          />

          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute top-0 left-6 hidden h-full w-px bg-border md:left-1/2 md:block" />

            {EXPERIENCES.map((exp, index) => (
              <div key={exp.company} className="relative mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute top-8 left-6 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent md:left-1/2 md:block shadow-[0_0_8px_rgba(37,99,235,0.4)]" />

                <div className="md:grid md:grid-cols-2 md:gap-12">
                  {/* Left: Company details & metrics */}
                  <div className={cn("mb-6 md:mb-0", index % 2 === 0 ? "md:text-right" : "md:order-2")}>
                    <div className={cn("max-w-md", index % 2 === 0 ? "md:ml-auto" : "")}>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-hover border border-border px-3 py-1 text-xs font-medium text-secondary">
                        <Briefcase size={12} className="text-accent" />
                        {exp.role}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-dark">
                        {exp.company}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-secondary justify-start md:justify-end">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Experience metrics */}
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {exp.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-xl border border-border bg-surface p-3 text-center shadow-sm"
                          >
                            <span className="font-heading text-lg font-bold text-dark">
                              {metric.value}
                            </span>
                            <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-secondary leading-tight">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Contributions list */}
                  <div className={cn(index % 2 === 0 ? "" : "md:order-1")}>
                    <div className={cn("max-w-md", index % 2 !== 0 ? "md:ml-auto" : "")}>
                      <GlowCard className="p-6" glowColor="rgba(37, 99, 235, 0.04)">
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                          Key Contributions
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-xs leading-relaxed text-secondary"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_4px_rgba(37,99,235,0.4)]" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Badges */}
                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <TechBadge key={tech} name={tech} />
                          ))}
                        </div>
                      </GlowCard>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials (Education & Certificates) */}
      <section className="mx-auto max-w-6xl px-6 relative z-10 grid gap-12 md:grid-cols-2">
        {/* Education Column */}
        <div className="space-y-6">
          <SectionHeading
            label="Credentials"
            title="Education"
            align="left"
            className="mb-6!"
          />

          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <GlowCard key={edu.degree} className="p-6" glowColor="rgba(37, 99, 235, 0.03)">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hover border border-border text-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-secondary">{edu.duration}</span>
                    <h3 className="font-heading text-lg font-bold text-dark mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-secondary">{edu.institution}</p>
                    <p className="mt-2 text-xs text-secondary font-semibold">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Certificates Column */}
        <div className="space-y-6">
          <SectionHeading
            label="Verification"
            title="Certificates"
            align="left"
            className="mb-6!"
          />

          <div className="space-y-4">
            {CERTIFICATES.map((cert) => (
              <GlowCard key={cert.title} className="p-6" glowColor="rgba(37, 99, 235, 0.03)">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hover border border-border text-accent">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-secondary">{cert.date}</span>
                    <h3 className="font-heading text-base font-bold text-dark mt-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-secondary mt-0.5">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-[10px] text-muted font-mono mt-1">
                        ID: {cert.credentialId}
                      </p>
                    )}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-accent font-semibold hover:underline mt-2"
                      >
                        Verify Credential
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
