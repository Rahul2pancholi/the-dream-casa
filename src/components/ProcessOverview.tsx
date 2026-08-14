"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Home, UserCheck, FileText, Ruler, Eye, Lightbulb, Hammer, Sparkles, CheckCircle2, Key } from "lucide-react";

const phases = [
  {
    number: "01",
    id: "discover",
    title: "Discover",
    subtitle: "LIFESTYLE & SITE AUDIT",
    mainHeader: "Discover: Lifestyle & Site Audit",
    desc: "We begin by understanding how you live, what you love and what truly matters. Through detailed discussion and on-site evaluation, we ensure every decision is rooted in clarity.",
    deliverables: [
      { text: "On-site spatial audit & laser measurements", Icon: Home },
      { text: "Client lifestyle & storage requirement mapping", Icon: UserCheck },
      { text: "Initial budget scope & timeline alignment", Icon: FileText },
    ],
    output: "Scope Blueprint & Briefing Document",
    image: "/images/projects/living-kitchen-01.jpg",
  },
  {
    number: "02",
    id: "define",
    title: "Define",
    subtitle: "FIXED ITEMIZED BOQ",
    mainHeader: "Define: Fixed Itemized BOQ",
    desc: "Spatial layouts, material choices, and a 100% fixed Bill of Quantities are locked upfront. No unexpected bills or surprise costs during execution.",
    deliverables: [
      { text: "Practical 2D architectural floor plan options", Icon: Ruler },
      { text: "Curated material, wood & fabric samples", Icon: FileText },
      { text: "Fixed itemized BOQ estimate & lock contract", Icon: CheckCircle2 },
    ],
    output: "Signed BOQ & Material Schedule",
    image: "/images/projects/living-kitchen-04.jpg",
  },
  {
    number: "03",
    id: "visualise",
    title: "Visualise",
    subtitle: "PHOTOREALISTIC 3D RENDERS",
    mainHeader: "Visualise: Photorealistic 3D Renders",
    desc: "See your complete home in photorealistic 3D detail before any site work starts. Visualize lighting, colors, custom furniture, and kitchen layouts.",
    deliverables: [
      { text: "Full 3D room views from all angles", Icon: Eye },
      { text: "Electrical, lighting & ceiling working plans", Icon: Lightbulb },
      { text: "Custom furniture & modular cabinetry drawings", Icon: FileText },
    ],
    output: "Approved 3D Renders & Working Drawings",
    image: "/images/projects/master-bedroom-01.jpg",
  },
  {
    number: "04",
    id: "execute",
    title: "Execute",
    subtitle: "TURNKEY SITE MANAGEMENT",
    mainHeader: "Execute: Turnkey Site Management",
    desc: "A single dedicated project engineer manages all civil work, electrical, plumbing, carpentry, and painting on site with regular progress updates.",
    deliverables: [
      { text: "Weekly photo & video updates on your phone", Icon: UserCheck },
      { text: "Factory-finished modular woodwork & fitting", Icon: Hammer },
      { text: "Multi-tier quality & finish inspection", Icon: CheckCircle2 },
    ],
    output: "Quality Inspected Site Work",
    image: "/images/projects/present-room-01.jpg",
  },
  {
    number: "05",
    id: "reveal",
    title: "Reveal",
    subtitle: "HANDOVER & MOVE-IN",
    mainHeader: "Reveal: Handover & Move-In",
    desc: "We perform deep cleaning, test all fittings, inspect final finishes, and hand over the keys — your beautiful Dream Casa ready for immediate living.",
    deliverables: [
      { text: "Deep cleaning & professional sanitization", Icon: Sparkles },
      { text: "Final walk-through inspection with you", Icon: CheckCircle2 },
      { text: "Key handover & warranty documents", Icon: Key },
    ],
    output: "Ready-to-Move-In Turnkey Home",
    image: "/images/projects/living-kitchen-10.jpg",
  },
];

export default function ProcessOverview() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = phases[activePhaseIndex];

  return (
    <section className="relative bg-[#FAF7F2] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 text-[#1C2630] border-y border-[#E8E2D8] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-2.5 text-center mx-auto mb-16 sm:mb-20">
          {/* Top Flourish Label */}
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
            <span className="h-px w-10 bg-[#a46f47]/40" />
            OUR METHODOLOGY
            <span className="h-px w-10 bg-[#a46f47]/40" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl font-normal leading-tight text-[#0F1A24] sm:text-4xl lg:text-5xl">
            From Vision to Reality
          </h2>

          {/* Diamond Accent Divider */}
          <div className="flex items-center justify-center gap-3 text-[#a46f47]/50 my-0.5">
            <span className="h-px w-12 bg-[#a46f47]/30" />
            <span className="text-xs font-serif rotate-45 border border-[#a46f47]/50 h-2 w-2 block" />
            <span className="h-px w-12 bg-[#a46f47]/30" />
          </div>

          {/* Subtitle */}
          <p className="text-sm leading-relaxed text-[#6B7280] sm:text-base max-w-xl mx-auto">
            A considered process, from the first conversation to the final handover.
          </p>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Left Column Navigation List */}
          <div className="lg:col-span-4 flex flex-col rounded-2xl border border-[#E5DFD5] bg-[#FAF7F2] p-1.5 shadow-sm divide-y divide-[#E5DFD5]">
            {phases.map(({ number, title, subtitle }, idx) => {
              const isActive = idx === activePhaseIndex;

              return (
                <button
                  key={number}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`group relative flex items-center justify-between p-4 sm:p-5 text-left rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#0F1A24] text-white shadow-xl"
                      : "bg-transparent text-[#0F1A24] hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Number */}
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-[#a46f47]">
                      {number}
                    </span>

                    {/* Vertical Hairline Divider */}
                    <div
                      className={`h-9 w-px transition-colors ${
                        isActive ? "bg-white/20" : "bg-[#E5DFD5]"
                      }`}
                    />

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-normal leading-tight">
                        {title}
                      </h3>
                      <p className="text-[10px] font-semibold tracking-wider text-[#a46f47] uppercase mt-0.5">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow */}
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "text-[#a46f47] translate-x-1"
                        : "text-gray-400 group-hover:translate-x-1 group-hover:text-[#a46f47]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column Stage Detail Showcase Card */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white shadow-sm overflow-hidden min-h-[500px]">
            {/* Top Details Area */}
            <div className="relative p-6 sm:p-10 z-10 flex-1 flex flex-col justify-between">
              {/* Giant Background Watermark Number */}
              <span className="absolute right-6 top-4 font-serif text-8xl sm:text-9xl font-light text-[#a46f47]/15 select-none pointer-events-none">
                {activePhase.number}
              </span>

              <div>
                {/* Stage Badge */}
                <span className="text-[11px] font-semibold tracking-widest text-[#a46f47] uppercase">
                  STAGE {activePhase.number}
                </span>

                {/* Main Stage Header */}
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F1A24] leading-tight mt-1">
                  {activePhase.mainHeader}
                </h3>

                {/* Short Gold Underline */}
                <div className="h-0.5 w-12 bg-[#a46f47] mt-3 mb-4" />

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#4B5563] max-w-2xl">
                  {activePhase.desc}
                </p>
              </div>

              {/* Grid with WHAT WE DO & PRIMARY OUTPUT */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 pt-6 border-t border-[#E8E2D8] items-start">
                {/* Left: WHAT WE DO */}
                <div className="md:col-span-7">
                  <h4 className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase mb-4">
                    WHAT WE DO
                  </h4>
                  <div className="flex flex-col gap-3.5">
                    {activePhase.deliverables.map(({ text, Icon }, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-[#374151]">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] text-[#a46f47]">
                          <Icon className="h-4 w-4 stroke-[1.5]" />
                        </div>
                        <span className="leading-snug">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: PRIMARY OUTPUT */}
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#E8E2D8] pt-4 md:pt-0 md:pl-6">
                  <h4 className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase mb-4">
                    PRIMARY OUTPUT
                  </h4>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E8E2D8] bg-[#FAF7F2] text-[#a46f47]">
                      <FileText className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-normal text-[#0F1A24] leading-snug">
                        {activePhase.output}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Full-Width Architectural Rendering Photograph */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden border-t border-[#E8E2D8]">
              <Image
                src={activePhase.image}
                alt={activePhase.title}
                fill
                className="object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
