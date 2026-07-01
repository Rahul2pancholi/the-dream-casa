import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BrandLogo } from "@/components/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="page-safe border-t border-border bg-foreground text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5 [filter:brightness(0)_invert(1)_opacity(0.9)]">
              <BrandLogo variant="header" />
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/55">
              {siteConfig.tagline} Premium interior design studio crafting
              bespoke homes across India.
            </p>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold-light uppercase transition-opacity hover:opacity-70"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              {siteConfig.instagram.handle}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-white/40 uppercase">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/55 transition-colors hover:text-gold-light"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-white/40 uppercase">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/55">
              <div>
                <p className="mb-0.5 text-[11px] font-semibold tracking-wider text-white/30 uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold-light"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="mb-0.5 text-[11px] font-semibold tracking-wider text-white/30 uppercase">
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.whatsapp}`}
                  className="hover:text-gold-light"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="mb-0.5 text-[11px] font-semibold tracking-wider text-white/30 uppercase">
                  Location
                </p>
                <p>
                  {siteConfig.location.city}, {siteConfig.location.state}
                  <br />
                  Pan India Service
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] tracking-[0.2em] text-white/30 uppercase">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-serif text-sm italic text-white/30">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
