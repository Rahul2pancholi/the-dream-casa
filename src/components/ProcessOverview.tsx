"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Home, UserCheck, FileText, Ruler, Eye, Lightbulb, Hammer, Sparkles, CheckCircle2, Key } from "lucide-react";

const phases = [
  {
    number: "01",
    id: "discover",
    title: "Discover",
    subtitle: "UNDERSTANDING YOUR HOME",
    mainHeader: "Discover: Understanding Your Needs",
    desc: "We sit down with you to understand your family's daily routine, space requirements, budget, and design ideas before drawing any plans.",
    deliverables: [
      { text: "Home site visit & space measurement", Icon: Home },
      { text: "Understanding your family's storage & daily needs", Icon: UserCheck },
      { text: "Setting budget & completion target", Icon: FileText },
    ],
    output: "Design Brief & Initial Scope",
    image: "/images/projects/living-kitchen-01.jpg",
  },
  {
    number: "02",
    id: "define",
    title: "Define",
    subtitle: "LAYOUTS & FIXED PRICING",
    mainHeader: "Define: Layouts & Clear Costs",
    desc: "We create practical floor layouts, select materials together, and give you a fixed itemized bill upfront. No hidden costs later.",
    deliverables: [
      { text: "Smart 2D floor layout options", Icon: Ruler },
      { text: "Selecting wood finishes, tiles & colors together", Icon: FileText },
      { text: "100% fixed cost estimate upfront", Icon: CheckCircle2 },
    ],
    output: "Final Layout & Fixed Quote",
    image: "/images/projects/living-kitchen-04.jpg",
  },
  {
    number: "03",
    id: "visualise",
    title: "Visualise",
    subtitle: "3D DESIGN PREVIEW",
    mainHeader: "Visualise: Realistic 3D Preview",
    desc: "See your full home in realistic 3D pictures before any work starts on site — including lighting, colors, furniture, and kitchen.",
    deliverables: [
      { text: "Full 3D room views from all angles", Icon: Eye },
      { text: "Lighting, false-ceiling & electrical plans", Icon: Lightbulb },
      { text: "Custom furniture & modular kitchen drawings", Icon: FileText },
    ],
    output: "Approved 3D Room Renders",
    image: "/images/projects/master-bedroom-01.jpg",
  },
  {
    number: "04",
    id: "execute",
    title: "Execute",
    subtitle: "COMPLETE SITE WORK",
    mainHeader: "Execute: Turnkey Site Work",
    desc: "Our dedicated engineer manages all civil, electrical, plumbing, carpentry, and painting work on site with regular progress updates.",
    deliverables: [
      { text: "Weekly photos & video updates on your phone", Icon: UserCheck },
      { text: "Factory-made modular woodwork & fitting", Icon: Hammer },
      { text: "Strict quality checks at every step", Icon: CheckCircle2 },
    ],
    output: "Completed Site Inspection",
    image: "/images/projects/present-room-01.jpg",
  },
  {
    number: "05",
    id: "reveal",
    title: "Reveal",
    subtitle: "DEEP CLEAN & HANDOVER",
    mainHeader: "Reveal: Deep Clean & Key Handover",
    desc: "We deep-clean your entire home, test all lights and fittings, fix minor details, and hand over the keys — ready for you to move in.",
    deliverables: [
      { text: "Deep cleaning & dusting of the full home", Icon: Sparkles },
      { text: "Final joint walk-through inspection with you", Icon: CheckCircle2 },
      { text: "Key handover & warranty documents", Icon: Key },
    ],
    output: "Ready-to-Move-In Home",
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
          <div className="lg:col-span-4 flex flex-col rounded-[24px] border border-[#E8E2D8] bg-[#FAF7F2] p-1.5 shadow-sm divide-y divide-[#E8E2D8]/80 relative z-10">
            {phases.map(({ number, title, subtitle }, idx) => {
              const isActive = idx === activePhaseIndex;

              return (
                <button
                  key={number}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`group relative flex items-center justify-between p-4 sm:p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#0F1A24] text-white shadow-2xl rounded-[18px] z-20 scale-[1.02] border border-[#0F1A24]"
                      : "bg-transparent text-[#0F1A24] hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Number */}
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-[#a46f47] shrink-0">
                      {number}
                    </span>

                    {/* Vertical Hairline Divider */}
                    <div
                      className={`h-9 w-px shrink-0 transition-colors ${
                        isActive ? "bg-[#a46f47]/50" : "bg-[#a46f47]/30"
                      }`}
                    />

                    {/* Title & Subtitle */}
                    <div>
                      <h3
                        className={`font-serif text-lg sm:text-xl font-normal leading-tight transition-colors ${
                          isActive ? "text-white" : "text-[#0F1A24]"
                        }`}
                      >
                        {title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#a46f47] uppercase mt-0.5">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow */}
                  <ArrowRight
                    className={`h-4.5 w-4.5 shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "text-[#a46f47] translate-x-1"
                        : "text-[#9CA3AF] group-hover:translate-x-1 group-hover:text-[#a46f47]"
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
