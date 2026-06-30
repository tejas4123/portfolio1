"use client";

import { useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(37, 99, 235, 0.06)",
}: GlowCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setCoords({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 transition-all duration-300 backdrop-blur-md shadow-sm",
        className
      )}
    >
      {/* Glow effect overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(197, 168, 128, 0.08), transparent 80%)`,
        }}
      />

      {/* Glow border overlay: Soft dark/accent border for light themes */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(197, 168, 128, 0.4), transparent 80%)`,
          maskImage: "linear-gradient(white, white)",
          WebkitMaskImage: "linear-gradient(white, white)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
        }}
      />

      {/* Internal Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
