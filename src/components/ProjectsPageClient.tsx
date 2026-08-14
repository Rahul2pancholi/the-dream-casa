"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import CleanProjectsShowcase from "@/components/CleanProjectsShowcase";
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
        {/* Crystal-Clear Featured Video + Clean 3-Column Portfolio Showcase */}
        <CleanProjectsShowcase onOpenInquiryModal={handleOpenModal} />

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
