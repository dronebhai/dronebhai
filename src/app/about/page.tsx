import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Dronebhai — India's Premier Drone Engineering & Service Labs",
  description:
    "Learn about Dronebhai's aerospace legacy since 2016. Discover our cleanroom drone labs in Ahmedabad, custom UAV manufacturing capabilities, and DJI authorized service certifications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dronebhai — Precision Drone Labs & Engineering",
    description:
      "Ahmedabad's leading drone specialists. Authorized DJI service centre and custom industrial drone manufacturers.",
    url: "https://dronebhai.com/about",
    siteName: "Dronebhai",
    images: [
      {
        url: "/images/about-lab.jpg",
        width: 1200,
        height: 630,
        alt: "Dronebhai Drone Engineering Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dronebhai — Precision Drone Labs",
    description: "Learn about Dronebhai's certified DJI service labs and custom UAV manufacturing.",
    images: ["/images/about-lab.jpg"],
  },
};

const aboutStructuredData = {
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
          name: "About Us",
          item: "https://dronebhai.com/about",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://dronebhai.com/about/#webpage",
      url: "https://dronebhai.com/about",
      name: "About Dronebhai",
      description: "India's precision drone laboratory, manufacturer, and authorized DJI service hub.",
      mainEntity: {
        "@id": "https://dronebhai.com/#organization",
      },
    },
  ],
};

const stats = [
  { value: "2016", label: "Founded" },
  { value: "2", label: "Labs" },
  { value: "500+", label: "Clients" },
  { value: "DJI", label: "Authorized" },
];

const values = [
  {
    icon: "verified",
    title: "Authorized Certification",
    description:
      "All diagnostics, firmware updates, and physical services follow strict factory guidelines using genuine OEM parts.",
  },
  {
    icon: "clean_hands",
    title: "Cleanroom Facility",
    description:
      "Our dust-free cleanroom benches ensure zero particulate contamination during sensor, camera, and gimbal services.",
  },
  {
    icon: "psychology",
    title: "Aerospace Precision",
    description:
      "From custom carbon fiber airframes to calibrated flight controllers, every drone is built to exact tolerances.",
  },
  {
    icon: "support_agent",
    title: "Dedicated Aftercare",
    description:
      "We provide post-service calibration reports, flight logs, and continuous technical support for every client.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-on-background">
      <JsonLd data={aboutStructuredData} />
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative pt-16 md:pt-24 pb-section-gap-mobile md:pb-section-gap-desktop px-gutter max-w-7xl mx-auto overflow-hidden">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

        <div className="relative z-10 mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]}
            showSchema={false}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest block mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              OUR STORY
            </span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-6">
              India&apos;s Precision Drone Lab.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Founded in 2016 in Ahmedabad, Dronebhai has grown from a small
              hobby workshop into India&apos;s most trusted drone service and retail
              hub. We believe every pilot deserves access to expert care,
              genuine parts, and honest advice.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Operating under Sanuma India Pvt. Ltd., we cover the full aerial
              ecosystem — premium drone sales across 16 categories, custom
              manufacturing for enterprise and defence clients, and an
              authorised DJI certification center for services, diagnostics, and
              maintenance.
            </p>
            <Link
              href="/branches"
              className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-button text-xs uppercase py-3.5 px-6 rounded-xl font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
            >
              <span>Visit Our Labs</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Right — Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface-container shadow-lg relative group">
            <img
              src="/images/about-lab.jpg"
              alt="Dronebhai aerospace engineer performing precision drone services in our Ahmedabad cleanroom facility"
              className="w-full h-80 md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-3 rounded-xl border border-outline-variant/30 text-xs text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">verified</span>
              <span>Ahmedabad Drone R&amp;D &amp; Precision Cleanroom Lab</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────── */}
      <section className="bg-surface border-y border-outline-variant/30 py-10">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-headline-md text-headline-md text-primary font-bold mb-1">
                {stat.value}
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values / What We Stand For ────────────────────── */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-gutter max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-2">
            What We Stand For
          </span>
          <h2 className="font-headline-md text-headline-md text-on-background">
            Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-3xl block mb-4">
                {v.icon}
              </span>
              <h3 className="font-label-md text-label-md text-on-background mb-2">
                {v.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DJI Service CTA — Dark Banner ─────────────────── */}
      <section className="px-gutter max-w-7xl mx-auto mb-section-gap-mobile md:mb-section-gap-desktop">
        <div className="bg-inverse-surface p-8 rounded-xl border border-outline-variant/50 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
          {/* Decorative icon */}
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[200px]">
              build
            </span>
          </div>

          <div className="relative z-10 md:w-2/3 mb-6 md:mb-0">
            <p className="font-eyebrow text-eyebrow text-primary-fixed uppercase tracking-widest mb-2">
              Authorized Center
            </p>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-primary mb-4">
              DJI-Certified Diagnostics &amp; Service
            </h3>
            <p className="font-body-lg text-body-lg text-surface-container-low">
              Expert diagnostics, firmware updates, and physical services
              conducted by factory-trained technicians using authorized parts in
              our dust-free facility.
            </p>
          </div>

          <Link
            href="/dji-service"
            className="relative z-10 w-full md:w-auto min-h-[46px] bg-primary text-on-primary font-button text-xs uppercase px-6 py-3.5 rounded-xl font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
          >
            <span>Book Service</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
