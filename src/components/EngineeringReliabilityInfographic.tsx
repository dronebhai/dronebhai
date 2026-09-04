import React from "react";

interface Step {
  num: string;
  stat: string;
  statLabel: string;
  title: string;
  desc: string;
  tag: string;
  icon: string;
  accent: string;
}

const steps: Step[] = [
  {
    num: "01",
    stat: "100%",
    statLabel: "OEM Genuine",
    title: "Direct Factory-Certified Components",
    desc: "We exclusively source authentic DJI and Tier-1 manufacturer spares. Zero counterfeit or unverified parts ever touch your aircraft.",
    tag: "Factory Sealed",
    icon: "verified",
    accent: "text-primary bg-primary/10 border-primary/20",
  },
  {
    num: "02",
    stat: "2 Labs",
    statLabel: "Ahmedabad",
    title: "Class-100 Cleanroom Workstations",
    desc: "Static-free ESD workbenches in South Bopal and Tragad eliminate microscopic electrostatic damage during delicate micro-soldering.",
    tag: "ESD Anti-Static Safe",
    icon: "science",
    accent: "text-secondary bg-secondary/10 border-secondary/20",
  },
  {
    num: "03",
    stat: "24–48h",
    statLabel: "Rapid SLA",
    title: "Fast-Track Commercial Turnaround",
    desc: "Streamlined diagnostic-to-service pipeline keeps commercial, mapping, and cinematic pilots flying with minimal ground downtime.",
    tag: "Zero Downtime",
    icon: "bolt",
    accent: "text-amber-600 bg-amber-500/10 border-amber-500/20",
  },
  {
    num: "04",
    stat: "30-Day",
    statLabel: "Full Shield",
    title: "Guaranteed Flight Safety Warranty",
    desc: "Every drone undergoes dynamic stability testing and compass calibration before handoff, backed by comprehensive coverage.",
    tag: "100% Risk-Free",
    icon: "shield_with_heart",
    accent: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function EngineeringReliabilityInfographic() {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Background Subtle Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00685e0a_1px,transparent_1px),linear-gradient(to_bottom,#00685e0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-gutter relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-3">
            <span className="material-symbols-outlined text-sm">timeline</span>
            The Quality Lifecycle
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mb-3">
            Engineered for Reliability
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our 4-stage precision pipeline guarantees every drone is calibrated, tested, and certified for peak mission performance.
          </p>
        </div>

        {/* ── Vertical Infographic Flight-Track ── */}
        <div className="relative">
          
          {/* Continuous Vertical Flight Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-4 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* ── Content Card (Desktop: 42% width) ── */}
                  <div
                    className={`w-full md:w-[44%] pl-14 sm:pl-16 md:pl-0 ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div
                      className={`bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 hover:border-primary/50 shadow-xs hover:shadow-md transition-all group hover:-translate-y-0.5 ${
                        isEven ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      {/* Stat Header & Badge */}
                      <div
                        className={`flex items-center gap-2.5 mb-3 flex-wrap ${
                          isEven ? "justify-start" : "md:justify-end"
                        }`}
                      >
                        <span className="font-headline text-2xl sm:text-3xl font-black text-primary tracking-tight">
                          {step.stat}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${step.accent}`}>
                          {step.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-headline text-base sm:text-lg font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Micro Spec Footer */}
                      <div
                        className={`mt-4 pt-3 border-t border-outline-variant/20 flex items-center gap-2 text-xs text-slate-500 ${
                          isEven ? "justify-start" : "md:justify-end"
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm text-primary">
                          check_circle
                        </span>
                        <span className="font-medium text-slate-700">
                          {step.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── Central Node Beacon ── */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-20">
                    <div className="relative flex items-center justify-center">
                      {/* Pulse Ring */}
                      <span className="animate-ping absolute inline-flex h-11 w-11 rounded-full bg-primary/20 opacity-75" />
                      
                      {/* Central Icon Disc */}
                      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white border-2 border-white shadow-md flex items-center justify-center font-mono text-xs font-bold">
                        <span className="material-symbols-outlined text-lg text-primary-fixed">
                          {step.icon}
                        </span>
                      </div>

                      {/* Small Step Number Pill */}
                      <span className="absolute -bottom-2 bg-primary text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full shadow-xs">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Empty Spacer on Opposite Side (Desktop only) */}
                  <div className="hidden md:block md:w-[44%]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
