"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Maximize2, Layers, Play, Film } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface LightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectLightboxModal({ project, onClose }: LightboxProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setShowVideo(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, activeImageIndex, showVideo]);

  if (!project) return null;

  const currentImage = project.gallery[activeImageIndex] || project.image;

  const handleNext = () => {
    setShowVideo(false);
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const handlePrev = () => {
    setShowVideo(false);
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-neutral-900 border border-gold/20 shadow-2xl lg:flex-row lg:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-all hover:bg-gold hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Main Viewport */}
        <div className="relative flex flex-1 flex-col justify-between bg-black/95 p-4 lg:p-6">
          <div className="relative flex flex-1 items-center justify-center min-h-[320px] sm:min-h-[460px]">
            {showVideo && project.videoUrl ? (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                className="max-h-[60vh] w-full object-contain"
              />
            ) : (
              <Image
                src={currentImage}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-contain transition-opacity duration-300"
                priority
              />
            )}

            {/* Previous Button */}
            {!showVideo && project.gallery.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:scale-110 hover:bg-gold hover:text-ink"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next Button */}
            {!showVideo && project.gallery.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:scale-110 hover:bg-gold hover:text-ink"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Media Selector Strip */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 pt-2">
            {project.videoUrl && (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className={`relative flex h-16 w-24 shrink-0 flex-col items-center justify-center rounded-md border-2 bg-gold/20 text-gold transition-all ${
                  showVideo
                    ? "border-gold bg-gold text-ink font-bold scale-105"
                    : "border-gold/40 hover:bg-gold/30"
                }`}
              >
                <Film className="h-5 w-5" />
                <span className="text-[10px] uppercase tracking-wider font-semibold mt-1">Site Video</span>
              </button>
            )}

            {project.gallery.map((imgUrl, idx) => (
              <button
                key={imgUrl + idx}
                type="button"
                onClick={() => {
                  setShowVideo(false);
                  setActiveImageIndex(idx);
                }}
                className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  !showVideo && idx === activeImageIndex
                    ? "border-gold opacity-100 scale-105"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Side Detail Sidebar */}
        <div className="flex w-full flex-col justify-between overflow-y-auto bg-cream-light p-6 lg:w-96 lg:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wider text-gold uppercase">
                {project.typeLabel}
              </span>
              <span className="text-[11px] font-medium text-muted uppercase">
                {project.category}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-medium tracking-wide text-gold">
              {project.subtitle}
            </p>

            <span className="my-1 h-px w-12 bg-gold/40" />

            <p className="text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Specs Grid */}
            <div className="mt-4 grid grid-cols-2 gap-4 rounded-xl border border-gold/15 bg-white p-4 shadow-sm">
              {project.specs.location && (
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> Location
                  </span>
                  <span className="text-xs font-medium text-ink">
                    {project.specs.location}
                  </span>
                </div>
              )}
              {project.specs.style && (
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <Layers className="h-3.5 w-3.5 text-gold" /> Design Style
                  </span>
                  <span className="text-xs font-medium text-ink">
                    {project.specs.style}
                  </span>
                </div>
              )}
              {project.specs.area && (
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <Maximize2 className="h-3.5 w-3.5 text-gold" /> Carpet Area
                  </span>
                  <span className="text-xs font-medium text-ink">
                    {project.specs.area}
                  </span>
                </div>
              )}
              {project.specs.timeline && (
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <Calendar className="h-3.5 w-3.5 text-gold" /> Timeline
                  </span>
                  <span className="text-xs font-medium text-ink">
                    {project.specs.timeline}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="/contact"
              className="flex w-full items-center justify-center rounded-md bg-gold py-3 text-center text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-gold-dark"
            >
              Request Similar Design
            </a>
            <span className="text-center text-[11px] text-muted">
              {showVideo ? "Watching Video Walkthrough" : `${activeImageIndex + 1} of ${project.gallery.length} Photos`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
