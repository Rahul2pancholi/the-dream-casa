import Link from "next/link";
import { Pencil, Eye, Users, Layers, ShieldCheck, Home, ArrowRight } from "lucide-react";

const reasons = [
  {
    Icon: Pencil,
    title: "Design-First Approach",
    text: "Every project begins with a detailed concept and 3D visualization — so you see your space before we build it.",
  },
  {
    Icon: Eye,
    title: "Transparent Planning",
    text: "Clear BOQ, material selection, and budget breakdown before execution begins. No surprises, no hidden costs.",
  },
  {
    Icon: Users,
    title: "One Team, One Responsibility",
    text: "Design, procurement, and execution under one roof. You deal with one point of contact — Poorti and her team.",
  },
  {
    Icon: Layers,
    title: "3D to Reality",
    text: "Our renders are promises, not just presentations. We deliver what we design — every time.",
  },
  {
    Icon: ShieldCheck,
    title: "On-Site Supervision",
    text: "Your project is actively monitored throughout execution. Quality checks at every stage, not just at handover.",
  },
  {
    Icon: Home,
    title: "Complete Handover",
    text: "We don't leave after installation. Final inspection, finishing touches, and full handover — only when you're satisfied.",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Difference
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Why The Dream Casa?
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Six reasons homeowners across Indore trust us with their most important spaces.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ Icon, title, text }, index) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 rounded-xl border border-gold/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="absolute right-5 top-5 font-serif text-2xl text-ink/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon strokeWidth={1.5} className="h-7 w-7 text-gold" />
              <h3 className="font-serif text-[17px] font-bold text-ink">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all shadow-xl hover:bg-gold-dark hover:shadow-gold/25 hover:scale-105"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
