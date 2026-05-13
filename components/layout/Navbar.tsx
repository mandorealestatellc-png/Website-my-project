"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
  {
    label: "Buy",
    href: "/buy",
    children: [
      { label: "Buyer Guide", href: "/buy/guide" },
      { label: "Featured Listings", href: "/buy/listings" },
      { label: "First-Time Buyers", href: "/buy/first-time" },
      { label: "Investment Properties", href: "/buy/investment" },
    ],
  },
  {
    label: "Sell",
    href: "/sell",
    children: [
      { label: "Seller Guide", href: "/sell/guide" },
      { label: "Home Valuation", href: "/sell/valuation" },
      { label: "Distressed Properties", href: "/sell/distressed" },
      { label: "Luxury Listings", href: "/sell/luxury" },
    ],
  },
  {
    label: "Invest",
    href: "/invest",
    children: [
      { label: "Investor Buyer List", href: "/invest/buyer-list" },
      { label: "Fixer Uppers", href: "/invest/fixers" },
      { label: "Multifamily", href: "/invest/multifamily" },
      { label: "Land Opportunities", href: "/invest/land" },
    ],
  },
  {
    label: "Land",
    href: "/land",
    children: [
      { label: "Sell Your Land", href: "/land/sell" },
      { label: "Land Valuation", href: "/land/valuation" },
      { label: "Builder Opportunities", href: "/land/builder" },
      { label: "Infill Lots", href: "/land/infill" },
    ],
  },
  { label: "Listings", href: "/listings" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/96 backdrop-blur-sm shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className="text-[#faf8f5] text-xl md:text-2xl tracking-wide transition-colors group-hover:text-[#c8b89a]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                Armando Rosano
              </span>
              <span className="text-[#c8b89a] text-[0.6rem] tracking-[0.25em] uppercase mt-0.5">
                Real Broker · Tucson, AZ
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="nav-item relative">
                    <button className="flex items-center gap-1 px-3.5 py-2 text-[#faf8f5]/80 hover:text-[#c8b89a] text-[0.8125rem] tracking-wide uppercase font-medium transition-colors cursor-pointer">
                      {item.label}
                      <ChevronDown size={12} strokeWidth={2} />
                    </button>
                    <div className="nav-dropdown absolute top-full left-0 mt-1 min-w-[200px] bg-[#0a0a0a] border border-white/10 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-[#faf8f5]/70 hover:text-[#c8b89a] hover:bg-white/5 text-[0.8125rem] tracking-wide transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3.5 py-2 text-[#faf8f5]/80 hover:text-[#c8b89a] text-[0.8125rem] tracking-wide uppercase font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+15208090432"
                className="hidden md:flex items-center gap-2 text-[#c8b89a] text-[0.8125rem] tracking-wide hover:text-[#e8ddd0] transition-colors"
              >
                <Phone size={14} />
                <span>(520) 809-0432</span>
              </a>
              <Link href="/contact" className="hidden md:block btn-primary text-xs py-2.5 px-5">
                Get Started
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-[#faf8f5] p-2 hover:text-[#c8b89a] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-[#0a0a0a] flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span
              className="text-[#faf8f5] text-lg"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Armando Rosano
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-[#faf8f5]/60 hover:text-[#faf8f5]">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-6 py-3.5 text-[#faf8f5]/80 hover:text-[#c8b89a] text-sm tracking-widest uppercase font-medium transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-white/5 border-t border-b border-white/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-8 py-3 text-[#faf8f5]/60 hover:text-[#c8b89a] text-sm tracking-wide transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3.5 text-[#faf8f5]/80 hover:text-[#c8b89a] text-sm tracking-widest uppercase font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="p-6 border-t border-white/10 space-y-3">
            <a href="tel:+15208090432" className="flex items-center gap-2 text-[#c8b89a] text-sm">
              <Phone size={14} />
              (520) 809-0432
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center text-xs"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
