import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="bg-cream px-6 py-24 text-ink sm:px-10 lg:px-16 border-y border-ink/10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left: Founder Portrait Frame */}
        <div className="order-1 lg:order-1 lg:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/15 shadow-md">
            <Image
              src="/images/projects/master-bedroom-03.jpg"
              alt="A warm interior detail from a Dream Casa project"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Founder's Note Pull-Quote */}
        <div className="order-2 flex flex-col items-start gap-6 text-left lg:order-2 lg:col-span-8">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            The Person Behind the Studio
          </div>

          <p className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl lg:text-4xl">
            &ldquo;A home should be an authentic extension of who you are &mdash; every layout, material and light chosen with intent, and built exactly as it was promised.&rdquo;
          </p>

          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-lg font-bold text-ink">Poorti Jain</span>
            <span className="text-xs font-semibold tracking-wider text-gold uppercase">
              Founder &amp; Creative Director
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-ink/15 pt-5 text-xs font-medium tracking-wide text-muted">
            <span className="flex items-center gap-3">Est. 2025<span className="text-gold/60">/</span></span>
            <span className="flex items-center gap-3">Residential &amp; Turnkey<span className="text-gold/60">/</span></span>
            <span>Indore &amp; Ahmedabad</span>
          </div>

          <a
            href="https://wa.me/917490932661"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-ink uppercase transition-all hover:bg-ink hover:text-cream-light shadow-sm"
          >
            <MessageCircle className="h-4 w-4" /> Talk to Poorti
          </a>
        </div>
      </div>
    </section>
  );
}
