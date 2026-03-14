import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TimeSavedBanner } from "../components/Hero";
import heroImage from "@/Images/treptoweralex-usa-2868732_1920.jpg";

export default function AboutPage() {
  return (
    <div className="isolate text-base overflow-x-hidden">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col overflow-hidden">
          <Image src={heroImage} alt="" fill priority className="object-cover" style={{ zIndex: 0 }} />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.65) 100%)",
            }}
          />
          <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16">
            <TimeSavedBanner />
            <h1
              className="mt-6 text-center text-3xl sm:text-4xl lg:text-6xl animate-fade-in-up delay-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                opacity: 0,
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              }}
            >
              Our currency is time.
            </h1>
            <p
              className="mt-5 max-w-[30rem] text-center text-base lg:text-lg animate-fade-in-up delay-300"
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                opacity: 0,
              }}
            >
              Not dollars. Not gold. Time. The one thing nobody has ever been able to buy. Until now.
            </p>
          </div>
        </section>

        {/* The Thesis */}
        <section className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
                <span
                  className="uppercase text-[11px] tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}
                >
                  The Thesis
                </span>
              </div>

              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-lato)" }}>
                  For most of history, time has been the one asset you couldn&apos;t buy. You could hire people, outsource work, or add tools &mdash; but you couldn&apos;t actually create more hours.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-lato)" }}>
                  Murph changes that.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-lato)" }}>
                  We build AI systems that turn repetitive operations, internal workflows, and expert decision-making into infrastructure that runs quietly in the background. The result is an unfair advantage: a company-specific operating system that compounds over time.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed font-medium" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                  The longer it runs, the more time it buys back.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Are / What We Are Not */}
        <section className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl mb-12"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}
              >
                What we are not
              </h2>

              <div className="space-y-8">
                {[
                  { label: "Not consultants.", text: "Consultants scope a project, present a deck, and leave. We build the system, deploy it, and own the result." },
                  { label: "Not a marketing agency.", text: "We don't do retainers and slides. We build infrastructure that runs without you." },
                  { label: "Not a SaaS product.", text: "We don't sell licenses to generic tools. Every system is custom-built around how your company actually operates." },
                  { label: "Not for everyone.", text: "We work with the top 1% of AI operators — directors, founders, and C-level who already use AI daily, have high standards for execution, and value their time above everything else." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "2rem" }}>
                    <div>
                      <p className="text-base font-medium mb-1" style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                        {item.label}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-lato)" }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
                <span
                  className="uppercase text-[11px] tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}
                >
                  What We Believe
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Time is the only real currency", text: "Every hour spent on work a system could handle is an hour stolen from growth." },
                  { title: "The best systems are invisible", text: "They run in the background, compounding value every day. You don't think about them. They just work." },
                  { title: "We build for the 1%", text: "People who already understand what AI can do and want someone to build it at their standard." },
                  { title: "Systems should compound", text: "The longer our systems run, the more time they save. That's not a side effect. It's the design." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
                  >
                    <h3 className="text-sm font-medium mb-2" style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-lato)" }}>
                      {item.text}
                    </p>
                  </div>
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
                  Your time is worth more than this.
                </h2>
                <p className="mt-4 max-w-[26rem] text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Tell us where your hours are going. We&apos;ll build the system that gives them back.
                </p>
                <div className="mt-8">
                  <a
                    className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
                    href="https://calendly.com/sejer-anthemagency/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in touch
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
