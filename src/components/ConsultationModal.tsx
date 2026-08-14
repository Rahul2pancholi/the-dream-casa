"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, Phone, User, MapPin, Send, MessageSquare } from "lucide-react";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Indore",
    projectType: "Residential Interior",
  });

  useEffect(() => {
    // Check if dismissed within the last 7 days
    const dismissedTime = localStorage.getItem("dreamcasa_consultation_dismissed");
    if (dismissedTime) {
      const daysPassed = (Date.now() - parseInt(dismissedTime, 10)) / (1000 * 60 * 60 * 24);
      if (daysPassed < 7) {
        return;
      }
    }

    // Trigger modal after 5 seconds delay for new visitors
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("dreamcasa_consultation_dismissed", Date.now().toString());
  };

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
          _subject: `Popup Lead: ${formData.name} (${formData.city})`,
          _captcha: "false",
          _template: "table",
          Name: formData.name,
          Phone: formData.phone,
          City: formData.city,
          ProjectType: formData.projectType,
          Source: "Home Popup Consultation Modal",
        }),
      }).catch((err) => console.error("FormSubmit error:", err));

      // 2. Send Telegram Group Alert
      const telegramText = `
🏆 <b>New Lead - The Dream Casa</b>

👤 <b>Name:</b> ${formData.name}
📱 <b>Phone:</b> ${formData.phone}
🏙️ <b>City:</b> ${formData.city}
🏠 <b>Project:</b> ${formData.projectType}
📍 <b>Source:</b> Home Popup Consultation Modal
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
      localStorage.setItem("dreamcasa_consultation_dismissed", Date.now().toString());
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Poorti,\n\nI requested a Free Consultation on your website popup:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• City: ${formData.city}\n• Project Type: ${formData.projectType}`
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/75 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden border border-white/15 bg-ink p-6 text-white shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
              <CheckCircle2 className="h-10 w-10 text-gold" />
            </div>
            <h3 className="font-serif text-2xl text-white">
              Consultation Requested!
            </h3>
            <p className="text-sm text-neutral-300 max-w-xs leading-relaxed">
              Thank you <span className="font-bold text-gold">{formData.name}</span>. Founder Poorti Jain &amp; team will get back to you within 2 hours.
            </p>
            <div className="mt-3 flex flex-col sm:flex-row gap-3 w-full">
              <a
                href={`https://wa.me/917490932661?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold text-ink uppercase tracking-wider shadow-lg hover:bg-gold-light transition-all flex-1"
              >
                <MessageSquare className="h-4 w-4" /> Connect Live on WhatsApp
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-xs font-semibold text-neutral-300 uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {/* Header Badge */}
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-gold uppercase">
              <span className="h-px w-6 bg-gold/70" />
              <span>Complimentary Consultation</span>
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col gap-1.5">
              <h2 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
                Plan Your Dream Space with Founder Poorti Jain
              </h2>
              <p className="text-xs sm:text-sm text-dark-body">
                Get custom 3D design concepts &amp; 100% turnkey estimate for your home or office in Indore &amp; Ahmedabad.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 pt-1">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-medium text-dark-secondary mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-dark-secondary" />
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border-dark bg-white/5 pl-10 pr-4 py-2.5 text-xs text-white placeholder-dark-secondary/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-medium text-dark-secondary mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 h-4 w-4 text-dark-secondary" />
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border-dark bg-white/5 pl-10 pr-4 py-2.5 text-xs text-white placeholder-dark-secondary/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-city" className="block text-xs font-medium text-dark-secondary mb-1">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-dark-secondary pointer-events-none" />
                    <select
                      id="modal-city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-border-dark bg-charcoal-light pl-9 pr-3 py-2.5 text-xs text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="Indore">Indore</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-type" className="block text-xs font-medium text-dark-secondary mb-1">
                    Property Type
                  </label>
                  <select
                    id="modal-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl border border-border-dark bg-charcoal-light px-3 py-2.5 text-xs text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Luxury Villa / Bungalow">Villa / Bungalow</option>
                    <option value="Commercial / Office">Commercial Office</option>
                    <option value="Architecture & Turnkey">Architecture &amp; Turnkey</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 text-xs font-bold text-ink uppercase tracking-wider shadow-lg hover:bg-gold-light transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Book Free Consultation
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
