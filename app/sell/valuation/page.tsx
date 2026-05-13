import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Home Valuation Tucson", description: "Get a free home valuation for your Tucson property." };
export default function Page() {
  return (<><PageHero label="Sellers" title="What Is Your<br/><em>Property Worth?</em>" subtitle="Get a free, no-obligation valuation based on recent sales data, current market conditions, and your property's specific features." /><section className="py-20 bg-[#f2ede6]"><div className="container-site max-w-2xl text-center"><h2 className="text-[#0a0a0a] text-3xl mb-4" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>Request a Free Valuation</h2><p className="text-[#6b6b6b] text-sm mb-8 leading-relaxed">Fill out the seller form below and I&rsquo;ll prepare a detailed property analysis within 24 hours. No cost, no obligation.</p><p className="text-[#9a9a9a] text-xs tracking-widest uppercase">Scroll down to the contact section ↓</p></div></section><LeadCapture /></>);
}
