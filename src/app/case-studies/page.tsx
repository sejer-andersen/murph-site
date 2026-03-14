import Header from "../components/Header";
import Footer from "../components/Footer";

const caseStudies = [
  {
    company: "DLVR Logistics",
    industry: "Air Cargo",
    timeSaved: "5 hrs/day",
    context: "Air cargo company handling hundreds of daily quote requests and dispatch decisions manually.",
    pain: "Quote generation took 45 minutes per request. Dispatch routing was done by spreadsheet. The ops team was the bottleneck.",
    solution: "We built an AI system that automatically generates quotes, matches carriers to routes based on load and distance, and sends booking confirmations — no human needed.",
    outcomes: [
      "Quote generation: 45 min → instant",
      "Carrier matching automated end-to-end",
      "Booking confirmations sent without intervention",
      "5 hours recovered per day",
    ],
  },
  {
    company: "Lazio Search Group",
    industry: "Recruiting",
    timeSaved: "50% screening time cut",
    context: "Recruiting firm processing thousands of candidates across multiple open roles.",
    pain: "Screening and matching candidates to roles was eating 2+ FTEs. Senior recruiters were spending their best hours on initial screening instead of closing.",
    solution: "We built an AI-powered candidate matching system that scores, ranks, and routes candidates automatically based on role requirements and firm-specific criteria.",
    outcomes: [
      "Candidate screening time cut in half",
      "Senior recruiters freed for client-facing work",
      "Match quality improved with consistent scoring",
      "Zero additional hires needed",
    ],
  },
  {
    company: "ACN Group",
    industry: "Marketing & Lead Generation",
    timeSaved: "20+ hrs/week",
    context: "Marketing group running LinkedIn lead generation across multiple brands and campaigns.",
    pain: "Manual prospecting, message sequencing, and follow-ups across multiple accounts. The team was spending more time on outreach logistics than on actual client work.",
    solution: "We built an AI-driven lead generation system that identifies, contacts, and follows up with potential clients automatically across multiple instruments.",
    outcomes: [
      "Outreach fully automated across accounts",
      "20+ hours/week recovered for client work",
      "Response rates improved with personalized sequencing",
      "New automation tools implemented across the group",
    ],
  },
  {
    company: "StaffEdge Group",
    industry: "Staffing",
    timeSaved: "Lead qualification automated",
    context: "Staffing company receiving high volumes of inbound leads with no systematic qualification process.",
    pain: "Every lead was manually reviewed. Good leads got the same response time as bad ones. The team couldn't prioritize.",
    solution: "We built an AI-powered lead qualification system that automatically identifies, scores, and routes prospects based on fit and intent signals.",
    outcomes: [
      "Lead qualification fully automated",
      "Response time for high-quality leads dropped dramatically",
      "Sales team focused only on qualified prospects",
      "Pipeline quality improved immediately",
    ],
  },
];

export default function CaseStudiesPage() {
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
                  Case Studies
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
                Time bought back.
              </h1>
              <p
                className="text-base lg:text-lg leading-relaxed max-w-[32rem]"
                style={{ fontFamily: "var(--font-lato)", color: "rgba(255,255,255,0.6)" }}
              >
                Real companies. Real systems. Real hours recovered. Here&apos;s what
                happens when you stop losing time to work that shouldn&apos;t need you.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-[#0a0a0a] pb-16 lg:pb-24">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl space-y-8">
              {caseStudies.map((cs) => (
                <div
                  key={cs.company}
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
                >
                  {/* Header */}
                  <div className="p-6 sm:p-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                          {cs.company}
                        </h3>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{cs.industry}</p>
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "rgba(74,222,128,0.08)", color: "rgba(74,222,128,0.8)" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 8V2M3 4l2-2 2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {cs.timeSaved}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-8 space-y-5">
                    {/* Context */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Context
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {cs.context}
                      </p>
                    </div>

                    {/* Pain */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Where time was bleeding
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {cs.pain}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                        What we built
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {cs.solution}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-medium mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Time bought back
                      </p>
                      <div className="space-y-2">
                        {cs.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: "rgba(74,222,128,0.1)" }}
                            >
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M2.5 5L4.5 7L7.5 3" stroke="rgba(74,222,128,0.8)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                  Your time is next.
                </h2>
                <p className="mt-4 max-w-[26rem] text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Tell us where your hours are going. We&apos;ll show you exactly what we&apos;d build to get them back.
                </p>
                <div className="mt-8">
                  <a
                    className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
                    href="https://calendly.com/sejer-anthemagency/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a discovery call
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
