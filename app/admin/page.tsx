"use client";

import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123")) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  }

  if (authenticated) {
    return <AdminDashboard onLogout={() => setAuthenticated(false)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div
            className="text-[#c8b89a] text-3xl mb-2"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            Armando Rosano
          </div>
          <div className="text-[#6b6b6b] text-xs tracking-widest uppercase">
            Admin Dashboard
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-[#1a1a1a] border border-white/10 text-[#faf8f5] px-4 py-3.5 text-sm outline-none focus:border-[#c8b89a] transition-colors pr-12"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6b6b] hover:text-[#c8b89a] transition-colors"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#c8b89a] text-[#0a0a0a] py-3.5 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-[#b8965a] transition-colors"
          >
            Access Dashboard
            <ArrowRight size={14} />
          </button>
        </form>

        <p className="text-center text-[#6b6b6b] text-xs mt-6">
          Set <code className="text-[#c8b89a]">NEXT_PUBLIC_ADMIN_PASSWORD</code> in your env.
        </p>
      </div>
    </div>
  );
}
