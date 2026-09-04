import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { productCategories } from "@/lib/data/categories";
import { djiSaleProducts } from "@/lib/data/dji-sales";
import { djiModels, serviceTypes } from "@/lib/data/dji-service";
import { branchesData } from "@/lib/data/branches";

export const metadata: Metadata = {
  title: "HTML Sitemap & Complete Directory | Dronebhai India",
  description:
    "Explore the complete website sitemap for Dronebhai — Authorized DJI drone service centre, enterprise drone sales, branch labs in Ahmedabad, and drone engineering solutions.",
  alternates: {
    canonical: "/sitemap",
  },
  openGraph: {
    title: "Sitemap | Dronebhai Drone Engineering & Services",
    description: "Full directory and sitemap of all pages, DJI drone service matrices, sales catalog, and branch lab locations.",
    url: "https://dronebhai.com/sitemap",
  },
};

export default function SitemapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Dronebhai Website Sitemap & Directory",
    description: "Complete navigation index for all pages, services, drone sales, and branch facilities.",
    url: "https://dronebhai.com/sitemap",
    publisher: {
      "@type": "Organization",
      name: "Dronebhai",
      url: "https://dronebhai.com",
    },
  };

  // Group DJI models by series
  const seriesList = ["Mini", "Mavic", "Air", "FPV", "Phantom", "Inspire"];
  const modelsBySeries = seriesList.map((series) => ({
    series,
    models: djiModels.filter((m) => m.series.toLowerCase() === series.toLowerCase()),
  })).filter((group) => group.models.length > 0);

  return (
    <main className="min-h-screen bg-surface pt-24 pb-20">
      <JsonLd data={jsonLd} />

      {/* Header */}
      <section className="px-gutter max-w-7xl mx-auto mb-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "HTML Sitemap" },
          ]}
          className="mb-4"
        />

        <div className="border-b border-outline-variant/40 pb-8">
          <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-2 font-bold">
            Website Index &amp; Navigation
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            HTML Sitemap &amp; Directory
          </h1>
          <p className="font-body text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Welcome to the complete sitemap directory for Dronebhai. Find direct links to all drone sales, authorized DJI diagnostic and service matrices, branch facilities across Ahmedabad, and specialized UAV components.
          </p>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="px-gutter max-w-7xl mx-auto space-y-12">
        {/* 1. Core Primary Pages */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/40 shadow-xs">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl material-symbols-outlined">
              explore
            </span>
            Core Website Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/"
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col group"
            >
              <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                Home
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Authorized DJI Drone Lab &amp; Sales
              </span>
            </Link>
            <Link
              href="/dji-service"
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col group"
            >
              <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                DJI Services
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Cleanroom diagnostics &amp; calibration
              </span>
            </Link>
            <Link
              href="/dji-sale"
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col group"
            >
              <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                DJI Sale
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Authorized DJI Enterprise &amp; Consumer Drones
              </span>
            </Link>
            <Link
              href="/about"
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col group"
            >
              <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                About Us
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Our legacy, engineers &amp; cleanrooms
              </span>
            </Link>
            <Link
              href="/products"
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col group"
            >
              <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                Products &amp; Parts Catalog
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Explore UAV parts &amp; sub-systems
              </span>
            </Link>
            <Link
              href="/branches"
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col group"
            >
              <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                Branches &amp; Labs
              </span>
              <span className="text-xs text-slate-500 mt-1">
                South Bopal &amp; Tragad Hubs
              </span>
            </Link>
            <Link
              href="/#contact"
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col group"
            >
              <span className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors">
                Contact Us
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Direct phone, WhatsApp &amp; inquiries
              </span>
            </Link>
          </div>
        </div>

        {/* 2. Drone Hubs & Branch Locations */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/40 shadow-xs">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-teal-600/10 text-teal-700 flex items-center justify-center text-xl material-symbols-outlined">
              location_on
            </span>
            Branch Facilities &amp; Service Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branchesData.map((branch) => (
              <div
                key={branch.slug}
                className="p-6 rounded-2xl bg-surface-container-low/40 border border-outline-variant/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="font-headline text-base font-bold text-slate-900">
                      {branch.name}
                    </h3>
                    <span className="text-[10px] uppercase font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full whitespace-nowrap">
                      {branch.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-4">{branch.address.fullFormatted}</p>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-2">
                      Catchment Areas Served:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {branch.nearbyLocations.map((loc, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white px-2.5 py-1 rounded-md border border-outline-variant/30 text-slate-700 font-medium"
                        >
                          {loc.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 mt-2">
                  <Link
                    href={`/branches/${branch.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    View Branch Details &amp; Directions
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DJI Drone Sales Catalog */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/40 shadow-xs">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center text-xl material-symbols-outlined">
              shopping_bag
            </span>
            DJI Drones on Sale
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {djiSaleProducts.map((drone) => (
              <Link
                key={drone.id}
                href="/dji-sale"
                className="p-4 rounded-xl border border-outline-variant/30 hover:border-blue-500/50 hover:bg-blue-50/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                    {drone.series} Series
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                    {drone.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {drone.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-outline-variant/20 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Starting from</span>
                  <span className="font-bold text-slate-900">{drone.startingPrice}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. Product & Component Categories */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/40 shadow-xs">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-xl material-symbols-outlined">
              category
            </span>
            Drone Components &amp; Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="p-4 rounded-xl border border-outline-variant/30 hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-all flex flex-col group"
              >
                <span className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {cat.shortLabel}
                </span>
                <span className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {cat.eyebrow}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 5. DJI Diagnostic & Service Matrices (Grouped & High-Contrast) */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/40 shadow-xs">
          <div className="mb-8">
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-orange-600/10 text-orange-700 flex items-center justify-center text-xl material-symbols-outlined">
                build
              </span>
              DJI Diagnostic &amp; Service Matrices
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Authorized cleanroom calibration, gimbal servicing, motor replacement, and optical sensor tuning across all supported DJI drone models:
            </p>
          </div>

          <div className="space-y-10">
            {modelsBySeries.map(({ series, models }) => (
              <div key={series} className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-outline-variant/30">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {series} Series
                  </span>
                  <span className="text-xs text-slate-500">
                    {models.length} {models.length === 1 ? "Model" : "Models"}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {models.map((model) => (
                    <div
                      key={model.slug}
                      className="bg-slate-50/80 p-5 rounded-xl border border-slate-200/80 hover:border-primary/40 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                          <h3 className="font-headline text-sm font-bold text-slate-900">
                            {model.label}
                          </h3>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-500 uppercase">
                          {model.series}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {serviceTypes.map((st) => (
                          <Link
                            key={st.slug}
                            href={`/dji-service/${model.slug}/${st.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-white hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg border border-slate-300 hover:border-primary shadow-xs transition-all"
                          >
                            <span className="material-symbols-outlined text-[15px] opacity-75">
                              {st.icon}
                            </span>
                            {st.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
