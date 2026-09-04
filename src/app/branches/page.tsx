import type { Metadata } from "next";
import Link from "next/link";
import { branchesData } from "@/lib/data/branches";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Branches & Drone Labs in Ahmedabad | Dronebhai Locations",
  description:
    "Visit Dronebhai's authorized drone service labs in South Bopal and Tragad, Ahmedabad. Serving pilots across Bopal, Shela, Chandkheda, Motera, Gandhinagar, and SG Highway.",
  alternates: {
    canonical: "/branches",
  },
  openGraph: {
    title: "Dronebhai Labs & Service Locations in Ahmedabad",
    description:
      "South Bopal Flagship Service Lab & Tragad Service Centre. Walk-in DJI services, custom consultations, open Mon–Sat 11AM–7PM.",
    url: "https://dronebhai.com/branches",
    siteName: "Dronebhai",
    images: [
      {
        url: "/images/about-lab.jpg",
        width: 1200,
        height: 630,
        alt: "Dronebhai Ahmedabad Drone Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dronebhai Labs & Service Locations in Ahmedabad",
    description: "Visit our two state-of-the-art drone labs in Ahmedabad for DJI services & custom UAV builds.",
    images: ["/images/about-lab.jpg"],
  },
};

const branchesStructuredData = {
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
          name: "Branches",
          item: "https://dronebhai.com/branches",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://dronebhai.com/branches/#webpage",
      url: "https://dronebhai.com/branches",
      name: "Dronebhai Branches & Service Centers",
      mainEntity: branchesData.map((b) => ({
        "@type": "ElectronicsStore",
        name: `Dronebhai - ${b.name}`,
        telephone: b.phone,
        url: `https://dronebhai.com/branches/${b.slug}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: b.address.street,
          addressLocality: b.address.area,
          addressRegion: b.address.state,
          postalCode: b.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: b.geo.latitude,
          longitude: b.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "11:00",
            closes: "19:00",
          },
        ],
        areaServed: b.nearbyLocations.map((l) => `${l.name}, Ahmedabad`),
      })),
    },
  ],
};

export default function BranchesPage() {
  return (
    <main className="bg-background text-on-background bg-grid-pattern relative selection:bg-primary selection:text-on-primary">
      <JsonLd data={branchesStructuredData} />

      <div className="max-w-7xl mx-auto px-gutter pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Branches & Labs" },
          ]}
          showSchema={false}
        />
      </div>

      {/* ── Page Header ───────────────────────────────────── */}
      <section className="pt-6 md:pt-10 pb-10 md:pb-12 px-gutter max-w-7xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-0.5 w-8 bg-primary" />
          <span className="font-eyebrow text-xs text-primary tracking-widest uppercase font-bold">
            LOCAL PRESENCE
          </span>
          <div className="h-0.5 w-8 bg-primary" />
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Visit Our Ahmedabad Drone Labs
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8">
          Two dedicated laboratories across Ahmedabad offering walk-in diagnostics, authentic DJI spare parts, new drone unboxing, and aerospace consultations.
        </p>

        {/* Global Support Number Callout */}
        <div className="inline-flex items-center justify-center gap-4 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 shadow-xs">
          <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">support_agent</span>
          </div>
          <div className="text-left">
            <p className="text-xs text-slate-500 font-medium">
              Central Support &amp; Lab Hotline
            </p>
            <a
              href="tel:8002800380"
              className="font-headline text-xl font-bold text-primary block hover:underline"
            >
              8002 8003 80
            </a>
          </div>
        </div>
      </section>

      {/* ── Branch Bento Grid ─────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-gutter max-w-7xl mx-auto pb-16">
        {branchesData.map((branch) => (
          <article
            key={branch.id}
            className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative group"
          >
            {/* Content Header */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {branch.badge}
                </span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Open Mon–Sat
                </span>
              </div>

              <h2 className="font-headline text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                <Link href={`/branches/${branch.slug}`}>
                  {branch.name}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {branch.tagline}
              </p>

              {/* Address & Hours */}
              <div className="bg-surface-container-low/50 rounded-2xl p-4 border border-outline-variant/20 space-y-2.5 mb-6 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                    location_on
                  </span>
                  <address className="not-italic leading-relaxed">
                    {branch.address.fullFormatted}
                  </address>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base shrink-0">
                    schedule
                  </span>
                  <span>{branch.hours}</span>
                </div>
              </div>

              {/* Nearby Catchment Locations Chips */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Nearby Areas Served:
                  </span>
                  <Link
                    href={`/branches/${branch.slug}`}
                    className="text-[11px] text-primary font-bold hover:underline"
                  >
                    View All {branch.nearbyLocations.length} Locations &rarr;
                  </Link>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {branch.nearbyLocations.slice(0, 6).map((loc, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-white px-2.5 py-1 rounded-lg border border-outline-variant/30 text-slate-700 font-medium flex items-center gap-1"
                    >
                      <span>{loc.name}</span>
                      <span className="text-[9px] text-primary font-mono font-bold">({loc.travelTime})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <Link
                  href={`/branches/${branch.slug}`}
                  className="bg-primary text-white font-button text-xs uppercase py-3 px-4 rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-xs text-center"
                >
                  <span>Branch Page</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <a
                  href={`https://wa.me/918002800380?text=${encodeURIComponent(`Hi Dronebhai, I want to visit ${branch.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container text-primary font-button text-xs uppercase py-3 px-4 rounded-xl font-bold hover:bg-surface-container-high transition-all flex items-center justify-center gap-1.5 border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-700 font-button text-xs uppercase py-3 px-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-1.5 border border-outline-variant/40"
                >
                  <span className="material-symbols-outlined text-sm text-primary">directions</span>
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Map Preview Image */}
            <div className="h-44 bg-surface-container border-t border-outline-variant/30 relative overflow-hidden">
              <img
                src={branch.mapImageUrl}
                alt={branch.mapImageAlt}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <Link
                href={`/branches/${branch.slug}`}
                className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent"
              >
                <span className="bg-white text-slate-900 rounded-full px-3.5 py-1.5 text-xs font-bold flex items-center gap-1 shadow-md">
                  <span>Explore {branch.address.area} Hub</span>
                  <span className="material-symbols-outlined text-sm text-primary">open_in_new</span>
                </span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* ── DJI Service CTA ───────────────────────────────── */}
      <section className="px-gutter max-w-7xl mx-auto pb-16">
        <div className="bg-surface-container-low border border-primary/20 rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <span className="material-symbols-outlined text-primary text-3xl block mb-3">
            build
          </span>
          <h3 className="font-headline text-2xl font-bold text-slate-900 mb-2">
            Need Walk-In DJI Service?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-lg mx-auto leading-relaxed">
            Walk in to either lab during opening hours (Mon–Sat, 11AM–7PM) for immediate triage, gimbal sensor calibration, or original DJI spare parts.
          </p>
          <Link
            href="/dji-service"
            className="inline-flex items-center gap-2 bg-primary text-white font-button text-xs uppercase py-3 px-6 rounded-xl font-bold hover:brightness-110 transition-all shadow-xs"
          >
            <span>Book DJI Service</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
