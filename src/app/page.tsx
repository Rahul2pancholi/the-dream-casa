import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyDreamCasa from "@/components/WhyDreamCasa";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessOverview from "@/components/ProcessOverview";
import MaterialityStrip from "@/components/MaterialityStrip";
import StatsBar from "@/components/StatsBar";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Dream Casa | Best Interior Designer in Indore & Ahmedabad | Turnkey Projects",
  description:
    "Explore luxury residential interiors, 3D architectural renders, live site video reels, and 100% turnkey site execution by Founder Poorti Jain in Indore & Ahmedabad.",
  alternates: {
    canonical: "https://thedreamcasa.in",
  },
  openGraph: {
    title: "The Dream Casa | Best Interior Designer in Indore & Ahmedabad",
    description:
      "Explore luxury residential interiors, 3D architectural renders, live site video reels, and 100% turnkey site execution by Founder Poorti Jain in Indore & Ahmedabad.",
    url: "https://thedreamcasa.in",
  },
};

const featuredCaseStudy = projectsData.find((p) => p.id === "eklavya-residence-execution")!;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ProjectsSection limit={4} showViewAllCTA={true} hideFilters={true} />

        {/* Studio Intro */}
        <section className="bg-cream-light px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              <span className="h-px w-8 bg-gold" />
              The Studio
              <span className="h-px w-8 bg-gold" />
            </div>
            <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
              A founder-led studio, est. 2025, working across Indore &amp; Ahmedabad — deliberately selective about the projects we take on.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase transition-transform hover:translate-x-1"
            >
              Meet the Studio <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <WhyDreamCasa />
        <ServicesSection />

        {/* Featured Case Study */}
        <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink/10 lg:col-span-7">
              <Image
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur">
                {featuredCaseStudy.typeLabel}
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                Featured Case Study
              </div>
              <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {featuredCaseStudy.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {featuredCaseStudy.description}
              </p>
              <Link
                href={`/projects/${featuredCaseStudy.id}`}
                className="mt-2 inline-flex items-center gap-2 border border-ink px-7 py-3.5 text-xs font-semibold tracking-widest text-ink uppercase transition-all hover:bg-ink hover:text-cream-light"
              >
                Read the Full Story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <ProcessOverview />
        <MaterialityStrip />
        <StatsBar />
        <FounderSection />
        <TestimonialsSection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
