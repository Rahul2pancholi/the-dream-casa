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
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Client Love
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Real feedback from homeowners across Indore.
          </p>

          {/* Star Rating Display */}
          <div className="mt-2 flex items-center gap-2 rounded-full border border-gold/20 bg-cream-light px-5 py-2.5">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-bold text-ink">4.9/5</span>
            <span className="text-xs text-muted">&bull; Based on Google Reviews</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between gap-5 rounded-xl border border-gold/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-gold uppercase">
                    {t.project}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-gold/10 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-white">
                  {getInitials(t.name)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-ink">{t.name}</span>
                  <span className="text-xs text-muted">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
