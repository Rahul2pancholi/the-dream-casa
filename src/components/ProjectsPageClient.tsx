"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
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
        {/* Projects Hero Header */}
        <PageHero
          eyebrow="Selected Work"
          title="Design Concepts, Live Videos & Real Sites"
          description="A mix of 3D design concepts and completed residences — each clearly labeled with its true status. Watch on-site video walkthroughs of finished homes across Indore."
          meta={["3D Design Concepts", "On-Site Video Walkthroughs", "Completed Residences"]}
        />

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
