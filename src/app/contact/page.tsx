import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Ornament, SectionLabel, SectionTitle } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Interior Design Project",
  description:
    "Get in touch with The Dream Casa — India's premium interior design studio. Tell us about your home and we'll design your dream space. Free consultation available.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactDetails = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone / WhatsApp",
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: siteConfig.instagram.handle,
    href: siteConfig.instagram.url,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: `${siteConfig.location.city}, ${siteConfig.location.state} — Pan India`,
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ── */}
        <section className="border-b border-border bg-foreground px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-load animate-load-d1 mb-4 text-[11px] font-semibold tracking-[0.3em] text-white/50 uppercase">
              Let&apos;s Connect
            </p>
            <h1 className="animate-load animate-load-d2 mb-5 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              Start Your Project
            </h1>
            <Ornament className="animate-load animate-load-d3 mx-auto mb-6 w-44 [--border:#ffffff20]" />
            <p className="animate-load animate-load-d4 mx-auto max-w-xl text-base leading-relaxed text-white/60 sm:text-[17px]">
              Fill in the form below and we&apos;ll get back to you within 24 hours to discuss your vision and next steps.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="page-safe px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:gap-20">

              {/* Form */}
              <ScrollReveal variant="left">
                <SectionLabel className="mb-5">Enquiry Form</SectionLabel>
                <SectionTitle className="mb-8">Tell Us About Your Home</SectionTitle>
                <ContactForm />
              </ScrollReveal>

              {/* Sidebar */}
              <div className="space-y-10">
                <ScrollReveal variant="right">
                  <div className="bg-surface p-7 sm:p-8">
                    <SectionLabel className="mb-6">Contact Details</SectionLabel>
                    <div className="space-y-6">
                      {contactDetails.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="mt-0.5 flex-shrink-0 text-gold">{item.icon}</div>
                          <div>
                            <p className="mb-0.5 text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">{item.label}</p>
                            {item.href ? (
                              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-foreground hover:text-gold">
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm text-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="right" delay={2}>
                  <div className="border border-border bg-card p-7 sm:p-8">
                    <p className="mb-3 font-serif text-xl font-medium text-foreground">Prefer to chat?</p>
                    <p className="mb-5 text-sm text-muted">
                      Send us a message on WhatsApp and we&apos;ll respond within a few hours.
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in interior design services from The Dream Casa.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2.5 bg-[#25D366] px-5 py-3 text-[11px] font-semibold tracking-[0.22em] text-white uppercase transition-opacity hover:opacity-90"
                    >
                      <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.109.546 4.09 1.503 5.819L.057 23.525a.5.5 0 00.607.61l5.797-1.416A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.518-5.184-1.42l-.371-.222-3.843.938.974-3.758-.243-.388A9.943 9.943 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="right" delay={3}>
                  <div className="border-l-2 border-gold pl-6">
                    <p className="font-serif text-lg italic leading-relaxed text-muted">
                      &ldquo;{siteConfig.philosophy[0]}&rdquo;
                    </p>
                    <p className="mt-3 text-xs font-semibold tracking-widest text-gold uppercase">
                      — {siteConfig.designer}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Promise ── */}
        <section className="page-safe bg-surface px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { title: "24-hour response", desc: "We respond to every enquiry within one business day." },
                  { title: "Free consultation", desc: "Your first conversation with us is always complimentary." },
                  { title: "No commitment", desc: "Explore your options before deciding — no pressure, ever." },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="mx-auto mb-3 h-0.5 w-8 bg-gold-light" />
                    <p className="mb-2 font-serif text-lg font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
