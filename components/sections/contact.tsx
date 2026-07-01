"use client";

import { useState } from "react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  Link2,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  LinkedIn: Link2,
  GitHub: Code2,
  Email: Mail,
};

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
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
    <section id="contact" className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            label="Get in Touch"
            title="Let's Connect"
            description="Interested in working together? I'd love to hear from you."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.1} direction="left">
              <div className="space-y-6">
                {/* Availability */}
                <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                    </span>
                    <span className="text-sm font-medium text-dark">
                      {PERSONAL.availability}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-secondary">
                    Currently looking for QA Engineer and SDET roles. Open to
                    full-time positions and contract opportunities.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-dark hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Email</p>
                      <p className="text-sm font-medium text-dark">
                        {PERSONAL.email}
                      </p>
                    </div>
                  </a>


                  <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p className="text-sm font-medium text-dark">
                        {PERSONAL.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(
                    (link) => {
                      const Icon = iconMap[link.label];
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-secondary transition-all duration-200 hover:border-dark hover:text-dark"
                          aria-label={link.label}
                        >
                          {Icon && <Icon size={16} />}
                          {link.label}
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2} direction="right">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-dark"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          name: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-dark placeholder:text-muted transition-colors duration-200 focus:border-accent focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-dark"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          email: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-dark placeholder:text-muted transition-colors duration-200 focus:border-accent focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-sm font-medium text-dark"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState((s) => ({
                        ...s,
                        subject: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-dark placeholder:text-muted transition-colors duration-200 focus:border-accent focus:outline-none"
                    placeholder="Job opportunity, collaboration, etc."
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-dark"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({
                        ...s,
                        message: e.target.value,
                      }))
                    }
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-dark placeholder:text-muted transition-colors duration-200 focus:border-accent focus:outline-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                <div className="mt-6">

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 sm:w-auto",
                      isSubmitted
                        ? "bg-success text-white"
                        : "bg-dark text-white hover:bg-dark/90 hover:shadow-lg"
                    )}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 size={16} />
                        Email Client Opened!
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
