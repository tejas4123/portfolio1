"use client";

import Link from "next/link";
import { PageTransition } from "@/components/shared/page-transition";
import { Hero } from "@/components/sections/hero";
import { ScrollRevealImage } from "@/components/shared/scroll-reveal-image";
import { FadeIn } from "@/components/animations/fade-in";
import { GlowCard } from "@/components/shared/glow-card";
import { GridBackground } from "@/components/shared/grid-background";
import { ScrollHighlightText } from "@/components/shared/scroll-highlight-text";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home({ onTabChange }: { onTabChange?: (tab: string) => void }) {
  return (
    <PageTransition className="relative overflow-hidden min-h-screen">
      {/* Background grids */}
      <GridBackground />

      {/* Hero statistics */}
      <Hero onTabChange={onTabChange} />

      {/* Signature QA Quality Sign-off / Showcase Section */}
      <section className="py-20 border-y border-border bg-surface/30 relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left text section (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent" />
                QA CERTIFICATION SIGN-OFF
              </span>
              
              <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl text-glow-gradient">
                Ensuring Build Stability across Every Deployment.
              </h2>
              
              <ScrollHighlightText
                text="As a QA Engineer, I treat software quality as a product differentiator. Every test case I write and automation script I deploy acts as a shield protecting the production environment."
                className="text-base text-secondary leading-relaxed"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Manual & Automated API Tests",
                  "Over 90% Test Suite Coverage",
                  "Reduced regression test runtime by 25-30%",
                  "Defect life cycle end-to-end tracking in JIRA",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-secondary font-medium">
                    <CheckCircle2 size={16} className="text-success shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => onTabChange?.("Work")}
                  className="group inline-flex items-center gap-2 rounded-xl bg-dark text-white px-5 py-3 text-xs font-bold shadow-md hover:bg-dark/90"
                >
                  Explore Work
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                
                <button
                  onClick={() => onTabChange?.("Workflow")}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-xs font-bold text-dark hover:bg-hover"
                >
                  View QA Workflow
                </button>
              </div>
            </div>

            {/* Right: Mockup Teaser Image (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollRevealImage 
                src="/images/dashboard_mockup.png"
                alt="QA Dashboard TestPulse mockup showing 95% pass rate"
                width={500}
                height={400}
                aspectRatio="video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Teaser */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <span className="font-mono text-xs text-secondary uppercase tracking-widest block mb-4">
              ABOUT VAISHALI
            </span>
            
            <p className="font-heading text-2xl md:text-3xl text-glow-gradient max-w-3xl mx-auto font-medium leading-relaxed">
              &ldquo;Quality is not an act, it is a habit. I design comprehensive validation pipelines to find defects early and build confidence before releases.&rdquo;
            </p>
            
            <div className="mt-8">
              <button
                onClick={() => onTabChange?.("About")}
                className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline uppercase tracking-wider"
              >
                Read Career Journey & Education
                <ArrowRight size={14} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
