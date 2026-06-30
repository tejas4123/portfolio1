"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollHighlightTextProps {
  text: string;
  className?: string;
}

export function ScrollHighlightText({ text, className }: ScrollHighlightTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [15, 0]);

  if (prefersReducedMotion) {
    return <p className={cn("text-primary", className)}>{text}</p>;
  }

  return (
    <motion.p
      ref={containerRef}
      style={{ opacity, y }}
      className={cn("text-primary transition-all duration-300 ease-out", className)}
    >
      {text}
    </motion.p>
  );
}
