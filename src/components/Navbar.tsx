"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",            label: "Home" },
  { href: "/products",    label: "Products" },
  { href: "/dji-service", label: "DJI Service" },
  { href: "/about",       label: "About Us" },
  { href: "/branches",    label: "Branches & Contact" },
];

const drawerNavLinks = [
  { href: "/",            label: "Home",               icon: "home" },
  { href: "/products",    label: "Products Catalog",   icon: "precision_manufacturing" },
  { href: "/dji-service", label: "DJI Care & Service", icon: "build" },
  { href: "/about",       label: "About Us",           icon: "info" },
  { href: "/branches",    label: "Branches & Contact", icon: "location_on" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Desktop TopAppBar ─────────────────────────────── */}
      <header className="bg-surface/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 hidden md:block">
        <div className="flex items-center justify-between px-gutter h-20 w-full max-w-7xl mx-auto">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <Image
              src="/logo-removebg-preview.png"
              alt="Dronebhai Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 font-label-md text-label-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary transition-colors pb-1"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Trailing CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:8002800380"
              className="flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-container transition-colors bg-primary/5 px-3.5 py-2 rounded-lg border border-primary/20"
            >
              <span className="material-symbols-outlined text-lg">phone</span>
              <span className="font-semibold">8002 8003 80</span>
            </a>
            <a
              href="https://wa.me/918002800380"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-button text-xs uppercase px-4 py-2 rounded-lg hover:brightness-110 transition-all flex items-center gap-1.5 shadow-sm font-bold"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* ── Mobile TopAppBar ──────────────────────────────── */}
      <header className="bg-surface/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 md:hidden h-16 flex items-center justify-between px-4">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-on-surface-variant hover:text-primary transition-colors p-1"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo-removebg-preview.png"
            alt="Dronebhai Logo"
            width={38}
            height={38}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
        <a
          href="tel:8002800380"
          className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
          aria-label="Call us"
        >
          <span className="material-symbols-outlined text-lg">phone</span>
        </a>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────── */}
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[59] md:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col py-6 h-full w-80 max-w-[85vw] bg-surface shadow-2xl transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 mb-6 flex justify-between items-center border-b border-outline-variant/20 pb-4">
          <Link href="/" onClick={() => setDrawerOpen(false)} className="flex items-center">
            <Image
              src="/logo-removebg-preview.png"
              alt="Dronebhai Logo"
              width={40}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-on-surface-variant p-1 rounded-full hover:bg-surface-container"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto font-label-md text-label-md px-2">
          {drawerNavLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className={`mx-2 px-4 py-3 flex items-center gap-4 rounded-full transition-colors ${
                  active
                    ? "bg-secondary-container text-on-secondary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={
                    active
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {link.icon}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
