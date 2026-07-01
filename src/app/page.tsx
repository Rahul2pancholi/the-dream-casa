import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Ornament, SectionLabel, SectionTitle } from "@/components/ui";
import { FAQ } from "@/components/FAQ";
import { portfolioProjects } from "@/lib/portfolio";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Dream Casa | Premium Interior Design Studio India",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

const serviceIcons: Record<string, React.ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L22.25 12M4.5 9.75V19.5a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V9.75" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5m-16.5 0A2.25 2.25 0 011.5 5.25V5.25A2.25 2.25 0 013.75 3h16.5a2.25 2.25 0 012.25 2.25v0A2.25 2.25 0 0120.25 7.5m-16.5 0v10.5A2.25 2.25 0 005.25 20.25h13.5A2.25 2.25 0 0021 18V7.5M8.25 13.5h.008v.008H8.25V13.5zm3.75 0h.008v.008H12V13.5zm3.75 0h.008v.008h-.008V13.5z" />
    </svg>
  ),
  wardrobe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  "3d": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  bed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ── */}
        <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/eklavya/image-21-1.jpg"
            alt="Luxury master bedroom interior design by The Dream Casa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

          <div className="page-safe relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="animate-load animate-load-d1 mb-6 text-[11px] font-semibold tracking-[0.3em] text-white/70 uppercase">
              {siteConfig.location.city} · Pan India
            </p>
            <h1 className="animate-load animate-load-d2 mb-6 font-serif text-5xl font-medium leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Where Every Home<br />
              <em className="italic text-gold-light">Becomes a Dream</em>
            </h1>
            <p className="animate-load animate-load-d3 mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Premium residential interior design across India — crafted by{" "}
              <span className="text-white/90">{siteConfig.designer}</span>, with
              attention to every detail that makes a house feel like home.
            </p>
            <div className="animate-load animate-load-d4 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold min-w-[180px]">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-outline-gold min-w-[180px] !border-white/40 !text-white hover:!border-gold hover:!bg-gold hover:!text-white">
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[9px] font-semibold tracking-[0.3em] text-white/40 uppercase">Scroll</span>
              <div className="h-8 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="border-b border-border bg-foreground">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {siteConfig.stats.map((stat, i) => (
                <ScrollReveal key={stat.label} variant="up" delay={(i + 1) as 1 | 2 | 3}>
                  <div className="text-center">
                    <p className="mb-1 font-serif text-5xl font-medium text-gold-light">{stat.value}</p>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="page-safe px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <ScrollReveal variant="left">
                <SectionLabel className="mb-5">About The Dream Casa</SectionLabel>
                <SectionTitle className="mb-6">{siteConfig.about.headline}</SectionTitle>
                <Ornament className="mb-8 w-36" />
                <p className="mb-5 text-base leading-relaxed text-foreground-soft sm:text-[17px]">
                  {siteConfig.about.body}
                </p>
                <p className="mb-8 text-base leading-relaxed text-muted sm:text-[17px]">
                  {siteConfig.about.extended}
                </p>
                <Link href="/about" className="btn-outline-gold">
                  Meet Our Designer
                </Link>
              </ScrollReveal>

              <ScrollReveal variant="right" className="relative aspect-[4/5] overflow-hidden">
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

        {/* ── Services ── */}
        <section id="services" className="page-safe bg-surface px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="mb-14 text-center">
              <SectionLabel className="mb-5">What We Do</SectionLabel>
              <SectionTitle>Our Services</SectionTitle>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-[17px]">
                From a single room to a complete home — we design spaces that are beautiful, functional, and entirely yours.
              </p>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, i) => (
                <ScrollReveal key={svc.slug} variant="up" delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    href={`/services#${svc.slug}`}
                    className="card-hover group block h-full border border-border bg-card p-7 sm:p-8"
                  >
                    <div className="mb-5 text-gold transition-transform duration-300 group-hover:scale-110">
                      {serviceIcons[svc.icon]}
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-medium text-foreground sm:text-2xl">
                      {svc.shortTitle}
                    </h3>
                    <p className="mb-4 text-[15px] leading-relaxed text-muted">
                      {svc.tagline}
                    </p>
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase transition-opacity group-hover:opacity-70">
                      Learn More →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-10 text-center">
              <Link href="/services" className="btn-gold">
                All Services
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Philosophy Strip ── */}
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

        {/* ── Portfolio Preview ── */}
        <section id="projects" className="page-safe px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <SectionLabel className="mb-5">Our Work</SectionLabel>
                  <SectionTitle>Selected Projects</SectionTitle>
                </div>
                <Link href="/portfolio" className="text-xs font-semibold tracking-[0.2em] text-gold uppercase transition-opacity hover:opacity-70">
                  View All Projects →
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {portfolioProjects.map((project, i) => (
                <ScrollReveal key={project.slug} variant="scale" delay={(i + 1) as 1 | 2}>
                  <Link href={`/portfolio/${project.slug}`} className="card-hover group block overflow-hidden border border-border bg-card">
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
                      <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-gold uppercase">{project.type}</p>
                      <h3 className="mb-2 font-serif text-2xl font-medium text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted">{project.location} · {project.client}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="page-safe bg-surface px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="mb-14 text-center">
              <SectionLabel className="mb-5">How We Work</SectionLabel>
              <SectionTitle>Our Design Process</SectionTitle>
            </ScrollReveal>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {siteConfig.process.map((step, i) => (
                <ScrollReveal key={step.step} variant="up" delay={((i % 4) + 1) as 1 | 2 | 3}>
                  <div className="relative text-center">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-gold/40 bg-gold-pale/50">
                      <span className="font-serif text-sm font-medium text-gold">{step.step}</span>
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-medium text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="page-safe px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal className="mb-14 text-center">
              <SectionLabel className="mb-5">Client Stories</SectionLabel>
              <SectionTitle>What Our Clients Say</SectionTitle>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.testimonials.map((t, i) => (
                <ScrollReveal key={t.name} variant="up" delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="flex h-full flex-col border border-border bg-card p-7 sm:p-8">
                    <div className="mb-5 text-gold">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="mr-0.5 text-sm">★</span>
                      ))}
                    </div>
                    <p className="mb-6 flex-1 font-serif text-lg italic leading-relaxed text-foreground-soft">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 border-t border-border pt-5">
                      <div className="flex h-10 w-10 items-center justify-center bg-gold/10 text-xs font-semibold text-gold">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted">{t.location} · {t.project}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section id="contact" className="page-safe bg-foreground px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <SectionLabel className="mb-5 !text-white/50">Start Your Journey</SectionLabel>
              <h2 className="mb-6 font-serif text-4xl font-medium text-white sm:text-5xl">
                Let&apos;s Design Your<br />
                <em className="italic text-gold-light">Dream Home</em>
              </h2>
              <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/60 sm:text-[17px]">
                Share a few details about your space and we&apos;ll reach out within 24 hours to discuss your vision.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" className="btn-gold min-w-[200px]">
                  Request a Consultation
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in interior design services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[200px] items-center justify-center gap-2 border border-[#25D366]/60 bg-transparent px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-[#25D366] uppercase transition-all hover:bg-[#25D366] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.109.546 4.09 1.503 5.819L.057 23.525a.5.5 0 00.607.61l5.797-1.416A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.518-5.184-1.42l-.371-.222-3.843.938.974-3.758-.243-.388A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="page-safe px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal className="mb-12 text-center">
              <SectionLabel className="mb-5">Questions</SectionLabel>
              <SectionTitle>Frequently Asked</SectionTitle>
            </ScrollReveal>
            <ScrollReveal>
              <FAQ />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Instagram ── */}
        <section className="page-safe bg-surface px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-xl text-center">
            <ScrollReveal>
              <SectionLabel className="mb-5">Follow Along</SectionLabel>
              <p className="mb-2 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Daily Design Inspiration
              </p>
              <p className="mb-8 text-base text-muted">
                Follow us on Instagram for behind-the-scenes, project reveals, and design ideas.
              </p>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                {siteConfig.instagram.handle}
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
