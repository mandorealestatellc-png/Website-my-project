import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";

export const metadata: Metadata = {
  title: "Investor Real Estate Tucson",
  description: "Find investment properties in Tucson — fixer uppers, multifamily, land, and off-market deals. Join the investor buyer list.",
};

export default function InvestPage() {
  return (
    <>
      <PageHero
        label="Investors"
        title="Tucson Investment Real Estate.<br/><em>Find Deals That Work.</em>"
        subtitle="Access fixer uppers, land, multifamily, and value-add properties. Join the buyer list and get notified when deals match your criteria."
      />

      <section className="py-20 bg-[#faf8f5]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8ddd0]">
            {[
              { title: "Investor Buyer List", desc: "Register once. Get notified when deals match your price, zip, and criteria.", href: "/invest/buyer-list", cta: "Join the List" },
              { title: "Fixer Uppers", desc: "Properties with renovation potential — priced to allow for rehab costs and margin.", href: "/invest/fixers", cta: "View Fixers" },
              { title: "Multifamily", desc: "Duplexes, triplexes, and small apartment buildings in Tucson's strongest rental markets.", href: "/invest/multifamily", cta: "Multifamily" },
              { title: "Land Opportunities", desc: "Vacant lots, infill, rural acres — investment land with builder or hold-and-appreciate strategy.", href: "/invest/land", cta: "Land Deals" },
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
