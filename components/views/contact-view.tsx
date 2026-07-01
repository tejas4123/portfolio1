"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { GridBackground } from "@/components/shared/grid-background";
import { GlowCard } from "@/components/shared/glow-card";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Link2,
  Code2,
  ArrowUpRight,
  CheckCircle2,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  LinkedIn: Link2,
  GitHub: Code2,
  Email: Mail,
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(
      formState.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Hi Vaishali,\n\n${formState.message}\n\nBest,\n${formState.name}\n${formState.email}`
    )}`;
    window.open(mailtoLink, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <PageTransition className="pt-24 pb-16 relative overflow-hidden min-h-screen">
      {/* Background grid */}
      <GridBackground />

      <section className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading
          label="Connect"
          title="Get in Touch"
          description="Looking for an automation engineer, manual tester, or SDET? Reach out today."
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-5 items-start mt-12">
          {/* Left: Info details (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability GlowCard - Correct Spelling */}
            <GlowCard className="border-accent/15 bg-surface/50" glowColor="rgba(34, 197, 94, 0.05)">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </span>
                <span className="text-sm font-semibold text-dark font-heading">
                  {PERSONAL.availability}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-secondary">
                Actively looking for QA Engineer, Backend QA, or SDET opportunities. Open to full-time remote or hybrid positions.
              </p>
            </GlowCard>

            {/* Direct Coordinates */}
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-dark/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-secondary">Email</p>
                  <p className="text-sm font-semibold text-dark">{PERSONAL.email}</p>
                </div>
              </a>

              

              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-secondary">Location</p>
                  <p className="text-sm font-semibold text-dark">{PERSONAL.location}</p>
                </div>
              </div>
            </div>

            {/* Social handles list */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.filter((l) => l.label !== "Email").map((link) => {
                const Icon = iconMap[link.label];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5 text-xs font-semibold text-secondary transition-all duration-200 hover:border-dark/20 hover:text-dark"
                  >
                    {Icon && <Icon size={14} />}
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <GlowCard className="p-6 sm:p-8" glowColor="rgba(37, 99, 235, 0.04)">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-secondary">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-dark focus:border-accent focus:outline-none transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-secondary">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-dark focus:border-accent focus:outline-none transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-secondary">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-dark focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="Inquiry subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-dark focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="Tell me about the opportunity details..."
                  />
                </div>

                <div className="pt-2">
                  
                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className={cn(
                        "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] sm:w-auto",
                        isSubmitted ? "bg-success text-white" : "bg-dark text-white hover:bg-dark/90"
                      )}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle2 size={14} />
                          Opened mail client!
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </button>
                  
                </div>
              </form>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Embedded Resume Details */}
      {/* <section className="mx-auto max-w-4xl px-6 mt-16 pt-16 border-t border-border relative z-10">
        <GlowCard className="p-8 text-center flex flex-col items-center" glowColor="rgba(37, 99, 235, 0.04)">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <FileText size={28} />
          </div>

          <h3 className="font-heading text-xl font-bold text-dark text-glow-gradient">
            Complete Curriculum Vitae
          </h3>
          <p className="mt-2 text-xs text-secondary max-w-md">
            Review detailed execution metrics, project summaries, and technical certifications on my PDF resume.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <motion.button>
              <a
                href={PERSONAL.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-dark text-white px-4 py-2.5 text-xs font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] sm:w-auto"
              >
                <Download size={14} />
                Download PDF
              </a>
            </motion.button>

            <motion.button>
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-bold text-dark transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] sm:w-auto"
              >
                <ExternalLink size={14} />
                View PDF
              </a>
            </motion.button>
          </div>
        </GlowCard>
      </section> */}
    </PageTransition>
  );
}
