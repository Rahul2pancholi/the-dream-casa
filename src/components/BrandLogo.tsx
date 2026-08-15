import Link from "next/link";

interface BrandLogoProps {
  /** "dark" for light cream backgrounds (lockup-navy-gold), "light" for dark navy/charcoal backgrounds (lockup-white-gold-on-dark) */
  variant?: "dark" | "light";
  className?: string;
}

export default function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  const isLight = variant === "light";
  
  // lockup-navy-gold values for dark variant (light bg), lockup-white-gold-on-dark values for light variant (dark bg)
  const archColor = isLight ? "#ffffff" : "#152741";
  const windowColor = isLight ? "#b8933f" : "#b8933f";
  const textColor = isLight ? "#ffffff" : "#152741";
  const subtextColor = isLight ? "#b8933f" : "#b8933f";
  const separatorColor = isLight ? "rgba(184,147,63,0.5)" : "#cdc7bc";

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group shrink-0 ${className}`}>
      {/* Arch & 4-Pane Window Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="378 201 150 157"
        className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* 4-Pane Grid Window (Gold #b8933f) */}
        <g fill={windowColor}>
          <path d="M430.01,246.17v4.04h8.69v-8.69h-4.04c-2.57,0-4.65,2.08-4.65,4.65Z" />
          <path d="M430.01,232.07v4.22c0,2.47,2,4.47,4.47,4.47h4.22v-8.69h-8.69Z" />
          <path d="M420.55,240.76h4.04c2.57,0,4.65-2.08,4.65-4.65v-4.04h-8.69v8.69Z" />
          <path d="M424.76,241.52h-4.22v8.69h8.69v-4.22c0-2.47-2-4.47-4.47-4.47Z" />
        </g>
        {/* Architectural Arches (Navy #152741 for light bg, White #ffffff for dark bg) */}
        <path
          fill={archColor}
          d="M519.73,349.34h-5.11v-60.35c0-9.98-8.12-18.09-18.09-18.09h-19.53v77.47h-38.73v-70.99c0-6.39,5.2-11.59,11.59-11.59h22.03v-51.08h-49.73c-16.73,0-30.34,13.61-30.34,30.34v102.52h-5.11v-102.52c0-19.55,15.91-35.46,35.46-35.46h54.85v56.2h19.53c12.8,0,23.21,10.41,23.21,23.21v60.35ZM443.37,343.24h28.5v-72.35h-22.03c-3.57,0-6.48,2.91-6.48,6.48v65.87Z"
        />
      </svg>

      {/* Vertical Hairline Separator */}
      <div
        className="h-9 w-[1.5px] shrink-0 transition-colors"
        style={{ backgroundColor: separatorColor }}
      />

      {/* Clean Non-Wrapping Typography Lockup */}
      <div className="flex flex-col text-left justify-center shrink-0">
        <span
          className="font-serif text-xl sm:text-2xl font-medium leading-none tracking-tight whitespace-nowrap"
          style={{ color: textColor }}
        >
          The Dream Casa
        </span>
        <span
          className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase mt-1.5 leading-none whitespace-nowrap"
          style={{ color: subtextColor }}
        >
          INTERIOR DESIGN STUDIO
        </span>
      </div>
    </Link>
  );
}
