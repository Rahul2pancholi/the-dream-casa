import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Ornament, SectionLabel, SectionTitle } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${siteConfig.designer}, lead interior designer at The Dream Casa. A premium interior design studio crafting bespoke luxury homes across India.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Page Hero ── */}
        <section className="relative flex h-[55vh] min-h-[400px] items-end overflow-hidden">
          <Image
            src="/images/eklavya/image-10-1.jpg"
            alt="The Dream Casa — luxury living room interior design"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="page-safe relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16">
            <p className="mb-2 text-[11px] font-semibold tracking-[0.3em] text-white/60 uppercase">
              Our Story
            </p>
            <h1 className="font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              About The Dream Casa
            </h1>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="page-safe px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <ScrollReveal variant="left">
                <SectionLabel className="mb-5">Our Philosophy</SectionLabel>
                <SectionTitle className="mb-6">Design That Tells Your Story</SectionTitle>
                <Ornament className="mb-8 w-36" />
                <p className="mb-5 text-base leading-relaxed text-foreground-soft sm:text-[17px]">
                  {siteConfig.about.body}
                </p>
                <p className="text-base leading-relaxed text-muted sm:text-[17px]">
                  {siteConfig.about.extended}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="right" className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/eklavya/image-23-1.jpg"
                  alt="Luxury wardrobe and bedroom design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Designer ── */}
        <section className="page-safe bg-surface px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <ScrollReveal variant="left" className="order-2 lg:order-1 relative aspect-square overflow-hidden">
                <Image
                  src="/images/eklavya/image-22-1.jpg"
                  alt="Poorti Jain — Lead Interior Designer at The Dream Casa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ScrollReveal>
              <ScrollReveal variant="right" className="order-1 lg:order-2">
                <SectionLabel className="mb-5">Meet the Designer</SectionLabel>
                <SectionTitle className="mb-4">{siteConfig.designer}</SectionTitle>
                <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
                  Lead Interior Designer & Founder
                </p>
                <Ornament className="mb-8 w-36" />
                <p className="mb-5 text-base leading-relaxed text-foreground-soft sm:text-[17px]">
                  {siteConfig.about.designerBio}
                </p>
                <p className="text-base leading-relaxed text-muted sm:text-[17px]">
                  Her work is guided by a deep respect for how people actually live — their rhythms, their relationships,
                  and the quiet rituals that make a house feel like home. She believes beautiful design should never
                  come at the cost of warmth.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="page-safe px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="mb-14 text-center">
              <SectionLabel className="mb-5">Our Values</SectionLabel>
              <SectionTitle>What Sets Us Apart</SectionTitle>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {siteConfig.whyUs.map((item, i) => (
                <ScrollReveal key={item.title} variant="up" delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <article className="card-hover h-full border border-border bg-card p-7 sm:p-8">
                    <div className="mb-5 h-0.5 w-10 bg-gold-light" />
                    <h3 className="mb-4 font-serif text-xl font-medium text-foreground sm:text-2xl">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted">{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Philosophy Quotes ── */}
        <section className="border-y border-border/50 bg-foreground px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
                {siteConfig.philosophy.slice(1).map((quote, i) => (
                  <p key={i} className="font-serif text-[15px] italic leading-relaxed text-white/75 sm:border-l sm:border-white/15 sm:pl-6 sm:text-base">
                    &ldquo;{quote}&rdquo;
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Service Areas ── */}
        <section className="page-safe px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <SectionLabel className="mb-5">Where We Work</SectionLabel>
              <SectionTitle className="mb-6">Serving Clients Across India</SectionTitle>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
                Based in Ahmedabad, we design for clients pan-India. Our 3D-first process works beautifully for remote projects.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {siteConfig.serviceAreas.map((city) => (
                  <span key={city} className="border border-border bg-card px-4 py-2 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    {city}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="page-safe bg-surface px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <SectionTitle className="mb-6">Ready to Begin?</SectionTitle>
              <p className="mx-auto mb-8 max-w-md text-base text-muted">
                Let&apos;s have a conversation about your home and how we can make it extraordinary.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" className="btn-gold">Start a Project</Link>
                <Link href="/portfolio" className="btn-outline-gold">View Our Work</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
