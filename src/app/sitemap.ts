import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogs";
import { projectsData } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thedreamcasa.in";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/interior-designer-indore`,
      lastModified: new Date("2026-08-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/interior-designer-ahmedabad`,
      lastModified: new Date("2026-08-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/modular-kitchen-designer-indore`,
      lastModified: new Date("2026-08-17"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/commercial-office-interior-designer-indore`,
      lastModified: new Date("2026-08-17"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-08-17"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date("2026-08-17"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date("2026-08-08"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...projectPages];
}
