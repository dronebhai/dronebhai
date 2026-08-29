import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  productCategories,
  getCategoryBySlug,
} from "@/lib/data/categories";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Not Found | Dronebhai" };
  return {
    title: `${cat.label} | Dronebhai — Sales, Custom Builds & Service`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) notFound();

  return (
    <main className="bg-background text-on-background min-h-screen">
      {/* ── Hero Banner ───────────────────────────────────── */}
      <section className="relative w-full min-h-[480px] md:min-h-[540px] flex items-center justify-center text-center overflow-hidden py-16">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 filter brightness-[0.4] transition-all duration-700"
          style={{ backgroundImage: `url('${cat.heroImageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-1" />

        {/* Content */}
        <div className="relative z-10 px-gutter max-w-4xl flex flex-col items-center">
          <span className="font-eyebrow text-eyebrow text-primary-fixed mb-4 tracking-widest uppercase bg-inverse-surface/80 border border-outline-variant/30 px-3.5 py-1.5 rounded-full">
            {cat.eyebrow}
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-white mb-4 drop-shadow-md">
            {cat.heroHeadline}
          </h1>
          <p className="font-body-lg text-body-lg text-gray-200 drop-shadow mb-8 max-w-2xl leading-relaxed">
            {cat.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto bg-primary text-on-primary font-button text-button uppercase px-8 py-3.5 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Models</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a
              href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20am%20interested%20in%20${encodeURIComponent(cat.label)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-surface/90 text-primary border border-primary/30 font-button text-button uppercase px-6 py-3.5 rounded-lg shadow hover:bg-surface transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Ask Our Engineers</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Product Models Grid ───────────────────────────── */}
      <section
        id="products"
        className="px-gutter max-w-7xl mx-auto py-12 md:py-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-8 bg-primary rounded-full" />
          <div>
            <span className="font-eyebrow text-eyebrow text-primary uppercase block">Available Fleet</span>
            <h2 className="font-headline-md text-headline-md text-on-background">
              {cat.sectionHeading}
            </h2>
          </div>
        </div>

        {/* Dynamic Balanced Fleet Grid */}
        <div
          className={`grid grid-cols-1 ${
            cat.products.length >= 3
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "lg:grid-cols-2"
          } gap-8 mb-16`}
        >
          {cat.products.map((product) => (
            <article
              key={product.id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="aspect-video relative bg-surface-container-low flex items-center justify-center overflow-hidden p-6">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-on-primary rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    <span className="font-label-md text-xs font-bold">{product.badge}</span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-md border border-outline-variant/30 text-xs font-bold text-primary shadow-xs">
                  {product.priceRange}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="font-eyebrow text-eyebrow text-primary uppercase mb-1">
                  {product.eyebrow}
                </span>
                <h3 className="font-headline-md text-xl md:text-2xl text-on-background font-bold mb-2">
                  {product.name}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant font-medium mb-4 italic">
                  &ldquo;{product.tagline}&rdquo;
                </p>
                <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Specs Pills */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="text-center">
                      <span className="block text-[11px] text-on-surface-variant uppercase">{s.label}</span>
                      <span className="block font-bold text-xs md:text-sm text-primary">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {product.highlightFeatures.map((hf, i) => (
                    <span key={i} className="text-xs bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-primary">check</span>
                      {hf}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-auto pt-5 border-t border-outline-variant/30">
                  <a
                    href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-on-primary font-button text-xs uppercase py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all font-bold"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Order / Enquire on WhatsApp</span>
                  </a>
                  <a
                    href="tel:8002800380"
                    className="sm:w-auto border border-outline-variant hover:border-primary text-primary font-button text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">phone</span>
                    <span>Call Lab</span>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* If there's only 1 product in category, pair with a custom configuration consultation card */}
          {cat.products.length === 1 && (
            <div className="bg-surface-container-lowest rounded-2xl border-2 border-dashed border-primary/30 p-8 flex flex-col justify-between items-center text-center shadow-xs">
              <div className="my-auto flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                </div>
                <span className="font-eyebrow text-xs uppercase tracking-widest text-primary font-bold mb-2">
                  Bespoke Engineering
                </span>
                <h3 className="font-headline-md text-xl md:text-2xl text-on-background font-bold mb-3">
                  Need Custom Configuration?
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant max-w-md leading-relaxed mb-6">
                  We engineer tailored payload brackets, custom flight batteries, extended video transmission, and specialized sensor arrays for your exact mission.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <span className="text-xs bg-surface-container-low px-3 py-1 rounded-full text-on-surface">Custom CAD Mounts</span>
                  <span className="text-xs bg-surface-container-low px-3 py-1 rounded-full text-on-surface">Telemetry Tuning</span>
                  <span className="text-xs bg-surface-container-low px-3 py-1 rounded-full text-on-surface">Lab Bench Flight Test</span>
                </div>
              </div>

              <a
                href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20a%20custom%20configuration%20for%20${encodeURIComponent(cat.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-on-primary font-button text-xs uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all font-bold shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">engineering</span>
                <span>Consult Senior Aerospace Engineer</span>
              </a>
            </div>
          )}
        </div>

        {/* ── Category Deep Dive & Technical Specifications ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left 2 cols: Description & Features */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-xl md:text-2xl text-on-background font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                About {cat.label}
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                {cat.description}
              </p>
              <h4 className="font-label-md text-sm font-bold uppercase text-on-background tracking-wider mb-3">
                Key Engineering Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-surface p-3 rounded-lg border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-xs md:text-sm text-on-surface-variant">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-xl md:text-2xl text-on-background font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">settings_suggest</span>
                Technical Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-outline-variant/30">
                    {cat.techSpecs.map((spec, i) => (
                      <tr key={i} className="hover:bg-surface/50 transition-colors">
                        <td className="py-3 px-4 font-bold text-on-surface w-1/3 bg-surface/30">{spec.feature}</td>
                        <td className="py-3 px-4 text-on-surface-variant">{spec.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Applications */}
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-xl md:text-2xl text-on-background font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">flight_takeoff</span>
                Key Applications &amp; Use Cases
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.keyApplications.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-outline-variant/20 text-sm font-medium text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base">verified</span>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Who it's for & What's In The Box */}
          <div className="space-y-8">
            {/* Who it's for */}
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
              <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-2 tracking-widest">
                Target Audience
              </span>
              <h3 className="font-headline-md text-xl text-on-background font-bold mb-4">
                Who It&apos;s For
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                {cat.whoItsFor}
              </p>
              <a
                href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20expert%20guidance%20on%20${encodeURIComponent(cat.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-on-primary font-button text-xs py-3.5 px-4 rounded-lg uppercase text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all font-bold shadow-md"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Get Free Consultation</span>
              </a>
            </div>

            {/* In the Box */}
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
              <h4 className="font-headline-md text-lg text-on-background font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
                Standard In-The-Box
              </h4>
              <ul className="space-y-2.5">
                {cat.includedAccessories.map((acc, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-sm">check</span>
                    <span>{acc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Dronebhai Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="font-bold text-base text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">verified_user</span>
                The Dronebhai Guarantee
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                All drones tested before dispatch at our Ahmedabad labs. Complete spare parts support, warranty servicing, and live pilot flight guidance.
              </p>
              <div className="text-xs font-semibold text-primary">
                Authorized Service • Pan-India Delivery
              </div>
            </div>
          </div>
        </div>

        {/* ── Category FAQs ─────────────────────────────────── */}
        {cat.faqs.length > 0 && (
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-eyebrow text-eyebrow text-primary uppercase tracking-widest block mb-1">
                Common Questions
              </span>
              <h3 className="font-headline-md text-2xl text-on-background font-bold">
                {cat.label} FAQs
              </h3>
            </div>
            <div className="space-y-4">
              {cat.faqs.map((faq, idx) => (
                <div key={idx} className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30">
                  <h4 className="font-bold text-sm md:text-base text-on-background mb-2 flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">help</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="font-body-md text-xs md:text-sm text-on-surface-variant pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── All Categories Breadcrumb Navigation ─────────── */}
        <div className="pt-8 border-t border-outline-variant/30 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-label-md text-sm text-primary font-bold hover:underline"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            View All 16 Categories
          </Link>
          <a
            href="tel:8002800380"
            className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">call</span>
            Need help choosing? Call 8002 8003 80
          </a>
        </div>
      </section>
    </main>
  );
}
