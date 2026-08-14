import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const residences = [
  {
    number: "01",
    title: "Residences",
    tagline: "Luxury Apartments · Villas · Penthouses · Private Residences",
    description: "Personalized living rooms, master suites, modular kitchens, and custom furniture tailored to your lifestyle — with turnkey execution managed end-to-end under one accountable team.",
    image: "/images/projects/living-kitchen-01.jpg",
    href: "/projects?cat=residential",
  },
];

const commercial = [
  {
    number: "02",
    title: "Premium Offices",
    tagline: "Corporate & Executive Interiors",
    description: "Ergonomic, inspiring corporate offices and executive cabins built for productivity.",
    image: "/images/services/commercial-office.png",
    href: "/projects?cat=commercial",
  },
  {
    number: "03",
    title: "Boutique Hospitality",
    tagline: "Hotels, Lounges & Retail",
    description: "Memorable boutique hotel suites, lounge bars, and retail spaces designed to captivate guests.",
    image: "/images/services/hospitality-lounge.png",
    href: "/projects?cat=hospitality",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Expertise
          </div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Tailored Interior Solutions
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Primarily residences, with a select portfolio of commercial and hospitality interiors.
          </p>
        </div>

        {/* Primary: Residences */}
        <div className="mt-16 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {residences.map(({ number, title, tagline, description, image, href }) => (
            <Link
              key={title}
              href={href}
              className="group grid items-center gap-6 py-8 sm:grid-cols-12 sm:gap-8"
            >
              <span className="font-serif text-2xl text-ink/25 group-hover:text-gold transition-colors sm:col-span-1">
                {number}
              </span>

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/10 sm:col-span-3">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-6">
                <span className="text-[11px] font-semibold tracking-wider text-gold uppercase">
                  {tagline}
                </span>
                <h3 className="font-serif text-2xl text-ink group-hover:text-gold transition-colors">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>

              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-ink uppercase transition-transform group-hover:translate-x-1 group-hover:text-gold sm:col-span-2 sm:justify-end">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary: Select Commercial */}
        <div className="mt-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
            Select Commercial
          </span>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {commercial.map(({ title, tagline, description, image, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col overflow-hidden border border-ink/10 transition-colors hover:border-gold/40"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/10">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-6">
                  <span className="text-[11px] font-semibold tracking-wider text-gold uppercase">
                    {tagline}
                  </span>
                  <h3 className="font-serif text-xl text-ink group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
