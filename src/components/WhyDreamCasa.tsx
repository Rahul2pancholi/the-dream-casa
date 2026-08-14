import {
  Compass,
  Receipt,
  UserCheck,
  KeyRound,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Compass,
    title: "3D Renders First",
    subtitle: "3D Pre-Visualization",
    desc: "Visualize your entire home in 3D photorealistic detail before any physical site work begins.",
    tag: "3D Design Fidelity",
    position: "top",
  },
  {
    number: "02",
    Icon: Receipt,
    title: "Transparent Costing",
    subtitle: "Fixed Itemized BOQ",
    desc: "One comprehensive, itemized Bill of Quantities upfront with fixed material rates. Zero surprise bills.",
    tag: "Fixed BOQ Lock",
    position: "bottom",
  },
  {
    number: "03",
    Icon: UserCheck,
    title: "One Contact Lead",
    subtitle: "Single Accountability",
    desc: "A single accountable project lead coordinates civil work, carpentry, electrical & final finishing.",
    tag: "Single Project Lead",
    position: "top",
  },
  {
    number: "04",
    Icon: KeyRound,
    title: "Supervised Handover",
    subtitle: "Cleaned & Inspected",
    desc: "Regular site updates, multi-tier quality checks, and a deep-cleaned home ready for immediate living.",
    tag: "Turnkey Key Handover",
    position: "bottom",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-cream py-24 sm:py-32 px-6 sm:px-10 lg:px-16 text-ink border-y border-ink/10 overflow-hidden">
      {/* Ambient Decorative Gold Glows */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-3.5 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-gold uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Executional Wave Journey
          </div>

          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            The Dream Casa <span className="italic text-gold">Wave Path</span>
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base max-w-xl">
            A seamless, transparent 4-stage journey from your initial 3D vision to turnkey handover.
          </p>
        </div>

        {/* Desktop Wave Roadmap */}
        <div className="relative mt-28 mb-20 hidden lg:block min-h-[460px]">
          {/* Continuous Gold Sine Wave SVG */}
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-48 pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1200 200"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Soft Ambient Shadow Wave */}
            <path
              d="M 50,100 C 180,10 320,190 450,100 C 580,10 720,190 850,100 C 980,10 1100,100 1150,100"
              stroke="#a46f47"
              strokeWidth="6"
              strokeOpacity="0.15"
              strokeLinecap="round"
            />
            {/* Dashed Gold Guide Curve */}
            <path
              d="M 50,100 C 180,10 320,190 450,100 C 580,10 720,190 850,100 C 980,10 1100,100 1150,100"
              stroke="#a46f47"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeOpacity="0.4"
            />
            {/* Glowing Gradient Wave Stroke */}
            <path
              d="M 50,100 C 180,10 320,190 450,100 C 580,10 720,190 850,100 C 980,10 1100,100 1150,100"
              stroke="url(#luxury-wave-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="luxury-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a46f47" stopOpacity="0.2" />
                <stop offset="25%" stopColor="#a46f47" stopOpacity="1" />
                <stop offset="50%" stopColor="#bf9c82" stopOpacity="1" />
                <stop offset="75%" stopColor="#a46f47" stopOpacity="1" />
                <stop offset="100%" stopColor="#a46f47" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* 4 Cards Positioned Above and Below the Wave */}
          <div className="grid grid-cols-4 gap-6 relative z-10 items-center h-full">
            {steps.map(({ number, Icon, title, subtitle, desc, tag, position }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center ${
                  position === "top" ? "-translate-y-28" : "translate-y-28"
                }`}
              >
                {/* Step Card (Top Position) */}
                {position === "top" && (
                  <div className="group relative mb-6 w-full rounded-2xl border border-ink/10 bg-card p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl">
                    {/* Top Gold Hairline */}
                    <div className="absolute top-0 left-0 h-1 w-10 bg-gold transition-all duration-500 group-hover:w-full" />

                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-gold px-3.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
                      Step {number}
                    </span>

                    {/* Vector Icon Badge */}
                    <div className="mx-auto my-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-ink transition-colors group-hover:text-gold">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-semibold tracking-wide text-gold uppercase">
                      {subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {desc}
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-1.5 border-t border-ink/10 pt-3 text-[10px] font-semibold tracking-wider text-ink/70 uppercase">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                      {tag}
                    </div>

                    {/* Arrow Pointer to Wave Node */}
                    <div className="absolute -bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-ink/10 bg-card group-hover:border-gold/60" />
                  </div>
                )}

                {/* Node Circle directly on Wave Curve */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-cream shadow-xl transition-all duration-300 hover:scale-110 group cursor-pointer">
                  {/* Glowing Outer Ring */}
                  <span className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-75 pointer-events-none" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-white shadow-inner group-hover:bg-gold-dark transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute -bottom-6 text-[11px] font-bold tracking-wider text-gold uppercase">
                    0{idx + 1}
                  </span>
                </div>

                {/* Step Card (Bottom Position) */}
                {position === "bottom" && (
                  <div className="group relative mt-6 w-full rounded-2xl border border-ink/10 bg-card p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl">
                    {/* Arrow Pointer to Wave Node */}
                    <div className="absolute -top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l border-t border-ink/10 bg-card group-hover:border-gold/60" />

                    {/* Top Gold Hairline */}
                    <div className="absolute top-0 left-0 h-1 w-10 bg-gold transition-all duration-500 group-hover:w-full" />

                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-gold px-3.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
                      Step {number}
                    </span>

                    {/* Vector Icon Badge */}
                    <div className="mx-auto my-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-ink transition-colors group-hover:text-gold">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-semibold tracking-wide text-gold uppercase">
                      {subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {desc}
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-1.5 border-t border-ink/10 pt-3 text-[10px] font-semibold tracking-wider text-ink/70 uppercase">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                      {tag}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Wave Roadmap */}
        <div className="relative mt-12 block lg:hidden">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold/20 via-gold to-gold/20" />
          <div className="flex flex-col gap-8">
            {steps.map(({ number, Icon, title, subtitle, desc, tag }) => (
              <div key={title} className="relative flex items-start gap-5 pl-14">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-gold text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="w-full rounded-xl border border-ink/10 bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-2.5">
                    <span className="font-serif text-xl font-bold text-gold">
                      Step {number}
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest text-gold uppercase">
                      {subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-ink mt-3">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 border-t border-ink/10 pt-2 text-[10px] font-semibold tracking-wider text-gold uppercase">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    {tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
