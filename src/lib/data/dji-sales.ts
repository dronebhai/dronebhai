export interface DjiDroneProduct {
  id: string;
  name: string;
  series: "Mini" | "Air" | "Mavic" | "FPV" | "Enterprise";
  tagline: string;
  description: string;
  startingPrice: string;
  mrp?: string;
  badge?: string;
  imageUrl: string;
  specsSummary: string;
  keySpecs: { label: string; value: string }[];
  highlightFeatures: string[];
  inStock: boolean;
  boxContents?: string[];
}

export const djiSaleProducts: DjiDroneProduct[] = [
  // ── Mini Series ──
  {
    id: "dji-mini-4-pro",
    name: "DJI Mini 4 Pro",
    series: "Mini",
    tagline: "Sub-249g professional camera drone for compact aerial photography, travel filmmaking, and obstacle-aware flight.",
    description: "Sub-249g professional camera drone for compact aerial photography, travel filmmaking, and obstacle-aware flight.",
    startingPrice: "₹84,999",
    badge: "Best Seller",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3f21GeFl7LYYowtk9JADJej-llCnTNFWNVwZ9l3L8Ijz7CZ3e3EDDk4-Qgq_N6mEAbSCvMcVlbKM2vx671BqbV49pe8qrEdGGOSA7eAibaKaW8mMhBAvDXRvwtIoLh_f7rFvyPtaYsJDN0bdkKMMkYi9FBDoZGmVaTAge_txjFG0yijehNIjorBbYUznEq-r-pXkz_uwNNVgch_gFc4J1sphBTvD4XSD4KrkTtKpvX66wU2CE2KHuCg",
    specsSummary: "< 249g • 4K/60fps HDR • Omnidirectional Sensing",
    keySpecs: [
      { label: "Weight", value: "< 249g" },
      { label: "Camera", value: "4K/60fps HDR" },
      { label: "Sensing", value: "Omnidirectional" },
    ],
    highlightFeatures: ["< 249g Ultra-Light", "4K/60fps HDR Video", "Omnidirectional Sensing"],
    inStock: true,
  },
  {
    id: "dji-mini-3-pro",
    name: "DJI Mini 3 Pro",
    series: "Mini",
    tagline: "Lightweight creator drone designed for high-quality travel footage, portrait shots, and extended aerial shooting.",
    description: "Lightweight creator drone designed for high-quality travel footage, portrait shots, and extended aerial shooting.",
    startingPrice: "₹69,999",
    badge: "Top Value",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhycF7w2NMg7xp0dZktwB5-PG1mSPe9naP0SYXRhqk3x8UgbH59SPybYvJvd8FccMWLmutL5I54wBoJu_QoGwfmAtsp4TREUGVGIk89mHoRAHTrcpk1hLXbj6vGZVoiLDytmlucLrBC91tx2kh9WXy0bJ0tcOud4Dm_bGSaw2i1EHHt7tCl9PNGaFSnQonZwn6d_RZ50STVhVSLjcTu1_Pm2dA5LqOCTJ6NmXuLrhWoScvct6alkFMQ",
    specsSummary: "249g Class • 4K/60fps HDR • Tri-Directional Sensing",
    keySpecs: [
      { label: "Weight", value: "249g Class" },
      { label: "Camera", value: "4K/60fps HDR" },
      { label: "Sensing", value: "Tri-Directional" },
    ],
    highlightFeatures: ["249g Class Portability", "4K/60fps HDR Footage", "Tri-Directional Sensing"],
    inStock: true,
  },
  {
    id: "dji-mini-3",
    name: "DJI Mini 3",
    series: "Mini",
    tagline: "Compact long-endurance camera drone for everyday aerial photography with sharp 4K video and true vertical shooting.",
    description: "Compact long-endurance camera drone for everyday aerial photography with sharp 4K video and true vertical shooting.",
    startingPrice: "₹44,999",
    badge: "Starter Pro",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwpHLhsflWzrV_N_NDIxJyGH-VVWbWinorvgDkqQ01k6KWalsrQzSIFCqfRkoULK2DAhXrRUui7kK5zy0CKf25-jx-8X3FBg0YLZy00RNj3jPGqkyimH6ePrAFIswDt3BPjecsxucQ87-JcJgOfbN5jRwmv6ucPzGer-oxrMN8hl2SQJmzkzARFDdfLDZM3_7C9X3BXrk6OHFvH4UKHri_vB5Y5n0DwoGEGAhw5aeD5ppqsjYqe_cZAw",
    specsSummary: "< 249g • 4K HDR Video • True Vertical Shooting",
    keySpecs: [
      { label: "Weight", value: "< 249g" },
      { label: "Camera", value: "4K HDR Video" },
      { label: "Shooting", value: "True Vertical" },
    ],
    highlightFeatures: ["< 249g Compact Body", "4K HDR Video", "True Vertical Shooting"],
    inStock: true,
  },
  {
    id: "dji-mini-2-se",
    name: "DJI Mini 2 SE",
    series: "Mini",
    tagline: "Affordable pocket-size camera drone for beginners seeking stable aerial video, simple controls, and lightweight portability.",
    description: "Affordable pocket-size camera drone for beginners seeking stable aerial video, simple controls, and lightweight portability.",
    startingPrice: "₹34,999",
    badge: "Beginner Choice",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiT9zjvBIKMcQK8xKtzi0BP-ni3vOvh7kBGyXU_XTEgFbQf2q1di5IQta54qDJhP1jLAd0DNRh4TyNfcAs1L0ndkJ5zXRYXhg1MyEv6EwKC5nFYLxsA0YZjlSEQT4gEU5tHeB4xRixizpWmWoS9yo2DjCEErr-CY3cU1Rvzyp5k1XkgsFVuV7n3PC5ZqcZihXYMtOndJ_SPl_Sb102qCiToaD6WMpLRbfgNl6SgxDtAFrbdriC7WzWjg",
    specsSummary: "< 249g • 2.7K HD Video • 3-Axis Gimbal",
    keySpecs: [
      { label: "Weight", value: "< 249g" },
      { label: "Camera", value: "2.7K HD Video" },
      { label: "Gimbal", value: "3-Axis Stabilized" },
    ],
    highlightFeatures: ["< 249g Pocket Sized", "2.7K HD Video", "3-Axis Gimbal"],
    inStock: true,
  },

  // ── Air Series ──
  {
    id: "dji-air-3",
    name: "DJI Air 3",
    series: "Air",
    tagline: "Dual-camera aerial platform combining wide-angle landscapes with telephoto perspectives for travel, real-estate, and creator workflows.",
    description: "Dual-camera aerial platform combining wide-angle landscapes with telephoto perspectives for travel, real-estate, and creator workflows.",
    startingPrice: "₹1,24,999",
    badge: "Flagship Dual Camera",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhycF7w2NMg7xp0dZktwB5-PG1mSPe9naP0SYXRhqk3x8UgbH59SPybYvJvd8FccMWLmutL5I54wBoJu_QoGwfmAtsp4TREUGVGIk89mHoRAHTrcpk1hLXbj6vGZVoiLDytmlucLrBC91tx2kh9WXy0bJ0tcOud4Dm_bGSaw2i1EHHt7tCl9PNGaFSnQonZwn6d_RZ50STVhVSLjcTu1_Pm2dA5LqOCTJ6NmXuLrhWoScvct6alkFMQ",
    specsSummary: "24mm Wide + 70mm Tele • Dual Camera System • Long Flight Endurance",
    keySpecs: [
      { label: "Lenses", value: "24mm + 70mm Tele" },
      { label: "System", value: "Dual Camera" },
      { label: "Battery", value: "Long Endurance" },
    ],
    highlightFeatures: ["24mm Wide + 70mm Tele", "Dual Camera System", "Long Flight Endurance"],
    inStock: true,
  },
  {
    id: "dji-air-2s",
    name: "DJI Air 2S",
    series: "Air",
    tagline: "1-inch sensor camera drone built for detailed daylight and low-light imaging, cinematic movement, and advanced aerial content.",
    description: "1-inch sensor camera drone built for detailed daylight and low-light imaging, cinematic movement, and advanced aerial content.",
    startingPrice: "₹92,000",
    badge: "1-Inch Sensor",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3f21GeFl7LYYowtk9JADJej-llCnTNFWNVwZ9l3L8Ijz7CZ3e3EDDk4-Qgq_N6mEAbSCvMcVlbKM2vx671BqbV49pe8qrEdGGOSA7eAibaKaW8mMhBAvDXRvwtIoLh_f7rFvyPtaYsJDN0bdkKMMkYi9FBDoZGmVaTAge_txjFG0yijehNIjorBbYUznEq-r-pXkz_uwNNVgch_gFc4J1sphBTvD4XSD4KrkTtKpvX66wU2CE2KHuCg",
    specsSummary: "1-inch 20MP CMOS • 5.4K/30fps • 4K/60fps",
    keySpecs: [
      { label: "Sensor", value: "1-Inch 20MP CMOS" },
      { label: "Video 1", value: "5.4K/30fps" },
      { label: "Video 2", value: "4K/60fps" },
    ],
    highlightFeatures: ["1-Inch 20MP CMOS", "5.4K/30fps Recording", "4K/60fps High Frame"],
    inStock: true,
  },

  // ── Mavic Series ──
  {
    id: "dji-mavic-3-pro",
    name: "DJI Mavic 3 Pro",
    series: "Mavic",
    tagline: "Multi-camera professional drone platform for filmmakers and commercial creators needing Hasselblad imaging and versatile telephoto coverage.",
    description: "Multi-camera professional drone platform for filmmakers and commercial creators needing Hasselblad imaging and versatile telephoto coverage.",
    startingPrice: "₹2,15,000",
    badge: "Industry Flagship",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhycF7w2NMg7xp0dZktwB5-PG1mSPe9naP0SYXRhqk3x8UgbH59SPybYvJvd8FccMWLmutL5I54wBoJu_QoGwfmAtsp4TREUGVGIk89mHoRAHTrcpk1hLXbj6vGZVoiLDytmlucLrBC91tx2kh9WXy0bJ0tcOud4Dm_bGSaw2i1EHHt7tCl9PNGaFSnQonZwn6d_RZ50STVhVSLjcTu1_Pm2dA5LqOCTJ6NmXuLrhWoScvct6alkFMQ",
    specsSummary: "Hasselblad + Dual Tele • 5.1K ProRes • Triple-Camera System",
    keySpecs: [
      { label: "Optics", value: "Hasselblad + Dual Tele" },
      { label: "Video", value: "5.1K ProRes" },
      { label: "Cameras", value: "Triple-Camera" },
    ],
    highlightFeatures: ["Hasselblad + Dual Tele", "5.1K ProRes Cinema", "Triple-Camera System"],
    inStock: true,
  },
  {
    id: "dji-mavic-3-classic",
    name: "DJI Mavic 3 Classic",
    series: "Mavic",
    tagline: "Professional aerial camera drone focused on Hasselblad image quality, stable flight, and extended shooting sessions.",
    description: "Professional aerial camera drone focused on Hasselblad image quality, stable flight, and extended shooting sessions.",
    startingPrice: "₹1,48,000",
    badge: "Cinema Workhorse",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3f21GeFl7LYYowtk9JADJej-llCnTNFWNVwZ9l3L8Ijz7CZ3e3EDDk4-Qgq_N6mEAbSCvMcVlbKM2vx671BqbV49pe8qrEdGGOSA7eAibaKaW8mMhBAvDXRvwtIoLh_f7rFvyPtaYsJDN0bdkKMMkYi9FBDoZGmVaTAge_txjFG0yijehNIjorBbYUznEq-r-pXkz_uwNNVgch_gFc4J1sphBTvD4XSD4KrkTtKpvX66wU2CE2KHuCg",
    specsSummary: "4/3 CMOS Hasselblad • 5.1K Video • Extended Flight Time",
    keySpecs: [
      { label: "Sensor", value: "4/3 CMOS Hasselblad" },
      { label: "Resolution", value: "5.1K Video" },
      { label: "Endurance", value: "Extended Flight" },
    ],
    highlightFeatures: ["4/3 CMOS Hasselblad", "5.1K Ultra Video", "Extended Flight Time"],
    inStock: true,
  },

  // ── FPV Series ──
  {
    id: "dji-avata-2",
    name: "DJI Avata 2",
    series: "FPV",
    tagline: "Immersive FPV camera drone for cinematic flight, 4K HDR aerial video and agile one-person flying.",
    description: "Immersive FPV camera drone for cinematic flight, 4K HDR aerial video and agile one-person flying.",
    startingPrice: "₹98,500",
    badge: "New Gen FPV",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLZ__pipDW7kB5YQ2MoEwJDJBLhRdfQeVn_LPC6hY-FurB16WAfou0HY8n3j34NqjFjZj_y_R2vmTkzf_R0DGfHkPZaG57Djn6S-dCICSE4VV8K4yx2KHichXsNZZaMGQBfGdEADrw17_5jUAWva0eQPoMB9sl_Jc5U6xS-EDUtT3fLC88GjM_XcaH_2YtYX28vHxSgZ_uhP2SchpUGQ6LYZ6mYDZ02n59NaGhj63tx9ukATxXOSlPeQ",
    specsSummary: "155° Ultra-Wide FOV • 4K/60fps HDR Video",
    keySpecs: [
      { label: "FOV", value: "155° Ultra-Wide" },
      { label: "Video", value: "4K/60fps HDR" },
      { label: "Category", value: "Immersive FPV" },
    ],
    highlightFeatures: ["155° Ultra-Wide FOV", "4K/60fps HDR Video", "Agile FPV Control"],
    inStock: true,
  },

  // ── Enterprise Series ──
  {
    id: "dji-matrice-350-rtk",
    name: "DJI Matrice 350 RTK",
    series: "Enterprise",
    tagline: "Professional enterprise UAV platform for inspection, mapping, surveying and multi-payload aerial operations.",
    description: "Professional enterprise UAV platform for inspection, mapping, surveying and multi-payload aerial operations.",
    startingPrice: "₹7,50,000",
    badge: "Enterprise Flagship",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAENUIuCItOEAPXmul13vRGxMk7lE6P1iAR1qk2HWvPXFwubLDVwCiB8-oSP1sKxoTzsq7ExMjVeLNw_seuPHSR183iOj3R-MPAbrHvhRe39ZSdDpWEvgetkBWxgXg5ASbnHkALTKWhsLEwLmHWyGbvZT1KZb8KOKrsnsB1C_hpnJ-qoEp-5E9NcfUt9TkUq09gAvJ7Bm57w4_idh1LiPgJH9ya2XZubs3x1N_jMw33JCjeYY6gNr711g",
    specsSummary: "2.7 kg Max Multi-Payload • Up to 55 Minutes",
    keySpecs: [
      { label: "Payload", value: "2.7 kg Multi-Payload" },
      { label: "Flight Time", value: "Up to 55 Mins" },
      { label: "Positioning", value: "RTK Ready" },
    ],
    highlightFeatures: ["2.7 kg Max Multi-Payload", "Up to 55 Minutes Flight", "Inspection & Mapping UAV"],
    inStock: true,
  },
  {
    id: "dji-agras-t40",
    name: "DJI Agras T40",
    series: "Enterprise",
    tagline: "High-capacity agricultural drone for precision crop spraying and granular spreading across demanding farm operations.",
    description: "High-capacity agricultural drone for precision crop spraying and granular spreading across demanding farm operations.",
    startingPrice: "₹9,50,000",
    badge: "Agri Heavy-Lifter",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1emkxy559qYUpFmLI2Xwcr1ucuJbtFmQcmUm5KS0I0mF8ghMAW-qk_2CnwrogfW1N0Y83ChDFEnrLsPqAeADpZLeu2SMcgalEDkeN-ALIkCkXGHlnemimUDz5diX2EU0FcAFD9K3gYOulTjfSct4uqf40AHmPKXpKqG2KjnRD2JhltbL_mPttHzTlmfKrI4jYUA_9YuJdyMqHvb4yxqDmgU8SD8NdCGjlJ4gp8bCpy-A1hR1xqa8FKA",
    specsSummary: "40 Litres Liquid • 50 kg Granular",
    keySpecs: [
      { label: "Liquid Tank", value: "40 Litres" },
      { label: "Granular", value: "50 kg Spreading" },
      { label: "Target", value: "Precision Farming" },
    ],
    highlightFeatures: ["40 Litres Liquid Spraying", "50 kg Granular Spreading", "Demanding Farm Operations"],
    inStock: true,
  },
];
