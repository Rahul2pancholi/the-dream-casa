import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const LOGO_ICON = "/images/logo-icon.png";

type BrandLogoProps = {
  variant?: "header" | "hero";
};

export function BrandLogo({ variant = "header" }: BrandLogoProps) {
  if (variant === "hero") {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-sm bg-[#0e0e0e] shadow-[0_8px_32px_rgba(0,0,0,0.18)] sm:h-32 sm:w-32">
          <Image
            src={LOGO_ICON}
            alt={siteConfig.name}
            width={256}
            height={256}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="font-serif text-3xl font-medium tracking-[0.04em] text-foreground sm:text-4xl">
            THE DREAM CASA
          </p>
          <p className="mt-2 text-xs font-semibold tracking-[0.32em] text-muted uppercase">
            Interior Design
          </p>
          <p className="mt-3 font-serif text-base italic text-gold">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-[#0e0e0e] sm:h-10 sm:w-10">
        <Image
          src={LOGO_ICON}
          alt=""
          width={80}
          height={80}
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hidden flex-col sm:flex">
        <span className="font-serif text-[15px] font-medium leading-none tracking-[0.06em] text-foreground">
          THE DREAM CASA
        </span>
        <span className="mt-1 text-[9px] font-semibold tracking-[0.26em] text-muted uppercase">
          Interior Design
        </span>
      </div>
    </Link>
  );
}
