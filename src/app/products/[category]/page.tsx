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
    title: `${cat.label} | Dronebhai`,
    description: cat.description,
  };
}

// Representative products per category — uses Stitch AIDA image placeholders
function getSampleProducts(slug: string) {
  return [
    {
      id: 1,
      eyebrow: "FLAGSHIP MODEL",
      name: "Premium Series I",
      description: "The most capable model in this category, built for professionals.",
      price: null,
      badge: "Best Seller",
      imageUrl: `https://lh3.googleusercontent.com/aida-public/AB6AXuCQg349XlEBNkuwt_MRTHSrdwviPzZR_WZxzPKoFNx16Fy-iHS9YEJRyfTZ8H2o7ypkJJbki0uYbBZcjtyVqJXIkgwGZr4j2Dajg7siG1p-Do3Gi8yJY8ZVWub6BH8kbsOEUCSxSs6rZnp-IMmNG7Ir3bNmhv_97OfTLhGPbDrogRVLqdA6nEhdjaheZrP2JUaMD9hZEjMLy_luHfYeaRfqBScd7V4volV5dR6XS-E0_o2ogRO7VC4Y0A`,
    },
    {
      id: 2,
      eyebrow: "ADVANCED SERIES",
      name: "Advanced Series II",
      description: "Dual primary cameras, omnidirectional obstacle sensing.",
      price: null,
      badge: null,
      imageUrl: `https://lh3.googleusercontent.com/aida-public/AB6AXuCkEolNXbjUJQCRmgQ5Hmf_QXV53hvcun6ONkX7BdEA0VbF-gWgcg7aFeE1etpi4CosLvl295dYI4anKNN8ZyDpIF3IJuQtxq50C5VEuoB_aw2hljSVefMH78zin7ojdf_Kh079qf2moFo6Jx2PqRycBHF0SRb0V9lqoRnjEroWt4a8JXwu9FX3mk-xaUatVG3Ir3814Z56vjBT68qBotETUwX6kwgsWmACOQDlGwyduiJVgOfFzJ7Jlg`,
    },
  ];
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) notFound();

  const products = getSampleProducts(category);

  return (
    <main className="bg-background text-on-background min-h-screen">
      {/* ── Hero Banner ───────────────────────────────────── */}
      <section className="relative w-full h-[530px] md:h-[618px] flex items-center justify-center text-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 brightness-75"
          style={{ backgroundImage: `url('${cat.heroImageUrl}')` }}
        />

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl flex flex-col items-center">
          <span className="font-eyebrow text-eyebrow text-primary-fixed mb-4 tracking-widest uppercase bg-inverse-surface/80 px-3 py-1 rounded">
            {cat.eyebrow}
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-white mb-6 drop-shadow-lg">
            {cat.heroHeadline}
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 drop-shadow-md mb-8 max-w-xl">
            {cat.heroSubtitle}
          </p>
          <a
            href="#products"
            className="bg-primary text-on-primary font-button text-button uppercase px-8 py-4 rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            Explore Collection
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────── */}
      <section
        id="products"
        className="px-gutter max-w-7xl mx-auto py-section-gap-mobile md:py-section-gap-desktop"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-6 bg-primary rounded" />
          <h2 className="font-headline-md text-headline-md text-on-background">
            {cat.sectionHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video relative bg-surface-container-low flex items-center justify-center overflow-hidden p-6">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-surface-container/80 backdrop-blur rounded px-2 py-1 flex items-center gap-1 border border-outline-variant/50">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      star
                    </span>
                    <span className="font-label-md text-[12px] text-on-surface">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <span className="font-eyebrow text-eyebrow text-tertiary mb-2">
                  {product.eyebrow}
                </span>
                <h3 className="font-headline-md text-[20px] leading-[28px] text-on-background mb-2">
                  {product.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="https://wa.me/918002800380"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">
                      chat
                    </span>
                    Enquire on WhatsApp
                  </a>
                  <button className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Category Description */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left — description */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 border border-outline-variant/30">
            <h3 className="font-headline-md text-headline-md text-on-background mb-4">
              About {cat.label}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              {cat.description}
            </p>
            <ul className="space-y-3">
              {cat.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — who it's for */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/30 flex flex-col">
            <span className="font-eyebrow text-eyebrow text-primary uppercase block mb-3">
              Who It&apos;s For
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant flex-1">
              {cat.whoItsFor}
            </p>
            <a
              href="https://wa.me/918002800380"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-primary text-on-primary font-button text-button py-3 px-6 rounded uppercase text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Get Expert Advice
            </a>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb back nav ───────────────────────────── */}
      <div className="px-gutter max-w-7xl mx-auto pb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm">
            arrow_back
          </span>
          All Products
        </Link>
      </div>
    </main>
  );
}
