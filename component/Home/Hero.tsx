"use client";

import { useEffect, useState } from "react";
import { ArrowRight, User2, Building2 } from "lucide-react";

// Add your own property photos to the /public folder, then reference them here.
// Example: place files at public/hero-1.jpg, public/hero-2.jpg, public/hero-3.jpg
const slides = [
  "Home/hero1.png",
  "Home/hero22.png",
  "Home/hero3.png",
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] overflow-hidden">
      <style>{`
        @keyframes heroFadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          opacity: 0;
          animation: heroFadeUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Low-opacity overlay, concentrated behind the text on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#065F46]/60 via-[#065F46]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-xl py-12 sm:py-16">

          {/* Eyebrow badge */}
          <div
            className="hero-animate flex items-center gap-3 mb-5 sm:mb-6"
            style={{ animationDelay: "0ms" }}
          >
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#D4AF37] text-[#065F46] shadow-md shadow-black/20">
              <Building2 size={15} />
            </span>
            <span className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37] [text-shadow:0_1px_6px_rgba(0,0,0,0.55)]">
              Find Your Dream Property
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero-animate font-[family-name:var(--font-playfair)] text-[32px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.15] text-[#F9FAFB] [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]"
            style={{ animationDelay: "120ms" }}
          >
            Find Your Perfect
            <br />
            <span className="text-[#D4AF37]">Home</span>
          </h1>

          {/* Description */}
          <p
            className="hero-animate mt-4 sm:mt-5 max-w-md text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-[#F9FAFB] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "240ms" }}
          >
            Discover premium residential and commercial properties
            in prime locations. Whether you&apos;re buying, selling, or
            investing, PrimeNest Realty helps you make the right decision.
          </p>

          {/* CTAs */}
          <div
            className="hero-animate mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <button className="flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 sm:px-6 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold text-[#1F2937] shadow-md shadow-black/20 transition-colors duration-300 hover:bg-[#F9FAFB]">
              Explore Properties
              <ArrowRight size={17} />
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-[#F9FAFB]/70 bg-black/10 px-5 sm:px-6 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold text-[#F9FAFB] transition-colors duration-300 hover:bg-[#F9FAFB] hover:text-[#065F46]">
              Contact Agent
              <User2 size={17} />
            </button>
          </div>

          {/* Slide indicators */}
          <div
            className="hero-animate mt-9 sm:mt-12 flex items-center gap-2"
            style={{ animationDelay: "480ms" }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 shadow-sm shadow-black/20 ${
                  i === active ? "w-8 bg-[#D4AF37]" : "w-3 bg-[#F9FAFB]/50 hover:bg-[#F9FAFB]/80"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}