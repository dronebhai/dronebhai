import Link from "next/link";
import type { Metadata } from "next";
import { productCategories } from "@/lib/data/categories";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "All Drone Categories & UAV Catalog | Dronebhai India",
  description:
    "Explore Dronebhai's full catalog of 16 precision drone categories — including 4K camera drones, agricultural sprayers, FPV racing drones, survey LiDAR systems, and custom builds.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "All Drone Categories & UAV Catalog | Dronebhai India",
    description:
      "Explore Dronebhai's full catalog of 16 precision drone categories — including 4K camera drones, agricultural sprayers, FPV racing drones, survey LiDAR systems, and custom builds.",
    url: "https://dronebhai.com/products",
    siteName: "Dronebhai",
    images: [
      {
        url: "/images/hero-drone-flagship.jpg",
        width: 1200,
        height: 630,
        alt: "Dronebhai Complete Products Fleet",
      },
    ],
  },
};

const productsStructuredData = {
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
          name: "Products",
          item: "https://dronebhai.com/products",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Dronebhai Drone Fleet & Categories",
      description: "Complete catalog of commercial, industrial, and hobby drones.",
      numberOfItems: productCategories.length,
      itemListElement: productCategories.map((cat, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: cat.label,
        url: `https://dronebhai.com/products/${cat.slug}`,
        description: cat.description,
        image: cat.heroImageUrl,
      })),
    },
  ],
};

export default function ProductsPage() {
  return (
    <main className="bg-background text-on-background">
      <JsonLd data={productsStructuredData} />
      
      {/* ── Page Header ───────────────────────────────────── */}
      <section className="pt-8 md:pt-16 pb-10 md:pb-16 px-gutter max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative z-10 mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products Catalog" },
            ]}
            showSchema={false}
          />
        </div>
        <div className="relative z-10">
          <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary inline-block" />
            Complete Inventory
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-4">
            All Drone Categories.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Sixteen specialized categories of precision aerial equipment — from beginner recreational systems to certified enterprise UAVs.
          </p>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────── */}
      <section className="px-gutter max-w-7xl mx-auto pb-section-gap-mobile md:pb-section-gap-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col group hover:shadow-md hover:border-primary/40 transition-all"
            >
              {/* Category Image */}
              <div className="aspect-video relative bg-surface-container-low overflow-hidden">
                <img
                  src={cat.heroImageUrl}
                  alt={cat.heroImageAlt || `${cat.label} - Dronebhai`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
                {/* Eyebrow badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded px-2 py-0.5 border border-outline-variant/30">
                  <span className="font-eyebrow text-eyebrow text-primary uppercase">
                    {cat.eyebrow}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-label-md text-label-md text-on-background mb-2">
                  {cat.label}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm flex-1 mb-4">
                  {cat.description.slice(0, 90)}…
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                  <span className="font-label-md text-label-md text-primary text-sm">
                    Explore
                  </span>
                  <span className="material-symbols-outlined text-primary text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
