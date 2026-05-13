import Link from "next/link";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Realtor + Investor Perspective",
    desc: "I look at every property through two lenses — what it takes to sell it, and what the numbers say. That dual perspective leads to better decisions for every client.",
  },
  {
    number: "02",
    title: "Understands the Numbers",
    desc: "ARV, cap rate, rent-to-price ratio — I speak the language of investors and help sellers and buyers make decisions grounded in actual data, not emotion.",
  },
  {
    number: "03",
    title: "Knows How to Market Listings",
    desc: "Professional photography, strategic pricing, digital reach, and targeted buyer outreach. Your property gets positioned to sell — not just listed.",
  },
  {
    number: "04",
    title: "Distressed Property Experience",
    desc: "Whether it's an inherited home, deferred maintenance, estate sale, or problem property — I understand the nuances and help owners navigate a clean exit.",
  },
  {
    number: "05",
    title: "Land-Focused Knowledge",
    desc: "Most agents don't understand land. I do. Zoning, utility access, split potential, builder value — I help landowners understand what they actually have.",
  },
  {
    number: "06",
    title: "Direct Communication",
    desc: "No runaround, no unanswered calls. You work directly with me from first conversation to close. Straight answers, clear timelines, real information.",
  },
];

export default function WhyArmando() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left sticky heading */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c8b89a]" />
                <span className="section-label">Why Work With Me</span>
              </div>
              <h2
                className="text-[#faf8f5] mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                }}
              >
                The Difference Is in the Strategy.
              </h2>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-8">
                Experience working with Realtors who think like investors,
                communicate like professionals, and know the Tucson market cold.
              </p>
              <Link
                href="/about"
                className="btn-primary inline-flex items-center gap-2"
              >
                About Armando
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right — reasons grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {reasons.map((reason) => (
              <div key={reason.number} className="bg-[#0a0a0a] p-7 hover:bg-[#1a1a1a] transition-colors">
                <div
                  className="text-[#c8b89a]/40 text-3xl mb-5"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  {reason.number}
                </div>
                <h3
                  className="text-[#faf8f5] text-lg mb-3"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#6b6b6b] text-xs leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
