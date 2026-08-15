"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero/living-room.jpg",
    alt: "Luxury living room designed by best interior designer in Indore - The Dream Casa",
    title: "Luxury Interior Designer in Indore & Turnkey Projects",
  },
  {
    src: "/images/projects/living-kitchen-01.jpg",
    alt: "3D Photorealistic architectural render by Poorti Jain interior designer Indore",
    title: "3D Photorealistic Architectural Renders",
  },
  {
    src: "/images/projects/master-bedroom-01.jpg",
    alt: "Master bedroom interior design execution by The Dream Casa Indore",
    title: "100% On-Site Turnkey Site Execution",
  },
];

interface HeroProps {
  onOpenInquiryModal?: () => void;
}

export default function Hero({ onOpenInquiryModal }: HeroProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[540px] overflow-hidden bg-charcoal sm:min-h-[600px] lg:h-[640px] lg:bg-cream px-6 sm:px-10 lg:px-16 flex items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 lg:left-[38%]">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 62vw, 100vw"
            className={`object-cover object-center transition-all duration-1000 ${index === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          />
        ))}
      </div>

      {/* Overlays for Desktop vs Mobile */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-cream) 0%, var(--color-cream) 45%, rgba(var(--color-cream-glow-rgb), 0.8) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 block lg:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(var(--color-charcoal-rgb), 0.95) 0%, rgba(var(--color-charcoal-rgb), 0.75) 50%, rgba(var(--color-charcoal-rgb), 0.4) 100%)",
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl py-12 lg:py-0">
        <div className="flex max-w-lg flex-col justify-center gap-6 sm:gap-7 text-left">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            <span className="h-px w-8 bg-gold/70" />
            The Dream Casa
          </div>

          {/* Primary H1 Heading */}
          <h1 className="font-serif text-4xl leading-[1.1] text-white lg:text-ink sm:text-5xl lg:text-6xl">
            Interiors, Designed With Intent.
          </h1>

          {/* Clean Subheading Description */}
          <p className="max-w-md text-sm leading-relaxed text-neutral-200 lg:text-muted sm:text-base">
            Bespoke interiors, thoughtfully designed and meticulously executed.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {onOpenInquiryModal ? (
              <button
                type="button"
                onClick={onOpenInquiryModal}
                className="inline-flex items-center gap-2 bg-[#a46f47] border border-[#a46f47] px-6 sm:px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all hover:bg-[#8e5c36] shadow-lg"
              >
                Book Design Consultation <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/70 lg:border-ink px-6 sm:px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-white lg:text-ink uppercase transition-all hover:bg-cream-light hover:text-ink lg:hover:bg-ink lg:hover:text-cream-light"
              >
                Book Design Consultation
              </Link>
            )}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/40 lg:border-ink/30 px-6 py-3.5 text-xs font-semibold tracking-[0.15em] text-white lg:text-ink uppercase transition-all hover:border-gold hover:text-gold"
            >
              View Our Portfolio
            </Link>
          </div>

          {/* Slide Navigation Dots */}
          <div className="flex items-center gap-2.5 pt-4 sm:pt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === active ? "w-8 bg-gold" : "w-2.5 bg-white/40 lg:bg-ink/25 hover:bg-gold"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
