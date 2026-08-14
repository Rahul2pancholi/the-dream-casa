import Link from "next/link";

interface BrandLogoProps {
  /** "dark" for light cream backgrounds, "light" for dark navy backgrounds */
  variant?: "dark" | "light";
  className?: string;
}

export default function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  const isLight = variant === "light";
  const goldColor = isLight ? "#d4af37" : "#ad8a55";
  const textColor = isLight ? "#ffffff" : "#0F1A24";
  const windowColor = isLight ? "#ffffff" : "#0F1A24";

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group shrink-0 ${className}`}>
      {/* 1:1 Precise SVG Arch Icon matching brand artwork */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="378 201 150 157"
        className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* 4-Pane Grid Window */}
        <g fill={windowColor}>
          <path d="M430.01,246.17v4.04h8.69v-8.69h-4.04c-2.57,0-4.65,2.08-4.65,4.65Z" />
          <path d="M430.01,232.07v4.22c0,2.47,2,4.47,4.47,4.47h4.22v-8.69h-8.69Z" />
          <path d="M420.55,240.76h4.04c2.57,0,4.65-2.08,4.65-4.65v-4.04h-8.69v8.69Z" />
          <path d="M424.76,241.52h-4.22v8.69h8.69v-4.22c0-2.47-2-4.47-4.47-4.47Z" />
        </g>
        {/* Architectural Arches */}
        <path
          fill={goldColor}
          d="M519.73,349.34h-5.11v-60.35c0-9.98-8.12-18.09-18.09-18.09h-19.53v77.47h-38.73v-70.99c0-6.39,5.2-11.59,11.59-11.59h22.03v-51.08h-49.73c-16.73,0-30.34,13.61-30.34,30.34v102.52h-5.11v-102.52c0-19.55,15.91-35.46,35.46-35.46h54.85v56.2h19.53c12.8,0,23.21,10.41,23.21,23.21v60.35ZM443.37,343.24h28.5v-72.35h-22.03c-3.57,0-6.48,2.91-6.48,6.48v65.87Z"
        />
      </svg>

      {/* Typography Lockup (1:1 Exact Alignment with User Reference Screenshot) */}
      <div className="flex flex-col text-left justify-between py-0.5">
        {/* Line 1: T H E */}
        <span
          className="font-serif text-[11px] sm:text-[12px] uppercase font-normal leading-none"
          style={{ color: goldColor, letterSpacing: "0.38em" }}
        >
          T H E
        </span>

        {/* Line 2: Dream Casa */}
        <span
          className="font-serif text-2xl sm:text-3xl font-normal leading-[1.05] tracking-tight -mt-0.5 mb-1"
          style={{ color: textColor }}
        >
          Dream Casa
        </span>

        {/* Line 3: — INTERIOR DESIGN STUDIO — */}
        <div className="flex items-center gap-2 whitespace-nowrap leading-none">
          <span className="h-[1px] w-3 shrink-0" style={{ backgroundColor: goldColor }} />
          <span
            className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: goldColor }}
          >
            INTERIOR DESIGN STUDIO
          </span>
          <span className="h-[1px] w-3 shrink-0" style={{ backgroundColor: goldColor }} />
        </div>
      </div>
    </Link>
  );
}
