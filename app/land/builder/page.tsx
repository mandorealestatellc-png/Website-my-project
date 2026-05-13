import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Builder Opportunities Tucson", description: "Find builder-ready lots and development parcels in Tucson, Arizona." };
export default function Page() {
  return (<><PageHero label="Land" title="Builder &amp; Developer<br/><em>Opportunities.</em>" subtitle="Development-ready lots, infill parcels, and larger tracts for builders and developers in Tucson and the surrounding metro." dark={false}/><section className="py-12 bg-[#faf8f5]"><div className="container-site max-w-xl text-center"><p className="text-[#6b6b6b] text-base">Contact me directly to discuss available builder lots or to list development-ready land for maximum builder exposure.</p></div></section><LeadCapture /></>);
}
