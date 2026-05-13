"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent((c) => (c + 1) % IMAGES.length);
      setTimeout(() => {
        setPrev(null);
        setFading(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(index: number) {
    if (index === current) return;
    setPrev(current);
    setFading(true);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setFading(false);
    }, 1000);
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel images */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Previous image — fades out */}
        {prev !== null && (
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: fading ? 0 : 1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES[prev]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Current image — fades in */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: fading ? 1 : 1 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES[current]}
            alt=""
            className="w-full h-full object-cover"
            style={{
              opacity: prev !== null ? (fading ? 1 : 0) : 1,
              transition: "opacity 1000ms ease-in-out",
            }}
          />
        </div>

        {/* Dark gradient overlay — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-[#0a0a0a]/50 to-[#0a0a0a]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/30" />
        {/* Warm gold accent glow at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background:
              "radial-gradient(ellipse at 30% 100%, rgba(184,150,90,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#c8b89a]" />
            <span className="section-label">Tucson, Arizona</span>
          </div>

          {/* Headline */}
          <h1
            className="text-[#faf8f5] mb-6 leading-[1.05]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 6.5vw, 6.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Tucson Real Estate
            <br />
            <span className="text-[#c8b89a]">Strategy</span> for Sellers,
            <br />
            Buyers, and Investors.
          </h1>

          {/* Subheadline */}
          <p className="text-[#faf8f5]/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Work with a Realtor who understands listings, land, fixers, luxury
            property, and investment-driven real estate decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link href="/sell" className="btn-primary flex items-center gap-2">
              Sell Your Property
              <ArrowRight size={14} />
            </Link>
            <Link href="/invest/buyer-list" className="btn-secondary flex items-center gap-2">
              Join Investor List
              <ArrowRight size={14} />
            </Link>
            <Link href="/listings" className="btn-secondary flex items-center gap-2">
              View Listings
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-16 pt-8 border-t border-white/10">
            {[
              { value: "Licensed", label: "REALTOR® in Arizona" },
              { value: "Real Broker", label: "Brokerage" },
              { value: "Tucson", label: "Local Market Focus" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="text-[#c8b89a] text-lg font-light mb-0.5"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.value}
                </div>
                <div className="text-[#faf8f5]/40 text-xs tracking-widest uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-16 right-8 md:right-16 flex flex-col gap-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group flex items-center justify-end gap-2"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === current
                  ? "w-8 bg-[#c8b89a]"
                  : "w-3 bg-white/30 group-hover:bg-white/60"
              }`}
            />
            <span
              className={`block w-1 h-1 rounded-full transition-colors duration-300 ${
                i === current ? "bg-[#c8b89a]" : "bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => {
          const el = document.getElementById("intro");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#faf8f5]/30 hover:text-[#c8b89a] transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
