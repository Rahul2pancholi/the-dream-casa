import { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Founder Poorti Jain & Studio | The Dream Casa Indore",
  description:
    "Learn about Founder Poorti Jain and The Dream Casa studio based on Yeshwant Niwas Rd, Indore. A founder-led studio delivering luxury residential and commercial turnkey interior projects.",
  alternates: {
    canonical: "https://thedreamcasa.in/about",
  },
  openGraph: {
    title: "About Founder Poorti Jain & Studio | The Dream Casa Indore",
    description:
      "Learn about Founder Poorti Jain and The Dream Casa studio based on Yeshwant Niwas Rd, Indore. A founder-led studio delivering luxury residential and commercial turnkey interior projects.",
    url: "https://thedreamcasa.in/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
