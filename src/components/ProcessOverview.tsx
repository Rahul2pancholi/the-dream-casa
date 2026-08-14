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
    desc: "We begin by understanding how you live, what you love, and what truly matters to your family. Through detailed discussions and on-site evaluation, we ensure every design decision is rooted in absolute clarity.",
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
    desc: "Spatial layouts, material choices, and a 100% fixed Bill of Quantities are locked upfront. No unexpected bills or surprise costs during site execution.",
    deliverables: [
      { text: "Practical 2D architectural floor plan options", Icon: Ruler },
      { text: "Curated material, wood & finish samples", Icon: FileText },
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
    desc: "We perform deep cleaning, test all fittings, inspect final finishes, and hand over the keys — your beautiful home ready for immediate living.",
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
    <section className="relative bg-[#FAF7F2] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 text-[#1C2630] border-y border-[#E8E2D8] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-1.5 text-center mx-auto mb-8 sm:mb-10">
          {/* Top Flourish Label */}
          <div className="flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
            <span className="h-px w-8 bg-[#a46f47]/40" />
            OUR METHODOLOGY
            <span className="h-px w-8 bg-[#a46f47]/40" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-2xl font-normal leading-tight text-[#0F1A24] sm:text-3xl lg:text-4xl">
            From Vision to Reality
          </h2>

          {/* Diamond Accent Divider */}
          <div className="flex items-center justify-center gap-3 text-[#a46f47]/50 my-0.5">
            <span className="h-px w-10 bg-[#a46f47]/30" />
            <span className="text-[10px] font-serif rotate-45 border border-[#a46f47]/50 h-1.5 w-1.5 block" />
            <span className="h-px w-10 bg-[#a46f47]/30" />
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm leading-relaxed text-[#6B7280] max-w-xl mx-auto">
            A considered process, from the first conversation to the final handover.
          </p>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column Navigation List */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-[#E5DFD5] bg-[#FAF7F2] p-1.5 shadow-sm divide-y divide-[#E5DFD5]">
            {phases.map(({ number, title, subtitle }, idx) => {
              const isActive = idx === activePhaseIndex;

              return (
                <button
                  key={number}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`group relative flex items-center justify-between p-3 sm:p-3.5 text-left rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#0F1A24] text-white shadow-md"
                      : "bg-transparent text-[#0F1A24] hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Number */}
                    <span className="font-serif text-2xl sm:text-3xl font-normal text-[#a46f47]">
                      {number}
                    </span>

                    {/* Vertical Hairline Divider */}
                    <div
                      className={`h-7 w-px transition-colors ${
                        isActive ? "bg-white/20" : "bg-[#E5DFD5]"
                      }`}
                    />

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-medium leading-none">
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
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white shadow-sm overflow-hidden min-h-[380px]">
            {/* Top Details Area */}
            <div className="relative p-5 sm:p-7 z-10 flex-1 flex flex-col justify-between">
              {/* Giant Background Watermark Number */}
              <span className="absolute right-6 top-2 font-serif text-7xl sm:text-8xl font-light text-[#a46f47]/12 select-none pointer-events-none">
                {activePhase.number}
              </span>

              <div>
                {/* Stage Badge */}
                <span className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase">
                  STAGE {activePhase.number}
                </span>

                {/* Main Stage Header */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0F1A24] leading-tight mt-0.5">
                  {activePhase.mainHeader}
                </h3>

                {/* Short Gold Underline */}
                <div className="h-0.5 w-10 bg-[#a46f47] mt-2 mb-2.5" />

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#4B5563] max-w-2xl">
                  {activePhase.desc}
                </p>
              </div>

              {/* Grid with WHAT WE DO & PRIMARY OUTPUT */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5 pt-4 border-t border-[#E8E2D8] items-start">
                {/* Left: WHAT WE DO */}
                <div className="md:col-span-7">
                  <h4 className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase mb-2.5">
                    WHAT WE DO
                  </h4>
                  <div className="flex flex-col gap-2">
                    {activePhase.deliverables.map(({ text, Icon }, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#374151]">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#E8E2D8] bg-[#FAF7F2] text-[#a46f47]">
                          <Icon className="h-3.5 w-3.5 stroke-[1.5]" />
                        </div>
                        <span className="leading-snug">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: PRIMARY OUTPUT */}
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#E8E2D8] pt-3 md:pt-0 md:pl-5">
                  <h4 className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase mb-2.5">
                    PRIMARY OUTPUT
                  </h4>
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#E8E2D8] bg-[#FAF7F2] text-[#a46f47]">
                      <FileText className="h-4 w-4 stroke-[1.5]" />
                    </div>
                    <div>
                      <p className="font-serif text-xs sm:text-sm font-medium text-[#0F1A24] leading-snug">
                        {activePhase.output}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Full-Width Architectural Rendering Photograph */}
            <div className="relative w-full h-44 sm:h-52 overflow-hidden border-t border-[#E8E2D8]">
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
