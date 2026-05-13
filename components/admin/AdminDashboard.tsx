"use client";

import { useState, useEffect, useCallback } from "react";
import { LogOut, RefreshCw, Users, Home, Map, MessageSquare, Building2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { SellerLead, InvestorBuyer, LandLead, ContactMessage, FeaturedProperty } from "@/lib/types";

type Tab = "sellers" | "investors" | "land" | "contacts" | "properties";

const LEAD_STATUSES = [
  "New", "Contacted", "Appointment Set", "Offer Sent",
  "Listed", "Under Contract", "Closed", "Dead",
];

const STATUS_COLORS: Record<string, string> = {
  New: "bg-blue-900/40 text-blue-300",
  Contacted: "bg-yellow-900/40 text-yellow-300",
  "Appointment Set": "bg-purple-900/40 text-purple-300",
  "Offer Sent": "bg-orange-900/40 text-orange-300",
  Listed: "bg-teal-900/40 text-teal-300",
  "Under Contract": "bg-indigo-900/40 text-indigo-300",
  Closed: "bg-green-900/40 text-green-300",
  Dead: "bg-[#1a1a1a] text-[#6b6b6b]",
};

interface Props {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: Props) {
  const [tab, setTab] = useState<Tab>("sellers");
  const [sellers, setSellers] = useState<SellerLead[]>([]);
  const [investors, setInvestors] = useState<InvestorBuyer[]>([]);
  const [landLeads, setLandLeads] = useState<LandLead[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [properties, setProperties] = useState<FeaturedProperty[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    const [s, i, l, c, p] = await Promise.all([
      supabase.from("seller_leads").select("*").order("created_at", { ascending: false }),
      supabase.from("investor_buyers").select("*").order("created_at", { ascending: false }),
      supabase.from("land_leads").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      supabase.from("featured_properties").select("*").order("sort_order"),
    ]);
    if (s.data) setSellers(s.data);
    if (i.data) setInvestors(i.data);
    if (l.data) setLandLeads(l.data);
    if (c.data) setContacts(c.data);
    if (p.data) setProperties(p.data);
    setLoading(false);
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  async function updateStatus(table: string, id: string, status: string) {
    await supabase.from(table).update({ status }).eq("id", id);
    fetchAll();
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode; count: number }[] = [
    { id: "sellers", label: "Seller Leads", icon: <Home size={15} />, count: sellers.length },
    { id: "investors", label: "Investor Buyers", icon: <Building2 size={15} />, count: investors.length },
    { id: "land", label: "Land Leads", icon: <Map size={15} />, count: landLeads.length },
    { id: "contacts", label: "Messages", icon: <MessageSquare size={15} />, count: contacts.length },
    { id: "properties", label: "Properties", icon: <Users size={15} />, count: properties.length },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-[#faf8f5] text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>
              Armando Rosano · Admin
            </div>
            <div className="text-[#6b6b6b] text-xs tracking-widest uppercase">Lead Management Dashboard</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchAll}
              className="p-2 text-[#6b6b6b] hover:text-[#c8b89a] transition-colors"
              disabled={loading}
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-[#6b6b6b] hover:text-[#faf8f5] text-xs tracking-widest uppercase transition-colors"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-6">
          {tabs.map((t) => (
            <div key={t.id} className="flex items-center gap-2">
              <span className="text-[#6b6b6b]">{t.icon}</span>
              <span className="text-[#faf8f5] text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>
                {t.count}
              </span>
              <span className="text-[#6b6b6b] text-xs">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tab nav */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-4 text-xs tracking-widest uppercase whitespace-nowrap transition-colors border-b-2 ${
                tab === t.id
                  ? "border-[#c8b89a] text-[#c8b89a]"
                  : "border-transparent text-[#6b6b6b] hover:text-[#faf8f5]"
              }`}
            >
              {t.icon}
              {t.label}
              <span className="bg-[#2a2a2a] text-[#9a9a9a] text-[0.65rem] px-1.5 py-0.5 rounded-sm">
                {t.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {tab === "sellers" && (
          <LeadTable
            data={sellers}
            columns={["Name", "Phone", "Email", "Address", "Condition", "Timeline", "Asking Price", "Interested In", "Status", "Date"]}
            renderRow={(row: SellerLead) => [
              row.name,
              row.phone || "—",
              row.email || "—",
              row.property_address || "—",
              row.property_condition || "—",
              row.timeline || "—",
              row.asking_price || "—",
              row.interested_in || "—",
              <StatusBadge key="s" status={row.status} id={row.id} table="seller_leads" onUpdate={updateStatus} />,
              new Date(row.created_at).toLocaleDateString(),
            ]}
          />
        )}

        {tab === "investors" && (
          <LeadTable
            data={investors}
            columns={["Name", "Phone", "Email", "Buyer Type", "Max Price", "Financing", "Zip Codes", "Property Type", "Status", "Date"]}
            renderRow={(row: InvestorBuyer) => [
              row.name,
              row.phone || "—",
              row.email || "—",
              row.buyer_type || "—",
              row.max_purchase_price || "—",
              row.financing_type || "—",
              row.preferred_zip_codes || "—",
              row.preferred_property_type || "—",
              <StatusBadge key="s" status={row.status} id={row.id} table="investor_buyers" onUpdate={updateStatus} />,
              new Date(row.created_at).toLocaleDateString(),
            ]}
          />
        )}

        {tab === "land" && (
          <LeadTable
            data={landLeads}
            columns={["Name", "Phone", "Email", "Land Address", "APN", "Lot Size", "Utilities", "Asking Price", "Status", "Date"]}
            renderRow={(row: LandLead) => [
              row.name,
              row.phone || "—",
              row.email || "—",
              row.land_address || "—",
              row.apn || "—",
              row.lot_size || "—",
              row.utilities_known || "—",
              row.asking_price || "—",
              <StatusBadge key="s" status={row.status} id={row.id} table="land_leads" onUpdate={updateStatus} />,
              new Date(row.created_at).toLocaleDateString(),
            ]}
          />
        )}

        {tab === "contacts" && (
          <LeadTable
            data={contacts}
            columns={["Name", "Phone", "Email", "Message", "Status", "Date"]}
            renderRow={(row: ContactMessage) => [
              row.name,
              row.phone || "—",
              row.email || "—",
              <span key="m" className="max-w-xs block truncate text-[#9a9a9a]">{row.message || "—"}</span>,
              <StatusBadge key="s" status={row.status} id={row.id} table="contact_messages" onUpdate={updateStatus} />,
              new Date(row.created_at).toLocaleDateString(),
            ]}
          />
        )}

        {tab === "properties" && (
          <PropertiesTable data={properties} onRefresh={fetchAll} />
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status, id, table, onUpdate }: {
  status: string;
  id: string;
  table: string;
  onUpdate: (table: string, id: string, status: string) => void;
}) {
  return (
    <select
      value={status}
      onChange={(e) => onUpdate(table, id, e.target.value)}
      className={`text-xs px-2 py-1 cursor-pointer outline-none border-0 ${STATUS_COLORS[status] || STATUS_COLORS.New}`}
    >
      {LEAD_STATUSES.map((s) => (
        <option key={s} value={s} className="bg-[#1a1a1a] text-[#faf8f5]">{s}</option>
      ))}
    </select>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LeadTable({ data, columns, renderRow }: {
  data: any[];
  columns: string[];
  renderRow: (row: any) => (React.ReactNode | string)[];
}) {
  if (data.length === 0) {
    return (
      <div className="text-center py-16 text-[#6b6b6b]">
        <p className="text-lg mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>No records yet</p>
        <p className="text-xs">Leads will appear here once the forms are submitted.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((col) => (
              <th key={col} className="text-left py-3 px-4 text-[#6b6b6b] text-xs tracking-widest uppercase font-medium whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
              {renderRow(row).map((cell, j) => (
                <td key={j} className="py-3 px-4 text-[#faf8f5]/80 text-xs whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PropertiesTable({ data, onRefresh }: { data: FeaturedProperty[]; onRefresh: () => void }) {
  if (data.length === 0) {
    return (
      <div className="text-center py-16 text-[#6b6b6b]">
        <p className="text-lg mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>No properties yet</p>
        <p className="text-xs">Add featured properties via the Supabase dashboard.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            {["Address", "Price", "Type", "Status", "Beds", "Baths", "Sqft", "Spotlight"].map((col) => (
              <th key={col} className="text-left py-3 px-4 text-[#6b6b6b] text-xs tracking-widest uppercase font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
              <td className="py-3 px-4 text-[#faf8f5]/80 text-xs">{p.address}</td>
              <td className="py-3 px-4 text-[#c8b89a] text-xs">{p.price}</td>
              <td className="py-3 px-4 text-[#faf8f5]/80 text-xs">{p.property_type}</td>
              <td className="py-3 px-4 text-xs">
                <span className={`px-2 py-0.5 text-[0.65rem] tracking-wide ${STATUS_COLORS[p.status] || STATUS_COLORS.New}`}>
                  {p.status}
                </span>
              </td>
              <td className="py-3 px-4 text-[#faf8f5]/60 text-xs">{p.beds ?? "—"}</td>
              <td className="py-3 px-4 text-[#faf8f5]/60 text-xs">{p.baths ?? "—"}</td>
              <td className="py-3 px-4 text-[#faf8f5]/60 text-xs">{p.sqft?.toLocaleString() ?? "—"}</td>
              <td className="py-3 px-4 text-xs">
                {p.is_spotlight ? (
                  <span className="text-[#c8b89a]">★ Spotlight</span>
                ) : (
                  <span className="text-[#6b6b6b]">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
