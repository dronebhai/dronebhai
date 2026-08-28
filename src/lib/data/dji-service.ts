export interface DjiModel {
  slug: string;
  label: string;
  series: string;
}

export interface RepairType {
  slug: string;
  label: string;
  icon: string; // Material Symbols icon name
}

export interface DjiRepairEntry {
  model: string;         // model slug
  repairType: string;    // repairType slug
  pageTitle: string;
  heroHeadline: string;
  heroSubtitle: string;
  heroImageUrl: string;
  heroImageAlt: string;
  priceRange: string;
  turnaround: string;
  symptoms: string[];
  repairSteps: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
}

/* ============================================================
   MODELS
   ============================================================ */
export const djiModels: DjiModel[] = [
  // Priority models (full content matrix)
  { slug: "mini-4-pro",          label: "DJI Mini 4 Pro",         series: "Mini" },
  { slug: "mini-3-pro",          label: "DJI Mini 3 Pro",         series: "Mini" },
  { slug: "mavic-3",             label: "DJI Mavic 3",            series: "Mavic" },
  { slug: "air-3",               label: "DJI Air 3",              series: "Air" },
  { slug: "air-2s",              label: "DJI Air 2S",             series: "Air" },
  // Extended models
  { slug: "mini-3",              label: "DJI Mini 3",             series: "Mini" },
  { slug: "mini-2-se",           label: "DJI Mini 2 SE",          series: "Mini" },
  { slug: "mavic-air-2",         label: "DJI Mavic Air 2",        series: "Mavic" },
  { slug: "mavic-3-pro",         label: "DJI Mavic 3 Pro",        series: "Mavic" },
  { slug: "mavic-3-classic",     label: "DJI Mavic 3 Classic",    series: "Mavic" },
  { slug: "mavic-2-pro-zoom",    label: "DJI Mavic 2 Pro/Zoom",   series: "Mavic" },
  { slug: "avata-2",             label: "DJI Avata 2",            series: "FPV" },
  { slug: "avata",               label: "DJI Avata",              series: "FPV" },
  { slug: "fpv",                 label: "DJI FPV",                series: "FPV" },
  { slug: "phantom-4-pro",       label: "DJI Phantom 4 Pro",      series: "Phantom" },
  { slug: "inspire-2",           label: "DJI Inspire 2",          series: "Inspire" },
];

/* ============================================================
   REPAIR TYPES
   ============================================================ */
export const repairTypes: RepairType[] = [
  // Priority repair types (full content)
  { slug: "gimbal-replacement",          label: "Gimbal Replacement",          icon: "tune" },
  { slug: "battery-replacement",         label: "Battery Replacement",         icon: "battery_charging_full" },
  { slug: "camera-lens-repair",          label: "Camera Lens Repair",          icon: "camera" },
  { slug: "crash-damage-repair",         label: "Crash Damage Repair",         icon: "emergency_home" },
  // Extended repair types
  { slug: "motor-replacement",           label: "Motor Replacement",           icon: "settings_input_component" },
  { slug: "propeller-replacement",       label: "Propeller Replacement",       icon: "air" },
  { slug: "firmware-calibration",        label: "Firmware & Calibration",      icon: "system_update" },
  { slug: "remote-controller-repair",    label: "Remote Controller Repair",    icon: "sports_esports" },
  { slug: "screen-display-repair",       label: "Screen / Display Repair",     icon: "monitor" },
  { slug: "frame-arm-repair",            label: "Frame & Arm Repair",          icon: "hardware" },
  { slug: "obstacle-sensor-repair",      label: "Obstacle Sensor Repair",      icon: "sensors" },
];

/* ============================================================
   REPAIR CONTENT ENTRIES (Priority Matrix — fully populated)
   ============================================================ */
const repairEntries: DjiRepairEntry[] = [
  // ── Mini 4 Pro ──────────────────────────────────────────────
  {
    model: "mini-4-pro",
    repairType: "gimbal-replacement",
    pageTitle: "DJI Mini 4 Pro Gimbal Replacement | Dronebhai",
    heroHeadline: "Mini 4 Pro Gimbal Replacement.",
    heroSubtitle: "Precision camera stabilisation repair for your Mini 4 Pro. We restore perfect balance and clear vision to your drone.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A detailed macro photograph of a DJI Mini 4 Pro camera gimbal assembly on a pristine white laboratory table under bright, high-key, clinical lighting.",
    priceRange: "₹8,000 – ₹12,000",
    turnaround: "2–3 Business Days",
    symptoms: [
      '"Gimbal overloaded" error on DJI app',
      "Shaky, jelly, or distorted footage",
      "Gimbal physically stuck or won't calibrate",
      "Visible camera horizon tilt at rest",
    ],
    repairSteps: [
      { step: "Diagnostic Scan",  description: "Full hardware telemetry scan to isolate motor vs. ribbon cable failure." },
      { step: "OEM Gimbal Swap",  description: "Removal of damaged unit and installation of certified DJI replacement parts." },
      { step: "Calibration",      description: "IMU and gimbal joint recalibration using proprietary diagnostic tools." },
      { step: "Flight Check",     description: "Hover test and video feed verification before dispatch." },
    ],
    faqs: [
      { q: "Will my footage look exactly as before?", a: "Yes — with a genuine OEM gimbal and full recalibration, the Mini 4 Pro's camera output is restored to factory spec." },
      { q: "Is the gimbal covered under DJI Care?", a: "If you have an active DJI Care Refresh plan, gimbal replacement is typically included. Bring your Care plan details and we'll apply it to your repair." },
      { q: "How long before I can fly again?", a: "Most gimbal replacements are completed within 2 business days. We'll notify you via WhatsApp when your drone is flight-ready." },
    ],
  },
  {
    model: "mini-4-pro",
    repairType: "battery-replacement",
    pageTitle: "DJI Mini 4 Pro Battery Replacement | Dronebhai",
    heroHeadline: "Mini 4 Pro Battery Replacement.",
    heroSubtitle: "Restore full flight time with a genuine DJI Intelligent Flight Battery for your Mini 4 Pro.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A DJI Mini 4 Pro battery being tested on diagnostic equipment in a clean, bright lab environment.",
    priceRange: "₹4,500 – ₹6,000",
    turnaround: "Same Day – 1 Business Day",
    symptoms: [
      "Flight time dropped below 20 minutes",
      "Battery swells or feels warm after charging",
      '"Low battery warning" immediately after takeoff',
      "Battery not recognised by charger or drone",
    ],
    repairSteps: [
      { step: "Battery Health Check", description: "Cell voltage analysis and capacity test using DJI Assistant diagnostics." },
      { step: "OEM Battery Supply",   description: "Genuine DJI Mini 4 Pro Intelligent Flight Battery sourced from authorised stock." },
      { step: "Firmware Pairing",     description: "New battery paired and firmware-updated to match drone's current software version." },
      { step: "Capacity Verification", description: "Post-install capacity discharge test to confirm rated 34-minute flight time." },
    ],
    faqs: [
      { q: "Can I use third-party batteries?", a: "We only install genuine DJI batteries. Third-party cells pose safety risks and can void your DJI Care plan." },
      { q: "How many charge cycles before I need a new battery?", a: "DJI rates Mini 4 Pro batteries for approximately 200 full cycles. If you're seeing degraded performance, bring it in for a health check." },
    ],
  },
  {
    model: "mini-4-pro",
    repairType: "camera-lens-repair",
    pageTitle: "DJI Mini 4 Pro Camera Lens Repair | Dronebhai",
    heroHeadline: "Mini 4 Pro Camera Lens Repair.",
    heroSubtitle: "Eliminate haze, scratches, and distortion from your Mini 4 Pro's 4K lens with a precision optical replacement.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "Macro close-up of a DJI Mini 4 Pro camera lens on a laboratory bench under clinical white lighting.",
    priceRange: "₹3,500 – ₹5,500",
    turnaround: "1–2 Business Days",
    symptoms: [
      "Hazy or foggy footage despite clean exterior",
      "Visible scratches or cracks on lens element",
      "Purple fringing / chromatic aberration in footage",
      "Lens condensation that won't clear",
    ],
    repairSteps: [
      { step: "Optical Assessment", description: "High-magnification lens inspection under controlled lighting to identify exact damage type." },
      { step: "Dust-Free Disassembly", description: "Camera unit carefully opened in our clean-room environment to prevent sensor contamination." },
      { step: "Lens Element Swap", description: "Damaged optical element replaced with OEM glass maintaining factory aperture and focal length." },
      { step: "Image Quality Test", description: "Post-repair test shots at multiple focal points to verify sharpness, colour accuracy, and absence of artefacts." },
    ],
    faqs: [
      { q: "Can a scratched lens ruin sensor quality permanently?", a: "Scratches on the outer lens element don't damage the sensor — replacing the lens fully restores image quality." },
      { q: "Should I clean the lens myself?", a: "Only with approved lens cloths and no pressure. Improper cleaning can micro-scratch the coating. For internal haze, always bring it to us." },
    ],
  },
  {
    model: "mini-4-pro",
    repairType: "crash-damage-repair",
    pageTitle: "DJI Mini 4 Pro Crash Damage Repair | Dronebhai",
    heroHeadline: "Mini 4 Pro Crash Damage Repair.",
    heroSubtitle: "Comprehensive structural assessment and repair after impact — from broken arms to full fuselage replacement.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A disassembled DJI Mini 4 Pro on a technician's workbench being inspected for crash damage.",
    priceRange: "₹2,500 – ₹15,000",
    turnaround: "3–5 Business Days",
    symptoms: [
      "Broken or cracked arm / body shell",
      "Motors vibrating abnormally after crash",
      "Flight controller error codes post-impact",
      "Gimbal / camera misaligned after crash",
    ],
    repairSteps: [
      { step: "Full Damage Audit",     description: "Complete teardown to assess structural, electronic, and optical damage with written quote." },
      { step: "Frame Replacement",     description: "Cracked or deformed body parts replaced with OEM structural components." },
      { step: "Motor & ESC Check",     description: "All four motors spin-tested and ESC firmware re-flashed after impact." },
      { step: "Systems Validation",    description: "Full flight test in our test area to verify all navigation, camera, and control systems." },
    ],
    faqs: [
      { q: "Will DJI Care Refresh cover my crash?", a: "If you have an active Care Refresh plan, crash repairs are covered for a reduced fee. Bring the drone and your Care details." },
      { q: "How do I get a repair quote?", a: "Bring the drone in or WhatsApp us photos. We'll do a quick assessment and send a written quote within the same business day." },
    ],
  },

  // ── Mini 3 Pro ──────────────────────────────────────────────
  {
    model: "mini-3-pro",
    repairType: "gimbal-replacement",
    pageTitle: "DJI Mini 3 Pro Gimbal Replacement | Dronebhai",
    heroHeadline: "Mini 3 Pro Gimbal Replacement.",
    heroSubtitle: "Expert gimbal replacement for the Mini 3 Pro's tri-directional rotation camera — precision restored.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Mini 3 Pro gimbal assembly on a clean white repair bench under laboratory lighting.",
    priceRange: "₹7,500 – ₹11,000",
    turnaround: "2–3 Business Days",
    symptoms: [
      '"Gimbal motor overloaded" error',
      "Shaky footage in hover",
      "Gimbal stuck in one axis",
      "Vertical shooting mode not rotating correctly",
    ],
    repairSteps: [
      { step: "Telemetry Scan",     description: "DJI Assistant logs analysed to distinguish between motor fault and ribbon failure." },
      { step: "Gimbal Replacement", description: "Full gimbal unit swapped with certified DJI Mini 3 Pro OEM assembly." },
      { step: "Axis Calibration",   description: "All three rotation axes calibrated for smooth pan, tilt, and vertical orientation." },
      { step: "Test Shoot",         description: "Static and dynamic video test in horizontal and vertical modes before handover." },
    ],
    faqs: [
      { q: "Is the Mini 3 Pro gimbal the same as Mini 4 Pro?", a: "No — the Mini 3 Pro has a different gimbal design with tri-directional rotation. We stock both models separately." },
      { q: "Can I repair just one gimbal axis?", a: "In most cases a full gimbal unit replacement is more reliable and cost-effective than single-axis repair." },
    ],
  },
  {
    model: "mini-3-pro",
    repairType: "battery-replacement",
    pageTitle: "DJI Mini 3 Pro Battery Replacement | Dronebhai",
    heroHeadline: "Mini 3 Pro Battery Replacement.",
    heroSubtitle: "Restore the Mini 3 Pro's full 47-minute flight time with a genuine DJI Intelligent Flight Battery.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Mini 3 Pro intelligent flight battery being tested on diagnostic equipment.",
    priceRange: "₹4,000 – ₹5,500",
    turnaround: "Same Day – 1 Business Day",
    symptoms: [
      "Flight time well below 34–47 minutes",
      "Battery charging stops before 100%",
      "Drone returning-to-home at high battery %",
      "Battery getting hot during or after charge",
    ],
    repairSteps: [
      { step: "Capacity Analysis",    description: "DJI battery health tool used to measure actual vs. rated capacity." },
      { step: "New Battery Sourced",  description: "Genuine Mini 3 Pro standard or Plus battery supplied per customer preference." },
      { step: "Firmware Sync",        description: "Battery firmware updated to match drone firmware version." },
      { step: "Discharge Test",       description: "Full discharge cycle run to verify restored flight time." },
    ],
    faqs: [
      { q: "Does the Mini 3 Pro Plus battery fit the standard Mini 3 Pro?", a: "Yes, the larger Plus battery is forward-compatible with the Mini 3 Pro, adding approximately 13 minutes of flight time." },
    ],
  },
  {
    model: "mini-3-pro",
    repairType: "camera-lens-repair",
    pageTitle: "DJI Mini 3 Pro Camera Lens Repair | Dronebhai",
    heroHeadline: "Mini 3 Pro Camera Lens Repair.",
    heroSubtitle: "Restore the Mini 3 Pro's 4K/60fps clarity with a clean optical element replacement.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Mini 3 Pro camera lens inspection under high magnification laboratory lighting.",
    priceRange: "₹3,000 – ₹5,000",
    turnaround: "1–2 Business Days",
    symptoms: [
      "Blurry footage despite stable gimbal",
      "Lens cracked or physically chipped",
      "Persistent haze visible in footage",
      "Flare or ghosting in sunny conditions",
    ],
    repairSteps: [
      { step: "Optical Inspection", description: "Magnified assessment of lens element damage type and depth." },
      { step: "Clean-Room Swap",    description: "Lens element replaced in our dust-free clean-room to protect sensor." },
      { step: "Coating Verification", description: "Anti-reflective coating verified on new element." },
      { step: "Image Quality Test", description: "Standard test chart shot to confirm resolution and colour." },
    ],
    faqs: [
      { q: "Is the Mini 3 Pro lens different from other DJI models?", a: "Yes — the Mini 3 Pro uses a specific wide-angle optical design. We stock model-matched elements." },
    ],
  },
  {
    model: "mini-3-pro",
    repairType: "crash-damage-repair",
    pageTitle: "DJI Mini 3 Pro Crash Damage Repair | Dronebhai",
    heroHeadline: "Mini 3 Pro Crash Damage Repair.",
    heroSubtitle: "Structural and electronic recovery after impact — comprehensive Mini 3 Pro crash repair service.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Mini 3 Pro disassembled on a technician's bench being assessed for crash damage.",
    priceRange: "₹2,000 – ₹13,000",
    turnaround: "3–5 Business Days",
    symptoms: [
      "Cracked arm or shell after hard landing",
      "Propeller vibration causing unstable flight",
      "Error codes post-crash",
      "Camera tilting due to gimbal impact",
    ],
    repairSteps: [
      { step: "Structural Audit",   description: "Full inspection of frame integrity, motor mounts, and electronic connectors." },
      { step: "Parts Replacement",  description: "Arms, shell, motors, and propeller hubs replaced as required." },
      { step: "ESC & FC Reset",     description: "Electronic Speed Controllers and Flight Controller firmware re-flashed post-crash." },
      { step: "Hover Stability Test", description: "Indoor hover test to confirm vibration-free flight before release." },
    ],
    faqs: [
      { q: "Can you repair the Mini 3 Pro if the arm is broken off?", a: "Yes — in most cases a broken arm is repairable. Bring it in and we'll assess whether it's a structural or full-frame replacement." },
    ],
  },

  // ── Mavic 3 ─────────────────────────────────────────────────
  {
    model: "mavic-3",
    repairType: "gimbal-replacement",
    pageTitle: "DJI Mavic 3 Gimbal Replacement | Dronebhai",
    heroHeadline: "Mavic 3 Gimbal Replacement.",
    heroSubtitle: "Expert replacement for the Mavic 3's Hasselblad-tuned gimbal system — precision optics restored.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Mavic 3 gimbal assembly on a laboratory workbench under precise clinical lighting.",
    priceRange: "₹18,000 – ₹28,000",
    turnaround: "3–5 Business Days",
    symptoms: [
      "Gimbal vibration visible in 5.1K footage",
      "Hasselblad colour profile error",
      "Gimbal motor overload on startup",
      "Horizon tilt that auto-calibration cannot fix",
    ],
    repairSteps: [
      { step: "Hasselblad Calibration Backup", description: "Colour science parameters backed up before disassembly." },
      { step: "OEM Gimbal Installation",       description: "Genuine Mavic 3 gimbal assembly installed with factory-grade tools." },
      { step: "Multi-Axis Calibration",        description: "Tilt, roll, and pan axes calibrated using DJI's proprietary tools." },
      { step: "Colour & Resolution Test",      description: "Hasselblad Natural Colour Solution (HNCS) profile verified post-install." },
    ],
    faqs: [
      { q: "Is the Mavic 3 gimbal different from the Mavic 3 Classic?", a: "Yes — the original Mavic 3 has a dual-camera assembly (main + tele). We carry separate units for each variant." },
      { q: "Does gimbal replacement affect Hasselblad colour science?", a: "No — the HNCS profile is firmware-stored, not hardware-dependent. It remains intact after a gimbal swap." },
    ],
  },
  {
    model: "mavic-3",
    repairType: "battery-replacement",
    pageTitle: "DJI Mavic 3 Battery Replacement | Dronebhai",
    heroHeadline: "Mavic 3 Battery Replacement.",
    heroSubtitle: "Restore the Mavic 3's 46-minute flight time with a genuine DJI Intelligent Flight Battery Plus.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A DJI Mavic 3 Intelligent Flight Battery Plus being tested on diagnostic equipment.",
    priceRange: "₹12,000 – ₹16,000",
    turnaround: "Same Day – 1 Business Day",
    symptoms: [
      "Flight time well below 40 minutes",
      "Swollen or deformed battery cell",
      "Battery reporting incorrect charge level",
      "Rapid discharge in cold weather",
    ],
    repairSteps: [
      { step: "Cell Health Analysis",  description: "Cell-level voltage and impedance testing using professional battery analyser." },
      { step: "OEM Battery Supplied",  description: "Genuine Mavic 3 Intelligent Flight Battery Plus or standard battery as required." },
      { step: "Firmware Pairing",      description: "Battery firmware synced to drone's current DJI firmware version." },
      { step: "Flight Time Verified",  description: "Calibrated discharge test confirms ≥42 minutes under test conditions." },
    ],
    faqs: [
      { q: "Can I use the Mavic 3 battery in Mavic 3 Classic or Pro?", a: "The Mavic 3 series batteries are cross-compatible within the Mavic 3 lineup (Classic, Pro, Cine). We can confirm compatibility for your specific variant." },
    ],
  },
  {
    model: "mavic-3",
    repairType: "camera-lens-repair",
    pageTitle: "DJI Mavic 3 Camera Lens Repair | Dronebhai",
    heroHeadline: "Mavic 3 Camera Lens Repair.",
    heroSubtitle: "Restore the Mavic 3's renowned Hasselblad optical clarity with a precision lens element replacement.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Mavic 3 Hasselblad lens assembly on a clean workbench under clinical laboratory lighting.",
    priceRange: "₹8,000 – ₹14,000",
    turnaround: "2–3 Business Days",
    symptoms: [
      "Reduced sharpness in corners of frame",
      "Visible scratches or cracking on 24mm element",
      "Internal condensation visible",
      "Colour fringing not correctable in post",
    ],
    repairSteps: [
      { step: "Optical Quality Scan",    description: "MTF (resolution) chart test before and after repair for quality assurance." },
      { step: "Hasselblad Glass Swap",   description: "Proprietary Hasselblad-spec lens element replaced in clean-room conditions." },
      { step: "Coating Integrity Check", description: "Anti-reflective and UV coatings verified on replacement element." },
      { step: "Full Image Test",         description: "5.1K footage test shot to verify full resolution and colour accuracy." },
    ],
    faqs: [
      { q: "Does the tele camera also need separate lens repair?", a: "Yes — the Mavic 3's 162mm telephoto has a separate optical assembly. We handle both cameras independently." },
    ],
  },
  {
    model: "mavic-3",
    repairType: "crash-damage-repair",
    pageTitle: "DJI Mavic 3 Crash Damage Repair | Dronebhai",
    heroHeadline: "Mavic 3 Crash Damage Repair.",
    heroSubtitle: "Complete structural and systems recovery for the Mavic 3 after impact.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A DJI Mavic 3 with crash damage on a technician's workbench being assessed for repair.",
    priceRange: "₹5,000 – ₹35,000",
    turnaround: "4–6 Business Days",
    symptoms: [
      "Cracked or detached motor arm",
      "Abnormal flight vibration post-crash",
      "APAS obstacle avoidance errors",
      "Gimbal / camera damaged on impact",
    ],
    repairSteps: [
      { step: "Full System Audit",   description: "Complete teardown to assess frame, motors, ESCs, flight controller, and camera system." },
      { step: "OEM Frame Repair",    description: "Cracked arms or body panels replaced with genuine Mavic 3 structural parts." },
      { step: "Sensor Recalibration", description: "APAS vision sensors recalibrated post-repair to factory flight safety standards." },
      { step: "Outdoor Flight Test", description: "Controlled outdoor hover and manoeuvre test to verify complete airworthiness." },
    ],
    faqs: [
      { q: "Is the Mavic 3 worth repairing after a severe crash?", a: "Usually yes — the Mavic 3 is a premium platform. We provide a full written assessment before you commit to any repair cost." },
    ],
  },

  // ── Air 3 ────────────────────────────────────────────────────
  {
    model: "air-3",
    repairType: "gimbal-replacement",
    pageTitle: "DJI Air 3 Gimbal Replacement | Dronebhai",
    heroHeadline: "Air 3 Gimbal Replacement.",
    heroSubtitle: "Restore smooth dual-camera stabilisation on your DJI Air 3 with precision OEM parts.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Air 3 gimbal assembly on a bright clean repair bench.",
    priceRange: "₹9,000 – ₹14,000",
    turnaround: "2–3 Business Days",
    symptoms: [
      "Gimbal error on power-on",
      "Wide or tele camera unstable independently",
      "Gimbal won't initialize in cold conditions",
      "Footage jitter in windy conditions",
    ],
    repairSteps: [
      { step: "Camera Selection Diagnosis", description: "Test both wide and tele gimbal motors independently to isolate fault." },
      { step: "Dual-Camera Gimbal Swap",    description: "Full Air 3 dual-camera gimbal assembly replaced with OEM unit." },
      { step: "Focus Calibration",          description: "Both camera modules focus-calibrated for sharpness at all distances." },
      { step: "4K/60fps Verification",      description: "Video output tested in both wide and tele modes at maximum resolution." },
    ],
    faqs: [
      { q: "Can just one of the two cameras be repaired?", a: "Yes — in some cases only one camera module is faulty. We can diagnose and repair at camera level to reduce cost." },
    ],
  },
  {
    model: "air-3",
    repairType: "battery-replacement",
    pageTitle: "DJI Air 3 Battery Replacement | Dronebhai",
    heroHeadline: "Air 3 Battery Replacement.",
    heroSubtitle: "Restore the DJI Air 3's full 46-minute flight time with a genuine Intelligent Flight Battery.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A DJI Air 3 battery under cell-level diagnostic testing in a laboratory setting.",
    priceRange: "₹8,000 – ₹11,000",
    turnaround: "Same Day – 1 Business Day",
    symptoms: [
      "Flight time dropped below 35 minutes",
      "Battery warning at 30%+ charge",
      "Inconsistent charge display in DJI Fly app",
      "Battery warm to touch after partial charge",
    ],
    repairSteps: [
      { step: "State-of-Health Test", description: "Cell balance and capacity readings taken for all 3 Li-ion cells." },
      { step: "OEM Battery Sourced",  description: "Genuine Air 3 Intelligent Flight Battery supplied." },
      { step: "Firmware Pairing",     description: "Battery microcontroller firmware updated and paired to drone serial." },
      { step: "Flight Time Verified", description: "Controlled test verifies >42 min flight time restored." },
    ],
    faqs: [
      { q: "Is the Air 3 battery compatible with Air 2S?", a: "No — the Air 3 uses a different battery form factor to the Air 2S. Do not interchange." },
    ],
  },
  {
    model: "air-3",
    repairType: "camera-lens-repair",
    pageTitle: "DJI Air 3 Camera Lens Repair | Dronebhai",
    heroHeadline: "Air 3 Camera Lens Repair.",
    heroSubtitle: "Restore Air 3 image clarity — wide and tele lens element replacement available.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Air 3 dual camera lens system being inspected under magnification in a clean lab.",
    priceRange: "₹4,000 – ₹8,000",
    turnaround: "1–2 Business Days",
    symptoms: [
      "Haze or fog on wide or tele footage",
      "Cracked outer element on either camera",
      "Softness only on one camera at full zoom",
      "Internal fungus growth visible",
    ],
    repairSteps: [
      { step: "Dual-Camera Optical Assessment", description: "Both wide-angle and telephoto lens elements inspected separately." },
      { step: "Clean-Room Lens Swap",           description: "Affected element replaced without disturbing the sensor." },
      { step: "Resolution Verification",        description: "Resolution chart test on both cameras post-repair." },
      { step: "Colour Accuracy Check",          description: "Colour calibration confirmed between wide and tele modules." },
    ],
    faqs: [
      { q: "Can you repair just the tele lens without touching the wide?", a: "Yes — each camera module is independent. We repair only the affected unit to keep costs minimal." },
    ],
  },
  {
    model: "air-3",
    repairType: "crash-damage-repair",
    pageTitle: "DJI Air 3 Crash Damage Repair | Dronebhai",
    heroHeadline: "Air 3 Crash Damage Repair.",
    heroSubtitle: "Full structural and electronic recovery for the DJI Air 3 after impact.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A damaged DJI Air 3 on a repair bench being assessed after a crash.",
    priceRange: "₹3,000 – ₹20,000",
    turnaround: "3–5 Business Days",
    symptoms: [
      "Cracked body or folding arm joint failure",
      "One or more motors not spinning",
      "Erratic behaviour in APAS sensors post-crash",
      "Gimbal / dual camera damaged on impact",
    ],
    repairSteps: [
      { step: "Impact Assessment",    description: "Written damage report issued after full teardown inspection." },
      { step: "Frame & Motor Repair", description: "Broken arms, motor mounts, and propeller drives replaced with OEM parts." },
      { step: "Sensor Recalibration", description: "All-direction APAS vision sensors re-calibrated after structural repairs." },
      { step: "Systems Flight Test",  description: "Test flight covering hover, forward flight, and obstacle avoidance." },
    ],
    faqs: [
      { q: "What if one camera is damaged and one is fine?", a: "We only replace the damaged camera assembly — the undamaged one is not disturbed. This keeps repair cost proportional." },
    ],
  },

  // ── Air 2S ───────────────────────────────────────────────────
  {
    model: "air-2s",
    repairType: "gimbal-replacement",
    pageTitle: "DJI Air 2S Gimbal Replacement | Dronebhai",
    heroHeadline: "Air 2S Gimbal Replacement.",
    heroSubtitle: "Restore the Air 2S's 1-inch sensor performance with precision gimbal replacement.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Air 2S 1-inch sensor gimbal assembly being inspected on a clean repair bench.",
    priceRange: "₹8,500 – ₹13,000",
    turnaround: "2–3 Business Days",
    symptoms: [
      "Gimbal oscillation visible in 5.4K footage",
      "Camera tilted down after flight",
      '"Gimbal overloaded" on startup',
      "Gimbal ribbon cable fraying (visible or confirmed by error)",
    ],
    repairSteps: [
      { step: "Telemetry Diagnosis", description: "Flight log analysis to differentiate ribbon vs. motor fault." },
      { step: "OEM Gimbal Installation", description: "Air 2S-specific gimbal with 1-inch sensor housing installed." },
      { step: "Tilt Calibration",    description: "Horizon level calibrated to ±0.1° accuracy." },
      { step: "5.4K Video Verification", description: "5.4K/30fps and 4K/60fps output verified at all gimbal positions." },
    ],
    faqs: [
      { q: "Is the Air 2S gimbal more expensive than the Mini models?", a: "Slightly yes — the larger 1-inch sensor housing requires a more complex gimbal assembly. We'll provide a firm quote before any work begins." },
    ],
  },
  {
    model: "air-2s",
    repairType: "battery-replacement",
    pageTitle: "DJI Air 2S Battery Replacement | Dronebhai",
    heroHeadline: "Air 2S Battery Replacement.",
    heroSubtitle: "Restore full 31-minute flight time on your DJI Air 2S with a genuine replacement battery.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A DJI Air 2S Intelligent Flight Battery being diagnosed in a laboratory.",
    priceRange: "₹6,000 – ₹9,000",
    turnaround: "Same Day – 1 Business Day",
    symptoms: [
      "Flight time under 20 minutes",
      "App showing battery at 0% immediately on startup",
      "Charging stops at 60–80%",
      "Battery swell visible under casing",
    ],
    repairSteps: [
      { step: "Cell Diagnosis",       description: "Individual cell impedance and voltage readings taken." },
      { step: "Genuine Battery Sourced", description: "OEM Air 2S Intelligent Flight Battery (3500mAh/11.55V) supplied." },
      { step: "BMS Pairing",          description: "Battery Management System paired and calibrated." },
      { step: "Flight Endurance Test", description: "31-minute rated capacity confirmed under controlled discharge." },
    ],
    faqs: [
      { q: "Does the Air 2S use the same battery as the Mavic Air 2?", a: "No — the Air 2S and Mavic Air 2 have physically different batteries that are not cross-compatible." },
    ],
  },
  {
    model: "air-2s",
    repairType: "camera-lens-repair",
    pageTitle: "DJI Air 2S Camera Lens Repair | Dronebhai",
    heroHeadline: "Air 2S Camera Lens Repair.",
    heroSubtitle: "Restore the Air 2S's 1-inch sensor clarity with an OEM lens element replacement.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "DJI Air 2S camera with 1-inch sensor being inspected on a precision workbench.",
    priceRange: "₹4,500 – ₹7,500",
    turnaround: "1–2 Business Days",
    symptoms: [
      "Loss of micro-detail in 20MP stills",
      "Visible lens crack post-crash",
      "Internal condensation around large 1-inch sensor",
      "Bloom or flare not reducible in post",
    ],
    repairSteps: [
      { step: "Sensor Safety Protocol", description: "1-inch CMOS sensor protected with cover glass before lens removal." },
      { step: "Lens Element Swap",      description: "Optical element replaced in dust-free environment." },
      { step: "20MP Resolution Check",  description: "Full resolution RAW capture test to verify sensor and lens quality." },
      { step: "Dynamic Range Test",     description: "High-contrast scene test to verify DR performance is unaffected." },
    ],
    faqs: [
      { q: "Is it worth repairing the Air 2S lens instead of buying new?", a: "Absolutely — the Air 2S's 1-inch sensor and F2.8–F11 aperture system is premium. A lens repair at ₹4,500–7,500 is significantly less than a replacement body." },
    ],
  },
  {
    model: "air-2s",
    repairType: "crash-damage-repair",
    pageTitle: "DJI Air 2S Crash Damage Repair | Dronebhai",
    heroHeadline: "Air 2S Crash Damage Repair.",
    heroSubtitle: "Complete impact recovery for the DJI Air 2S — structural and electronic systems restored.",
    heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_G5TFJvlGZ45Qc02GyKNbTo_hrvSmpjL8noS7IDpytIy07D4N7__Dxmm5jhinRlEumzMgcecxinII8tLe5se5hJ0WmDK-csXofAjgjumgbHwjvubesFMwIC1PrkpyTHs_B-7GrslQTchIMlfoZb4-eYLFTMY-XO6WhVC93QpuS_d49Mb3lw2NZrrx5At9ftCo7Rf9uF-m8euoGor_dqm4mOX4WLA00FqQIIqfuzPJ7nIDknWvvg-5ow",
    heroImageAlt: "A DJI Air 2S with visible crash damage being assessed on a repair bench.",
    priceRange: "₹3,500 – ₹22,000",
    turnaround: "3–5 Business Days",
    symptoms: [
      "Broken or bent folding arm after crash",
      "Motor vibration causing yaw drift",
      "IMU error codes in DJI Fly post-crash",
      "1-inch camera tilted from gimbal impact",
    ],
    repairSteps: [
      { step: "Damage Scope Report",  description: "Itemised repair quote provided after comprehensive teardown assessment." },
      { step: "Structural Repair",    description: "Arm assemblies, motor housings, and shell components replaced." },
      { step: "IMU Recalibration",    description: "Inertial Measurement Unit re-calibrated on flat surface post-repair." },
      { step: "Controlled Flight Test", description: "Indoor hover plus outdoor manoeuvre test before handover." },
    ],
    faqs: [
      { q: "My Air 2S won't turn on after a crash — is it repairable?", a: "Usually yes. Power rail faults post-crash are common and repairable. Bring it in for a no-charge initial assessment." },
    ],
  },
];

/* ============================================================
   EXTENDED ENTRIES — Scaffold for generateStaticParams
   All extended model × repair-type combinations produce a valid
   page at build time. Content gracefully falls back to model/
   repair-type label data if no full entry exists.
   ============================================================ */

// Build a lookup map for fast access
const repairEntryMap = new Map<string, DjiRepairEntry>();
for (const entry of repairEntries) {
  repairEntryMap.set(`${entry.model}__${entry.repairType}`, entry);
}

export function getRepairEntry(
  modelSlug: string,
  repairTypeSlug: string
): DjiRepairEntry | null {
  return repairEntryMap.get(`${modelSlug}__${repairTypeSlug}`) ?? null;
}

export function getModelBySlug(slug: string): DjiModel | undefined {
  return djiModels.find((m) => m.slug === slug);
}

export function getRepairTypeBySlug(slug: string): RepairType | undefined {
  return repairTypes.find((r) => r.slug === slug);
}

/** All model × repairType pairs for generateStaticParams */
export function getAllRepairCombinations(): { model: string; repairType: string }[] {
  const combinations: { model: string; repairType: string }[] = [];
  for (const model of djiModels) {
    for (const rt of repairTypes) {
      combinations.push({ model: model.slug, repairType: rt.slug });
    }
  }
  return combinations;
}
