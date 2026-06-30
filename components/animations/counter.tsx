"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface UseCounterOptions {
  end: number;
  duration?: number;
  once?: boolean;
}

export function useCounter({ end, duration = 2000, once = true }: UseCounterOptions) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView) return;
    if (once && hasAnimated.current) return;

    if (prefersReducedMotion) {
      setCount(end);
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInView, end, duration, once, prefersReducedMotion]);

  return { count, ref };
}

// Counter display component
interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function Counter({
  end,
  suffix = "",
  label,
  duration = 2000,
  className,
}: CounterProps) {
  const { count, ref } = useCounter({ end, duration });

  return (
    <div ref={ref} className={className}>
      <span className="font-heading text-4xl font-bold tracking-tight text-dark md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-1 block text-sm text-secondary">{label}</span>
    </div>
  );
}
