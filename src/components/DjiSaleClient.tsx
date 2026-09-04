"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { djiSaleProducts } from "@/lib/data/dji-sales";

const seriesFilters = [
  { id: "all", label: "All Drones" },
  { id: "Mini", label: "Mini Series" },
  { id: "Air", label: "Air Series" },
  { id: "Mavic", label: "Mavic Series" },
  { id: "FPV", label: "FPV / Avata" },
  { id: "Enterprise", label: "Enterprise" },
];

export default function DjiSaleClient() {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (selectedSeries === "all") return djiSaleProducts;
    return djiSaleProducts.filter((p) => p.series === selectedSeries);
  }, [selectedSeries]);

  return (
    <div className="max-w-7xl mx-auto px-gutter py-8 md:py-12">
      {/* ── Category Filter Pills ── */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 scrollbar-none">
        {seriesFilters.map((tab) => {
          const active = selectedSeries === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedSeries(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                active
                  ? "bg-primary text-white shadow-xs"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Minimal Product Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {filteredProducts.map((product) => {
          const waText = encodeURIComponent(
            `Hi Dronebhai, I want to enquire about purchasing the ${product.name} (${product.startingPrice}).`
          );
          const waUrl = `https://wa.me/918002800380?text=${waText}`;

          return (
            <div
              key={product.id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 hover:border-primary/40 p-5 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-44 bg-surface-container-low/40 rounded-xl p-4 flex items-center justify-center mb-4 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-primary/90 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full z-10">
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={320}
                    height={220}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Series Tag & Title */}
                <span className="text-[10px] uppercase font-bold text-primary tracking-wider block mb-1">
                  {product.series} Series
                </span>
                <h3 className="font-headline text-lg font-bold text-slate-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                  {product.tagline}
                </p>

                {/* Quick Specs Highlight */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.keySpecs.slice(0, 2).map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-md"
                    >
                      {spec.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Starting from</span>
                  <span className="font-headline text-base font-extrabold text-primary">
                    {product.startingPrice}
                  </span>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white font-button text-xs uppercase px-3.5 py-2 rounded-xl font-bold hover:brightness-110 transition-all flex items-center gap-1 shadow-xs"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Minimal Bottom Guarantee Note ── */}
      <div className="mt-14 pt-8 border-t border-outline-variant/20 text-center">
        <p className="text-xs text-slate-500 flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">verified</span>
            100% Genuine DJI
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">receipt_long</span>
            18% GST Invoice
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">security</span>
            1-Year Official Warranty
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-primary">phone</span>
            Sales: 8002 8003 80
          </span>
        </p>
      </div>
    </div>
  );
}
