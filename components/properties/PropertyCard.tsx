import Link from "next/link";
import { Bed, Bath, Square, ArrowUpRight } from "lucide-react";
import type { FeaturedProperty } from "@/lib/types";

interface Props {
  property: FeaturedProperty;
}

const statusColors: Record<string, string> = {
  Active: "bg-emerald-900/80 text-emerald-300",
  Pending: "bg-amber-900/80 text-amber-300",
  Sold: "bg-[#1a1a1a]/80 text-[#9a9a9a]",
  "Coming Soon": "bg-[#c8b89a]/20 text-[#c8b89a]",
};

function formatPrice(price: string) {
  return price;
}

export default function PropertyCard({ property }: Props) {
  const statusClass = statusColors[property.status] || statusColors.Active;

  return (
    <div className="property-card group bg-[#faf8f5] border border-[#e8ddd0] overflow-hidden">
      {/* Image */}
      <div className="relative h-56 bg-[#1a1a1a] overflow-hidden">
        {property.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={property.image_url}
            alt={property.address}
            className="property-image w-full h-full object-cover transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
            <div className="text-center">
              <div className="text-[#c8b89a] text-4xl mb-2">🏡</div>
              <span className="text-[#6b6b6b] text-xs tracking-widest uppercase">
                {property.property_type}
              </span>
            </div>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 text-[0.65rem] tracking-widest uppercase font-medium ${statusClass}`}>
            {property.status}
          </span>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-[0.65rem] tracking-widest uppercase bg-[#0a0a0a]/70 text-[#c8b89a]">
            {property.property_type}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        {/* Price */}
        <div
          className="text-[#0a0a0a] text-2xl mb-1"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
        >
          {formatPrice(property.price)}
        </div>

        {/* Address */}
        <p className="text-[#6b6b6b] text-sm mb-4 leading-snug">{property.address}</p>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs text-[#6b6b6b] mb-4 pb-4 border-b border-[#e8ddd0]">
          {property.beds != null && (
            <span className="flex items-center gap-1.5">
              <Bed size={12} />
              {property.beds} bd
            </span>
          )}
          {property.baths != null && (
            <span className="flex items-center gap-1.5">
              <Bath size={12} />
              {property.baths} ba
            </span>
          )}
          {property.sqft != null && (
            <span className="flex items-center gap-1.5">
              <Square size={12} />
              {property.sqft.toLocaleString()} sf
            </span>
          )}
          {property.lot_size && (
            <span className="text-[#9a9a9a]">· {property.lot_size} lot</span>
          )}
        </div>

        {/* Angle */}
        {property.angle && (
          <p className="text-[#9a9a9a] text-xs leading-relaxed mb-4 italic">
            &ldquo;{property.angle}&rdquo;
          </p>
        )}

        {/* CTA */}
        <Link
          href={`/listings`}
          className="inline-flex items-center gap-1.5 text-[0.8rem] tracking-widest uppercase text-[#1a1a1a] font-medium hover:text-[#c8b89a] transition-colors group/link"
        >
          Learn More
          <ArrowUpRight
            size={13}
            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
