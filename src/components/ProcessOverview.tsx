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

interface ProcessOverviewProps {
  onOpenInquiryModal?: () => void;
}

export default function ProcessOverview({ onOpenInquiryModal }: ProcessOverviewProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = phases[activePhaseIndex];

  return (
    <section className="relative bg-[#FAF7F2] py-10 sm:py-16 px-4 sm:px-10 lg:px-16 text-[#1C2630] border-y border-[#E8E2D8] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-1 text-center mx-auto mb-6 sm:mb-10">
          <div className="flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
            <span className="h-px w-6 sm:w-8 bg-[#a46f47]/40" />
            OUR METHODOLOGY
            <span className="h-px w-6 sm:w-8 bg-[#a46f47]/40" />
          </div>

          <h2 className="font-serif text-2xl font-normal leading-tight text-[#0F1A24] sm:text-3xl lg:text-4xl">
            From Vision to Reality
          </h2>

          <div className="flex items-center justify-center gap-3 text-[#a46f47]/50 my-0.5">
            <span className="h-px w-8 bg-[#a46f47]/30" />
            <span className="text-[10px] font-serif rotate-45 border border-[#a46f47]/50 h-1.5 w-1.5 block" />
            <span className="h-px w-8 bg-[#a46f47]/30" />
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-[#6B7280] max-w-xl mx-auto px-2">
            A considered 5-stage process, from the first conversation to final key handover.
          </p>
        </div>

        {/* MOBILE VIEW NAVIGATION (Horizontal Scrollable Pill Bar on Mobile) */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
          {phases.map(({ number, title }, idx) => {
            const isActive = idx === activePhaseIndex;
            return (
              <button
                key={number}
                type="button"
                onClick={() => setActivePhaseIndex(idx)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider shrink-0 transition-all ${
                  isActive
                    ? "bg-[#0F1A24] text-white shadow-md border border-[#0F1A24]"
                    : "bg-white text-[#4B5563] border border-[#E8E2D8] hover:border-[#a46f47]"
                }`}
              >
                <span className="text-[#a46f47] font-serif">{number}</span>
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Split Grid for Desktop / Full Mobile Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* DESKTOP LEFT COLUMN NAVIGATION LIST */}
          <div className="hidden lg:flex lg:col-span-4 flex-col rounded-[24px] border border-[#E8E2D8] bg-[#FAF7F2] p-1.5 shadow-sm divide-y divide-[#E8E2D8]/80 relative z-10">
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
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-[#a46f47] shrink-0">
                      {number}
                    </span>

                    <div
                      className={`h-9 w-px shrink-0 transition-colors ${
                        isActive ? "bg-[#a46f47]/50" : "bg-[#a46f47]/30"
                      }`}
                    />

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

          {/* STAGE DETAIL SHOWCASE CARD (Responsive for Mobile & Desktop) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white shadow-sm overflow-hidden min-h-[360px] sm:min-h-[380px]">
            {/* Top Details Area */}
            <div
              key={activePhase.id}
              className="relative p-4 sm:p-7 z-10 flex-1 flex flex-col justify-between transition-all duration-300 animate-in fade-in slide-in-from-bottom-1"
            >
              {/* Watermark Number */}
              <span className="absolute right-4 top-1 font-serif text-6xl sm:text-8xl font-light text-[#a46f47]/10 select-none pointer-events-none">
                {activePhase.number}
              </span>

              <div>
                {/* Stage Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase">
                    STAGE {activePhase.number}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#a46f47]" />
                  <span className="text-[10px] font-medium text-[#6B7280]">Methodology Phase</span>
                </div>

                {/* Main Stage Header */}
                <h3 className="font-serif text-lg sm:text-2xl font-normal text-[#0F1A24] leading-tight mt-1">
                  {activePhase.mainHeader}
                </h3>

                <div className="h-0.5 w-10 sm:w-12 bg-[#a46f47] mt-1.5 mb-2.5" />

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#4B5563] max-w-2xl">
                  {activePhase.desc}
                </p>
              </div>

              {/* Grid with WHAT WE DO & PRIMARY OUTPUT */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mt-4 pt-3.5 border-t border-[#E8E2D8] items-start">
                {/* Left: WHAT WE DO */}
                <div className="md:col-span-7">
                  <h4 className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase mb-2">
                    WHAT WE DO
                  </h4>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {activePhase.deliverables.map(({ text, Icon }, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs text-[#374151]"
                      >
                        <div className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-md border border-[#E8E2D8] bg-[#FAF7F2] text-[#a46f47] shadow-xs">
                          <Icon className="h-3.5 w-3.5 stroke-[1.5]" />
                        </div>
                        <span className="leading-snug text-xs sm:text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: PRIMARY OUTPUT */}
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#E8E2D8] pt-3 md:pt-0 md:pl-5">
                  <h4 className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase mb-2">
                    PRIMARY OUTPUT
                  </h4>
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-7.5 w-7.5 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md border border-[#a46f47]/30 bg-[#a46f47]/10 text-[#a46f47] shadow-xs">
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

            {/* Bottom Photo */}
            <div
              key={`img-${activePhase.id}`}
              className="relative w-full h-36 sm:h-52 overflow-hidden border-t border-[#E8E2D8]"
            >
              <Image
                src={activePhase.image}
                alt={activePhase.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section Bottom CTA Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-4 sm:p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#a46f47]/15 text-[#a46f47]">
              <Sparkles className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-lg font-medium text-[#0F1A24] leading-snug">
                Ready to transform your home?
              </h4>
              <p className="text-xs text-[#6B7280]">
                Schedule a free design consultation with Founder Poorti Jain &amp; team.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            {onOpenInquiryModal ? (
              <button
                type="button"
                onClick={onOpenInquiryModal}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a46f47] px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider shadow-md hover:bg-[#8e5c36] transition-all w-full sm:w-auto"
              >
                Book Free Consultation <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a46f47] px-6 py-3 text-xs font-semibold text-white uppercase tracking-wider shadow-md hover:bg-[#8e5c36] transition-all w-full sm:w-auto"
              >
                Book Free Consultation <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
