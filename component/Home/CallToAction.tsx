"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-white py-12 md:py-20 tracking-wide">
      {/* 
         CONTAINER: Matches Header left/right padding 
         mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 
      */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full min-h-[150px] md:h-[110px] rounded-[2px] md:rounded-[10px] overflow-hidden flex flex-col md:flex-row items-center shadow-2xl shadow-black/10"
        >
          
          {/* Background Image (Right side on desktop, full on mobile) */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover object-right"
            />
            {/* The Green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#065F46] via-[#065F46] md:via-[#065F46]/95 to-transparent"></div>
          </div>

          {/* Content Area */}
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 py-10 md:px-16 md:py-0">
            
            {/* Left: Text */}
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white leading-tight">
                Ready to Find Your <br />
                <span className="text-[#D4AF37]">Dream Property?</span>
              </h2>
              <p className="text-white/80 text-sm md:text-base mt-3 font-medium">
                Book a free consultation with our property experts today.
              </p>
            </div>

            {/* Right: Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#c4a032] text-[#1F2937] px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl group"
            >
              Schedule Free Consultation
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}