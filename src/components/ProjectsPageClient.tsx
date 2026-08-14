"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import ProjectsSection from "@/components/ProjectsSection";
import VideoWalkthroughSection from "@/components/VideoWalkthroughSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import InquiryModal from "@/components/InquiryModal";

export default function ProjectsPageClient() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleOpenModal = () => setIsInquiryModalOpen(true);
  const handleCloseModal = () => setIsInquiryModalOpen(false);

  return (
    <div className="flex flex-1 flex-col bg-[#FAF7F2]">
      <SiteHeader onOpenInquiryModal={handleOpenModal} />

      <main className="flex flex-1 flex-col">
        {/* Projects Page Hero */}
        <PageHero
          eyebrow="Selected Portfolio &amp; Real Sites"
          title="Our Completed Projects &amp; Design Concepts"
          description="Explore our completed residential luxury homes, commercial offices, turnkey executions, and on-site video walkthroughs across Indore &amp; Ahmedabad."
          meta={["Residential Residences", "Turnkey Executions", "Video Walkthroughs"]}
        />

        {/* MAIN COMPLETED PROJECTS DIRECTORY GRID */}
        <ProjectsSection showViewAllCTA={false} />

        {/* Video Walkthrough Section */}
        <VideoWalkthroughSection />

        {/* Before / After Comparison Slider */}
        <BeforeAfterSlider />

        <StatsBar />
        <CtaBanner onOpenInquiryModal={handleOpenModal} />
      </main>

      <SiteFooter />

      {/* Inquiry Lead Modal */}
      <InquiryModal isOpen={isInquiryModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
