"use client";

import { useState, useRef, ReactNode } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface BeforeAfterItem {
  id: string;
  title: string;
  room: string;
  before3d: string;
  afterReal: string;
  description: string;
}

const comparisons: BeforeAfterItem[] = [
  {
    id: "comp-living-1",
    title: "Living Room Accent Wall & Curved Sofa",
    room: "Living Room",
    before3d: "/images/projects/living-kitchen-01.jpg",
    afterReal: "/images/eklavya/image-11-1.jpg",
    description: "Slide left and right to compare our 3D photorealistic render with the actual completed site execution.",
  },
  {
    id: "comp-bedroom-1",
    title: "Master Suite Headboard & Cove Lights",
    room: "Master Bedroom",
    before3d: "/images/projects/master-bedroom-01.jpg",
    afterReal: "/images/eklavya/image-15-1.jpg",
    description: "Flawless execution of acoustic fabric panels, warm LED cove lighting, and luxury veneer wardrobes.",
  },
];

export default function BeforeAfterSlider() {
  const [activeItem, setActiveItem] = useState(comparisons[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="bg-cream px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            3D vs Real Execution
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            What We Promise Is What We Deliver
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            Drag the interactive slider below to compare our 3D photorealistic design renders side-by-side with our real turnkey site executions.
          </p>
        </div>

        {/* Room Switcher Tabs */}
        <div className="mt-8 flex justify-start gap-3">
          {comparisons.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveItem(item);
                setSliderPosition(50);
              }}
              className={`rounded-full px-6 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                activeItem.id === item.id
                  ? "bg-gold text-white shadow-md"
                  : "bg-white text-ink/70 hover:text-ink border border-gold/20"
              }`}
            >
              {item.room}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-gold/20 bg-white p-4 shadow-xl sm:p-6 lg:p-8">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-xl select-none cursor-ew-resize min-h-[320px] sm:min-h-[480px]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After (Real Site Photo) - Base Background */}
            <Image
              src={activeItem.afterReal}
              alt="Real Site Execution"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute right-4 top-4 z-10 rounded-full bg-emerald-700/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-white shadow backdrop-blur">
              Real Site Execution
            </div>

            {/* Before (3D Render Concept) - Clipped Overlay */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative h-full w-full min-w-[320px] sm:min-w-[600px] lg:min-w-[1000px]">
                <Image
                  src={activeItem.before3d}
                  alt="3D Render Concept"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute left-4 top-4 z-10 rounded-full bg-gold/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-ink shadow backdrop-blur">
                3D Render Concept
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-2xl border-2 border-white backdrop-blur">
                <MoveHorizontal className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink">
                {activeItem.title}
              </h3>
              <p className="mt-1 text-xs text-muted">
                {activeItem.description}
              </p>
            </div>
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-gold tracking-widest uppercase">
              <Sparkles className="h-4 w-4" /> 100% Execution Fidelity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
