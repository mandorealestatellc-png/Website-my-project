import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="intro" className="bg-[#faf8f5] py-24 md:py-32">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c8b89a]" />
              <span className="section-label">Approach</span>
            </div>
            <h2
              className="text-[#0a0a0a] mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Tucson Real Estate.
              <br />
              <em>Built Around Strategy.</em>
            </h2>
            <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Whether you are selling a home, buying your first property, moving
              a luxury listing, or looking for investment opportunities — the
              right strategy matters. My approach combines local market
              knowledge, investor-level analysis, and strong property marketing.
            </p>
            <Link href="/about" className="btn-outline-dark inline-flex items-center gap-2">
              More About Armando
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — service pillars */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🏡",
                title: "Listings",
                desc: "Full-service listing strategy with professional marketing.",
              },
              {
                icon: "📐",
                title: "Land & Lots",
                desc: "Infill, rural, and builder-ready land across Southern Arizona.",
              },
              {
                icon: "🔧",
                title: "Fixers & Value-Add",
                desc: "Identifying distressed properties with real upside potential.",
              },
              {
                icon: "✦",
                title: "Luxury Real Estate",
                desc: "Premium marketing for high-end Tucson and Foothills homes.",
              },
              {
                icon: "📊",
                title: "Investor Deals",
                desc: "Access to off-market and investor-facing opportunities.",
              },
              {
                icon: "🏘",
                title: "First-Time Buyers",
                desc: "Guided process from search to keys with clear communication.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#f2ede6] p-5 group hover:bg-[#0a0a0a] transition-colors duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3
                  className="text-[#1a1a1a] text-lg mb-2 group-hover:text-[#c8b89a] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6b6b6b] text-xs leading-relaxed group-hover:text-[#9a9a9a] transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
