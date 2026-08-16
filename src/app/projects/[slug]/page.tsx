import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import StatsBar from "@/components/StatsBar";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { projectsData } from "@/data/projects";
import ImageWatermark from "@/components/ImageWatermark";
import { ArrowLeft, ArrowRight, MapPin, Layers, Maximize2, Calendar, Check } from "lucide-react";

interface ProjectSlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | The Dream Casa",
    };
  }

  return {
    title: `${project.title} | The Dream Casa Indore`,
    description: project.description,
    alternates: {
      canonical: `https://thedreamcasa.in/projects/${project.id}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://thedreamcasa.in/projects/${project.id}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

// Material words already present in a project's own copy — surfaced as tags,
// never invented beyond what the project's existing text mentions.
const MATERIAL_KEYWORDS = [
  "marble", "walnut", "brass", "oak", "teak", "veneer", "quartz", "granite",
  "glass", "velvet", "linen", "leather", "timber", "plywood", "laminate",
  "wood", "steel", "fabric", "stone", "tile", "wallpaper", "mirror",
  "lacquer", "chrome",
];

function extractMaterials(text: string): string[] {
  const lower = text.toLowerCase();
  const found = MATERIAL_KEYWORDS.filter((word) => lower.includes(word));
  return Array.from(new Set(found)).map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
}

export default async function ProjectDetailPage({ params }: ProjectSlugProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const sourceText = [
    project.description,
    ...(project.scopeOfWork || []),
    project.challenge || "",
    project.solution || "",
  ].join(" ");
  const materials = extractMaterials(sourceText);

  const isCompleted = project.type === "completed_site";
  const briefText = project.challenge || project.description;

  return (
    <div className="flex flex-1 flex-col bg-cream-light">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Case Study Hero */}
        <section className="relative overflow-hidden bg-ink px-6 py-16 text-white sm:py-20 lg:py-24 sm:px-10 lg:px-16">
          <div className="relative mx-auto max-w-5xl">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest transition-colors hover:text-cream-light"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Selected Work
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium tracking-wide text-white/50 uppercase">
              <span className="text-gold">{project.typeLabel}</span>
              <span className="text-gold/50">/</span>
              <span>{project.category}</span>
            </div>

            <h1 className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              {project.subtitle}
            </p>
          </div>
        </section>

        {/* Feature Image */}
        <section className="bg-cream-light px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-ink/10 bg-cream">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                draggable={false}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
              <ImageWatermark />
            </div>

            {/* Overview: Specs Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6 border border-ink/10 bg-card p-6 sm:grid-cols-4 sm:p-8">
              {project.specs.location && (
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> Location
                  </span>
                  <span className="text-sm font-medium text-ink">{project.specs.location}</span>
                </div>
              )}
              {project.specs.style && (
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <Layers className="h-3.5 w-3.5 text-gold" /> Design Style
                  </span>
                  <span className="text-sm font-medium text-ink">{project.specs.style}</span>
                </div>
              )}
              {project.specs.area && (
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <Maximize2 className="h-3.5 w-3.5 text-gold" /> Area
                  </span>
                  <span className="text-sm font-medium text-ink">{project.specs.area}</span>
                </div>
              )}
              {project.specs.timeline && (
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted uppercase">
                    <Calendar className="h-3.5 w-3.5 text-gold" /> Status
                  </span>
                  <span className="text-sm font-medium text-ink">{project.specs.timeline}</span>
                </div>
              )}
            </div>

            {/* The Brief */}
            <div className="mt-14 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl text-ink sm:text-3xl">The Brief</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {briefText}
                </p>

                {project.solution && (
                  <div className="mt-10">
                    <h2 className="font-serif text-2xl text-ink sm:text-3xl">The Design Direction</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {project.solution}
                    </p>
                  </div>
                )}

                {project.scopeOfWork && project.scopeOfWork.length > 0 && (
                  <div className="mt-10">
                    <h2 className="font-serif text-2xl text-ink sm:text-3xl">Scope of Work</h2>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {project.scopeOfWork.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-10 lg:col-span-5">
                {/* Material Palette */}
                {materials.length > 0 && (
                  <div>
                    <h3 className="font-serif text-xl text-ink">Material Palette</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {materials.map((material) => (
                        <span
                          key={material}
                          className="border border-ink/15 bg-cream-light px-3 py-1.5 text-xs font-medium tracking-wide text-ink"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* From Concept to Reality */}
                <div className="border border-ink/10 bg-card p-6">
                  <h3 className="font-serif text-xl text-ink">
                    {isCompleted ? "From Concept to Reality" : "Concept Visualisation"}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {isCompleted
                      ? "This project has been executed on-site — the images shown reflect the completed, built residence."
                      : "This project is a 3D photorealistic design concept. It has not yet been built on site; the images shown are architectural visualizations, not photographs of a finished space."}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            {project.gallery.length > 1 && (
              <div className="mt-16">
                <h2 className="font-serif text-2xl text-ink sm:text-3xl">Gallery</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.gallery.map((imgUrl, idx) => (
                    <div key={imgUrl + idx} className="relative aspect-[4/3] w-full overflow-hidden border border-ink/10 bg-cream">
                      <Image
                        src={imgUrl}
                        alt={`${project.title} — image ${idx + 1}`}
                        fill
                        draggable={false}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain"
                      />
                      <ImageWatermark />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 flex flex-col items-center gap-4 border-t border-ink/10 pt-10 text-center">
              <p className="text-sm text-muted">Interested in a similar design for your own home?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-xs font-semibold tracking-widest text-ink uppercase transition-all hover:bg-ink hover:text-cream-light"
              >
                Enquire Now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <StatsBar />
        <CtaBanner />
      </main>

      <SiteFooter />
    </div>
  );
}
