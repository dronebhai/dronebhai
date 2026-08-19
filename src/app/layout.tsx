import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dronebhai | Premium Drone Sales, Custom Manufacturing & DJI Services",
  description: "Dronebhai offers high-quality drone sales, custom drone manufacturing, and expert DJI drone servicing. Explore our wide range of kids, hobby, racing, agricultural, and enterprise drones.",
  keywords: "drone, drone sales, custom drones, DJI service, DJI repair, agricultural drones, FPV drones, drone manufacturing, Dronebhai, Robuzta Techlabs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
