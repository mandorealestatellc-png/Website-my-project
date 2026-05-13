import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    icon: "🔧",
    label: "Fixer Uppers",
    desc: "Value-add properties with renovation potential.",
    href: "/invest/fixers",
    tag: "Investor",
  },
  {
    icon: "📐",
    label: "Land & Lots",
    desc: "Vacant land, infill lots, and rural acreage.",
    href: "/land",
    tag: "Land",
  },
  {
    icon: "🏘",
    label: "Multifamily",
    desc: "Duplexes, small apartments, and income properties.",
    href: "/invest/multifamily",
    tag: "Investor",
  },
  {
    icon: "✦",
    label: "Luxury Homes",
    desc: "Premium listings in Foothills and premier communities.",
    href: "/sell/luxury",
    tag: "Luxury",
  },
  {
    icon: "🏡",
    label: "First-Time Buyer Homes",
    desc: "Move-in ready homes with guided buyer support.",
    href: "/buy/first-time",
    tag: "Buyers",
  },
  {
    icon: "⚠",
    label: "Distressed Properties",
    desc: "Probate, inherited, and off-market properties.",
    href: "/sell/distressed",
    tag: "Sellers",
  },
];

export default function BrowseByOpportunity() {
  return (
    <section className="py-24 md:py-32 bg-[#f2ede6]">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c8b89a]" />
              <span className="section-label">Browse By Type</span>
            </div>
            <h2
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              }}
            >
              Find Your Opportunity
            </h2>
          </div>
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-[0.8125rem] tracking-widest uppercase text-[#6b6b6b] hover:text-[#0a0a0a] font-medium transition-colors"
          >
            All Listings
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group bg-[#faf8f5] border border-[#e8ddd0] p-7 hover:bg-[#0a0a0a] transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#c8b89a] font-medium">
                  {cat.tag}
                </span>
              </div>
              <h3
                className="text-[#1a1a1a] text-xl mb-2 group-hover:text-[#faf8f5] transition-colors"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                {cat.label}
              </h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed flex-1 group-hover:text-[#9a9a9a] transition-colors mb-4">
                {cat.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.75rem] tracking-widest uppercase text-[#1a1a1a] group-hover:text-[#c8b89a] font-medium transition-colors">
                Explore
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
