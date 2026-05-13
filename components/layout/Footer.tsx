import Link from "next/link";
import { Phone, Mail, MapPin, AtSign } from "lucide-react";

const footerLinks = {
  Buy: [
    { label: "Buyer Guide", href: "/buy/guide" },
    { label: "Featured Listings", href: "/buy/listings" },
    { label: "First-Time Buyers", href: "/buy/first-time" },
    { label: "Investment Properties", href: "/buy/investment" },
  ],
  Sell: [
    { label: "Seller Guide", href: "/sell/guide" },
    { label: "Home Valuation", href: "/sell/valuation" },
    { label: "Distressed Properties", href: "/sell/distressed" },
    { label: "Luxury Listings", href: "/sell/luxury" },
  ],
  Invest: [
    { label: "Investor Buyer List", href: "/invest/buyer-list" },
    { label: "Fixer Uppers", href: "/invest/fixers" },
    { label: "Multifamily", href: "/invest/multifamily" },
    { label: "Land Opportunities", href: "/invest/land" },
  ],
  Land: [
    { label: "Sell Your Land", href: "/land/sell" },
    { label: "Land Valuation", href: "/land/valuation" },
    { label: "Builder Opportunities", href: "/land/builder" },
    { label: "Infill Lots", href: "/land/infill" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#faf8f5]">
      {/* Main Footer */}
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div
                className="text-2xl text-[#faf8f5] hover:text-[#c8b89a] transition-colors"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                Armando Rosano
              </div>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-[#c8b89a] mt-1">
                Real Broker · Tucson, AZ
              </div>
            </Link>

            <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6 max-w-xs">
              Strategic real estate for sellers, buyers, and investors across
              Tucson and Southern Arizona.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+15205550000"
                className="flex items-center gap-3 text-[#9a9a9a] hover:text-[#c8b89a] text-sm transition-colors"
              >
                <Phone size={14} />
                (520) 555-0000
              </a>
              <a
                href="mailto:armando@youremail.com"
                className="flex items-center gap-3 text-[#9a9a9a] hover:text-[#c8b89a] text-sm transition-colors"
              >
                <Mail size={14} />
                armando@youremail.com
              </a>
              <div className="flex items-center gap-3 text-[#9a9a9a] text-sm">
                <MapPin size={14} />
                Tucson, Arizona
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#9a9a9a] hover:text-[#c8b89a] text-sm transition-colors"
              >
                <AtSign size={14} />
                @armandorosano
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#faf8f5] text-[0.7rem] tracking-[0.2em] uppercase font-medium mb-5">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#9a9a9a] hover:text-[#c8b89a] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6b6b6b] text-xs text-center md:text-left">
            © {new Date().getFullYear()} Armando Rosano · Real Broker · All rights reserved.
          </p>
          <p className="text-[#6b6b6b] text-xs text-center">
            Armando Rosano is a licensed REALTOR® in the state of Arizona. Real
            Broker, LLC. Information deemed reliable but not guaranteed. Equal
            Housing Opportunity.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-[#6b6b6b] hover:text-[#9a9a9a] text-xs transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
