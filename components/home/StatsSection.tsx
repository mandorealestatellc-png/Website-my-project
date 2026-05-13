export default function StatsSection() {
  const stats = [
    { value: "—", label: "Closed Sales", note: "Update with your number" },
    { value: "—", label: "Avg List-to-Sale", note: "Your ratio here" },
    { value: "—", label: "Investor Buyers", note: "Active buyer network" },
    { value: "100%", label: "Tucson Market Focus", note: "Local expertise only" },
    { value: "3-in-1", label: "Land · Fixer · Luxury", note: "Multi-strategy expertise" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-24">
      <div className="container-site">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c8b89a]" />
            <span className="section-label">By the Numbers</span>
            <div className="h-px w-8 bg-[#c8b89a]" />
          </div>
          <h2
            className="text-[#faf8f5]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            }}
          >
            Real Estate Done with Intention
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] p-8 text-center group hover:bg-[#1a1a1a] transition-colors"
            >
              <div
                className="text-[#c8b89a] mb-3 group-hover:text-[#d4b07a] transition-colors"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3vw, 3.25rem)",
                }}
              >
                {stat.value}
              </div>
              <div className="text-[#faf8f5] text-sm font-medium tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="text-[#6b6b6b] text-xs">{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
