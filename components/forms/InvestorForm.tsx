"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function InvestorForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      buyer_type: (form.elements.namedItem("buyer_type") as HTMLSelectElement).value,
      preferred_zip_codes: (form.elements.namedItem("preferred_zip_codes") as HTMLInputElement).value,
      max_purchase_price: (form.elements.namedItem("max_purchase_price") as HTMLInputElement).value,
      financing_type: (form.elements.namedItem("financing_type") as HTMLSelectElement).value,
      preferred_property_type: (form.elements.namedItem("preferred_property_type") as HTMLSelectElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/leads/investor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="text-[#c8b89a] mb-4" size={40} />
        <h3 className="text-[#faf8f5] text-2xl mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
          You&rsquo;re on the List
        </h3>
        <p className="text-[#9a9a9a] text-sm max-w-sm">
          I&rsquo;ll reach out when deals match your criteria. Welcome to the investor network.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Full Name *</label>
          <input name="name" required className="input-field" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Phone</label>
          <input name="phone" type="tel" className="input-field" placeholder="(520) 000-0000" />
        </div>
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Email *</label>
        <input name="email" type="email" required className="input-field" placeholder="you@email.com" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Buyer Type</label>
          <select name="buyer_type" className="select-field">
            <option value="">Select type</option>
            <option value="cash">Cash Buyer</option>
            <option value="hard-money">Hard Money</option>
            <option value="conventional">Conventional Financing</option>
            <option value="partner">Looking for Partners</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Financing Type</label>
          <select name="financing_type" className="select-field">
            <option value="">Cash or financing?</option>
            <option value="cash">Cash Only</option>
            <option value="financing">Financing</option>
            <option value="both">Either</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Max Purchase Price</label>
          <input name="max_purchase_price" className="input-field" placeholder="$000,000" />
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Preferred Zip Codes</label>
          <input name="preferred_zip_codes" className="input-field" placeholder="85701, 85710, etc." />
        </div>
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Preferred Property Type</label>
        <select name="preferred_property_type" className="select-field">
          <option value="">What are you looking for?</option>
          <option value="sfr-fixer">SFR Fixer / Flip</option>
          <option value="sfr-rental">SFR Buy & Hold Rental</option>
          <option value="multifamily">Multifamily (2–4 units)</option>
          <option value="land">Land / Lots</option>
          <option value="commercial">Commercial</option>
          <option value="any">Open to anything with good numbers</option>
        </select>
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Notes / Criteria</label>
        <textarea name="notes" className="textarea-field" placeholder="Tell me more about what you're looking for..." />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
        {loading ? "Submitting..." : "Join Investor Buyer List"}
        {!loading && <ArrowRight size={14} />}
      </button>
    </form>
  );
}
