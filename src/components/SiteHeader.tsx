"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md px-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-icon.png"
            alt="The Dream Casa"
            width={48}
            height={48}
            className="h-11 w-11 rounded-lg object-cover sm:h-12 sm:w-12 shadow-sm"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-bold text-ink sm:text-2xl">
              The Dream Casa
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-gold uppercase">
              Interior Design &middot; Turnkey Projects
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 hover:text-gold ${
                  isActive
                    ? "border-b-2 border-gold pb-1 text-gold font-bold"
                    : "text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-gold px-6 py-3 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-all shadow-md hover:bg-gold-dark hover:shadow-gold/20"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 text-ink transition-colors hover:bg-cream lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 z-40 flex flex-col justify-between bg-white/98 p-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-gold/10 pb-3 text-sm font-semibold tracking-[0.15em] uppercase ${
                    isActive ? "text-gold font-bold" : "text-ink/90"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 border-t border-gold/20 pt-6 pb-6">
            <a
              href="tel:+917400932661"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-ink"
            >
              <Phone className="h-4 w-4 text-gold" /> +91 7400 932 661
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-gold py-3.5 text-center text-xs font-semibold tracking-widest text-white uppercase shadow-md hover:bg-gold-dark"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
