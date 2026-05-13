"use client";

import { useState } from "react";
import SellerForm from "@/components/forms/SellerForm";
import InvestorForm from "@/components/forms/InvestorForm";
import LandForm from "@/components/forms/LandForm";
import ContactForm from "@/components/forms/ContactForm";

const TABS = [
  { id: "seller", label: "Selling a Property" },
  { id: "investor", label: "Investor Buyer List" },
  { id: "land", label: "Selling Land" },
  { id: "contact", label: "General Contact" },
];

export default function LeadCapture() {
  const [activeTab, setActiveTab] = useState("seller");

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c8b89a]" />
              <span className="section-label">Let&rsquo;s Connect</span>
              <div className="h-px w-8 bg-[#c8b89a]" />
            </div>
            <h2
              className="text-[#faf8f5] mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Let&rsquo;s Talk Strategy.
            </h2>
            <p className="text-[#9a9a9a] text-base">
              Whether you&rsquo;re selling, investing, or just exploring your options — start here.
            </p>
          </div>

          {/* Tab selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-4 text-xs tracking-widest uppercase font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#c8b89a] text-[#0a0a0a]"
                    : "bg-[#0a0a0a] text-[#9a9a9a] hover:text-[#faf8f5] hover:bg-[#2a2a2a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form panel */}
          <div className="bg-[#0a0a0a] p-8 md:p-10">
            {activeTab === "seller" && <SellerForm />}
            {activeTab === "investor" && <InvestorForm />}
            {activeTab === "land" && <LandForm />}
            {activeTab === "contact" && <ContactForm />}
          </div>

          {/* Direct contact */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <div>
              <div className="text-[#6b6b6b] text-xs tracking-widest uppercase mb-1">Call or Text</div>
              <a href="tel:+15208090432" className="text-[#c8b89a] hover:text-[#e8ddd0] transition-colors">
                (520) 809-0432
              </a>
            </div>
            <div className="h-px w-8 sm:h-8 sm:w-px bg-white/20" />
            <div>
              <div className="text-[#6b6b6b] text-xs tracking-widest uppercase mb-1">Email</div>
              <a href="mailto:mandorealestatellc@gmail.com" className="text-[#c8b89a] hover:text-[#e8ddd0] transition-colors">
                mandorealestatellc@gmail.com
              </a>
            </div>
            <div className="h-px w-8 sm:h-8 sm:w-px bg-white/20" />
            <div>
              <div className="text-[#6b6b6b] text-xs tracking-widest uppercase mb-1">Response Time</div>
              <span className="text-[#faf8f5]/60 text-sm">Within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
