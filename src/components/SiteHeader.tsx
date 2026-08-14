"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const desktopNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Blogs", href: "/blog" },
];

const mobileNavLinks = [
  ...desktopNavLinks,
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        mobileMenuOpen ? "bg-cream-light" : "bg-cream-light/95 backdrop-blur-md"
      }`}
    >
      <div className="relative w-full border-b border-ink/10 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3.5">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0"
        >
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/images/dream-casa-icon.svg"
              alt="The Dream Casa Studio Indore"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-ink leading-none">
              The Dream Casa
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-gold uppercase mt-1">
              Interior Design &bull; Turnkey Projects
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {desktopNavLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-xs font-semibold tracking-widest uppercase transition-colors hover:text-ink whitespace-nowrap after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                  isActive
                    ? "text-gold font-bold after:w-full"
                    : "text-nav after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden items-center gap-4 lg:flex shrink-0">
          <a
            href="tel:+917490932661"
            className="flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-gold transition-colors whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-gold shrink-0" /> +91 7490 932 661
          </a>
          <span className="h-4 w-px bg-ink/15" />
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 border border-ink px-5 py-2.5 text-xs font-semibold tracking-widest text-ink uppercase transition-all hover:bg-ink hover:text-cream-light whitespace-nowrap"
          >
            Enquire Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="flex h-10 w-10 items-center justify-center border border-ink/15 text-ink transition-colors hover:bg-cream lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-50 flex flex-col justify-between bg-cream-light px-6 py-6 shadow-2xl overflow-y-auto lg:hidden border-t border-ink/10">
          <nav className="flex flex-col gap-5 pt-2">
            {mobileNavLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-ink/10 pb-3 text-sm font-semibold tracking-[0.15em] uppercase ${
                    isActive ? "text-gold font-bold" : "text-ink/90"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 border-t border-ink/10 pt-6 pb-6 mt-6">
            <a
              href="tel:+917490932661"
              className="flex items-center justify-center gap-2 text-sm font-bold text-ink py-2"
            >
              <Phone className="h-4 w-4 text-gold" /> +91 7490 932 661
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 border border-ink py-3.5 text-center text-xs font-bold tracking-widest text-ink uppercase hover:bg-ink hover:text-cream-light"
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
