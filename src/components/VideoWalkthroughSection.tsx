"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, X, Volume2, VolumeX, MapPin, ArrowRight } from "lucide-react";
import { videoWalkthroughs } from "@/data/projects";

export default function VideoWalkthroughSection() {
  const [activeVideo, setActiveVideo] = useState<(typeof videoWalkthroughs)[0] | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (id: string) => {
    setHoveredVideoId(id);
    const vid = videoRefs.current[id];
    if (vid) {
      vid.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id: string) => {
    setHoveredVideoId(null);
    const vid = videoRefs.current[id];
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
  };

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Live Site Execution Reels
          </div>
          <h2 className="font-serif text-3xl leading-tight text-cream-light sm:text-4xl lg:text-5xl">
            Watch Real Site Walkthroughs
          </h2>
          <p className="text-sm leading-relaxed text-muted/90 sm:text-base">
            Experience our craftsmanship in motion. Watch raw on-site video walkthroughs of finished interior projects delivered by The Dream Casa.
          </p>
        </div>

        {/* Featured Main Video Banner */}
        <div className="mt-14 relative overflow-hidden border border-white/10 bg-charcoal">
          <div className="grid lg:grid-cols-12 lg:items-center">
            {/* Left Video Teaser */}
            <div
              className="relative aspect-video w-full overflow-hidden lg:col-span-7 group cursor-pointer"
              onClick={() => setActiveVideo(videoWalkthroughs[0])}
            >
              <Image
                src={videoWalkthroughs[0].poster}
                alt={videoWalkthroughs[0].title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-charcoal/40 text-white backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:border-gold group-hover:text-ink">
                  <Play className="h-8 w-8 translate-x-0.5 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="flex items-center gap-1.5 rounded-md bg-charcoal/60 px-2.5 py-1 backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> {videoWalkthroughs[0].location}
                </span>
                <span className="rounded-md bg-charcoal/60 px-2.5 py-1 backdrop-blur">
                  {videoWalkthroughs[0].duration}
                </span>
              </div>
            </div>

            {/* Right Text Details */}
            <div className="flex flex-col gap-5 p-8 lg:col-span-5 lg:p-10">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-gold uppercase">
                <span className="h-px w-8 bg-gold/70" />
                Featured Site Video
              </div>
              <h3 className="font-serif text-2xl text-white sm:text-3xl">
                {videoWalkthroughs[0].title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                {videoWalkthroughs[0].description}
              </p>
              <button
                type="button"
                onClick={() => setActiveVideo(videoWalkthroughs[0])}
                className="mt-2 inline-flex items-center justify-center gap-3 border border-white/70 px-8 py-3.5 text-xs font-semibold tracking-widest text-white uppercase transition-all hover:bg-cream-light hover:text-ink"
              >
                <Play className="h-4 w-4 fill-current" /> Watch Full HD Walkthrough
              </button>
            </div>
          </div>
        </div>

        {/* Video Reels Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videoWalkthroughs.slice(1).map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-charcoal/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 cursor-pointer"
            >
              {/* Video Preview Container */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-charcoal sm:aspect-[4/3]">
                {/* Fallback Poster Image */}
                <Image
                  src={item.poster}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition-opacity duration-500 ${
                    hoveredVideoId === item.id ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Hover Video Preview */}
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el;
                  }}
                  src={item.videoUrl}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    hoveredVideoId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Video Duration Badge */}
                <div className="absolute right-3 top-3 rounded-md bg-charcoal/70 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {item.duration}
                </div>

                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal/60 text-white backdrop-blur border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:border-gold group-hover:text-ink">
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 text-[11px] font-medium text-gold bg-charcoal/70 px-2.5 py-1 rounded-md backdrop-blur">
                  Video Walkthrough
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-serif text-base text-white group-hover:text-gold transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-gold" /> {item.location}
                  </span>
                  <span className="font-semibold text-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Play <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal Player */}
      {activeVideo && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-lg sm:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-charcoal border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex flex-col">
                <h3 className="font-serif text-lg text-white">
                  {activeVideo.title}
                </h3>
                <span className="text-xs text-gold">{activeVideo.subtitle}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative flex-1 bg-charcoal">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                muted={isMuted}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 px-6 py-4 bg-charcoal/60">
              <p className="text-xs text-neutral-300 max-w-xl">
                {activeVideo.description}
              </p>
              <a
                href="/contact"
                className="shrink-0 border border-white/40 px-6 py-2.5 text-center text-xs font-semibold tracking-wider text-white uppercase hover:bg-cream-light hover:text-ink transition-colors"
              >
                Book Site Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
