import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/lib/data/categories";

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
      {/* ============================================================
          1. HERO SECTION (Minimalist White Theme Showcase)
          ============================================================ */}
      <section className="relative w-full min-h-[480px] lg:min-h-[560px] flex items-center justify-center overflow-hidden bg-white text-slate-900 py-4 lg:py-6 select-none border-b border-outline-variant/20">
        
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
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20 order-2 lg:order-1">
              
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

              {/* Actions Row: WhatsApp + Call + Discover */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <a
                  href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20inquire%20about%20drone%20sales/service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white font-button text-xs uppercase px-6 py-3.5 rounded-full flex items-center gap-2 shadow-[0_4px_16px_rgba(0,104,94,0.25)] hover:shadow-[0_6px_20px_rgba(0,104,94,0.35)] transition-all font-bold"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:8002800380"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-button text-xs uppercase px-5 py-3.5 rounded-full flex items-center gap-2 border border-slate-200 transition-colors font-semibold"
                >
                  <span className="material-symbols-outlined text-sm text-primary">phone</span>
                  <span>8002 8003 80</span>
                </a>

                <Link
                  href="/products"
                  className="text-primary hover:text-primary/80 font-button text-xs uppercase px-4 py-3.5 rounded-full flex items-center gap-1.5 font-bold transition-colors"
                >
                  <span>Discover Fleet</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Minimal Stat Highlight */}
              <div className="flex items-center gap-2.5 text-left pt-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-2xl sm:text-3xl font-black text-primary font-headline">
                  &gt;98%
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  Flight Precision &amp; Stability Certified
                </span>
              </div>

            </div>

            {/* ── Right Column: Large 80% Stage Transparent 3D Drone (7 Cols) ── */}
            <div className="lg:col-span-7 relative flex items-center justify-center z-10 my-2 lg:my-0 order-1 lg:order-2">
              
              {/* Large Sized Floating Drone */}
              <div className="relative w-full max-w-[650px] lg:max-w-[800px] xl:max-w-[900px] aspect-[16/10] flex items-center justify-center animate-drone-float scale-100 sm:scale-105 lg:scale-115 xl:scale-120">
                <Image
                  src="/images/drone-transparent.png"
                  alt="Dronebhai Aerospace Drone"
                  width={950}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] filter transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          2. SERVICES OVERVIEW (Product Categories & Fleet)
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface-bright border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest font-bold">
                  Fleet Classification
                </span>
              </div>
              <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-background font-bold">
                Services &amp; Product Categories
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 max-w-2xl">
                Explore our full spectrum of 16 aerial categories &mdash; from consumer camera flyers to agricultural crop sprayers and custom enterprise airframes.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
            >
              View All 16 Categories
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          {/* Grid of Featured Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                {/* Category Image */}
                <div className="aspect-video relative bg-surface-container-low overflow-hidden">
                  <img
                    src={cat.heroImageUrl}
                    alt={cat.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md rounded-md px-2.5 py-0.5 border border-outline-variant/30 text-[11px] font-bold text-primary uppercase">
                    {cat.eyebrow}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-headline-md text-lg text-on-background font-bold mb-1.5 group-hover:text-primary transition-colors">
                    {cat.label}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-outline-variant/20 text-xs font-bold text-primary">
                    <span>Explore Fleet &amp; Specs</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* All 16 Categories Quick Pills */}
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
            <span className="font-label-md text-xs uppercase font-bold text-on-surface-variant block mb-3">
              Browse All Available Drone Types:
            </span>
            <div className="flex flex-wrap gap-2">
              {productCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="bg-surface hover:bg-primary hover:text-on-primary text-on-surface text-xs font-medium px-3 py-1.5 rounded-lg border border-outline-variant/40 transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. DJI CARE (Authorized Workshop & Repair Center)
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface hud-grid relative">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-sm">verified</span>
              Authorized DJI Service Center
            </div>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-background font-bold mb-4">
              Expert DJI Care &amp; Precision Repair
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              We service and repair <strong>any DJI drone</strong> regardless of purchase source &mdash; using 100% genuine OEM components, factory calibration software, and dust-free cleanroom benches in Ahmedabad.
            </p>
          </div>

          {/* Bento Grid of Core DJI Repair Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Servicing */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 relative overflow-hidden hover:shadow-lg transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">build</span>
              <h3 className="font-label-md text-lg text-on-background font-bold mb-2">
                DJI Health Servicing
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Complete pre-flight multipoint checkups, motor lubrication, shell deep cleaning, and official firmware updates.
              </p>
              <ul className="space-y-1.5 text-xs text-on-surface font-medium">
                <li className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm">check</span> Comprehensive Diagnostics
                </li>
                <li className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm">check</span> Firmware &amp; IMU Calibration
                </li>
              </ul>
            </div>

            {/* Repair (Featured Card) */}
            <div className="bg-inverse-surface text-on-primary rounded-2xl p-6 relative overflow-hidden shadow-xl border border-primary/30 group">
              <div className="absolute top-3 right-3 text-primary opacity-20">
                <span className="material-symbols-outlined text-6xl">home_repair_service</span>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">home_repair_service</span>
              <h3 className="font-label-md text-lg text-white font-bold mb-2">
                Crash &amp; Gimbal Repair
              </h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Replacement of damaged arms, cracked shells, overloaded gimbal ribbon cables, and precision camera lenses.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-200 font-medium mb-6">
                <li className="flex items-center gap-1.5 text-primary-fixed">
                  <span className="material-symbols-outlined text-sm">check</span> Genuine OEM DJI Parts
                </li>
                <li className="flex items-center gap-1.5 text-primary-fixed">
                  <span className="material-symbols-outlined text-sm">check</span> 30-Day Repair Guarantee
                </li>
              </ul>
              <Link
                href="/dji-service"
                className="text-xs font-bold uppercase tracking-wider text-primary-fixed hover:text-white flex items-center gap-1 transition-colors"
              >
                View Repair Directory &rarr;
              </Link>
            </div>

            {/* Micro-Soldering / Core Board */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 relative overflow-hidden hover:shadow-lg transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">memory</span>
              <h3 className="font-label-md text-lg text-on-background font-bold mb-2">
                ESC &amp; Board Soldering
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Component-level motherboard micro-soldering, ESC power chip replacements, and liquid/water damage restoration.
              </p>
              <ul className="space-y-1.5 text-xs text-on-surface font-medium">
                <li className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm">check</span> Ultrasonic PCB Chemical Wash
                </li>
                <li className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm">check</span> Power Management Fixes
                </li>
              </ul>
            </div>

            {/* Obstacle Sensors & Remote */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 relative overflow-hidden hover:shadow-lg transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">sensors</span>
              <h3 className="font-label-md text-lg text-on-background font-bold mb-2">
                Sensors &amp; Controllers
              </h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Optical flow, vision sensor calibration, RC controller stick drift fix, and battery hibernation recovery.
              </p>
              <ul className="space-y-1.5 text-xs text-on-surface font-medium">
                <li className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm">check</span> DJI RC Screen / Stick Fixes
                </li>
                <li className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm">check</span> Fast 24&ndash;48h Turnaround
                </li>
              </ul>
            </div>
          </div>

          {/* Supported DJI Models Strip */}
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-base text-on-background mb-1">
                All DJI Series Supported in Ahmedabad:
              </h4>
              <p className="text-xs text-on-surface-variant">
                DJI Mini 4 Pro, Mini 3/Pro, Air 3, Air 2S, Mavic 3 Pro/Classic, Avata 2, FPV, Phantom 4, Inspire 2, Matrice 350 RTK &amp; Agras.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                href="/dji-service"
                className="w-full sm:w-auto bg-primary text-on-primary font-button text-xs uppercase px-6 py-3 rounded-xl hover:brightness-110 transition-all font-bold text-center"
              >
                Explore All DJI Services
              </Link>
              <a
                href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20DJI%20drone%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-surface text-primary border border-primary/40 font-button text-xs uppercase px-5 py-3 rounded-xl hover:bg-primary/5 transition-all font-bold text-center"
              >
                Instant Repair Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. HOW IT WORKS (4-Step Simple Process)
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest block mb-2 font-bold">
              Seamless Experience
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-background font-bold mb-3">
              How Dronebhai Works
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              From walk-in lab drop-off or doorstep courier to certified flight testing &mdash; simple, transparent, and swift.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 relative">
              <div className="text-primary font-headline-md text-4xl font-bold opacity-30 mb-2">
                01
              </div>
              <h3 className="font-label-md text-base font-bold text-on-background mb-2">
                Intake &amp; Consultation
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Walk into our South Bopal or Tragad labs in Ahmedabad, or book a Pan-India insured courier pickup from your doorstep.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 relative">
              <div className="text-primary font-headline-md text-4xl font-bold opacity-30 mb-2">
                02
              </div>
              <h3 className="font-label-md text-base font-bold text-on-background mb-2">
                Diagnostics &amp; Fixed Quote
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our aerospace engineers perform full flight-log and hardware inspections. You get a transparent written quote with zero hidden charges.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 relative">
              <div className="text-primary font-headline-md text-4xl font-bold opacity-30 mb-2">
                03
              </div>
              <h3 className="font-label-md text-base font-bold text-on-background mb-2">
                Cleanroom Repair &amp; Build
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Factory-trained technicians replace damaged components with 100% genuine OEM parts inside our static-free cleanroom.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 relative">
              <div className="text-primary font-headline-md text-4xl font-bold opacity-30 mb-2">
                04
              </div>
              <h3 className="font-label-md text-base font-bold text-on-background mb-2">
                Flight Test &amp; Handover
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Every drone undergoes 15-point flight verification, IMU calibration, warranty certification, and prompt return handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. WHY CHOOSE US (Trust & Authority)
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest block mb-2 font-bold">
              Unmatched Reliability
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-background font-bold mb-3">
              Why Pilots Choose Dronebhai
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Engineered with aerospace discipline, backed by real physical labs, and trusted by thousands across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "verified",
                title: "100% Genuine OEM Parts",
                desc: "We never use cheap knockoff components. Every motor, ribbon cable, and sensor is factory certified for authentic flight performance.",
              },
              {
                icon: "science",
                title: "2 Dust-Free Physical Labs",
                desc: "Walk-in experience centers in South Bopal and Tragad, Ahmedabad equipped with anti-static workbenches and calibration tools.",
              },
              {
                icon: "engineering",
                title: "10+ Years Aerospace R&D",
                desc: "Backed by Robuzta Techlabs. From micro racing drones to 30L agricultural monsters and defense prototypes.",
              },
              {
                icon: "speed",
                title: "Fast 24–48h Turnaround",
                desc: "We know downtime costs money for commercial pilots. Most repairs are diagnosed and resolved within 1 to 2 business days.",
              },
              {
                icon: "support_agent",
                title: "Live WhatsApp Tracking",
                desc: "Receive real-time photos and flight-test videos of your drone directly on WhatsApp from the engineer working on it.",
              },
              {
                icon: "security",
                title: "30-Day Service Guarantee",
                desc: "All replacement parts and repair work are covered by our 30-day comprehensive service warranty for total peace of mind.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-headline-md text-lg font-bold text-on-background mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. CUSTOMER REVIEWS (Social Proof & Testimonials)
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface-bright border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest block mb-2 font-bold">
              Real Pilot Stories
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-background font-bold mb-3">
              What Our Clients Say
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Trusted by aerial cinematographers, wedding filmmakers, agricultural contractors, and FPV racers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Karan Mehta",
                role: "Wedding & Commercial Cinematographer, Ahmedabad",
                drone: "DJI Mavic 3 Pro",
                review:
                  "I had a bad crash during a destination wedding in Udaipur. The gimbal was detached and arm broken. The Dronebhai team at South Bopal fixed it with genuine parts and calibrated it within 24 hours. Saved my season!",
                rating: 5,
              },
              {
                name: "Ramesh Patel",
                role: "Agricultural Spraying Contractor, Anand",
                drone: "20L AgriSpray Hexacopter",
                review:
                  "Purchased a custom 20L agricultural spraying drone from Dronebhai. The team trained our operators patiently and helped with DGCA guidelines. We've sprayed 400+ acres without a single breakdown.",
                rating: 5,
              },
              {
                name: "Aditya Roy",
                role: "FPV Pilot & Content Creator, Mumbai",
                drone: "CineWhoop 3.5 O3 Pro",
                review:
                  "Dronebhai built and tuned my CineWhoop for indoor hotel fly-throughs. The PID tune was buttery smooth right out of the box. Best drone engineers in India hands down.",
                rating: 5,
              },
            ].map((rev, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed italic mb-6">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-on-background">{rev.name}</h4>
                    <span className="text-[11px] text-on-surface-variant block">{rev.role}</span>
                  </div>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">
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
      <section className="py-14 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest block mb-2 font-bold">
              Got Questions?
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-background font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Quick answers about drone purchases, DJI repair services, turnaround times, and shipping.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you service DJI drones purchased outside India or from unauthorized sellers?",
                a: "Yes! As an independent authorized service center, we service, repair, and diagnose ANY DJI drone regardless of where or when it was purchased (international models, grey market, and pre-owned drones included).",
              },
              {
                q: "How long does a DJI repair take at your Ahmedabad labs?",
                a: "Standard diagnostics take 2 to 4 hours. Common repairs (propellers, arms, gimbal cables, shell swap) are usually completed within 24 to 48 hours. Complex PCB micro-soldering or rare parts take 3 to 5 business days.",
              },
              {
                q: "Can I ship my drone from outside Ahmedabad (e.g., Delhi, Mumbai, Bengaluru)?",
                a: "Absolutely. We offer secure, insured courier intake from all over India. Simply message us on WhatsApp (8002 8003 80), and we will coordinate packaging instructions and courier pickup.",
              },
              {
                q: "Do you provide training and DGCA compliance guidance for commercial drones?",
                a: "Yes. For our commercial, agricultural, and enterprise drone clients, we provide full operator training, Digital Sky portal registration assistance, and maintenance manuals.",
              },
              {
                q: "Are the replacement parts authentic OEM components?",
                a: "Yes, we exclusively use 100% genuine OEM factory parts for all DJI repairs to preserve full flight dynamics, obstacle sensor accuracy, and safety.",
              },
              {
                q: "Can Dronebhai manufacture custom drones for unique payload requirements?",
                a: "Yes! Through our parent aerospace lab Robuzta Techlabs, we design and manufacture custom carbon-fiber airframes, tethered power systems, agricultural sprayers, and specialized sensor rigs.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30"
              >
                <h3 className="font-bold text-sm sm:text-base text-on-background mb-2 flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">help</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FINAL CONTACT CTA (Ultra-Responsive on Phones)
          ============================================================ */}
      <section className="py-14 md:py-20 bg-surface-bright border-t border-outline-variant/30">
        <div className="max-w-5xl mx-auto px-gutter">
          <div className="bg-inverse-surface text-white rounded-3xl p-8 sm:p-12 border border-outline-variant/30 shadow-2xl relative overflow-hidden text-center">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="font-eyebrow text-xs uppercase tracking-widest text-primary-fixed block mb-3 font-bold">
                Get Flight Ready Today
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4">
                Ready to Fly or Need Expert Drone Care?
              </h2>
              <p className="font-body-md text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                Visit our Ahmedabad labs in <strong>South Bopal</strong> and <strong>Tragad</strong>, or talk directly with our senior aerospace engineers for instant advice, diagnostics, and quotes.
              </p>

              {/* Lab Contact Details Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 mb-8 max-w-2xl mx-auto text-xs sm:text-sm text-gray-200">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary-fixed text-lg shrink-0 mt-0.5">location_on</span>
                  <div>
                    <span className="font-bold text-white block">South Bopal &amp; Tragad Labs</span>
                    <span>Ahmedabad, Gujarat 380058</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary-fixed text-lg shrink-0 mt-0.5">schedule</span>
                  <div>
                    <span className="font-bold text-white block">Opening Hours</span>
                    <span>Mon&ndash;Sat: 11:00 AM &ndash; 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Fully Responsive Mobile-Friendly Action Buttons */}
              <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
                <a
                  href="https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20am%20looking%20for%20drone%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[50px] bg-primary text-on-primary font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(0,104,94,0.4)] font-bold text-center"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>WhatsApp 8002 8003 80</span>
                </a>

                <a
                  href="tel:8002800380"
                  className="flex-1 min-h-[50px] bg-white text-on-surface hover:bg-gray-100 font-button text-sm uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all font-bold text-center shadow-md"
                >
                  <span className="material-symbols-outlined text-primary text-lg">phone</span>
                  <span>Call Central Hotline</span>
                </a>

                <Link
                  href="/branches"
                  className="sm:w-auto min-h-[50px] bg-transparent text-gray-300 hover:text-white border border-white/30 font-button text-sm uppercase px-5 py-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <span>Visit Labs</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
