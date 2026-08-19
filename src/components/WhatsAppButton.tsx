"use client";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 print:hidden">
      {/* Sleek Hover Tooltip Label */}
      <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#152741] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg border border-[#25D366]/30 backdrop-blur-md animate-fade-in">
        <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
        Need Quick Help? Chat on WhatsApp
      </span>

      {/* Persistent Call Button — mobile/tablet only, since the header's call CTA is hidden inside the hamburger menu below lg */}
      <a
        href="tel:+919343470377"
        aria-label="Call The Dream Casa"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#152741] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 lg:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 shrink-0"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.01l-2.2 2.21z" />
        </svg>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919343470377?text=Hi%20Poorti%2C%20I%20would%20like%20to%20enquire%20about%20interior%20design%20services%20for%20my%20home."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Start a instant consultation on WhatsApp with Poorti Jain"
        className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/40 active:scale-95 group"
      >
        {/* Pulsing Outer Halo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

        {/* Large Crisp 32px WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 text-white transition-transform duration-300 group-hover:rotate-12"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.7 4.61 1.92 6.484L4 29l7.71-1.885A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.58 1.12 1.145-4.464-.232-.366A9.71 9.71 0 0 1 6.25 15c0-5.385 4.373-9.75 9.754-9.75 5.38 0 9.746 4.365 9.746 9.75s-4.366 9.75-9.746 9.75Zm5.35-7.302c-.293-.147-1.735-.857-2.004-.955-.269-.098-.465-.147-.66.147-.196.293-.759.955-.93 1.152-.171.196-.343.22-.636.073-.293-.147-1.238-.456-2.358-1.454-.872-.777-1.461-1.737-1.632-2.03-.171-.293-.018-.451.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.294-.489.098-.196.049-.367-.025-.514-.073-.147-.66-1.589-.904-2.176-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.446 0 1.443 1.05 2.837 1.197 3.033.147.196 2.067 3.157 5.008 4.428.7.302 1.246.483 1.672.618.702.223 1.341.192 1.846.117.563-.084 1.735-.709 1.98-1.394.245-.685.245-1.271.171-1.394-.073-.122-.269-.196-.562-.343Z" />
        </svg>
      </a>
    </div>
  );
}
