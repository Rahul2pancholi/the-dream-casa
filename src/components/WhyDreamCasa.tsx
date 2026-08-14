import Image from "next/image";
import { Layers, FileText, UserCheck, Clock } from "lucide-react";

const pillars = [
  {
    step: "01",
    Icon: Layers,
    title: "3D Renders First",
    desc: "You see the final look of your space before any work begins.",
    sketch: "/images/sketches/sketch-01-living-room.png",
  },
  {
    step: "02",
    Icon: FileText,
    title: "Transparent Costing",
    desc: "One itemized BOQ with complete clarity. No hidden charges later.",
    sketch: "/images/sketches/sketch-02-blueprint.png",
  },
  {
    step: "03",
    Icon: UserCheck,
    title: "One Point of Contact",
    desc: "A single accountable team from concept to completion.",
    sketch: "/images/sketches/sketch-03-team.png",
  },
  {
    step: "04",
    Icon: Clock,
    title: "Supervised Handover",
    desc: "Regular site updates and a clean, on-time handover.",
    sketch: "/images/sketches/sketch-04-furniture.png",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-cream-light py-20 sm:py-24 px-6 sm:px-10 lg:px-16 text-ink border-y border-ink/10">
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Our Difference
            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            The Dream Casa Standard
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Thoughtful design. Precise execution.
          </p>
        </div>

        {/* Numbered Row List */}
        <div className="mt-16 border-t border-ink/10">
          {pillars.map(({ step, Icon, title, desc, sketch }) => (
            <div
              key={title}
              className="group flex items-center justify-between gap-6 border-b border-ink/10 py-7"
            >
              <div className="flex items-center gap-5 sm:gap-8">
                <span className="font-serif text-4xl text-ink/10 sm:text-6xl">
                  {step}
                </span>
                <span className="hidden h-12 w-px bg-ink/10 sm:block" />

                <div className="flex flex-col items-start gap-1.5">
                  <Icon strokeWidth={1.25} className="h-7 w-7 text-gold" />
                  <span className="mt-0.5 h-px w-5 bg-gold/60" />
                </div>

                <div>
                  <h3 className="font-serif text-base tracking-wide text-ink uppercase sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="relative hidden h-24 w-44 shrink-0 lg:block">
                <Image
                  src={sketch}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Flourish */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <span className="h-px flex-1 bg-gold/40" />
          <div className="relative h-8 w-8 shrink-0">
            <Image
              src="/images/dream-casa-icon.svg"
              alt="The Dream Casa"
              fill
              className="object-contain"
            />
          </div>
          <span className="h-px flex-1 bg-gold/40" />
        </div>
      </div>
    </section>
  );
}
