"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {siteConfig.faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-serif text-lg font-medium text-foreground sm:text-xl">
              {item.q}
            </span>
            <span className="mt-1 flex-shrink-0 text-gold transition-transform duration-300" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-60 pb-5" : "max-h-0"}`}
          >
            <p className="text-base leading-relaxed text-muted">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
