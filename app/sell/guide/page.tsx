import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";

export const metadata: Metadata = { title: "Seller Guide", description: "Complete guide to selling your Tucson home with Armando Rosano." };

export default function Page() {
  const steps = [
    { n: "01", t: "Initial Consultation", d: "We review your property, your goals, and your timeline. Free, no pressure, and focused on your situation." },
    { n: "02", t: "Pricing Strategy", d: "Market analysis based on recent comps, current demand, and your property's specific condition and features." },
    { n: "03", t: "Property Prep", d: "Guidance on what to fix, stage, or leave as-is to maximize your net proceeds without overspending." },
    { n: "04", t: "Professional Marketing", d: "Photography, MLS listing, digital ads, and direct outreach to active buyers and investors." },
    { n: "05", t: "Offers & Negotiation", d: "I review every offer with you, explain the terms, and negotiate to protect your interests." },
    { n: "06", t: "Contract to Close", d: "I handle the process from accepted offer to closing — inspections, title, timelines, and communication." },
  ];

  return (
    <>
      <PageHero label="Sellers" title="The Seller Guide.<br/><em>How It Works.</em>" subtitle="A clear, step-by-step look at the selling process from first conversation to closed sale." />
      <section className="py-20 bg-[#faf8f5]">
        <div className="container-site max-w-3xl">
          <div className="space-y-px bg-[#e8ddd0]">
            {steps.map((s) => (
              <div key={s.n} className="bg-[#faf8f5] p-8 flex gap-6">
                <div className="text-[#c8b89a]/50 text-3xl shrink-0" style={{ fontFamily: "var(--font-cormorant)" }}>{s.n}</div>
                <div>
                  <h3 className="text-[#1a1a1a] text-xl mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>{s.t}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadCapture />
    </>
  );
}
