import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import ProjectsSection from "@/components/ProjectsSection";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Interior Designer in Indore",
  description:
    "Looking for the best interior designer in Indore? The Dream Casa, led by Founder Poorti Jain, delivers 3D photorealistic renders and 100% turnkey site execution from our studio on Yeshwant Niwas Rd, Indore.",
  alternates: {
    canonical: "https://thedreamcasa.in/interior-designer-indore",
  },
  openGraph: {
    title: "Best Interior Designer in Indore | The Dream Casa",
    description:
      "Founder-led interior design studio on Yeshwant Niwas Rd, Indore. 3D renders, transparent BOQs, and 100% turnkey site execution for homes across Indore.",
    url: "https://thedreamcasa.in/interior-designer-indore",
  },
};

const indoreAreas = [
  "Yeshwant Niwas Rd",
  "Vijay Nagar",
  "Palasia",
  "Super Corridor",
  "Bicholi Mardana",
  "Saket Nagar",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
    { "@type": "ListItem", position: 2, name: "Interior Designer in Indore", item: "https://thedreamcasa.in/interior-designer-indore" },
  ],
};

export default function InteriorDesignerIndorePage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Indore Studio"
          title="Interior Designer in Indore"
          description="The Dream Casa is a founder-led interior design studio based on Yeshwant Niwas Rd, Indore — delivering 3D photorealistic renders and 100% turnkey site execution for homes across the city."
          meta={["Poorti Jain, Founder", "Est. 2025", "Yeshwant Niwas Rd, Indore"]}
        />

        {/* Local Intro & Service Area */}
        <section className="bg-cream-light py-14 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <h2 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
                Interior Design &amp; Turnkey Execution in Indore
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Our studio, The View, 305, Yeshwant Niwas Rd, Nehru Park 2, Indore, is where every
                project starts — from the first design conversation to the final on-site handover.
                Founder Poorti Jain personally oversees each home, pairing photorealistic 3D
                renders with an itemized BOQ so what you approve on screen is exactly what gets
                built on site.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                We work across Indore&rsquo;s high-rise apartment corridors — Vijay Nagar, Super
                Corridor, Palasia — as well as independent villas in Bicholi Mardana and Saket
                Nagar. Carcass work uses IS:710 BWP marine ply and kitchen or wardrobe hardware from
                Blum and Hafele as standard, regardless of project size, with a site audit and
                measurement pass preceding every 3D render.
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
                Areas We Serve in Indore
              </div>
              <div className="flex flex-wrap gap-2">
                {indoreAreas.map((area) => (
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3701201538356!2d75.8737501!3d22.7217489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb24e943af9%3A0x4fe265bccbdb548e!2sThe%20View%2C%20305%2C%20Yeshwant%20Niwas%20Rd%2C%20Nehru%20Park%202%2C%20Lad%20Colony%2C%20Indore%2C%20Madhya%20Pradesh%20452003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Dream Casa Studio, Yeshwant Niwas Rd, Indore"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Real Indore Portfolio */}
        <ProjectsSection limit={6} showViewAllCTA={true} hideFilters={true} />

        {/* Indore-Specific FAQ */}
        <section className="bg-cream-light py-14 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
              Working With Us in Indore
            </h2>
            <div className="mt-8 flex flex-col divide-y divide-ink/10">
              {[
                {
                  q: "Which parts of Indore do you cover for site visits?",
                  a: "Yeshwant Niwas Rd, Vijay Nagar, Palasia, Super Corridor, Bicholi Mardana, and Saket Nagar are covered directly from our studio — mention your locality when you enquire and we'll confirm timelines for your area.",
                },
                {
                  q: "Do you take on both apartment and independent villa projects?",
                  a: "Yes — the process is the same for both: site audit, 3D render, itemized BOQ, then turnkey execution. Villas typically involve more civil-work coordination, which we scope during the initial site visit.",
                },
                {
                  q: "How soon can you start after the first consultation?",
                  a: "Once the site audit is complete, the 3D render and BOQ stage typically comes first, and site work begins once you've signed off on both — exact scheduling depends on current studio capacity at the time you enquire.",
                },
                {
                  q: "Indore me sabse achha interior designer kaise choose karein?",
                  a: "Portfolio dekhein, fixed itemized BOQ maangein taaki koi surprise cost na ho, aur ek hi accountable project lead ho jo civil, carpentry, electrical sab coordinate kare. Hum Indore me 3D render pehle dikhate hain, phir site par kaam shuru hota hai.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="py-5">
                  <h3 className="font-serif text-base text-ink">{q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
                </div>
              ))}
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
