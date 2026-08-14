import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "3D Renders First",
    subtitle: "3D PRE-VISUALIZATION",
    desc: "Visualize your entire home in 3D photorealistic detail before any physical work begins.",
    sketch: "/images/sketches/sketch-01-living-room.png",
  },
  {
    number: "02",
    title: "Transparent Costing",
    subtitle: "FIXED ITEMIZED BOQ",
    desc: "One comprehensive, itemized Bill of Quantities upfront with fixed material rates. Zero surprise bills.",
    sketch: "/images/sketches/sketch-02-blueprint.png",
  },
  {
    number: "03",
    title: "One Contact Lead",
    subtitle: "SINGLE ACCOUNTABILITY",
    desc: "A single accountable project lead coordinates civil work, carpentry, electrical & final finishing.",
    sketch: "/images/sketches/sketch-03-team.png",
  },
  {
    number: "04",
    title: "Supervised Handover",
    subtitle: "CLEANED & INSPECTED",
    desc: "Regular site updates, multi-tier quality checks, and a deep-cleaned home ready for immediate living.",
    sketch: "/images/sketches/sketch-04-furniture.png",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-[#FAF7F2] py-10 sm:py-16 px-6 sm:px-10 lg:px-16 text-[#1C2630] border-y border-[#E8E2D8] overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-2 text-center mx-auto">
          {/* Top Flourish Label */}
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
            <span className="h-px w-8 bg-[#a46f47]/40" />
            OUR PROCESS
            <span className="h-px w-8 bg-[#a46f47]/40" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl font-normal leading-tight text-[#0F1A24] sm:text-4xl lg:text-5xl">
            Thoughtful by Design. Delivered with Precision.
          </h2>

          {/* Diamond Accent Divider */}
          <div className="flex items-center justify-center gap-3 text-[#a46f47]/50 my-0.5">
            <span className="h-px w-10 bg-[#a46f47]/30" />
            <span className="text-xs font-serif rotate-45 border border-[#a46f47]/50 h-2 w-2 block" />
            <span className="h-px w-10 bg-[#a46f47]/30" />
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm leading-relaxed text-[#6B7280] max-w-xl mx-auto">
            A seamless design journey crafted around clarity, collaboration and uncompromised quality.
          </p>
        </div>

        {/* Clean 4-Step Stepper Timeline (01 -> 02 -> 03 -> 04) */}
        <div className="relative mt-8 sm:mt-12">
          {/* Desktop Straight Horizontal Connecting Line */}
          <div className="relative hidden lg:block h-20">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-16 right-16 h-0.5 -translate-y-1/2 bg-[#a46f47]/40 z-0" />

            {/* 4 Step Number Circles (01, 02, 03, 04) */}
            <div className="grid grid-cols-4 gap-6 w-full relative z-10 items-center h-full">
              {steps.map(({ number }) => (
                <div key={number} className="flex justify-center">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-[#a46f47] bg-[#FAF7F2] font-serif text-xl sm:text-2xl font-normal text-[#a46f47] shadow-sm">
                    {number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Column Content Grid with Vertical Dividers & Bottom Architectural Sketches */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5DFD5] border-t lg:border-t-0 border-[#E5DFD5] mt-4 pt-6 lg:pt-4">
            {steps.map(({ title, subtitle, desc, sketch }) => (
              <div
                key={title}
                className="flex flex-col justify-between text-center px-3 sm:px-4 py-4 lg:py-2"
              >
                {/* Text Content */}
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#0F1A24]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#a46f47] uppercase">
                    {subtitle}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B7280] max-w-xs mx-auto">
                    {desc}
                  </p>
                </div>

                {/* Architectural Line-Art Sketch Image at Bottom */}
                <div className="relative mt-6 h-36 sm:h-44 w-full overflow-hidden">
                  <Image
                    src={sketch}
                    alt={title}
                    fill
                    className="object-contain object-bottom opacity-95"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
