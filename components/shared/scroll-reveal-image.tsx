"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScrollRevealImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
  priority?: boolean;
}

export function ScrollRevealImage({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio = "video",
  priority = false,
}: ScrollRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apple-like scroll zoom: Scales from 0.92 to 1.02
  const containerScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.95, 1.02, 0.98]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.05, 1.0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale: prefersReducedMotion ? 1 : containerScale,
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-hover shadow-lg transition-all duration-300 hover:border-accent/30",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Light gradient overlay sheet for high-end look */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#FAFAF8]/40 via-transparent to-transparent opacity-95" />

      <motion.div
        className="w-full h-full relative"
        style={{
          scale: prefersReducedMotion ? 1 : imageScale,
          y: prefersReducedMotion ? 0 : imageY,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="object-cover w-full h-full select-none"
        />
      </motion.div>
    </motion.div>
  );
}
