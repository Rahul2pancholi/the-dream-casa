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
  MessageSquare,
  XCircle,
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

const comparisons = [
  {
    aspect: "3D Visualization",
    contractor: "2D sketches or vague verbal ideas",
    dreamCasa: "100% Photorealistic 3D renders before work starts",
  },
  {
    aspect: "Budget & BOQ",
    contractor: "Unquoted materials & 30-40% cost overruns",
    dreamCasa: "Itemized line-item BOQ with zero hidden fees",
  },
  {
    aspect: "Site Management",
    contractor: "Managing 5+ separate unorganized labor teams",
    dreamCasa: "Single turnkey point of contact led by Poorti Jain",
  },
  {
    aspect: "Handover Timeline",
    contractor: "Unpredictable delays & extended deadlines",
    dreamCasa: "Guaranteed delivery date with committed site schedule",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-[#faf8f5] py-24 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 text-ink border-y border-gold/15">
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

        {/* Light Contrast Comparison Matrix */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-gold/25 bg-white p-8 sm:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gold/15 pb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                The Execution Contrast
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink sm:text-3xl">
                The Dream Casa vs Local Carpenters &amp; Contractors
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Why luxury residences across Indore choose our end-to-end design studio over unorganized workers.
              </p>
            </div>

            <a
              href="https://wa.me/917490932661?text=Hi%20Poorti,%20I%20want%20to%20discuss%20my%20interior%20project%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-emerald-700 transition-all shrink-0"
            >
              <MessageSquare className="h-4 w-4" /> Ask Poorti on WhatsApp
            </a>
          </div>

          {/* Comparison Table Rows */}
          <div className="mt-8 grid gap-4">
            {comparisons.map((item) => (
              <div
                key={item.aspect}
                className="grid gap-4 rounded-2xl border border-gold/15 bg-[#faf8f5]/60 p-5 md:grid-cols-12 md:items-center transition-colors hover:bg-cream/40"
              >
                <div className="md:col-span-3 font-serif text-sm font-bold text-ink">
                  {item.aspect}
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 rounded-xl bg-rose-50 p-3.5 border border-rose-200 text-xs text-rose-900">
                  <XCircle className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span><strong className="text-rose-950 font-semibold">Local Contractors:</strong> {item.contractor}</span>
                </div>

                <div className="md:col-span-5 flex items-start gap-2.5 rounded-xl bg-emerald-50 p-3.5 border border-emerald-200 text-xs text-emerald-950 font-medium">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span><strong className="text-emerald-900 font-bold">The Dream Casa:</strong> {item.dreamCasa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-gold px-9 py-4 text-xs font-bold tracking-[0.15em] text-white uppercase transition-all shadow-xl hover:bg-gold-dark hover:shadow-gold/25 hover:scale-105"
          >
            Schedule Studio Visit <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+917490932661"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-white px-8 py-4 text-xs font-semibold tracking-[0.15em] text-ink uppercase shadow-sm transition-all hover:bg-cream-dark hover:border-gold"
          >
            <Phone className="h-4 w-4 text-gold" /> Call +91 7490 932 661
          </a>
        </div>
      </div>
    </section>
  );
}
