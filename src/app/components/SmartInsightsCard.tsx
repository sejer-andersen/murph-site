"use client";

import { useState } from "react";
import Image from "next/image";
import heroImage from "@/Images/treptoweralex-usa-2868732_1920.jpg";

const steps = [
  {
    title: "Time recovered",
    description:
      "Hours burned on manual work go back to your team. Strategy, clients, growth — the work that actually moves the needle.",
  },
  {
    title: "Accuracy improved",
    description:
      "Systems don't get tired, skip steps, or make typos. Quality goes up immediately and stays there.",
  },
  {
    title: "Operations scaled",
    description:
      "Your business grows. Your systems grow with it. No additional headcount for the same repetitive work.",
  },
];

export default function SmartInsightsCard() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-[#0a0a0a] py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div
          className="overflow-hidden"
          style={{
            backgroundColor: "#111",
            border: "1px solid #1a1a1a",
            borderRadius: 18,
          }}
        >
          <div className="grid lg:grid-cols-[60%_40%]">
            {/* Left Column Image + floating case study card */}
            <div className="relative hidden lg:block min-h-[540px]">
              <Image
                src={heroImage}
                alt=""
                fill
                className="object-cover"
                style={{
                  borderTopLeftRadius: 17,
                  borderBottomLeftRadius: 17,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
                  borderTopLeftRadius: 17,
                  borderBottomLeftRadius: 17,
                }}
              />

              {/* Cascading cards */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                {/* Background card (shadow) */}
                <div
                  className="absolute w-[380px] h-[340px]"
                  style={{
                    transform: "translate(12px, 12px)",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                />

                {/* Main card */}
                <div
                  className="relative w-[380px]"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: 24,
                  }}
                >
                  {/* Label */}
                  <div
                    className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider mb-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Case study
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]"
                      style={{
                        backgroundColor: "rgba(74,222,128,0.08)",
                        color: "rgba(74,222,128,0.8)",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 8V2M3 4l2-2 2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      5 hrs/day saved
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]"
                      style={{
                        backgroundColor: "rgba(74,222,128,0.08)",
                        color: "rgba(74,222,128,0.8)",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2.5 5L4.5 7L7.5 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      98% accuracy
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="text-base mb-2"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  >
                    Automated dispatch routing
                  </h4>
                  <p
                    className="text-[13px] mb-4"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.5,
                    }}
                  >
                    AI system that quotes, routes, and books shipments for an
                    air cargo company, replacing hours of manual coordination.
                  </p>

                  {/* Divider */}
                  <div className="h-px mb-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

                  {/* Outcomes */}
                  <p
                    className="text-sm font-medium mb-3"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "#FFFFFF",
                    }}
                  >
                    What changed
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      "Quote generation reduced from 45 min to instant",
                      "Carrier matching automated based on route and load",
                      "Booking confirmations sent without human intervention",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            backgroundColor: "rgba(74,222,128,0.1)",
                          }}
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
                        <span
                          className="text-[13px]"
                          style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}
                        >
                          {item}
                        </span>
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
                  borderTopLeftRadius: 17,
                  borderTopRightRadius: 17,
                }}
              />
            </div>

            {/* Right Column Text + Steps */}
            <div className="flex flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-3">
                <h2
                  className="text-[22px] lg:text-[26px]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  What changes
                </h2>
              </div>

              {/* Description */}
              <p
                className="text-[15px] lg:text-base leading-relaxed mb-6"
                style={{
                  fontFamily: "var(--font-lato)",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                }}
              >
                After deployment, your operations run faster, more accurately,
                and without the overhead. Every system we build compounds — the
                longer it runs, the more time it buys back.
              </p>

              {/* CTA */}
              <div className="mb-10 lg:mb-14">
                <a
                  href="mailto:sejer@trymurph.com"
                  className="inline-flex items-center px-5 py-2.5 text-sm text-white rounded-full transition-colors duration-150"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                >
                  Talk to us
                </a>
              </div>

              {/* Steps accordion */}
              <div className="flex flex-col">
                {steps.map((step, i) => {
                  const isActive = i === activeStep;
                  return (
                    <div key={i}>
                      {i > 0 && !isActive && i !== activeStep + 1 && (
                        <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
                      )}
                      {isActive ? (
                        <div
                          className="my-1 p-4 rounded-[10px] cursor-pointer"
                          style={{ border: "1px dashed rgba(74,222,128,0.6)" }}
                          onClick={() => setActiveStep(i)}
                        >
                          <h3
                            className="text-[15px] lg:text-base mb-2"
                            style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#FFFFFF" }}
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
                          onClick={() => setActiveStep(i)}
                        >
                          <h3
                            className="text-[15px] lg:text-base"
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontWeight: 500,
                              color: "rgba(255,255,255,0.5)",
                            }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
