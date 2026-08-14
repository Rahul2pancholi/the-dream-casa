"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import InquiryModal from "@/components/InquiryModal";
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, Sparkles, User, Award, Home, FileText } from "lucide-react";

const values = [
  {
    title: "Uncompromising Quality",
    description:
      "We source high-grade marine plywood, imported marbles, acrylic finishes, and durable branded fittings that last decades.",
    Icon: ShieldCheck,
  },
  {
    title: "100% 3D Render Fidelity",
    description:
      "What you approve in our photorealistic 3D room renders is exactly what we build on site — zero unexpected surprises.",
    Icon: Sparkles,
  },
  {
    title: "100% Fixed BOQ Guarantee",
    description:
      "Itemized pricing locked upfront before site execution starts. No hidden costs or mid-project budget inflations.",
    Icon: CheckCircle2,
  },
  {
    title: "Founder-Led Site Supervision",
    description:
      "Founder Poorti Jain and our project engineers personally inspect every civil, carpentry, and finishing stage.",
    Icon: HeartHandshake,
  },
];

const pillars = [
  {
    number: "01",
    title: "Founder-Led Personal Attention",
    desc: "We deliberately restrict the number of active projects we accept per season so every client receives direct personal design direction from Founder Poorti Jain.",
  },
  {
    number: "02",
    title: "In-House Modular & Furniture Crafting",
    desc: "From custom wardrobe storage solutions to precision modular kitchen cabinetry, all woodwork is precision factory-finished before site installation.",
  },
  {
    number: "03",
    title: "Turnkey Accountability",
    desc: "Civil modifications, electrical, plumbing, false ceiling, painting, custom furniture, and decor styling managed under one accountable team.",
  },
];

export default function AboutPageClient() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleOpenModal = () => setIsInquiryModalOpen(true);
  const handleCloseModal = () => setIsInquiryModalOpen(false);

  return (
    <div className="flex flex-1 flex-col bg-[#FAF7F2] text-[#1C2630]">
      <SiteHeader onOpenInquiryModal={handleOpenModal} />

      <main className="flex flex-1 flex-col">
        {/* About Page Hero */}
        <section className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8]">
          <div className="mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-4">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#a46f47] uppercase">
                <span className="h-px w-8 bg-[#a46f47]/50" />
                ABOUT THE DREAM CASA
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F1A24] leading-tight">
                Crafting Timeless Sanctuaries, Designed With Intent.
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-[#6B7280] max-w-2xl">
                Founded by <span className="font-medium text-[#0F1A24]">Poorti Jain</span> in Indore, The Dream Casa is a premier interior architecture studio specializing in high-end residential, commercial, and turnkey executions across Indore &amp; Ahmedabad.
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider text-[#a46f47] uppercase">
                <span className="flex items-center gap-1.5 bg-[#a46f47]/10 px-3 py-1.5 rounded-full border border-[#a46f47]/20">
                  <User className="h-3.5 w-3.5" /> Poorti Jain, Founder
                </span>
                <span className="flex items-center gap-1.5 bg-[#a46f47]/10 px-3 py-1.5 rounded-full border border-[#a46f47]/20">
                  <Home className="h-3.5 w-3.5" /> Indore &amp; Ahmedabad Studios
                </span>
                <span className="flex items-center gap-1.5 bg-[#a46f47]/10 px-3 py-1.5 rounded-full border border-[#a46f47]/20">
                  <Award className="h-3.5 w-3.5" /> 100% Turnkey Delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight & Story */}
        <section className="bg-[#FAF7F2] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              {/* Left Column: Portrait & Quote Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-[#E8E2D8] bg-white p-3 shadow-md overflow-hidden group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src="/images/projects/living-kitchen-01.jpg"
                      alt="The Dream Casa Design Studio Indore"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Floating Quote Box */}
                    <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/60 p-4.5 backdrop-blur-md text-white">
                      <p className="font-serif text-xs sm:text-sm italic leading-relaxed text-neutral-100">
                        &ldquo;Interior design is not just about how a space looks, but how it makes your family feel every single day.&rdquo;
                      </p>
                      <span className="mt-2 block text-[10px] font-bold tracking-widest text-[#a46f47] uppercase">
                        &mdash; Poorti Jain, Founder &amp; Lead Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Story & Key Pillars */}
              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#a46f47] uppercase">
                  <span className="h-px w-8 bg-[#a46f47]" />
                  FOUNDER&apos;S PHILOSOPHY
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#0F1A24]">
                  We Don&apos;t Just Design Spaces — We Craft Personal Sanctuaries.
                </h2>

                <p className="text-xs sm:text-sm leading-relaxed text-[#4B5563]">
                  At <span className="font-semibold text-[#0F1A24]">The Dream Casa</span>, we believe a home should be an authentic reflection of how you live. Based at Yeshwant Niwas Road, Indore, our studio blends spatial intelligence, warm luxury aesthetics, and relentless site execution.
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-[#4B5563]">
                  From layout planning and 3D architectural renders to modular woodwork installation and final styling, Founder Poorti Jain personally ensures your vision is delivered on time, within fixed budget terms.
                </p>

                {/* 3 Core Pillars */}
                <div className="flex flex-col gap-4 mt-2 pt-4 border-t border-[#E8E2D8]">
                  {pillars.map(({ number, title, desc }) => (
                    <div key={number} className="flex items-start gap-4 p-3.5 rounded-xl border border-[#E8E2D8] bg-white shadow-xs">
                      <span className="font-serif text-2xl font-normal text-[#a46f47] shrink-0">
                        {number}
                      </span>
                      <div>
                        <h4 className="font-serif text-base font-normal text-[#0F1A24] leading-snug">
                          {title}
                        </h4>
                        <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="inline-flex items-center gap-2 rounded-full bg-[#a46f47] px-7 py-3.5 text-xs font-semibold tracking-widest text-white uppercase transition-all shadow-md hover:bg-[#8e5c36]"
                  >
                    Schedule Free Consultation <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-[#FAF7F2] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-[#E8E2D8]">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-2 text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#a46f47] uppercase">
                <span className="h-px w-8 bg-[#a46f47]/40" />
                OUR CORE PRINCIPLES
                <span className="h-px w-8 bg-[#a46f47]/40" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0F1A24]">
                Why Homeowners Trust The Dream Casa
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280]">
                Built on transparency, spatial clarity, and flawless site execution.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#a46f47]/40 group"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8E2D8] bg-[#FAF7F2] text-[#a46f47] group-hover:border-[#a46f47] group-hover:bg-[#a46f47] group-hover:text-white transition-colors mb-4">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-[#0F1A24] mb-2">
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#6B7280]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <StatsBar />

        {/* CTA Banner */}
        <CtaBanner onOpenInquiryModal={handleOpenModal} />
      </main>

      <SiteFooter />

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isInquiryModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
