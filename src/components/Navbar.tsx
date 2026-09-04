"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [djiDropdownOpen, setDjiDropdownOpen] = useState(false);
  const [mobileDjiOpen, setMobileDjiOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDjiActive = pathname.startsWith("/dji-service") || pathname.startsWith("/dji-sale");

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDjiDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDjiDropdownOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

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
              src="/logo-cropped.png"
              alt="Dronebhai Logo"
              width={48}
              height={48}
              style={{ width: "auto" }}
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 font-label-md text-label-md">
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary transition-colors pb-1"
              }
            >
              Home
            </Link>

            <Link
              href="/products"
              className={
                isActive("/products")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary transition-colors pb-1"
              }
            >
              Products
            </Link>

            {/* ── DJI Dropdown Menu ── */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDjiDropdownOpen(true)}
              onMouseLeave={() => setDjiDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDjiDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1 transition-colors pb-1 cursor-pointer font-label-md text-label-md ${
                  isDjiActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                aria-expanded={djiDropdownOpen}
              >
                <span>DJI</span>
                <span
                  className={`material-symbols-outlined text-lg transition-transform duration-200 ${
                    djiDropdownOpen ? "rotate-180 text-primary" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown Floating Card */}
              {djiDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-surface/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-outline-variant/40 p-2 overflow-hidden">
                    
                    {/* Option 1: DJI Sale */}
                    <Link
                      href="/dji-sale"
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                        pathname.startsWith("/dji-sale")
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-surface-container text-slate-800"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-xl">
                          shopping_bag
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900 block">
                            DJI Sale
                          </span>
                          <span className="text-[10px] uppercase font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                            Fleet
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          Buy authentic drones &amp; combos
                        </p>
                      </div>
                    </Link>

                    {/* Option 2: DJI Services */}
                    <Link
                      href="/dji-service"
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all mt-1 ${
                        pathname.startsWith("/dji-service")
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-surface-container text-slate-800"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-xl">
                          build
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900 block">
                            DJI Services
                          </span>
                          <span className="text-[10px] uppercase font-bold bg-secondary/15 text-secondary px-1.5 py-0.5 rounded">
                            Lab Care
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          Diagnostics, OEM parts &amp; service
                        </p>
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={
                isActive("/about")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary transition-colors pb-1"
              }
            >
              About Us
            </Link>

            <Link
              href="/branches"
              className={
                isActive("/branches")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary transition-colors pb-1"
              }
            >
              Contact Us
            </Link>
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
            src="/logo-cropped.png"
            alt="Dronebhai Logo"
            width={38}
            height={38}
            style={{ width: "auto" }}
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
              src="/logo-with-font.png"
              alt="Dronebhai Logo"
              width={140}
              height={40}
              style={{ width: "auto" }}
              className="h-8 w-auto object-contain"
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

        <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto font-label-md text-label-md px-3">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className={`px-4 py-3 flex items-center gap-3.5 rounded-2xl transition-colors ${
              isActive("/")
                ? "bg-secondary-container text-on-secondary-container font-bold"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
          </Link>

          {/* Products */}
          <Link
            href="/products"
            onClick={() => setDrawerOpen(false)}
            className={`px-4 py-3 flex items-center gap-3.5 rounded-2xl transition-colors ${
              isActive("/products")
                ? "bg-secondary-container text-on-secondary-container font-bold"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined">precision_manufacturing</span>
            <span>Products Catalog</span>
          </Link>

          {/* ── DJI Accordion Section ── */}
          <div className="rounded-2xl border border-outline-variant/30 overflow-hidden bg-surface-container-low/50 my-1">
            <button
              onClick={() => setMobileDjiOpen((prev) => !prev)}
              className="w-full px-4 py-3 flex items-center justify-between text-on-surface font-bold text-left cursor-pointer hover:bg-surface-container"
            >
              <div className="flex items-center gap-3.5 text-primary">
                <span className="material-symbols-outlined">flight_takeoff</span>
                <span>DJI Hub</span>
              </div>
              <span
                className={`material-symbols-outlined text-lg transition-transform duration-200 ${
                  mobileDjiOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {mobileDjiOpen && (
              <div className="px-2 pb-2.5 pt-1 space-y-1 bg-white/70">
                <Link
                  href="/dji-sale"
                  onClick={() => setDrawerOpen(false)}
                  className={`px-3 py-2.5 flex items-center gap-3 rounded-xl transition-colors text-xs font-semibold ${
                    pathname.startsWith("/dji-sale")
                      ? "bg-primary text-white font-bold"
                      : "text-slate-700 hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-base">shopping_bag</span>
                  <div className="flex-1">
                    <span className="block font-bold">DJI Sale</span>
                    <span className="text-[10px] opacity-80 block font-normal">Buy authentic drones &amp; combos</span>
                  </div>
                </Link>

                <Link
                  href="/dji-service"
                  onClick={() => setDrawerOpen(false)}
                  className={`px-3 py-2.5 flex items-center gap-3 rounded-xl transition-colors text-xs font-semibold ${
                    pathname.startsWith("/dji-service")
                      ? "bg-primary text-white font-bold"
                      : "text-slate-700 hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-base">build</span>
                  <div className="flex-1">
                    <span className="block font-bold">DJI Services</span>
                    <span className="text-[10px] opacity-80 block font-normal">Diagnostics, OEM parts &amp; care</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* About Us */}
          <Link
            href="/about"
            onClick={() => setDrawerOpen(false)}
            className={`px-4 py-3 flex items-center gap-3.5 rounded-2xl transition-colors ${
              isActive("/about")
                ? "bg-secondary-container text-on-secondary-container font-bold"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined">info</span>
            <span>About Us</span>
          </Link>

          {/* Contact Us */}
          <Link
            href="/branches"
            onClick={() => setDrawerOpen(false)}
            className={`px-4 py-3 flex items-center gap-3.5 rounded-2xl transition-colors ${
              isActive("/branches")
                ? "bg-secondary-container text-on-secondary-container font-bold"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined">location_on</span>
            <span>Contact Us</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
