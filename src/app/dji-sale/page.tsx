import type { Metadata } from "next";
import DjiSaleClient from "@/components/DjiSaleClient";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "DJI Drone Sales India | Buy Authentic DJI Drones | Dronebhai",
  description:
    "Buy authentic DJI drones in India with official warranty and GST billing. Explore DJI Mini 4 Pro, Air 3, Mavic 3 Pro, Avata 2, and Enterprise fleet.",
  alternates: {
    canonical: "/dji-sale",
  },
};

const djiSaleStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ElectronicsStore",
      "@id": "https://dronebhai.com/dji-sale#store",
      name: "Dronebhai - DJI Drone Sales",
      url: "https://dronebhai.com/dji-sale",
      description: "Authorized DJI Drone Sales in India with official warranty and GST input billing.",
      telephone: "+91-8002800380",
    },
  ],
};

export default function DjiSalePage() {
  return (
    <main className="min-h-screen bg-background text-on-background py-8 md:py-12">
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
      <section className="max-w-7xl mx-auto px-gutter text-center mb-6">
        <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-1 font-bold">
          DJI Fleet
        </span>
        <h1 className="font-headline text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight mb-2">
          DJI Drones for Sale
        </h1>
        <p className="font-body text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Brand new, factory-sealed DJI aircraft with official manufacturer warranty and pan-India delivery.
        </p>
      </section>

      {/* ── Minimal Interactive Catalog ── */}
      <DjiSaleClient />
    </main>
  );
}
