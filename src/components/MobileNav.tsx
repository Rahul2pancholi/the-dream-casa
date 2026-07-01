"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`page-safe sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/80 bg-background/97 shadow-sm backdrop-blur-md"
            : "border-border/40 bg-background/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link href="/" aria-label="The Dream Casa — Home">
            <BrandLogo variant="header" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors ${
                  pathname === l.href
                    ? "text-gold"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 border border-gold px-5 py-2 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase transition-all hover:bg-gold hover:text-white"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-300 ${
                open ? "w-0 opacity-0" : "w-5"
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-background transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8 pt-20">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-serif text-4xl font-medium transition-colors ${
                pathname === l.href ? "text-gold" : "text-foreground hover:text-gold"
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-border px-8 py-8 text-center">
          <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-muted uppercase">
            {siteConfig.instagram.handle}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-muted hover:text-gold"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </>
  );
}
