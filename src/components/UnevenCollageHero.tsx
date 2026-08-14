"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Eye, Sparkles, CheckCircle2, X, ArrowRight, Video } from "lucide-react";

interface CollageItem {
  id: string;
  type: "photo" | "video";
  title: string;
  location: string;
  category: string;
  image: string;
  spanClass: string; // e.g. "col-span-1 md:col-span-2 row-span-2", etc.
  tag: string;
  status: "Completed Residence" | "3D Concept Render" | "On-Site Video";
}

const collageItems: CollageItem[] = [
  {
    id: "c1",
    type: "video",
    title: "4BHK Luxury Duplex Walkthrough",
    location: "Yeshwant Niwas Rd, Indore",
    category: "Video Walkthrough",
    image: "/images/projects/living-kitchen-01.jpg",
    spanClass: "col-span-1 md:col-span-2 row-span-2 min-h-[320px] md:min-h-[420px]",
    tag: "Site Walkthrough",
    status: "On-Site Video",
  },
  {
    id: "c2",
    type: "photo",
    title: "Minimalist Italian Living & Dining",
    location: "Vijay Nagar, Indore",
    category: "Living Room",
    image: "/images/projects/living-kitchen-02.jpg",
    spanClass: "col-span-1 row-span-1 min-h-[200px] md:min-h-[240px]",
    tag: "Living Suite",
    status: "Completed Residence",
  },
  {
    id: "c3",
    type: "photo",
    title: "Fluted Brass Master Suite",
    location: "Super Corridor, Indore",
    category: "Bedroom",
    image: "/images/projects/master-bedroom-01.jpg",
    spanClass: "col-span-1 row-span-2 min-h-[320px] md:min-h-[420px]",
    tag: "Master Suite",
    status: "3D Concept Render",
  },
  {
    id: "c4",
    type: "photo",
    title: "Handleless Quartz Modular Kitchen",
    location: "Bicholi Mardana, Indore",
    category: "Kitchen",
    image: "/images/projects/living-kitchen-04.jpg",
    spanClass: "col-span-1 md:col-span-2 row-span-1 min-h-[200px] md:min-h-[240px]",
    tag: "Modular Kitchen",
    status: "Completed Residence",
  },
  {
    id: "c5",
    type: "photo",
    title: "Velvet Lounge & False Ceiling Details",
    location: "AB Road, Indore",
    category: "Living Room",
    image: "/images/projects/living-kitchen-05.jpg",
    spanClass: "col-span-1 row-span-1 min-h-[200px] md:min-h-[240px]",
    tag: "Lounge Area",
    status: "Completed Residence",
  },
  {
    id: "c6",
    type: "photo",
    title: "Contemporary Open Dining",
    location: "Palasia, Indore",
    category: "Dining",
    image: "/images/projects/living-kitchen-07.jpg",
    spanClass: "col-span-1 md:col-span-2 row-span-1 min-h-[200px] md:min-h-[240px]",
    tag: "Dining Suite",
    status: "Completed Residence",
  },
  {
    id: "c7",
    type: "photo",
    title: "Warm Oak & Cane Guest Suite",
    location: "Saket Nagar, Indore",
    category: "Bedroom",
    image: "/images/projects/master-bedroom-02.jpg",
    spanClass: "col-span-1 row-span-1 min-h-[200px] md:min-h-[240px]",
    tag: "Guest Room",
    status: "3D Concept Render",
  },
  {
    id: "c8",
    type: "photo",
    title: "Bespoke Walnut Foyer Lounge",
    location: "Bodakdev, Ahmedabad",
    category: "Foyer",
    image: "/images/projects/present-room-01.jpg",
    spanClass: "col-span-1 row-span-1 min-h-[200px] md:min-h-[240px]",
    tag: "Foyer Design",
    status: "Completed Residence",
  },
];

interface UnevenCollageHeroProps {
  onOpenInquiryModal?: () => void;
}

export default function UnevenCollageHero({ onOpenInquiryModal }: UnevenCollageHeroProps) {
  const [selectedItem, setSelectedItem] = useState<CollageItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredItems = filterCategory === "all"
    ? collageItems
    : filterCategory === "video"
    ? collageItems.filter(item => item.type === "video")
    : collageItems.filter(item => item.category.toLowerCase().includes(filterCategory));

  return (
    <section className="bg-[#FAF7F2] py-8 sm:py-12 px-4 sm:px-8 lg:px-12 border-b border-[#E8E2D8]">
      <div className="mx-auto max-w-7xl">
        {/* Compact Header & Category Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
              <span className="h-px w-6 bg-[#a46f47]" />
              SELECTED PORTFOLIO &amp; LIVE SITES
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0F1A24] leading-tight mt-1">
              Explore Real Residences &amp; Video Walkthroughs
            </h1>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
            {[
              { id: "all", label: "All Work" },
              { id: "video", label: "🎬 Live Videos" },
              { id: "living", label: "Living" },
              { id: "bedroom", label: "Bedrooms" },
              { id: "kitchen", label: "Kitchens" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterCategory(tab.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  filterCategory === tab.id
                    ? "bg-[#0F1A24] text-white shadow-sm"
                    : "bg-white border border-[#E8E2D8] text-[#4B5563] hover:border-[#a46f47] hover:text-[#0F1A24]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical / Uneven Masonry Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 auto-rows-[200px] md:auto-rows-[220px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`relative ${item.spanClass} group overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md border border-white/10">
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

              {/* Play Button Overlay for Video */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 ml-1 fill-current" />
                  </div>
                </div>
              )}

              {/* Hover Eye Icon for Photos */}
              {item.type === "photo" && (
                <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0F1A24] shadow-md backdrop-blur-xs">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
              )}

              {/* Card Footer Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <span className="text-[10px] font-semibold tracking-widest text-[#d4af37] uppercase">
                  {item.tag} &bull; {item.location}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-normal leading-snug text-white mt-0.5 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Walkthrough Preview Modal */}
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
                onClick={() => setSelectedItem(null)}
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
                  Want a similar bespoke interior execution for your home?
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
