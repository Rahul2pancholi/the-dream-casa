import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Founder Poorti Jain & Studio | The Dream Casa Indore",
  description:
    "Learn about Founder Poorti Jain and The Dream Casa studio based on Yeshwant Niwas Rd, Indore. A founder-led studio delivering luxury residential and commercial turnkey interior projects.",
  alternates: {
    canonical: "https://thedreamcasa.in/about",
  },
  openGraph: {
    title: "About Founder Poorti Jain & Studio | The Dream Casa Indore",
    description:
      "Learn about Founder Poorti Jain and The Dream Casa studio based on Yeshwant Niwas Rd, Indore. A founder-led studio delivering luxury residential and commercial turnkey interior projects.",
    url: "https://thedreamcasa.in/about",
  },
};

const values = [
  {
    title: "Uncompromising Quality",
    description:
      "We source high-grade materials, marine plywood, imported marbles, and durable fittings that stand the test of time.",
    Icon: ShieldCheck,
  },
  {
    title: "100% 1:1 Execution Match",
    description:
      "What you see in our 3D photorealistic architectural renders is exactly what we build on site.",
    Icon: Sparkles,
  },
  {
    title: "Transparent & On-Time",
    description:
      "Clear BOQs without hidden costs, with committed delivery timelines backed by daily site supervision.",
    Icon: CheckCircle2,
  },
  {
    title: "Client-Centric Customization",
    description:
      "Every layout, lighting accent, and furniture piece is tailored specifically around your lifestyle and preferences.",
    Icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* About Hero Section */}
        <PageHero
          eyebrow="About The Dream Casa"
          title="Designing Spaces, Delivering Dreams"
          description="Founded by Poorti Jain in Indore, The Dream Casa is a premier interior architecture studio specializing in high-end residential, commercial, and turnkey executions."
          meta={["Poorti Jain, Founder", "Est. 2025", "Indore Studio Location"]}
        />

        {/* Founder Spotlight & Story */}
        <section className="bg-cream-light py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-ink/10">
                  <Image
                    src="/images/projects/living-kitchen-01.jpg"
                    alt="The Dream Casa Design Studio"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 backdrop-blur-md">
                    <p className="font-serif text-sm italic text-ink">
                      &ldquo;Interior design is not just about how a space looks, but how it makes you feel every single day.&rdquo;
                    </p>
                    <span className="mt-2 block text-xs font-bold tracking-wider text-gold uppercase">
                      &mdash; Poorti Jain, Founder
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  <span className="h-px w-8 bg-gold" />
                  Our Legacy & Vision
                </div>
                <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  We Don&apos;t Just Design Spaces, We Craft Timeless Sanctuaries.
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  At <span className="font-semibold text-ink">The Dream Casa</span>, we believe your home should be an authentic extension of your personality. Based in Indore at Yeshwant Niwas Road, we bring together spatial innovation, refined aesthetics, and rigorous on-site project management.
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  From initial 3D visualization to final soft furnishing placement, Founder Poorti Jain and our team oversee every detail to ensure seamless execution without stress or delays.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-ink/10">
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-2xl text-gold">Founder-Led</span>
                    <span className="text-xs font-semibold text-ink uppercase tracking-wider">Hands-On Delivery</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-2xl text-gold">Est. 2025</span>
                    <span className="text-xs font-semibold text-ink uppercase tracking-wider">Indore &amp; Ahmedabad</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-ink px-7 py-3.5 text-xs font-semibold tracking-widest text-ink uppercase hover:bg-ink hover:text-cream-light transition-all"
                  >
                    Connect With Poorti Jain <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-cream-light py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                Why Choose Us
                <span className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-serif text-3xl text-ink sm:text-4xl">
                Our Core Principles
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted">
                What sets The Dream Casa apart as Indore&apos;s leading luxury interior design studio.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 bg-cream-light p-6"
                >
                  <Icon strokeWidth={1.25} className="h-8 w-8 text-gold" />
                  <h3 className="font-serif text-lg text-ink">{title}</h3>
                  <p className="text-xs leading-relaxed text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsBar />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
