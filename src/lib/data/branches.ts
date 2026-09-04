export interface BranchDetail {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  phone: string;
  email: string;
  hours: string;
  openingHours: {
    days: string[];
    opens: string;
    closes: string;
  }[];
  geo: {
    latitude: number;
    longitude: number;
  };
  mapImageUrl: string;
  mapImageAlt: string;
  mapsUrl: string;
  directions: string;
  landmarks: string[];
  nearbyLocations: {
    name: string;
    distance: string;
    travelTime: string;
    direction: string;
  }[];
  servicesOffered: {
    title: string;
    desc: string;
    icon: string;
  }[];
  labFeatures: string[];
  faqs: { q: string; a: string }[];
}

export const branchesData: BranchDetail[] = [
  {
    id: "south-bopal",
    slug: "south-bopal",
    name: "South Bopal Flagship Lab & Service Center",
    tagline: "Primary Ahmedabad technical laboratory, cleanroom diagnostic benches, and commercial UAV fleet hub.",
    badge: "Flagship Cleanroom Lab",
    address: {
      street: "123 Aerial Hub Building, SOBO Center Road",
      area: "South Bopal",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "380058",
      fullFormatted: "123 Aerial Hub Building, SOBO Center Road, South Bopal, Ahmedabad, Gujarat 380058",
    },
    phone: "+91-8002800380",
    email: "bopal@dronebhai.com",
    hours: "Monday – Saturday: 11:00 AM – 7:00 PM (Sunday Closed)",
    openingHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "19:00",
      },
    ],
    geo: {
      latitude: 23.0366,
      longitude: 72.4607,
    },
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuOK9fnPnQcN7Nrh9q-iRD6hA7iDdUaLBY3Zk9LWuU1NAt8wtPRp252L2tEgh5oSk1E0qSHFaJbme82jHDjPdJKiguKi5nAHE2LCwxPT6vc_ph9JTl9lhzGJuMMvfv5BAEpalT8X3uGyvnzgeYdPMsHSVN1PlEm-xr5XQBIQ5Z6nVjQa0D-WPzT2ondEsR0cQ3HW3Q5R5eClnfWZ-8OoDOyJsqY0da6_BAYYla2vHWJM0k23zJuZqSfQ",
    mapImageAlt:
      "Map of Dronebhai South Bopal Flagship Drone Lab located near SOBO Center in Ahmedabad.",
    mapsUrl: "https://maps.google.com/?q=South+Bopal+Ahmedabad+Dronebhai",
    directions: "Located 400m from SOBO Center Circle. Easily accessible via SP Ring Road and Bopal-Ghuma Main Road.",
    landmarks: ["Near SOBO Center", "5 mins from SP Ring Road Bopal Flyover", "Opposite Aerial Tech Square"],
    nearbyLocations: [
      { name: "Bopal", distance: "1.2 km", travelTime: "4 mins", direction: "North" },
      { name: "Shela", distance: "2.5 km", travelTime: "6 mins", direction: "South" },
      { name: "Ghuma", distance: "3.1 km", travelTime: "7 mins", direction: "West" },
      { name: "Shilaj", distance: "3.8 km", travelTime: "8 mins", direction: "North" },
      { name: "Ambli Road", distance: "4.5 km", travelTime: "10 mins", direction: "East" },
      { name: "Iscon Cross Roads", distance: "6.2 km", travelTime: "12 mins", direction: "East" },
      { name: "Prahlad Nagar", distance: "7.0 km", travelTime: "14 mins", direction: "South-East" },
      { name: "Bodakdev", distance: "7.5 km", travelTime: "15 mins", direction: "North-East" },
      { name: "Thaltej", distance: "8.0 km", travelTime: "15 mins", direction: "North-East" },
      { name: "Vastrapur", distance: "8.8 km", travelTime: "16 mins", direction: "East" },
      { name: "Sanand GIDC", distance: "14.5 km", travelTime: "18 mins", direction: "West" },
      { name: "Sarkhej", distance: "8.2 km", travelTime: "14 mins", direction: "South" },
    ],
    servicesOffered: [
      {
        title: "Class-100 Cleanroom Diagnostics",
        desc: "Precision ESD anti-static workbenches for motherboard micro-soldering and LiDAR sensor calibration.",
        icon: "science",
      },
      {
        title: "DJI Care & Fast-Track Service",
        desc: "Same-day gimbal ribbon, motor arm, and optical sensor replacement using genuine OEM parts.",
        icon: "build",
      },
      {
        title: "Custom Industrial & FPV Builds",
        desc: "Aerospace engineering bay for agricultural sprayers, thermal mapping drones, and CineWhoop rigs.",
        icon: "precision_manufacturing",
      },
      {
        title: "New DJI Drone Sales & Unboxing",
        desc: "Full retail stock of DJI Mini 4 Pro, Air 3, Mavic 3 Pro with free flight tutorial and IMU calibration.",
        icon: "shopping_bag",
      },
    ],
    labFeatures: [
      "ESD Grounded Anti-Static Benches",
      "Optical MTF Camera Calibration Target",
      "Outdoor 50m Flight Stability Test Field",
      "Genuine DJI OEM Spares Warehouse",
      "Customer Lounge with Live Service Stream",
    ],
    faqs: [
      {
        q: "Do I need an appointment for drone diagnostics in South Bopal?",
        a: "No appointment is needed! Walk-in diagnostics are welcomed Monday through Saturday, 11:00 AM to 7:00 PM.",
      },
      {
        q: "Is parking available at the South Bopal lab?",
        a: "Yes, dedicated customer parking for cars and two-wheelers is available directly in front of the building.",
      },
      {
        q: "Can I collect my new DJI drone purchase from South Bopal?",
        a: "Yes, all models in stock can be unboxed, calibrated, and collected in-person with a full demo from our flight team.",
      },
    ],
  },
  {
    id: "tragad",
    slug: "tragad",
    name: "Tragad Service Centre & Retail Hub",
    tagline: "North Ahmedabad drone showroom, rapid DJI service desk, and pilot experience lab.",
    badge: "North Ahmedabad Hub",
    address: {
      street: "45 Tech Park Phase 2, Tragad Road",
      area: "Tragad",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "382481",
      fullFormatted: "45 Tech Park Phase 2, Tragad Road, Tragad, Ahmedabad, Gujarat 382481",
    },
    phone: "+91-8002800380",
    email: "tragad@dronebhai.com",
    hours: "Monday – Saturday: 11:00 AM – 7:00 PM (Sunday Closed)",
    openingHours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "19:00",
      },
    ],
    geo: {
      latitude: 23.1194,
      longitude: 72.5858,
    },
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-y50Fk6-ZbJ_ko8YE0lYvbEtFdFU6Zrb7jF396t1jy01vdxb6-CM6Hcrky74NmJlpMeoOuCPJ_xnKbN5KAqw8FJ0ZM3Kvd89_0Q60G9VgGFaODVcIec8qewP1oh7erll5G6btmy0HD0AvjmjcahQ-XNi2WMxk1FU5b3YtG-TMY8yYguIUx7ATR5pdo_H9L7KYgTaHJVd_NmES2mL623Ph2lnUiLJNyuqAemTKuXUcOYSlvUzlHuHDTw",
    mapImageAlt:
      "Map of Dronebhai Tragad Service Centre located on Tragad Road near Chandkheda in North Ahmedabad.",
    mapsUrl: "https://maps.google.com/?q=Tragad+Ahmedabad+Dronebhai",
    directions: "Directly on Tragad Main Road, 5 minutes from Chandkheda Railway Station and 8 minutes from Vaishnodevi Circle.",
    landmarks: ["Near Tech Park Phase 2", "5 mins from Chandkheda Main Road", "Close to Zundal Circle"],
    nearbyLocations: [
      { name: "Chandkheda", distance: "2.1 km", travelTime: "5 mins", direction: "South" },
      { name: "Motera", distance: "4.2 km", travelTime: "9 mins", direction: "South-East" },
      { name: "Zundal", distance: "3.0 km", travelTime: "6 mins", direction: "North" },
      { name: "Gota", distance: "5.5 km", travelTime: "11 mins", direction: "West" },
      { name: "Vaishnodevi Circle", distance: "4.8 km", travelTime: "9 mins", direction: "North-West" },
      { name: "New C.G. Road", distance: "3.4 km", travelTime: "7 mins", direction: "South" },
      { name: "Sabarmati", distance: "6.8 km", travelTime: "13 mins", direction: "South" },
      { name: "Ranip", distance: "7.2 km", travelTime: "14 mins", direction: "South-West" },
      { name: "Jagatpur", distance: "4.0 km", travelTime: "8 mins", direction: "West" },
      { name: "Adalaj", distance: "6.5 km", travelTime: "10 mins", direction: "North" },
      { name: "Koba Circle", distance: "9.2 km", travelTime: "14 mins", direction: "North-East" },
      { name: "GIFT City / Gandhinagar", distance: "14.0 km", travelTime: "18 mins", direction: "North-East" },
    ],
    servicesOffered: [
      {
        title: "Walk-In DJI Drone Diagnostics",
        desc: "Quick 30-minute triage for gimbal errors, compass calibration, and firmware mismatch.",
        icon: "troubleshoot",
      },
      {
        title: "Propeller & Battery Swap Desk",
        desc: "Instant over-the-counter supply of genuine DJI Intelligent Flight Batteries and propellers.",
        icon: "battery_charging_full",
      },
      {
        title: "Retail Demo & Drone Sales",
        desc: "Touch-and-feel display units for DJI Mini 4 Pro, DJI Avata 2, and cinema camera stabilizers.",
        icon: "storefront",
      },
      {
        title: "Doorstep Pickup / Courier Dispatch",
        desc: "Secure drop-off point for outstation pilot repairs and enterprise service dispatches.",
        icon: "local_shipping",
      },
    ],
    labFeatures: [
      "Rapid Service Intake Station",
      "Interactive Product Showcase Lounge",
      "DJI Firmware Flashing Workstation",
      "Official Accessory & Filter Wall",
      "Secure Parcel Dispatch Locker",
    ],
    faqs: [
      {
        q: "Is the Tragad branch easily accessible from Gandhinagar and GIFT City?",
        a: "Yes! Located just off the SG Highway / Koba road link, Tragad is only 15–18 minutes from Gandhinagar and GIFT City.",
      },
      {
        q: "Can I get on-the-spot firmware updates at Tragad?",
        a: "Yes, our technicians can update your drone, remote controller, and battery firmware within 15–20 minutes.",
      },
      {
        q: "What payment methods are accepted at Tragad?",
        a: "We accept UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and corporate GST bank transfers.",
      },
    ],
  },
];

export function getBranchBySlug(slug: string): BranchDetail | undefined {
  return branchesData.find((b) => b.slug === slug);
}
