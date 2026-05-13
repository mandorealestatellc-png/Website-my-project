import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import type { FeaturedProperty } from "@/lib/types";

const PLACEHOLDER_PROPERTIES: FeaturedProperty[] = [
  {
    id: "1",
    created_at: "",
    status: "Active",
    price: "$485,000",
    address: "4520 E Sunrise Dr, Tucson, AZ 85718",
    city: "Tucson",
    beds: 3,
    baths: 2,
    sqft: 1950,
    lot_size: "0.28 ac",
    property_type: "Luxury",
    angle: "Catalina Foothills views — move-in ready with modern upgrades throughout.",
    image_url: null,
    is_spotlight: false,
    sort_order: 1,
  },
  {
    id: "2",
    created_at: "",
    status: "Active",
    price: "$189,000",
    address: "3310 S 6th Ave, Tucson, AZ 85713",
    city: "Tucson",
    beds: 3,
    baths: 1,
    sqft: 1100,
    lot_size: "0.15 ac",
    property_type: "Fixer",
    angle: "Investor opportunity — solid bones, great rental area, needs cosmetic work.",
    image_url: null,
    is_spotlight: false,
    sort_order: 2,
  },
  {
    id: "3",
    created_at: "",
    status: "Coming Soon",
    price: "$2,800,000",
    address: "7890 N Sabino Canyon Rd, Tucson, AZ 85750",
    city: "Tucson",
    beds: 5,
    baths: 4.5,
    sqft: 5200,
    lot_size: "1.2 ac",
    property_type: "Luxury",
    angle: "Foothills estate — mountain views, resort pool, private retreat.",
    image_url: null,
    is_spotlight: true,
    sort_order: 3,
  },
  {
    id: "4",
    created_at: "",
    status: "Active",
    price: "$95,000",
    address: "Vacant Land · Vail, AZ 85641",
    city: "Vail",
    beds: null,
    baths: null,
    sqft: null,
    lot_size: "2.5 ac",
    property_type: "Land",
    angle: "Development-ready lot with utility access — ideal for builder or investor.",
    image_url: null,
    is_spotlight: false,
    sort_order: 4,
  },
  {
    id: "5",
    created_at: "",
    status: "Active",
    price: "$375,000",
    address: "9201 N Thornydale Rd, Marana, AZ 85742",
    city: "Marana",
    beds: 4,
    baths: 2,
    sqft: 2100,
    lot_size: "0.22 ac",
    property_type: "SFR",
    angle: "Family-friendly Marana — near top-rated schools, low HOA, strong appreciation.",
    image_url: null,
    is_spotlight: false,
    sort_order: 5,
  },
  {
    id: "6",
    created_at: "",
    status: "Active",
    price: "$415,000",
    address: "1402 E University Blvd, Tucson, AZ 85719",
    city: "Tucson",
    beds: 4,
    baths: 2,
    sqft: 1800,
    lot_size: "0.12 ac",
    property_type: "Multifamily",
    angle: "Duplex near UA — strong rental history, two units, immediate cash flow.",
    image_url: null,
    is_spotlight: false,
    sort_order: 6,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-24 md:py-32 bg-[#faf8f5]">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c8b89a]" />
              <span className="section-label">Portfolio</span>
            </div>
            <h2
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              }}
            >
              Featured Properties
            </h2>
          </div>
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-[0.8125rem] tracking-widest uppercase text-[#6b6b6b] hover:text-[#0a0a0a] font-medium transition-colors"
          >
            View All Listings
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
