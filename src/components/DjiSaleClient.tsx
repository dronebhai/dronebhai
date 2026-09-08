"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { djiSaleProducts } from "@/lib/data/dji-sales";

const seriesFilters = [
  { id: "all", label: "All Drones" },
  { id: "Mini", label: "Mini Series" },
  { id: "Air", label: "Air Series" },
  { id: "Mavic", label: "Mavic Series" },
  { id: "FPV", label: "FPV Series" },
  { id: "Enterprise", label: "Enterprise & Agri" },
];

export default function DjiSaleClient() {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (selectedSeries === "all") return djiSaleProducts;
    return djiSaleProducts.filter((p) => p.series === selectedSeries);
  }, [selectedSeries]);

  return (
    <div className="max-w-7xl mx-auto px-gutter py-4 md:py-8">
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

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {filteredProducts.map((product) => {
          const waText = encodeURIComponent(
            `Hi Dronebhai, I want to enquire about purchasing the ${product.name} (Starting from ${product.startingPrice}).`
          );
          const waUrl = `https://wa.me/918002800380?text=${waText}`;

          return (
            <div
              key={product.id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 hover:border-primary/40 p-5 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Image & Badge */}
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
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {product.description}
                </p>

                {/* Specification Summary String */}
                {product.specsSummary && (
                  <div className="mb-4 p-2 bg-surface-container-low rounded-lg border border-outline-variant/20">
                    <span className="text-[11px] font-semibold text-slate-700 block">
                      {product.specsSummary}
                    </span>
                  </div>
                )}
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Starting from</span>
                  <span className="font-headline text-base font-extrabold text-primary">
                    {product.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white font-button text-xs uppercase px-3 py-2 rounded-xl font-bold hover:brightness-110 transition-all flex items-center gap-1 shadow-xs"
                    title="Enquire on WhatsApp"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Enquire</span>
                  </a>
                  <a
                    href="tel:8002800380"
                    className="border border-outline-variant/40 hover:border-primary text-primary p-2 rounded-xl flex items-center justify-center transition-colors bg-surface/80"
                    title="Call 8002 8003 80"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Notice & Verification Note from MD File ── */}
      <div className="mt-14 pt-8 border-t border-outline-variant/20 text-center max-w-3xl mx-auto">
        <p className="text-xs text-slate-500 leading-relaxed">
          Verify current model specifications, availability, pricing, and regulatory requirements before ordering. All specifications and prices follow official reference standards.
        </p>
      </div>
    </div>
  );
}
