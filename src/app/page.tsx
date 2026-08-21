"use client";

import { useEffect, useState } from "react";
import { motion, type Variants, type Transition, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { ArrowRight, Target, MapPin, Phone, Clock, ShieldCheck, Factory, Cpu, Camera, Plane, PenTool, Mail, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const fadeTransition: Transition = { duration: 0.8, ease: "easeOut" };
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: fadeTransition }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const products = [
    { name: "Camera Drones", icon: <Camera className="w-5 h-5" /> },
    { name: "FPV & Racing Drones", icon: <Plane className="w-5 h-5" /> },
    { name: "Professional Drones", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Agricultural Drones", icon: <Target className="w-5 h-5" /> },
    { name: "Survey & Mapping Drones", icon: <MapPin className="w-5 h-5" /> },
    { name: "Industrial & Enterprise Drones", icon: <Factory className="w-5 h-5" /> },
    { name: "Hobby & Kids Drones", icon: <ArrowRight className="w-5 h-5" /> },
    { name: "Training Drones", icon: <Cpu className="w-5 h-5" /> },
    { name: "Custom Built Drones", icon: <PenTool className="w-5 h-5" /> },
  ];

  const services = [
    "DJI Drone Servicing",
    "DJI Drone Repair",
    "DJI Drone Diagnostics",
    "DJI Drone Maintenance"
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900 selection:bg-primary selection:text-white font-sans overflow-x-hidden relative">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-17 sm:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/logo-removebg-preview.png"
              alt="Dronebhai Logo"
              className="h-12 sm:h-17 w-auto object-contain"
            />
          </a>
          <div className="hidden lg:flex gap-10 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile View */}
            <a href="tel:8002800380" className="flex lg:hidden items-center justify-center p-2 rounded-full bg-primary/10 text-primary transition-transform active:scale-95">
              <Phone className="w-4 h-4" />
            </a>
            <a href="https://wa.me/918002800380" target="_blank" rel="noopener noreferrer" className="flex lg:hidden items-center justify-center p-2 rounded-full bg-[#25D366]/10 text-[#25D366] transition-transform active:scale-95">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden items-center justify-center p-2 ml-1 text-gray-900"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop View */}
            <a href="tel:8002800380" className="hidden lg:flex items-center gap-2 text-primary font-medium hover:text-teal-700 transition-colors text-sm">
              <Phone className="w-4 h-4" />
              8002 8003 80
            </a>
            <a href="https://wa.me/918002800380" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-medium hover:bg-[#20bd5a] transition-all hover:-translate-y-[2px] shadow-sm hover:shadow-md text-sm ml-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-6"
            >
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-medium text-lg">About</a>
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-medium text-lg">Products</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-medium text-lg">Services</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-medium text-lg">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-32 px-4 sm:px-8 max-w-7xl mx-auto w-full min-h-[90vh] sm:min-h-[100vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">

          {/* Left Side: Title and Buttons */}
          <div className="flex flex-col items-start text-left mt-10 lg:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-gray-900 mb-8 sm:mb-10 leading-[1.1] sm:leading-tight text-balance"
            >
              Elevate Your <br /> Aerial Vision
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <a href="#products" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 sm:py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
                View Products
              </a>
              <a href="#services" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 sm:py-4 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
                DJI Services
              </a>
            </motion.div>
          </div>

          {/* Right Side: Drone Image (Static) */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-3/4 sm:w-full max-w-xs sm:max-w-md lg:max-w-xl aspect-square mix-blend-multiply opacity-95 mx-auto">
                <Image
                  src="/realistic-drone.jpg"
                  alt="Dronebhai Drone"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50/50 border-t border-gray-100 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="max-w-4xl mx-auto text-center p-6 rounded-3xl"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-900 tracking-tight">About Dronebhai</h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            A dedicated drone business focused on selling complete drones and creating custom manufactured drones. We cover multiple drone categories and specialize in DJI drone services.
          </p>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-32 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-12 sm:mb-20 flex justify-center text-center w-full"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">Our Products</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="group flex flex-col items-center text-center bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:border-gray-200 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                    <div className="scale-[1.2] sm:scale-[1.3]">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900">{product.name}</h3>
                  <div className="h-[2px] w-8 bg-gray-200 mt-6 group-hover:w-16 group-hover:bg-primary transition-all duration-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DJI Services Section */}
      <section id="services" className="py-16 sm:py-32 px-4 sm:px-8 border-t border-gray-100 relative z-10 bg-gray-50/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div variants={fadeUpVariant} className="mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight mb-3 sm:mb-6">DJI Service</h2>
              <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                Exclusive service side of the business dedicated to repairing and maintaining premium DJI equipment.
              </p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="w-full max-w-4xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center justify-center gap-4 text-gray-900 text-base sm:text-lg font-light pb-4 border-b border-gray-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-32 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight mb-12 sm:mb-20 text-center"
          >
            Contact & Branches
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-16 max-w-5xl mx-auto"
          >
            {/* Branch 1 */}
            <motion.div variants={fadeUpVariant} className="bg-white p-8 sm:p-12 border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">South Bopal Flagship Repair Lab</h3>
                <p className="text-sm text-gray-500">Main Flagship Lab</p>
              </div>
              <div className="space-y-5 sm:space-y-6 text-gray-600 font-light text-sm sm:text-base">
                <p className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">103, First Floor, Sun South Winds, Safal Parisar Road, South Bopal, Ahmedabad, Gujarat 380057</span>
                </p>
                <p className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                  11:00 AM - 7:00 PM (Mon - Sat)
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                  +91 8002 8003 80
                </p>
              </div>
            </motion.div>

            {/* Branch 2 */}
            <motion.div variants={fadeUpVariant} className="bg-white p-8 sm:p-12 border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">Tragad Service Centre</h3>
                <p className="text-sm text-gray-500">Branch Repair Lab</p>
              </div>
              <div className="space-y-5 sm:space-y-6 text-gray-600 font-light text-sm sm:text-base">
                <p className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">Shop 12, Ground Floor, Commercial Hub, Tragad Road, Chandkheda, Ahmedabad, Gujarat 382470</span>
                </p>
                <p className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                  11:00 AM - 7:00 PM (Mon - Sat)
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                  +91 8002 8003 80
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="mt-20 sm:mt-28 flex justify-center px-4"
          >
            <div className="bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-[2.5rem] p-8 sm:p-16 text-center max-w-3xl w-full shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4">Say hello to us</p>
                <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-6 sm:mb-8">How can we help you today?</h3>

                <a
                  href="mailto:hello@dronebhai.com"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-light text-primary hover:text-teal-700 transition-all tracking-tight break-all lg:break-normal group/link"
                >
                  <span className="relative pb-1">
                    hello@dronebhai.com
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/30 origin-right scale-x-0 group-hover/link:origin-left group-hover/link:scale-x-100 transition-transform duration-500"></span>
                  </span>
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-gray-100 px-4 sm:px-8 text-center text-gray-400 font-light text-xs sm:text-sm relative z-10 bg-white">
        <p>&copy; {new Date().getFullYear()} Dronebhai. All rights reserved.</p>
      </footer>
    </main>
  );
}
