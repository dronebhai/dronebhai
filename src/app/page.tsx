import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/lib/data/categories";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dronebhai | India's #1 Drone Sales, Custom Manufacturing & DJI Service Center",
  description:
    "Buy authentic DJI drones, custom industrial & FPV drones, precision agricultural UAVs, and get certified DJI drone service services across Ahmedabad, Gujarat, India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dronebhai | India's #1 Drone Sales, Custom Manufacturing & DJI Service Center",
    description:
      "Buy authentic DJI drones, custom industrial & FPV drones, precision agricultural UAVs, and get certified DJI drone service services across Ahmedabad, Gujarat, India.",
    url: "https://dronebhai.com",
    siteName: "Dronebhai",
    images: [
      {
        url: "/images/hero-drone-flagship.jpg",
        width: 1200,
        height: 630,
        alt: "Dronebhai India - Drone Sales, Manufacturing and Service",
      },
    ],
  },
};

const homeFaqs = [
  {
    q: "Do you service DJI drones purchased elsewhere?",
    a: "Yes. We diagnose and service any DJI drone regardless of where it was purchased in India or internationally.",
  },
  {
    q: "How long does a service take in Ahmedabad?",
    a: "Standard services are completed within 24–48 hours. Express diagnostics are completed in 2–4 hours at our South Bopal and Tragad labs.",
  },
  {
    q: "Can I ship my drone from outside Ahmedabad?",
    a: "Yes. We coordinate insured doorstep courier pickup and delivery across all cities and states in India.",
  },
  {
    q: "Are the replacement parts authentic OEM?",
    a: "Yes, we exclusively use 100% genuine factory OEM parts backed by a comprehensive warranty.",
  },
  {
    q: "Do you build custom drones for industrial use?",
    a: "Yes, our aerospace engineering team manufactures custom agricultural, survey, mapping, thermal inspection, and cinematic FPV airframes.",
  },
];

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dronebhai.com/#webpage",
      url: "https://dronebhai.com",
      name: "Dronebhai | India's #1 Drone Sales, Custom Manufacturing & DJI Service Center",
      description:
        "India's premier drone ecosystem: buy authentic DJI drones, custom industrial & FPV drone manufacturing, genuine spare parts, and certified DJI drone service services.",
      isPartOf: { "@id": "https://dronebhai.com/#website" },
      about: { "@id": "https://dronebhai.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dronebhai.com/#faq",
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@type": "Service",
      name: "DJI Drone Service & Maintenance Service",
      provider: { "@id": "https://dronebhai.com/#organization" },
      areaServed: "India",
      serviceType: "Drone Service",
      description:
        "Professional diagnosis, gimbal replacement, ESC micro-soldering, arm replacement, and optical sensor calibration for all DJI drone models.",
    },
    {
      "@type": "Service",
      name: "Custom Drone Design & Manufacturing",
      provider: { "@id": "https://dronebhai.com/#organization" },
      areaServed: "India",
      serviceType: "Drone Manufacturing",
      description:
        "End-to-end custom drone engineering for agricultural spraying, LiDAR mapping, thermal inspection, and high-speed cinematic FPV.",
    },
  ],
};

const HeroAnimatedDrone = dynamic(
  () => import("@/components/HeroAnimatedDrone")
);

import EngineeringReliabilityInfographic from "@/components/EngineeringReliabilityInfographic";

export default function HomePage() {
  const featuredCategories = [
    productCategories.find((c) => c.slug === "camera-drones")!,
    productCategories.find((c) => c.slug === "agricultural-drones")!,
    productCategories.find((c) => c.slug === "racing-drones")!,
    productCategories.find((c) => c.slug === "fpv-drones")!,
    productCategories.find((c) => c.slug === "survey-mapping-drones")!,
    productCategories.find((c) => c.slug === "educational-drones")!,
    productCategories.find((c) => c.slug === "kids-drones")!,
    productCategories.find((c) => c.slug === "custom-built-drones")!,
  ].filter(Boolean);

  return (
    <main className="flex-grow bg-background text-on-background">
      <JsonLd data={homeStructuredData} />
      {/* ============================================================
          1. HERO SECTION (Minimalist White Theme Showcase)
          ============================================================ */}
      <section className="relative w-full min-h-[480px] lg:min-h-[560px] flex items-center justify-center bg-white text-slate-900 py-4 lg:py-6 select-none border-b border-outline-variant/20">

        {/* ── Background Subtle Light Grid & Giant Watermark ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
          {/* Subtle Light HUD Grid */}
          <div className="absolute inset-0 hud-grid opacity-25" />

          {/* Soft Ambient Radial Spotlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[400px] bg-gradient-to-tr from-[#ff6200]/10 via-primary/8 to-transparent rounded-full blur-[100px] animate-pulse-glow" />

          {/* Giant Backdrop Watermark (Light Theme) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0">
            <span className="text-6xl sm:text-8xl md:text-[130px] lg:text-[170px] xl:text-[210px] font-black uppercase tracking-tighter text-stroke-watermark-light font-headline opacity-70 block leading-none">
              DRONEBHAI
            </span>
          </div>
        </div>

        {/* ── Main Stage Container: 2-Column Hero ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[460px] lg:min-h-[540px]">

            {/* ── Left Column: Title, Narrative & Action Triggers (5 Cols) ── */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20 order-1">

              {/* Main Stacked Headline */}
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-bold tracking-tight text-slate-900 leading-[1.05] mb-4">
                Accuracy
                <br />
                Stability
                <br />
                Efficiency
              </h1>

              {/* Tagline Narrative */}
              <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-md leading-relaxed">
                Meet the future of cinematic aerial exploration, bespoke industrial UAVs &amp; authorized DJI drone care.
              </p>

              {/* Actions Row: WhatsApp + Call */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-6 w-full max-w-xs sm:max-w-none">
                <a
                  href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20inquire%20about%20drone%20sales/service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[46px] bg-primary hover:bg-primary/90 text-white font-button text-xs uppercase px-6 py-3.5 rounded-xl sm:rounded-full flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,104,94,0.25)] hover:shadow-[0_6px_20px_rgba(0,104,94,0.35)] active:scale-[0.98] transition-all font-bold"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href="tel:8002800380"
                  className="w-full sm:w-auto min-h-[46px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-button text-xs uppercase px-5 py-3.5 rounded-xl sm:rounded-full flex items-center justify-center gap-2 border border-slate-200 active:scale-[0.98] transition-all font-semibold"
                >
                  <span className="material-symbols-outlined text-sm text-primary">phone</span>
                  <span>8002 8003 80</span>
                </a>
              </div>

              {/* Minimal Stat Highlight */}

            </div>

            {/* ── Right Column: Large 80% Stage Dynamic 3D Flight Drone (7 Cols) (Desktop/Tablet Only) ── */}
            <div className="hidden md:flex lg:col-span-7 relative items-center justify-center z-10 my-2 lg:my-0 order-2 overflow-visible">
              <HeroAnimatedDrone />
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          2. SERVICES OVERVIEW (Product Categories & Fleet)
          ============================================================ */}
      <section className="py-12 md:py-16 bg-surface-bright border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-eyebrow text-xs text-primary uppercase tracking-widest font-bold block mb-1">
                Fleet Lineup
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold">
                Drone Categories
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline"
            >
              All 16 Categories
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          {/* Grid of Featured Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col group hover:shadow-lg hover:border-primary/40 transition-all"
              >
                {/* Category Image */}
                <div className="aspect-video relative bg-surface-container-low overflow-hidden">
                  <img
                    src={cat.heroImageUrl}
                    alt={cat.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-md rounded px-2 py-0.5 border border-outline-variant/30 text-[10px] font-bold text-primary uppercase">
                    {cat.eyebrow}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-base text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-2.5 border-t border-outline-variant/20 text-xs font-bold text-primary">
                    <span>View Fleet</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Category Selector */}
          <div className="flex flex-wrap gap-2 pt-2">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="bg-surface hover:bg-primary hover:text-white text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-outline-variant/30 transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. DJI CARE (Authorized Workshop & Service Center)
          ============================================================ */}
      <section className="py-12 md:py-16 bg-surface hud-grid relative">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-sm">verified</span>
              Authorized Center
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold mb-2">
              Expert DJI Care &amp; Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Factory-grade cleanroom services in Ahmedabad with 100% genuine OEM components for any DJI drone.
            </p>
          </div>

          {/* Bento Grid of Core DJI Service Offerings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary text-2xl mb-3 block">build</span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Health Servicing</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Multipoint diagnostics, motor lubrication, shell cleaning, and firmware setup.
              </p>
              <div className="text-xs font-semibold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">check</span> Fast 24h Turnaround
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-lg border border-primary/30">
              <span className="material-symbols-outlined text-primary-fixed text-2xl mb-3 block">build</span>
              <h3 className="text-base font-bold text-white mb-1.5">Gimbal &amp; Crash Fix</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Gimbal ribbon cables, broken motor arms, cracked shells, and optical camera glass.
              </p>
              <div className="text-xs font-semibold text-primary-fixed flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">check</span> Genuine OEM Parts
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary text-2xl mb-3 block">memory</span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">ESC &amp; Board Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Component micro-soldering, ultrasonic liquid wash, and power management recovery.
              </p>
              <div className="text-xs font-semibold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">check</span> Circuit Level Fixes
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary text-2xl mb-3 block">sensors</span>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Sensors &amp; Remotes</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Vision sensor calibration, RC controller stick drift fix, and battery recovery.
              </p>
              <div className="text-xs font-semibold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">check</span> Calibrated &amp; Tested
              </div>
            </div>
          </div>

          {/* Action Strip */}
          <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold text-slate-700 text-center sm:text-left">
              Supporting Mini 4 Pro, Air 3, Mavic 3, Avata 2, Inspire &amp; Enterprise Series.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/dji-service"
                className="flex-1 sm:flex-initial bg-primary text-white font-button text-xs uppercase px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all font-bold text-center"
              >
                Service Directory
              </Link>
              <a
                href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20DJI%20drone%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial bg-surface text-primary border border-primary/40 font-button text-xs uppercase px-4 py-2.5 rounded-lg hover:bg-primary/5 transition-all font-bold text-center"
              >
                Instant Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. HOW IT WORKS (4-Step Simple Process)
          ============================================================ */}
      <section className="py-12 md:py-16 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-1 font-bold">
              Simple Workflow
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold">
              How Dronebhai Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30">
              <div className="text-primary font-bold text-2xl opacity-40 mb-1">01</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Intake</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Walk into South Bopal/Tragad labs, or request Pan-India insured courier pickup.
              </p>
            </div>

            <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30">
              <div className="text-primary font-bold text-2xl opacity-40 mb-1">02</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Diagnostics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hardware &amp; flight-log inspection with transparent upfront estimate.
              </p>
            </div>

            <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30">
              <div className="text-primary font-bold text-2xl opacity-40 mb-1">03</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Cleanroom Fix</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Factory-grade service using 100% genuine OEM components.
              </p>
            </div>

            <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30">
              <div className="text-primary font-bold text-2xl opacity-40 mb-1">04</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Test Flight</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                15-point flight verification, calibration, and insured return delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. WHY CHOOSE US (Trust & Authority — Infographic Architecture)
          ============================================================ */}
      <EngineeringReliabilityInfographic />

      {/* ============================================================
          6. CUSTOMER REVIEWS (Social Proof)
          ============================================================ */}
      <section className="py-12 md:py-16 bg-surface-bright border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-1 font-bold">
              Testimonials
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold">
              What Pilots Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Karan Mehta",
                role: "Cinematographer, Ahmedabad",
                drone: "DJI Mavic 3 Pro",
                review: "Gimbal and arm serviced with genuine parts within 24 hours. Saved my wedding shoot season.",
              },
              {
                name: "Ramesh Patel",
                role: "Agri Contractor, Anand",
                drone: "20L Agri Hexacopter",
                review: "Custom 20L sprayer drone running flawlessly across 400+ acres with great team support.",
              },
              {
                name: "Aditya Roy",
                role: "FPV Pilot, Mumbai",
                drone: "CineWhoop O3 Pro",
                review: "Buttery smooth PID tuning and solid carbon frame assembly right out of the box.",
              },
            ].map((rev, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-0.5 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{rev.name}</h4>
                    <span className="text-[10px] text-slate-500">{rev.role}</span>
                  </div>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {rev.drone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FAQ (Frequently Asked Questions)
          ============================================================ */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-gutter">
          <div className="text-center mb-8">
            <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-1 font-bold">
              FAQ
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do you service DJI drones purchased elsewhere?",
                a: "Yes. We diagnose and service any DJI drone regardless of where it was purchased.",
              },
              {
                q: "How long does a service take in Ahmedabad?",
                a: "Standard services are completed within 24–48 hours. Diagnostics take 2–4 hours.",
              },
              {
                q: "Can I ship my drone from outside Ahmedabad?",
                a: "Yes. We coordinate insured doorstep courier pickup across all India.",
              },
              {
                q: "Are the replacement parts authentic OEM?",
                a: "Yes, we exclusively use 100% genuine factory parts with a 30-day warranty.",
              },
              {
                q: "Do you build custom drones for industrial use?",
                a: "Yes, our aerospace team manufactures custom agricultural, survey, and enterprise airframes.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30"
              >
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">help</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FINAL CONTACT CTA
          ============================================================ */}
      <section className="py-12 md:py-16 bg-surface-bright border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-outline-variant/30 shadow-xl text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-eyebrow text-xs uppercase tracking-widest text-primary-fixed block mb-2 font-bold">
                Get Flight Ready
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold mb-3">
                Ready to Fly or Need Drone Care?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                South Bopal &amp; Tragad Labs &bull; Mon–Sat 11:00 AM – 7:00 PM
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <a
                  href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20am%20looking%20for%20drone%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[46px] bg-primary hover:bg-primary/90 text-white font-button text-xs uppercase px-6 py-3 rounded-xl sm:rounded-full flex items-center justify-center gap-2 shadow-sm font-bold active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp 8002 8003 80</span>
                </a>

                <a
                  href="tel:8002800380"
                  className="w-full sm:w-auto min-h-[46px] bg-white hover:bg-slate-100 text-slate-900 font-button text-xs uppercase px-5 py-3 rounded-xl sm:rounded-full flex items-center justify-center gap-2 font-bold active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined text-primary text-base">phone</span>
                  <span>Call Hotline</span>
                </a>

                <Link
                  href="/branches"
                  className="w-full sm:w-auto min-h-[46px] text-slate-300 hover:text-white text-xs uppercase font-semibold px-4 py-3 rounded-xl sm:rounded-full flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Visit Labs</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
