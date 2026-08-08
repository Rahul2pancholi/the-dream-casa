"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { Calculator, CheckCircle2, Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export default function EstimatePage() {
  const [bhk, setBhk] = useState<string>("3bhk");
  const [tier, setTier] = useState<string>("premium");
  const [locality, setLocality] = useState<string>("Vijay Nagar");

  const bhkMultipliers: Record<string, number> = {
    "1bhk": 0.55,
    "2bhk": 0.8,
    "3bhk": 1.0,
    "4bhk": 1.45,
    villa: 2.2,
  };

  const tierMultipliers: Record<string, { min: number; max: number; label: string; p: string }> = {
    essential: {
      min: 800000,
      max: 1200000,
      label: "Essential Quality",
      p: "BWP Marine Ply, Acrylic/Laminate finish, standard soft-close fittings.",
    },
    premium: {
      min: 1500000,
      max: 2200000,
      label: "Premium Turnkey",
      p: "PU / Veneer finish, Blum/Hafele hardware, Quartz tops, LED profiling.",
    },
    luxury: {
      min: 2800000,
      max: 4500000,
      label: "Luxury Signature",
      p: "Italian marble, acoustic fabric walls, smart automation, custom lighting.",
    },
  };

  const mult = bhkMultipliers[bhk] || 1.0;
  const currentTier = tierMultipliers[tier] || tierMultipliers.premium;

  const calculatedMin = Math.round((currentTier.min * mult) / 50000) * 50000;
  const calculatedMax = Math.round((currentTier.max * mult) / 50000) * 50000;

  const formatLakhs = (val: number) => {
    return (val / 100000).toFixed(1) + " Lakhs";
  };

  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Estimator Hero Header */}
        <section className="relative overflow-hidden bg-[#161412] py-20 text-white sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-5 text-left">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                Instant Interior Calculator &bull; Indore
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Calculate Your Home Interior Cost in Indore
              </h1>
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                Get an instant budget estimate tailored for apartments, duplexes, and luxury villas across Vijay Nagar, Palasia, and Bicholi.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Calculator Section */}
        <section className="bg-[#faf8f5] px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Controls Column */}
              <div className="flex flex-col gap-8 lg:col-span-7 rounded-3xl border border-gold/20 bg-white p-8 sm:p-10 shadow-xl">
                {/* Step 1: BHK Selection */}
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-semibold tracking-widest text-gold uppercase">
                    Step 1: Select Home Layout
                  </label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {[
                      { id: "1bhk", label: "1 BHK" },
                      { id: "2bhk", label: "2 BHK" },
                      { id: "3bhk", label: "3 BHK" },
                      { id: "4bhk", label: "4 BHK" },
                      { id: "villa", label: "Villa" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setBhk(item.id)}
                        className={`rounded-2xl border px-4 py-3 text-xs font-bold transition-all ${
                          bhk === item.id
                            ? "border-gold bg-gold text-white shadow-lg shadow-gold/20"
                            : "border-gold/20 bg-cream text-ink hover:border-gold"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Quality Tier */}
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-semibold tracking-widest text-gold uppercase">
                    Step 2: Select Finish & Material Quality
                  </label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { id: "essential", name: "Essential", range: "₹8L - 12L base" },
                      { id: "premium", name: "Premium Turnkey", range: "₹15L - 22L base" },
                      { id: "luxury", name: "Luxury Signature", range: "₹28L+ base" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTier(t.id)}
                        className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
                          tier === t.id
                            ? "border-gold bg-gold/10 text-ink shadow-md font-bold"
                            : "border-gold/20 bg-cream/50 text-muted hover:border-gold"
                        }`}
                      >
                        <span className="text-xs font-bold text-ink">{t.name}</span>
                        <span className="mt-1 text-[11px] text-gold">{t.range}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-muted italic bg-cream/70 p-3.5 rounded-xl border border-gold/15">
                    {currentTier.p}
                  </p>
                </div>

                {/* Step 3: Indore Locality */}
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-semibold tracking-widest text-gold uppercase">
                    Step 3: Select Indore Locality
                  </label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full rounded-2xl border border-gold/20 bg-cream px-5 py-3.5 text-xs font-semibold text-ink outline-none focus:border-gold"
                  >
                    <option value="Vijay Nagar">Vijay Nagar</option>
                    <option value="Palasia">Palasia & Saket</option>
                    <option value="Bicholi Mardana">Bicholi Mardana</option>
                    <option value="Super Corridor">Super Corridor</option>
                    <option value="Race Course Rd">Race Course Rd</option>
                    <option value="Nipania">Nipania & AB Road</option>
                  </select>
                </div>
              </div>

              {/* Estimate Result Display */}
              <div className="flex flex-col gap-6 lg:col-span-5 rounded-3xl border border-gold/30 bg-[#161412] p-8 sm:p-10 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                    Estimated Budget Range
                  </span>
                  <Calculator className="h-5 w-5 text-gold" />
                </div>

                <div className="flex flex-col gap-2 my-2">
                  <span className="text-3xl font-bold font-serif text-gold sm:text-4xl lg:text-5xl">
                    ₹{formatLakhs(calculatedMin)} - ₹{formatLakhs(calculatedMax)}
                  </span>
                  <span className="text-xs text-neutral-400">
                    Estimated for {bhk.toUpperCase()} ({currentTier.label}) in {locality}, Indore.
                  </span>
                </div>

                <div className="space-y-3 rounded-2xl bg-white/5 p-5 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span>Includes 3D Photorealistic Architectural Renders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span>100% Turnkey Material &amp; Labor Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span>On-Site Supervision by Founder Poorti Jain</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/917490932661?text=Hi%20Poorti,%20I%20used%20the%20Indore%20Cost%20Calculator%20for%20my%20${bhk.toUpperCase()}%20in%20${locality}%20(Budget:%20${formatLakhs(
                      calculatedMin
                    )}-${formatLakhs(calculatedMax)}).%20Can%20we%20schedule%20a%20site%20visit?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-xs font-semibold tracking-wider text-white uppercase shadow-lg hover:bg-emerald-700 transition-all"
                  >
                    <MessageSquare className="h-4 w-4" /> Send Estimate to WhatsApp
                  </a>

                  <a
                    href="tel:+917490932661"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/10 px-6 py-3.5 text-xs font-semibold tracking-wider text-white uppercase hover:bg-white/20 transition-all"
                  >
                    <Phone className="h-4 w-4 text-gold" /> Call Studio +91 7490 932 661
                  </a>
                </div>
              </div>
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
