import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Buyer Guide Tucson", description: "Step-by-step guide to buying a home in Tucson with Armando Rosano." };
export default function Page() {
  const steps = [
    {n:"01",t:"Get Pre-Approved",d:"Before shopping, get pre-approved so you know your real budget and are taken seriously by sellers."},
    {n:"02",t:"Define Your Criteria",d:"Price range, location, property type, must-haves vs. nice-to-haves — we clarify this up front."},
    {n:"03",t:"Property Search",d:"I search MLS, off-market sources, and investor networks to find properties matching your criteria."},
    {n:"04",t:"Showings & Analysis",d:"We tour properties together and I give you an honest assessment of each — condition, value, and potential."},
    {n:"05",t:"Offer Strategy",d:"I help you craft a competitive offer with favorable terms while protecting your interests."},
    {n:"06",t:"Inspections & Due Diligence",d:"I walk you through inspections, results, and negotiating any needed repairs or credits."},
    {n:"07",t:"Close & Get Keys",d:"I coordinate with title, lender, and all parties to ensure a smooth close."},
  ];
  return (<><PageHero label="Buyers" title="The Buyer Guide.<br/><em>Step by Step.</em>" subtitle="A clear walkthrough of the Tucson home buying process — from first conversation to closing day." /><section className="py-20 bg-[#faf8f5]"><div className="container-site max-w-3xl"><div className="space-y-px bg-[#e8ddd0]">{steps.map(s=><div key={s.n} className="bg-[#faf8f5] p-8 flex gap-6"><div className="text-[#c8b89a]/50 text-3xl shrink-0" style={{fontFamily:"var(--font-cormorant)"}}>{s.n}</div><div><h3 className="text-[#1a1a1a] text-xl mb-2" style={{fontFamily:"var(--font-cormorant)",fontWeight:400}}>{s.t}</h3><p className="text-[#6b6b6b] text-sm leading-relaxed">{s.d}</p></div></div>)}</div></div></section><LeadCapture /></>);
}
