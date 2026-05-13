import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";

export const metadata: Metadata = {
  title: "Buy a Home in Tucson",
  description: "Buy a home, investment property, or first home in Tucson with Armando Rosano. Buyer guide, featured listings, and investment properties.",
};

export default function BuyPage() {
  return (
    <>
      <PageHero
        label="Buyers"
        title="Find Your Next Property<br/>in <em>Tucson, Arizona.</em>"
        subtitle="First home, investment property, or your forever home — get expert guidance and local knowledge through every step."
      />

      <section className="py-20 bg-[#faf8f5]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8ddd0]">
            {[
              { title: "Buyer Guide", desc: "Step-by-step walkthrough of the Tucson buying process — from pre-approval to keys.", href: "/buy/guide", cta: "Read the Guide" },
              { title: "Featured Listings", desc: "Browse current listings with investor angles, lifestyle notes, and direct contact.", href: "/buy/listings", cta: "View Listings" },
              { title: "First-Time Buyers", desc: "New to buying? I'll walk you through the entire process with clear communication and no pressure.", href: "/buy/first-time", cta: "First-Time Buyers" },
              { title: "Investment Properties", desc: "Fixer uppers, rentals, multifamily — I help investors find deals that make financial sense.", href: "/buy/investment", cta: "Investment Deals" },
            ].map((item) => (
              <div key={item.title} className="bg-[#faf8f5] p-8 md:p-10">
                <div className="h-px w-8 bg-[#c8b89a] mb-5" />
                <h2 className="text-[#0a0a0a] text-2xl mb-3" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>{item.title}</h2>
                <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link href={item.href} className="inline-flex items-center gap-2 text-[0.8rem] tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8b89a] font-medium transition-colors">
                  {item.cta} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadCapture />
    </>
  );
}
