import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Layers,
  FileText,
  UserCheck,
  Clock,
  MessageSquare,
} from "lucide-react";

const pillars = [
  {
    step: "01",
    Icon: Layers,
    title: "See Your Home in 3D First",
    subtitle: "Photorealistic 3D Renders",
    desc: "We design complete 3D photorealistic layouts of your living room, bedrooms & kitchen so you see exactly how your home will look before site work begins.",
    badge: "Zero Guesswork",
  },
  {
    step: "02",
    Icon: FileText,
    title: "Fixed Cost, No Hidden Fees",
    subtitle: "Locked Line-Item BOQ",
    desc: "Clear itemized pricing with pre-approved material brands (Hafele, Blum, BWP Ply). The budget we agree on in the BOQ is the exact price you pay.",
    badge: "100% Price Lock",
  },
  {
    step: "03",
    Icon: UserCheck,
    title: "100% Turnkey, One Contact",
    subtitle: "Single Point of Responsibility",
    desc: "Civil work, carpentry, modular kitchen, electrical, painting & styling managed under Founder Poorti Jain. You deal with only one team.",
    badge: "Hassle-Free Delivery",
  },
  {
    step: "04",
    Icon: Clock,
    title: "Daily On-Site Video Updates",
    subtitle: "On-Time Handover Guarantee",
    desc: "Active daily site supervision with raw video walkthrough updates sent directly to your phone. Delivered on time with final deep cleaning.",
    badge: "On-Time Handover",
  },
];

export default function WhyDreamCasa() {
  return (
    <section className="relative bg-[#faf8f5] py-20 sm:py-24 px-6 sm:px-10 lg:px-16 text-ink border-y border-gold/15">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Our Difference &bull; The Dream Casa
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Why Homeowners in Indore Choose Us
          </h2>

          <p className="text-sm leading-relaxed text-muted sm:text-base max-w-xl">
            4 simple promises that make your luxury interior design &amp; turnkey journey 100% stress-free.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pillars.map(({ step, Icon, title, subtitle, desc, badge }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between rounded-3xl border border-gold/20 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
            >
              <div>
                {/* Header row: Step & Icon */}
                <div className="flex items-center justify-between border-b border-gold/15 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold border border-gold/25 group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-gold uppercase">
                      {subtitle}
                    </span>
                  </div>

                  <span className="font-serif text-3xl font-bold text-gold/25 group-hover:text-gold transition-colors">
                    {step}
                  </span>
                </div>

                {/* Main Content */}
                <div className="mt-6 flex flex-col gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted mt-1">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 border-t border-gold/10 pt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream-light/80 border border-gold/20 px-3.5 py-1 text-xs font-semibold text-ink">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  {badge}
                </span>

                <span className="text-xs font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Call To Action Box */}
        <div className="mt-14 rounded-3xl border border-gold/25 bg-white p-8 sm:p-10 shadow-lg text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center sm:text-left gap-1">
            <h3 className="font-serif text-xl font-bold text-ink sm:text-2xl">
              Ready to Design Your Dream Space in Indore?
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Book a 1:1 studio consultation with Founder Poorti Jain.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-md hover:bg-gold-dark transition-all"
            >
              Book Studio Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/917490932661?text=Hi%20Poorti,%20I%20want%20to%20discuss%20my%20interior%20project%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-md hover:bg-emerald-700 transition-all"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
