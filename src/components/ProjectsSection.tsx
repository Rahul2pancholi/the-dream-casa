"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Eye, Play } from "lucide-react";
import { ProjectItem, projectsData, ROOM_CATEGORIES } from "@/data/projects";
import ProjectLightboxModal from "./ProjectLightboxModal";

interface ProjectsSectionProps {
  limit?: number;
  showViewAllCTA?: boolean;
  hideFilters?: boolean;
}

// Homepage "Selected Work" teaser: a small set of large project presentations
// linking straight into the case-study page.
function SelectedWorkTeaser({ limit = 6 }: { limit?: number }) {
  const featured = projectsData.slice(0, limit);

  return (
    <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16" id="portfolio">
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Selected Work
          </div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            A Curated Look at Recent Work
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            A mix of completed residences and 3D design concepts — each clearly marked by its current status.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-col overflow-hidden border border-ink/10 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 bg-ink/85 px-2.5 py-1 text-[9px] font-semibold tracking-widest text-white uppercase backdrop-blur">
                  {project.typeLabel}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-lg leading-snug text-ink group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-medium tracking-wide text-muted uppercase">
                    {project.specs.location} {project.specs.area && `· ${project.specs.area}`}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform">
                    View Project <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 border border-ink px-9 py-4 text-xs font-semibold tracking-[0.15em] text-ink uppercase transition-all hover:bg-ink hover:text-cream-light"
          >
            View All Selected Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectsSectionContent({ limit, showViewAllCTA = true, hideFilters = false }: ProjectsSectionProps) {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [selectedTab, setSelectedTab] = useState<string>(initialCat);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setSelectedTab(cat);
    }
  }, [searchParams]);

  // Homepage teaser uses its own large-format "Selected Work" layout.
  if (hideFilters) {
    return <SelectedWorkTeaser limit={limit} />;
  }

  const filteredProjects = projectsData.filter((project) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "videos") return !!project.videoUrl;
    if (selectedTab === "3d_renders") return project.type === "3d_render";
    if (selectedTab === "completed_sites") return project.type === "completed_site";
    if (selectedTab === "residential") return project.serviceCategory === "residential";
    if (selectedTab === "commercial") return project.serviceCategory === "commercial";
    if (selectedTab === "turnkey") return project.serviceCategory === "turnkey" || project.type === "completed_site";
    if (selectedTab === "hospitality") return project.serviceCategory === "hospitality";
    return project.roomCategory === selectedTab;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="bg-cream-light px-6 py-24 sm:px-10 lg:px-16" id="portfolio">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex max-w-2xl flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Portfolio &amp; Renders
          </div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Design Concepts &amp; Completed Residences
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Filter through photorealistic 3D design concepts, live site walkthrough videos, and completed residences — each labeled with its true status.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-start gap-x-6 gap-y-2 border-b border-ink/10 pb-4">
          {ROOM_CATEGORIES.map((cat) => {
            const isActive = selectedTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedTab(cat.id)}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                  isActive ? "text-gold" : "text-ink/60 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative flex flex-col overflow-hidden border border-ink/10 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 cursor-pointer"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Status Badge — always the real type, never implies "completed" for renders */}
                <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur">
                  {project.typeLabel}
                </span>

                {/* Video Play Badge if Video Available */}
                {project.videoUrl && (
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow-md">
                    <Play className="h-4 w-4 fill-current translate-x-0.5" />
                  </div>
                )}

                {/* Hover Trigger Action */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 bg-white/95 px-5 py-2.5 text-xs font-semibold tracking-widest text-ink uppercase shadow-xl backdrop-blur">
                    {project.videoUrl ? (
                      <>
                        <Play className="h-4 w-4 fill-gold text-gold" /> Watch Video &amp; Photos
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 text-gold" /> View Gallery ({project.gallery.length})
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Card Details — archive/index style meta */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-muted uppercase">
                    <span>{project.typeLabel}</span>
                    <span className="text-gold/50">/</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug text-ink group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                  <span className="text-[11px] font-medium text-muted">
                    {project.specs.area || project.specs.location}
                  </span>
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform"
                  >
                    View Full Project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {showViewAllCTA && (
          <div className="mt-16 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-ink px-9 py-4 text-xs font-semibold tracking-[0.15em] text-ink uppercase transition-all hover:bg-ink hover:text-cream-light"
            >
              Explore All Projects &amp; Walkthroughs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <ProjectLightboxModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

export default function ProjectsSection(props: ProjectsSectionProps) {
  return (
    <Suspense fallback={<div className="py-12 text-center text-muted">Loading portfolio...</div>}>
      <ProjectsSectionContent {...props} />
    </Suspense>
  );
}
