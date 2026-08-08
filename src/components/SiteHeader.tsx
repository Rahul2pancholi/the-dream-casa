import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/hero/brand-lockup.jpg"
            alt="The Dream Casa — Interior Design & Turnkey Projects"
            width={1368}
            height={405}
            className="h-12 w-auto rounded-md sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:text-gold ${
                link.label === "Home"
                  ? "border-b-2 border-gold pb-1 text-gold"
                  : "text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-full bg-gold px-6 py-3 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:bg-gold-dark sm:inline-block"
        >
          Let&apos;s Connect
        </Link>
      </div>
    </header>
  );
}
