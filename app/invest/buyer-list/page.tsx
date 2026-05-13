import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Investor Buyer List Tucson", description: "Join Armando Rosano's investor buyer list for Tucson real estate deals." };
export default function Page() {
  return (<><PageHero label="Investors" title="Join the<br/><em>Investor Buyer List.</em>" subtitle="Register your criteria once. I'll reach out when deals match — fixer uppers, land, multifamily, or off-market opportunities." /><section className="py-8 bg-[#f2ede6]"><div className="container-site max-w-xl text-center"><p className="text-[#6b6b6b] text-sm leading-relaxed">Fill out the investor form below. No spam — only relevant deals that match what you told me you want.</p></div></section><LeadCapture /></>);
}
