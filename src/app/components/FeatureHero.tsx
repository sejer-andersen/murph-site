"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Progress timing: 6s total per step
 * - First 40% of bar fills in 1.5s (fast)
 * - Remaining 60% fills in 4.5s (slow)
 * Total = 6s, then auto-advance
 */
const TOTAL_DURATION = 6000;
const FAST_PHASE_END = 0.4; // 40% of bar
const FAST_PHASE_TIME = 1500; // 1.5s
const SLOW_PHASE_TIME = 4500; // 4.5s

function getProgress(elapsed: number): number {
  if (elapsed <= FAST_PHASE_TIME) {
    return (elapsed / FAST_PHASE_TIME) * FAST_PHASE_END;
  }
  const slowElapsed = elapsed - FAST_PHASE_TIME;
  return FAST_PHASE_END + (slowElapsed / SLOW_PHASE_TIME) * (1 - FAST_PHASE_END);
}

export default function FeatureHero() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const advanceStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const selectStep = useCallback((i: number) => {
    if (i === activeStep) return;
    setActiveStep(i);
    setProgress(0);
    startTimeRef.current = Date.now();
    pauseStartRef.current = Date.now();
    setIsPaused(false);
  }, [activeStep]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const tick = () => {
      if (!isPaused) {
        const elapsed = Date.now() - startTimeRef.current;
        if (elapsed >= TOTAL_DURATION) {
          advanceStep();
          return;
        }
        setProgress(getProgress(elapsed));
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, activeStep, prefersReducedMotion, advanceStep]);

  const pauseStartRef = useRef(0);
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    pauseStartRef.current = Date.now();
  }, []);
  const handleMouseLeave = useCallback(() => {
    const pauseDuration = Date.now() - pauseStartRef.current;
    startTimeRef.current += pauseDuration;
    setIsPaused(false);
  }, []);

  const currentDemo = steps[activeStep].demo;

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(198.96% 100% at 50% 100%, #FFF 6.32%, #E7EDFD 29.28%, #E7EDFD 68.68%, #FFF 100%)",
      }}
    >
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* ── Left column ── */}
          <div className="flex flex-col">
            <p
              className="text-xs uppercase tracking-[0.15em] mb-5 font-medium"
              style={{ color: "#257af3" }}
            >
              What makes us different
            </p>

            <h2
              className="text-4xl lg:text-[3.25rem] lg:leading-[1.1] mb-5"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                color: "#212121",
              }}
            >
              The <span className="text-brand-blue">TOO</span> framework
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-[28rem]"
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 400,
                color: "#545454",
              }}
            >
              Most consultants diagnose. Most agencies build. We do both,{"\n"}
              and we own the result. Our proprietary{" "}
              <strong style={{ fontWeight: 500, color: "#212121" }}>
                Trigger → Operation → Output
              </strong>{" "}
              framework turns any repeatable workflow into a system that runs
              itself.
            </p>

            <a
              href="mailto:sejer@trymurph.com"
              className="inline-flex items-center justify-center w-fit px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-150 mb-12 hover:bg-[#1e6ada] active:bg-[#185bc2]"
              style={{
                background: "#257af3",
                boxShadow: "0 1px 4px -1px rgba(37,122,243,0.4)",
                textShadow: "0px 1px 1px rgba(0,0,0,0.16)",
              }}
            >
              Book a free audit
              <svg className="ml-2" width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M5.25 3.5L8.75 7l-3.5 3.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Interactive step list */}
            <div
              className="flex flex-col"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {steps.map((step, i) => {
                const isActive = i === activeStep;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => selectStep(i)}
                    className="relative text-left w-full transition-colors duration-200 cursor-pointer"
                    style={{
                      borderTop: i > 0 ? "1px solid rgba(33,33,33,0.08)" : "none",
                    }}
                  >
                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: isActive && !prefersReducedMotion
                            ? `${progress * 100}%`
                            : isActive ? "100%" : "0%",
                          background: "#257af3",
                          transition: prefersReducedMotion ? "none" : undefined,
                        }}
                      />
                    </div>

                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-opacity duration-300"
                      style={{
                        background: "#257af3",
                        opacity: isActive ? 1 : 0,
                      }}
                    />

                    <div
                      className="py-5 transition-all duration-200"
                      style={{ paddingLeft: isActive ? 12 : 0 }}
                    >
                      <div>
                        <h4
                          className="text-sm font-medium mb-1 transition-colors duration-300"
                          style={{
                            color: isActive ? "#212121" : "#545454",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {step.title}
                        </h4>
                        <p
                          className="text-sm leading-relaxed transition-all duration-300 overflow-hidden"
                          style={{
                            fontFamily: "var(--font-lato)",
                            color: isActive ? "#545454" : "#999",
                            maxHeight: isActive ? 80 : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 0 : -4,
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right column ── */}
          <div
            className="flex flex-col gap-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Micro-benefit row */}
            <div className="grid grid-cols-3 gap-4">
              {microBenefits.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-start rounded-xl p-4 bg-white"
                  style={{
                    border: "1px solid rgba(33,33,33,0.06)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg mb-3"
                    style={{ background: "rgba(37,122,243,0.08)" }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "#212121" }}>
                    {item.label}
                  </p>
                  <p className="text-[11px] leading-snug" style={{ color: "#545454" }}>
                    {item.subtext}
                  </p>
                </div>
              ))}
            </div>

            {/* Demo container */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[480px] bg-[#0a0a0a]"
              style={{
                border: "1px solid rgba(33,33,33,0.1)",
                boxShadow:
                  "0 4px 40px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.03)",
              }}
            >
              <div className="absolute inset-0 flex flex-col p-6">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="ml-4 h-5 flex-1 max-w-[200px] rounded bg-white/[0.04]" />
                  <div
                    className="ml-auto px-2.5 py-1 rounded-full text-[9px] font-medium transition-colors duration-500"
                    style={{ background: "rgba(37,122,243,0.12)", color: "#257af3" }}
                  >
                    {currentDemo.badge}
                  </div>
                </div>

                {/* Dynamic content area */}
                <div className="flex-1 relative">
                  {steps.map((step, i) => (
                    <div
                      key={step.title}
                      className="absolute inset-0 transition-all duration-500"
                      style={{
                        opacity: i === activeStep ? 1 : 0,
                        transform: i === activeStep
                          ? "translateY(0)"
                          : i < activeStep
                            ? "translateY(-8px)"
                            : "translateY(8px)",
                        pointerEvents: i === activeStep ? "auto" : "none",
                      }}
                    >
                      {step.demo.render}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Step data ── */

const steps = [
  {
    title: "Identify the Trigger",
    description:
      "What starts the workflow? A form submission, a Slack message, a new row in a spreadsheet. We find every trigger hiding in your operations.",
    demo: { badge: "Trigger Mapping", render: <DemoTrigger /> },
  },
  {
    title: "Map the Operation",
    description:
      "What happens between trigger and result? We break down every decision, handoff, and manual step, then design the AI system that replaces it.",
    demo: { badge: "Operation Design", render: <DemoOperation /> },
  },
  {
    title: "Define the Output",
    description:
      "What should the end result be? A sent invoice, an assigned lead, a booked shipment. We make the output consistent, fast, and automatic.",
    demo: { badge: "Output Delivery", render: <DemoOutput /> },
  },
  {
    title: "We build it, and we own it",
    description:
      "Unlike traditional consultants, we don't hand off a report and walk away. We build the system, deploy it, and take full ownership of its performance.",
    demo: { badge: "Full Ownership", render: <DemoOwnership /> },
  },
];

/* ── Demo visuals (dark panel interior) ── */

function DemoTrigger() {
  const triggers = [
    { source: "New form submission", type: "Webhook", icon: "⚡", active: true },
    { source: "Slack message received", type: "Event", icon: "💬", active: false },
    { source: "New row in Google Sheet", type: "Polling", icon: "📊", active: false },
    { source: "Email to support@", type: "Inbox", icon: "✉️", active: false },
    { source: "CRM status changed", type: "Webhook", icon: "🔄", active: true },
  ];
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
          Trigger Discovery
        </span>
        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          5 triggers identified
        </span>
      </div>
      {triggers.map((t) => (
        <div key={t.source} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)" }}>
          <span className="text-sm shrink-0">{t.icon}</span>
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-medium truncate block" style={{ color: "rgba(255,255,255,0.7)" }}>{t.source}</span>
          </div>
          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full shrink-0" style={{
            background: "rgba(37,122,243,0.1)",
            color: "#257af3",
          }}>{t.type}</span>
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{
            background: t.active ? "rgba(74,222,128,0.7)" : "rgba(255,255,255,0.15)",
          }} />
        </div>
      ))}
    </div>
  );
}

function DemoOperation() {
  const nodes = [
    { label: "Trigger", type: "trigger", x: 8, y: 30 },
    { label: "AI Classifier", type: "ai", x: 32, y: 15 },
    { label: "Route Logic", type: "process", x: 32, y: 48 },
    { label: "Enrich Data", type: "ai", x: 56, y: 30 },
    { label: "Decision Gate", type: "process", x: 78, y: 15 },
    { label: "Output", type: "output", x: 92, y: 28 },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Operation Map</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(37,122,243,0.1)", color: "#257af3" }}>T → O → O</span>
      </div>
      <div className="flex-1 relative rounded-lg" style={{ background: "rgba(255,255,255,0.015)" }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
          <line x1="15" y1="32" x2="32" y2="18" stroke="rgba(37,122,243,0.2)" strokeWidth="0.4" />
          <line x1="15" y1="32" x2="32" y2="50" stroke="rgba(37,122,243,0.2)" strokeWidth="0.4" />
          <line x1="40" y1="18" x2="56" y2="33" stroke="rgba(37,122,243,0.2)" strokeWidth="0.4" />
          <line x1="40" y1="50" x2="56" y2="33" stroke="rgba(37,122,243,0.2)" strokeWidth="0.4" />
          <line x1="64" y1="33" x2="78" y2="18" stroke="rgba(37,122,243,0.2)" strokeWidth="0.4" />
          <line x1="64" y1="33" x2="85" y2="32" stroke="rgba(37,122,243,0.2)" strokeWidth="0.4" />
        </svg>
        {nodes.map((node) => (
          <div key={node.label} className="absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg" style={{
            left: `${node.x}%`, top: `${node.y}%`,
            background: node.type === "ai" ? "rgba(37,122,243,0.15)" : node.type === "trigger" ? "rgba(74,222,128,0.1)" : node.type === "output" ? "rgba(251,191,36,0.1)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${node.type === "ai" ? "rgba(37,122,243,0.25)" : node.type === "trigger" ? "rgba(74,222,128,0.2)" : node.type === "output" ? "rgba(251,191,36,0.2)" : "rgba(255,255,255,0.06)"}`,
            transform: "translate(-50%, -50%)",
          }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{
              background: node.type === "ai" ? "#257af3" : node.type === "trigger" ? "rgba(74,222,128,0.7)" : node.type === "output" ? "rgba(251,191,36,0.7)" : "rgba(255,255,255,0.3)",
            }} />
            <span className="text-[9px] font-medium whitespace-nowrap" style={{ color: node.type === "ai" ? "#257af3" : "rgba(255,255,255,0.6)" }}>{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoOutput() {
  const outputs = [
    { action: "Invoice sent to client", time: "0.3s" },
    { action: "Lead assigned to rep", time: "0.1s" },
    { action: "Shipment booked with carrier", time: "1.2s" },
    { action: "Report emailed to team", time: "0.5s" },
    { action: "CRM record updated", time: "0.2s" },
  ];
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Output Log</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(74,222,128,0.1)", color: "rgba(74,222,128,0.7)" }}>All delivered</span>
      </div>
      {outputs.map((o) => (
        <div key={o.action} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(74,222,128,0.1)" }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2.5 5L4.5 7L7.5 3" stroke="rgba(74,222,128,0.8)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-medium truncate block" style={{ color: "rgba(255,255,255,0.7)" }}>{o.action}</span>
          </div>
          <span className="text-[10px] font-mono shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>{o.time}</span>
        </div>
      ))}
    </div>
  );
}

function DemoOwnership() {
  const items = [
    { label: "Consulting", us: true, them: true },
    { label: "System design", us: true, them: true },
    { label: "Development", us: true, them: false },
    { label: "Deployment", us: true, them: false },
    { label: "Monitoring", us: true, them: false },
    { label: "Iteration", us: true, them: false },
  ];
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Murph vs. Traditional Consultants</span>
      </div>
      <div className="rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="grid grid-cols-[1fr_72px_72px] gap-0 px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-[9px] uppercase tracking-wider font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Phase</span>
          <span className="text-[9px] uppercase tracking-wider font-medium text-center" style={{ color: "#257af3" }}>Murph</span>
          <span className="text-[9px] uppercase tracking-wider font-medium text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Others</span>
        </div>
        {items.map((item) => (
          <div key={item.label} className="grid grid-cols-[1fr_72px_72px] gap-0 px-3 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
            <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
            <div className="flex justify-center">
              <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(37,122,243,0.15)" }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M2 4L3.5 5.5L6 2.5" stroke="#257af3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center">
              {item.them ? (
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2 4L3.5 5.5L6 2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(239,68,68,0.08)" }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2.5 2.5L5.5 5.5M5.5 2.5L2.5 5.5" stroke="rgba(239,68,68,0.5)" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg p-3 mt-auto" style={{ background: "rgba(37,122,243,0.06)", border: "1px solid rgba(37,122,243,0.1)" }}>
        <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          We don&apos;t hand off projects. We build the system, deploy it, and take full ownership of the result.
        </p>
      </div>
    </div>
  );
}

/* ── Micro-benefits ── */

const microBenefits = [
  {
    label: "Consulting-led",
    subtext: "We diagnose before we build",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5.5" stroke="#257af3" strokeWidth="1.25" />
        <path d="M8 5.5v3l2 1.5" stroke="#257af3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Full ownership",
    subtext: "No handoffs, no excuses",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M2 8h12M10 4l4 4-4 4" stroke="#257af3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "TOO framework",
    subtext: "Trigger → Operation → Output",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M4 4l4 4-4 4" stroke="#257af3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 4l4 4-4 4" stroke="#257af3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    ),
  },
];
