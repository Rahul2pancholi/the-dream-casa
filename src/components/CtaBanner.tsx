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
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
        <div className="max-w-2xl flex flex-col items-center gap-5">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            Let&apos;s Create a Space You&apos;ll Love.
          </h2>
          <p className="text-sm text-white/80">
            From the first idea to the final detail, we bring your vision to
            life.
          </p>
          <Link
            href="/contact"
            className="mt-2 rounded-md bg-gold px-8 py-4 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-colors hover:bg-gold-dark"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
