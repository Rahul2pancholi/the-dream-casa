import Link from "next/link";
import {
  Pencil,
  Eye,
  Users,
  Layers,
  ShieldCheck,
  Home,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
  Award,
  Shield,
  Clock,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    Icon: Pencil,
    title: "Design-First Architecture",
    tagline: "3D Spatial Visualization",
    text: "Every luxury space starts with photorealistic 3D renders and spatial layouts. You explore and refine every corner before site construction begins.",
    highlight: "100% 3D Visualization",
  },
  {
    number: "02",
    Icon: Eye,
    title: "Transparent Fixed-Cost BOQ",
    tagline: "Zero Hidden Charges",
    text: "Detailed line-item Bill of Quantities (BOQ) with pre-approved material brands (Hafele, Blum, BWP Ply). No budget surprises or mid-project cost escalations.",
    highlight: "Guaranteed Fixed Budget",
  },
  {
    number: "03",
    Icon: Users,
    title: "Single Point of Accountability",
    tagline: "End-to-End Turnkey Team",
    text: "Civil modifications, carpentry, modular kitchen, electrical, and styling managed under one roof by Founder Poorti Jain & senior site engineers.",
    highlight: "Dedicated Site Manager",
  },
  {
    number: "04",
    Icon: Layers,
    title: "1:1 Renders to Reality Match",
    tagline: "Millimeter Precision",
    text: "Our 3D architectural renders are promises, not artistic concepts. We craft your exact textures, lighting accents, and custom millwork on site.",
    highlight: "Guaranteed 1:1 Execution",
  },
  {
    number: "05",
    Icon: ShieldCheck,
    title: "Daily On-Site Supervision",
    tagline: "Multi-Stage Quality Audits",
    text: "Active daily site monitoring with raw video walkthrough updates sent directly to you. Quality checks at every stage, from masonry to polishing.",
    highlight: "Raw Video Updates",
  },
  {
    number: "06",
    Icon: Home,
    title: "Deep Clean & Key Handover",
    tagline: "On-Time Delivery Guarantee",
    text: "We perform full electrical/plumbing testing, deep site cleaning, and final interior styling before handing over the keys to your dream home.",
    highlight: "100% On-Time Handover",
  },
];

const guarantees = [
  {
    Icon: Award,
    title: "1:1 Render Guarantee",
    desc: "What you see and approve in photorealistic 3D is precisely what we build on site.",
  },
  {
    Icon: Shield,
    title: "Zero Cost Escalation",
    desc: "Line-item BOQ signed before construction starts. Zero hidden fees or mid-work additions.",
  },
  {
    Icon: Clock,
    title: "Committed Handover",
    desc: "Rigorous daily site supervision under Poorti Jain to ensure on-time delivery.",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-[#faf8f5] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 text-ink border-y border-gold/15">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3.5 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Our Difference &bull; The Dream Casa
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Why Homeowners in Indore Trust Us
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base max-w-2xl">
            Experience the peace of mind of 100% turnkey interior execution. From 3D photorealistic architectural renders to flawless key handover.
          </p>

          {/* Quick Stats Badges */}
          <div className="mt-2 flex flex-wrap justify-center items-center gap-6 border-t border-gold/15 pt-6 text-xs font-semibold text-ink/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>100+ Homes Handed Over</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>Zero Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>100% 1:1 Execution Match</span>
            </div>
          </div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ number, Icon, title, tagline, text, highlight }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between rounded-3xl border border-gold/20 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-xl"
            >
              <div>
                {/* Card Top Row: Icon & Step Number */}
                <div className="flex items-center justify-between border-b border-gold/15 pb-5">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gold/10 text-gold border border-gold/25 group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon strokeWidth={1.75} className="h-6 w-6" />
                  </div>
                  <span className="font-serif text-3xl font-bold tracking-tight text-gold/30 group-hover:text-gold transition-colors">
                    {number}
                  </span>
                </div>

                {/* Card Body */}
                <div className="mt-6 flex flex-col gap-2">
                  <span className="text-[11px] font-bold tracking-widest text-gold uppercase">
                    {tagline}
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-snug text-ink group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {text}
                  </p>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 border-t border-gold/15 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-cream/70 px-3.5 py-1 text-[11px] font-semibold text-ink">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                  {highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Elegant Studio Guarantees Banner */}
        <div className="mt-16 rounded-3xl border border-gold/20 bg-white p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-2">
            <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              The Dream Casa Promise
            </span>
            <h3 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              Our Core Execution Principles
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Built on transparency, quality craftsmanship, and Founder Poorti Jain&apos;s direct oversight.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 border-t border-gold/15 pt-8">
            {guarantees.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold border border-gold/25 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-base font-bold text-ink">{title}</h4>
                <p className="text-xs leading-relaxed text-muted max-w-xs">{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center border-t border-gold/15 pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-3.5 text-xs font-bold tracking-[0.15em] text-white uppercase transition-all shadow-md hover:bg-gold-dark hover:shadow-gold/25 hover:scale-105"
            >
              Schedule Studio Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+917490932661"
              className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-cream/50 px-7 py-3.5 text-xs font-semibold tracking-[0.15em] text-ink uppercase shadow-sm transition-all hover:bg-white hover:border-gold"
            >
              <Phone className="h-4 w-4 text-gold" /> Call +91 7490 932 661
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
