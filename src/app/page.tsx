"use client";

import { useEffect } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import Lenis from "lenis";
import { ArrowRight, Target, MapPin, Phone, Clock, ShieldCheck, Factory, Cpu, Camera, Plane, PenTool } from "lucide-react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
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
    { name: "FPV & Racing", icon: <Plane className="w-5 h-5" /> },
    { name: "Professional", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Agricultural", icon: <Target className="w-5 h-5" /> },
    { name: "Survey & Mapping", icon: <MapPin className="w-5 h-5" /> },
    { name: "Industrial & Enterprise", icon: <Factory className="w-5 h-5" /> },
    { name: "Hobby & Kids", icon: <ArrowRight className="w-5 h-5" /> },
    { name: "Training", icon: <Cpu className="w-5 h-5" /> },
    { name: "Custom Built", icon: <PenTool className="w-5 h-5" /> },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 text-gray-900 font-semibold text-lg sm:text-2xl tracking-tight">
            <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Dronebhai
          </div>
          <div className="hidden lg:flex gap-10 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:8002800380" className="flex md:hidden items-center justify-center p-2 rounded-full bg-primary/10 text-primary">
              <Phone className="w-4 h-4" />
            </a>
            <a href="tel:8002800380" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-teal-700 transition-colors text-sm">
              <Phone className="w-4 h-4" />
              8002 8003 80
            </a>
          </div>
        </div>
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
              Drone Sales & <br /> Custom Creation
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
            className="mb-10 sm:mb-20 flex items-end justify-between"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">Products</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-16"
          >
            {products.map((product, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariant}
                className="group flex flex-col items-start bg-white sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border sm:border-none border-gray-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-4 sm:mb-6 text-gray-400 group-hover:text-primary group-hover:border-primary transition-colors shadow-sm group-hover:shadow-md">
                  {product.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900">{product.name}</h3>
                <div className="h-[1px] w-12 bg-gray-200 mt-4 sm:mt-5 group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
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
          <div className="flex flex-col md:flex-row gap-10 sm:gap-20">
            <motion.div variants={fadeUpVariant} className="md:w-1/3">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight mb-3 sm:mb-6">DJI Service</h2>
              <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed">
                Exclusive service side of the business dedicated to repairing and maintaining premium DJI equipment.
              </p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="md:w-2/3">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-900 text-base sm:text-lg font-light pb-4 border-b border-gray-200/60">
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
                  +91 999 245 2459
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
                  +91 999 245 2459
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="mt-20 sm:mt-28 text-center"
          >
            <p className="text-gray-500 text-sm font-light mb-2 sm:mb-4">Central Support Number</p>
            <a href="tel:8002800380" className="text-3xl sm:text-5xl font-light text-primary hover:text-teal-700 transition-colors tracking-tight">8002 8003 80</a>
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
