import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament, SectionLabel, SectionTitle } from "@/components/ui";
import { getProject, portfolioProjects } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: `${project.concept.title} — ${project.type} interior design in ${project.location} by ${siteConfig.name}.`,
    robots: { index: false, follow: false },
  };
}

function ProjectSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`page-safe border-t border-border px-5 py-14 sm:px-8 sm:py-18 lg:py-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <header className="page-safe sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/portfolio"
            className="text-[11px] tracking-[0.2em] text-muted uppercase transition-colors hover:text-gold"
          >
            ← Portfolio
          </Link>
          <Link href="/" className="font-serif text-sm tracking-wide">
            {siteConfig.name}
          </Link>
        </div>
      </header>

      <section className="page-safe px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel className="mb-4">{project.subtitle}</SectionLabel>
          <h1 className="mb-6 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <Ornament className="mx-auto mb-6 w-32" />
          <p className="mb-1 text-[11px] tracking-[0.28em] text-muted uppercase">
            Client — {project.client}
          </p>
          <p className="text-[11px] tracking-[0.28em] text-muted uppercase">
            {project.location}
          </p>
        </div>
      </section>

      <ProjectSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel className="mb-4">Design Concept</SectionLabel>
            <SectionTitle className="mb-6 text-3xl sm:text-4xl">
              {project.concept.title}
            </SectionTitle>
            <p className="mb-8 text-sm leading-[1.9] font-light text-muted sm:text-base">
              {project.concept.description}
            </p>
            <SectionLabel className="mb-4">Colour Palette</SectionLabel>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {project.palette.map((swatch) => (
                <div key={swatch.name} className="text-center">
                  <div
                    className="mx-auto mb-2 h-12 w-12 rounded-full border border-border sm:h-14 sm:w-14"
                    style={{ backgroundColor: swatch.color }}
                  />
                  <p className="text-[10px] leading-tight tracking-wide text-muted uppercase">
                    {swatch.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src={project.conceptImage}
              alt={`${project.title} design concept`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection className="bg-surface">
        <div className="mb-12 text-center">
          <SectionLabel className="mb-4">Materials</SectionLabel>
          <SectionTitle>Material &amp; Finish Legend</SectionTitle>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.materials.map((material) => (
            <div
              key={material.name}
              className="border border-border bg-background p-5 sm:p-6"
            >
              <h3 className="mb-2 font-serif text-lg text-gold">
                {material.name}
              </h3>
              <p className="text-sm font-light text-muted">{material.use}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection>
        <div className="mb-12 text-center">
          <SectionLabel className="mb-4">Layout</SectionLabel>
          <SectionTitle>Final Furniture Layout</SectionTitle>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
          <Image
            src={project.floorPlan}
            alt={`${project.title} floor plan`}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </ProjectSection>

      {project.spaces.map((space) => (
        <ProjectSection key={space.id} id={space.id} className="bg-surface">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel className="mb-4">{space.number}</SectionLabel>
              <SectionTitle className="text-3xl sm:text-4xl">
                {space.name}
              </SectionTitle>
            </div>
            <p className="font-serif text-lg text-gold">{space.dimensions}</p>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {space.highlights.map((highlight) => (
              <span
                key={highlight}
                className="border border-border px-4 py-1.5 text-[10px] tracking-[0.2em] text-gold uppercase"
              >
                {highlight}
              </span>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {space.images.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden border border-border"
              >
                <Image
                  src={src}
                  alt={`${space.name} — view ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </ProjectSection>
      ))}

      <section className="page-safe border-t border-border px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-lg text-center">
          <Ornament className="mx-auto mb-8 w-32" />
          <SectionLabel className="mb-3">Design by</SectionLabel>
          <p className="mb-8 font-serif text-2xl">{siteConfig.designer}</p>
          <Link
            href="/portfolio"
            className="text-[11px] tracking-[0.25em] text-gold uppercase transition-opacity hover:opacity-70"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
