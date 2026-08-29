import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container w-full border-t border-outline-variant/50">
      <div className="w-full py-12 md:py-16 px-gutter max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-body-md text-body-md text-on-surface-variant">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <Link
            href="/"
            className="flex items-center gap-3 mb-3"
          >
            <Image
              src="/logo-removebg-preview.png"
              alt="Dronebhai Emblem"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-headline-md text-2xl font-bold tracking-tighter text-primary">
              DRONEBHAI
            </span>
          </Link>
          <p className="text-sm opacity-90 leading-relaxed max-w-xs">
            Your Drone Partners in Precision. Authorized DJI Service Centre, Custom UAV Engineering &amp; Enterprise Drone Sales.
          </p>
          <div className="mt-3 text-xs text-primary font-semibold">
            Robuzta Techlabs Pvt. Ltd.
          </div>
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
