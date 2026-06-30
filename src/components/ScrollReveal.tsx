"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "sr-left"
      : variant === "right"
        ? "sr-right"
        : variant === "scale"
          ? "sr-scale"
          : "sr-hidden";

  const delayClass = delay > 0 ? `sr-d${delay}` : "";

  return (
    <div ref={ref} className={`${variantClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
