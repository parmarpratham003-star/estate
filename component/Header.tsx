"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Agents", href: "/agents" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md tracking-wide">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6 sm:h-[80px] sm:px-8 lg:h-[80px] lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center -ml-4 mt-2 gap-3">
          <img
            src="/logo1.png"
            alt="PrimeNest Realty"
            className="h-30 w-auto "
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex items-center gap-1 py-2 text-[15px] font-medium text-[#1F2937]"
            >
              <span className="relative z-10 font-[family-name:var(--font-playfair)] transition-all duration-300 group-hover:tracking-wide group-hover:text-[#065F46]">
                {item.name}
              </span>

              {/* Center-expanding underline hover effect */}
              <span className="pointer-events-none absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 bg-[#D4AF37] transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-2 rounded-lg bg-[#065F46] px-6 py-3 text-white transition-colors duration-500 ease-in-out hover:bg-[#D4AF37] hover:text-[#1F2937] hover:shadow-lg hover:shadow-[#D4AF37]/30">
            <CalendarDays size={18} />
            Schedule Visit
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? (
            <X size={30} className="text-[#065F46]" />
          ) : (
            <Menu size={30} className="text-[#065F46]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="space-y-2 border-t border-[#E5E7EB] bg-[#F9FAFB] px-6 py-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#E5E7EB] py-4 font-[family-name:var(--font-playfair)] text-[#1F2937] transition hover:pl-2 hover:text-[#065F46]"
            >
              {item.name}
            </Link>
          ))}

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#065F46] py-3 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-[#D4AF37] hover:text-[#1F2937]">
            <CalendarDays size={18} />
            Schedule Visit
          </button>
        </div>
      </div>
    </header>
  );
}