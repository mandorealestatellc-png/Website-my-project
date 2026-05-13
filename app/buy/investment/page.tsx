import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Investment Properties Tucson", description: "Find investment properties in Tucson — fixers, rentals, multifamily, and land." };
export default function Page() {
  return (<><PageHero label="Investment" title="Investment Properties<br/><em>in Tucson, AZ.</em>" subtitle="Fixer uppers, buy-and-hold rentals, multifamily, and land. I help investors find deals that make financial sense." /><section className="py-20 bg-[#faf8f5]"><div className="container-site max-w-2xl text-center"><p className="text-[#6b6b6b] text-base leading-relaxed mb-8">Join the investor buyer list to get notified when properties matching your criteria become available. Fill out the form below and I&rsquo;ll reach out when deals fit your profile.</p></div></section><LeadCapture /></>);
}
