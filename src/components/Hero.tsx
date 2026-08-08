"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/hero/living-room.jpg",
    alt: "Luxury living room designed by The Dream Casa",
  },
  {
    src: "/images/projects/living-kitchen-01.jpg",
    alt: "Contemporary living room with round accent seating",
  },
  {
    src: "/images/projects/master-bedroom-01.jpg",
    alt: "Warm, elegant master bedroom design",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[420px] overflow-hidden bg-cream sm:h-[480px] lg:h-[560px]">
      <div className="absolute inset-y-0 left-[38%] right-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="62vw"
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--color-cream) 0%, var(--color-cream) 38%, transparent 62%)",
        }}
      />
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to right, var(--color-cream) 0%, var(--color-cream) 78%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex h-full max-w-xl flex-col justify-center gap-6 px-6 sm:px-10 lg:px-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Designing Spaces,
          <br />
          Delivering Dreams
        </p>
        <span className="h-px w-10 bg-gold" />
        <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Luxury Interiors. End-to-End Turnkey Solutions.
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          From concept to completion, we design and deliver exceptional
          spaces that reflect your style and elevate your lifestyle.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="rounded-md bg-gold px-6 py-3 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:bg-gold-dark"
          >
            Explore Projects
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-ink/20 px-6 py-3 text-xs font-semibold tracking-[0.1em] text-ink uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Our Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:left-8 sm:translate-x-0">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === active ? "bg-ink/70" : "bg-ink/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
