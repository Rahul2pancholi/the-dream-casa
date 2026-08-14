"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  project: string;
  stars: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul & Priya Sharma",
    location: "Vijay Nagar, Indore",
    project: "3BHK Residential Interior",
    stars: 5,
    text: "The Dream Casa transformed our home beyond what we imagined. The 3D design matched the final execution perfectly — we knew exactly what we were getting before construction even started.",
  },
  {
    name: "Amit Joshi",
    location: "Scheme 54, Indore",
    project: "Office Interior & Turnkey",
    stars: 5,
    text: "Professional, punctual, and genuinely passionate about their work. Poorti and her team handled everything from design to final handover. Zero stress for us.",
  },
  {
    name: "Sneha Malhotra",
    location: "New Palasia, Indore",
    project: "Villa Interior Design",
    stars: 5,
    text: "What sets them apart is the attention to detail. Every corner, every material, every light — nothing was left to chance. Our villa feels like a luxury resort now.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Client Love
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Client Stories
          </h2>

          {/* Client Feedback Note */}
          <div className="mt-2 flex items-center gap-2 text-sm text-muted">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span>Client Feedback</span>
          </div>
        </div>

        {/* Rotating Quote */}
        <div className="mt-16 flex flex-col items-center gap-8 text-center">
          <p className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
            &ldquo;{t.text}&rdquo;
          </p>

          <div className="flex flex-col items-center gap-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-semibold text-white">
              {getInitials(t.name)}
            </div>
            <span className="mt-2 text-sm font-semibold text-ink">{t.name}</span>
            <span className="text-xs text-muted">{t.location} &bull; {t.project}</span>
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center gap-2.5 pt-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active ? "w-6 bg-gold" : "w-2 bg-ink/15 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
