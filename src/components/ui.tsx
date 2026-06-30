export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.28em] text-gold uppercase sm:text-[13px] sm:tracking-[0.32em] ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-[2.75rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Ornament({ className = "w-44" }: { className?: string }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span>✦</span>
    </div>
  );
}
