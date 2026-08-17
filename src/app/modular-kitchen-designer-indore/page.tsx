import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import ProjectsSection from "@/components/ProjectsSection";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { CheckCircle2, ArrowRight, ChefHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Modular Kitchen Designer in Indore & Ahmedabad",
  description:
    "Modular kitchen design and turnkey execution in Indore & Ahmedabad by The Dream Casa. 3D renders, Blum & Hafele hardware, and fixed BOQs led by Founder Poorti Jain.",
  alternates: {
    canonical: "https://thedreamcasa.in/modular-kitchen-designer-indore",
  },
  openGraph: {
    title: "Modular Kitchen Designer in Indore & Ahmedabad | The Dream Casa",
    description:
      "Modular kitchen design and turnkey execution in Indore & Ahmedabad — 3D renders, branded hardware, and fixed BOQs.",
    url: "https://thedreamcasa.in/modular-kitchen-designer-indore",
  },
};

const layouts = [
  {
    title: "L-Shaped & U-Shaped Kitchens",
    description: "Optimized corner storage and continuous counter runs for mid-size to large kitchens.",
  },
  {
    title: "Parallel & Island Kitchens",
    description: "Built for open-plan living rooms and larger footprints where the kitchen is a design centerpiece.",
  },
  {
    title: "Straight-Line Kitchens",
    description: "Space-efficient layouts for compact apartments without compromising storage.",
  },
];

const inclusions = [
  "3D render of your exact kitchen layout before fabrication begins",
  "Soft-close hardware from Blum & Hafele",
  "BWP marine-ply carcass with your choice of laminate, acrylic, or PU finish",
  "Modular accessories — pull-out baskets, bottle pull-outs, corner units",
  "Chimney, hob, and sink cut-outs coordinated with your appliance brand",
  "Fixed, itemized BOQ with no hidden costs",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
        { "@type": "ListItem", position: 2, name: "Modular Kitchen Designer", item: "https://thedreamcasa.in/modular-kitchen-designer-indore" },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Modular Kitchen Design",
      provider: { "@id": "https://thedreamcasa.in/#studio-indore" },
      areaServed: ["Indore", "Ahmedabad"],
      description:
        "Modular kitchen design and turnkey fabrication with 3D renders, Blum & Hafele hardware, and fixed itemized BOQs.",
    },
  ],
};

export default function ModularKitchenDesignerPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Modular Kitchens"
          title="Modular Kitchen Designer in Indore & Ahmedabad"
          description="From layout planning to fabrication and installation, The Dream Casa designs and builds modular kitchens across Indore and Ahmedabad — with a 3D render you can approve before a single panel is cut."
          meta={["Poorti Jain, Founder", "Indore & Ahmedabad", "Blum & Hafele Hardware"]}
        />

        <section className="bg-cream-light py-14 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <h2 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
                Kitchens Built Around How You Actually Cook
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                A modular kitchen is one of the highest-use spaces in a home, and one of the most
                expensive to get wrong. We start by measuring your existing plumbing and electrical
                points, model the layout in 3D, and only move to fabrication once you&rsquo;ve
                approved the exact design, hardware, and finish.
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
                  Get a Kitchen Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <ChefHat className="h-3.5 w-3.5" />
                Layouts We Design
              </div>
              <div className="flex flex-col gap-4">
                {layouts.map((layout) => (
                  <div key={layout.title} className="border border-ink/10 p-5">
                    <h3 className="font-serif text-lg text-ink">{layout.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{layout.description}</p>
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
