"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Sparkles, Box, CheckCircle2, Play, Film } from "lucide-react";
import { ProjectItem, projectsData, ROOM_CATEGORIES } from "@/data/projects";
import ProjectLightboxModal from "./ProjectLightboxModal";

interface ProjectsSectionProps {
  limit?: number;
  showViewAllCTA?: boolean;
}

export default function ProjectsSection({ limit, showViewAllCTA = true }: ProjectsSectionProps) {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "videos") return !!project.videoUrl;
    if (selectedTab === "3d_renders") return project.type === "3d_render";
    if (selectedTab === "completed_sites") return project.type === "completed_site";
    return project.roomCategory === selectedTab;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="bg-[#faf8f5] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-px w-8 bg-gold" />
            Our Portfolio & Renders
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Architectural Concepts & Turnkey Executions
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Filter through photorealistic 3D interior renders, live site walkthrough videos, and completed luxury apartment transformations.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {ROOM_CATEGORIES.map((cat) => {
            const isActive = selectedTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedTab(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-gold text-white shadow-lg shadow-gold/25 scale-105"
                    : "bg-white text-ink/75 hover:bg-cream-dark hover:text-ink border border-gold/15"
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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl cursor-pointer"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Type Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-ink shadow-md backdrop-blur">
                  {project.type === "video_walkthrough" || project.videoUrl ? (
                    <>
                      <Film className="h-3.5 w-3.5 text-gold" />
                      Live Site Video
                    </>
                  ) : project.type === "3d_render" ? (
                    <>
                      <Box className="h-3.5 w-3.5 text-gold" />
                      3D Render Concept
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      Site Execution
                    </>
                  )}
                </div>

                {/* Video Play Badge if Video Available */}
                {project.videoUrl && (
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink shadow-md">
                    <Play className="h-4 w-4 fill-current translate-x-0.5" />
                  </div>
                )}

                {/* Hover Trigger Action */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-xs font-semibold tracking-widest text-ink uppercase shadow-xl backdrop-blur transition-transform duration-300 group-hover:scale-105">
                    {project.videoUrl ? (
                      <>
                        <Play className="h-4 w-4 fill-gold text-gold" /> Watch Video & Photos
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 text-gold" /> View Gallery ({project.gallery.length})
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold tracking-widest text-gold uppercase">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-snug text-ink group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gold/10 pt-4">
                  <span className="text-[11px] font-medium text-muted">
                    {project.specs.area || project.specs.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
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
              className="inline-flex items-center gap-3 rounded-full bg-gold px-9 py-4 text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/20"
            >
              <Sparkles className="h-4 w-4" />
              Explore All Projects & Walkthroughs
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
