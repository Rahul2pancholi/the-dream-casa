import { siteConfig } from "@/lib/site";
import { InstagramQR } from "@/components/InstagramQR";

export function InstagramConnect({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center gap-8 sm:flex-row sm:items-center ${compact ? "sm:gap-10" : "sm:gap-12 lg:gap-16"}`}
    >
      <a
        href={siteConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group min-h-[56px] w-full max-w-xs border border-border bg-card px-7 py-4 text-center transition-all duration-500 hover:border-gold/50 hover:shadow-[0_12px_40px_-8px_rgba(138,109,66,0.15)] sm:min-w-[240px]"
      >
        <span className="block text-xs font-semibold tracking-[0.24em] text-muted uppercase transition-colors group-hover:text-gold">
          Follow on Instagram
        </span>
        <span className="mt-2 block text-sm font-semibold tracking-wide text-foreground">
          {siteConfig.instagram.handle}
        </span>
      </a>

      <div className="flex flex-col items-center gap-3">
        <div className="rounded-sm border border-border bg-card p-3">
          <InstagramQR size={110} />
        </div>
        <p className="text-[11px] font-semibold tracking-[0.22em] text-muted uppercase">
          Scan to follow
        </p>
      </div>
    </div>
  );
}
