"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Leaf,
  Headset,
  Home,
  Landmark,
  Users,
  Award,
    Star,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Experts",
    desc: "Our team of experienced real estate professionals ensures you get the right guidance.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Properties",
    desc: "All properties are thoroughly verified for legal compliance and authenticity.",
  },
  {
    icon: Leaf,
    title: "Best Deals",
    desc: "We negotiate the best prices to help you get maximum value for your investment.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    desc: "We provide dedicated support at every step of your real estate journey.",
  },
];

const stats = [
  { icon: Home, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Landmark, value: 500, suffix: "+", label: "Properties Sold" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 50, suffix: "+", label: "Expert Agents" },
];

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  stat,
  active,
  isLast,
}: {
  stat: (typeof stats)[number];
  active: boolean;
  isLast: boolean;
}) {
  const count = useCountUp(stat.value, active);
  const Icon = stat.icon;

  return (
    <div
      className={`flex flex-1 items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 lg:py-0 ${
        !isLast ? "sm:border-r border-white/20" : ""
      }`}
    >
      <Icon size={28} className="shrink-0 text-[#D4AF37] sm:hidden" strokeWidth={1.4} />
      <Icon size={34} className="shrink-0 text-[#D4AF37] hidden sm:block" strokeWidth={1.4} />
      <div>
        <div className="text-xl sm:text-2xl lg:text-[26px] text-white leading-none">
          {count}
          {stat.suffix}
        </div>
        <div className="mt-1 sm:mt-1.5 text-[12px] sm:text-[13px] text-white/80">{stat.label}</div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-10 sm:py-14 lg:py-5 tracking-wide overflow-hidden">
      <style>{`
        @keyframes wcuFadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .wcu-animate {
          opacity: 0;
          animation: wcuFadeUp 0.7s ease-out forwards;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="wcu-animate text-center mb-10 sm:mb-14" style={{ animationDelay: "0ms" }}>
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] text-[#1F2937] leading-snug">
            Why Choose PrimeNest Realty?
          </h2>
          {/* <div className="mt-3 sm:mt-4 h-[2px] w-10 sm:w-12 bg-[#D4AF37] mx-auto"></div> */}
        
         <div className="mt-4  fp-animate flex items-center justify-center gap-3 sm:gap-4 max-w-[180px] sm:max-w-[220px] mx-auto" style={{ animationDelay: "200ms" }}>
            <div className="h-[1.5px] w-full bg-[#D4AF37]/50"></div>
            <Star className="text-[#D4AF37] fill-[#D4AF37]" size={14} />
            <div className="h-[1.5px] w-full bg-[#D4AF37]/50"></div>
          </div>
          </div>
        {/* Feature columns — plain, minimal, divided */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 lg:gap-y-0">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isLast = i === features.length - 1;
            const isSmLast = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className={`wcu-animate group text-center px-6 sm:px-8 sm:py-0 transition-all duration-500 border-[#E5E7EB] ${
                  !isSmLast ? "sm:border-r" : ""
                } ${!isLast ? "lg:border-r" : "lg:border-r-0"}`}
                style={{ animationDelay: `${100 + i * 120}ms` }}
              >
                <span className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:bg-[#065F46]/10">
                  <Icon
                    size={28}
                    className="text-[#1F2937] transition-all duration-500 group-hover:text-[#065F46] group-hover:-rotate-6 group-hover:scale-110 sm:hidden"
                    strokeWidth={1.4}
                  />
                  <Icon
                    size={34}
                    className="text-[#1F2937] transition-all duration-500 group-hover:text-[#065F46] group-hover:-rotate-6 group-hover:scale-110 hidden sm:block"
                    strokeWidth={1.4}
                  />
                </span>

                <h3 className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] font-[family-name:var(--font-playfair)] font-semibold text-[#1F2937] transition-colors duration-500 group-hover:text-[#065F46]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-6 text-[#6B7280] max-w-[220px] mx-auto">
                  {feature.desc}
                </p>

                <span className="mt-4 block h-[2px] w-6 bg-[#D4AF37]/0 mx-auto transition-all duration-500 group-hover:w-10 group-hover:bg-[#D4AF37]"></span>
              </div>
            );
          })}
        </div>

      </div>

      {/* Counting section — full-width bleed, taller bar, matching reference */}
      <div
        ref={sectionRef}
        className="wcu-animate relative left-1/2 w-screen -translate-x-1/2 mt-10 sm:mt-14 lg:mt-16 flex flex-col sm:flex-row items-stretch bg-[#065F46] px-5 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-10 divide-y sm:divide-y-0 divide-white/20"
        style={{ animationDelay: "500ms" }}
      >
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            stat={stat}
            active={statsInView}
            isLast={i === stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
}