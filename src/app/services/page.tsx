import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { Home, Building2, ClipboardCheck, BedDouble, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services & Turnkey Fit-Outs | The Dream Casa Indore",
  description:
    "Comprehensive interior design services in Indore: Residential homes, commercial offices, modular kitchens, boutique hospitality, and 100% turnkey site execution by Poorti Jain.",
  alternates: {
    canonical: "https://thedreamcasa.in/services",
  },
  openGraph: {
    title: "Interior Design Services & Turnkey Fit-Outs | The Dream Casa Indore",
    description:
      "Comprehensive interior design services in Indore: Residential homes, commercial offices, modular kitchens, boutique hospitality, and 100% turnkey site execution by Poorti Jain.",
    url: "https://thedreamcasa.in/services",
  },
};

const fullServices = [
  {
    id: "residential",
    title: "Residential Interiors",
    tagline: "Custom Luxury Homes & Apartments",
    image: "/images/projects/living-kitchen-01.jpg",
    Icon: Home,
    description:
      "We design stylish, functional, and deeply personal residential spaces for apartments, duplexes, and luxury villas across Indore.",
    deliverables: [
      "Living & Dining Room Spatial Layouts",
      "Modular Kitchens with Blum / Hafele Fittings",
      "Master Suite & Acoustic Upholstered Headboards",
      "Custom Wardrobes with LED Sensor Profiling",
      "Kid's & Parents Bedroom Zoning",
      "Ambient Cove & Accent Chandelier Lighting",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Interiors",
    tagline: "Corporate Offices & Retail Outlets",
    image: "/images/services/commercial-office.png",
    Icon: Building2,
    description:
      "High-impact corporate office environments, executive director cabins, and retail spaces designed to boost productivity and impress clients.",
    deliverables: [
      "Executive Director Cabins & Workstations",
      "Statement Reception Foyers & Branding Walls",
      "Conference Rooms with Acoustic Paneling",
      "Breakout Lounges & Pantry Kitchenettes",
      "Ergonomic Task Lighting & Cable Management",
    ],
  },
  {
    id: "turnkey",
    title: "Turnkey Project Execution",
    tagline: "Design-to-Handover End-to-End Delivery",
    image: "/images/eklavya/image-29-1.png",
    Icon: ClipboardCheck,
    description:
      "Complete hassle-free turnkey site execution. Founder Poorti Jain and our site engineers manage every worker, material, and timeline.",
    deliverables: [
      "Civil Modifications & Masonry",
      "Custom Carpentry & On-Site Millwork",
      "Electrical, Plumbing & Concealed HVAC",
      "Gypsum & Acoustic False Ceilings",
      "Italian Marble & Quartz Floor Laying",
      "Paint Finish, Wallpaper & Soft Furnishings",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality & Boutique Interiors",
    tagline: "Hotels, Lounges & Fine Dining",
    image: "/images/services/hospitality-lounge.png",
    Icon: BedDouble,
    description:
      "Captivating boutique hotel suites, fine dining restaurants, and lounge bars that create unforgettable guest experiences.",
    deliverables: [
      "Boutique Guest Suite Fit-outs",
      "Lounge Bar & Dining Counters",
      "Custom Statement Chandelier Lighting",
      "Durable High-Traffic Fabrics & Finishes",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Services Hero Header */}
        <section className="relative overflow-hidden bg-[#161412] py-20 text-white sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                Comprehensive Interior Services
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                End-to-End Interior Excellence in Indore
              </h1>
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                From initial 3D architectural renders to complete turnkey site fit-outs, explore our tailored service offerings led by Poorti Jain.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs font-semibold text-neutral-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold" />
                  <span>3D Architectural Renders</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-gold" />
                  <span>Complete Turnkey Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>On-Time Site Handover</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Cards List */}
        <section className="bg-[#faf8f5] py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl flex flex-col gap-16">
            {fullServices.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.Icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid gap-12 lg:grid-cols-12 lg:items-center rounded-3xl border border-gold/15 bg-white p-8 shadow-xl sm:p-12 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`relative lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold/20 shadow-lg">
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-gold uppercase">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
                      {service.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-4 rounded-2xl border border-gold/20 bg-cream/60 p-5 sm:p-6 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-gold uppercase">
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                        What We Deliver
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2.5 text-xs font-medium text-ink">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold font-bold text-[10px] mt-0.5">
                              ✓
                            </span>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase transition-all shadow-md hover:bg-gold-dark"
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
