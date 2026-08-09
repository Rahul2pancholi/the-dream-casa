import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Playfair_Display, Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedreamcasa.in"),
  title: {
    default: "Best Interior Designer in Indore | Luxury Interiors & Turnkey Execution | The Dream Casa",
    template: "%s | Best Interior Designer in Indore",
  },
  description:
    "Looking for the best interior designer in Indore? Founder Poorti Jain & The Dream Casa deliver 3D photorealistic architectural renders & 100% turnkey site execution for luxury homes, penthouses & offices across Indore.",
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
    title: "The Dream Casa | Luxury Interior Design & Turnkey Projects in Indore",
    description:
      "Founded by Poorti Jain, The Dream Casa delivers luxury residential & commercial interiors in Indore with 3D renders and guaranteed turnkey site execution.",
    images: [
      {
        url: "/images/hero/living-room.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Living Room Interior Design by The Dream Casa Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dream Casa | Luxury Interior Design Indore",
    description:
      "Turnkey interior design studio led by Poorti Jain in Indore. 3D renders & 1:1 on-site execution.",
    images: ["/images/hero/living-room.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/images/logo-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo-icon.png",
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
      "description": "Luxury Interior Design Studio & Turnkey Projects in Indore",
      "inLanguage": "en-IN"
    },
    {
      "@type": "InteriorDesigner",
      "name": "The Dream Casa - Best Interior Designer in Indore",
      "description": "Premier interior architecture studio and best interior designer in Indore led by Founder Poorti Jain. Specializing in luxury residential interiors, 3D architectural renders, and 100% turnkey site execution.",
      "image": "https://thedreamcasa.in/images/logo-icon.png",
      "@id": "https://thedreamcasa.in/#studio",
      "url": "https://thedreamcasa.in",
      "telephone": "+917490932661",
      "email": "thedreamcasastudio@gmail.com",
      "priceRange": "₹₹₹",
      "knowsAbout": [
        "Interior Designer in Indore",
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
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-2WBRLX5L44" />
      </body>
    </html>
  );
}
