export default function NaturalVoice() {
  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-20">
          {/* Left label + heading */}
          <div className="lg:w-[38%] shrink-0">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#f97316" }}
              />
              <span
                className="uppercase text-[11px] tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  letterSpacing: "0.1em",
                }}
              >
                The Difference
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              Not another
              <br />
              consultant
            </h2>
          </div>

          {/* Right three differentiator cards with dividers */}
          <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-0">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className={`${i > 0 ? "border-t border-[#222] lg:border-t-0 lg:border-l lg:border-[#333] pt-8 lg:pt-0 lg:pl-8" : ""} ${i < differentiators.length - 1 ? "pb-8 lg:pb-0 lg:pr-8" : ""}`}
              >
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3
                  className="text-base mb-2"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const differentiators = [
  {
    title: "We don't hand off",
    description:
      "Consultants cost you time twice — once for the project, once when they leave and it breaks. We build it, deploy it, and own it. Your time stays yours.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    title: "Custom, not templated",
    description:
      "Off-the-shelf tools waste your time with workarounds. We build around how you actually work — zero adaptation time for your team.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  },
  {
    title: "Systems that compound",
    description:
      "Every system keeps running after we ship. The longer it runs, the more time it buys back. By design.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
];
