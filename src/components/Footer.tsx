import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container w-full border-t border-outline-variant">
      <div className="w-full py-section-gap-mobile md:py-section-gap-desktop px-gutter max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 font-body-md text-body-md text-on-surface-variant">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="font-headline-md text-headline-md text-primary font-bold tracking-tighter block mb-4"
          >
            DRONEBHAI
          </Link>
          <p className="text-sm opacity-80">Your Drone Partners in Precision.</p>
        </div>

        {/* Branches */}
        <div className="flex flex-col gap-2">
          <span className="font-label-md text-label-md text-on-background mb-1">
            Branches
          </span>
          <Link
            href="/branches"
            className="hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">store</span>
            South Bopal Lab
          </Link>
          <Link
            href="/branches"
            className="hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">store</span>
            Tragad Lab
          </Link>
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-2">
          <span className="font-label-md text-label-md text-on-background mb-1">
            Hours
          </span>
          <span className="opacity-80 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Mon–Sat 11AM–7PM
          </span>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <span className="font-label-md text-label-md text-on-background mb-1">
            Contact
          </span>
          <a
            href="tel:8002800380"
            className="font-button text-button text-primary opacity-80 hover:opacity-100 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">phone</span>
            8002 8003 80
          </a>
          <a
            href="https://wa.me/918002800380"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:text-primary hover:opacity-100 flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            WhatsApp
          </a>
          <a
            href="mailto:hello@dronebhai.com"
            className="opacity-80 hover:text-primary hover:opacity-100 flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            hello@dronebhai.com
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full max-w-7xl mx-auto px-gutter py-4 border-t border-outline-variant/30 text-center text-sm text-on-surface-variant opacity-60">
        © {new Date().getFullYear()} Dronebhai. All Rights Reserved.
      </div>
    </footer>
  );
}
