import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PropertyCard from "@/components/properties/PropertyCard";
import type { FeaturedProperty } from "@/lib/types";
import LeadCapture from "@/components/home/LeadCapture";

export const metadata: Metadata = {
  title: "Listings",
  description: "Browse current Tucson real estate listings — luxury homes, land, fixer uppers, multifamily, and investment properties.",
};

const ALL_LISTINGS: FeaturedProperty[] = [
  { id: "1", created_at: "", status: "Active", price: "$485,000", address: "4520 E Sunrise Dr, Tucson, AZ 85718", city: "Tucson", beds: 3, baths: 2, sqft: 1950, lot_size: "0.28 ac", property_type: "Luxury", angle: "Catalina Foothills views — move-in ready with modern upgrades throughout.", image_url: null, is_spotlight: false, sort_order: 1 },
  { id: "2", created_at: "", status: "Active", price: "$189,000", address: "3310 S 6th Ave, Tucson, AZ 85713", city: "Tucson", beds: 3, baths: 1, sqft: 1100, lot_size: "0.15 ac", property_type: "Fixer", angle: "Solid bones, great rental area, needs cosmetic work.", image_url: null, is_spotlight: false, sort_order: 2 },
  { id: "3", created_at: "", status: "Coming Soon", price: "$2,800,000", address: "7890 N Sabino Canyon Rd, Tucson, AZ 85750", city: "Tucson", beds: 5, baths: 4.5, sqft: 5200, lot_size: "1.2 ac", property_type: "Luxury", angle: "Foothills estate — mountain views, resort pool, private retreat.", image_url: null, is_spotlight: true, sort_order: 3 },
  { id: "4", created_at: "", status: "Active", price: "$95,000", address: "Vacant Land · Vail, AZ 85641", city: "Vail", beds: null, baths: null, sqft: null, lot_size: "2.5 ac", property_type: "Land", angle: "Development-ready lot with utility access — ideal for builder.", image_url: null, is_spotlight: false, sort_order: 4 },
  { id: "5", created_at: "", status: "Active", price: "$375,000", address: "9201 N Thornydale Rd, Marana, AZ 85742", city: "Marana", beds: 4, baths: 2, sqft: 2100, lot_size: "0.22 ac", property_type: "SFR", angle: "Family-friendly Marana — near top-rated schools, strong appreciation.", image_url: null, is_spotlight: false, sort_order: 5 },
  { id: "6", created_at: "", status: "Active", price: "$415,000", address: "1402 E University Blvd, Tucson, AZ 85719", city: "Tucson", beds: 4, baths: 2, sqft: 1800, lot_size: "0.12 ac", property_type: "Multifamily", angle: "Duplex near UA — strong rental history, immediate cash flow.", image_url: null, is_spotlight: false, sort_order: 6 },
];

export default function ListingsPage() {
  return (
    <>
      <PageHero
        label="Properties"
        title="Current Listings &<br/><em>Available Properties</em>"
        subtitle="Active listings, coming soon, and investor-facing opportunities in Tucson and Southern Arizona."
      />

      <section className="py-20 bg-[#faf8f5]">
        <div className="container-site">
          {/* Filter bar placeholder */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "Luxury", "Fixer", "Land", "Multifamily", "SFR"].map((f) => (
              <button
                key={f}
                className="px-4 py-2 text-xs tracking-widest uppercase border border-[#e8ddd0] text-[#6b6b6b] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors first:bg-[#0a0a0a] first:text-[#faf8f5] first:border-[#0a0a0a]"
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_LISTINGS.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#9a9a9a] text-sm mb-4">
              Looking for something not listed here?
            </p>
            <a href="#contact" className="btn-dark">Contact Armando Directly</a>
          </div>
        </div>
      </section>
      <LeadCapture />
    </>
  );
}
