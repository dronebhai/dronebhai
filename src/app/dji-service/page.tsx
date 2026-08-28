import Link from "next/link";
import type { Metadata } from "next";
import { djiModels, repairTypes } from "@/lib/data/dji-service";

export const metadata: Metadata = {
  title: "DJI Service Hub | Dronebhai — Authorized DJI Repair Centre",
  description:
    "Expert diagnostics and repairs for all DJI models in Ahmedabad. Factory-trained technicians, genuine OEM parts. Book your DJI drone service today.",
};

const serviceOfferings = [
  {
    icon: "settings_suggest",
    title: "DJI Drone Servicing",
    subtitle: "Periodic checkups and firmware updates.",
    items: ["Comprehensive health check", "Latest firmware installation"],
  },
  {
    icon: "build",
    title: "DJI Drone Repair",
    subtitle: "Component replacement and crash recovery.",
    items: ["Genuine OEM parts", "Gimbal & structural repair"],
  },
  {
    icon: "troubleshoot",
    title: "DJI Drone Diagnostics",
    subtitle: "Error log analysis and hardware testing.",
    items: ["Flight data analysis", "Sensor calibration check"],
  },
  {
    icon: "cleaning_services",
    title: "DJI Drone Maintenance",
    subtitle: "Cleaning and motor calibration.",
    items: ["Deep internal cleaning", "Propulsion system tuning"],
  },
];

export default function DjiServicePage() {
  return (
    <main className="bg-background text-on-background">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-12 md:pt-20 pb-section-gap-mobile md:pb-section-gap-desktop px-gutter max-w-7xl mx-auto text-center relative">
        {/* technical-grid top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        <div className="inline-flex items-center gap-2 px-4 py-1 bg-surface-container rounded-full mb-6 border border-outline-variant/50">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: 16 }}
          >
            verified
          </span>
          <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest">
            Authorized Center
          </span>
        </div>

        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-6 max-w-3xl mx-auto">
          DJI-Certified Service &amp; Repair Center.
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Expert diagnostics and repairs for all DJI models in Ahmedabad.
          Factory-trained technicians ensuring your drone returns to flight-ready
          status with precision and care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/918002800380"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary font-button text-button px-8 py-4 rounded-lg uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
          >
            Book Service Now
          </a>
          <a
            href="#model-selector"
            className="border-2 border-primary text-primary font-button text-button px-8 py-4 rounded-lg uppercase tracking-wider hover:bg-surface-container-low active:scale-95 transition-all"
          >
            View Repair Types
          </a>
        </div>
      </section>

      {/* Divider with icon */}
      <div className="w-full h-px bg-outline-variant/30 relative max-w-7xl mx-auto px-gutter">
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-4 text-outline">
          <span className="material-symbols-outlined">add</span>
        </div>
      </div>

      {/* ── Core Offerings Grid ───────────────────────────── */}
      <section
        id="offerings"
        className="py-section-gap-mobile md:py-section-gap-desktop px-gutter max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-8 bg-primary" />
          <div>
            <h2 className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest">
              Service Catalog
            </h2>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Core Offerings
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOfferings.map((service) => (
            <div
              key={service.title}
              className="bg-[#F5F7F8] border border-[#E0E0E0] rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-4 right-4 text-outline-variant group-hover:text-primary transition-colors">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 32 }}
                >
                  {service.icon}
                </span>
              </div>
              <div className="mb-12">
                <h4 className="font-label-md text-label-md text-on-surface mb-2 mt-4 text-lg">
                  {service.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  {service.subtitle}
                </p>
              </div>
              <ul className="space-y-3 font-body-md text-body-md text-sm text-on-surface">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: 18 }}
                    >
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Policy Note */}
        <div className="mt-8 bg-surface-container-low border border-primary/20 rounded-lg p-4 flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="font-label-md text-label-md text-on-surface font-semibold">
            Policy Note: We service any DJI drone, regardless of where it was
            purchased.
          </p>
        </div>
      </section>

      {/* ── Model × Repair Type Selector ──────────────────── */}
      <section
        id="model-selector"
        className="bg-surface-container-low border-y border-outline-variant/30 py-section-gap-mobile md:py-section-gap-desktop"
      >
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-14">
            <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-2 tracking-widest">
              Book a Repair
            </span>
            <h2 className="font-headline-md text-headline-md text-on-background mb-4">
              Select Your DJI Model
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
              Browse our full repair catalogue by model. Each page shows
              symptoms, process steps, pricing, and FAQs.
            </p>
          </div>

          {/* Repair Types */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {repairTypes.map((rt) => (
              <div
                key={rt.slug}
                className="flex items-center gap-2 bg-surface border border-outline-variant/50 rounded-full px-4 py-2 font-label-md text-label-md text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-primary text-sm">
                  {rt.icon}
                </span>
                {rt.label}
              </div>
            ))}
          </div>

          {/* Models grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {djiModels.map((model) => (
              <div
                key={model.slug}
                className="bg-surface rounded-xl border border-outline-variant/30 p-5 hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-eyebrow text-eyebrow text-primary uppercase text-[10px]">
                    {model.series} Series
                  </span>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-sm">
                    flight_takeoff
                  </span>
                </div>
                <h3 className="font-label-md text-label-md text-on-background mb-4 text-sm">
                  {model.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {repairTypes.slice(0, 4).map((rt) => (
                    <Link
                      key={rt.slug}
                      href={`/dji-service/${model.slug}/${rt.slug}`}
                      className="text-[11px] font-label-md text-primary border border-primary/30 rounded px-2 py-0.5 hover:bg-primary hover:text-on-primary hover:border-primary transition-colors"
                    >
                      {rt.label.split(" ").slice(0, 2).join(" ")}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-gutter max-w-7xl mx-auto text-center">
        <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-4">
          Why Dronebhai
        </span>
        <h2 className="font-headline-md text-headline-md text-on-background mb-12">
          Authorized Precision
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { icon: "verified",  title: "DJI-Certified Parts", desc: "Only original components used." },
            { icon: "air",       title: "Dust-Free Lab",        desc: "Sensor cleaning environment." },
            { icon: "tune",      title: "Expert Calibration",   desc: "Software alignment post-repair." },
            { icon: "support_agent", title: "WhatsApp Support", desc: "Track your repair 24/7." },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center max-w-[180px]"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-4">
                {item.icon}
              </span>
              <h4 className="font-label-md text-label-md text-on-background mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
