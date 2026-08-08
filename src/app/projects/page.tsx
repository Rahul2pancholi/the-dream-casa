import SiteHeader from "@/components/SiteHeader";
import VideoWalkthroughSection from "@/components/VideoWalkthroughSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectsSection from "@/components/ProjectsSection";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { Sparkles, Layers, CheckCircle2, Film } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Live Site Video Reels | The Dream Casa Indore",
  description:
    "Explore photorealistic 3D interior design concepts, 8+ raw on-site video walkthrough reels, and finished luxury residence fit-outs in Indore by Poorti Jain.",
  alternates: {
    canonical: "https://thedreamcasa.in/projects",
  },
  openGraph: {
    title: "Portfolio & Live Site Video Reels | The Dream Casa Indore",
    description:
      "Explore photorealistic 3D interior design concepts, 8+ raw on-site video walkthrough reels, and finished luxury residence fit-outs in Indore by Poorti Jain.",
    url: "https://thedreamcasa.in/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Projects Hero Header */}
        <section className="relative overflow-hidden bg-[#161412] py-20 text-white sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                Architectural Showcase & Live Reels
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Design Concepts, Live Videos & Real Sites
              </h1>
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                Explore how we turn 3D photorealistic visualizations into real turnkey interiors. Watch raw on-site video walkthroughs of finished homes across Indore.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs font-semibold text-neutral-200">
                <div className="flex items-center gap-2">
                  <Film className="h-4 w-4 text-gold" />
                  <span>8+ On-Site Video Walkthroughs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold" />
                  <span>100% Photorealistic 3D Renders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>Guaranteed 1:1 Execution Match</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
