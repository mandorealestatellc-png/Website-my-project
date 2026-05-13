interface Props {
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ label, title, subtitle, dark = true }: Props) {
  return (
    <section
      className={`pt-40 pb-20 md:pt-48 md:pb-28 ${dark ? "bg-[#0a0a0a]" : "bg-[#f2ede6]"}`}
    >
      <div className="container-site">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#c8b89a]" />
          <span className="section-label">{label}</span>
        </div>
        <h1
          className={`leading-tight mb-4 ${dark ? "text-[#faf8f5]" : "text-[#0a0a0a]"}`}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            letterSpacing: "-0.01em",
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p
            className={`text-base md:text-lg max-w-2xl leading-relaxed ${
              dark ? "text-[#9a9a9a]" : "text-[#6b6b6b]"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
