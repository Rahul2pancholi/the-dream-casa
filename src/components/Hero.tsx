"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Award } from "lucide-react";

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

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#161412] sm:min-h-[600px] lg:h-[640px] lg:bg-cream px-6 sm:px-10 lg:px-16 flex items-center">
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
            className={`object-cover object-center transition-all duration-1000 ${
              index === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      {/* Overlays for Desktop vs Mobile */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-cream) 0%, var(--color-cream) 45%, rgba(250, 248, 245, 0.8) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 block lg:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(22, 20, 18, 0.95) 0%, rgba(22, 20, 18, 0.75) 50%, rgba(22, 20, 18, 0.4) 100%)",
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl py-12 lg:py-0">
        <div className="flex max-w-xl flex-col justify-center gap-5 sm:gap-6 text-left">
          {/* Location & SEO Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold uppercase backdrop-blur w-fit">
            <Award className="h-4 w-4" /> Best Interior Designer in Indore &amp; Ahmedabad
          </div>

          {/* Primary Target H1 Heading */}
          <h1 className="font-serif text-3xl font-bold leading-tight text-white lg:text-ink sm:text-5xl lg:text-6xl">
            Best Interior Designer in Indore &amp; Ahmedabad.{" "}
            <span className="text-gold italic font-normal block sm:inline">Turnkey Luxury Homes.</span>
          </h1>

          {/* Target Description */}
          <p className="max-w-md text-sm leading-relaxed text-neutral-200 lg:text-muted sm:text-base">
            Founder Poorti Jain &amp; The Dream Casa deliver 3D photorealistic architectural renders &amp; 100% turnkey site execution for luxury residences &amp; offices across Indore &amp; Ahmedabad.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 sm:px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all shadow-xl hover:bg-gold-dark hover:shadow-gold/25 hover:scale-105"
            >
              <Sparkles className="h-4 w-4" /> Explore Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 lg:border-ink/20 bg-white/10 lg:bg-white/60 px-6 sm:px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-white lg:text-ink uppercase backdrop-blur transition-all hover:border-gold hover:text-gold hover:bg-white"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Slide Navigation Dots */}
          <div className="flex items-center gap-2.5 pt-3 sm:pt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === active ? "w-8 bg-gold" : "w-2.5 bg-white/40 lg:bg-ink/25 hover:bg-gold"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
