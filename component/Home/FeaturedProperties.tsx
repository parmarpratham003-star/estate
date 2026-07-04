"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  Bookmark,
  ArrowRight,
  Star,
} from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Green Park",
    location: "Bopal, Ahmedabad",
    beds: "4 Bed",
    baths: "5 Bath",
    sqft: "4500 sqft",
    price: "4.75 Cr",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Modern 3BHK Apartment",
    location: "Prahlad Nagar, Ahmedabad",
    beds: "3 Bed",
    baths: "3 Bath",
    sqft: "1650 sqft",
    price: "1.35 Cr",
    badge: "New",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "SG Highway, Ahmedabad",
    beds: "Office",
    baths: "2 Bath",
    sqft: "2200 sqft",
    price: "2.80 Cr",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Premium Family House",
    location: "South Bopal, Ahmedabad",
    beds: "4 Bed",
    baths: "4 Bath",
    sqft: "3200 sqft",
    price: "2.65 Cr",
    badge: "New",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-20 tracking-wide overflow-hidden">
      <style>{`
        @keyframes fpFadeUp {
          0% { opacity: 0; transform: translateY(26px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fp-animate {
          opacity: 0;
          animation: fpFadeUp 0.7s ease-out forwards;
        }
      `}</style>

      {/* Container follows Header left/right padding */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="fp-animate block text-[#D4AF37] font-bold text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em]" style={{ animationDelay: "0ms" }}>
            Featured Properties
          </span>
          <h2 className="fp-animate text-[28px] sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1F2937] mt-3 mb-5 sm:mb-6" style={{ animationDelay: "100ms" }}>
            Explore Our Featured Properties
          </h2>

          <div className="fp-animate flex items-center justify-center gap-3 sm:gap-4 max-w-[180px] sm:max-w-[220px] mx-auto" style={{ animationDelay: "200ms" }}>
            <div className="h-[1.5px] w-full bg-[#D4AF37]/50"></div>
            <Star className="text-[#D4AF37] fill-[#D4AF37]" size={14} />
            <div className="h-[1.5px] w-full bg-[#D4AF37]/50"></div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {properties.map((property, i) => (
            <div
              key={property.id}
              className="fp-animate group relative h-[340px] sm:h-[380px] lg:h-[420px] w-full rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 shadow-xl hover:shadow-2xl"
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              {/* Background Image */}
              <img
                src={property.image}
                alt={property.title}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 brightness-90 group-hover:brightness-100 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Top Row: Type & Bookmark */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start">
                <span className="bg-white/90 backdrop-blur-md text-[#1F2937] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-md uppercase">
                  {property.badge}
                </span>
                <button className="bg-white/90 backdrop-blur-md p-1.5 sm:p-2 rounded-lg text-gray-600 hover:text-[#065F46] transition-all shadow-md">
                  <Bookmark size={16} className="sm:hidden" />
                  <Bookmark size={18} className="hidden sm:block" />
                </button>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-[15px] sm:text-lg font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {property.title}
                </h3>

                <div className="flex items-center gap-1.5 text-gray-300 text-[11px] sm:text-xs mb-3 sm:mb-4">
                  <MapPin size={12} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate">{property.location}</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4 sm:mb-5">
                  <span className="text-lg sm:text-xl font-bold text-[#38bdf8]">₹ {property.price}</span>
                </div>

                {/* Glassmorphism Info Badges */}
                <div className="flex items-center gap-1.5">
                  <div className="flex flex-1 items-center justify-center gap-1 sm:gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 py-1.5 sm:py-2 rounded-lg text-white text-[9px] sm:text-[10px] font-medium">
                    <Square size={12} className="text-gray-300 shrink-0" />
                    <span>{property.sqft.split(" ")[0]} sqr</span>
                  </div>
                  <div className="flex flex-1 items-center justify-center gap-1 sm:gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 py-1.5 sm:py-2 rounded-lg text-white text-[9px] sm:text-[10px] font-medium">
                    <BedDouble size={13} className="text-gray-300 shrink-0" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex flex-1 items-center justify-center gap-1 sm:gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 py-1.5 sm:py-2 rounded-lg text-white text-[9px] sm:text-[10px] font-medium">
                    <Bath size={13} className="text-gray-300 shrink-0" />
                    <span>{property.baths.split(" ")[0]} Bath</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="fp-animate mt-10 sm:mt-16 text-center" style={{ animationDelay: `${300 + properties.length * 120 + 100}ms` }}>
          <button className="inline-flex items-center gap-3 rounded-lg bg-[#065F46] px-7 sm:px-10 py-3 sm:py-4 text-[14px] sm:text-base font-semibold text-white transition-all duration-500 ease-in-out hover:bg-[#D4AF37] hover:text-[#1F2937] hover:shadow-xl hover:shadow-[#D4AF37]/20 group">
            View All Properties
            {/* <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" /> */}
          </button>
        </div>
      </div>
    </section>
  );
}