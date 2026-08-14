import {
  Compass,
  Receipt,
  UserCheck,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Compass,
    title: "3D Renders First",
    subtitle: "3D Pre-Visualization",
    desc: "Visualize your entire home in 3D photorealistic detail before any physical site work begins.",
    tag: "3D Design Fidelity",
  },
  {
    number: "02",
    Icon: Receipt,
    title: "Transparent Costing",
    subtitle: "Fixed Itemized BOQ",
    desc: "One comprehensive, itemized Bill of Quantities upfront with fixed material rates. Zero surprise bills.",
    tag: "Fixed BOQ Lock",
  },
  {
    number: "03",
    Icon: UserCheck,
    title: "One Contact Lead",
    subtitle: "Single Accountability",
    desc: "A single accountable project lead coordinates civil work, carpentry, electrical & final finishing.",
    tag: "Single Project Lead",
  },
  {
    number: "04",
    Icon: KeyRound,
    title: "Supervised Handover",
    subtitle: "Cleaned & Inspected",
    desc: "Regular site updates, multi-tier quality checks, and a deep-cleaned home ready for immediate living.",
    tag: "Turnkey Key Handover",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-cream py-24 sm:py-28 px-6 sm:px-10 lg:px-16 text-ink border-y border-ink/10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-3 text-center mx-auto">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Difference &bull; Executional Standard
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            The Dream Casa Execution Standard
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base max-w-xl">
            A seamless, transparent 4-stage path from your vision to turnkey handover.
          </p>
        </div>

        {/* Clean Aligned 4-Column Stepper Grid */}
        <div className="relative mt-16">
          {/* Horizontal Connecting Hairline (Desktop) */}
          <div className="absolute top-7 left-12 right-12 hidden h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 lg:block pointer-events-none z-0" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map(({ number, Icon, title, subtitle, desc, tag }) => (
              <div
                key={title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl"
              >
                {/* Top Animated Gold Accent Hairline */}
                <div className="absolute top-0 left-0 h-1 w-10 bg-gold transition-all duration-300 group-hover:w-full" />

                <div>
                  {/* Step Circle & Number Row */}
                  <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/40 bg-cream text-gold group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-3xl font-bold tracking-tight text-gold/80 group-hover:text-gold transition-colors">
                      {number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-lg font-bold text-ink mt-5 group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-semibold tracking-wider text-gold uppercase">
                    {subtitle}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 flex items-center gap-1.5 border-t border-ink/10 pt-3 text-[10px] font-semibold tracking-wider text-ink/70 uppercase group-hover:text-gold transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
