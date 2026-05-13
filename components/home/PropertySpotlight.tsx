import Link from "next/link";
import { ArrowRight, Bed, Bath, Square, MapPin } from "lucide-react";

export default function PropertySpotlight() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container-site">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-[#c8b89a]" />
          <span className="section-label">Property Spotlight</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative min-h-[400px] lg:min-h-[560px] bg-gradient-to-br from-[#1a1209] to-[#2a1a0a] flex items-center justify-center overflow-hidden">
            <div className="text-center p-10">
              <div className="text-[#c8b89a] text-7xl mb-4">✦</div>
              <p className="text-[#6b6b6b] text-sm tracking-widest uppercase">
                Property Image
              </p>
              <p className="text-[#6b6b6b] text-xs mt-2">
                Replace with actual listing photo
              </p>
            </div>
            {/* Status */}
            <div className="absolute top-6 left-6">
              <span className="bg-[#c8b89a] text-[#0a0a0a] px-3 py-1.5 text-[0.65rem] tracking-widest uppercase font-medium">
                Featured Listing
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#1a1a1a] p-10 md:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={13} className="text-[#c8b89a]" />
              <span className="text-[#9a9a9a] text-xs tracking-widest uppercase">
                Catalina Foothills · Tucson, AZ
              </span>
            </div>

            <div
              className="text-[#c8b89a] mb-3"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              $2,800,000
            </div>

            <h3
              className="text-[#faf8f5] mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              }}
            >
              7890 N Sabino Canyon Rd
            </h3>

            <p className="text-[#9a9a9a] text-sm leading-relaxed mb-8">
              Foothills estate perched above Tucson with panoramic Catalina
              Mountain views, resort-style pool, guest casita, and designer
              finishes throughout. Private retreat on 1.2 acres with no HOA.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
              <div className="text-center">
                <Bed size={18} className="text-[#c8b89a] mx-auto mb-2" />
                <div className="text-[#faf8f5] text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>5</div>
                <div className="text-[#6b6b6b] text-xs">Bedrooms</div>
              </div>
              <div className="text-center">
                <Bath size={18} className="text-[#c8b89a] mx-auto mb-2" />
                <div className="text-[#faf8f5] text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>4.5</div>
                <div className="text-[#6b6b6b] text-xs">Bathrooms</div>
              </div>
              <div className="text-center">
                <Square size={18} className="text-[#c8b89a] mx-auto mb-2" />
                <div className="text-[#faf8f5] text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>5,200</div>
                <div className="text-[#6b6b6b] text-xs">Sq Ft</div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-8">
              {[
                "Panoramic Catalina Mountain views",
                "Resort pool + outdoor kitchen",
                "Guest casita / ADU potential",
                "1.2 acre private lot, no HOA",
                "3-car garage, gated entry",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[#9a9a9a] text-sm">
                  <span className="text-[#c8b89a] mt-0.5">–</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/listings" className="btn-primary inline-flex items-center gap-2 self-start">
              Request Information
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
