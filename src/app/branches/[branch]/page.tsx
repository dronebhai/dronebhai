import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { branchesData, getBranchBySlug } from "@/lib/data/branches";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: Promise<{ branch: string }>;
}

export async function generateStaticParams() {
  return branchesData.map((b) => ({
    branch: b.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { branch: branchSlug } = await params;
  const branch = getBranchBySlug(branchSlug);

  if (!branch) {
    return {
      title: "Branch Not Found | Dronebhai",
    };
  }

  const nearbyList = branch.nearbyLocations.slice(0, 5).map((l) => l.name).join(", ");
  const title = `${branch.name} | Drone Sales & DJI Service Center | Dronebhai`;
  const description = `Visit Dronebhai's ${branch.name} at ${branch.address.area}, Ahmedabad (${branch.address.pincode}). Serving pilots across ${nearbyList}. Authorized DJI service, genuine OEM spares & drone sales.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/branches/${branch.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://dronebhai.com/branches/${branch.slug}`,
      siteName: "Dronebhai",
      images: [
        {
          url: branch.mapImageUrl || "/images/about-lab.jpg",
          width: 1200,
          height: 630,
          alt: `${branch.name} — Dronebhai Ahmedabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [branch.mapImageUrl || "/images/about-lab.jpg"],
    },
    other: {
      "geo.region": "IN-GJ",
      "geo.placename": `${branch.address.area}, Ahmedabad`,
      "geo.position": `${branch.geo.latitude};${branch.geo.longitude}`,
      ICBM: `${branch.geo.latitude}, ${branch.geo.longitude}`,
    },
  };
}

export default async function BranchDetailPage({ params }: Props) {
  const { branch: branchSlug } = await params;
  const branch = getBranchBySlug(branchSlug);

  if (!branch) {
    notFound();
  }

  const otherBranch = branchesData.find((b) => b.slug !== branch.slug);

  const branchStructuredData = {
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
          {
            "@type": "ListItem",
            position: 3,
            name: branch.name,
            item: `https://dronebhai.com/branches/${branch.slug}`,
          },
        ],
      },
      {
        "@type": "ElectronicsStore",
        "@id": `https://dronebhai.com/branches/${branch.slug}#store`,
        name: `Dronebhai - ${branch.name}`,
        url: `https://dronebhai.com/branches/${branch.slug}`,
        description: branch.tagline,
        telephone: branch.phone,
        email: branch.email,
        priceRange: "₹₹₹ - ₹₹₹₹",
        image: "https://dronebhai.com/images/about-lab.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.address.street,
          addressLocality: branch.address.area,
          addressRegion: branch.address.state,
          postalCode: branch.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: branch.geo.latitude,
          longitude: branch.geo.longitude,
        },
        openingHoursSpecification: branch.openingHours.map((oh) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: oh.days,
          opens: oh.opens,
          closes: oh.closes,
        })),
        areaServed: branch.nearbyLocations.map((loc) => ({
          "@type": "AdministrativeArea",
          name: `${loc.name}, Ahmedabad`,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Drone Sales & Service Catalog",
          itemListElement: branch.servicesOffered.map((s, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
            },
          })),
        },
      },
    ],
  };

  const waEnquiryText = encodeURIComponent(
    `Hi Dronebhai, I want to visit the ${branch.name} for drone service / sales.`
  );
  const waUrl = `https://wa.me/918002800380?text=${waEnquiryText}`;

  return (
    <main className="min-h-screen bg-background text-on-background py-8 md:py-16">
      <JsonLd data={branchStructuredData} />

      {/* ── Breadcrumb Navigation ── */}
      <div className="max-w-7xl mx-auto px-gutter mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Branches", href: "/branches" },
            { label: branch.name },
          ]}
          showSchema={false}
        />
      </div>

      {/* ── 1. BRANCH HERO ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-gutter mb-12">
        <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Info & Triggers (7 Cols) */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {branch.badge}
              </span>

              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                {branch.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {branch.tagline}
              </p>

              {/* Address & Timings Card */}
              <div className="bg-surface-container-low/60 rounded-2xl p-4 border border-outline-variant/30 space-y-3 mb-6 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                    apartment
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Laboratory Address:</strong>
                    <address className="not-italic text-slate-600 leading-relaxed">
                      {branch.address.fullFormatted}
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    schedule
                  </span>
                  <div>
                    <strong className="text-slate-900 font-semibold">Working Hours: </strong>
                    <span className="text-slate-600">{branch.hours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">
                    phone
                  </span>
                  <div>
                    <strong className="text-slate-900 font-semibold">Hotline: </strong>
                    <a href="tel:8002800380" className="text-primary font-bold hover:underline">
                      8002 8003 80
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full">
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] bg-primary text-white font-button text-xs uppercase px-5 py-3 rounded-xl font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <span className="material-symbols-outlined text-base">directions</span>
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] bg-surface-container text-primary hover:bg-surface-container-high font-button text-xs uppercase px-5 py-3 rounded-xl font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-outline-variant/40 text-center"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp Lab</span>
                </a>

                <a
                  href="tel:8002800380"
                  className="w-full sm:w-auto min-h-[44px] bg-surface text-slate-700 hover:bg-surface-container font-button text-xs uppercase px-4 py-3 rounded-xl font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 border border-outline-variant/40 text-center"
                >
                  <span className="material-symbols-outlined text-base text-primary">phone</span>
                  <span>Call 8002 8003 80</span>
                </a>
              </div>
            </div>

            {/* Right Col: Map & Landmarks (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface-container relative shadow-md">
                <img
                  src={branch.mapImageUrl}
                  alt={branch.mapImageAlt}
                  className="w-full h-64 sm:h-72 object-cover"
                />
                
                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-outline-variant/20">
                  <h4 className="font-bold text-xs text-slate-900 mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-sm">explore</span>
                    Key Landmark Access
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {branch.landmarks.map((lm, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{lm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. NEARBY LOCATIONS SERVED (LOCAL SEO CATCHMENT) ── */}
      <section className="max-w-7xl mx-auto px-gutter mb-14">
        <div className="bg-surface-container-low rounded-3xl p-6 sm:p-10 border border-outline-variant/30">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-1 font-bold">
              Catchment Areas &amp; Transit Times
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">
              Nearby Locations Served from {branch.address.area}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Pilots and commercial UAV operators from across these Ahmedabad &amp; Gujarat localities visit our {branch.address.area} hub for quick diagnostics and authorized support.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {branch.nearbyLocations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-outline-variant/30 shadow-2xs flex flex-col justify-between hover:border-primary/40 hover:shadow-xs transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-slate-900">
                    {loc.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {loc.travelTime}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Distance: <strong>{loc.distance}</strong></span>
                  <span className="text-slate-400">({loc.direction})</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            Need doorstep courier pickup instead? We provide insured round-trip pickup across all Ahmedabad pincodes and pan-India.
          </p>
        </div>
      </section>

      {/* ── 3. SERVICES AT THIS LAB ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-gutter mb-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-eyebrow text-xs text-primary uppercase tracking-widest block mb-1 font-bold">
            On-Site Capabilities
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">
            Services Available at {branch.address.area}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {branch.servicesOffered.map((srv, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl">{srv.icon}</span>
                </div>
                <h3 className="font-headline text-base font-bold text-slate-900 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. BRANCH FAQS & OTHER LAB ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQs (7 Cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-headline text-xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions — {branch.address.area} Branch
            </h3>
            <div className="space-y-3">
              {branch.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/30"
                >
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1.5 flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">
                      help
                    </span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Switch to Other Branch Card (5 Cols) */}
          {otherBranch && (
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Alternative Ahmedabad Location
              </span>
              <h3 className="font-headline text-xl font-bold text-white mb-2">
                Also Visit Our {otherBranch.address.area} Hub
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {otherBranch.tagline} Located at {otherBranch.address.street}.
              </p>

              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700 mb-6 text-xs space-y-1">
                <div className="text-slate-200">
                  <strong>Serving:</strong> {otherBranch.nearbyLocations.slice(0, 4).map((l) => l.name).join(", ")}
                </div>
                <div className="text-emerald-400 font-mono text-[11px]">
                  Mon–Sat: 11AM–7PM
                </div>
              </div>

              <Link
                href={`/branches/${otherBranch.slug}`}
                className="w-full bg-primary text-white font-button text-xs uppercase py-3 rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>View {otherBranch.address.area} Page</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
