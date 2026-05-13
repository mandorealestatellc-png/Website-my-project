import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import CTASplit from "@/components/home/CTASplit";
import StatsSection from "@/components/home/StatsSection";
import PropertySpotlight from "@/components/home/PropertySpotlight";
import BrowseByOpportunity from "@/components/home/BrowseByOpportunity";
import TucsonAreas from "@/components/home/TucsonAreas";
import WhyArmando from "@/components/home/WhyArmando";
import Testimonials from "@/components/home/Testimonials";
import LeadCapture from "@/components/home/LeadCapture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedProperties />
      <CTASplit />
      <StatsSection />
      <PropertySpotlight />
      <BrowseByOpportunity />
      <TucsonAreas />
      <WhyArmando />
      <Testimonials />
      <LeadCapture />
    </>
  );
}
