import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VideoWalkthroughSection from "@/components/VideoWalkthroughSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectsSection from "@/components/ProjectsSection";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <VideoWalkthroughSection />
        <BeforeAfterSlider />
        <ProjectsSection limit={6} showViewAllCTA={true} />
        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
