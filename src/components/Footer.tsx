import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container w-full border-t border-outline-variant/40">
      <div className="w-full py-12 md:py-16 px-gutter max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 font-body-md text-on-surface-variant">
        {/* Brand & Identity */}
        <div className="flex flex-col items-start lg:col-span-1 sm:col-span-2">
          <Link href="/" className="flex items-center mb-4 group">
            <Image
              src="/logo-with-font.png"
              alt="Dronebhai"
              width={1767}
              height={183}
              style={{ width: "auto" }}
              className="h-7 sm:h-8 w-auto max-w-[170px] sm:max-w-[190px] object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
            Your Drone Partners in Precision. Authorized DJI Service Centre, Custom UAV Engineering &amp; Enterprise Drone Sales.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full mb-3 border border-primary/20">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Sanuma India Pvt. Ltd.
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-primary">schedule</span>
            Mon–Sat: 11:00 AM – 7:00 PM
          </div>
        </div>

        {/* DJI Services & Sales */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
            DJI &amp; Services
          </span>
          <Link
            href="/dji-service"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            DJI Drone Services
          </Link>
          <Link
            href="/dji-sale"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            Buy DJI Drones
          </Link>
          <Link
            href="/products"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            Custom UAV Builds
          </Link>
          <Link
            href="/dji-service"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            Gimbal &amp; Sensor Calibration
          </Link>
        </div>

        {/* Branches & Labs */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
            Branch Labs
          </span>
          <Link
            href="/branches/south-bopal"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            South Bopal Flagship Lab
          </Link>
          <Link
            href="/branches/tragad"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            Tragad North Hub
          </Link>
          <Link
            href="/branches"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            All Branch Locations
          </Link>
          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
            Serving Bopal, Chandkheda, GIFT City &amp; Gandhinagar
          </p>
        </div>

        {/* Company & SEO Links */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
            Navigation &amp; Index
          </span>
          <Link
            href="/about"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            Products Catalog
          </Link>
          <Link
            href="/sitemap"
            className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-all duration-150 hover:translate-x-0.5 inline-block py-0.5"
          >
            Sitemap Directory
          </Link>
        </div>

        {/* Contact & Hotline */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-0.5">
            Contact &amp; Hotline
          </span>
          <a
            href="tel:8002800380"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary font-bold hover:brightness-110 transition-colors"
          >
            <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[16px]">phone</span>
            </span>
            8002 8003 80
          </a>
          <a
            href="https://wa.me/918002800380"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 hover:text-primary transition-colors"
          >
            <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[16px]">chat</span>
            </span>
            WhatsApp Support
          </a>
          <a
            href="mailto:hello@dronebhai.com"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 hover:text-primary transition-colors"
          >
            <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[16px]">mail</span>
            </span>
            hello@dronebhai.com
          </a>
        </div>
      </div>

      {/* Copyright & Bottom Quick Links bar */}
      <div className="w-full border-t border-outline-variant/30 py-4">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Dronebhai. A unit of Sanuma India Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
            <span>•</span>
            <Link href="/dji-service" className="hover:text-primary transition-colors">
              DJI Services
            </Link>
            <span>•</span>
            <Link href="/dji-sale" className="hover:text-primary transition-colors">
              DJI Sale
            </Link>
            <span>•</span>
            <Link href="/branches" className="hover:text-primary transition-colors">
              Branches
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
