import { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best Interior Designer in Indore & Ahmedabad | The Dream Casa",
  },
  description:
    "Explore luxury residential interiors, 3D architectural renders, live site video reels, and 100% turnkey site execution by Founder Poorti Jain in Indore & Ahmedabad.",
  alternates: {
    canonical: "https://thedreamcasa.in",
  },
  openGraph: {
    title: "The Dream Casa | Best Interior Designer in Indore & Ahmedabad",
    description:
      "Explore luxury residential interiors, 3D architectural renders, live site video reels, and 100% turnkey site execution by Founder Poorti Jain in Indore & Ahmedabad.",
    url: "https://thedreamcasa.in",
  },
};

export default function Home() {
  return <HomePageClient />;
}
