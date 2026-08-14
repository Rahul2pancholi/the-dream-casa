"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Eye, Sparkles, CheckCircle2, X, ArrowRight, Video } from "lucide-react";

interface ShowcaseItem {
  id: string;
  type: "photo" | "video";
  title: string;
  location: string;
  category: "living" | "bedroom" | "kitchen" | "video";
  image: string;
  videoUrl?: string;
  aspectRatio: string; // e.g. "aspect-[4/5]", "aspect-[16/9]", "aspect-[3/4]"
  tag: string;
  status: "Completed Residence" | "3D Concept Render" | "On-Site Video";
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "v1",
    type: "video",
    title: "Yeshwant Niwas 4BHK Site Walkthrough",
    location: "Yeshwant Niwas Rd, Indore",
    category: "video",
    image: "/images/projects/living-kitchen-01.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // fallback player
    aspectRatio: "w-[340px] sm:w-[420px] aspect-[16/9]",
    tag: "Walkthrough Video",
    status: "On-Site Video",
  },
  {
    id: "p1",
    type: "photo",
    title: "Minimalist Italian Living & Dining Room",
    location: "Vijay Nagar, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-02.jpg",
    aspectRatio: "w-[280px] sm:w-[320px] aspect-[3/4]",
    tag: "Living Suite",
    status: "Completed Residence",
  },
  {
    id: "p2",
    type: "photo",
    title: "Fluted Veneer & Brass Accent Master Suite",
    location: "Super Corridor, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-01.jpg",
    aspectRatio: "w-[320px] sm:w-[360px] aspect-[4/5]",
    tag: "Master Bedroom",
    status: "3D Concept Render",
  },
  {
    id: "p3",
    type: "photo",
    title: "Handleless Quartz Island Modular Kitchen",
    location: "Bicholi Mardana, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-04.jpg",
    aspectRatio: "w-[360px] sm:w-[440px] aspect-[16/10]",
    tag: "Modular Kitchen",
    status: "Completed Residence",
  },
  {
    id: "p4",
    type: "photo",
    title: "Double-Height Velvet Lounge Living Area",
    location: "AB Road, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-05.jpg",
    aspectRatio: "w-[300px] sm:w-[340px] aspect-[4/5]",
    tag: "Luxury Lounge",
    status: "Completed Residence",
  },
  {
    id: "p5",
    type: "photo",
    title: "Warm Oak & Cane Accent Guest Bedroom",
    location: "Saket Nagar, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-02.jpg",
    aspectRatio: "w-[280px] sm:w-[320px] aspect-[3/4]",
    tag: "Guest Suite",
    status: "3D Concept Render",
  },
  {
    id: "p6",
    type: "photo",
    title: "Contemporary Open Dining & Kitchen Suite",
    location: "Palasia, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-07.jpg",
    aspectRatio: "w-[340px] sm:w-[400px] aspect-[16/9]",
    tag: "Dining & Kitchen",
    status: "Completed Residence",
  },
  {
    id: "p7",
    type: "photo",
    title: "Bespoke Walnut Foyer & Presentation Lounge",
    location: "Bodakdev, Ahmedabad",
    category: "living",
    image: "/images/projects/present-room-01.jpg",
    aspectRatio: "w-[320px] sm:w-[360px] aspect-[4/5]",
    tag: "Foyer Design",
    status: "Completed Residence",
  },
];

interface ProjectsCarouselCollageProps {
  onOpenInquiryModal?: () => void;
}

export default function ProjectsCarouselCollage({ onOpenInquiryModal }: ProjectsCarouselCollageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "all"
    ? showcaseItems
    : showcaseItems.filter((item) => item.category === activeCategory);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const selectedItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase mb-2">
              <span className="h-px w-8 bg-[#a46f47]" />
              INTERACTIVE SHOWCASE CAROUSEL
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F1A24] leading-tight">
              Explore Our Real Sites &amp; 3D Walkthroughs
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 max-w-xl">
              Swipe through completed residences, modular kitchen details, and live site video walkthroughs across Indore &amp; Ahmedabad.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8E2D8] bg-white text-[#0F1A24] shadow-xs hover:border-[#a46f47] hover:bg-[#a46f47] hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8E2D8] bg-white text-[#0F1A24] shadow-xs hover:border-[#a46f47] hover:bg-[#a46f47] hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: "all", label: "All Showcase" },
            { id: "video", label: "🎬 Walkthrough Videos" },
            { id: "living", label: "Living & Lounge" },
            { id: "bedroom", label: "Master Bedrooms" },
            { id: "kitchen", label: "Modular Kitchens" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                activeCategory === tab.id
                  ? "bg-[#0F1A24] text-white shadow-md"
                  : "bg-white border border-[#E8E2D8] text-[#4B5563] hover:border-[#a46f47] hover:text-[#0F1A24]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Horizontal Uneven Collage Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className={`relative ${item.aspectRatio} shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md border border-white/10">
                {item.type === "video" ? (
                  <>
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold uppercase">{item.status}</span>
                  </>
                ) : item.status === "Completed Residence" ? (
                  <>
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    <span>{item.status}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3 w-3 text-[#d4af37]" />
                    <span>{item.status}</span>
                  </>
                )}
              </div>

              {/* Center Play Icon for Video */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 ml-1 fill-current" />
                  </div>
                </div>
              )}

              {/* Hover Eye Icon for Photos */}
              {item.type === "photo" && (
                <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0F1A24] shadow-md backdrop-blur-xs">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
              )}

              {/* Card Footer Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[10px] font-semibold tracking-widest text-[#d4af37] uppercase">
                  {item.tag} &bull; {item.location}
                </span>
                <h3 className="font-serif text-lg font-normal leading-snug text-white mt-1 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Preview Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0F1A24] shadow-2xl text-white">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-[#a46f47] uppercase">
                  {selectedItem.tag}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-xs text-white/70">{selectedItem.location}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveItemIndex(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Media Display */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Footer CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 p-6 bg-[#0F1A24]">
              <div>
                <h3 className="font-serif text-xl font-normal text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  Want a similar bespoke execution for your residence in Indore or Ahmedabad?
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setActiveItemIndex(null);
                    onOpenInquiryModal?.();
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-[#a46f47] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase hover:bg-[#8e5c36] transition-all shadow-md"
                >
                  Inquire This Design <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
