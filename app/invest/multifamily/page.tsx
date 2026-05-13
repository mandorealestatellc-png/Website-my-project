import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Multifamily Tucson", description: "Find multifamily investment properties in Tucson — duplexes, triplexes, and small apartments." };
export default function Page() {
  return (<><PageHero label="Invest" title="Multifamily<br/><em>Investment Properties.</em>" subtitle="Duplexes, triplexes, and small apartment buildings in Tucson's strongest rental markets. Cash flow from day one." /><section className="py-20 bg-[#faf8f5]"><div className="container-site max-w-2xl text-center"><p className="text-[#6b6b6b] text-base mb-6">Multifamily properties are among the most reliable income-generating assets in Tucson. I help investors find, evaluate, and acquire the right properties.</p><p className="text-[#9a9a9a] text-sm">Join the investor list below to receive multifamily opportunities.</p></div></section><LeadCapture /></>);
}
