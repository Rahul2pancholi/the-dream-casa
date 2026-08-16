"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WhyDreamCasa from "@/components/WhyDreamCasa";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessOverview from "@/components/ProcessOverview";
import MaterialityStrip from "@/components/MaterialityStrip";
import StatsBar from "@/components/StatsBar";
import FounderSection from "@/components/FounderSection";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import InquiryModal from "@/components/InquiryModal";

const featuredCaseStudy = projectsData.find((p) => p.id === "eklavya-residence-execution")!;

export default function HomePageClient() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleOpenModal = () => setIsInquiryModalOpen(true);
  const handleCloseModal = () => setIsInquiryModalOpen(false);

  return (
    <div className="flex flex-1 flex-col">
      {/* Navbar Header with Modal Trigger */}
      <SiteHeader onOpenInquiryModal={handleOpenModal} />

      <main className="flex flex-1 flex-col">
        {/* Hero Section with Modal Trigger */}
        <Hero onOpenInquiryModal={handleOpenModal} />

        {/* Portfolio Showcase */}
        <ProjectsSection limit={4} showViewAllCTA={true} hideFilters={true} />

        {/* Studio Intro */}
        <section className="relative bg-primary px-6 py-20 text-white sm:px-10 lg:px-16 border-y border-gold/20 overflow-hidden">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center relative z-10">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              <span className="h-px w-8 bg-gold" />
              The Studio
              <span className="h-px w-8 bg-gold" />
            </div>
            <p className="font-serif text-2xl leading-snug text-white sm:text-3xl">
              A founder-led studio, est. 2025, working across Indore &amp; Ahmedabad — deliberately selective about the projects we take on.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase transition-transform hover:translate-x-1 hover:text-gold-light"
            >
              Meet the Studio <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Why Choose Dream Casa */}
        <WhyDreamCasa />

        {/* Featured Case Study */}
        <section className="bg-primary px-6 py-24 text-white sm:px-10 lg:px-16 border-y border-gold/20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-gold/30 lg:col-span-7">
              <Image
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 border border-gold/30 bg-primary/90 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-gold uppercase backdrop-blur">
                {featuredCaseStudy.typeLabel}
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                Featured Case Study
              </div>
              <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                {featuredCaseStudy.title}
              </h2>
              <p className="text-sm leading-relaxed text-dark-body sm:text-base">
                {featuredCaseStudy.description}
              </p>
              <Link
                href={`/projects/${featuredCaseStudy.id}`}
                className="mt-2 inline-flex items-center gap-2 border border-gold px-7 py-3.5 text-xs font-semibold tracking-widest text-gold uppercase transition-all hover:bg-gold hover:text-primary"
              >
                Read the Full Story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <ProcessOverview onOpenInquiryModal={handleOpenModal} />

        {/* Materiality Strip */}
        <MaterialityStrip />

        {/* Stats Bar */}
        <StatsBar />

        {/* Founder Section */}
        <FounderSection />

        {/* CTA Banner with Modal Trigger */}
        <CtaBanner onOpenInquiryModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Instant Lead Capture Modal */}
      <InquiryModal isOpen={isInquiryModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
