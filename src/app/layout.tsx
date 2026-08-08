import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedreamcasa.in"),
  title: {
    default: "The Dream Casa | Luxury Interior Design & Turnkey Projects in Indore",
    template: "%s | The Dream Casa Indore",
  },
  description:
    "The Dream Casa is Indore's premier interior architecture studio founded by Poorti Jain. Specializing in luxury residential interiors, 3D photorealistic renders, commercial offices, and 100% turnkey site execution.",
  keywords: [
    "Interior Designer in Indore",
    "Turnkey Interior Execution Indore",
    "Luxury Residential Interiors Indore",
    "Poorti Jain Interior Designer",
    "3D Architectural Renders Indore",
    "Best Interior Studio Yeshwant Niwas Rd Indore",
    "Modular Kitchen Designer Indore",
    "Commercial Office Interiors Indore",
    "The Dream Casa Indore",
  ],
  authors: [{ name: "Poorti Jain", url: "https://thedreamcasa.in" }],
  creator: "Poorti Jain",
  publisher: "The Dream Casa",
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
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "name": "The Dream Casa",
  "image": "https://thedreamcasa.in/images/logo-icon.png",
  "@id": "https://thedreamcasa.in/#studio",
  "url": "https://thedreamcasa.in",
  "telephone": "+917490932661",
  "email": "thedreamcasastudio@gmail.com",
  "priceRange": "₹₹₹",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2WBRLX5L44"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2WBRLX5L44', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
