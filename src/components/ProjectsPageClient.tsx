"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import UnevenCollageHero from "@/components/UnevenCollageHero";
import ProjectsCarouselCollage from "@/components/ProjectsCarouselCollage";
import VideoWalkthroughSection from "@/components/VideoWalkthroughSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectsSection from "@/components/ProjectsSection";
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
        {/* Uneven Collage Top Showcase (Work & Videos Visible Above Fold) */}
        <UnevenCollageHero onOpenInquiryModal={handleOpenModal} />

        {/* Interactive Multi-Card & Video Collage Carousel */}
        <ProjectsCarouselCollage onOpenInquiryModal={handleOpenModal} />

        {/* Video Walkthrough Section */}
        <VideoWalkthroughSection />

        {/* Before / After Comparison Slider */}
        <BeforeAfterSlider />

        {/* Portfolio Grid Section */}
        <ProjectsSection showViewAllCTA={false} />

        <StatsBar />
        <CtaBanner onOpenInquiryModal={handleOpenModal} />
      </main>

      <SiteFooter />

      {/* Inquiry Lead Modal */}
      <InquiryModal isOpen={isInquiryModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
