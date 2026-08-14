import Image from "next/image";
import { Layers, FileText, UserCheck, Clock } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Layers,
    title: "3D Renders First",
    subtitle: "Photorealistic Concept",
    desc: "Visualize your entire home in 3D photorealistic detail before site work starts.",
    image: "/images/projects/living-kitchen-01.jpg",
    position: "top",
  },
  {
    number: "02",
    Icon: FileText,
    title: "Transparent BOQ",
    subtitle: "Fixed Itemized Cost",
    desc: "Fixed itemized material costing upfront. Zero surprise charges later.",
    image: "/images/projects/living-kitchen-04.jpg",
    position: "bottom",
  },
  {
    number: "03",
    Icon: UserCheck,
    title: "One Contact Lead",
    subtitle: "Single Accountability",
    desc: "A single dedicated project lead manages civil, carpentry, electrical & finishing.",
    image: "/images/projects/master-bedroom-01.jpg",
    position: "top",
  },
  {
    number: "04",
    Icon: Clock,
    title: "On-Time Handover",
    subtitle: "Deep Cleaned & Inspected",
    desc: "Supervised milestone checks and a pristine, deep-cleaned home ready to live.",
    image: "/images/before-after/tv-unit-after.jpg",
    position: "bottom",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-cream py-24 sm:py-32 px-6 sm:px-10 lg:px-16 text-ink border-y border-ink/10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-3 text-center mx-auto">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Difference &bull; Executional Path
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            The Dream Casa Execution Journey
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base max-w-xl">
            A seamless, transparent 4-stage path from your vision to turnkey handover.
          </p>
        </div>

        {/* Wavy Path Roadmap (Desktop) */}
        <div className="relative mt-28 mb-20 hidden lg:block min-h-[560px]">
          {/* SVG Sine Wave Path Background */}
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-44 pointer-events-none z-0"
            viewBox="0 0 1200 200"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Dashed Guide Curve */}
            <path
              d="M 50,100 C 180,10 320,190 450,100 C 580,10 720,190 850,100 C 980,10 1100,100 1150,100"
              stroke="#a46f47"
              strokeWidth="3"
              strokeDasharray="6 6"
              strokeOpacity="0.4"
            />
            {/* Solid Accent Wave Gradient */}
            <path
              d="M 50,100 C 180,10 320,190 450,100 C 580,10 720,190 850,100 C 980,10 1100,100 1150,100"
              stroke="url(#wave-gold-gradient)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="wave-gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a46f47" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#a46f47" stopOpacity="1" />
                <stop offset="100%" stopColor="#a46f47" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* 4 Steps Positioned Along the Wave */}
          <div className="grid grid-cols-4 gap-6 relative z-10 items-center h-full">
            {steps.map(({ number, Icon, title, subtitle, desc, image, position }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center ${
                  position === "top" ? "-translate-y-32" : "translate-y-32"
                }`}
              >
                {/* Step Card (Top Position) */}
                {position === "top" && (
                  <div className="group relative mb-6 w-full rounded-2xl border border-ink/10 bg-card p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-gold px-3.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
                      Step {number}
                    </span>

                    {/* Real Project Photo Container */}
                    <div className="relative mb-3 mt-1 h-32 w-full overflow-hidden rounded-xl bg-ink border border-gold/20 shadow-inner group-hover:border-gold/50 transition-colors">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="font-serif text-base font-bold text-ink transition-colors group-hover:text-gold">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold tracking-wide text-gold uppercase">
                      {subtitle}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {desc}
                    </p>
                    {/* Arrow Pointer */}
                    <div className="absolute -bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-ink/10 bg-card" />
                  </div>
                )}

                {/* Node Circle directly on Wave */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-cream shadow-lg transition-transform hover:scale-110">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white shadow-inner">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute -bottom-5 text-[10px] font-bold tracking-wider text-gold uppercase">
                    0{idx + 1}
                  </span>
                </div>

                {/* Step Card (Bottom Position) */}
                {position === "bottom" && (
                  <div className="group relative mt-6 w-full rounded-2xl border border-ink/10 bg-card p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl">
                    {/* Arrow Pointer */}
                    <div className="absolute -top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l border-t border-ink/10 bg-card" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-gold px-3.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
                      Step {number}
                    </span>

                    {/* Real Project Photo Container */}
                    <div className="relative mb-3 mt-1 h-32 w-full overflow-hidden rounded-xl bg-ink border border-gold/20 shadow-inner group-hover:border-gold/50 transition-colors">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="font-serif text-base font-bold text-ink transition-colors group-hover:text-gold">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold tracking-wide text-gold uppercase">
                      {subtitle}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Wavy Timeline */}
        <div className="relative mt-12 block lg:hidden">
          {/* Vertical Connecting Wave Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold/20 via-gold to-gold/20" />

          <div className="flex flex-col gap-8">
            {steps.map(({ number, Icon, title, subtitle, desc, image }) => (
              <div key={title} className="relative flex items-start gap-5 pl-14">
                {/* Node Icon Circle */}
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-gold text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Card */}
                <div className="w-full rounded-xl border border-ink/10 bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-2.5">
                    <span className="font-serif text-xl font-bold text-gold">
                      Step {number}
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest text-gold uppercase">
                      {subtitle}
                    </span>
                  </div>

                  {/* Real Project Photo Container */}
                  <div className="relative my-3 h-32 w-full overflow-hidden rounded-xl bg-ink border border-gold/20 shadow-inner">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover opacity-95"
                    />
                  </div>

                  <h3 className="font-serif text-base font-bold text-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
