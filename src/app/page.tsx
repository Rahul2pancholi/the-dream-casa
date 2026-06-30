import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { InstagramConnect } from "@/components/InstagramConnect";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Ornament, SectionLabel, SectionTitle } from "@/components/ui";
import { portfolioProjects } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="page-safe border-b border-border/50 px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="sr-only">
              {siteConfig.name} — Premium Interior Design Studio, India
            </h1>

            <div className="animate-load animate-load-d1 mb-10 flex justify-center">
              <BrandLogo variant="hero" />
            </div>

            <SectionLabel className="animate-load animate-load-d2 mb-8">
              {siteConfig.location.city}, India
            </SectionLabel>

            <blockquote className="animate-load animate-load-d2 mb-10 font-serif text-xl font-normal italic text-foreground-soft sm:text-2xl lg:text-[1.75rem] lg:leading-[1.55]">
              &ldquo;{siteConfig.philosophy[0]}&rdquo;
            </blockquote>

            <Ornament className="animate-load animate-load-d3 mx-auto mb-10 w-44 sm:w-52" />

            <p className="animate-load animate-load-d3 font-serif text-4xl font-medium text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]">
              {siteConfig.about.subheadline}
            </p>
            <p className="animate-load animate-load-d4 mb-8 mt-3 text-sm font-semibold tracking-[0.28em] text-gold uppercase">
              Into Reality
            </p>

            <p className="animate-load animate-load-d5 mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
              {siteConfig.about.headline} — crafting bespoke homes across India.
              Our full website is on its way.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="page-safe bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <ScrollReveal variant="left">
                <SectionLabel className="mb-5">About Us</SectionLabel>
                <SectionTitle className="mb-6">{siteConfig.about.headline}</SectionTitle>
                <Ornament className="mb-8 w-36" />
                <p className="mb-5 text-base leading-relaxed text-foreground-soft sm:text-[17px]">
                  {siteConfig.about.body}
                </p>
                <p className="text-base leading-relaxed text-muted sm:text-[17px]">
                  {siteConfig.about.extended}
                </p>
              </ScrollReveal>

              <ScrollReveal variant="right" className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-auto lg:min-h-[520px]">
                <Image
                  src="/images/eklavya/image-21-1.jpg"
                  alt="The Dream Casa — master bedroom interior design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="page-safe border-y border-border/50 bg-foreground px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
                {siteConfig.philosophy.slice(1).map((quote, i) => (
                  <p
                    key={i}
                    className="font-serif text-[15px] italic leading-relaxed text-white/75 sm:border-l sm:border-white/15 sm:pl-6 sm:text-base"
                  >
                    &ldquo;{quote}&rdquo;
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Us */}
        <section id="why-us" className="page-safe px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="mb-14 text-center">
              <SectionLabel className="mb-5">Why Us</SectionLabel>
              <SectionTitle>What Sets Us Apart</SectionTitle>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {siteConfig.whyUs.map((item, i) => (
                <ScrollReveal key={item.title} variant="up" delay={(i + 1) as 1 | 2 | 3}>
                  <article className="card-hover h-full border border-border bg-card p-7 sm:p-8">
                    <div className="mb-5 h-0.5 w-10 bg-gold-light" />
                    <h3 className="mb-4 font-serif text-xl font-medium text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted sm:text-base">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Glimpses */}
        <section id="projects" className="page-safe bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <SectionLabel className="mb-5">Glimpses</SectionLabel>
                  <SectionTitle>Selected Work</SectionTitle>
                </div>
                <Link
                  href="/portfolio"
                  className="text-xs font-semibold tracking-[0.2em] text-gold uppercase transition-opacity hover:opacity-70"
                >
                  View Portfolio →
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {portfolioProjects.map((project, i) => (
                <ScrollReveal key={project.slug} variant="scale" delay={(i + 1) as 1 | 2}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="card-hover group block overflow-hidden border border-border bg-card"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
                        {project.type}
                      </p>
                      <h3 className="mb-2 font-serif text-2xl font-medium text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted">
                        {project.location} · {project.client}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Connect */}
        <section id="contact" className="page-safe px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <SectionLabel className="mb-5">Connect</SectionLabel>
              <SectionTitle className="mb-6">Let&apos;s Stay in Touch</SectionTitle>
              <p className="mx-auto mb-12 max-w-md text-base leading-relaxed text-muted sm:text-[17px]">
                {siteConfig.contact.note}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2} className="flex justify-center">
              <InstagramConnect />
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="mt-12 font-serif text-base italic text-gold">
                {siteConfig.tagline}
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
