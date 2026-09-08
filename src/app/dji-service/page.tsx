import Link from "next/link";
import type { Metadata } from "next";
import { djiModels } from "@/lib/data/dji-service";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professional DJI Drone Repair & Diagnostic Center in Ahmedabad | Dronebhai",
  description:
    "Precision drone repair, advanced diagnostics, component replacement, calibration, and maintenance for camera, FPV, enterprise, and agricultural drones in Ahmedabad.",
  alternates: {
    canonical: "/dji-service",
  },
  openGraph: {
    title: "Professional DJI Drone Repair & Diagnostic Center | Dronebhai",
    description:
      "Precision drone repair, advanced diagnostics, component replacement, calibration, and maintenance for camera, FPV, enterprise, and agricultural drones in Ahmedabad.",
    url: "https://dronebhai.com/dji-service",
    siteName: "Dronebhai",
    images: [
      {
        url: "/images/drone-flagship-3d.jpg",
        width: 1200,
        height: 630,
        alt: "Robuzta TechLabs Drone Repair & Diagnostic Center Ahmedabad",
      },
    ],
  },
};

const djiServiceFaqs = [
  {
    q: "What DJI models do you service at Dronebhai?",
    a: "We service all DJI consumer, FPV, enterprise, and agricultural drones including DJI Mini 5 Pro, Mini 4 Pro, Mini 3 Pro, Mini 3, Mini 2 SE, Mini 2, Mavic Mini, DJI Neo, DJI Neo 2, Mavic 3 Pro, Mavic 3 Classic, Mavic 3, Air 3, Air 2S, Mavic Air 2, Mavic 2 Pro/Zoom, Avata 2, Avata, DJI FPV, Phantom 4 Pro, Inspire 2, Inspire 3, Matrice 350/300 RTK, Matrice 30T, and Agras T40/T30.",
  },
  {
    q: "Do you service drones purchased internationally or second-hand?",
    a: "Yes. We service drones regardless of where they were purchased, including international imports and pre-owned units.",
  },
  {
    q: "How much does DJI drone repair cost?",
    a: "We perform complete diagnostic assessments before recommending a repair. Transparent estimates are provided for component-level repairs, gimbal swaps, camera lens replacements, and ESC micro-soldering.",
  },
  {
    q: "How fast can I get my drone repaired?",
    a: "Standard diagnostic and repair turnaround is 24 to 48 hours for common repairs. Priority express handling is available at our Ahmedabad South Bopal & Tragad labs.",
  },
];

const djiStructuredData = {
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
          name: "DJI Services",
          item: "https://dronebhai.com/dji-service",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Professional Drone Repair & Diagnostic Center",
      provider: { "@id": "https://dronebhai.com/#organization" },
      areaServed: [
        { "@type": "City", name: "Ahmedabad" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "Country", name: "India" },
      ],
      serviceType: "Drone Repair & Diagnostics",
      description:
        "Precision drone repair, advanced diagnostics, component replacement, calibration, and maintenance for camera, FPV, enterprise, and agricultural drones in Ahmedabad.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "1499",
        highPrice: "45000",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: djiServiceFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

// ── 6 Core Capabilities from Dji service.md ──
const coreCapabilities = [
  {
    icon: "hardware",
    title: "Drone Hardware Repair",
    subtitle: "Professional repair for damaged and malfunctioning drone components.",
    items: [
      "Gimbal & flex cable replacement",
      "Motor, arm & shell replacement",
      "Camera & lens damage repair",
    ],
  },
  {
    icon: "memory",
    title: "Flight Controller & ESC Repair",
    subtitle: "Component-level troubleshooting for critical flight electronics.",
    items: [
      "ESC diagnosis & component replacement",
      "Power management circuit repair",
      "Water & liquid damage treatment",
    ],
  },
  {
    icon: "troubleshoot",
    title: "Diagnostics & Calibration",
    subtitle: "Accurate testing for flight stability, sensors, and system errors.",
    items: [
      "IMU & compass calibration",
      "Obstacle sensor diagnostics",
      "Flight-system error troubleshooting",
    ],
  },
  {
    icon: "sports_esports",
    title: "Remote Controller & Goggles",
    subtitle: "Specialized service for drone controllers and FPV equipment.",
    items: [
      "Joystick & stick-drift repair",
      "Controller display replacement",
      "Antenna & signal-related service",
    ],
  },
  {
    icon: "tune",
    title: "Camera & Gimbal Service",
    subtitle: "Restore stable aerial imaging and camera performance.",
    items: [
      "Gimbal calibration",
      "Camera & lens replacement",
      "Gimbal motor & ribbon repair",
    ],
  },
  {
    icon: "battery_charging_full",
    title: "Battery & Power Service",
    subtitle: "Inspection and troubleshooting for drone power-related problems.",
    items: [
      "Battery health diagnosis",
      "Charging & power fault diagnosis",
      "Battery connector & power-line service",
    ],
  },
];

// ── 5 Series Categories from Dji service 1.md ──
const supportedSeriesGroups = [
  {
    series: "DJI MINI SERIES",
    models: ["Mini 5 Pro", "Mini 4 Pro", "Mini 3 Pro", "Mini 3", "Mini 2 SE", "Mini 2", "Mavic Mini"],
    highlight: "Gimbal, camera, arm, motor, battery and obstacle-sensor repairs.",
  },
  {
    series: "DJI NEO SERIES",
    models: ["DJI Neo", "DJI Neo 2"],
    highlight: "Dedicated Neo support for camera/gimbal, propeller, motor, battery, vision sensor and flight-control issues.",
  },
  {
    series: "DJI MAVIC & AIR SERIES",
    models: ["Mavic 3 Pro", "Mavic 3 Classic", "Mavic 3", "Air 3", "Air 2S", "Mavic Air 2", "Mavic 2 Pro / Zoom"],
    highlight: "Camera and gimbal alignment, ESC, vision sensors, motors and flight-controller repairs.",
  },
  {
    series: "DJI FPV & AVATA SERIES",
    models: ["DJI Avata 2", "DJI Avata", "DJI FPV"],
    highlight: "FPV repairs for duct frames, motors, camera, video transmission, goggles and flight components.",
  },
  {
    series: "DJI ENTERPRISE & INDUSTRIAL",
    models: ["Inspire 2", "Inspire 3", "Phantom 4 Pro V2.0", "Matrice 300 / 350 RTK", "Matrice 30T", "Agras T40 / T30"],
    highlight: "Payload systems, RTK positioning, cameras, spraying systems and advanced diagnostics.",
  },
];

// ── 8 Detailed Service Solutions from Dji Service 2.md ──
const detailedSolutions = [
  {
    category: "Gimbal & Camera Repair",
    icon: "tune",
    symptoms: "Blurred footage, tilted camera, vibration, cracked lens.",
    services: [
      "Gimbal motor & overload correction",
      "Flex ribbon cable replacement",
      "Camera lens & sensor replacement",
      "Gimbal stabilization calibration",
    ],
  },
  {
    category: "Frame, Arms & Landing Gear",
    icon: "hardware",
    symptoms: "Broken arms, cracked shell, damaged landing gear or mounts.",
    services: [
      "Front / rear arm replacement",
      "Upper & lower shell replacement",
      "Landing gear & cable routing",
      "Propeller hub inspection",
    ],
  },
  {
    category: "ESC & Mainboard Repair",
    icon: "memory",
    symptoms: "ESC errors, motor failure, power faults and intermittent shutdowns.",
    services: [
      "ESC component-level repair",
      "Mainboard circuit diagnosis",
      "Power management repair",
      "GPS & compass system checks",
    ],
  },
  {
    category: "Vision & Sensor Calibration",
    icon: "sensors",
    symptoms: "Obstacle sensing errors, drift, collision warnings and sensor faults.",
    services: [
      "Front / rear vision sensor setup",
      "Downward optical-flow calibration",
      "Infrared sensor alignment",
      "Obstacle-sensing diagnostics",
    ],
  },
  {
    category: "Water & Liquid Damage",
    icon: "water_drop",
    symptoms: "Rain or liquid exposure, corrosion, no-power and short-circuit symptoms.",
    services: [
      "Ultrasonic board cleaning",
      "Corrosion removal & neutralization",
      "Short-circuit detection",
      "Motor & connector recovery",
    ],
  },
  {
    category: "Remote Controller & Goggles",
    icon: "sports_esports",
    symptoms: "Stick drift, display damage, weak signal and controller faults.",
    services: [
      "Joystick potentiometer repair",
      "LCD / touchscreen replacement",
      "Internal battery replacement",
      "Antenna & signal diagnostics",
    ],
  },
  {
    category: "Firmware & Error Code Support",
    icon: "system_update",
    symptoms: "Boot errors, update failures, locked systems and recurring error codes.",
    services: [
      "Firmware recovery & system reset",
      "Flight-controller diagnostics",
      "IMU & accelerometer calibration",
      "Compass interference troubleshooting",
    ],
  },
  {
    category: "Battery & Charging Diagnostics",
    icon: "battery_charging_full",
    symptoms: "Fast battery drain, deep sleep, swelling, charging and power issues.",
    services: [
      "Battery health assessment",
      "Battery management system diagnostics",
      "Terminal & connector service",
      "Charging-port fault testing",
    ],
  },
];

export default function DjiServicePage() {
  return (
    <main className="bg-background text-on-background">
      <JsonLd data={djiStructuredData} />

      <div className="max-w-7xl mx-auto px-gutter pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "DJI Services" },
          ]}
          showSchema={false}
        />
      </div>

      {/* ============================================================
          1. HERO SECTION (from Dji service.md)
          ============================================================ */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16 px-gutter max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container rounded-full mb-6 border border-outline-variant/40 shadow-xs">
          <span className="material-symbols-outlined text-primary text-base">verified</span>
          <span className="font-eyebrow text-xs text-primary uppercase tracking-widest font-bold">
            EXPERIENCED TECHNICIANS • COMPONENT-LEVEL REPAIR • ADVANCED DIAGNOSTICS
          </span>
        </div>

        <h1 className="font-headline-lg-mobile text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold mb-6 max-w-4xl mx-auto tracking-tight">
          Professional Drone Repair &amp; Diagnostic Center
        </h1>

        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
          Precision drone repair, advanced diagnostics, component replacement, calibration, and maintenance for camera, FPV, enterprise, and agricultural drones in Ahmedabad.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center max-w-xl mx-auto">
          <a
            href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20book%20a%20drone%20repair%20and%20diagnostic%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[48px] bg-primary text-on-primary font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(0,104,94,0.35)] font-bold text-center"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Book Drone Service via WhatsApp</span>
          </a>

          <a
            href="tel:8002800380"
            className="flex-1 min-h-[48px] bg-surface-container-lowest text-primary border-2 border-primary/40 font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 active:scale-[0.98] transition-all font-bold text-center shadow-xs"
          >
            <span className="material-symbols-outlined text-lg">phone</span>
            <span>Call 8002 8003 80</span>
          </a>
        </div>

        {/* Trust Notice */}
        <div className="mt-8 inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-xl px-4 py-2 text-xs font-semibold">
          <span className="material-symbols-outlined text-sm">info</span>
          <span>We service drones regardless of where they were purchased, including international and pre-owned units.</span>
        </div>
      </section>

      {/* ============================================================
          2. COMPLETE DRONE REPAIR & SERVICE CAPABILITIES (Dji service.md)
          ============================================================ */}
      <section className="py-12 md:py-16 px-gutter max-w-7xl mx-auto border-t border-outline-variant/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-primary rounded-full" />
          <div>
            <span className="font-eyebrow text-eyebrow text-primary uppercase font-bold tracking-widest block">
              SPECIALIZED DRONE LABS
            </span>
            <h2 className="font-headline-md text-2xl md:text-3xl text-on-surface font-bold">
              Complete Drone Repair &amp; Service Capabilities
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/60 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">{capability.icon}</span>
              </div>
              <h3 className="font-label-md text-lg text-on-surface font-bold mb-1">
                {capability.title}
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant mb-4 leading-relaxed">
                {capability.subtitle}
              </p>
              <ul className="space-y-2 text-xs text-on-surface">
                {capability.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          3. ALL DJI DRONE MODELS SERVICED & SUPPORTED (Dji service 1.md)
          [Placed BEFORE Complete Drone Repair & Service Solutions]
          ============================================================ */}
      <section className="py-14 md:py-18 bg-surface-bright border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="font-eyebrow text-xs text-primary uppercase tracking-widest font-bold block mb-1">
              FLEET SUPPORT
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold mb-2">
              All DJI Drone Models Serviced &amp; Supported
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complete drone repair, diagnostics and maintenance support across consumer, FPV, enterprise and agricultural platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {supportedSeriesGroups.map((group, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-all"
              >
                <div>
                  <h4 className="font-bold text-xs text-primary uppercase tracking-wide mb-3 pb-2 border-b border-outline-variant/20">
                    {group.series}
                  </h4>
                  <ul className="space-y-1.5 mb-4 text-xs font-medium text-on-surface">
                    {group.models.map((m, mi) => (
                      <li key={mi} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[11px] text-on-surface-variant italic pt-3 border-t border-outline-variant/20 leading-relaxed">
                  {group.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. COMPLETE DRONE REPAIR & SERVICE SOLUTIONS (Dji Service 2.md)
          ============================================================ */}
      <section className="py-14 md:py-20 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="font-eyebrow text-xs text-primary uppercase tracking-widest font-bold block mb-1">
              REPAIR SOLUTIONS
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold mb-2">
              Complete Drone Repair &amp; Service Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Professional diagnostics, component repair, calibration and maintenance for camera, FPV, enterprise and agricultural drones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 flex flex-col justify-between hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">{sol.icon}</span>
                    </div>
                    <h3 className="font-bold text-base text-on-background leading-snug">
                      {sol.category}
                    </h3>
                  </div>

                  {/* Common Symptoms */}
                  <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/20 mb-4 text-[11px] text-on-surface-variant">
                    <span className="font-bold text-primary block mb-1 uppercase tracking-wider text-[10px]">
                      Common Symptoms:
                    </span>
                    {sol.symptoms}
                  </div>

                  {/* Services Performed */}
                  <div className="mb-6">
                    <span className="font-bold text-xs text-on-background uppercase tracking-wider block mb-2">
                      Services Performed:
                    </span>
                    <ul className="space-y-1.5 text-xs text-on-surface-variant">
                      {sol.services.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-xs shrink-0 mt-0.5">check</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20help%20with%20${encodeURIComponent(sol.category)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-on-primary text-xs font-bold py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Enquire For This Service</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. MODEL MATRIX: SELECT YOUR DJI MODEL FOR QUICK SPECS & PRICING (Dji Service 3.md)
          [Directly links to drone specific page /dji-service/[model]]
          ============================================================ */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-gutter border-t border-outline-variant/30">
        <div className="text-center mb-12">
          <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest font-bold block mb-2">
            MODEL MATRIX
          </span>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-on-background font-bold mb-3">
            Select Your DJI Model for Quick Specs &amp; Pricing
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant max-w-xl mx-auto">
            Explore model-specific repair services, common fault areas, diagnostics and pricing estimates.
          </p>
        </div>

        {/* 26 Models from Dji Service 3.pdf */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {djiModels.map((model) => (
            <div
              key={model.slug}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-5 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                  {model.series} SERIES
                </span>
                <h3 className="font-bold text-base text-on-background mb-1 group-hover:text-primary transition-colors">
                  {model.label}
                </h3>
                {model.subtitle && (
                  <p className="text-xs text-slate-500 mb-3 italic">
                    {model.subtitle}
                  </p>
                )}

                {/* 3 Diagnosis Tags */}
                {model.tags && model.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {model.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] font-medium bg-surface-container text-slate-600 px-2 py-0.5 rounded capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Directly links to drone specific page */}
              <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                <Link
                  href={`/dji-service/${model.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-primary group/link py-0.5"
                >
                  <span className="group-hover/link:underline underline-offset-4 decoration-1">
                    View Specs &amp; Price
                  </span>
                  <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover/link:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Robuzta TechLabs Banner from MD File */}
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl text-center">
          <p className="text-xs font-semibold text-slate-700">
            ROBUZTA TECHLABS • Drone Diagnostics • Component-Level Repair • Genuine Parts Support • Pan-India Service
          </p>
        </div>
      </section>

      {/* ============================================================
          6. FAQS & SEO KEYWORD FOOTER
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface-bright border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="text-center mb-10">
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Common questions about DJI drone diagnostics, repair workflows, and warranty coverage.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {djiServiceFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-5"
              >
                <h4 className="font-bold text-sm text-slate-900 mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">help</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FINAL CTA
          ============================================================ */}
      <section className="py-12 md:py-16 max-w-5xl mx-auto px-gutter text-center">
        <div className="bg-inverse-surface text-white rounded-3xl p-8 sm:p-12 border border-outline-variant/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-eyebrow text-xs uppercase tracking-widest text-primary-fixed block mb-2 font-bold">
              Fast Diagnostics &amp; Repair
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4">
              Get Your DJI Drone Diagnosed &amp; Repaired
            </h2>
            <p className="font-body-md text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Visit our <strong>South Bopal</strong> or <strong>Tragad</strong> service center in Ahmedabad, or contact us for courier-based service across India.
            </p>

            <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <a
                href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20book%20a%20DJI%20drone%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[50px] bg-primary text-on-primary font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(0,104,94,0.4)] font-bold text-center"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>WhatsApp Diagnostics</span>
              </a>

              <a
                href="tel:8002800380"
                className="flex-1 min-h-[50px] bg-white text-on-surface hover:bg-gray-100 font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all font-bold text-center shadow-md"
              >
                <span className="material-symbols-outlined text-primary text-lg">phone</span>
                <span>Call 8002 8003 80</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
