"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Box, FileText, UserCheck, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Box,
    title: "3D Renders First",
    subtitle: "3D PRE-VISUALIZATION",
    desc: "Visualize your entire home in 3D photorealistic detail before any physical work begins.",
    sketch: "/images/sketches/sketch-01-living-room.png",
  },
  {
    number: "02",
    Icon: FileText,
    title: "Transparent Costing",
    subtitle: "FIXED ITEMIZED BOQ",
    desc: "One comprehensive, itemized Bill of Quantities upfront with fixed material rates. Zero surprise bills.",
    sketch: "/images/sketches/sketch-02-blueprint.png",
  },
  {
    number: "03",
    Icon: UserCheck,
    title: "One Contact Lead",
    subtitle: "SINGLE ACCOUNTABILITY",
    desc: "A single accountable project lead coordinates civil work, carpentry, electrical & final finishing.",
    sketch: "/images/sketches/sketch-03-team.png",
  },
  {
    number: "04",
    Icon: Key,
    title: "Supervised Handover",
    subtitle: "CLEANED & INSPECTED",
    desc: "Regular site updates, multi-tier quality checks, and a deep-cleaned home ready for immediate living.",
    sketch: "/images/sketches/sketch-04-furniture.png",
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

      // Start highlighting when top of section enters 80% down viewport
      const startPoint = windowHeight * 0.8;
      const endPoint = -rect.height * 0.2;

      const progress = (startPoint - rect.top) / (startPoint - endPoint);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(clampedProgress);

      const currentStep = Math.min(
        Math.floor(clampedProgress * steps.length),
        steps.length - 1
      );
      setActiveIndex(Math.max(0, currentStep));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waveHighlightOffset = Math.max(15, Math.round(scrollProgress * 100));

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF7F2] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 text-[#1C2630] border-y border-[#E8E2D8] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-2.5 text-center mx-auto">
          {/* Top Flourish Label */}
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
            <span className="h-px w-10 bg-[#a46f47]/40" />
            OUR PROCESS
            <span className="h-px w-10 bg-[#a46f47]/40" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl font-normal leading-tight text-[#0F1A24] sm:text-4xl lg:text-5xl">
            Thoughtful by Design. Delivered with Precision.
          </h2>

          {/* Diamond Accent Divider */}
          <div className="flex items-center justify-center gap-3 text-[#a46f47]/50 my-1">
            <span className="h-px w-12 bg-[#a46f47]/30" />
            <span className="text-xs font-serif rotate-45 border border-[#a46f47]/50 h-2 w-2 block" />
            <span className="h-px w-12 bg-[#a46f47]/30" />
          </div>

          {/* Subtitle */}
          <p className="text-sm leading-relaxed text-[#6B7280] sm:text-base max-w-xl mx-auto">
            A seamless design journey crafted around clarity, collaboration and uncompromised quality.
          </p>
        </div>

        {/* Wavy Timeline Section */}
        <div className="relative mt-16 sm:mt-24">
          {/* Desktop SVG Wave Path & Watermark Numbers */}
          <div className="relative hidden lg:block h-36">
            {/* Watermark Giant Numbers Row */}
            <div className="grid grid-cols-4 gap-6 absolute inset-x-0 top-0 z-0 pointer-events-none text-center">
              {steps.map(({ number }, idx) => {
                const isActive = idx <= activeIndex;
                return (
                  <span
                    key={number}
                    className={`font-serif text-7xl font-light transition-colors duration-500 ${
                      isActive ? "text-[#a46f47]/40" : "text-[#a46f47]/15"
                    }`}
                  >
                    {number}
                  </span>
                );
              })}
            </div>

            {/* Continuous SVG Wave Line */}
            <svg
              className="absolute left-0 top-16 w-full h-20 pointer-events-none z-10 overflow-visible"
              viewBox="0 0 1200 100"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Left End Flourish Dot */}
              <circle cx="30" cy="50" r="3.5" fill="#a46f47" opacity="0.6" />
              <line x1="30" y1="50" x2="50" y2="50" stroke="#a46f47" strokeWidth="1.5" opacity="0.6" />

              {/* Right End Flourish Dot */}
              <circle cx="1170" cy="50" r="3.5" fill="#a46f47" opacity="0.6" />
              <line x1="1150" y1="50" x2="1170" y2="50" stroke="#a46f47" strokeWidth="1.5" opacity="0.6" />

              {/* Base Wave Curve */}
              <path
                d="M 50,50 C 180,15 320,85 450,50 C 580,15 720,85 850,50 C 980,15 1100,50 1150,50"
                stroke="#a46f47"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />

              {/* Scroll-Driven Dynamic Glow Wave Line */}
              <path
                d="M 50,50 C 180,15 320,85 450,50 C 580,15 720,85 850,50 C 980,15 1100,50 1150,50"
                stroke="url(#ref-wave-gold-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="ref-wave-gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a46f47" stopOpacity="1" />
                  <stop offset={`${waveHighlightOffset}%`} stopColor="#a46f47" stopOpacity="1" />
                  <stop
                    offset={`${Math.min(100, waveHighlightOffset + 8)}%`}
                    stopColor="#a46f47"
                    stopOpacity="0.2"
                  />
                  <stop offset="100%" stopColor="#a46f47" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* 4 Circular Nodes directly ON the Wave Line */}
            <div className="grid grid-cols-4 gap-6 relative z-20 items-center h-full pt-6">
              {steps.map(({ Icon }, idx) => {
                const isActive = idx <= activeIndex;
                const isCurrent = idx === activeIndex;

                return (
                  <div key={idx} className="flex justify-center">
                    <div
                      className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                        isCurrent
                          ? "border-[#a46f47] bg-[#FAF7F2] text-[#a46f47] shadow-xl scale-110 ring-4 ring-[#a46f47]/20"
                          : isActive
                          ? "border-[#a46f47] bg-[#FAF7F2] text-[#a46f47] shadow-md"
                          : "border-[#a46f47]/40 bg-[#FAF7F2] text-[#a46f47]/60"
                      }`}
                    >
                      {/* Active Ping Effect */}
                      {isCurrent && (
                        <span className="absolute inset-0 rounded-full bg-[#a46f47]/20 animate-ping pointer-events-none" />
                      )}
                      <Icon className="h-6 w-6 stroke-[1.5]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4-Column Content Grid with Vertical Dividers & Bottom Architectural Sketches */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5DFD5] border-t lg:border-t-0 border-[#E5DFD5] mt-6 lg:mt-4 pt-8 lg:pt-2">
            {steps.map(({ title, subtitle, desc, sketch }, idx) => {
              const isActive = idx <= activeIndex;

              return (
                <div
                  key={title}
                  className="flex flex-col justify-between text-center px-4 py-6 lg:py-4 transition-opacity duration-300"
                >
                  {/* Text Content */}
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#0F1A24]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold tracking-widest text-[#a46f47] uppercase">
                      {subtitle}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[#6B7280] max-w-xs mx-auto">
                      {desc}
                    </p>
                  </div>

                  {/* Architectural Line-Art Sketch Image at Bottom */}
                  <div className="relative mt-8 h-44 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={sketch}
                      alt={title}
                      fill
                      className={`object-contain object-bottom transition-all duration-500 ${
                        isActive ? "opacity-100 scale-105" : "opacity-85 grayscale-[20%]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Brand Arch Emblem Divider */}
        <div className="mt-16 sm:mt-20 flex items-center justify-center gap-4 text-[#a46f47]">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#a46f47]/30 to-[#a46f47]/30" />

          {/* Arch Icon Logo Lockup */}
          <div className="flex h-10 w-7 items-center justify-center rounded-t-full border-2 border-[#a46f47] p-1 shadow-sm bg-[#FAF7F2]">
            <div className="flex flex-col items-center gap-0.5">
              <div className="h-2 w-2 rounded-sm bg-[#a46f47]" />
              <div className="flex gap-0.5">
                <div className="h-1 w-1 bg-[#a46f47]" />
                <div className="h-1 w-1 bg-[#a46f47]" />
              </div>
            </div>
          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-[#a46f47]/30 via-[#a46f47]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
