"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — cinematic desert landscape gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Layered gradient simulating desert dusk */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1209] via-[#0d0d0d] to-[#0a0a14] opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        {/* Warm horizon glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(184,150,90,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
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
