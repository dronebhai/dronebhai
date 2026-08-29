import Link from "next/link";
import type { Metadata } from "next";
import { djiModels, repairTypes } from "@/lib/data/dji-service";

export const metadata: Metadata = {
  title: "DJI Service Hub | Dronebhai — Authorized DJI Repair Centre in Ahmedabad",
  description:
    "Authorized DJI drone repair and service in Ahmedabad. Specializing in gimbal repairs, arm replacements, ESC micro-soldering, water damage, and sensor calibration for all DJI Mini, Mavic, Air, Avata, Inspire, and Enterprise drones.",
};

const serviceOfferings = [
  {
    icon: "build",
    title: "DJI Hardware Repair",
    subtitle: "Component replacement and crash recovery.",
    items: ["Gimbal & flex ribbon replacement", "Arm, shell & motor swaps", "Cracked lens replacement"],
  },
  {
    icon: "memory",
    title: "Motherboard & ESC Repair",
    subtitle: "Component-level micro-soldering.",
    items: ["ESC circuit repair & chip replacement", "Liquid & water damage ultrasonic wash", "Power management fixes"],
  },
  {
    icon: "troubleshoot",
    title: "Diagnostics & IMU Tuning",
    subtitle: "Error log analysis and sensor calibration.",
    items: ["Factory IMU & compass alignment", "Obstacle vision sensor tuning", "Error code 30007/40003 unbricking"],
  },
  {
    icon: "sports_esports",
    title: "Controllers & Goggles",
    subtitle: "DJI RC & Goggles specialized care.",
    items: ["Joystick stick-drift correction", "Cracked LCD screen replacement", "Antenna & signal booster repairs"],
  },
];

const djiAllRepairsDirectory = [
  {
    category: "Gimbal & Camera Repairs",
    icon: "tune",
    symptoms: "Gimbal Overload warning, jittery video, camera tilted sideways, cracked lens, or disconnected gimbal arm.",
    repairs: [
      "Gimbal Overload & Motor Jam Fix",
      "Yaw / Pitch / Roll Motor Realignment",
      "Ultra-fine Gimbal Flex Ribbon Cable Replacement",
      "Camera Lens Glass & Sensor Module Replacement",
      "3-Axis Mechanical Gimbal Anti-Vibration Dampeners",
    ],
  },
  {
    category: "Frame, Arms & Shell Replacement",
    icon: "hardware",
    symptoms: "Cracked carbon/poly arms after crash, broken landing gear, loose motor joints, shattered top/middle shell.",
    repairs: [
      "Front Left / Right Motor Arm Swap",
      "Rear Left / Right Motor Arm Swap",
      "Upper Shell, Middle Frame & Bottom Housing Replacement",
      "Landing Gear Struts & Antenna Wire Routing",
      "Quick-Release Propeller Lock Hub Mechanism",
    ],
  },
  {
    category: "ESC, Motherboard & Micro-Soldering",
    icon: "memory",
    symptoms: "ESC Status Error, motor won't spin, drone won't power on, burnt smell or blown electronic components.",
    repairs: [
      "ESC Board Power MOSFET Replacement",
      "Core Mainboard Micro-Soldering & Circuit Tracing",
      "Power Management IC & Battery Terminal Soldering",
      "Internal Ribbon Bus & Communication Cable Loom",
      "Onboard GPS & Compass Module Integration",
    ],
  },
  {
    category: "Obstacle Avoidance & Vision Sensors",
    icon: "sensors",
    symptoms: "Vision System Error, downward sensor calibration failed, drone drifting indoors, obstacle sensing disabled.",
    repairs: [
      "Forward & Backward Dual-Vision Sensor Replacement",
      "Downward Optical Flow & ToF Sensor Calibration",
      "Lateral Infrared Sensing Module Alignment",
      "Auxiliary Bottom Landing Light Replacement",
      "DJI Assistant 2 Factory Sensor Alignment",
    ],
  },
  {
    category: "Liquid & Water Damage Restoration",
    icon: "water_drop",
    symptoms: "Drone fell in lake/pool/rain, won't turn on, corrosion marks, short-circuit errors.",
    repairs: [
      "Immediate High-Frequency Ultrasonic Chemical Bath",
      "Full Board De-oxidation & Corrosion Neutralization",
      "Power-Rail Short Circuit Detection & Soldering",
      "Motor Bearing De-rusting & Lubrication",
      "Pre-flight Multi-Stage Electrical Safety Clearance",
    ],
  },
  {
    category: "Remote Controllers & Goggles",
    icon: "sports_esports",
    symptoms: "DJI RC stick drifting, cracked controller touchscreen, antenna broken, short battery life, Goggles screen black.",
    repairs: [
      "DJI RC / RC 2 / RC Pro Joystick Potentiometer Replacement",
      "Cracked Touchscreen LCD Display Replacement",
      "Internal Controller Li-Ion Battery Swap",
      "2.4GHz / 5.8GHz High-Gain Antenna Repair",
      "DJI Goggles 2 / 3 / Integra Optics & Screen Fixes",
    ],
  },
  {
    category: "Firmware, Error Codes & Software",
    icon: "system_update",
    symptoms: "Error Code 30007, 40003, 180, firmware update stuck at 99%, NFZ authorization issues.",
    repairs: [
      "Blackbox Flight Log Extraction & Audit",
      "Firmware Unbricking & Forced Factory Downgrade/Upgrade",
      "IMU & Accelerometer Advanced Recalibration",
      "Compass Magnetic Interference Neutralization",
      "DJI Fly / DJI Pilot 2 App Account & License Binding",
    ],
  },
  {
    category: "Battery & Power Management",
    icon: "battery_charging_full",
    symptoms: "Battery in deep sleep (hibernation), swollen cells, error communication with aircraft, sudden drop in percentage.",
    repairs: [
      "Deep Sleep BMS Wake-up & Cell Balancing",
      "Battery Terminal Contact Pin Replacement",
      "Intelligent Flight Battery Health Diagnostics",
      "Charging Hub Port Repair",
      "Discharge Curve & Internal Resistance Testing",
    ],
  },
];

const djiFleetSeries = [
  {
    series: "DJI Mini Series",
    models: ["Mini 4 Pro", "Mini 3 Pro", "Mini 3", "Mini 2 SE", "Mini 2", "Mavic Mini"],
    highlight: "Ultra-lightweight gimbal ribbon, arms & obstacle sensor repairs.",
  },
  {
    series: "DJI Mavic & Air Series",
    models: ["Mavic 3 Pro", "Mavic 3 Classic", "Mavic 3", "Air 3", "Air 2S", "Mavic Air 2", "Mavic 2 Pro/Zoom"],
    highlight: "Dual/triple camera gimbal realignment, ESC board & collision sensor fixes.",
  },
  {
    series: "DJI FPV & Avata Series",
    models: ["DJI Avata 2", "DJI Avata", "DJI FPV"],
    highlight: "Duct bumper replacement, O3/O4 video transmission & high-speed motor swaps.",
  },
  {
    series: "DJI Enterprise & Cinema",
    models: ["Inspire 2", "Inspire 3", "Phantom 4 Pro V2.0", "Matrice 300/350 RTK", "Matrice 30T", "Agras T40/T30"],
    highlight: "Heavy payload gimbals, RTK positioning & industrial flight testing.",
  },
];

export default function DjiServicePage() {
  return (
    <main className="bg-background text-on-background">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-16 px-gutter max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container rounded-full mb-6 border border-outline-variant/40 shadow-xs">
          <span className="material-symbols-outlined text-primary text-base">verified</span>
          <span className="font-eyebrow text-xs text-primary uppercase tracking-widest font-bold">
            Authorized DJI Repair &amp; Service Lab &bull; Ahmedabad
          </span>
        </div>

        <h1 className="font-headline-lg-mobile text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold mb-6 max-w-4xl mx-auto tracking-tight">
          Authorized DJI Drone Repair &amp; Diagnostic Center.
        </h1>

        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
          Factory-trained technicians providing precision diagnostics, genuine OEM parts replacement, and cleanroom calibration for <strong>every DJI drone model</strong> in Ahmedabad and across India.
        </p>

        {/* Responsive CTAs */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center max-w-xl mx-auto">
          <a
            href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20DJI%20drone%20repair%20assistance"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[48px] bg-primary text-on-primary font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(0,104,94,0.35)] font-bold text-center"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Book Repair via WhatsApp</span>
          </a>

          <a
            href="tel:8002800380"
            className="flex-1 min-h-[48px] bg-surface-container-lowest text-primary border-2 border-primary/40 font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 active:scale-[0.98] transition-all font-bold text-center shadow-xs"
          >
            <span className="material-symbols-outlined text-lg">phone</span>
            <span>Call 8002 8003 80</span>
          </a>
        </div>

        {/* Policy Highlight */}
        <div className="mt-8 inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-xl px-4 py-2 text-xs font-semibold">
          <span className="material-symbols-outlined text-sm">info</span>
          <span>We repair ANY DJI drone regardless of where it was purchased (international &amp; pre-owned included).</span>
        </div>
      </section>

      {/* ============================================================
          CORE OFFERINGS (1st Section)
          ============================================================ */}
      <section className="py-12 md:py-16 px-gutter max-w-7xl mx-auto border-t border-outline-variant/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-primary rounded-full" />
          <div>
            <span className="font-eyebrow text-eyebrow text-primary uppercase font-bold tracking-widest block">
              Specialized Labs
            </span>
            <h2 className="font-headline-md text-2xl md:text-3xl text-on-surface font-bold">
              Core DJI Service Capabilities
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOfferings.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/60 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-label-md text-lg text-on-surface font-bold mb-1">
                {service.title}
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant mb-4">
                {service.subtitle}
              </p>
              <ul className="space-y-2 text-xs text-on-surface">
                {service.items.map((item, i) => (
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
          SHOW ALL AVAILABLE DJI SERVICES & REPAIRS (Detailed Breakdown)
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface-bright border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest font-bold block mb-2">
              Complete Repair Catalog
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-background font-bold mb-4">
              All Available DJI Repair Services &amp; Supported Models
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Anyone can easily understand what we fix. Below is the complete breakdown of every DJI component, symptom, error code, and repair procedure handled at our Ahmedabad labs.
            </p>
          </div>

          {/* Grid of All Specific DJI Repair Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {djiAllRepairsDirectory.map((rep, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 flex flex-col justify-between hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">{rep.icon}</span>
                    </div>
                    <h3 className="font-bold text-base text-on-background leading-snug">
                      {rep.category}
                    </h3>
                  </div>

                  {/* Symptoms Callout */}
                  <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/20 mb-4 text-[11px] text-on-surface-variant">
                    <span className="font-bold text-primary block mb-1">Common Symptoms:</span>
                    {rep.symptoms}
                  </div>

                  {/* List of Specific Repairs */}
                  <div className="mb-6">
                    <span className="font-bold text-xs text-on-background uppercase tracking-wider block mb-2">
                      Specific Repairs Performed:
                    </span>
                    <ul className="space-y-1.5 text-xs text-on-surface-variant">
                      {rep.repairs.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-xs shrink-0 mt-0.5">check</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20help%20with%20${encodeURIComponent(rep.category)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-on-primary text-xs font-bold py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Enquire for this Repair</span>
                </a>
              </div>
            ))}
          </div>

          {/* Supported Fleet Breakdown */}
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/40">
            <h3 className="font-headline-md text-xl md:text-2xl text-on-background font-bold mb-6 text-center">
              All DJI Drone Models Repaired &amp; Serviced
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {djiFleetSeries.map((fleet, i) => (
                <div key={i} className="bg-surface p-5 rounded-2xl border border-outline-variant/30 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wide mb-2">
                      {fleet.series}
                    </h4>
                    <ul className="space-y-1 mb-4 text-xs font-medium text-on-surface">
                      {fleet.models.map((m, mi) => (
                        <li key={mi} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-[11px] text-on-surface-variant italic pt-3 border-t border-outline-variant/20">
                    {fleet.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MODEL SELECTOR & REPAIR COMBINATIONS
          ============================================================ */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-gutter">
        <div className="text-center mb-12">
          <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest font-bold block mb-2">
            Model Matrix
          </span>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-on-background font-bold mb-3">
            Select Your DJI Model for Quick Specs &amp; Pricing
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant max-w-xl mx-auto">
            Click on any model to view common error codes, repair turnaround times, and pricing estimates.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {djiModels.map((model) => (
            <div
              key={model.slug}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-5 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                  {model.series} Series
                </span>
                <h3 className="font-bold text-sm text-on-background mb-3 group-hover:text-primary transition-colors">
                  {model.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {repairTypes.slice(0, 3).map((rt) => (
                  <Link
                    key={rt.slug}
                    href={`/dji-service/${model.slug}/${rt.slug}`}
                    className="text-[10px] font-semibold text-primary bg-primary/5 hover:bg-primary hover:text-on-primary border border-primary/20 rounded px-2 py-0.5 transition-colors"
                  >
                    {rt.label.split(" ")[0]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          DIAGNOSTIC PROCESS & GUARANTEE
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface-bright border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest font-bold block mb-2">
              Transparent Workflow
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl text-on-background font-bold mb-3">
              Our 5-Stage DJI Repair Protocol
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant">
              Every DJI drone is repaired following aerospace-grade standard operating procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              { step: "01", title: "Intake & Log Audit", desc: "Inspection of flight blackbox data & visible damage." },
              { step: "02", title: "Free Diagnostic Quote", desc: "Written estimate sent on WhatsApp within 2–4 hours." },
              { step: "03", title: "OEM Cleanroom Repair", desc: "Component replacement with genuine DJI factory parts." },
              { step: "04", title: "Sensor Calibration", desc: "DJI Assistant 2 optical flow & IMU bench alignment." },
              { step: "05", title: "15-Point Test Flight", desc: "Outdoor flight test, certificate & safe handover." },
            ].map((st, i) => (
              <div key={i} className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 text-center">
                <span className="text-primary font-bold text-2xl opacity-40 block mb-2">{st.step}</span>
                <h4 className="font-bold text-sm text-on-background mb-1">{st.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL DJI CONTACT CTA (Ultra-Responsive)
          ============================================================ */}
      <section className="py-14 md:py-20 max-w-5xl mx-auto px-gutter text-center">
        <div className="bg-inverse-surface text-white rounded-3xl p-8 sm:p-12 border border-outline-variant/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-eyebrow text-xs uppercase tracking-widest text-primary-fixed block mb-2 font-bold">
              Fast Repair Dispatch
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4">
              Get Your DJI Drone Back In The Sky
            </h2>
            <p className="font-body-md text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Walk in to our <strong>South Bopal</strong> or <strong>Tragad</strong> labs in Ahmedabad, or request a doorstep courier pickup anywhere in India.
            </p>

            <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <a
                href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20book%20a%20DJI%20repair"
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
