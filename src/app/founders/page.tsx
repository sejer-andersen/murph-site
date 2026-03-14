import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FoundersPage() {
  return (
    <div className="isolate text-base overflow-x-hidden">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0a0a0a] pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
                <span
                  className="uppercase text-[11px] tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}
                >
                  The Team
                </span>
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl mb-6"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                Small team.<br />Big obsession.
              </h1>
              <p
                className="text-base lg:text-lg leading-relaxed max-w-[32rem]"
                style={{ fontFamily: "var(--font-lato)", color: "rgba(255,255,255,0.6)" }}
              >
                We&apos;re a small, focused team that does one thing: builds AI systems
                that buy people their time back. We don&apos;t scale by hiring. We scale
                by building systems that compound.
              </p>
            </div>
          </div>
        </section>

        {/* Sejer */}
        <section className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <div
                className="rounded-xl p-6 sm:p-8"
                style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-medium"
                    style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80" }}
                  >
                    SA
                  </div>
                  <div>
                    <h3 className="text-base font-medium" style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                      Sejer Dahl Andersen
                    </h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Founder & CEO
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-lato)" }}>
                    Obsessed with one idea: that time is the only currency that matters, and that
                    AI has made it possible to buy it back for the first time in history.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-lato)" }}>
                    Built 300+ AI systems across 60+ companies. From automated dispatch routing
                    for logistics companies to AI-powered candidate matching for recruiting firms.
                    Every system designed around one metric: how many hours does it give back?
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-lato)" }}>
                    Selective about who we work with. We don&apos;t chase volume. We chase
                    the operators who understand what their time is worth and want someone
                    to build at their standard.
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/sejer-dahl-andersen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    style={{ color: "#4ade80" }}
                  >
                    LinkedIn
                    <svg width="16" height="16" fill="none">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5" />
                    </svg>
                  </a>
                  <a
                    href="mailto:sejer@trymurph.com"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    sejer@trymurph.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl mb-10"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}
              >
                How we think about time
              </h2>

              <div className="space-y-6">
                {[
                  "Other companies measure success in revenue, users, or growth metrics. We measure it in time. Minutes saved. Hours recovered. FTEs freed.",
                  "The counter on our website is real. It runs 24/7. Every minute it ticks is a minute one of our clients didn't have to spend on work that shouldn't need them.",
                  "That number is the brand.",
                ].map((text, i) => (
                  <p
                    key={i}
                    className={`text-base lg:text-lg leading-relaxed ${i === 2 ? "font-medium" : ""}`}
                    style={{
                      color: i === 2 ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                      fontFamily: i === 2 ? "var(--font-inter)" : "var(--font-lato)",
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div
              className="relative overflow-hidden rounded-2xl px-4 py-12 sm:px-12 sm:py-20 text-center"
              style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
            >
              <div className="relative flex flex-col items-center">
                <h2
                  className="font-medium text-2xl sm:text-3xl lg:text-4xl max-w-[30rem]"
                  style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
                >
                  We&apos;d rather show you than tell you.
                </h2>
                <p className="mt-4 max-w-[26rem] text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
                  30 minutes. We&apos;ll map where your time is going and show you exactly what we&apos;d build.
                </p>
                <div className="mt-8">
                  <a
                    className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
                    href="https://calendly.com/sejer-anthemagency/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
