import { Metadata } from "next";
import ProjectsPageClient from "@/components/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Explore photorealistic 3D design concepts, on-site video walkthroughs, and completed residences in Indore by Poorti Jain.",
  alternates: {
    canonical: "https://thedreamcasa.in/projects",
  },
  openGraph: {
    title: "Selected Work | The Dream Casa Indore",
    description:
      "Explore photorealistic 3D design concepts, on-site video walkthroughs, and completed residences in Indore by Poorti Jain.",
    url: "https://thedreamcasa.in/projects",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
    { "@type": "ListItem", position: 2, name: "Selected Work", item: "https://thedreamcasa.in/projects" },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsPageClient />
    </>
  );
}
