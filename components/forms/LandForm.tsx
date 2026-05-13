"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function LandForm() {
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
      land_address: (form.elements.namedItem("land_address") as HTMLInputElement).value,
      apn: (form.elements.namedItem("apn") as HTMLInputElement).value,
      lot_size: (form.elements.namedItem("lot_size") as HTMLInputElement).value,
      utilities_known: (form.elements.namedItem("utilities_known") as HTMLSelectElement).value,
      asking_price: (form.elements.namedItem("asking_price") as HTMLInputElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/leads/land", {
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
          Land Details Received
        </h3>
        <p className="text-[#9a9a9a] text-sm max-w-sm">
          I&rsquo;ll research your parcel and reach out with a land-specific strategy.
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
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Email</label>
        <input name="email" type="email" className="input-field" placeholder="you@email.com" />
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Land Address or General Location *</label>
        <input name="land_address" required className="input-field" placeholder="Street address or intersection, Tucson, AZ" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">APN (Parcel Number)</label>
          <input name="apn" className="input-field" placeholder="000-00-000A" />
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Lot Size</label>
          <input name="lot_size" className="input-field" placeholder="e.g. 0.5 acres, 2 acres" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Utilities</label>
          <select name="utilities_known" className="select-field">
            <option value="">Utility access known?</option>
            <option value="yes-all">Yes — water, electric, sewer</option>
            <option value="yes-partial">Partial utility access</option>
            <option value="no">No utilities</option>
            <option value="unknown">I&apos;m not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Asking Price</label>
          <input name="asking_price" className="input-field" placeholder="$000,000 (or make offer)" />
        </div>
      </div>

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Notes</label>
        <textarea name="notes" className="textarea-field" placeholder="Zoning, history, why selling, any other relevant info..." />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
        {loading ? "Submitting..." : "Submit Land Details"}
        {!loading && <ArrowRight size={14} />}
      </button>
    </form>
  );
}
