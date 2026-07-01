"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  propertySize: string;
  budget: string;
  timeline: string;
  source: string;
  message: string;
};

const initial: FormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  projectType: "",
  propertySize: "",
  budget: "",
  timeline: "",
  source: "",
  message: "",
};

export function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setData((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        setData(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/30 bg-gold-pale/40 p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
          <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 font-serif text-2xl text-foreground">Thank You!</h3>
        <p className="text-muted">
          We&apos;ve received your enquiry and will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold tracking-widest text-gold uppercase hover:opacity-70"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            required
            placeholder="Your full name"
            value={data.name}
            onChange={set("name")}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={data.email}
            onChange={set("email")}
            className="form-input"
          />
        </div>
      </div>

      {/* Phone + City */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={data.phone}
            onChange={set("phone")}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">City *</label>
          <input
            type="text"
            required
            placeholder="Your city"
            value={data.city}
            onChange={set("city")}
            className="form-input"
          />
        </div>
      </div>

      {/* Project Type + Property Size */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label">Project Type *</label>
          <select required value={data.projectType} onChange={set("projectType")} className="form-input">
            <option value="">Select project type</option>
            <option>1BHK Apartment</option>
            <option>2BHK Apartment</option>
            <option>3BHK Apartment</option>
            <option>4BHK Apartment</option>
            <option>Villa / Bungalow</option>
            <option>Penthouse</option>
            <option>Individual Room(s)</option>
            <option>Modular Kitchen Only</option>
            <option>Renovation / Makeover</option>
          </select>
        </div>
        <div>
          <label className="form-label">Property Size</label>
          <select value={data.propertySize} onChange={set("propertySize")} className="form-input">
            <option value="">Select approximate size</option>
            <option>Under 800 sq ft</option>
            <option>800–1200 sq ft</option>
            <option>1200–1800 sq ft</option>
            <option>1800–2500 sq ft</option>
            <option>2500–4000 sq ft</option>
            <option>4000+ sq ft</option>
          </select>
        </div>
      </div>

      {/* Budget + Timeline */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label">Approximate Budget</label>
          <select value={data.budget} onChange={set("budget")} className="form-input">
            <option value="">Select budget range</option>
            <option>Under ₹5 Lakhs</option>
            <option>₹5 – ₹10 Lakhs</option>
            <option>₹10 – ₹20 Lakhs</option>
            <option>₹20 – ₹40 Lakhs</option>
            <option>₹40 – ₹75 Lakhs</option>
            <option>₹75 Lakhs+</option>
          </select>
        </div>
        <div>
          <label className="form-label">Preferred Timeline</label>
          <select value={data.timeline} onChange={set("timeline")} className="form-input">
            <option value="">When do you want to start?</option>
            <option>Immediately</option>
            <option>Within 1–3 months</option>
            <option>3–6 months</option>
            <option>6+ months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      {/* How did you find us */}
      <div>
        <label className="form-label">How did you find us?</label>
        <select value={data.source} onChange={set("source")} className="form-input">
          <option value="">Select an option</option>
          <option>Instagram</option>
          <option>Google Search</option>
          <option>Friend / Referral</option>
          <option>Facebook</option>
          <option>YouTube</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="form-label">Tell us about your dream home</label>
        <textarea
          rows={4}
          placeholder="Share any details about your vision, style preferences, specific rooms, or questions…"
          value={data.message}
          onChange={set("message")}
          className="form-input resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold w-full disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </span>
        ) : (
          "Send Enquiry"
        )}
      </button>

      <p className="text-center text-xs text-muted-light">
        We respond within 24 hours. Your details are kept private.
      </p>
    </form>
  );
}
