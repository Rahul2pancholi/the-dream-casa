import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="page-safe sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <BrandLogo variant="header" />

        <nav className="flex items-center gap-5 sm:gap-8">
          <span className="hidden text-[11px] font-semibold tracking-[0.22em] text-muted uppercase md:inline">
            Launching Soon
          </span>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-[0.18em] text-foreground-soft uppercase transition-colors hover:text-gold sm:text-[13px]"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
