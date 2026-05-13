import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Infill Lots Tucson", description: "Find infill lots for new construction in established Tucson neighborhoods." };
export default function Page() {
  return (<><PageHero label="Land" title="Infill Lots.<br/><em>Build Where It Matters.</em>" subtitle="Urban and suburban infill lots in established Tucson neighborhoods — primed for new construction with existing infrastructure." dark={false}/><section className="py-12 bg-[#faf8f5]"><div className="container-site max-w-xl text-center"><p className="text-[#6b6b6b] text-base">Infill lots are often overlooked but can produce strong new construction returns. Contact me for available parcels.</p></div></section><LeadCapture /></>);
}
