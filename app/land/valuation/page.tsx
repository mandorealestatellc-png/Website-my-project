import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Land Valuation Tucson", description: "Get a free land valuation for your Tucson parcel." };
export default function Page() {
  return (<><PageHero label="Land" title="What Is Your<br/><em>Land Worth?</em>" subtitle="Land valuation requires specific knowledge — zoning, access, utilities, and comparable sales. Get a real answer, not a guess." /><section className="py-12 bg-[#faf8f5]"><div className="container-site max-w-xl text-center"><p className="text-[#6b6b6b] text-base">Fill out the land form below with your APN and location. I&rsquo;ll research the parcel and provide a valuation analysis within 24–48 hours.</p></div></section><LeadCapture /></>);
}
