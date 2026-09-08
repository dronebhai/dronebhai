import type { Metadata } from "next";
import DjiSaleClient from "@/components/DjiSaleClient";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { djiSaleProducts } from "@/lib/data/dji-sales";

export const metadata: Metadata = {
  title: "DJI Drone Product Range | Buy Authentic DJI Drones in India | Dronebhai",
  description:
    "Explore authentic DJI drones with official warranty and pan-India delivery. Buy DJI Mini 4 Pro, Mini 3, Air 3, Air 2S, Mavic 3 Pro, Avata 2, Matrice 350 RTK, Agras T40.",
  alternates: {
    canonical: "/dji-sale",
  },
  openGraph: {
    title: "DJI Drone Product Range | Buy Authentic DJI Drones | Dronebhai",
    description:
      "Buy authentic DJI camera, FPV, enterprise & agricultural drones in India. Mini 4 Pro, Air 3, Mavic 3 Pro, Avata 2, Matrice 350 RTK.",
    url: "https://dronebhai.com/dji-sale",
    siteName: "Dronebhai",
    type: "website",
    images: [
      {
        url: "/images/drone-flagship-3d.jpg",
        width: 1200,
        height: 630,
        alt: "Dronebhai DJI Drone Sales India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJI Drone Product Range | Dronebhai India",
    description:
      "Explore authentic DJI drones with official warranty, GST billing, and pan-India express dispatch.",
    images: ["/images/drone-flagship-3d.jpg"],
  },
};

const djiSaleStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dronebhai.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "DJI Sale",
          item: "https://dronebhai.com/dji-sale",
        },
      ],
    },
    {
      "@type": "ElectronicsStore",
      "@id": "https://dronebhai.com/dji-sale#store",
      name: "Dronebhai - DJI Drone Sales",
      url: "https://dronebhai.com/dji-sale",
      description: "Authorized DJI Drone Sales in India with official warranty and GST input billing.",
      telephone: "+91-8002800380",
    },
    {
      "@type": "ItemList",
      name: "DJI Drones for Sale — Dronebhai India",
      description: "Authentic DJI camera, FPV, enterprise and agricultural drones.",
      numberOfItems: djiSaleProducts.length,
      itemListElement: djiSaleProducts.map((p, idx) => ({
        "@type": "Product",
        position: idx + 1,
        name: p.name,
        description: p.description || p.tagline,
        image: p.imageUrl,
        brand: {
          "@type": "Brand",
          name: "DJI",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: p.startingPrice.replace(/[^0-9]/g, "") || "34999",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": "https://dronebhai.com/#organization",
          },
        },
      })),
    },
  ],
};

export default function DjiSalePage() {
  return (
    <main className="min-h-screen bg-background text-on-background py-6 sm:py-8 md:py-12">
      <JsonLd data={djiSaleStructuredData} />

      <div className="max-w-7xl mx-auto px-gutter mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "DJI Sale" },
          ]}
        />
      </div>

      {/* ── Header ── */}
      <section className="max-w-7xl mx-auto px-gutter text-center mb-6 sm:mb-8">
        <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-1 font-bold">
          ROBUZTA DRONE PRODUCT RANGE
        </span>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl text-slate-900 font-bold tracking-tight mb-2">
          DJI Drone Product Range
        </h1>
        <p className="font-body text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Website-ready drone product catalog matching official configurations, with unique descriptions and search-focused specifications.
        </p>
      </section>

      {/* ── Interactive Catalog ── */}
      <DjiSaleClient />
    </main>
  );
}
