"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import SiteFooter from "@/components/SiteFooter";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Building2, User, ChevronDown, Navigation } from "lucide-react";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send FormSubmit Email
      fetch("https://formsubmit.co/ajax/thedreamcasastudio@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Interior Inquiry: ${formData.name} (${formData.location || "Indore"})`,
          _captcha: "false",
          _template: "table",
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email || "Not Provided",
          ProjectType: formData.projectType,
          Location: formData.location || "Indore",
          EstimatedBudget: formData.budget,
          Requirements: formData.message || "Not Provided",
        }),
      }).catch((err) => console.error("FormSubmit error:", err));

      // 2. Send Telegram Group Alert
      const telegramText = `
🏆 <b>New Lead - Contact Page Inquiry</b>

👤 <b>Name:</b> ${formData.name}
📱 <b>Phone:</b> ${formData.phone}
📧 <b>Email:</b> ${formData.email || "Not Provided"}
🏙️ <b>City:</b> ${formData.location || "Indore"}
🏠 <b>Project:</b> ${formData.projectType}
💰 <b>Budget:</b> ${formData.budget}
💬 <b>Message:</b> ${formData.message || "Looking for interior consultation"}
⏰ <b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
`;

      await fetch("https://api.telegram.org/bot8265709809:AAFBke_wP7NcXe2aDX4p_Aiua5unwUAS4ac/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "-5477674889",
          text: telegramText,
          parse_mode: "HTML",
        }),
      });

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Poorti,\n\nI submitted an inquiry on your website:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Type: ${formData.projectType}\n• Location: ${formData.location || "Indore"}\n• Budget: ${formData.budget}\n• Message: ${formData.message || "Looking for interior consultation"}`
  );

  const offices = {
    indore: {
      city: "Indore, Madhya Pradesh",
      badge: "New Studio Office",
      address: "The View, 305, Yeshwant Niwas Rd, Nehru Park 2, Lad Colony, Indore, Madhya Pradesh 452003",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3701201538356!2d75.8737501!3d22.7217489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb24e943af9%3A0x4fe265bccbdb548e!2sThe%20View%2C%20305%2C%20Yeshwant%20Niwas%20Rd%2C%20Nehru%20Park%202%2C%20Lad%20Colony%2C%20Indore%2C%20Madhya%20Pradesh%20452003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directionsUrl: "https://www.google.com/maps/place/Intelyhood+Technologies+Pvt+Ltd/@22.7217489,75.8737501,870m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3962fdb24e943af9:0x4fe265bccbdb548e!8m2!3d22.7217489!4d75.8737501!16s%2Fg%2F11yjyt4bfw",
    },
    ahmedabad: {
      city: "Ahmedabad, Gujarat",
      badge: "Regional Studio",
      address: "The Dream Casa Studio, SG Highway, Bodakdev, Ahmedabad, Gujarat 380054",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697926177579!2d72.5085!3d23.0375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjCsMDInMTUuMCJOIDcywrAzMCczMC46IkU!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=Bodakdev+SG+Highway+Ahmedabad",
    },
  };

  const faqs = [
    {
      q: "Where is your interior design studio located in Indore?",
      a: "Our New Studio Office is located at The View, 305, Yeshwant Niwas Rd, Nehru Park 2, Lad Colony, Indore, MP 452003.",
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
    <div className="flex flex-1 flex-col bg-cream-light">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Contact Hero Section */}
        <PageHero
          eyebrow="Contact The Dream Casa"
          title="Let's Create Your Dream Space"
          description="Visit our Head Office in Indore or our Regional Studio in Ahmedabad, or schedule a personal design consultation with Founder Poorti Jain."
          meta={["Poorti Jain, Founder", "Indore & Ahmedabad Studios", "100% Turnkey Delivery"]}
        />

        {/* Form & Studio Locations Section */}
        <section className="bg-cream-light py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="border border-ink/10 bg-card p-8 sm:p-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                      Direct Inquiry Form
                    </span>
                    <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                      Book a Design Consultation
                    </h2>
                    <p className="text-xs text-muted">
                      Fill in your details below and Founder Poorti Jain &amp; team will reach out within 2 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-emerald-200 bg-emerald-50/90 p-8 text-center shadow-md">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-emerald-950">
                        Inquiry Delivered Successfully!
                      </h3>
                      <p className="text-xs leading-relaxed text-emerald-800 max-w-md">
                        Thank you <span className="font-bold">{formData.name}</span>. An email notification has been dispatched to <span className="font-bold">thedreamcasastudio@gmail.com</span>.
                      </p>
                      
                      <div className="mt-2 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                        <a
                          href={`https://wa.me/917490932661?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold text-white uppercase tracking-wider shadow-lg hover:bg-emerald-700 transition-all w-full sm:w-auto"
                        >
                          💬 Connect Live on WhatsApp
                        </a>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-5 py-3 text-xs font-semibold text-emerald-900 uppercase tracking-wider hover:bg-emerald-100 transition-all w-full sm:w-auto"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
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
                            className="border border-ink/15 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
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
                            className="border border-ink/15 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
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
                            className="border border-ink/15 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Project Type
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="border border-ink/15 bg-cream-light/50 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
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
                            className="border border-ink/15 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
                            Estimated Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="border border-ink/15 bg-cream-light/50 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
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
                          className="border border-ink/15 bg-cream-light/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-xs font-semibold tracking-widest text-white uppercase transition-all shadow-lg hover:bg-gold-dark hover:shadow-gold/25 disabled:opacity-50"
                      >
                        <Send className="h-4 w-4" /> {isSubmitting ? "Sending Inquiry..." : "Schedule Free Consultation"}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Dual Studio Contact Info & Maps */}
              <div className="flex flex-col gap-8 lg:col-span-5">
                <div className="flex flex-col gap-4 border border-ink/10 bg-card p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-ink">
                      Our Studio Locations
                    </h3>
                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider">
                      Indore &amp; Ahmedabad
                    </span>
                  </div>
                  <span className="h-px w-12 bg-gold" />

                  {/* Location Selector Tabs */}
                  <div className="flex items-center rounded-xl bg-cream-light p-1 border border-ink/10">
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
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold hover:bg-gold hover:text-ink transition-colors"
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

                    <div className="flex items-center gap-4 border-t border-ink/10 pt-3">
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
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
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
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
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
                <div className="overflow-hidden border border-ink/10 bg-card p-2">
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
            <div className="mt-20 flex flex-col gap-8 border border-ink/10 bg-card p-8 sm:p-12">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">Got Questions?</span>
                <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={faq.q}
                      className="border border-ink/10 bg-cream-light/40 overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-base text-ink"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`h-5 w-5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="border-t border-ink/10 px-5 pb-5 pt-3 text-xs leading-relaxed text-muted">
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
