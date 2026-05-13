import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";

export const metadata: Metadata = {
  title: "Sell Your Property",
  description: "Sell your Tucson home, land, fixer, or luxury property with Armando Rosano. Strategic pricing, strong marketing, direct communication.",
};

export default function SellPage() {
  return (
    <>
      <PageHero
        label="Sellers"
        title="Sell Smarter.<br/><em>Get the Right Strategy.</em>"
        subtitle="Whether you're selling a move-in ready home, a fixer, inherited property, luxury listing, or raw land — strategy matters more than luck."
      />

      {/* Services */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8ddd0]">
            {[
              {
                title: "Traditional Listing",
                desc: "Full-service listing with professional photography, strategic pricing, MLS exposure, and buyer follow-up.",
                href: "/sell/guide",
                cta: "Seller Guide",
              },
              {
                title: "Home Valuation",
                desc: "Understand what your property is worth in today's market before making any decisions.",
                href: "/sell/valuation",
                cta: "Get a Valuation",
              },
              {
                title: "Distressed Properties",
                desc: "Inherited home, deferred maintenance, probate, or difficult situation — I understand these properties and help sellers navigate a clean exit.",
                href: "/sell/distressed",
                cta: "Learn More",
              },
              {
                title: "Luxury Listings",
                desc: "Premium marketing strategy for high-value Tucson and Foothills properties.",
                href: "/sell/luxury",
                cta: "Luxury Services",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#faf8f5] p-8 md:p-10">
                <div className="h-px w-8 bg-[#c8b89a] mb-5" />
                <h2
                  className="text-[#0a0a0a] text-2xl mb-3"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  {item.title}
                </h2>
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
