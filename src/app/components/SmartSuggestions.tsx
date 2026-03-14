export default function SmartSuggestions() {
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
                Who We Help
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
              Built for the
              <br />
              top 1%
            </h2>
          </div>

          {/* Right three use case cards with dividers */}
          <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-0">
            {departments.map((dept, i) => (
              <div
                key={dept.title}
                className={`${i > 0 ? "border-t border-[#222] lg:border-t-0 lg:border-l lg:border-[#333] pt-8 lg:pt-0 lg:pl-8" : ""} ${i < departments.length - 1 ? "pb-8 lg:pb-0 lg:pr-8" : ""}`}
              >
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: dept.icon }} />
                <h3
                  className="text-base mb-2"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {dept.title}
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
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const departments = [
  {
    title: "Founders & operators",
    description:
      "You've already tested the tools. You see the use cases. You need someone who builds at your standard — not another agency that ships a demo and disappears.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
  {
    title: "Domain experts",
    description:
      "Your expertise is the product. We encode your methods, frameworks, and decisions into systems that deliver without you in the room.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  },
  {
    title: "Growth-stage teams",
    description:
      "You have the volume and the domain knowledge. We build the infrastructure that lets your team do more — without hiring more.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  },
];
