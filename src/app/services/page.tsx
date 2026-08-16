import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { Home, CheckCircle2, ArrowRight } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services & Turnkey Fit-Outs | The Dream Casa Indore",
  description:
    "Comprehensive residential interior design services in Indore: luxury homes, modular kitchens, and 100% turnkey site execution by Poorti Jain.",
  alternates: {
    canonical: "https://thedreamcasa.in/services",
  },
  openGraph: {
    title: "Interior Design Services & Turnkey Fit-Outs | The Dream Casa Indore",
    description:
      "Comprehensive residential interior design services in Indore: luxury homes, modular kitchens, and 100% turnkey site execution by Poorti Jain.",
    url: "https://thedreamcasa.in/services",
  },
};

const fullServices = [
  {
    id: "residential",
    title: "Residences",
    tagline: "Luxury Apartments, Villas, Penthouses & Private Residences",
    image: "/images/projects/living-kitchen-01.jpg",
    Icon: Home,
    description:
      "We design stylish, functional, and deeply personal residential spaces for apartments, duplexes, and luxury villas across Indore — with turnkey execution managed end-to-end, from civil work and carpentry to final styling, under one accountable team.",
    deliverables: [
      "Living & Dining Room Spatial Layouts",
      "Modular Kitchens with Blum / Hafele Fittings",
      "Master Suite & Acoustic Upholstered Headboards",
      "Custom Wardrobes with LED Sensor Profiling",
      "Kid's & Parents Bedroom Zoning",
      "Ambient Cove & Accent Chandelier Lighting",
      "Turnkey Site Execution & Handover",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Services Hero Header */}
        <PageHero
          eyebrow="Comprehensive Interior Services"
          title="End-to-End Interior Excellence in Indore"
          description="From initial 3D architectural renders to complete turnkey site fit-outs, explore our tailored service offerings led by Poorti Jain."
          meta={["3D Architectural Renders", "Complete Turnkey Execution", "On-Time Site Handover"]}
        />

        {/* Detailed Service Cards List */}
        <section className="bg-cream-light py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl flex flex-col divide-y divide-ink/10">
            {fullServices.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.Icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid gap-12 lg:grid-cols-12 lg:items-center py-16 first:pt-0 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`relative lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={`flex flex-col gap-5 lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <Icon strokeWidth={1.25} className="h-8 w-8 text-gold" />
                      <span className="text-xs font-bold tracking-widest text-gold uppercase">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl text-ink sm:text-4xl">
                      {service.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-4 border-t border-ink/10 pt-5">
                      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-gold uppercase">
                        What We Deliver
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2.5 text-xs font-medium text-ink">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs font-semibold tracking-widest text-ink uppercase hover:bg-ink hover:text-cream-light transition-all"
                      >
                        Inquire For {service.title} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
