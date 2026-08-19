import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import ProjectsSection from "@/components/ProjectsSection";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { CheckCircle2, ArrowRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial & Office Interior Designer in Indore & Ahmedabad",
  description:
    "Commercial office interior design and turnkey fit-out in Indore & Ahmedabad by The Dream Casa. 3D renders, phased execution around business hours, and fixed BOQs.",
  alternates: {
    canonical: "https://thedreamcasa.in/commercial-office-interior-designer-indore",
  },
  openGraph: {
    title: "Commercial Office Interior Designer in Indore & Ahmedabad | The Dream Casa",
    description:
      "Office and commercial interior design across Indore & Ahmedabad — 3D renders, phased fit-outs, and fixed BOQs.",
    url: "https://thedreamcasa.in/commercial-office-interior-designer-indore",
  },
};

const spaceTypes = [
  {
    title: "Corporate Offices",
    description: "Workstation layouts, cabins, meeting rooms, and reception areas designed for daily operations.",
  },
  {
    title: "Retail & Showroom Interiors",
    description: "Layouts that guide footfall and showcase product, with durable finishes built for foot traffic.",
  },
  {
    title: "Clinics & Studios",
    description: "Compact commercial spaces with efficient zoning for reception, work areas, and client-facing rooms.",
  },
];

const inclusions = [
  "3D render of the full office layout before fit-out begins",
  "Space planning for workstations, cabins & meeting rooms",
  "Fixed, itemized BOQ with no hidden costs",
  "Phased execution scheduled around your working hours",
  "Electrical, networking & HVAC coordination on site",
  "Single accountable project lead through handover",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
        { "@type": "ListItem", position: 2, name: "Commercial & Office Interior Designer", item: "https://thedreamcasa.in/commercial-office-interior-designer-indore" },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Commercial Office Interior Design",
      provider: { "@id": "https://thedreamcasa.in/#studio-indore" },
      areaServed: ["Indore", "Ahmedabad"],
      description:
        "Commercial and office interior design with turnkey fit-out execution, 3D renders, and fixed itemized BOQs.",
    },
  ],
};

export default function CommercialOfficeInteriorDesignerPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Commercial Interiors"
          title="Commercial & Office Interior Designer in Indore & Ahmedabad"
          description="The Dream Casa designs and executes office, retail, and commercial fit-outs across Indore and Ahmedabad — with the same 3D-render-first, fixed-BOQ process we use for residential turnkey projects."
          meta={["Poorti Jain, Founder", "Indore & Ahmedabad", "Turnkey Fit-Outs"]}
        />

        <section className="bg-cream-light py-14 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <h2 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
                Fit-Outs That Don&rsquo;t Interrupt Your Business
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Commercial projects run on tighter timelines and tighter compliance requirements than
                residential work — electrical load, fire safety, and business continuity all factor
                into the plan. We map your space in 3D first, agree the BOQ and phasing with you, then
                execute on site with one point of contact managing the full fit-out.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Office ya showroom ka interior design karwate waqt business band nahi karna padta —
                hum phased execution plan banate hain taaki kaam chalte hue bhi site par fit-out ho
                sake, Indore aur Ahmedabad dono studios se.
              </p>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs font-medium text-ink">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-ink px-7 py-3.5 text-xs font-semibold tracking-widest text-ink uppercase hover:bg-ink hover:text-cream-light transition-all"
                >
                  Discuss Your Space <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <Building2 className="h-3.5 w-3.5" />
                Spaces We Design
              </div>
              <div className="flex flex-col gap-4">
                {spaceTypes.map((space) => (
                  <div key={space.title} className="border border-ink/10 p-5">
                    <h3 className="font-serif text-lg text-ink">{space.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{space.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection limit={6} showViewAllCTA={true} hideFilters={true} />

        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
