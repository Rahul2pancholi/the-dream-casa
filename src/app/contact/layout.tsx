import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Interior Consultation",
  description:
    "Schedule a free design consultation with Founder Poorti Jain. Visit our studio at Yeshwant Niwas Rd, Indore, MP or call +91 7490 932 661.",
  alternates: {
    canonical: "https://thedreamcasa.in/contact",
  },
  openGraph: {
    title: "Book Interior Consultation | The Dream Casa Indore Studio",
    description:
      "Schedule a free design consultation with Founder Poorti Jain. Visit our studio at Yeshwant Niwas Rd, Indore, MP or call +91 7490 932 661.",
    url: "https://thedreamcasa.in/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thedreamcasa.in/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://thedreamcasa.in/contact" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
