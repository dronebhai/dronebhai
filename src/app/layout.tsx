import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import JsonLd from "@/components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dronebhai.com"),
  title: {
    default: "Dronebhai | India's #1 Drone Sales, Custom Manufacturing & DJI Repair Hub",
    template: "%s | Dronebhai",
  },
  description:
    "Dronebhai is India's premier drone ecosystem: buy authentic DJI drones, custom industrial & FPV drone manufacturing, genuine spare parts, and certified DJI drone repair services across Ahmedabad.",
  applicationName: "Dronebhai",
  authors: [{ name: "Dronebhai - Robuzta Techlabs", url: "https://dronebhai.com" }],
  creator: "Dronebhai",
  publisher: "Dronebhai",
  keywords: [
    "drone store india",
    "buy dji drone online",
    "dji drone repair ahmedabad",
    "authorized dji service center india",
    "custom drone manufacturing",
    "fpv drone build",
    "agricultural spray drones",
    "cinematic camera drones",
    "drone spare parts shop",
    "drone repair near me",
    "Dronebhai",
    "Robuzta Techlabs",
  ],
  category: "Technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dronebhai | India's #1 Drone Sales, Custom Manufacturing & DJI Repair Hub",
    description:
      "Explore 16 drone categories, custom commercial drone manufacturing, and expert DJI repair services at Dronebhai's certified labs.",
    url: "https://dronebhai.com",
    siteName: "Dronebhai",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-drone-flagship.jpg",
        width: 1200,
        height: 630,
        alt: "Dronebhai — Premium Drone Sales, Custom Manufacturing and DJI Repair Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dronebhai | India's #1 Drone Sales, Custom Manufacturing & DJI Repair Hub",
    description:
      "Premium drone sales, custom drone manufacturing, and expert DJI drone repair services in India.",
    images: ["/images/hero-drone-flagship.jpg"],
    creator: "@dronebhai",
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
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/images/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/images/site.webmanifest",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dronebhai.com/#organization",
      name: "Dronebhai",
      alternateName: ["Robuzta Techlabs", "Drone Bhai", "Dronebhai India"],
      url: "https://dronebhai.com",
      logo: "https://dronebhai.com/logo.png",
      image: "https://dronebhai.com/images/hero-drone-flagship.jpg",
      description:
        "India's premier drone sales, custom drone manufacturing, and authorized DJI service & repair center.",
      telephone: "+91-8002800380",
      email: "contact@dronebhai.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Aerial Hub Building, SOBO Center Road, South Bopal",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380058",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/dronebhai",
        "https://www.youtube.com/@dronebhai",
        "https://facebook.com/dronebhai",
        "https://twitter.com/dronebhai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dronebhai.com/#website",
      url: "https://dronebhai.com",
      name: "Dronebhai",
      publisher: { "@id": "https://dronebhai.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://dronebhai.com/products?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ElectronicsStore",
      "@id": "https://dronebhai.com/#south-bopal-branch",
      name: "Dronebhai - South Bopal Flagship Drone Lab & Repair Center",
      url: "https://dronebhai.com/branches",
      telephone: "+91-8002800380",
      priceRange: "₹₹ - ₹₹₹₹",
      image: "https://dronebhai.com/images/about-lab.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Aerial Hub Building, SOBO Center Road, South Bopal",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380058",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.0366",
        longitude: "72.4607",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "11:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "ElectronicsStore",
      "@id": "https://dronebhai.com/#tragad-branch",
      name: "Dronebhai - Tragad Service Centre",
      url: "https://dronebhai.com/branches",
      telephone: "+91-8002800380",
      priceRange: "₹₹ - ₹₹₹₹",
      image: "https://dronebhai.com/images/about-lab.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "45 Tech Park Phase 2, Tragad Road, Tragad",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382481",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.1194",
        longitude: "72.5858",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "11:00",
          closes: "19:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        {/* Material Symbols Outlined */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <JsonLd data={rootStructuredData} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased relative pb-[72px] md:pb-0">
        <Navbar />
        <div className="flex-grow pt-16">{children}</div>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
