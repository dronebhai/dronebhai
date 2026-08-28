import Link from "next/link";
import type { Metadata } from "next";
import { productCategories } from "@/lib/data/categories";

export const metadata: Metadata = {
  title: "Products | Dronebhai — Explore 16 Drone Categories",
  description:
    "Browse Dronebhai's full lineup of 16 drone categories — from kids and hobby drones to professional cinematic platforms, agricultural systems, and custom-built enterprise solutions.",
};

export default function ProductsPage() {
  return (
    <main className="bg-background text-on-background">
      {/* ── Page Header ───────────────────────────────────── */}
      <section className="pt-10 md:pt-20 pb-10 md:pb-16 px-gutter max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative z-10">
          <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary inline-block" />
            Complete Inventory
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-4">
            All Products.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Sixteen categories of precision aerial equipment — from recreational
            to enterprise-grade.
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
                  alt={cat.heroImageAlt}
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
