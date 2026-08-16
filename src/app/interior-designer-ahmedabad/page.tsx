import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Designer in Ahmedabad | The Dream Casa",
  description:
    "The Dream Casa is now taking interior design projects in Ahmedabad — Bodakdev, SG Highway. 3D photorealistic renders, fixed BOQs, and turnkey site execution led by Founder Poorti Jain.",
  alternates: {
    canonical: "https://thedreamcasa.in/interior-designer-ahmedabad",
  },
  openGraph: {
    title: "Interior Designer in Ahmedabad | The Dream Casa",
    description:
      "Regional studio in Bodakdev, SG Highway, Ahmedabad. 3D renders, transparent BOQs, and turnkey site execution led by Founder Poorti Jain.",
    url: "https://thedreamcasa.in/interior-designer-ahmedabad",
  },
};

const ahmedabadAreas = [
  "Bodakdev",
  "SG Highway",
  "Prahlad Nagar",
  "Satellite",
  "Ambli",
  "Thaltej",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
    { "@type": "ListItem", position: 2, name: "Interior Designer in Ahmedabad", item: "https://thedreamcasa.in/interior-designer-ahmedabad" },
  ],
};

export default function InteriorDesignerAhmedabadPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Ahmedabad Studio"
          title="Interior Designer in Ahmedabad"
          description="The Dream Casa's regional studio in Bodakdev, SG Highway brings the same 3D-render-first process and turnkey execution standard from our Indore studio to homes across Ahmedabad."
          meta={["Poorti Jain, Founder", "Regional Studio", "Bodakdev, SG Highway"]}
        />

        {/* Local Intro & Service Area */}
        <section className="bg-cream-light py-14 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <h2 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
                Interior Design &amp; Turnkey Execution in Ahmedabad
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                The Dream Casa Studio, Bodakdev, SG Highway is our regional base for Ahmedabad
                projects. Founder Poorti Jain and the team run the same process here as in
                Indore — a photorealistic 3D render and fixed, itemized BOQ before any site work
                begins, followed by turnkey execution under one accountable project lead.
              </p>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {[
                  "3D renders before any site work begins",
                  "Fixed, itemized BOQ — no surprise costs",
                  "One accountable project lead on site",
                  "Deep-cleaned, inspected handover",
                ].map((item) => (
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
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <MapPin className="h-3.5 w-3.5" />
                Areas We Serve in Ahmedabad
              </div>
              <div className="flex flex-wrap gap-2">
                {ahmedabadAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-ink/15 px-3.5 py-1.5 text-xs font-medium text-ink"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-4 aspect-[4/3] w-full overflow-hidden border border-ink/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697926177579!2d72.5085!3d23.0375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjCsMDInMTUuMCJOIDcywrAzMCczMC46IkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Dream Casa Studio, Bodakdev, SG Highway, Ahmedabad"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design Capability Preview — honest framing: process/quality shown via real studio renders, not claimed as Ahmedabad site work */}
        <section className="bg-cream-light py-14 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-7xl">
            <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                What to Expect
              </div>
              <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                The Same Design Standard, Now in Ahmedabad
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                A preview of our 3D design process — the same photorealistic render quality and
                material detailing we bring to every Ahmedabad consultation.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { image: "/images/projects/living-kitchen-01.jpg", caption: "Living & Kitchen" },
                { image: "/images/projects/master-bedroom-01.jpg", caption: "Master Bedroom" },
                { image: "/images/kids-room/kids-room-01.png", caption: "Kids Room" },
              ].map(({ image, caption }) => (
                <div key={image} className="flex flex-col gap-3">
                  <div className="relative aspect-square w-full overflow-hidden border border-ink/10">
                    <Image src={image} alt={caption} fill sizes="33vw" className="object-cover" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-ink uppercase">{caption}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase hover:translate-x-1 transition-transform"
              >
                See Our Full Portfolio <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
