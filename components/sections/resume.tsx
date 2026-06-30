"use client";

import { PERSONAL } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Download, FileText, ExternalLink } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="bg-surface py-section-sm lg:py-section">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <SectionHeading
            label="Resume"
            title="My Credentials"
            description="Download or view my complete professional resume."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 shadow-sm sm:p-12">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/[0.04]" />
            <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-accent/[0.03]" />

            <div className="relative flex flex-col items-center text-center">
              {/* Resume icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <FileText size={40} />
              </div>

              <h3 className="font-heading text-2xl font-bold text-dark">
                {PERSONAL.name}
              </h3>
              <p className="mt-1 text-base text-secondary">{PERSONAL.role}</p>
              <p className="mt-1 text-sm text-muted">{PERSONAL.location}</p>

              {/* Key highlights */}
              <div className="mt-6 grid w-full max-w-md grid-cols-3 gap-3">
                {[
                  { label: "Experience", value: "~1 Year" },
                  { label: "Education", value: "MCA" },
                  { label: "Test Cases", value: "200+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border p-3"
                  >
                    <span className="font-heading text-lg font-bold text-dark">
                      {item.value}
                    </span>
                    <span className="mt-0.5 block text-[10px] text-muted">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <MagneticButton>
                  <a
                    href={PERSONAL.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-xl bg-dark px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-dark/90 hover:shadow-lg"
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={PERSONAL.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-dark transition-all duration-200 hover:border-dark hover:shadow-md"
                  >
                    <ExternalLink size={16} />
                    View Resume
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
