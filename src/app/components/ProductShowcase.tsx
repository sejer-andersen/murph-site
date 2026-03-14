"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroImage from "@/Images/nikhilens-antelope-canyon-8509243_1920.jpg";

/**
 * Progress timing: 6s total per step
 * - First 40% of bar fills in 1.5s (fast)
 * - Remaining 60% fills in 4.5s (slow)
 */
const TOTAL_DURATION = 6000;
const FAST_PHASE_END = 0.4;
const FAST_PHASE_TIME = 1500;
const SLOW_PHASE_TIME = 4500;

function getProgress(elapsed: number): number {
  if (elapsed <= FAST_PHASE_TIME) {
    return (elapsed / FAST_PHASE_TIME) * FAST_PHASE_END;
  }
  const slowElapsed = elapsed - FAST_PHASE_TIME;
  return FAST_PHASE_END + (slowElapsed / SLOW_PHASE_TIME) * (1 - FAST_PHASE_END);
}

const steps = [
  {
    title: "Diagnose",
    description:
      "We map every workflow, handoff, and decision point. We find exactly where your time is bleeding.",
    badge: "Discovery",
  },
  {
    title: "Design",
    description:
      "Every rule your team follows gets encoded into logic. No templates. Architecture built around how you actually operate.",
    badge: "Architecture",
  },
  {
    title: "Build",
    description:
      "Custom infrastructure, engineered and tested end-to-end. Nothing off the shelf.",
    badge: "Development",
  },
  {
    title: "Deploy",
    description:
      "Staged rollout. Monitored from day one. Zero disruption to your team.",
    badge: "Launch",
  },
  {
    title: "Own",
    description:
      "We don't hand off. We maintain, monitor, and improve. You get the results. We handle everything else.",
    badge: "Ongoing",
  },
];

export default function ProductShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(Date.now());
  const pauseStartRef = useRef(0);

  const advanceStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const selectStep = useCallback(
    (i: number) => {
      if (i === activeStep) return;
      setActiveStep(i);
      setProgress(0);
      startTimeRef.current = Date.now();
      pauseStartRef.current = Date.now();
      setIsPaused(false);
    },
    [activeStep]
  );

  useEffect(() => {
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
  }, [isPaused, activeStep, advanceStep]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    pauseStartRef.current = Date.now();
  }, []);

  const handleMouseLeave = useCallback(() => {
    const pauseDuration = Date.now() - pauseStartRef.current;
    startTimeRef.current += pauseDuration;
    setIsPaused(false);
  }, []);

  return (
    <section id="how-we-work" className="relative bg-[#0a0a0a] py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div
          className="overflow-hidden"
          style={{
            backgroundColor: "#111",
            border: "1px solid #1a1a1a",
            borderRadius: 18,
          }}
        >
          <div className="grid lg:grid-cols-[40%_60%]">
            {/* Left Column */}
            <div
              className="flex flex-col p-5 sm:p-8 lg:p-10 xl:p-12"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Title area */}
              <div className="mb-3">
                <h2
                  className="text-white text-[22px] lg:text-[26px]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 600 }}
                >
                  How we work
                </h2>
              </div>
              <p
                className="text-[15px] lg:text-base leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                End-to-end. No handoffs, no decks, no disappearing acts.
              </p>

              {/* CTA button */}
              <div className="mb-10 lg:mb-14">
                <a
                  href="mailto:sejer@trymurph.com"
                  className="inline-flex items-center px-5 py-2.5 text-sm text-white rounded-full transition-colors duration-150"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)")
                  }
                >
                  Talk to us
                </a>
              </div>

              {/* Steps list with progress bars */}
              <div className="flex flex-col">
                {steps.map((step, i) => {
                  const isActive = i === activeStep;
                  return (
                    <div key={i}>
                      {i > 0 && i !== activeStep && i - 1 !== activeStep && (
                        <div
                          className="h-px w-full"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.08)",
                          }}
                        />
                      )}
                      {isActive ? (
                        <div
                          className="relative my-1 p-4 rounded-[10px] cursor-pointer"
                          style={{
                            border: "1px dashed rgba(74,222,128,0.6)",
                          }}
                          onClick={() => selectStep(i)}
                        >
                          {/* Progress bar inside active step */}
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[10px] overflow-hidden">
                            <div
                              className="h-full"
                              style={{
                                width: `${progress * 100}%`,
                                background: "#4ade80",
                              }}
                            />
                          </div>
                          <h3
                            className="text-white text-[15px] lg:text-base mb-2"
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontWeight: 500,
                            }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-[13px] lg:text-sm leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                          >
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <button
                          className="w-full text-left py-4 px-1 cursor-pointer"
                          onClick={() => selectStep(i)}
                        >
                          <h3
                            className="text-[15px] lg:text-base transition-colors duration-200"
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontWeight: 500,
                              color: "rgba(255,255,255,0.5)",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color =
                                "rgba(255,255,255,0.8)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color =
                                "rgba(255,255,255,0.5)")
                            }
                          >
                            {step.title}
                          </h3>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column Image + Animated Demo Overlay */}
            <div
              className="relative hidden lg:block min-h-[560px]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Background image */}
              <Image
                src={heroImage}
                alt=""
                fill
                className="object-cover"
                style={{
                  borderTopRightRadius: 17,
                  borderBottomRightRadius: 17,
                }}
              />

              {/* Dark overlay for readability */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
                  borderTopRightRadius: 17,
                  borderBottomRightRadius: 17,
                }}
              />

              {/* Glassmorphism demo panel */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div
                  className="w-full max-w-[440px]"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "24px",
                  }}
                >
                  {/* Panel header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div
                      className="px-2.5 py-1 rounded-full text-[10px] font-medium transition-all duration-500"
                      style={{
                        background: "rgba(74,222,128,0.12)",
                        color: "#4ade80",
                      }}
                    >
                      {steps[activeStep].badge}
                    </div>
                  </div>

                  {/* Animated demo content */}
                  <div className="relative min-h-[380px]">
                    {steps.map((step, i) => (
                      <div
                        key={step.title}
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          opacity: i === activeStep ? 1 : 0,
                          transform:
                            i === activeStep
                              ? "translateY(0)"
                              : i < activeStep
                                ? "translateY(-8px)"
                                : "translateY(8px)",
                          pointerEvents: i === activeStep ? "auto" : "none",
                        }}
                      >
                        {i === 0 && <DemoTrigger />}
                        {i === 1 && <DemoOperation />}
                        {i === 2 && <DemoOutput />}
                        {i === 3 && <DemoBuild />}
                        {i === 4 && <DemoOwnership />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile image fallback */}
            <div className="relative lg:hidden h-48 sm:h-64 overflow-hidden">
              <Image
                src={heroImage}
                alt=""
                fill
                className="object-cover"
                style={{
                  borderBottomLeftRadius: 17,
                  borderBottomRightRadius: 17,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Demo visuals ── */

function DemoTrigger() {
  const triggers = [
    { source: "New form submission", type: "Webhook", active: true },
    { source: "Slack message received", type: "Event", active: false },
    { source: "New row in Google Sheet", type: "Polling", active: false },
    { source: "Email to support@", type: "Inbox", active: false },
    { source: "CRM status changed", type: "Webhook", active: true },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
          Workflow Audit
        </span>
        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          5 workflows identified
        </span>
      </div>
      {triggers.map((t) => (
        <div
          key={t.source}
          className="flex items-center gap-3 rounded-lg p-3"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: t.active ? "rgba(74,222,128,0.7)" : "rgba(255,255,255,0.15)" }}
          />
          <div className="flex-1 min-w-0">
            <span
              className="text-[11px] font-medium truncate block"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {t.source}
            </span>
          </div>
          <span
            className="text-[9px] font-medium px-2 py-0.5 rounded-full shrink-0"
            style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}
          >
            {t.type}
          </span>
        </div>
      ))}
    </div>
  );
}

function DemoOperation() {
  const nodes = [
    { label: "Trigger", sub: "Input received" },
    { label: "Operation", sub: "Process & route" },
    { label: "Output", sub: "Action delivered" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[11px] font-medium"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          System Flow
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}
        >
          Live
        </span>
      </div>

      {/* Dot Line Dot Line Dot */}
      <div className="flex-1 flex items-center justify-center py-6">
        <div className="flex items-center gap-0 w-full max-w-[320px]">
          {nodes.map((node, i) => (
            <div key={node.label} className="contents">
              {/* Node */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center design-flow-dot"
                  style={{
                    background: "rgba(74,222,128,0.12)",
                    border: "1.5px solid rgba(74,222,128,0.4)",
                    animationDelay: `${i * 0.6}s`,
                  }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "#4ade80" }}
                  />
                </div>
                <span
                  className="text-[11px] font-medium"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: "#FFFFFF",
                  }}
                >
                  {node.label}
                </span>
                <span
                  className="text-[9px]"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {node.sub}
                </span>
              </div>

              {/* Connecting line */}
              {i < nodes.length - 1 && (
                <div className="flex-1 mx-2 relative h-[2px]">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(74,222,128,0.12)" }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 rounded-full design-flow-line"
                    style={{
                      background: "#4ade80",
                      animationDelay: `${i * 0.6 + 0.3}s`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
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
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
          Output Specification
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{ background: "rgba(74,222,128,0.1)", color: "rgba(74,222,128,0.7)" }}
        >
          All delivered
        </span>
      </div>
      {outputs.map((o) => (
        <div
          key={o.action}
          className="flex items-center gap-3 rounded-lg p-3"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "rgba(74,222,128,0.1)" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2.5 5L4.5 7L7.5 3"
                stroke="rgba(74,222,128,0.8)"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <span
              className="text-[11px] font-medium truncate block"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {o.action}
            </span>
          </div>
          <span
            className="text-[10px] font-mono shrink-0"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {o.time}
          </span>
        </div>
      ))}
    </div>
  );
}

function DemoBuild() {
  const phases = [
    { label: "Discovery & audit", status: "complete", progress: 100 },
    { label: "System architecture", status: "complete", progress: 100 },
    { label: "Development", status: "active", progress: 72 },
    { label: "Testing & QA", status: "pending", progress: 0 },
    { label: "Deployment", status: "pending", progress: 0 },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
          Build Progress
        </span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}
        >
          In progress
        </span>
      </div>
      {phases.map((p) => (
        <div
          key={p.label}
          className="flex items-center gap-3 rounded-lg p-3"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{
              background:
                p.status === "complete"
                  ? "rgba(74,222,128,0.1)"
                  : p.status === "active"
                    ? "rgba(74,222,128,0.1)"
                    : "rgba(255,255,255,0.04)",
            }}
          >
            {p.status === "complete" ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.5 5L4.5 7L7.5 3" stroke="rgba(74,222,128,0.8)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : p.status === "active" ? (
              <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-white/10" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <span
              className="text-[11px] font-medium block mb-1"
              style={{
                color:
                  p.status === "pending"
                    ? "rgba(255,255,255,0.35)"
                    : "rgba(255,255,255,0.7)",
              }}
            >
              {p.label}
            </span>
            <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${p.progress}%`,
                  background:
                    p.status === "complete"
                      ? "rgba(74,222,128,0.5)"
                      : "#4ade80",
                }}
              />
            </div>
          </div>
          <span
            className="text-[10px] font-mono shrink-0"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {p.progress}%
          </span>
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
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
          Murph vs. Everyone Else
        </span>
      </div>
      <div className="rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div
          className="grid grid-cols-[1fr_72px_72px] gap-0 px-3 py-2"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-[9px] uppercase tracking-wider font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Phase</span>
          <span className="text-[9px] uppercase tracking-wider font-medium text-center" style={{ color: "#4ade80" }}>Murph</span>
          <span className="text-[9px] uppercase tracking-wider font-medium text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Others</span>
        </div>
        {items.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[1fr_72px_72px] gap-0 px-3 py-2.5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
          >
            <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
              {item.label}
            </span>
            <div className="flex justify-center">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: "rgba(74,222,128,0.15)" }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M2 4L3.5 5.5L6 2.5" stroke="#4ade80" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center">
              {item.them ? (
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2 4L3.5 5.5L6 2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(249,115,22,0.08)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2.5 2.5L5.5 5.5M5.5 2.5L2.5 5.5" stroke="rgba(249,115,22,0.5)" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className="rounded-lg p-3 mt-auto"
        style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.1)" }}
      >
        <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          Others scope it and leave. We build it, deploy it, and own the result.
        </p>
      </div>
    </div>
  );
}
