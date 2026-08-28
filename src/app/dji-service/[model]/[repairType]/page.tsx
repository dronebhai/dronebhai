import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllRepairCombinations,
  getRepairEntry,
  getModelBySlug,
  getRepairTypeBySlug,
} from "@/lib/data/dji-service";

interface Props {
  params: Promise<{ model: string; repairType: string }>;
}

export async function generateStaticParams() {
  return getAllRepairCombinations();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { model, repairType } = await params;
  const entry = getRepairEntry(model, repairType);
  const modelData = getModelBySlug(model);
  const repairTypeData = getRepairTypeBySlug(repairType);

  if (entry) {
    return {
      title: entry.pageTitle,
      description: entry.heroSubtitle,
    };
  }

  if (modelData && repairTypeData) {
    return {
      title: `${modelData.label} ${repairTypeData.label} | Dronebhai`,
      description: `Expert ${repairTypeData.label} service for your ${modelData.label} at Dronebhai — DJI authorized repair centre in Ahmedabad.`,
    };
  }

  return { title: "DJI Repair | Dronebhai" };
}

export default async function DjiRepairDetailPage({ params }: Props) {
  const { model: modelSlug, repairType: repairTypeSlug } = await params;

  const modelData = getModelBySlug(modelSlug);
  const repairTypeData = getRepairTypeBySlug(repairTypeSlug);

  if (!modelData || !repairTypeData) notFound();

  const entry = getRepairEntry(modelSlug, repairTypeSlug);

  // ── Fallback content for extended model × repair combinations ──
  const headline = entry?.heroHeadline ?? `${modelData.label} ${repairTypeData.label}.`;
  const subtitle =
    entry?.heroSubtitle ??
    `Professional ${repairTypeData.label} for your ${modelData.label}. Factory-trained technicians, genuine OEM parts, and guaranteed turnaround.`;
  const heroImageUrl =
    entry?.heroImageUrl ??
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow";
  const heroImageAlt =
    entry?.heroImageAlt ??
    `DJI ${modelData.label} ${repairTypeData.label} service at Dronebhai authorized repair centre`;
  const priceRange = entry?.priceRange ?? "Contact for quote";
  const turnaround = entry?.turnaround ?? "2–5 Business Days";
  const symptoms = entry?.symptoms ?? [
    `${repairTypeData.label} fault detected`,
    "Error codes related to this component",
    "Performance degradation",
    "Physical damage to the component",
  ];
  const repairSteps = entry?.repairSteps ?? [
    { step: "Initial Diagnosis",   description: "Full hardware and firmware assessment to identify the root cause." },
    { step: "OEM Parts Sourced",    description: `Genuine DJI ${modelData.label} replacement parts ordered if not in stock.` },
    { step: "Expert Repair",        description: "Factory-trained technician performs the replacement in our dust-free facility." },
    { step: "Quality Flight Test",  description: "Complete flight verification before your drone is returned." },
  ];
  const faqs = entry?.faqs ?? [
    {
      q: "Do you use genuine DJI parts?",
      a: "Yes — we only use authorized OEM DJI components for all repairs, ensuring your drone's performance matches factory specifications.",
    },
    {
      q: "How do I get started?",
      a: "WhatsApp us on 8002 8003 80 or walk into either of our Ahmedabad labs. We'll provide a written quote within the same business day.",
    },
  ];

  return (
    <main className="bg-background text-on-background antialiased overflow-x-hidden">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-gutter py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-section-gap-mobile md:mb-section-gap-desktop">
          {/* Left — Copy */}
          <div className="order-2 md:order-1">
            <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-4">
              Service Details
            </span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-6">
              {headline}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918002800380"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary font-button text-button px-6 py-3 rounded uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,150,136,0.2)]"
              >
                <span className="material-symbols-outlined">build</span>
                Book Repair
              </a>
              <div className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-outline-variant text-on-surface-variant font-button text-button rounded">
                <span>Est: {priceRange}</span>
              </div>
            </div>

            <p className="text-sm text-on-surface-variant mt-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">
                schedule
              </span>
              Turnaround Time: {turnaround}
            </p>
          </div>

          {/* Right — Image */}
          <div className="order-1 md:order-2 rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low">
            <img
              src={heroImageUrl}
              alt={heroImageAlt}
              className="w-full h-[400px] object-cover mix-blend-multiply"
            />
          </div>
        </div>

        {/* ── Symptoms & Process Bento ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-gap-mobile md:mb-section-gap-desktop">
          {/* Symptoms */}
          <div className="md:col-span-1 bg-surface-container-low rounded-xl p-8 border border-outline-variant/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
            <h3 className="font-headline-md text-headline-md text-on-background mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-error">
                warning
              </span>
              Common Symptoms
            </h3>
            <ul className="space-y-4">
              {symptoms.map((symptom, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-on-surface-variant font-body-md text-body-md"
                >
                  <span
                    className="material-symbols-outlined text-outline mt-1 text-sm"
                  >
                    close
                  </span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          {/* Repair Process */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 border border-outline-variant/50">
            <h3 className="font-headline-md text-headline-md text-on-background mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                precision_manufacturing
              </span>
              Repair Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {repairSteps.map((step, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-0 text-primary font-headline-md opacity-20">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-label-md text-label-md text-on-background mb-2">
                    {step.step}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Why Dronebhai ──────────────────────────────── */}
        <section className="mb-section-gap-mobile md:mb-section-gap-desktop text-center max-w-3xl mx-auto">
          <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-4">
            Why Dronebhai
          </span>
          <h2 className="font-headline-md text-headline-md text-on-background mb-10">
            Authorized Precision
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: "verified", title: "DJI-Certified Parts", desc: "Only original components used." },
              { icon: "air",      title: "Dust-Free Lab",        desc: "Sensor cleaning environment." },
              { icon: "tune",     title: "Expert Calibration",   desc: "Software alignment post-repair." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center max-w-[200px]"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-4">
                  {item.icon}
                </span>
                <h4 className="font-label-md text-label-md mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQs ───────────────────────────────────────── */}
        {faqs.length > 0 && (
          <section className="mb-section-gap-mobile md:mb-section-gap-desktop max-w-2xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-on-background mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6"
                >
                  <h4 className="font-label-md text-label-md text-on-background mb-3 flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                      help
                    </span>
                    {faq.q}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Back link ──────────────────────────────────── */}
        <div className="text-center">
          <Link
            href="/dji-service"
            className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            All DJI Services
          </Link>
        </div>
      </section>
    </main>
  );
}
