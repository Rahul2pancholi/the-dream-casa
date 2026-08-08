"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Award } from "lucide-react";

const slides = [
  {
    src: "/images/hero/living-room.jpg",
    alt: "Luxury living room designed by The Dream Casa",
    title: "Luxury Interiors & Turnkey Solutions",
  },
  {
    src: "/images/projects/living-kitchen-01.jpg",
    alt: "Contemporary living room with round accent seating",
    title: "3D Photorealistic Architectural Renders",
  },
  {
    src: "/images/projects/master-bedroom-01.jpg",
    alt: "Warm, elegant master bedroom design",
    title: "On-Site Turnkey Site Execution",
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
    <section className="relative h-[480px] overflow-hidden bg-cream sm:h-[540px] lg:h-[600px] px-6 sm:px-10 lg:px-16">
      {/* Background Slideshow */}
      <div className="absolute inset-y-0 left-[35%] right-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="65vw"
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      {/* Radial and Linear Gradient Overlays */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, var(--color-cream) 0%, var(--color-cream) 40%, transparent 68%)",
        }}
      />
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to right, var(--color-cream) 0%, var(--color-cream) 82%, transparent 100%)",
        }}
      />

      {/* Hero Content Container */}
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center relative z-10">
        <div className="flex max-w-xl flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-gold uppercase backdrop-blur w-fit">
            <Award className="h-3.5 w-3.5" /> Premium Interior Studio &bull; Indore
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Luxury Interiors. <span className="text-gold italic font-normal">Turnkey Execution.</span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            From photorealistic 3D concepts to complete turnkey site execution, we transform spaces into timeless sanctuaries.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all shadow-lg hover:bg-gold-dark hover:shadow-gold/25 hover:scale-105"
            >
              <Sparkles className="h-4 w-4" /> Explore Projects
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/60 px-7 py-3.5 text-xs font-semibold tracking-[0.15em] text-ink uppercase backdrop-blur transition-all hover:border-gold hover:text-gold hover:bg-white"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Slide Navigation Dots */}
        <div className="absolute bottom-8 left-0 z-10 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-gold" : "w-2.5 bg-ink/25 hover:bg-ink/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
