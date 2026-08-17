import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Newsreader, Roboto_Flex } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConsultationModal from "@/components/ConsultationModal";
import NoImageContextMenu from "@/components/NoImageContextMenu";
import "./globals.css";

const playfair = Newsreader({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Roboto_Flex({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedreamcasa.in"),
  title: {
    default: "Best Interior Designer in Indore & Ahmedabad | Luxury Turnkey Execution | The Dream Casa",
    template: "%s | The Dream Casa",
  },
  description:
    "Looking for the best interior designer in Indore or Ahmedabad? Founder Poorti Jain & The Dream Casa deliver 3D photorealistic architectural renders & 100% turnkey site execution for luxury homes, penthouses & offices in Indore (Yeshwant Niwas Rd) & Ahmedabad (Bodakdev, SG Highway).",
  keywords: [
    "interior designer in indore",
    "best interior designer in indore",
    "top interior designers in indore",
    "luxury interior designer in indore",
    "turnkey interior designer in indore",
    "residential interior designer in indore",
    "poorti jain interior designer indore",
    "interior architecture studio yeshwant niwas rd indore",
    "modular kitchen designer in indore",
    "commercial office interior designer in indore",
    "the dream casa indore",
    "interior designer in ahmedabad",
    "best interior designer in ahmedabad",
    "top interior designers in ahmedabad",
    "luxury interior designer in ahmedabad",
    "turnkey interior designer in ahmedabad",
    "residential interior designer in ahmedabad",
    "poorti jain interior designer ahmedabad",
    "interior design studio sg highway ahmedabad",
    "modular kitchen designer in ahmedabad",
    "commercial office interior designer in ahmedabad",
    "the dream casa ahmedabad",
  ],
  authors: [{ name: "Poorti Jain", url: "https://thedreamcasa.in" }],
  creator: "Poorti Jain",
  publisher: "The Dream Casa",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "7P7d8IIFpkhirWPNDq9-nUQdTsNdfQ-rM5SXmwk4twY",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thedreamcasa.in",
    siteName: "The Dream Casa",
    title: "The Dream Casa | Luxury Interior Design & Turnkey Projects in Indore & Ahmedabad",
    description:
      "Founded by Poorti Jain, The Dream Casa delivers luxury residential & commercial interiors in Indore & Ahmedabad with 3D renders and guaranteed turnkey site execution.",
    images: [
      {
        url: "/images/hero/living-room.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Living Room Interior Design by The Dream Casa Indore & Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dream Casa | Luxury Interior Design Indore & Ahmedabad",
    description:
      "Turnkey interior design studio led by Poorti Jain in Indore & Ahmedabad. 3D renders & 1:1 on-site execution.",
    images: ["/images/hero/living-room.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    copyright: `© ${new Date().getFullYear()} The Dream Casa. All rights reserved. All photography, 3D renders, and content on this site are the property of The Dream Casa and may not be reproduced without permission.`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://thedreamcasa.in/#website",
      "url": "https://thedreamcasa.in",
      "name": "The Dream Casa",
      "description": "Luxury Interior Design Studio & Turnkey Projects in Indore & Ahmedabad",
      "inLanguage": "en-IN"
    },
    {
      "@type": "InteriorDesigner",
      "@id": "https://thedreamcasa.in/#studio-indore",
      "name": "The Dream Casa - Best Interior Designer in Indore",
      "description": "Premier interior architecture studio and best interior designer in Indore led by Founder Poorti Jain. Specializing in luxury residential interiors, 3D architectural renders, and 100% turnkey site execution.",
      "image": "https://thedreamcasa.in/images/logo-icon.png",
      "url": "https://thedreamcasa.in",
      "telephone": "+917490932661",
      "email": "thedreamcasastudio@gmail.com",
      "priceRange": "₹₹₹",
      "knowsAbout": [
        "Interior Designer in Indore",
        "Interior Designer in Ahmedabad",
        "Luxury Residential Interiors",
        "Turnkey Site Execution",
        "3D Photorealistic Renders",
        "Modular Kitchen Design",
        "Commercial Office Interiors"
      ],
      "founder": {
        "@type": "Person",
        "name": "Poorti Jain",
        "jobTitle": "Founder & Principal Designer"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The View, 305, Yeshwant Niwas Rd, Nehru Park 2, Lad Colony",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.7217489,
        "longitude": 75.8737501
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:30"
      },
      "sameAs": [
        "https://www.instagram.com/the.dream.casa"
      ],
      "areaServed": [
        "Indore",
        "Palasia",
        "Vijay Nagar",
        "Super Corridor",
        "Yeshwant Niwas Rd",
        "Bicholi Mardana",
        "Saket Nagar",
        "Madhya Pradesh"
      ]
    },
    {
      "@type": "InteriorDesigner",
      "@id": "https://thedreamcasa.in/#studio-ahmedabad",
      "name": "The Dream Casa - Best Interior Designer in Ahmedabad",
      "description": "Premier luxury interior design studio in Ahmedabad led by Founder Poorti Jain. Specializing in high-end residential interiors, 3D architectural renders, and 100% turnkey site execution in Bodakdev, SG Highway, and across Gujarat.",
      "image": "https://thedreamcasa.in/images/logo-icon.png",
      "url": "https://thedreamcasa.in",
      "telephone": "+917490932661",
      "email": "thedreamcasastudio@gmail.com",
      "priceRange": "₹₹₹",
      "knowsAbout": [
        "Interior Designer in Ahmedabad",
        "Luxury Residential Interiors",
        "Turnkey Site Execution",
        "3D Photorealistic Renders",
        "Modular Kitchen Design",
        "Commercial Office Interiors"
      ],
      "founder": {
        "@type": "Person",
        "name": "Poorti Jain",
        "jobTitle": "Founder & Principal Designer"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Dream Casa Studio, Bodakdev, SG Highway",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380054",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.0375,
        "longitude": 72.5085
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:30"
      },
      "sameAs": [
        "https://www.instagram.com/the.dream.casa"
      ],
      "areaServed": [
        "Ahmedabad",
        "Bodakdev",
        "SG Highway",
        "Prahlad Nagar",
        "Satellite",
        "Ambli",
        "Thaltej",
        "Gujarat"
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-light">
        {children}
        <NoImageContextMenu />
        <WhatsAppButton />
        <ConsultationModal />
        <GoogleAnalytics gaId="G-2WBRLX5L44" />
      </body>
    </html>
  );
}
