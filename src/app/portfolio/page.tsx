import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionLabel, SectionTitle } from "@/components/ui";
import { portfolioProjects } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected interior design projects by ${siteConfig.name} — luxury residential spaces across India.`,
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-safe mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <SectionLabel className="mb-4">Our Work</SectionLabel>
          <SectionTitle className="mb-4">Selected Projects</SectionTitle>
          <p className="text-sm leading-[1.9] font-light text-muted sm:text-base">
            A curated collection of residential interiors — from concept to 3D
            visualisation and final execution.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {portfolioProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group overflow-hidden border border-border bg-surface transition-shadow hover:shadow-[0_16px_48px_-12px_rgba(44,40,36,0.1)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="mb-2 text-[10px] tracking-[0.28em] text-gold uppercase">
                  {project.type}
                </p>
                <h2 className="mb-2 font-serif text-2xl">{project.title}</h2>
                <p className="text-sm text-muted">
                  {project.location} · {project.client}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
