"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Home Buyer",
    content: "PrimeNest Realty made my home buying experience seamless. Their team was professional and guided me at every step.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Investor",
    content: "Excellent service and transparent deals. I found the perfect investment property through PrimeNest Realty.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Shah",
    role: "Business Owner",
    content: "The team is very knowledgeable and helpful. I highly recommend their real estate services in Ahmedabad.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "First Time Buyer",
    content: "Outstanding support and very professional. They found me a home that exceeded all my expectations.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-rotate logic - changes every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 tracking-wide overflow-hidden">
      {/* 
         CONTAINER: Matches Header left/right padding exactly 
         mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 
      */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.4em] block mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1F2937] mb-6">
            What Our Clients Say
          </h2>
          
          {/* Decorative Divider with Star */}
          <div className="flex items-center justify-center gap-4 max-w-[200px] mx-auto">
            <div className="h-[1.5px] w-full bg-[#D4AF37]/40"></div>
            <Star className="text-[#D4AF37] fill-[#D4AF37]" size={14} />
            <div className="h-[1.5px] w-full bg-[#D4AF37]/40"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              >
                {/* 
                   Display logic: 
                   Mobile: 1 card
                   Tablet: 2 cards
                   Desktop: 3 cards
                */}
                {[0, 1, 2].map((offset) => {
                  const item = testimonials[(index + offset) % testimonials.length];
                  return (
                    <div 
                      key={`${item.id}-${offset}`}
                      className={`bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#E5E7EB] flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1
                        ${offset === 1 ? 'hidden md:flex' : ''} 
                        ${offset === 2 ? 'hidden lg:flex' : ''}
                      `}
                    >
                      {/* Quote Icon - Brand Gold */}
                      <div className="mb-6">
                        <Quote className="text-[#D4AF37] fill-[#D4AF37]" size={36} strokeWidth={1} />
                      </div>

                      {/* Content - Responsive text size */}
                      <p className="text-[#4B5563] text-sm md:text-base leading-relaxed mb-8 flex-grow italic">
                        "{item.content}"
                      </p>

                      {/* User Info Section */}
                      <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                        <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/20 shadow-md transition-colors group-hover:border-[#D4AF37]">
                          <img 
                            src={item.avatar} 
                            alt={item.name} 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="text-[#1F2937] font-bold text-lg leading-tight font-[family-name:var(--font-playfair)]">
                            {item.name}
                          </h4>
                          <p className="text-[#9CA3AF] text-xs font-medium mt-1 uppercase tracking-wider">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots - Matches your color scheme */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === index 
                  ? "w-8 h-2.5 bg-[#D4AF37]" 
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}