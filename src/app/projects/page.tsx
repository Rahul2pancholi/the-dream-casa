import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import VideoWalkthroughSection from "@/components/VideoWalkthroughSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectsSection from "@/components/ProjectsSection";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | The Dream Casa Indore",
  description:
    "Explore photorealistic 3D design concepts, on-site video walkthroughs, and completed residences in Indore by Poorti Jain.",
  alternates: {
    canonical: "https://thedreamcasa.in/projects",
  },
  openGraph: {
    title: "Selected Work | The Dream Casa Indore",
    description:
      "Explore photorealistic 3D design concepts, on-site video walkthroughs, and completed residences in Indore by Poorti Jain.",
    url: "https://thedreamcasa.in/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Projects Hero Header */}
        <PageHero
          eyebrow="Selected Work"
          title="Design Concepts, Live Videos & Real Sites"
          description="A mix of 3D design concepts and completed residences — each clearly labeled with its true status. Watch on-site video walkthroughs of finished homes across Indore."
          meta={["3D Design Concepts", "On-Site Video Walkthroughs", "Completed Residences"]}
        />

        {/* Video Walkthrough Section */}
        <VideoWalkthroughSection />

        {/* Before / After Comparison Slider */}
        <BeforeAfterSlider />

        {/* Portfolio Grid Section */}
        <ProjectsSection showViewAllCTA={false} />

        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
