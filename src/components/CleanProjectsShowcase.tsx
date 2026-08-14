"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Eye, Sparkles, CheckCircle2, X, ArrowRight } from "lucide-react";

interface ProjectCardItem {
  id: string;
  type: "photo" | "video";
  title: string;
  location: string;
  category: "living" | "bedroom" | "kitchen" | "video";
  image: string;
  tag: string;
  status: "Completed Residence" | "3D Concept Render" | "On-Site Video";
  isFeatured?: boolean;
}

const projectCards: ProjectCardItem[] = [
  {
    id: "f1",
    type: "video",
    title: "Yeshwant Niwas 4BHK Luxury Duplex Walkthrough",
    location: "Yeshwant Niwas Rd, Indore",
    category: "video",
    image: "/images/projects/living-kitchen-01.jpg",
    tag: "Featured On-Site Video",
    status: "On-Site Video",
    isFeatured: true,
  },
  {
    id: "p1",
    type: "photo",
    title: "Minimalist Italian Living & Dining Suite",
    location: "Vijay Nagar, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-02.jpg",
    tag: "Living Suite",
    status: "Completed Residence",
  },
  {
    id: "p2",
    type: "photo",
    title: "Fluted Brass & Veneer Master Bedroom",
    location: "Super Corridor, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-01.jpg",
    tag: "Master Suite",
    status: "3D Concept Render",
  },
  {
    id: "p3",
    type: "photo",
    title: "Handleless Quartz Island Modular Kitchen",
    location: "Bicholi Mardana, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-04.jpg",
    tag: "Modular Kitchen",
    status: "Completed Residence",
  },
  {
    id: "p4",
    type: "photo",
    title: "Velvet Lounge & False Ceiling Details",
    location: "AB Road, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-05.jpg",
    tag: "Lounge Area",
    status: "Completed Residence",
  },
  {
    id: "p5",
    type: "photo",
    title: "Warm Oak & Cane Guest Suite",
    location: "Saket Nagar, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-02.jpg",
    tag: "Guest Suite",
    status: "3D Concept Render",
  },
  {
    id: "p6",
    type: "photo",
    title: "Contemporary Open Dining & Kitchen",
    location: "Palasia, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-07.jpg",
    tag: "Dining & Kitchen",
    status: "Completed Residence",
  },
  {
    id: "p7",
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
  const [selectedItem, setSelectedItem] = useState<ProjectCardItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const featuredItem = projectCards.find((p) => p.isFeatured) || projectCards[0];
  const gridItems = projectCards.filter((p) => !p.isFeatured);

  const filteredGrid = activeCategory === "all"
    ? gridItems
    : activeCategory === "video"
    ? projectCards.filter((p) => p.type === "video")
    : projectCards.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-[#FAF7F2] py-10 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase mb-1">
              <span className="h-px w-8 bg-[#a46f47]" />
              SELECTED PORTFOLIO &amp; REAL SITES
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F1A24] leading-tight">
              Our Completed Work &amp; Video Walkthroughs
            </h1>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              Clear, transparent showcase of completed residences and 3D architectural renders in Indore &amp; Ahmedabad.
            </p>
          </div>

          {/* Simple Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
            {[
              { id: "all", label: "All Projects" },
              { id: "living", label: "Living Rooms" },
              { id: "bedroom", label: "Bedrooms" },
              { id: "kitchen", label: "Kitchens" },
              { id: "video", label: "🎬 Walkthroughs" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#0F1A24] text-white shadow-sm"
                    : "bg-white border border-[#E8E2D8] text-[#4B5563] hover:border-[#a46f47] hover:text-[#0F1A24]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Main Featured Project Banner (Clean Single Hero Focus) */}
        {activeCategory === "all" && (
          <div
            onClick={() => setSelectedItem(featuredItem)}
            className="relative mb-8 overflow-hidden rounded-2xl border border-[#E8E2D8] bg-[#0F1A24] shadow-md cursor-pointer group"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
              <Image
                src={featuredItem.image}
                alt={featuredItem.title}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-7 w-7 ml-1 fill-current" />
                </div>
              </div>

              {/* Top Status */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 font-bold uppercase">{featuredItem.status}</span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#d4af37] uppercase">
                    {featuredItem.tag} &bull; {featuredItem.location}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1">
                    {featuredItem.title}
                  </h2>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-xs font-semibold text-white uppercase backdrop-blur-md group-hover:bg-[#a46f47] group-hover:border-[#a46f47] transition-all shrink-0">
                  Watch Video Walkthrough <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. Clean 3-Column Uniform Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGrid.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group"
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
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md border border-white/10">
                  {item.status === "Completed Residence" ? (
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

                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F1A24] shadow-md">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
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

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0F1A24] shadow-2xl text-white">
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
                onClick={() => setSelectedItem(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 p-6 bg-[#0F1A24]">
              <div>
                <h3 className="font-serif text-xl font-normal text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  Want a similar bespoke execution for your residence?
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedItem(null);
                  onOpenInquiryModal?.();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#a46f47] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase hover:bg-[#8e5c36] transition-all shadow-md shrink-0"
              >
                Inquire This Design <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
