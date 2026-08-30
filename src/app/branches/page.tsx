import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Branches & Drone Labs in Ahmedabad | Dronebhai Contact",
  description:
    "Visit Dronebhai's authorized drone repair labs in South Bopal and Tragad, Ahmedabad. Direct walk-in diagnostics, custom build consultations, and DJI drone servicing.",
  alternates: {
    canonical: "/branches",
  },
  openGraph: {
    title: "Dronebhai Labs & Service Locations in Ahmedabad",
    description:
      "South Bopal Flagship Repair Lab & Tragad Service Centre. Walk-in DJI repairs, custom consultations, open Mon–Sat 11AM–7PM.",
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
    description: "Visit our two state-of-the-art drone labs in Ahmedabad for DJI repairs & custom UAV builds.",
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
          name: "Branches & Contact",
          item: "https://dronebhai.com/branches",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://dronebhai.com/branches/#webpage",
      url: "https://dronebhai.com/branches",
      name: "Dronebhai Branches & Service Centers",
      mainEntity: [
        {
          "@type": "LocalBusiness",
          name: "Dronebhai - South Bopal Flagship Drone Lab",
          telephone: "+91-8002800380",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Aerial Hub Building, SOBO Center Road, South Bopal",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380058",
            addressCountry: "IN",
          },
        },
        {
          "@type": "LocalBusiness",
          name: "Dronebhai - Tragad Service Centre",
          telephone: "+91-8002800380",
          address: {
            "@type": "PostalAddress",
            streetAddress: "45 Tech Park Phase 2, Tragad Road, Tragad",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "382481",
            addressCountry: "IN",
          },
        },
      ],
    },
  ],
};

const branches = [
  {
    id: "south-bopal",
    name: "South Bopal Flagship Repair Lab",
    address: "123 Aerial Hub Building, SOBO Center Road,\nSouth Bopal, Ahmedabad, Gujarat 380058",
    hours: "Mon–Sat: 11:00 AM – 7:00 PM",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOK9fnPnQcN7Nrh9q-iRD6hA7iDdUaLBY3Zk9LWuU1NAt8wtPRp252L2tEgh5oSk1E0qSHFaJbme82jHDjPdJKiguKi5nAHE2LCwxPT6vc_ph9JTl9lhzGJuMMvfv5BAEpalT8X3uGyvnzgeYdPMsHSVN1PlEm-xr5XQBIQ5Z6nVjQa0D-WPzT2ondEsR0cQ3HW3Q5R5eClnfWZ-8OoDOyJsqY0da6_BAYYla2vHWJM0k23zJuZqSfQ",
    mapImageAlt:
      "Map showing Dronebhai South Bopal Flagship Repair Lab location in Ahmedabad with a teal crosshair marker.",
    mapsUrl:
      "https://maps.google.com/?q=South+Bopal+Ahmedabad",
  },
  {
    id: "tragad",
    name: "Tragad Service Centre",
    address: "45 Tech Park Phase 2, Tragad Road,\nTragad, Ahmedabad, Gujarat 382481",
    hours: "Mon–Sat: 11:00 AM – 7:00 PM",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-y50Fk6-ZbJ_ko8YE0lYvbEtFdFU6Zrb7jF396t1jy01vdxb6-CM6Hcrky74NmJlpMeoOuCPJ_xnKbN5KAqw8FJ0ZM3Kvd89_0Q60G9VgGFaODVcIec8qewP1oh7erll5G6btmy0HD0AvjmjcahQ-XNi2WMxk1FU5b3YtG-TMY8yYguIUx7ATR5pdo_H9L7KYgTaHJVd_NmES2mL623Ph2lnUiLJNyuqAemTKuXUcOYSlvUzlHuHDTw",
    mapImageAlt:
      "Map showing Dronebhai Tragad Service Centre location in Ahmedabad with a teal crosshair marker.",
    mapsUrl:
      "https://maps.google.com/?q=Tragad+Ahmedabad",
  },
];

export default function BranchesPage() {
  return (
    <main className="bg-background text-on-background bg-grid-pattern relative selection:bg-primary selection:text-on-primary">
      <JsonLd data={branchesStructuredData} />
      {/* ── Page Header ───────────────────────────────────── */}
      <section className="pt-10 md:pt-20 pb-12 md:pb-16 px-gutter max-w-7xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-0.5 w-8 bg-primary" />
          <span className="font-eyebrow text-eyebrow text-primary tracking-widest uppercase">
            GET IN TOUCH
          </span>
          <div className="h-0.5 w-8 bg-primary" />
        </div>

        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface font-bold mb-8">
          Visit Our Ahmedabad Labs
        </h1>

        {/* Global Support Number Callout */}
        <div className="inline-flex items-center justify-center gap-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <span className="material-symbols-outlined text-4xl text-primary">
            support_agent
          </span>
          <div className="text-left">
            <p className="font-label-md text-label-md text-on-surface-variant">
              Central Support Hotline
            </p>
            <a
              href="tel:8002800380"
              className="font-headline-md text-headline-md text-primary font-bold block hover:underline"
            >
              8002 8003 80
            </a>
          </div>
        </div>
      </section>

      {/* ── Branch Bento Grid ─────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-gutter max-w-7xl mx-auto pb-section-gap-mobile md:pb-section-gap-desktop">
        {branches.map((branch) => (
          <article
            key={branch.id}
            className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden flex flex-col relative group"
          >
            {/* Decorative location icon */}
            <div className="absolute top-4 right-4 text-outline-variant/30">
              <span className="material-symbols-outlined text-6xl">
                my_location
              </span>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-1 z-10">
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold mb-2">
                {branch.name}
              </h2>

              {/* Address */}
              <div className="flex items-start gap-2 mb-4 text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-primary mt-1 text-lg">
                  location_on
                </span>
                <p className="whitespace-pre-line">{branch.address}</p>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2 mb-8 text-on-surface-variant font-body-md text-body-md">
                <span className="material-symbols-outlined text-primary text-lg">
                  schedule
                </span>
                <p>{branch.hours}</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8002800380"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary font-button text-button py-3 px-6 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <span className="material-symbols-outlined">call</span>
                  Call Lab
                </a>
                <a
                  href="https://wa.me/918002800380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary font-button text-button py-3 px-6 rounded-lg hover:brightness-110 shadow-sm transition-all active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">chat</span>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map Image */}
            <div className="h-48 bg-surface-container border-t border-outline-variant/50 relative overflow-hidden">
              <img
                src={branch.mapImageUrl}
                alt={branch.mapImageAlt}
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="bg-primary text-on-primary rounded-full px-3 py-1 font-label-md text-label-md flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                  Open in Maps
                </span>
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* ── DJI Service CTA ───────────────────────────────── */}
      <section className="px-gutter max-w-7xl mx-auto pb-section-gap-mobile md:pb-section-gap-desktop">
        <div className="bg-surface-container-low border border-primary/20 rounded-xl p-8 text-center">
          <span className="material-symbols-outlined text-primary text-3xl block mb-4">
            build
          </span>
          <h3 className="font-headline-md text-headline-md text-on-background mb-3">
            Need DJI Service?
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-lg mx-auto">
            We service any DJI drone regardless of where it was purchased.
            Walk-ins welcome at both labs during opening hours.
          </p>
          <Link
            href="/dji-service"
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-button text-button uppercase py-3 px-6 rounded-lg hover:brightness-110 transition-all shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
          >
            Book a Repair
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
