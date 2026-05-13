import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import LeadCapture from "@/components/home/LeadCapture";
export const metadata: Metadata = { title: "Fixer Uppers Tucson", description: "Find fixer upper properties in Tucson with real investment potential." };
export default function Page() {
  return (<><PageHero label="Invest" title="Fixer Uppers.<br/><em>Real Investment Potential.</em>" subtitle="Properties priced to allow for rehab costs, holding expenses, and investor margin. I know the difference between a deal and a money pit." /><FeaturedProperties /><LeadCapture /></>);
}
