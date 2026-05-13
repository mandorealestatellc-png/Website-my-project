import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Land Investment Tucson", description: "Find investment land in Tucson — infill lots, rural acres, and builder-ready parcels." };
export default function Page() {
  return (<><PageHero label="Invest" title="Land Opportunities<br/><em>in Southern Arizona.</em>" subtitle="Vacant lots, rural acres, and builder-ready parcels. Land is one of the most under-utilized investment categories in Tucson." /><section className="py-12 bg-[#faf8f5]"><div className="container-site max-w-2xl text-center"><p className="text-[#6b6b6b] text-base">Join the investor list and specify land as your preferred type. I&rsquo;ll send you parcels as they become available.</p></div></section><LeadCapture /></>);
}
