"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Maximize2, Layers, Play, Film, Share2, Check } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface LightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectLightboxModal({ project, onClose }: LightboxProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [entered, setEntered] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setShowVideo(false);
    setCopied(false);
  }, [project]);

  useEffect(() => {
    if (!project) {
      setEntered(false);
      return;
    }
    setEntered(false);
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [project?.id]);

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

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}?project=${project.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access denied or unavailable — silently ignore
    }
  };

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/85 p-4 backdrop-blur-md sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div
        className={`relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-charcoal border border-white/10 shadow-2xl transition-all duration-200 ease-out lg:flex-row lg:max-h-[85vh] ${
          entered ? "scale-100 opacity-100" : "scale-[0.96] opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Right Action Buttons */}
        <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
          {/* Share Button */}
          <div className="relative">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Copy share link"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/70 text-white transition-all hover:bg-gold hover:text-ink"
            >
              {copied ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
            </button>
            {copied && (
              <span className="absolute right-0 top-12 whitespace-nowrap rounded-md bg-charcoal/85 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                Link copied!
              </span>
            )}
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/70 text-white transition-all hover:bg-gold hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main Viewport */}
        <div className="relative flex min-w-0 flex-1 flex-col justify-between bg-charcoal/95 p-4 lg:p-6">
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
        <div className="flex w-full shrink-0 flex-col justify-between overflow-y-auto bg-cream-light p-6 pt-8 lg:w-96 lg:p-8 lg:pt-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-gold">
              <span>{project.typeLabel}</span>
              <span className="text-gold/50">/</span>
              <span className="text-muted">{project.category}</span>
            </div>

            <h3 className="font-serif text-2xl text-ink leading-tight">
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
            <div className="mt-4 grid grid-cols-2 gap-4 border border-ink/10 bg-card p-4">
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

            {/* Scope of Work */}
            {project.scopeOfWork && project.scopeOfWork.length > 0 && (
              <div className="mt-2 flex flex-col gap-3">
                <h4 className="font-serif text-base text-ink">
                  Scope of Work
                </h4>
                <ul className="flex flex-col gap-2">
                  {project.scopeOfWork.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-ink/80">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenge & Solution */}
            {project.challenge && project.solution && (
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 border border-ink/10 bg-card p-4">
                  <h5 className="text-[11px] font-semibold tracking-wider text-gold uppercase">
                    The Challenge
                  </h5>
                  <p className="text-xs leading-relaxed text-muted">
                    {project.challenge}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 border border-ink/10 bg-card p-4">
                  <h5 className="text-[11px] font-semibold tracking-wider text-gold uppercase">
                    Our Approach
                  </h5>
                  <p className="text-xs leading-relaxed text-muted">
                    {project.solution}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href={`/projects/${project.id}`}
              className="flex w-full items-center justify-center border border-ink py-3 text-center text-xs font-semibold tracking-widest text-ink uppercase transition-colors hover:bg-ink hover:text-cream-light"
            >
              View Full Project
            </Link>
            <a
              href="/contact"
              className="flex w-full items-center justify-center border border-ink/20 py-3 text-center text-xs font-semibold tracking-widest text-ink uppercase transition-colors hover:bg-cream-dark"
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
