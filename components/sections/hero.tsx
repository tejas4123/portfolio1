"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { PERSONAL, HERO_STATS } from "@/lib/constants";
import { TextReveal } from "@/components/animations/text-reveal";
import { useCounter } from "@/components/animations/counter";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { GridBackground } from "@/components/shared/grid-background";
import { GlowCard } from "@/components/shared/glow-card";
import Image from "next/image";

function HeroStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCounter({ end: value, duration: 2000 });

  return (
    <div ref={ref} className="text-center">
      <span className="font-heading text-2xl font-bold tracking-tight text-dark md:text-3xl">
        {count}
        {suffix}
      </span>
      <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-secondary">
        {label}
      </span>
    </div>
  );
}

export function Hero({ onTabChange }: { onTabChange?: (tab: string) => void }) {
  const prefersReducedMotion = useReducedMotion();

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Soothing grid background */}
      <GridBackground />

      {/* Content layout - 2 Columns on desktop */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Heading and Stats (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge - Correct Spelling */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-secondary shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {PERSONAL.availability}
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
              <TextReveal text="Testing Quality." delay={0.4} />
              <br />
              <span className="text-accent-gradient inline-block">
                <TextReveal text="Building Confidence." delay={0.7} />
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-secondary sm:text-base md:text-lg"
            >
              {PERSONAL.summary.split(".").slice(0, 2).join(".")}.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              
                {/* <motion.a
                  href={PERSONAL.resumeUrl}
                  download
                  whileHover="hover"
                  whileTap="tap"
                  variants={{
                    hover: { scale: 1.02 },
                    tap: { scale: 0.98 },
                  }}
                  className="group relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-dark text-white px-5 py-3 text-xs font-bold shadow-md transition-all hover:bg-dark/90 hover:shadow-lg"
                >
                  <motion.div
                    variants={{
                      hover: { y: 2 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Download size={14} />
                  </motion.div>
                  <span className="relative z-10">Download Resume</span>
                  
                  {/* Shine effect */}
                  {/* <motion.div 
                    className="absolute inset-0 z-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ left: "-100%" }}
                    variants={{
                      hover: { left: "200%" }
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                </motion.a>
                */}

              
                <motion.button
                  onClick={() => onTabChange?.("Contact")}
                  whileHover="hover"
                  whileTap="tap"
                  variants={{
                    hover: { scale: 1.02 },
                    tap: { scale: 0.98 },
                  }}
                  className="group relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-dark text-white px-5 py-3 text-xs font-bold shadow-md transition-all hover:bg-dark/90 hover:shadow-lg"
                >
                  <motion.div
                    variants={{
                      hover: { rotate: 12, scale: 1.1 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail size={14} />
                  </motion.div>
                  <span className="relative z-10">Get in Touch</span>
                  
                  {/* Subtle shine effect for secondary button */}
                  <motion.div 
                    className="absolute inset-0 z-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ left: "-100%" }}
                    variants={{
                      hover: { left: "200%" }
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                </motion.button>
              
            </motion.div>

            {/* Stats GlowCard */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-12 w-full max-w-xl"
            >
              <GlowCard className="p-4 md:p-6" glowColor="rgba(197, 168, 128, 0.08)">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2">
                  {HERO_STATS.map((stat) => (
                    <HeroStat
                      key={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>

          {/* Right Column: Hero Vector (5 cols) */}
          <div className="lg:col-span-5 w-full flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full aspect-square"
              >
                <Image
                  src="/images/sdet_hero_illustration.png"
                  alt="SDET QA Automation Engineering Illustration"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl mix-blend-multiply select-none"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bounce scroll down button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted hover:text-dark transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
