import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="page-safe border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-[11px] font-medium tracking-[0.24em] text-muted uppercase">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-[11px] tracking-[0.18em] text-muted-light uppercase">
          {siteConfig.location.city}, {siteConfig.location.state} &nbsp;·&nbsp; Pan India
        </p>
      </div>
    </footer>
  );
}
