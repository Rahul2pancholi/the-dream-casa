import Image from "next/image";
import { Layers, FileText, UserCheck, Clock, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    step: "01",
    Icon: Layers,
    title: "3D Renders First",
    highlight: "100% Photorealistic Pre-visualization",
    desc: "You see the exact final look, lighting, and materials of your space in 3D photorealistic detail before any physical work begins on site.",
    sketch: "/images/sketches/sketch-01-living-room.png",
  },
  {
    step: "02",
    Icon: FileText,
    title: "Transparent BOQ Costing",
    highlight: "Zero Hidden Costs or Surprises",
    desc: "One comprehensive, itemized Bill of Quantities with fixed material rates upfront. Complete transparency with zero budget overruns.",
    sketch: "/images/sketches/sketch-02-blueprint.png",
  },
  {
    step: "03",
    Icon: UserCheck,
    title: "Single Point of Contact",
    highlight: "Dedicated Accountable Lead",
    desc: "No dealing with 10 different contractors. One single accountable lead coordinates civil work, carpentry, electricals, and finishing.",
    sketch: "/images/sketches/sketch-03-team.png",
  },
  {
    step: "04",
    Icon: Clock,
    title: "Supervised Handover",
    highlight: "Strict Timeline & Deep Cleaned",
    desc: "Regular site milestone updates, rigorous quality checks, and a clean, timely handover ready for immediate living.",
    sketch: "/images/sketches/sketch-04-furniture.png",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-cream py-24 sm:py-28 px-6 sm:px-10 lg:px-16 text-ink border-y border-ink/10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Our Difference &bull; The Standard
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Why Discerning Homeowners Choose <span className="italic text-gold">The Dream Casa</span>
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base max-w-2xl">
            We bridge the gap between architectural 3D concepts and 100% turnkey execution with complete transparency and zero stress.
          </p>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ step, Icon, title, highlight, desc, sketch }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden border border-ink/10 bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl"
            >
              {/* Top Animated Gold Hairline */}
              <div className="absolute top-0 left-0 h-1 w-12 bg-gold transition-all duration-500 group-hover:w-full" />

              <div>
                {/* Header Row: Step Number & Icon */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <span className="font-serif text-3xl font-bold tracking-tight text-gold/80 sm:text-4xl">
                    {step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-cream-light text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white shadow-sm">
                    <Icon strokeWidth={1.5} className="h-6 w-6" />
                  </div>
                </div>

                {/* Architectural Sketch Container */}
                <div className="relative my-6 aspect-[16/9] w-full overflow-hidden rounded-lg bg-cream-light p-2 border border-ink/5 group-hover:border-gold/20 transition-colors">
                  <Image
                    src={sketch}
                    alt={title}
                    fill
                    className="object-contain p-2 opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                {/* Highlight Badge */}
                <div className="inline-block rounded border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-gold-dark uppercase mb-3">
                  {highlight}
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-gold transition-colors">
                  {title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                  {desc}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 flex items-center gap-2 border-t border-ink/10 pt-4 text-[11px] font-semibold tracking-wider text-ink/70 uppercase group-hover:text-gold">
                <ShieldCheck className="h-4 w-4 text-gold shrink-0" /> Guaranteed Process
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-primary p-6 sm:p-8 text-white shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/images/dream-casa-icon-light.svg"
                alt="The Dream Casa"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-serif text-lg text-cream-light sm:text-xl">
                The Dream Casa Execution Promise
              </h4>
              <p className="text-xs text-dark-body sm:text-sm">
                100% Design Fidelity &bull; Fixed BOQ Price &bull; Founder Supervised Handover
              </p>
            </div>
          </div>
          <a
            href="tel:+917490932661"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-bold tracking-widest text-primary uppercase transition-all hover:bg-gold-light shadow-md shrink-0"
          >
            Consult Founder Poorti
          </a>
        </div>
      </div>
    </section>
  );
}
