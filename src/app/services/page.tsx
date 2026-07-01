import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Ornament, SectionLabel, SectionTitle } from "@/components/ui";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interior Design Services",
  description:
    "Full home interior design, modular kitchen design, wardrobe design, 3D visualisation, living room, and bedroom design across India. Premium services by The Dream Casa.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ── */}
        <section className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden">
          <Image
            src="/images/eklavya/image-14-1.jpg"
            alt="Luxury modular kitchen interior design by The Dream Casa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="page-safe relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16">
            <p className="mb-2 text-[11px] font-semibold tracking-[0.3em] text-white/60 uppercase">What We Offer</p>
            <h1 className="font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">Our Services</h1>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="page-safe px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <SectionTitle className="mb-5">Design That Transforms How You Live</SectionTitle>
              <Ornament className="mx-auto mb-6 w-44" />
              <p className="text-base leading-relaxed text-muted sm:text-[17px]">
                From a single room to your entire home — we bring the same level of care, craft, and
                creative rigour to every project. Our services are designed to be comprehensive yet
                deeply personal.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Services List ── */}
        {services.map((svc, i) => (
          <section
            key={svc.slug}
            id={svc.slug}
            className={`page-safe px-5 py-20 sm:px-8 sm:py-28 ${i % 2 !== 0 ? "bg-surface" : ""}`}
          >
            <div className="mx-auto max-w-6xl">
              <div className={`grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20 ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                <ScrollReveal variant={i % 2 !== 0 ? "right" : "left"} className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                  <SectionLabel className="mb-4">{String(i + 1).padStart(2, "0")}</SectionLabel>
                  <SectionTitle className="mb-3">{svc.title}</SectionTitle>
                  <p className="mb-2 font-serif text-lg italic text-gold sm:text-xl">{svc.tagline}</p>
                  <Ornament className="mb-7 w-36" />
                  <p className="mb-7 text-base leading-relaxed text-muted sm:text-[17px]">
                    {svc.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[15px] text-foreground-soft">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-gold">
                    Enquire About This Service
                  </Link>
                </ScrollReveal>

                <ScrollReveal
                  variant={i % 2 !== 0 ? "left" : "right"}
                  className={`relative aspect-[4/5] overflow-hidden ${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <section className="page-safe bg-foreground px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <SectionLabel className="mb-5 !text-white/50">Get Started</SectionLabel>
              <h2 className="mb-5 font-serif text-4xl font-medium text-white sm:text-5xl">
                Not sure where to begin?
              </h2>
              <p className="mb-10 text-base text-white/60">
                Tell us about your home and we&apos;ll guide you through the right services for your space and budget.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" className="btn-gold">Book a Free Consultation</Link>
                <Link href="/portfolio" className="btn-outline-gold !border-white/30 !text-white hover:!border-gold hover:!bg-gold">
                  View Our Work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
