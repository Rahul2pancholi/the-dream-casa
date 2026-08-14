"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, FileText, Eye, Hammer, Key } from "lucide-react";

const phases = [
  {
    number: "01",
    id: "discover",
    title: "Discover",
    subtitle: "Lifestyle & Site Audit",
    timeline: "Week 1",
    desc: "We listen carefully to your lifestyle requirements, family routine, site constraints, and budget parameters before a single architectural line is drawn.",
    deliverables: [
      "On-site spatial audit & laser measurements",
      "Client lifestyle & storage requirement mapping",
      "Initial budget scope & timeline alignment",
    ],
    output: "Scope Blueprint & Briefing Doc",
    image: "/images/projects/living-kitchen-01.jpg",
    Icon: Compass,
  },
  {
    number: "02",
    id: "define",
    title: "Define",
    subtitle: "Fixed Itemized BOQ",
    timeline: "Week 2 - 3",
    desc: "Spatial layouts, material palettes, hardware selections, and a 100% fixed itemized Bill of Quantities (BOQ) are finalized to eliminate surprise costs.",
    deliverables: [
      "Optimized 2D architectural floor plan options",
      "Curated material & veneer sample boards",
      "Fixed, line-item BOQ contract with rate guarantee",
    ],
    output: "Signed BOQ & Material Schedule",
    image: "/images/projects/living-kitchen-04.jpg",
    Icon: FileText,
  },
  {
    number: "03",
    id: "visualise",
    title: "Visualise",
    subtitle: "Photorealistic 3D Renders",
    timeline: "Week 3 - 5",
    desc: "Experience your complete home in photorealistic 3D detail — including lighting, textures, furniture placement, and custom cabinetry finishes.",
    deliverables: [
      "Full-room photorealistic 3D visual walkthroughs",
      "Electrical, plumbing & false-ceiling working drawings",
      "Custom furniture & millwork detail sheets",
    ],
    output: "Approved 3D Renders & GFC Drawings",
    image: "/images/projects/master-bedroom-01.jpg",
    Icon: Eye,
  },
  {
    number: "04",
    id: "execute",
    title: "Execute",
    subtitle: "Turnkey Site Management",
    timeline: "Week 6 - 16",
    desc: "A single accountable project engineer supervises civil modifications, electrical, plumbing, modular carpentry, and final painting on site.",
    deliverables: [
      "Weekly video updates & milestone progress reports",
      "Factory-finished modular carpentry installation",
      "Multi-tier structural & finish quality audits",
    ],
    output: "Quality Inspected Completion",
    image: "/images/projects/present-room-01.jpg",
    Icon: Hammer,
  },
  {
    number: "05",
    id: "reveal",
    title: "Reveal",
    subtitle: "Handover & Move-In",
    timeline: "Week 16+",
    desc: "We perform deep-cleaning, appliance testing, and thorough snagging before handing over the keys to your beautifully finished Dream Casa.",
    deliverables: [
      "Deep cleaning & professional sanitization",
      "Final client walkthrough & snag-list clearance",
      "Key handover with warranty documentation",
    ],
    output: "Turnkey Move-In Handover",
    image: "/images/projects/living-kitchen-10.jpg",
    Icon: Key,
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
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
            <span className="h-px w-10 bg-[#a46f47]/40" />
            OUR METHODOLOGY
            <span className="h-px w-10 bg-[#a46f47]/40" />
          </div>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[#0F1A24] sm:text-4xl lg:text-5xl">
            From Vision to Seamless Reality
          </h2>

          <div className="flex items-center justify-center gap-3 text-[#a46f47]/50 my-0.5">
            <span className="h-px w-12 bg-[#a46f47]/30" />
            <span className="text-xs font-serif rotate-45 border border-[#a46f47]/50 h-2 w-2 block" />
            <span className="h-px w-12 bg-[#a46f47]/30" />
          </div>

          <p className="text-sm leading-relaxed text-[#6B7280] sm:text-base max-w-xl mx-auto">
            Our 5-stage execution process ensures complete financial transparency, zero delays, and immaculate craftsman quality.
          </p>
        </div>

        {/* Interactive 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          {/* Left Column: 5 Stage Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            {phases.map(({ number, title, subtitle, timeline }, idx) => {
              const isActive = idx === activePhaseIndex;

              return (
                <button
                  key={number}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`group relative flex items-center justify-between p-5 text-left rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-[#0F1A24] bg-[#0F1A24] text-white shadow-xl scale-[1.02]"
                      : "border-[#E5DFD5] bg-[#FAF7F2] text-[#0F1A24] hover:border-[#a46f47]/50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Stage Number Badge */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-sm font-serif font-medium transition-colors ${
                        isActive
                          ? "border-[#a46f47] bg-[#a46f47] text-white"
                          : "border-[#a46f47]/30 bg-[#a46f47]/10 text-[#a46f47]"
                      }`}
                    >
                      {number}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg font-medium leading-none">
                          {title}
                        </h3>
                        <span
                          className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
                            isActive
                              ? "bg-white/10 text-[#a46f47]"
                              : "bg-[#a46f47]/10 text-[#a46f47]"
                          }`}
                        >
                          {timeline}
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-1 transition-colors ${
                          isActive ? "text-gray-300" : "text-[#6B7280]"
                        }`}
                      >
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
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

          {/* Right Column: Active Stage Detail Card Showcase */}
          <div className="lg:col-span-7 relative flex flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white p-6 sm:p-10 shadow-lg overflow-hidden min-h-[480px]">
            {/* Watermark Giant Stage Number */}
            <span className="absolute -top-6 -right-4 font-serif text-9xl font-light text-[#a46f47]/10 select-none pointer-events-none">
              {activePhase.number}
            </span>

            <div className="relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a46f47]/15 text-[#a46f47]">
                    <activePhase.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-widest text-[#a46f47] uppercase">
                      Stage {activePhase.number} • {activePhase.timeline}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#0F1A24]">
                      {activePhase.title}: {activePhase.subtitle}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Stage Description */}
              <p className="mt-5 text-sm leading-relaxed text-[#4B5563]">
                {activePhase.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#0F1A24] uppercase mb-3">
                  Key Deliverables &amp; Milestones:
                </h4>
                <div className="flex flex-col gap-2.5">
                  {activePhase.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-[#374151]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a46f47]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Output & Preview Card */}
            <div className="relative z-10 mt-8 pt-5 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                  Primary Output:
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a46f47]/40 bg-[#a46f47]/10 px-3 py-1 text-xs font-medium text-[#a46f47]">
                  {activePhase.output}
                </span>
              </div>

              {/* Background Project Image Thumbnail */}
              <div className="relative h-16 w-28 shrink-0 rounded-lg overflow-hidden border border-[#E8E2D8] shadow-sm">
                <Image
                  src={activePhase.image}
                  alt={activePhase.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Handshake Link */}
        <div className="mt-14 sm:mt-16 flex items-center justify-between border-t border-[#E8E2D8] pt-8">
          <p className="text-xs text-[#6B7280] hidden sm:block">
            Want to see how we handle timelines, BOQs, and site updates in detail?
          </p>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#a46f47] uppercase transition-transform hover:translate-x-1 mx-auto sm:mx-0"
          >
            Read Our Full 5-Step Process Guide <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
