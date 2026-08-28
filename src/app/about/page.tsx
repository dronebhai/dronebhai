import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dronebhai — Your Drone Partners in Precision",
  description:
    "Learn about Dronebhai — our story, mission, and our two state-of-the-art labs in Ahmedabad. Authorized DJI service centre and custom drone manufacturer.",
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
    title: "Certified Excellence",
    description:
      "Every repair is backed by DJI-certified training and genuine OEM parts.",
  },
  {
    icon: "science",
    title: "Technical Precision",
    description:
      "Our dust-free labs mirror aerospace-grade maintenance environments.",
  },
  {
    icon: "handshake",
    title: "Partner-First Approach",
    description:
      "We believe in long-term relationships built on trust, transparency, and results.",
  },
  {
    icon: "lightbulb",
    title: "Constant Innovation",
    description:
      "From custom manufacturing to emerging drone tech — we stay at the frontier.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-on-background">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative pt-16 md:pt-24 pb-section-gap-mobile md:pb-section-gap-desktop px-gutter max-w-7xl mx-auto overflow-hidden">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

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
              Operating under Robuzta Techlabs, we cover the full aerial
              ecosystem — premium drone sales across 16 categories, custom
              manufacturing for enterprise and defence clients, and an
              authorised DJI certification center for repairs, diagnostics, and
              maintenance.
            </p>
            <Link
              href="/branches"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-button text-button py-3 px-6 rounded uppercase hover:brightness-110 transition-all shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
            >
              Visit Our Labs
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Right — Hero Image */}
          <div className="rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp0tGvLBl-LZPi6O_LvSi_EfBJk7X-1HcFvSx5Ywi5yaTCqZkBpLSoeMuHCJqsqBFI8PJKvgEbwbXGi4yivtPXbFBJXS_vVzCnRLBfLvTzFq7uNM5xWwJrVJB8FWUiXJ58IXxPi_VpgGQT23e0i3RHN4R7nDGXsNi1MjGzLOhJgbsNVRVH8TwIOkxRaJN2xLFp5Av4hFB_cWQjjwwKqjUDpJEtRhR4fDXF9vV7oXiirVb2_GUedYrg"
              alt="Dronebhai technician performing precision repairs in a clean-room environment"
              className="w-full h-80 md:h-[480px] object-cover"
            />
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
              DJI-Certified Service &amp; Repair
            </h3>
            <p className="font-body-lg text-body-lg text-surface-container-low">
              Expert diagnostics, firmware updates, and physical repairs
              conducted by factory-trained technicians using authorized parts in
              our dust-free facility.
            </p>
          </div>

          <Link
            href="/dji-service"
            className="relative z-10 bg-primary text-on-primary font-button text-button px-6 py-3 rounded hover:brightness-110 transition-all flex items-center gap-2 whitespace-nowrap shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
          >
            Book Service
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ── Trusted Presence — Labs ───────────────────────── */}
      <section className="mb-section-gap-mobile md:mb-section-gap-desktop bg-grid-pattern border-y border-outline-variant/30 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12 px-gutter">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
            Trusted Presence in Ahmedabad
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Operating from two state-of-the-art facilities, ensuring prompt
            service and accessible expertise for all our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-gutter">
          {/* South Bopal */}
          <Link
            href="/branches"
            className="bg-surface p-6 rounded-xl border border-outline-variant flex gap-4 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface mb-1">
                South Bopal Lab
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Primary technical hub and major repairs center.
              </p>
            </div>
          </Link>

          {/* Tragad */}
          <Link
            href="/branches"
            className="bg-surface p-6 rounded-xl border border-outline-variant flex gap-4 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">
                storefront
              </span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface mb-1">
                Tragad Lab
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Retail experience center and quick service desk.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
