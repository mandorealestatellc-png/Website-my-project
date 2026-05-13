const PLACEHOLDER_TESTIMONIALS = [
  {
    id: "1",
    name: "Michael & Sarah T.",
    role: "Sellers · Oro Valley",
    quote:
      "Armando helped us price and position our home strategically. It sold in 11 days above asking. His market knowledge and communication were exceptional.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos R.",
    role: "Investor · Tucson",
    quote:
      "I've bought three fixer-uppers through Armando. He understands investor math and always finds deals that make sense. No fluff, just results.",
    rating: 5,
  },
  {
    id: "3",
    name: "Linda W.",
    role: "Landowner · Vail, AZ",
    quote:
      "Had no idea what my land was worth or who would even want it. Armando walked me through every step — got it listed properly and sold to a builder. Very grateful.",
    rating: 5,
  },
  {
    id: "4",
    name: "James & Diana F.",
    role: "Buyers · Marana",
    quote:
      "First home purchase and Armando made it completely stress-free. He explained everything, was always available, and negotiated a great deal for us.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#c8b89a] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#f2ede6]">
      <div className="container-site">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c8b89a]" />
            <span className="section-label">Client Stories</span>
            <div className="h-px w-8 bg-[#c8b89a]" />
          </div>
          <h2
            className="text-[#0a0a0a]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            }}
          >
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PLACEHOLDER_TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#faf8f5] border border-[#e8ddd0] p-8 md:p-10">
              <StarRating count={t.rating} />
              <blockquote
                className="text-[#1a1a1a] text-xl md:text-2xl leading-snug mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <div className="text-[#1a1a1a] text-sm font-medium">{t.name}</div>
                <div className="text-[#9a9a9a] text-xs tracking-wide mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#9a9a9a] text-xs mt-8 tracking-wide">
          * Testimonials are placeholder content. Replace with verified client reviews.
        </p>
      </div>
    </section>
  );
}
