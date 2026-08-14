import { Metadata } from "next";
import ProjectsPageClient from "@/components/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Selected Work | The Dream Casa Indore",
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

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
