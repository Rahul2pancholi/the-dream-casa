import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { MessageSquare, Sparkles, FileText, Factory, HardHat, Key, ArrowRight, CheckCircle2 } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "6-Step Turnkey Interior Execution Process",
  description:
    "Our 6-step turnkey interior design methodology: Site audit, photorealistic 3D renders, transparent BOQ, factory sourcing, on-site supervision, and final handover in Indore.",
  alternates: {
    canonical: "https://thedreamcasa.in/process",
  },
  openGraph: {
    title: "6-Step Turnkey Interior Execution Process | The Dream Casa Indore",
    description:
      "Our 6-step turnkey interior design methodology: Site audit, photorealistic 3D renders, transparent BOQ, factory sourcing, on-site supervision, and final handover in Indore.",
    url: "https://thedreamcasa.in/process",
  },
};

const steps = [
  {
    number: "01",
    title: "Discovery & Site Consultation",
    tagline: "Phase 01 &bull; Discover",
    image: "/images/projects/living-kitchen-01.jpg",
    description:
      "We conduct an in-depth carpet area survey at your site or Yeshwant Niwas Rd office, auditing your family's lifestyle, functional needs, and budget goals.",
    Icon: MessageSquare,
    deliverables: ["Site Measurement Audit", "Lifestyle & Layout Needs", "Budget & Schedule Locking"],
  },
  {
    number: "02",
    title: "Itemized BOQ & Cost Approval",
    tagline: "Phase 02 &bull; Define",
    image: "/images/projects/living-kitchen-04.jpg",
    description:
      "We provide a comprehensive line-item Bill of Quantities (BOQ) with clearly defined materials and costing, locking in exact brands and delivery milestones.",
    Icon: FileText,
    deliverables: ["Line-Item Cost Breakdown", "Brand & Hardware Approval", "Agreed Delivery Timeline"],
  },
  {
    number: "03",
    title: "3D Architectural Renders",
    tagline: "Phase 03 &bull; Visualise",
    image: "/images/projects/living-kitchen-02.jpg",
    description:
      "Our interior architects generate photorealistic 3D renders of your living hall, master suite, and modular kitchen before any site work commences.",
    Icon: Sparkles,
    deliverables: ["Photorealistic 3D Renders", "Material & Lighting Palettes", "Ceiling & Electrical Layouts"],
  },
  {
    number: "04",
    title: "Material Sourcing & Millwork",
    tagline: "Phase 04 &bull; Execute",
    image: "/images/projects/living-kitchen-11.jpg",
    description:
      "High-grade marine plywood, veneers, laminates, and imported marbles are procured. Modular wardrobes and cabinets are crafted in factory fit-outs.",
    Icon: Factory,
    deliverables: ["Marine Plywood & Veneer Sourcing", "Hafele / Blum Hardware", "Precision Factory Carpentry"],
  },
  {
    number: "05",
    title: "On-Site Turnkey Fit-Outs",
    tagline: "Phase 05 &bull; Execute",
    image: "/images/eklavya/image-11-1.jpg",
    description:
      "Our civil, electrical, carpentry, ceiling, and painting teams execute the design under daily supervision of Founder Poorti Jain and senior site engineers.",
    Icon: HardHat,
    deliverables: ["Daily On-Site Supervision", "Civil, Electrical & Ceiling Fit-outs", "Multi-stage Quality Audits"],
  },
  {
    number: "06",
    title: "Final Audit & Handover",
    tagline: "Phase 06 &bull; Reveal",
    image: "/images/eklavya/image-27-1.jpg",
    description:
      "After deep site cleaning and thorough hardware/lighting testing, we invite you to step into your beautifully completed dream residence.",
    Icon: Key,
    deliverables: ["Deep Site Cleaning", "Lighting & Appliance Testing", "Keys & Handover Ceremony"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
    { "@type": "ListItem", position: 2, name: "Process", item: "https://thedreamcasa.in/process" },
  ],
};

export default function ProcessPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Process Hero Header */}
        <PageHero
          eyebrow="The Dream Casa Methodology"
          title="Our 6-Step Turnkey Execution Process"
          description="A structured interior transformation guided by Founder Poorti Jain. From 3D renders to site handover, every step is built on transparency and precision."
          meta={["Discover", "Define", "Visualise", "Execute", "Reveal"]}
        />

        {/* Process Timeline Bar */}
        <section className="border-b border-ink/10 bg-cream-light py-6 px-6 sm:px-10 lg:px-16 hidden lg:block">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between gap-4">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex items-center gap-3">
                  <span className="font-serif text-sm text-gold">{step.number}</span>
                  <span className="text-xs font-bold text-ink uppercase tracking-wider">
                    {step.title.split(" ")[0]}
                  </span>
                  {idx < steps.length - 1 && <span className="h-px w-8 bg-ink/15" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Process Cards Grid */}
        <section className="bg-cream-light py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-3 text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                Step-by-Step Architecture
              </span>
              <h2 className="font-serif text-3xl text-ink sm:text-4xl lg:text-5xl">
                How We Bring Your Vision To Life
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted">
                Each milestone is managed by dedicated site engineers and reviewed by Poorti Jain.
              </p>
            </div>

            <div className="grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.Icon;
                return (
                  <div
                    key={step.number}
                    className="group relative flex flex-col justify-between bg-cream-light p-6"
                  >
                    {/* Top Image Banner Header */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Step Content Body */}
                    <div className="mt-6 flex flex-1 flex-col justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-2xl text-gold">{step.number}</span>
                          <Icon strokeWidth={1.25} className="h-5 w-5 text-gold" />
                          <span className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                            {step.tagline}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl leading-snug text-ink group-hover:text-gold transition-colors">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {step.description}
                        </p>

                        {/* Deliverables List */}
                        <div className="mt-4 flex flex-col gap-2 border-t border-ink/10 pt-3">
                          <span className="text-[10px] font-bold text-ink/70 uppercase tracking-wider">Key Milestones:</span>
                          {step.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs font-medium text-ink">
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-2 border-t border-ink/10">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform"
                        >
                          Book Phase {step.number} Consultation <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3D vs Real Interactive Comparison */}
        <BeforeAfterSlider />

        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
