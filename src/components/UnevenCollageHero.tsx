"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Eye, Sparkles, CheckCircle2, X, ArrowRight } from "lucide-react";

interface MosaicTile {
  id: string;
  type: "photo" | "video";
  title: string;
  location: string;
  category: "living" | "bedroom" | "kitchen" | "video";
  image: string;
  gridSpan: string; // Tailwind grid span classes
  tag: string;
  status: "Completed Residence" | "3D Concept Render" | "On-Site Video";
}

const mosaicTiles: MosaicTile[] = [
  {
    id: "m1",
    type: "video",
    title: "4BHK Luxury Duplex Site Walkthrough",
    location: "Yeshwant Niwas Rd, Indore",
    category: "video",
    image: "/images/projects/living-kitchen-01.jpg",
    gridSpan: "col-span-1 md:col-span-2 row-span-2 min-h-[360px] md:min-h-[460px]",
    tag: "Site Walkthrough",
    status: "On-Site Video",
  },
  {
    id: "m2",
    type: "photo",
    title: "Minimalist Italian Living Room",
    location: "Vijay Nagar, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-02.jpg",
    gridSpan: "col-span-1 row-span-1 min-h-[180px] md:min-h-[230px]",
    tag: "Living Suite",
    status: "Completed Residence",
  },
  {
    id: "m3",
    type: "photo",
    title: "Fluted Brass Master Suite",
    location: "Super Corridor, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-01.jpg",
    gridSpan: "col-span-1 row-span-2 min-h-[360px] md:min-h-[460px]",
    tag: "Master Suite",
    status: "3D Concept Render",
  },
  {
    id: "m4",
    type: "photo",
    title: "Handleless Quartz Modular Kitchen",
    location: "Bicholi Mardana, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-04.jpg",
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[180px] md:min-h-[230px]",
    tag: "Modular Kitchen",
    status: "Completed Residence",
  },
  {
    id: "m5",
    type: "photo",
    title: "Velvet Lounge & False Ceiling Details",
    location: "AB Road, Indore",
    category: "living",
    image: "/images/projects/living-kitchen-05.jpg",
    gridSpan: "col-span-1 row-span-1 min-h-[180px] md:min-h-[230px]",
    tag: "Lounge Suite",
    status: "Completed Residence",
  },
  {
    id: "m6",
    type: "photo",
    title: "Contemporary Open Dining Area",
    location: "Palasia, Indore",
    category: "kitchen",
    image: "/images/projects/living-kitchen-07.jpg",
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[180px] md:min-h-[230px]",
    tag: "Dining Suite",
    status: "Completed Residence",
  },
  {
    id: "m7",
    type: "photo",
    title: "Warm Oak & Cane Guest Suite",
    location: "Saket Nagar, Indore",
    category: "bedroom",
    image: "/images/projects/master-bedroom-02.jpg",
    gridSpan: "col-span-1 row-span-1 min-h-[180px] md:min-h-[230px]",
    tag: "Guest Suite",
    status: "3D Concept Render",
  },
  {
    id: "m8",
    type: "photo",
    title: "Bespoke Walnut Foyer Lounge",
    location: "Bodakdev, Ahmedabad",
    category: "living",
    image: "/images/projects/present-room-01.jpg",
    gridSpan: "col-span-1 row-span-1 min-h-[180px] md:min-h-[230px]",
    tag: "Foyer Design",
    status: "Completed Residence",
  },
];

interface UnevenCollageHeroProps {
  onOpenInquiryModal?: () => void;
}

export default function UnevenCollageHero({ onOpenInquiryModal }: UnevenCollageHeroProps) {
  const [selectedTile, setSelectedTile] = useState<MosaicTile | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTiles = activeTab === "all"
    ? mosaicTiles
    : activeTab === "video"
    ? mosaicTiles.filter(t => t.type === "video")
    : mosaicTiles.filter(t => t.category === activeTab);

  return (
    <section className="bg-[#FAF7F2] py-6 sm:py-8 px-4 sm:px-8 lg:px-12 border-b border-[#E8E2D8]">
      <div className="mx-auto max-w-7xl">
        {/* Compact Header & Category Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
              <span className="h-px w-6 bg-[#a46f47]" />
              ARCHITECTURAL PORTFOLIO MOSAIC
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F1A24] leading-tight mt-0.5">
              Selected Works, 3D Renders &amp; Video Walkthroughs
            </h1>
          </div>

          {/* Sharp Tab Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar shrink-0">
            {[
              { id: "all", label: "All Works" },
              { id: "video", label: "🎬 Live Videos" },
              { id: "living", label: "Living" },
              { id: "bedroom", label: "Bedrooms" },
              { id: "kitchen", label: "Kitchens" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-none px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all border ${
                  activeTab === tab.id
                    ? "bg-[#0F1A24] border-[#0F1A24] text-white"
                    : "bg-white border-[#E8E2D8] text-[#4B5563] hover:border-[#a46f47] hover:text-[#0F1A24]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Seamless Edge-to-Edge Architectural Mosaic Grid (Sharp Corners & Tight Hairline Fits) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 bg-[#0F1A24] p-1 border border-[#0F1A24] shadow-md">
          {filteredTiles.map((tile) => (
            <div
              key={tile.id}
              onClick={() => setSelectedTile(tile)}
              className={`relative ${tile.gridSpan} group overflow-hidden rounded-none bg-[#0F1A24] cursor-pointer transition-all duration-300 hover:z-20 hover:scale-[1.01]`}
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Sharp Status Tag */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white border border-white/10 rounded-none backdrop-blur-xs">
                {tile.type === "video" ? (
                  <>
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold uppercase">{tile.status}</span>
                  </>
                ) : tile.status === "Completed Residence" ? (
                  <>
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    <span>{tile.status}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3 w-3 text-[#d4af37]" />
                    <span>{tile.status}</span>
                  </>
                )}
              </div>

              {/* Video Play Overlay */}
              {tile.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-none bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 border border-white/20">
                    <Play className="h-6 w-6 ml-1 fill-current" />
                  </div>
                </div>
              )}

              {/* Sharp Hover Eye Icon */}
              {tile.type === "photo" && (
                <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-8 w-8 items-center justify-center rounded-none bg-white text-[#0F1A24] shadow-md">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
              )}

              {/* Tile Footer Details */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-[10px] font-semibold tracking-widest text-[#d4af37] uppercase block">
                  {tile.tag} &bull; {tile.location}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-normal leading-snug text-white mt-0.5 group-hover:text-[#d4af37] transition-colors">
                  {tile.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      {selectedTile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-none border border-white/10 bg-[#0F1A24] shadow-2xl text-white">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-[#a46f47] uppercase">
                  {selectedTile.tag}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-xs text-white/70">{selectedTile.location}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTile(null)}
                className="flex h-9 w-9 items-center justify-center rounded-none bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Media Display */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedTile.image}
                alt={selectedTile.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Footer CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 p-6 bg-[#0F1A24]">
              <div>
                <h3 className="font-serif text-xl font-normal text-white">
                  {selectedTile.title}
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  Want a similar bespoke interior execution for your residence?
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedTile(null);
                  onOpenInquiryModal?.();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none bg-[#a46f47] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase hover:bg-[#8e5c36] transition-all shadow-md shrink-0"
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
