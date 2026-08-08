import Image from "next/image";
import Link from "next/link";
import { Home, Building2, ClipboardCheck, BedDouble, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Residential Interiors",
    tagline: "Homes & Villas",
    description: "Personalized luxury living rooms, master suites, modular kitchens, and custom furniture tailored to your lifestyle.",
    image: "/images/projects/living-kitchen-02.jpg",
    Icon: Home,
    href: "/services#residential",
    features: ["Living & Dining Halls", "Modular Kitchens", "Master Suites"],
  },
  {
    title: "Commercial Interiors",
    tagline: "Offices & Retail",
    description: "Ergonomic, inspiring corporate offices, executive cabins, and high-impact retail spaces built for productivity.",
    image: "/images/projects/living-kitchen-04.jpg",
    Icon: Building2,
    href: "/services#commercial",
    features: ["Corporate Cabins", "Reception Foyers", "Conference Rooms"],
  },
  {
    title: "Turnkey Projects",
    tagline: "End-to-End Execution",
    description: "Complete design-to-handover management including civil works, woodwork, electrical, ceiling, and quality control.",
    image: "/images/projects/living-kitchen-11.jpg",
    Icon: ClipboardCheck,
    href: "/services#turnkey",
    features: ["100% On-Time Delivery", "Material Sourcing", "On-Site Supervision"],
  },
  {
    title: "Hospitality Interiors",
    tagline: "Hotels & Lounges",
    description: "Memorable boutique hotel suites, lounge bars, and luxury dining spaces designed to captivate guests.",
    image: "/images/projects/master-bedroom-01.jpg",
    Icon: BedDouble,
    href: "/services#hospitality",
    features: ["Boutique Suites", "Lounge Bars", "Ambient Lighting"],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Expertise
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Tailored Interior Solutions
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            From concept 3D planning to full site execution, we deliver end-to-end interior excellence across Indore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, tagline, description, image, Icon, href, features }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/15 bg-[#faf8f5] p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:shadow-xl"
            >
              {/* Image Container with Floating Unclipped Badge */}
              <div className="relative flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted/10">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating Icon Badge - Positioned cleanly over image bottom */}
                <div className="absolute -bottom-5 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md border border-gold/20 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:shadow-gold/30">
                  <Icon strokeWidth={1.5} className="h-6 w-6" />
                </div>
              </div>

              {/* Card Body */}
              <div className="mt-8 flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold tracking-wider text-gold uppercase">
                    {tagline}
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-snug text-ink group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 flex flex-col gap-1.5 border-t border-gold/10 pt-3">
                    {features.map((feat) => (
                      <span key={feat} className="flex items-center gap-2 text-[11px] text-ink/80">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
