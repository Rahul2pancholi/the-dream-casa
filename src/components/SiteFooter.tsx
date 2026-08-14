import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin, User } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Residences", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Residences",
  "Premium Offices",
  "Boutique Hospitality",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/the.dream.casa?utm_source=qr&igsh=a2UyNXgwNnhobW04",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    path: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.378-.293 1.194-.333 1.361-.052.218-.172.264-.397.159-1.48-.689-2.404-2.852-2.404-4.591 0-3.737 2.716-7.169 7.83-7.169 4.11 0 7.305 2.929 7.305 6.842 0 4.083-2.575 7.369-6.148 7.369-1.2 0-2.328-.624-2.714-1.362l-.738 2.817c-.267 1.029-.99 2.318-1.474 3.104C9.658 23.803 10.804 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-charcoal text-dark-body px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-dark-body">
              A founder-led design studio in Indore &amp; Ahmedabad, est. 2025. Founded by Poorti Jain.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border-dark text-secondary transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-gold uppercase">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-dark-body transition-colors hover:text-cream-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-gold uppercase">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <span key={service} className="text-sm text-dark-body">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-gold uppercase">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4 text-sm text-dark-body">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 shrink-0 text-gold" />
                <span>Poorti Jain (Founder)</span>
              </div>
              <a
                href="tel:+917490932661"
                className="flex items-center gap-3 hover:text-cream-light"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                +91 7490 932 661
              </a>
              <a
                href="mailto:thedreamcasastudio@gmail.com"
                className="flex items-center gap-3 hover:text-cream-light"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                thedreamcasastudio@gmail.com
              </a>
              <a
                href="https://thedreamcasa.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cream-light"
              >
                <Globe className="h-4 w-4 shrink-0 text-gold" />
                thedreamcasa.in
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="flex flex-col gap-1 text-xs">
                  <span><strong className="text-cream-light">Indore:</strong> The View, 305, Yeshwant Niwas Rd, Nehru Park 2, MP 452003</span>
                  <span><strong className="text-cream-light">Ahmedabad:</strong> The Dream Casa Studio, Bodakdev, SG Highway, GJ 380054</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border-dark pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] tracking-[0.2em] text-footer-muted uppercase">
            &copy; {new Date().getFullYear()} The Dream Casa. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] text-footer-muted uppercase">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <span className="text-dark-secondary/50">|</span>
            <Link href="/terms-conditions" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
