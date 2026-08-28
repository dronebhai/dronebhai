"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",            label: "Home" },
  { href: "/products",    label: "Products" },
  { href: "/dji-service", label: "DJI Service" },
  { href: "/about",       label: "About" },
  { href: "/branches",    label: "Branches" },
];

const drawerNavLinks = [
  { href: "/",            label: "Home",        icon: "home" },
  { href: "/products",    label: "Products",    icon: "precision_manufacturing" },
  { href: "/dji-service", label: "DJI Service", icon: "build" },
  { href: "/about",       label: "About",       icon: "info" },
  { href: "/branches",    label: "Branches",    icon: "location_on" },
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
      <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 hidden md:block">
        <div className="flex items-center justify-between px-gutter h-16 w-full max-w-7xl mx-auto">
          {/* Brand */}
          <Link
            href="/"
            className="font-headline-md text-headline-md font-bold tracking-tighter text-primary"
          >
            DRONEBHAI
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-label-md text-label-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Trailing CTA */}
          <a
            href="tel:8002800380"
            className="hidden md:flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-lg">phone</span>
            8002 8003 80
          </a>
        </div>
      </header>

      {/* ── Mobile TopAppBar ──────────────────────────────── */}
      <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 md:hidden h-16 flex items-center justify-between px-gutter">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold tracking-tighter text-primary"
        >
          DRONEBHAI
        </Link>
        <a
          href="tel:8002800380"
          className="text-primary"
          aria-label="Call us"
        >
          <span className="material-symbols-outlined">phone</span>
        </a>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────── */}
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[59] md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col py-6 h-full w-80 rounded-r-xl bg-surface shadow-xl transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 mb-8 flex justify-between items-center">
          <span className="font-headline-md text-headline-md text-primary font-bold tracking-tighter">
            DRONEBHAI MENU
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-on-surface-variant p-2"
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
