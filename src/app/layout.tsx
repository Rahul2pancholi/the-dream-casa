import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const pageTitle = `${siteConfig.name} | Premium Interior Design Studio India`;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.designer }, { name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Interior Design",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageTitle,
    description: siteConfig.description,
    countryName: "India",
    images: [
      {
        url: "/images/logo-icon.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} — Premium Interior Design in India`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
    images: ["/images/logo-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    "geo.region": `IN-${siteConfig.location.state}`,
    "geo.placename": siteConfig.location.city,
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    name: siteConfig.name,
    description: siteConfig.longDescription,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    image: `${siteConfig.url}/images/logo-icon.png`,
    sameAs: [siteConfig.instagram.url],
    founder: {
      "@type": "Person",
      name: siteConfig.designer,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.countryCode,
    },
    areaServed: [
      {
        "@type": "Country",
        name: siteConfig.location.country,
      },
      ...siteConfig.serviceAreas.map((city) => ({
        "@type": "City",
        name: city,
        containedInPlace: {
          "@type": "Country",
          name: siteConfig.location.country,
        },
      })),
    ],
    knowsAbout: [
      "Residential interior design",
      "Luxury home interiors",
      "Modular kitchen design",
      "Wardrobe design",
      "3D interior visualisation",
      "Apartment interior design",
      "Villa interior design",
    ],
    serviceType: [
      "Full home interior design",
      "3BHK interior design",
      "2BHK interior design",
      "Kitchen design",
      "Bedroom design",
      "Living room design",
    ],
  };

  return (
    <html
      lang="en-IN"
      style={{ colorScheme: "light" }}
      className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
