import Link from "next/link";
import { Armchair, Home, ShieldCheck, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    label: "Creative Designs",
    description: "Unique concepts tailored to you.",
    Icon: Armchair,
  },
  {
    label: "End-to-End Solutions",
    description: "Complete turnkey project execution.",
    Icon: Home,
  },
  {
    label: "Quality Assurance",
    description: "Premium materials and best quality.",
    Icon: ShieldCheck,
  },
  {
    label: "On-Time Delivery",
    description: "We value your time as much as you do.",
    Icon: Clock,
  },
];

export default function AboutSection() {
  return (
    <section className="bg-cream-light px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            About Us
          </p>
          <span className="h-px w-10 bg-gold" />
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            We Don&apos;t Just Design Spaces, We Create Experiences.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            The Dream Casa is a premium interior design and turnkey
            solutions company based in Indore. We specialize in creating
            aesthetic, functional, and timeless spaces for residential,
            commercial, and hospitality projects.
          </p>
          <Link
            href="/about"
            className="group mt-1 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-ink uppercase transition-colors hover:text-gold"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 divide-x divide-y divide-ink/10 sm:grid-cols-4 sm:divide-y-0">
          {features.map(({ label, description, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 px-4 py-4 text-center"
            >
              <Icon strokeWidth={1.5} className="h-10 w-10 text-gold" />
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-semibold text-ink">
                  {label}
                </span>
                <span className="text-xs leading-relaxed text-muted">
                  {description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
