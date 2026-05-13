"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function SellerForm() {
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
      property_address: (form.elements.namedItem("property_address") as HTMLInputElement).value,
      property_condition: (form.elements.namedItem("property_condition") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
      asking_price: (form.elements.namedItem("asking_price") as HTMLInputElement).value,
      reason_for_selling: (form.elements.namedItem("reason_for_selling") as HTMLInputElement).value,
      interested_in: (form.elements.namedItem("interested_in") as HTMLSelectElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/leads/seller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or call directly.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="text-[#c8b89a] mb-4" size={40} />
        <h3 className="text-[#faf8f5] text-2xl mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
          Message Received
        </h3>
        <p className="text-[#9a9a9a] text-sm max-w-sm">
          I&rsquo;ll review your property details and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
            Full Name *
          </label>
          <input name="name" required className="input-field" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
            Phone
          </label>
          <input name="phone" type="tel" className="input-field" placeholder="(520) 000-0000" />
        </div>
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
          Email
        </label>
        <input name="email" type="email" className="input-field" placeholder="you@email.com" />
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
          Property Address *
        </label>
        <input name="property_address" required className="input-field" placeholder="123 Main St, Tucson, AZ" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
            Property Condition
          </label>
          <select name="property_condition" className="select-field">
            <option value="">Select condition</option>
            <option value="excellent">Excellent — move-in ready</option>
            <option value="good">Good — minor updates needed</option>
            <option value="fair">Fair — moderate work needed</option>
            <option value="poor">Poor — major repairs needed</option>
            <option value="needs-work">Significant rehab needed</option>
          </select>
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
            Timeline
          </label>
          <select name="timeline" className="select-field">
            <option value="">When are you looking to sell?</option>
            <option value="asap">ASAP</option>
            <option value="1-3mo">1–3 months</option>
            <option value="3-6mo">3–6 months</option>
            <option value="6mo+">6+ months / exploring</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
            Asking Price (if known)
          </label>
          <input name="asking_price" className="input-field" placeholder="$000,000" />
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
            Interested In
          </label>
          <select name="interested_in" className="select-field">
            <option value="">Select preference</option>
            <option value="listing">Traditional Listing</option>
            <option value="cash-offer">Cash Offer / Quick Sale</option>
            <option value="both">Open to both — let&apos;s talk</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
          Reason for Selling
        </label>
        <input name="reason_for_selling" className="input-field" placeholder="Relocating, inherited, downsizing, etc." />
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">
          Additional Notes
        </label>
        <textarea name="notes" className="textarea-field" placeholder="Anything else I should know about the property or situation..." />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
        {loading ? "Sending..." : "Submit Property Details"}
        {!loading && <ArrowRight size={14} />}
      </button>
    </form>
  );
}
