import { MessageCircle } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: Founder Photo Placeholder */}
        <div className="order-1 flex justify-center lg:order-1 lg:justify-start">
          {/* Replace with: <Image src="/images/founder/poorti-jain.jpg" ... /> */}
          <div className="flex h-[500px] w-full max-w-[400px] items-center justify-center rounded-2xl bg-gold/10 text-center">
            <span className="text-sm font-medium tracking-wide text-muted">
              Photo Coming Soon
            </span>
          </div>
        </div>

        {/* Right: Founder Content */}
        <div className="order-2 flex flex-col items-start gap-4 text-left lg:order-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Meet the Founder
          </p>
          <span className="h-px w-10 bg-gold" />
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Poorti Jain
          </h2>
          <p className="text-sm font-semibold tracking-wider text-gold uppercase">
            Founder &amp; Creative Director
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            The Dream Casa was born from a simple belief — that every home
            should feel as beautiful as it looks. With over 6 years of
            experience in luxury residential and commercial interiors, Poorti
            brings both creative vision and meticulous execution to every
            project.
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            From the first consultation to the final handover, she personally
            oversees every project to ensure it meets The Dream Casa&apos;s
            standard of excellence.
          </p>
          <a
            href="https://wa.me/917490932661"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all shadow-xl hover:bg-gold-dark hover:shadow-gold/25 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> Talk to Poorti
          </a>
        </div>
      </div>
    </section>
  );
}
