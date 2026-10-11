"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
};

export function CountUp({ value, decimals = 0, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value.toFixed(decimals) + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finalValue = value.toFixed(decimals) + suffix;

    function run() {
      if (reduceMotion) {
        setDisplay(finalValue);
        return;
      }

      let start: number | null = null;
      const duration = 1600;

      function step(timestamp: number) {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay((value * eased).toFixed(decimals) + suffix);
        if (progress < 1) requestAnimationFrame(step);
        else setDisplay(finalValue);
      }

      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
