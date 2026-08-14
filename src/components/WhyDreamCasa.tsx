"use client";

import { useState, useEffect, useRef } from "react";
import {
  Compass,
  Receipt,
  UserCheck,
  KeyRound,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Compass,
    title: "3D Renders First",
    subtitle: "3D Pre-Visualization",
    desc: "Visualize your entire home in 3D photorealistic detail before any physical site work begins.",
    tag: "3D Design Fidelity",
    position: "top",
  },
  {
    number: "02",
    Icon: Receipt,
    title: "Transparent Costing",
    subtitle: "Fixed Itemized BOQ",
    desc: "One comprehensive, itemized Bill of Quantities upfront with fixed material rates. Zero surprise bills.",
    tag: "Fixed BOQ Lock",
    position: "bottom",
  },
  {
    number: "03",
    Icon: UserCheck,
    title: "One Contact Lead",
    subtitle: "Single Accountability",
    desc: "A single accountable project lead coordinates civil work, carpentry, electrical & final finishing.",
    tag: "Single Project Lead",
    position: "top",
  },
  {
    number: "04",
    Icon: KeyRound,
    title: "Supervised Handover",
    subtitle: "Cleaned & Inspected",
    desc: "Regular site updates, multi-tier quality checks, and a deep-cleaned home ready for immediate living.",
    tag: "Turnkey Key Handover",
    position: "bottom",
  },
];

export default function WhyDreamCasa() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start highlighting when top of section reaches 75% down viewport
      const startPoint = windowHeight * 0.75;
      const endPoint = -rect.height * 0.25;

      const progress = (startPoint - rect.top) / (startPoint - endPoint);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(clampedProgress);

      // Determine active step index (0, 1, 2, 3)
      const currentStep = Math.min(
        Math.floor(clampedProgress * steps.length),
        steps.length - 1
      );
      setActiveIndex(Math.max(0, currentStep));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate SVG gradient highlight offset based on smooth scroll progress
  const waveHighlightOffset = Math.max(12, Math.round(scrollProgress * 100));

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream py-24 sm:py-32 px-6 sm:px-10 lg:px-16 text-ink border-y border-ink/10 overflow-hidden"
    >
      {/* Ambient Decorative Gold Glows */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-3.5 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-gold uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Executional Wave Journey
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            The Dream Casa <span className="italic text-gold">Wave Path</span>
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base max-w-xl">
            Scroll down to watch our 4-stage execution journey illuminate step by step.
          </p>
        </div>

        {/* Desktop Wave Roadmap Container */}
        <div className="relative mt-24 mb-16 hidden lg:block h-[500px]">
          {/* Continuous Gold Sine Wave SVG */}
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-64 pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1200 300"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base Guide Curve */}
            <path
              d="M 50,150 C 180,30 320,270 450,150 C 580,30 720,270 850,150 C 980,30 1100,150 1150,150"
              stroke="#a46f47"
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeOpacity="0.25"
            />

            {/* Dynamic Scroll-Driven Wave Glow Line */}
            <path
              d="M 50,150 C 180,30 320,270 450,150 C 580,30 720,270 850,150 C 980,30 1100,150 1150,150"
              stroke="url(#scroll-gold-gradient)"
              strokeWidth="4.5"
              strokeLinecap="round"
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="scroll-gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a46f47" stopOpacity="1" />
                <stop offset={`${waveHighlightOffset}%`} stopColor="#ad8a55" stopOpacity="1" />
                <stop
                  offset={`${Math.min(100, waveHighlightOffset + 8)}%`}
                  stopColor="#a46f47"
                  stopOpacity="0.15"
                />
                <stop offset="100%" stopColor="#a46f47" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {/* 4 Cards Positioned Above and Below the Wave Node */}
          <div className="grid grid-cols-4 gap-6 relative z-10 items-center h-full">
            {steps.map(({ number, Icon, title, subtitle, desc, tag, position }, idx) => {
              const isActive = idx <= activeIndex;
              const isCurrent = idx === activeIndex;

              return (
                <div
                  key={title}
                  className="relative flex flex-col items-center text-center h-full justify-center"
                >
                  {/* Step Card (Top Position) */}
                  {position === "top" && (
                    <div
                      className={`group absolute bottom-1/2 mb-10 w-full rounded-2xl border p-5 shadow-md transition-all duration-500 ${
                        isCurrent
                          ? "border-gold bg-card shadow-2xl -translate-y-2 ring-2 ring-gold/20"
                          : isActive
                          ? "border-gold/50 bg-card shadow-lg"
                          : "border-ink/10 bg-card/80 opacity-60"
                      }`}
                    >
                      {/* Top Gold Hairline */}
                      <div
                        className={`absolute top-0 left-0 h-1 bg-gold transition-all duration-500 ${
                          isActive ? "w-full" : "w-10"
                        }`}
                      />

                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm ${
                          isCurrent
                            ? "bg-gold text-white scale-110 shadow-md"
                            : isActive
                            ? "bg-gold/80 text-white"
                            : "border border-gold/40 bg-cream text-gold"
                        }`}
                      >
                        Step {number}
                      </span>

                      <h3
                        className={`font-serif text-lg font-bold transition-colors mt-2 ${
                          isActive ? "text-gold" : "text-ink"
                        }`}
                      >
                        {title}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-semibold tracking-wide text-gold uppercase">
                        {subtitle}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {desc}
                      </p>

                      <div
                        className={`mt-4 flex items-center justify-center gap-1.5 border-t pt-3 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                          isActive ? "border-gold/30 text-gold" : "border-ink/10 text-ink/60"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        {tag}
                      </div>

                      {/* Pointer Arrow */}
                      <div
                        className={`absolute -bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r bg-card transition-colors ${
                          isCurrent ? "border-gold" : isActive ? "border-gold/50" : "border-ink/10"
                        }`}
                      />
                    </div>
                  )}

                  {/* Single Node Icon Circle directly on Wave Curve */}
                  <div
                    className={`relative z-20 flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      isCurrent
                        ? "border-gold bg-gold text-white shadow-2xl scale-125 ring-4 ring-gold/30"
                        : isActive
                        ? "border-gold bg-gold text-white shadow-lg scale-110"
                        : "border-gold/40 bg-cream text-gold shadow-md"
                    }`}
                  >
                    {/* Glowing Ping Ring on Active Scroll Node */}
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping pointer-events-none" />
                    )}

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full shadow-inner transition-colors ${
                        isActive ? "bg-white text-gold" : "bg-gold text-white"
                      }`}
                    >
                      <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                    </div>

                    <span
                      className={`absolute -bottom-6 text-[11px] font-bold tracking-wider uppercase transition-colors ${
                        isActive ? "text-gold" : "text-ink/60"
                      }`}
                    >
                      0{number}
                    </span>
                  </div>

                  {/* Step Card (Bottom Position) */}
                  {position === "bottom" && (
                    <div
                      className={`group absolute top-1/2 mt-10 w-full rounded-2xl border p-5 shadow-md transition-all duration-500 ${
                        isCurrent
                          ? "border-gold bg-card shadow-2xl -translate-y-2 ring-2 ring-gold/20"
                          : isActive
                          ? "border-gold/50 bg-card shadow-lg"
                          : "border-ink/10 bg-card/80 opacity-60"
                      }`}
                    >
                      {/* Pointer Arrow */}
                      <div
                        className={`absolute -top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l border-t bg-card transition-colors ${
                          isCurrent ? "border-gold" : isActive ? "border-gold/50" : "border-ink/10"
                        }`}
                      />

                      {/* Top Gold Hairline */}
                      <div
                        className={`absolute top-0 left-0 h-1 bg-gold transition-all duration-500 ${
                          isActive ? "w-full" : "w-10"
                        }`}
                      />

                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm ${
                          isCurrent
                            ? "bg-gold text-white scale-110 shadow-md"
                            : isActive
                            ? "bg-gold/80 text-white"
                            : "border border-gold/40 bg-cream text-gold"
                        }`}
                      >
                        Step {number}
                      </span>

                      <h3
                        className={`font-serif text-lg font-bold transition-colors mt-2 ${
                          isActive ? "text-gold" : "text-ink"
                        }`}
                      >
                        {title}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-semibold tracking-wide text-gold uppercase">
                        {subtitle}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {desc}
                      </p>

                      <div
                        className={`mt-4 flex items-center justify-center gap-1.5 border-t pt-3 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                          isActive ? "border-gold/30 text-gold" : "border-ink/10 text-ink/60"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        {tag}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Wave Roadmap */}
        <div className="relative mt-12 block lg:hidden">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold/20 via-gold to-gold/20" />
          <div className="flex flex-col gap-8">
            {steps.map(({ number, Icon, title, subtitle, desc, tag }, idx) => {
              const isActive = idx <= activeIndex;
              return (
                <div key={title} className="relative flex items-start gap-5 pl-14">
                  <div
                    className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                      isActive
                        ? "border-gold bg-gold text-white shadow-lg scale-105"
                        : "border-gold/40 bg-cream text-gold shadow-sm"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`w-full rounded-xl border p-5 shadow-sm transition-all ${
                      isActive ? "border-gold bg-card shadow-md" : "border-ink/10 bg-card/80 opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-ink/10 pb-2.5">
                      <span className="font-serif text-xl font-bold text-gold">
                        Step {number}
                      </span>
                      <span className="text-[10px] font-semibold tracking-widest text-gold uppercase">
                        {subtitle}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-ink mt-3">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {desc}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 border-t border-ink/10 pt-2 text-[10px] font-semibold tracking-wider text-gold uppercase">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                      {tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
