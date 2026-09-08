import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  djiModels,
  getModelBySlug,
  serviceTypes,
  getServiceEntry,
} from "@/lib/data/dji-service";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: Promise<{ model: string }>;
}

export async function generateStaticParams() {
  return djiModels.map((m) => ({ model: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { model: modelSlug } = await params;
  const model = getModelBySlug(modelSlug);
  if (!model) return { title: "Model Not Found | Dronebhai" };

  return {
    title: `${model.label} Repair & Diagnostic Services in Ahmedabad | Dronebhai`,
    description: `Professional repair, diagnostics, and genuine OEM component replacements for ${model.label}. ${model.subtitle || ""}. Fast 24-48h turnaround in Ahmedabad.`,
    alternates: {
      canonical: `/dji-service/${model.slug}`,
    },
    openGraph: {
      title: `${model.label} Repair & Service | Dronebhai Ahmedabad`,
      description: `Specialized diagnostics and repair for ${model.label}. Genuine parts, transparent pricing, and test-flight certification.`,
      url: `https://dronebhai.com/dji-service/${model.slug}`,
      siteName: "Dronebhai",
      type: "website",
      images: [
        {
          url: "/images/drone-flagship-3d.jpg",
          width: 1200,
          height: 630,
          alt: `${model.label} Drone Repair Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${model.label} Repair & Diagnostic Services | Dronebhai`,
      description: `Professional repair, diagnostics, and OEM parts for ${model.label} in Ahmedabad.`,
      images: ["/images/drone-flagship-3d.jpg"],
    },
  };
}

export default async function DjiModelServicePage({ params }: Props) {
  const { model: modelSlug } = await params;
  const model = getModelBySlug(modelSlug);

  if (!model) notFound();

  // Primary diagnostic services for this model
  const availableServices = serviceTypes.map((st) => {
    const entry = getServiceEntry(model.slug, st.slug);
    return {
      slug: st.slug,
      label: st.label,
      icon: st.icon,
      priceRange: entry?.priceRange ?? "Contact for Quote",
      turnaround: entry?.turnaround ?? "2–4 Business Days",
      symptoms: entry?.symptoms ?? [
        `${st.label} fault or damage`,
        "Error codes on flight controller",
        "Performance instability",
      ],
    };
  });

  const structuredData = {
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
          {
            "@type": "ListItem",
            position: 3,
            name: model.label,
            item: `https://dronebhai.com/dji-service/${model.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: `${model.label} Drone Repair & Diagnostics`,
        provider: { "@id": "https://dronebhai.com/#organization" },
        areaServed: [
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "State", name: "Gujarat" },
          { "@type": "Country", name: "India" },
        ],
        serviceType: "Drone Repair & Maintenance",
        description: `Professional repair, diagnostics, and genuine OEM component replacements for ${model.label}.`,
      },
    ],
  };

  const waEnquireText = encodeURIComponent(
    `Hi Dronebhai, I want to enquire about repair and service for my ${model.label}.`
  );
  const waUrl = `https://wa.me/918002800380?text=${waEnquireText}`;

  return (
    <main className="bg-background text-on-background min-h-screen">
      <JsonLd data={structuredData} />

      <div className="max-w-7xl mx-auto px-gutter pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "DJI Services", href: "/dji-service" },
            { label: model.label },
          ]}
          showSchema={false}
        />
      </div>

      {/* ── Hero Header ── */}
      <section className="pt-8 md:pt-12 pb-10 px-gutter max-w-7xl mx-auto">
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="font-eyebrow text-xs text-primary uppercase tracking-widest font-bold block mb-2">
              {model.series} SERIES REPAIR
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
              {model.label} Repair &amp; Diagnostics
            </h1>
            {model.subtitle && (
              <p className="text-base sm:text-lg text-slate-600 font-medium mb-6">
                &ldquo;{model.subtitle}&rdquo;
              </p>
            )}

            {/* Diagnostic Focus Badges */}
            {model.tags && model.tags.length > 0 && (
              <div className="mb-8 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                  Primary Focus:
                </span>
                {model.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg capitalize flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white font-button text-sm uppercase px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Book {model.label} Service</span>
              </a>
              <a
                href="tel:8002800380"
                className="border-2 border-primary/40 text-primary bg-surface/80 hover:bg-primary/5 font-button text-sm uppercase px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">phone</span>
                <span>Call 8002 8003 80</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Model Specific Service & Pricing Grid ── */}
      <section className="py-10 md:py-14 px-gutter max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-7 bg-primary rounded-full" />
          <div>
            <span className="font-eyebrow text-xs text-primary uppercase font-bold tracking-widest block">
              SERVICES AVAILABLE
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-slate-900 font-bold">
              Available Diagnostic &amp; Repair Services for {model.label}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {availableServices.map((service) => {
            const serviceWaText = encodeURIComponent(
              `Hi Dronebhai, I need ${service.label} for my ${model.label}.`
            );
            const serviceWaUrl = `https://wa.me/918002800380?text=${serviceWaText}`;

            return (
              <div
                key={service.slug}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">{service.icon}</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-surface-container px-2.5 py-1 rounded-md">
                      {service.turnaround}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {service.label}
                  </h3>

                  <div className="mb-4 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
                    <span className="text-[10px] uppercase font-bold text-primary block mb-1">
                      Common Symptoms
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.symptoms.slice(0, 3).map((sym, si) => (
                        <li key={si} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-primary text-xs shrink-0 mt-0.5">
                            check
                          </span>
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <a
                      href={serviceWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white font-button text-xs uppercase py-2.5 px-3 rounded-xl text-center font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1 shadow-xs"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>Enquire</span>
                    </a>
                    <Link
                      href={`/dji-service/${model.slug}/${service.slug}`}
                      className="border border-outline-variant/40 hover:border-primary text-primary text-xs font-bold py-2.5 px-3.5 rounded-xl text-center transition-colors bg-surface/80"
                      title="View detailed service page"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Banner Note ── */}
        <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
            We use 100% authentic OEM components with bench testing and diagnostic calibration for all {model.label} repairs at our Ahmedabad labs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            <span>✓ Genuine Parts</span>
            <span>✓ Fast 24-48h Turnaround</span>
            <span>✓ Test-Flight Verification</span>
            <span>✓ Pan-India Service</span>
          </div>
        </div>

        {/* ── Back Navigation ── */}
        <div className="mt-12 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
          <Link
            href="/dji-service"
            className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            All DJI Models &amp; Services
          </Link>
          <a
            href="tel:8002800380"
            className="text-xs text-slate-600 hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            8002 8003 80
          </a>
        </div>
      </section>
    </main>
  );
}
