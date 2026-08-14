import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
      <Image
        src="/images/hero/cta-living-room.jpg"
        alt="Elegant living room by The Dream Casa"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
        <div className="max-w-2xl flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            <span className="h-px w-8 bg-gold/70" />
            Start a Project
            <span className="h-px w-8 bg-gold/70" />
          </div>
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
            Your Space Should Feel Like No One Else&apos;s.
          </h2>
          <p className="text-sm text-white/80">
            Begin a conversation about your home, your vision and how we can bring it to life.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="border border-white px-8 py-4 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all hover:bg-cream-light hover:text-ink"
            >
              Enquire Now
            </Link>
            <Link
              href="/projects"
              className="px-2 py-4 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-colors hover:text-gold"
            >
              View Selected Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
