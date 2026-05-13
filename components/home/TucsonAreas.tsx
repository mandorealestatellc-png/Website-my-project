import Link from "next/link";
import { ArrowRight } from "lucide-react";

const areas = [
  { name: "Tucson", slug: "tucson", desc: "City core, central neighborhoods, and urban real estate." },
  { name: "Catalina Foothills", slug: "catalina-foothills", desc: "Luxury estates and premium desert mountain living." },
  { name: "Oro Valley", slug: "oro-valley", desc: "Master-planned communities and family-friendly suburbs." },
  { name: "Marana", slug: "marana", desc: "Fast-growing northwest corridor with new development." },
  { name: "Vail", slug: "vail", desc: "Southeast Tucson with top schools and planned communities." },
  { name: "Sahuarita", slug: "sahuarita", desc: "Affordable south Tucson suburb with room to grow." },
  { name: "Central Tucson", slug: "central-tucson", desc: "Midtown charm, walkable neighborhoods, investment density." },
  { name: "University Area", slug: "university-area", desc: "UA-adjacent rentals, historic properties, and high demand." },
];

export default function TucsonAreas() {
  return (
    <section className="py-24 md:py-32 bg-[#faf8f5]">
      <div className="container-site">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c8b89a]" />
            <span className="section-label">Service Areas</span>
            <div className="h-px w-8 bg-[#c8b89a]" />
          </div>
          <h2
            className="text-[#0a0a0a] mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            }}
          >
            Tucson Areas I Serve
          </h2>
          <p className="text-[#6b6b6b] text-base max-w-xl mx-auto">
            From luxury Foothills estates to investment-dense central
            neighborhoods — deep knowledge across all of Southern Arizona.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/contact?area=${area.slug}`}
              className="group bg-[#f2ede6] p-6 hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <div className="w-6 h-px bg-[#c8b89a] mb-4" />
              <h3
                className="text-[#1a1a1a] text-lg mb-2 group-hover:text-[#faf8f5] transition-colors leading-snug"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                {area.name}
              </h3>
              <p className="text-[#6b6b6b] text-xs leading-relaxed group-hover:text-[#9a9a9a] transition-colors mb-3">
                {area.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-[0.7rem] tracking-widest uppercase text-[#c8b89a] font-medium">
                Explore
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
