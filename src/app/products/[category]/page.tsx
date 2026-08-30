import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  productCategories,
  getCategoryBySlug,
} from "@/lib/data/categories";
import JsonLd from "@/components/JsonLd";

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
    title: `${cat.label} — Buy, Custom Builds & Service | Dronebhai India`,
    description: `${cat.description} Explore certified models, high-performance flight specs, genuine parts, and custom aerospace engineering.`,
    alternates: {
      canonical: `/products/${cat.slug}`,
    },
    openGraph: {
      title: `${cat.label} | Dronebhai Drone Store India`,
      description: cat.description,
      url: `https://dronebhai.com/products/${cat.slug}`,
      siteName: "Dronebhai",
      images: [
        {
          url: cat.heroImageUrl,
          alt: cat.heroImageAlt || cat.label,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.label} | Dronebhai`,
      description: cat.description,
      images: [cat.heroImageUrl],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) notFound();

  const categoryStructuredData = {
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
            name: "Products",
            item: "https://dronebhai.com/products",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: cat.label,
            item: `https://dronebhai.com/products/${cat.slug}`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: `${cat.label} Fleet — Dronebhai`,
        description: cat.description,
        numberOfItems: cat.products.length,
        itemListElement: cat.products.map((p, idx) => ({
          "@type": "Product",
          position: idx + 1,
          name: p.name,
          description: p.description || p.tagline,
          image: p.imageUrl,
          brand: {
            "@type": "Brand",
            name: p.eyebrow || "Dronebhai",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: p.priceRange?.replace(/[^0-9]/g, "") || "9999",
            availability: "https://schema.org/InStock",
            seller: {
              "@id": "https://dronebhai.com/#organization",
            },
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-background text-on-background min-h-screen">
      <JsonLd data={categoryStructuredData} />
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
        className="px-gutter max-w-7xl mx-auto py-10 md:py-14"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-6 bg-primary rounded-full" />
          <h2 className="font-headline text-xl sm:text-2xl text-slate-900 font-bold">
            {cat.sectionHeading}
          </h2>
        </div>

        {/* Dynamic Balanced Fleet Grid */}
        <div
          className={`grid grid-cols-1 ${
            cat.products.length >= 3
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "lg:grid-cols-2"
          } gap-6 mb-12`}
        >
          {cat.products.map((product) => (
            <article
              key={product.id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col group hover:shadow-lg hover:border-primary/40 transition-all"
            >
              {/* Image Banner */}
              <div className="aspect-video relative bg-surface-container-low flex items-center justify-center overflow-hidden p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-primary text-white rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-xs">
                    <span className="font-bold text-[10px] uppercase">{product.badge}</span>
                  </div>
                )}
                <div className="absolute bottom-2.5 left-2.5 bg-surface/90 backdrop-blur-md px-2.5 py-0.5 rounded border border-outline-variant/30 text-xs font-bold text-primary">
                  {product.priceRange}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-slate-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3 italic">
                  &ldquo;{product.tagline}&rdquo;
                </p>

                {/* Key Specs Pills */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-2.5 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="text-center">
                      <span className="block text-[10px] text-slate-500 uppercase">{s.label}</span>
                      <span className="block font-bold text-xs text-primary">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {product.highlightFeatures.map((hf, i) => (
                    <span key={i} className="text-[11px] bg-surface-container px-2 py-0.5 rounded text-slate-600 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-primary">check</span>
                      {hf}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-outline-variant/20">
                  <a
                    href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-button text-xs uppercase py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 font-bold transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Order on WhatsApp</span>
                  </a>
                  <a
                    href="tel:8002800380"
                    className="border border-outline-variant/40 hover:border-primary text-primary font-button text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">phone</span>
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Category Deep Dive & Technical Specifications ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Left 2 cols: Description & Tech Specs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">info</span>
                Overview
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {cat.description}
              </p>
              <h4 className="text-xs font-bold uppercase text-slate-800 tracking-wider mb-2">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cat.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 bg-surface p-2 rounded-lg border border-outline-variant/20 text-xs text-slate-700">
                    <span className="material-symbols-outlined text-primary text-sm shrink-0">check_circle</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">settings_suggest</span>
                Technical Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-outline-variant/20">
                    {cat.techSpecs.map((spec, i) => (
                      <tr key={i}>
                        <td className="py-2.5 px-3 font-semibold text-slate-900 w-1/3 bg-surface/50">{spec.feature}</td>
                        <td className="py-2.5 px-3 text-slate-600">{spec.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Col: Consultation & Included in Box */}
          <div className="space-y-6">
            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
              <span className="text-[10px] font-bold text-primary uppercase block mb-1">Target Audience</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Who It&apos;s For</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {cat.whoItsFor}
              </p>
              <a
                href={`https://wa.me/918002800380?text=Hi%20Dronebhai,%20I%20need%20expert%20guidance%20on%20${encodeURIComponent(cat.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-white font-button text-xs py-2.5 px-3 rounded-lg uppercase text-center flex items-center justify-center gap-1.5 font-bold transition-all"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Get Consultation</span>
              </a>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">inventory_2</span>
                In-The-Box
              </h4>
              <ul className="space-y-1.5">
                {cat.includedAccessories.map((acc, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="material-symbols-outlined text-primary text-xs">check</span>
                    <span>{acc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Category FAQs ─────────────────────────────────── */}
        {cat.faqs.length > 0 && (
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-bold text-lg text-slate-900">
                {cat.label} FAQs
              </h3>
            </div>
            <div className="space-y-3">
              {cat.faqs.map((faq, idx) => (
                <div key={idx} className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 flex items-center gap-2">
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
        )}

        {/* ── Navigation ─────────── */}
        <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            All 16 Categories
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
