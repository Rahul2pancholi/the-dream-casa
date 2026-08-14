"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, Phone, MessageSquare } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Indore",
    projectType: "Residential Interior",
    budget: "15 - 30 Lakhs",
    message: "",
  });

  if (!isOpen) return null;

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
          _subject: `New Lead - Modal Inquiry: ${formData.name} (${formData.location})`,
          _captcha: "false",
          _template: "table",
          Name: formData.name,
          Phone: formData.phone,
          Location: formData.location,
          ProjectType: formData.projectType,
          EstimatedBudget: formData.budget,
          Requirements: formData.message || "Requested via Instant Modal",
        }),
      }).catch((err) => console.error("FormSubmit error:", err));

      // 2. Send Telegram Group Alert
      const telegramText = `
🏆 <b>New Lead - Instant Modal Inquiry</b>

👤 <b>Name:</b> ${formData.name}
📱 <b>Phone:</b> ${formData.phone}
🏙️ <b>City:</b> ${formData.location}
🏠 <b>Project:</b> ${formData.projectType}
💰 <b>Budget:</b> ${formData.budget}
💬 <b>Message:</b> ${formData.message || "Consultation requested"}
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

  const whatsappText = encodeURIComponent(
    `Hi Poorti,\n\nI want to book an interior design consultation:\n• Name: ${formData.name || "Client"}\n• Phone: ${formData.phone || "Not provided"}\n• City: ${formData.location}\n• Type: ${formData.projectType}\n• Budget: ${formData.budget}`
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Box Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#E8E2D8] bg-[#FAF7F2] p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 text-[#1C2630]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E2D8] bg-white text-[#0F1A24] transition-colors hover:bg-[#a46f47] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-6 text-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#0F1A24]">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-xs text-[#6B7280] leading-relaxed max-w-sm">
              Thank you <span className="font-bold text-[#0F1A24]">{formData.name}</span>. Founder Poorti Jain &amp; team will contact you on <span className="font-bold text-[#0F1A24]">{formData.phone}</span> shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-2">
              <a
                href={`https://wa.me/917490932661?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider shadow-md hover:bg-emerald-700 transition-all w-full"
              >
                💬 Open WhatsApp Chat
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="inline-flex items-center justify-center rounded-full border border-[#E8E2D8] bg-white px-5 py-3 text-xs font-semibold text-[#0F1A24] uppercase tracking-wider hover:bg-[#E8E2D8] transition-all w-full sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex flex-col gap-1 pr-8">
              <span className="text-[10px] font-semibold tracking-widest text-[#a46f47] uppercase">
                ⚡ INSTANT CONSULTATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F1A24] leading-tight">
                Book Design Consultation
              </h2>
              <p className="text-xs text-[#6B7280] mt-0.5">
                Fill in your details below or chat live on WhatsApp. Response within 2 hours.
              </p>
            </div>

            {/* Quick WhatsApp Bar inside Modal */}
            <div className="my-4 flex items-center justify-between gap-3 rounded-xl border border-[#a46f47]/20 bg-[#a46f47]/10 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#a46f47]">
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>Prefer instant chat over form?</span>
              </div>
              <a
                href={`https://wa.me/917490932661?text=${encodeURIComponent("Hi Poorti, I want to book an interior design consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-1.5 text-[11px] font-semibold text-white hover:bg-emerald-700 transition-all shadow-xs shrink-0"
              >
                WhatsApp Now →
              </a>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {/* Full Name & Phone */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#0F1A24] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border border-[#E8E2D8] bg-white px-3.5 py-2.5 text-xs text-[#0F1A24] rounded-lg placeholder:text-gray-400 focus:border-[#a46f47] focus:outline-none focus:ring-1 focus:ring-[#a46f47]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#0F1A24] uppercase tracking-wider">
                    Phone Number (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border border-[#E8E2D8] bg-white px-3.5 py-2.5 text-xs text-[#0F1A24] rounded-lg placeholder:text-gray-400 focus:border-[#a46f47] focus:outline-none focus:ring-1 focus:ring-[#a46f47]"
                  />
                </div>
              </div>

              {/* City & Project Type */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#0F1A24] uppercase tracking-wider">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Indore / Ahmedabad"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="border border-[#E8E2D8] bg-white px-3.5 py-2.5 text-xs text-[#0F1A24] rounded-lg placeholder:text-gray-400 focus:border-[#a46f47] focus:outline-none focus:ring-1 focus:ring-[#a46f47]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#0F1A24] uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="border border-[#E8E2D8] bg-white px-3.5 py-2.5 text-xs text-[#0F1A24] rounded-lg focus:border-[#a46f47] focus:outline-none focus:ring-1 focus:ring-[#a46f47]"
                  >
                    <option value="Residential Interior">Residential (Apartment / Villa)</option>
                    <option value="Commercial Interior">Commercial Office</option>
                    <option value="Complete Turnkey Execution">Complete Turnkey Execution</option>
                    <option value="Hospitality & Boutique">Hospitality & Boutique</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#0F1A24] uppercase tracking-wider">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="border border-[#E8E2D8] bg-white px-3.5 py-2.5 text-xs text-[#0F1A24] rounded-lg focus:border-[#a46f47] focus:outline-none focus:ring-1 focus:ring-[#a46f47]"
                >
                  <option value="5 - 15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                  <option value="15 - 30 Lakhs">₹15 Lakhs - ₹30 Lakhs</option>
                  <option value="30 - 50 Lakhs">₹30 Lakhs - ₹50 Lakhs</option>
                  <option value="50+ Lakhs">₹50+ Lakhs (Luxury Penthouse/Villa)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#a46f47] py-3.5 text-xs font-semibold tracking-widest text-white uppercase transition-all shadow-md hover:bg-[#8e5c36] disabled:opacity-50"
              >
                <Send className="h-4 w-4" /> {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
