"use client";

import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-background">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-mesh opacity-[0.4]" />

      {/* Floating Radial spotlight glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-80" />

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 right-0 left-0 h-[300px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-accent-light/5 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
  );
}
