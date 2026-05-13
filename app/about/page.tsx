import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";

export const metadata: Metadata = {
  title: "About Armando Rosano",
  description: "Armando Rosano is a licensed REALTOR® and investor in Tucson, Arizona. Real Broker. Specializing in listings, land, fixers, luxury, and investor deals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Armando Rosano<br/><em>Tucson Realtor &amp; Investor</em>"
        subtitle="Licensed REALTOR® with Real Broker. Specializing in strategic real estate across all price points and property types in Southern Arizona."
      />

      {/* Bio section */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <div className="bg-[#f2ede6] min-h-[500px] flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-[#c8b89a] text-6xl mb-4">A</div>
                <div
                  className="text-[#1a1a1a] text-2xl mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Armando Rosano
                </div>
                <div className="text-[#9a9a9a] text-xs tracking-widest uppercase">
                  Replace with professional photo
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <div className="h-px w-8 bg-[#c8b89a] mb-6" />
              <h2
                className="text-[#0a0a0a] text-3xl mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                Real Estate Done with Strategy and Respect.
              </h2>

              <div className="space-y-4 text-[#6b6b6b] text-sm leading-relaxed mb-8">
                <p>
                  I&rsquo;m Armando Rosano — a licensed REALTOR® with Real Broker serving
                  the Tucson and Southern Arizona market. I work with sellers,
                  buyers, investors, and landowners across every price point and
                  property type.
                </p>
                <p>
                  My approach is direct and strategy-first. I look at every
                  transaction through the lens of an investor — what do the
                  numbers say, what does the market support, and what&rsquo;s the
                  right move for this specific situation.
                </p>
                <p>
                  I specialize in traditional listings, distressed properties,
                  luxury real estate, vacant land, and investment opportunities.
                  Whether you need a full-service listing or a direct transaction
                  — I can help navigate it.
                </p>
                <p>
                  Tucson is my market. I know the neighborhoods, the price
                  trends, the builder activity, and the investment corridors.
                  When you work with me, you get a real professional who
                  communicates clearly and delivers results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "License", value: "AZ Licensed REALTOR®" },
                  { label: "Brokerage", value: "Real Broker, LLC" },
                  { label: "Location", value: "Tucson, Arizona" },
                  { label: "Specialties", value: "Listings · Land · Fixers · Luxury" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#c8b89a] pl-4">
                    <div className="text-[#9a9a9a] text-xs tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-[#1a1a1a] text-sm font-medium">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+15205550000" className="btn-dark inline-flex items-center gap-2">
                  <Phone size={14} /> (520) 555-0000
                </a>
                <a href="mailto:armando@youremail.com" className="btn-outline-dark inline-flex items-center gap-2">
                  <Mail size={14} /> Email Armando
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c8b89a]" />
              <span className="section-label">How I Work</span>
              <div className="h-px w-8 bg-[#c8b89a]" />
            </div>
            <h2 className="text-[#faf8f5] text-3xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              What You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              { title: "Investor Mindset", desc: "Every decision is grounded in data — ARV, cap rates, holding costs, market velocity." },
              { title: "Direct Communication", desc: "You talk to me directly. No middlemen, no unanswered calls, no delays." },
              { title: "Property Marketing", desc: "Professional photography, strategic pricing, and targeted digital and network reach." },
              { title: "Land Knowledge", desc: "Zoning, utility access, build potential — I know what land is worth and who wants it." },
              { title: "Distressed Property Experience", desc: "Estate sales, deferred maintenance, inherited homes — I understand these situations." },
              { title: "Buyer & Investor Network", desc: "Active investor buyers and a network that creates real opportunities for sellers." },
            ].map((v) => (
              <div key={v.title} className="bg-[#0a0a0a] p-8 hover:bg-[#1a1a1a] transition-colors">
                <div className="h-px w-6 bg-[#c8b89a] mb-5" />
                <h3 className="text-[#faf8f5] text-lg mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>{v.title}</h3>
                <p className="text-[#6b6b6b] text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCapture />
    </>
  );
}
