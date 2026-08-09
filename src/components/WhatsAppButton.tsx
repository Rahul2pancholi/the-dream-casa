"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917490932661?text=Hi%2C%20I%27m%20interested%20in%20interior%20design%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="relative h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.7 4.61 1.92 6.484L4 29l7.71-1.885A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.58 1.12 1.145-4.464-.232-.366A9.71 9.71 0 0 1 6.25 15c0-5.385 4.373-9.75 9.754-9.75 5.38 0 9.746 4.365 9.746 9.75s-4.366 9.75-9.746 9.75Zm5.35-7.302c-.293-.147-1.735-.857-2.004-.955-.269-.098-.465-.147-.66.147-.196.293-.759.955-.93 1.152-.171.196-.343.22-.636.073-.293-.147-1.238-.456-2.358-1.454-.872-.777-1.461-1.737-1.632-2.03-.171-.293-.018-.451.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.294-.489.098-.196.049-.367-.025-.514-.073-.147-.66-1.589-.904-2.176-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.446 0 1.443 1.05 2.837 1.197 3.033.147.196 2.067 3.157 5.008 4.428.7.302 1.246.483 1.672.618.702.223 1.341.192 1.846.117.563-.084 1.735-.709 1.98-1.394.245-.685.245-1.271.171-1.394-.073-.122-.269-.196-.562-.343Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
