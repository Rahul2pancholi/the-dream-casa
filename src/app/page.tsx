import Image from "next/image";
import { siteConfig } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.15) 0%, transparent 70%)",
        }}
      />

      <main className="relative z-10 flex w-full max-w-lg flex-col items-center text-center">
        <div className="animate-fade-up mb-10">
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} — Interior Design`}
            width={400}
            height={400}
            priority
            className="h-auto w-full max-w-xs sm:max-w-sm"
          />
        </div>

        <div
          className="animate-fade-up mb-6 h-px w-48 gold-divider"
          style={{ animationDelay: "0.2s" }}
        />

        <p
          className="animate-fade-up mb-2 font-serif text-sm tracking-[0.35em] text-gold uppercase"
          style={{ animationDelay: "0.3s" }}
        >
          Website Under Construction
        </p>

        <h1
          className="animate-fade-up mb-4 font-serif text-2xl font-medium text-white sm:text-3xl"
          style={{ animationDelay: "0.4s" }}
        >
          Something Beautiful Is Coming
        </h1>

        <p
          className="animate-fade-up mb-10 max-w-md text-sm leading-relaxed text-white/70 sm:text-base"
          style={{ animationDelay: "0.5s" }}
        >
          We&apos;re crafting an experience as refined as our interiors.
          In the meantime, follow us on Instagram for design inspiration and
          behind-the-scenes updates.
        </p>

        <div
          className="animate-fade-up mb-8 flex flex-col items-center gap-5"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-gold/40 bg-gold/5 px-8 py-3.5 text-gold transition-all duration-300 hover:border-gold hover:bg-gold/15 hover:shadow-[0_0_24px_rgba(212,175,55,0.2)]"
            aria-label={`Follow ${siteConfig.name} on Instagram`}
          >
            <InstagramIcon />
            <span className="text-sm font-medium tracking-wider">
              {siteConfig.instagram.handle}
            </span>
          </a>

          <Image
            src="/images/instagram-qr.png"
            alt="Scan to follow The Dream Casa on Instagram"
            width={180}
            height={180}
            className="rounded-2xl border border-white/10 shadow-lg"
          />
        </div>

        <div
          className="animate-fade-up mb-6 h-px w-32 gold-divider"
          style={{ animationDelay: "0.7s" }}
        />

        <p
          className="animate-fade-up font-serif text-sm italic text-gold/80"
          style={{ animationDelay: "0.8s" }}
        >
          {siteConfig.tagline}
        </p>

        <div
          className="animate-fade-up mt-10 flex items-center gap-2"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="h-1.5 w-1.5 animate-shimmer rounded-full bg-gold" />
          <span
            className="h-1.5 w-1.5 animate-shimmer rounded-full bg-gold"
            style={{ animationDelay: "0.3s" }}
          />
          <span
            className="h-1.5 w-1.5 animate-shimmer rounded-full bg-gold"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </main>

      <footer className="relative z-10 mt-16 text-center text-xs tracking-widest text-white/30 uppercase">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </footer>
    </div>
  );
}
