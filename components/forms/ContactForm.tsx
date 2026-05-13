"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
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
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/leads/contact", {
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
          Message Sent
        </h3>
        <p className="text-[#9a9a9a] text-sm max-w-sm">
          I&rsquo;ll be in touch soon. Thank you for reaching out.
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

      <div>
        <label className="block text-[#9a9a9a] text-xs tracking-widest uppercase mb-1.5">Message *</label>
        <textarea name="message" required className="textarea-field" style={{ minHeight: "140px" }} placeholder="How can I help you?" />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
        {loading ? "Sending..." : "Send Message"}
        {!loading && <ArrowRight size={14} />}
      </button>
    </form>
  );
}
