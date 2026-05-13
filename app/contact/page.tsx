import { Metadata } from "next";
import { Phone, Mail, MapPin, AtSign } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import LeadCapture from "@/components/home/LeadCapture";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Armando Rosano — Tucson Realtor & Investor. Call, text, or fill out the form to get started.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let&rsquo;s Talk Real Estate.<br/><em>Start Here.</em>"
        subtitle="Selling, buying, investing, or exploring land — reach out and let's figure out the right path for your situation."
      />

      {/* Contact info strip */}
      <section className="py-16 bg-[#f2ede6]">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Phone size={20} className="text-[#c8b89a]" />, label: "Call or Text", value: "(520) 809-0432", href: "tel:+15208090432" },
              { icon: <Mail size={20} className="text-[#c8b89a]" />, label: "Email", value: "mandorealestatellc@gmail.com", href: "mailto:mandorealestatellc@gmail.com" },
              { icon: <MapPin size={20} className="text-[#c8b89a]" />, label: "Location", value: "Tucson, Arizona", href: undefined },
              { icon: <AtSign size={20} className="text-[#c8b89a]" />, label: "Instagram", value: "@armandorosano", href: "https://instagram.com" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="mb-3">{item.icon}</div>
                <div className="text-[#9a9a9a] text-xs tracking-widest uppercase mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-[#1a1a1a] text-sm hover:text-[#c8b89a] transition-colors font-medium">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[#1a1a1a] text-sm font-medium">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCapture />
    </>
  );
}
