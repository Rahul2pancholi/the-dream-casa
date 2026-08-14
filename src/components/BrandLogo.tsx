import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  /** "dark" for light cream backgrounds (navy text), "light" for dark navy backgrounds (white text) */
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({ variant = "dark", showTagline = true, className = "" }: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group shrink-0 ${className}`}>
      {/* Architectural Line-Art Arch Icon with Gold Window */}
      <div className="relative h-11 w-11 sm:h-13 sm:w-13 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/dream-casa-icon.svg"
          alt="The Dream Casa Interior Design Studio"
          fill
          priority
          className={`object-contain ${isLight ? "brightness-200 invert" : ""}`}
        />
      </div>

      {/* Typography Lockup (1:1 replica of official brand logo) */}
      <div className="flex flex-col justify-center text-left">
        {/* Top "T H E" */}
        <span className="font-serif text-[10px] sm:text-[11px] tracking-[0.35em] text-[#a46f47] uppercase leading-none mb-0.5">
          T H E
        </span>

        {/* Main "Dream Casa" */}
        <span
          className={`font-serif text-xl sm:text-2xl font-normal leading-tight tracking-tight ${
            isLight ? "text-white" : "text-[#0F1A24]"
          }`}
        >
          Dream Casa
        </span>

        {/* Bottom "— INTERIOR DESIGN STUDIO —" */}
        {showTagline && (
          <div className="flex items-center gap-1.5 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.18em] text-[#a46f47] uppercase leading-none mt-1 whitespace-nowrap">
            <span className="h-px w-2.5 bg-[#a46f47]/60" />
            INTERIOR DESIGN STUDIO
            <span className="h-px w-2.5 bg-[#a46f47]/60" />
          </div>
        )}
      </div>
    </Link>
  );
}
