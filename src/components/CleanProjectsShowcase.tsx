"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Eye, Sparkles, CheckCircle2, X, ArrowRight, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

interface ProjectItem {
  id: string;
  type: "photo" | "video";
  title: string;
  location: string;
  category: "living" | "bedroom" | "kitchen" | "video";
  image: string;
  tag: string;
  status: "Completed Residence" | "3D Concept Render" | "On-Site Video";
}

const topMarqueePhotos = [
  { id: "m1", title: "Yeshwant Niwas 4BHK Duplex Living", image: "/images/projects/living-kitchen-01.jpg", loc: "Indore Studio", type: "video" },
  { id: "m2", title: "Vijay Nagar Italian Lounge & Dining", image: "/images/projects/living-kitchen-02.jpg", loc: "Indore", type: "photo" },
  { id: "m3", title: "Super Corridor Fluted Master Suite", image: "/images/projects/master-bedroom-01.jpg", loc: "Indore", type: "photo" },
  { id: "m4", title: "Bicholi Quartz Island Modular Kitchen", image: "/images/projects/living-kitchen-04.jpg", loc: "Indore", type: "photo" },
  { id: "m5", title: "AB Road Double-Height Velvet Lounge", image: "/images/projects/living-kitchen-05.jpg", loc: "Indore", type: "photo" },
  { id: "m6", title: "Palasia Contemporary Open Kitchen", image: "/images/projects/living-kitchen-07.jpg", loc: "Indore", type: "photo" },
  { id: "m7", title: "Bodakdev Bespoke Walnut Foyer", image: "/images/projects/present-room-01.jpg", loc: "Ahmedabad", type: "photo" },
];

const allProjects: ProjectItem[] = [
  {
    id: "p1",
    type: "video",
    title: "4BHK Luxury Duplex Site Walkthrough",
    location: "Yeshwant Niwas Rd, Indore",
    category: "video",
    image: "/images/projects/living-kitchen-01.jpg",
    tag: "Site Walkthrough",
    status: "On-Site Video",
  },
  {
    id: "p2",
    type: "photo",
    title: "Minimalist Italian Living & Dining Suite",
    location: "Vijay Nagar, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-02.jpg",
    tag: "Living Suite",
    status: "Completed Residence",
  },
  {
    id: "p3",
    type: "photo",
    title: "Fluted Brass & Veneer Master Bedroom",
    location: "Super Corridor, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-01.jpg",
    tag: "Master Suite",
    status: "3D Concept Render",
  },
  {
    id: "p4",
    type: "photo",
    title: "Handleless Quartz Island Modular Kitchen",
    location: "Bicholi Mardana, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-04.jpg",
    tag: "Modular Kitchen",
    status: "Completed Residence",
  },
  {
    id: "p5",
    type: "photo",
    title: "Velvet Lounge & False Ceiling Details",
    location: "AB Road, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-05.jpg",
    tag: "Lounge Area",
    status: "Completed Residence",
  },
  {
    id: "p6",
    type: "photo",
    title: "Warm Oak & Cane Guest Suite",
    location: "Saket Nagar, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-02.jpg",
    tag: "Guest Suite",
    status: "3D Concept Render",
  },
  {
    id: "p7",
    type: "photo",
    title: "Contemporary Open Dining & Kitchen",
    location: "Palasia, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-07.jpg",
    tag: "Dining & Kitchen",
    status: "Completed Residence",
  },
  {
    id: "p8",
    type: "photo",
    title: "Bespoke Walnut Foyer & Reception",
    location: "Bodakdev, Ahmedabad",
    category: "living",
    image: "/images/projects/present-room-01.jpg",
    tag: "Foyer Design",
    status: "Completed Residence",
  },
];

interface CleanProjectsShowcaseProps {
  onOpenInquiryModal?: () => void;
}

export default function CleanProjectsShowcase({ onOpenInquiryModal }: CleanProjectsShowcaseProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const topReelRef = useRef<HTMLDivElement>(null);

  const handleTopScroll = (direction: "left" | "right") => {
    if (topReelRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      topReelRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredProjects = activeCategory === "all"
    ? allProjects
    : activeCategory === "video"
    ? allProjects.filter((p) => p.type === "video")
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-1 flex-col bg-[#FAF7F2]">
      {/* 1. TOP SECTION: LUXURY AUTO-SLIDING SITE REEL ("TOP PR PHOTOS CHALTA HAI") */}
      <section className="relative overflow-hidden bg-[#0F1A24] py-8 sm:py-12 text-white border-b border-[#a46f47]/30 shadow-lg">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#a46f47_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
              <span className="h-px w-8 bg-[#d4af37]" />
              LIVE ON-SITE SHOWCASE
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1">
              Finished Homes &amp; Video Walkthrough Reel
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              Swipe or Click to Explore
            </span>
            <button
              type="button"
              onClick={() => handleTopScroll("left")}
              aria-label="Scroll reel left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#a46f47] hover:border-[#a46f47] transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleTopScroll("right")}
              aria-label="Scroll reel right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#a46f47] hover:border-[#a46f47] transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Sliding Reel Track */}
        <div
          ref={topReelRef}
          className="relative flex gap-5 overflow-x-auto pb-4 pt-1 px-6 sm:px-10 lg:px-16 no-scrollbar snap-x snap-mandatory"
        >
          {topMarqueePhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedPhoto(item.image);
                setSelectedTitle(item.title);
              }}
              className="relative h-60 w-80 sm:h-72 sm:w-[420px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-xl cursor-pointer group transition-all duration-500 hover:scale-[1.02] hover:border-[#d4af37]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

              {/* Top Badge */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold text-[#d4af37] backdrop-blur-md border border-white/10">
                {item.type === "video" ? (
                  <>
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold uppercase">Video Walkthrough</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    <span>Real Completed Site</span>
                  </>
                )}
              </div>

              {/* Video Play Overlay */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 ml-1 fill-current" />
                  </div>
                </div>
              )}

              {/* Card Footer Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-widest block">
                  {item.loc} &bull; Tap to View
                </span>
                <h3 className="font-serif text-lg font-normal text-white mt-0.5 group-hover:text-[#d4af37] transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. BOTTOM SECTION: ALL PROJECTS DIRECTORY GRID ("NICHE SARE PROJECT") */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header & Category Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#E8E2D8] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase mb-1">
                <span className="h-px w-6 bg-[#a46f47]" />
                PORTFOLIO DIRECTORY
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F1A24]">
                All Projects &amp; Design Concepts
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                Filter by room type to explore completed residences, master suites, and modular kitchens.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
              {[
                { id: "all", label: "All Projects" },
                { id: "living", label: "Living Rooms" },
                { id: "bedroom", label: "Bedrooms" },
                { id: "kitchen", label: "Kitchens" },
                { id: "video", label: "🎬 Walkthrough Videos" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#0F1A24] text-white shadow-md"
                      : "bg-white border border-[#E8E2D8] text-[#4B5563] hover:border-[#a46f47] hover:text-[#0F1A24]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clean 3-Column Uniform Project Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedPhoto(item.image);
                  setSelectedTitle(item.title);
                }}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-xs hover:shadow-xl hover:border-[#a46f47]/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md border border-white/10">
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

                  {/* Play Icon for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-6 w-6 ml-1 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Hover Eye Overlay for Photos */}
                  {item.type === "photo" && (
                    <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F1A24] shadow-md">
                        <Eye className="h-5 w-5" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-5">
                  <span className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase">
                    {item.tag} &bull; {item.location}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-[#0F1A24] mt-1 group-hover:text-[#a46f47] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0F1A24] shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                {selectedTitle}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedPhoto}
                alt={selectedTitle}
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 p-6 bg-[#0F1A24]">
              <div>
                <h3 className="font-serif text-xl font-normal text-white">
                  {selectedTitle}
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  Interested in getting your home designed by Founder Poorti Jain?
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={`https://wa.me/917490932661?text=${encodeURIComponent(`Hi Poorti, I am interested in design for ${selectedTitle}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-bold text-white hover:bg-[#1ebd59] transition-all shadow-md"
                >
                  <MessageSquare className="h-4 w-4 fill-current" /> WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenInquiryModal?.();
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-[#a46f47] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase hover:bg-[#8e5c36] transition-all shadow-md"
                >
                  Inquire This <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
