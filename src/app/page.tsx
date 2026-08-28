import Link from "next/link";
import { productCategories } from "@/lib/data/categories";

// Show only the 4 featured categories on the home carousel (matching Stitch export)
const featuredCategories = [
  productCategories.find((c) => c.slug === "professional-drones")!,
  productCategories.find((c) => c.slug === "racing-drones")!,
  productCategories.find((c) => c.slug === "agricultural-drones")!,
  productCategories.find((c) => c.slug === "kids-drones")!,
];

export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative w-full h-[707px] md:h-[795px] flex items-center justify-center overflow-hidden bg-surface-container-low">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="bg-cover bg-center w-full h-full opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDazgX7F6DQ7wIzjHG4kal8TegQCy2TLUjD0OiQnlF3_JqNHOHEkU6_TDWEx4_vAVnquKMNs8wkzv4K2O7dbawGnahoziUu9ntSC5CZ_PlSdgwmm19wXeBdjsTWgN0kkJpHSpBM8eQXub38QixydOFRAxmleSKKjeylTq2EohmneQlaGKlpTLMEUVxo6qLTNSbOrCEBO7bit6lpRp7TKJ7bW1dQbmxm9jP-iBCLaPt3nKhDd3LmrxtMiQ')",
            }}
          />
          {/* HUD Grid Overlay */}
          <div className="absolute inset-0 hud-grid" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-gutter max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-eyebrow text-eyebrow text-primary uppercase mb-4 tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Authorized Experts
            <span className="w-8 h-px bg-primary" />
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-6">
            Your Drone Partners in Precision
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
            High-end technical equipment, certified service, and custom
            manufacturing. Experience the pinnacle of aerospace retail.
          </p>
          <Link
            href="/products"
            className="bg-[#009688] text-white font-button text-button uppercase py-4 px-8 rounded flex items-center gap-2 hover:bg-primary-container transition-colors shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
          >
            Explore the Fleet
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ── Trust Badge Strip ─────────────────────────────── */}
      <section className="bg-surface border-y border-outline-variant/30 py-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-gutter flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-16 items-center divide-x divide-outline-variant/30">
          <div className="flex items-center gap-3 px-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              location_city
            </span>
            <span className="font-label-md text-label-md text-on-background">
              2 Ahmedabad Labs
            </span>
          </div>
          <div className="flex items-center gap-3 pl-8 md:pl-16">
            <span className="material-symbols-outlined text-primary text-3xl">
              precision_manufacturing
            </span>
            <span className="font-label-md text-label-md text-on-background">
              DJI Specialist Repair
            </span>
          </div>
          <div className="flex items-center gap-3 pl-8 md:pl-16 w-full md:w-auto justify-center md:justify-start border-l-0 md:border-l mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-3xl">
              engineering
            </span>
            <span className="font-label-md text-label-md text-on-background">
              Custom Manufacturing
            </span>
          </div>
        </div>
      </section>

      {/* ── Product Categories Carousel ───────────────────── */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-bright">
        <div className="max-w-7xl mx-auto px-gutter mb-12 flex items-center gap-4">
          <div className="w-1 h-8 bg-[#009688]" />
          <div>
            <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-1">
              Fleet Classification
            </span>
            <h2 className="font-headline-md text-headline-md text-on-background">
              Product Categories
            </h2>
          </div>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="w-full overflow-x-auto no-scrollbar pl-gutter pb-8">
          <div className="flex gap-4 w-max pr-gutter">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="w-64 bg-surface-container-low border border-outline-variant/30 rounded-lg overflow-hidden flex flex-col group cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="h-40 bg-surface relative overflow-hidden flex items-center justify-center p-4">
                  <div
                    className="bg-cover bg-center w-full h-full absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${cat.heroImageUrl}')` }}
                  />
                </div>
                <div className="p-4 bg-white border-t border-outline-variant/30 flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-background">
                    {cat.shortLabel}
                  </span>
                  <span className="material-symbols-outlined text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}

            {/* "View All" card */}
            <Link
              href="/products"
              className="w-64 bg-primary/5 border-2 border-dashed border-primary/30 rounded-lg overflow-hidden flex flex-col items-center justify-center p-8 group cursor-pointer hover:border-primary/60 hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-3">
                grid_view
              </span>
              <span className="font-label-md text-label-md text-primary text-center">
                View All 16 Categories
              </span>
              <span className="material-symbols-outlined text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DJI Service Spotlight (Bento Grid) ───────────── */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface hud-grid relative">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="font-eyebrow text-eyebrow text-primary uppercase mb-2 block tracking-widest">
              Authorized Workshop
            </span>
            <h2 className="font-headline-md text-headline-md text-on-background mb-4">
              Expert DJI Care
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto bg-white/50 backdrop-blur-sm p-4 rounded border border-outline-variant/30">
              We service any DJI drone, regardless of purchase source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Servicing */}
            <div className="bg-[#F5F7F8] border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 text-primary opacity-20">
                <span className="material-symbols-outlined text-6xl">
                  build_circle
                </span>
              </div>
              <span className="material-symbols-outlined text-primary mb-4 text-3xl block">
                build
              </span>
              <h3 className="font-label-md text-label-md text-on-background mb-2">
                Servicing
              </h3>
              <ul className="space-y-2 mt-4 font-body-md text-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Comprehensive Checks
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Firmware Updates
                </li>
              </ul>
            </div>

            {/* Repair — dark featured card */}
            <div className="bg-[#111d23] text-white rounded-xl p-6 relative overflow-hidden shadow-[0_4px_14px_rgba(0,150,136,0.15)] md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4 text-[#009688] opacity-20">
                <span className="material-symbols-outlined text-6xl">
                  home_repair_service
                </span>
              </div>
              <span className="material-symbols-outlined text-[#009688] mb-4 text-3xl block">
                home_repair_service
              </span>
              <h3 className="font-label-md text-label-md mb-2">Repair</h3>
              <ul className="space-y-2 mt-4 font-body-md text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Hardware Replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Calibration
                </li>
              </ul>
              <Link
                href="/dji-service"
                className="mt-6 text-[#009688] font-button text-sm uppercase tracking-wider flex items-center gap-1 hover:text-white transition-colors"
              >
                Book Repair{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Diagnostics */}
            <div className="bg-[#F5F7F8] border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 text-primary opacity-20">
                <span className="material-symbols-outlined text-6xl">
                  troubleshoot
                </span>
              </div>
              <span className="material-symbols-outlined text-primary mb-4 text-3xl block">
                troubleshoot
              </span>
              <h3 className="font-label-md text-label-md text-on-background mb-2">
                Diagnostics
              </h3>
              <ul className="space-y-2 mt-4 font-body-md text-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Error Log Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Sensor Testing
                </li>
              </ul>
            </div>

            {/* Maintenance */}
            <div className="bg-[#F5F7F8] border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 text-primary opacity-20">
                <span className="material-symbols-outlined text-6xl">
                  engineering
                </span>
              </div>
              <span className="material-symbols-outlined text-primary mb-4 text-3xl block">
                engineering
              </span>
              <h3 className="font-label-md text-label-md text-on-background mb-2">
                Maintenance
              </h3>
              <ul className="space-y-2 mt-4 font-body-md text-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Deep Cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#009688] text-sm">
                    check
                  </span>
                  Motor Lubrication
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/dji-service"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-button text-button uppercase py-4 px-8 rounded-lg hover:brightness-110 transition-all shadow-[0_4px_14px_rgba(0,150,136,0.3)]"
            >
              View All DJI Services
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
