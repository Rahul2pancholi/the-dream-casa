"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import SiteFooter from "@/components/SiteFooter";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, Building2, User, ChevronDown, Navigation } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"indore" | "ahmedabad">("indore");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Interior",
    location: "Indore",
    budget: "15 - 30 Lakhs",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = {
    indore: {
      city: "Indore, Madhya Pradesh",
      badge: "Head Office",
      address: "The View, 305, Yeshwant Niwas Rd, Nehru Park 2, Lad Colony, Indore, Madhya Pradesh 452003",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3701201538356!2d75.8778!3d22.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzIzLjIiTiA3NcKwNTInNDAuMSJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=The+View+305+Yeshwant+Niwas+Rd+Indore",
    },
    ahmedabad: {
      city: "Ahmedabad, Gujarat",
      badge: "Regional Studio",
      address: "The Dream Casa Studio, SG Highway, Bodakdev, Ahmedabad, Gujarat 380054",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697926177579!2d72.5085!3d23.0375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjCsMDInMTUuMCJOIDcywrAzMCczMC42IkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=Bodakdev+SG+Highway+Ahmedabad",
    },
  };

  const faqs = [
    {
      q: "Where are your studio offices located?",
      a: "Our Head Office is located at The View, 305, Yeshwant Niwas Rd, Indore, MP 452003. We also have a Regional Studio on SG Highway, Bodakdev, Ahmedabad, Gujarat 380054.",
    },
    {
      q: "Do you handle complete turnkey site execution?",
      a: "Yes! We specialize in end-to-end turnkey projects. We handle everything from civil modifications, custom carpentry, modular kitchens, electrical, plumbing, acoustic ceilings, to final styling.",
    },
    {
      q: "Will I get 3D renders before site work begins?",
      a: "Absolutely. Founder Poorti Jain and our design team create 100% photorealistic 3D architectural renders of your living rooms, bedrooms, and kitchen before any on-site work starts.",
    },
    {
      q: "How can I book a design consultation with Founder Poorti Jain?",
      a: "You can fill in the inquiry form on this page or call/WhatsApp us directly at +91 7490 932 661.",
    },
  ];

  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Contact Hero Section */}
        <section className="relative overflow-hidden bg-[#161412] py-20 text-white sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex max-w-3xl flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" />
                Contact The Dream Casa
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Create Your Dream Space
              </h1>
              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                Visit our Head Office in Indore or our Regional Studio in Ahmedabad, or schedule a personal design consultation with Founder Poorti Jain.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs font-semibold text-neutral-200">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gold" />
                  <span>Poorti Jain, Founder</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-gold" />
                  <span>Indore &amp; Ahmedabad Studios</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>100% Turnkey Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form & Studio Locations Section */}
        <section className="bg-[#faf8f5] py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-xl sm:p-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                      Direct Inquiry Form
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
                      Book a Design Consultation
                    </h2>
                    <p className="text-xs text-muted">
                      Fill in your details below and Founder Poorti Jain &amp; team will reach out within 2 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-emerald-200 bg-emerald-50/80 p-8 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-emerald-900">
                        Consultation Request Received!
                      </h3>
                      <p className="text-xs leading-relaxed text-emerald-800">
                        Thank you, <span className="font-bold">{formData.name}</span>. Poorti Jain &amp; our interior team will contact you shortly at <span className="font-bold">{formData.phone}</span>.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-2 rounded-full bg-emerald-700 px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase hover:bg-emerald-800"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Anand Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="rounded-lg border border-gold/20 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Phone Number (+91) *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 7490 932 661"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="rounded-lg border border-gold/20 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="name@domain.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="rounded-lg border border-gold/20 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Project Type
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="rounded-lg border border-gold/20 bg-cream-light/50 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          >
                            <option value="Residential Interior">Residential Interior (Apartment / Villa)</option>
                            <option value="Commercial Interior">Commercial Office / Workspaces</option>
                            <option value="Complete Turnkey Execution">Complete Turnkey Execution</option>
                            <option value="Hospitality & Boutique">Hospitality & Boutique Interiors</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Project Location
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Indore / Ahmedabad"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="rounded-lg border border-gold/20 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Estimated Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="rounded-lg border border-gold/20 bg-cream-light/50 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          >
                            <option value="5 - 15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                            <option value="15 - 30 Lakhs">₹15 Lakhs - ₹30 Lakhs</option>
                            <option value="30 - 50 Lakhs">₹30 Lakhs - ₹50 Lakhs</option>
                            <option value="50+ Lakhs">₹50+ Lakhs (Luxury Penthouse/Villa)</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                          Message / Requirements
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your space (carpet area, room count, design style preferences)..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="rounded-lg border border-gold/20 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-xs font-semibold tracking-widest text-white uppercase transition-all shadow-lg hover:bg-gold-dark hover:shadow-gold/25"
                      >
                        <Send className="h-4 w-4" /> Schedule Free Consultation
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Dual Studio Contact Info & Maps */}
              <div className="flex flex-col gap-8 lg:col-span-5">
                <div className="flex flex-col gap-4 rounded-2xl border border-gold/20 bg-white p-8 shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-ink">
                      Our Studio Locations
                    </h3>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold text-gold uppercase tracking-wider">
                      Indore &amp; Ahmedabad
                    </span>
                  </div>
                  <span className="h-px w-12 bg-gold" />

                  {/* Location Selector Tabs */}
                  <div className="flex items-center rounded-xl bg-cream-light p-1 border border-gold/20">
                    <button
                      type="button"
                      onClick={() => setActiveTab("indore")}
                      className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                        activeTab === "indore"
                          ? "bg-gold text-white shadow"
                          : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      Indore (Head Office)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("ahmedabad")}
                      className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                        activeTab === "ahmedabad"
                          ? "bg-gold text-white shadow"
                          : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      Ahmedabad Studio
                    </button>
                  </div>

                  {/* Active Studio Details */}
                  <div className="flex flex-col gap-5 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-ink">{offices[activeTab].city}</span>
                          <span className="text-[10px] font-semibold text-gold uppercase">{offices[activeTab].badge}</span>
                        </div>
                      </div>
                      <a
                        href={offices[activeTab].directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold hover:bg-gold hover:text-white transition-colors"
                      >
                        <Navigation className="h-3 w-3" /> Map
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-semibold text-muted uppercase">Office Address</span>
                        <span className="text-xs font-semibold text-ink leading-relaxed">
                          {offices[activeTab].address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 border-t border-gold/10 pt-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                        <User className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-semibold text-muted uppercase">Founder &amp; Principal Designer</span>
                        <span className="text-xs font-bold text-ink">Poorti Jain</span>
                      </div>
                    </div>

                    <a
                      href="tel:+917490932661"
                      className="group flex items-center gap-4 transition-colors hover:text-gold"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-semibold text-muted uppercase">Phone / WhatsApp</span>
                        <span className="text-xs font-bold text-ink group-hover:text-gold">+91 7490 932 661</span>
                      </div>
                    </a>

                    <a
                      href="mailto:thedreamcasastudio@gmail.com"
                      className="group flex items-center gap-4 transition-colors hover:text-gold"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-semibold text-muted uppercase">Email Address</span>
                        <span className="text-xs font-bold text-ink group-hover:text-gold">thedreamcasastudio@gmail.com</span>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-semibold text-muted uppercase">Studio Working Hours</span>
                        <span className="text-xs text-ink font-medium">Monday &ndash; Saturday: 10:00 AM &ndash; 7:30 PM</span>
                        <span className="text-[11px] text-muted">Sunday: By Appointment</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed Card matching selected tab */}
                <div className="overflow-hidden rounded-2xl border border-gold/20 bg-white p-2 shadow-xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                    <iframe
                      key={activeTab}
                      title={`The Dream Casa Studio ${offices[activeTab].city} Location`}
                      src={offices[activeTab].mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Client FAQ Section */}
            <div className="mt-20 flex flex-col gap-8 rounded-2xl border border-gold/15 bg-white p-8 shadow-lg sm:p-12">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">Got Questions?</span>
                <h3 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={faq.q}
                      className="rounded-xl border border-gold/15 bg-cream-light/40 overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-base font-bold text-ink"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`h-5 w-5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="border-t border-gold/10 px-5 pb-5 pt-3 text-xs leading-relaxed text-muted">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <StatsBar />
      </main>
      <SiteFooter />
    </div>
  );
}
