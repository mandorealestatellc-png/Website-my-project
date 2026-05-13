import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "Sellers",
    title: "Thinking of Selling?",
    desc: "Get a professional pricing strategy, targeted marketing, and guidance through every step — whether it's a standard listing, luxury property, fixer, or inherited home.",
    cta: "Start with a Valuation",
    href: "/sell/valuation",
    accent: "#c8b89a",
    bg: "bg-[#1a1a1a]",
  },
  {
    label: "Investors",
    title: "Looking for Investment Deals?",
    desc: "Join an active buyer list and get access to fixer uppers, land, multifamily, and value-add properties before they hit the open market.",
    cta: "Join the Investor List",
    href: "/invest/buyer-list",
    accent: "#b8965a",
    bg: "bg-[#0a0a0a]",
  },
  {
    label: "Landowners",
    title: "Own Land in Tucson?",
    desc: "Land in Southern Arizona has real value — and finding the right buyer matters. Get a land-specific strategy with someone who understands the market.",
    cta: "Talk About Your Land",
    href: "/land/sell",
    accent: "#c8b89a",
    bg: "bg-[#1a1a1a]",
  },
];

export default function CTASplit() {
  return (
    <section className="py-24 md:py-32 bg-[#f2ede6]">
      <div className="container-site">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c8b89a]" />
            <span className="section-label">Where Do You Fit?</span>
            <div className="h-px w-8 bg-[#c8b89a]" />
          </div>
          <h2
            className="text-[#0a0a0a]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            }}
          >
            Let&rsquo;s Find the Right Path Forward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.bg} p-8 md:p-10 flex flex-col group`}
            >
              <span
                className="text-[0.65rem] tracking-[0.2em] uppercase font-medium mb-6"
                style={{ color: card.accent }}
              >
                {card.label}
              </span>
              <h3
                className="text-[#faf8f5] text-2xl md:text-3xl mb-4 leading-snug"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                {card.title}
              </h3>
              <p className="text-[#9a9a9a] text-sm leading-relaxed flex-1 mb-8">
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 text-[#faf8f5] text-[0.8125rem] tracking-widest uppercase font-medium hover:text-[#c8b89a] transition-colors group"
              >
                {card.cta}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
