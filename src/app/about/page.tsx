import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { Sparkles, Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | The Dream Casa | Interior Studio Indore",
  description:
    "Learn about The Dream Casa, founded by Poorti Jain in Indore. Premium residential, commercial, and turnkey interior solutions.",
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
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* About Hero Section */}
        <section className="relative overflow-hidden bg-[#161412] py-20 text-white sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                About The Dream Casa
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Designing Spaces, Delivering Dreams
              </h1>
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                Founded by Poorti Jain in Indore, The Dream Casa is a premier interior architecture studio specializing in high-end residential, commercial, and turnkey executions.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs font-semibold text-neutral-200">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-gold" />
                  <span>Poorti Jain, Founder</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold" />
                  <span>100+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>Indore Studio Location</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight & Story */}
        <section className="bg-white py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 shadow-2xl">
                  <Image
                    src="/images/projects/living-kitchen-01.jpg"
                    alt="The Dream Casa Design Studio"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/90 p-5 backdrop-blur-md">
                    <p className="font-serif text-sm font-semibold italic text-ink">
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
                <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  We Don&apos;t Just Design Spaces, We Craft Timeless Sanctuaries.
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  At <span className="font-semibold text-ink">The Dream Casa</span>, we believe your home should be an authentic extension of your personality. Based in Indore at Yeshwant Niwas Road, we bring together spatial innovation, refined aesthetics, and rigorous on-site project management.
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  From initial 3D visualization to final soft furnishing placement, Founder Poorti Jain and our team oversee every detail to ensure seamless execution without stress or delays.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold/15">
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-3xl font-bold text-gold">100+</span>
                    <span className="text-xs font-semibold text-ink uppercase tracking-wider">Homes Delivered</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-3xl font-bold text-gold">100%</span>
                    <span className="text-xs font-semibold text-ink uppercase tracking-wider">Turnkey Guarantee</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold tracking-widest text-white uppercase transition-all shadow-md hover:bg-gold-dark"
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
              <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
                Our Core Principles
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted">
                What sets The Dream Casa apart as Indore&apos;s leading luxury interior design studio.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-gold/15 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-ink">{title}</h3>
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
