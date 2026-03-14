"use client";

import Image from "next/image";
import heroImage from "@/Images/keyang-horseshoe-bend-1908283_1920.jpg";

export default function VoiceExperienceCard() {
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
          <div className="grid lg:grid-cols-[40%_60%]">
            {/* Left Column Text */}
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
                  After we ship
                </h2>
              </div>

              {/* Description */}
              <p
                className="text-[15px] lg:text-base leading-relaxed mb-8"
                style={{
                  fontFamily: "var(--font-lato)",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                }}
              >
                Deployment is where the time savings start. From day one, your
                systems run, improve, and compound — giving you back more time
                every week. We monitor and optimize. You just get the hours back.
              </p>

              {/* CTA */}
              <div>
                <a
                  href="mailto:sejer@trymurph.com"
                  className="inline-flex items-center px-5 py-2.5 text-sm text-white rounded-full transition-colors duration-150"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Right Column Image + Overlay */}
            <div className="relative hidden lg:block min-h-[480px]">
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
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 100%)",
                  borderTopRightRadius: 17,
                  borderBottomRightRadius: 17,
                }}
              />
              {/* Monitoring panel */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div
                  className="w-full max-w-[380px]"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "24px",
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      System Health
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(74,222,128,0.12)",
                        color: "#4ade80",
                      }}
                    >
                      All systems live
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Uptime", value: "99.98%" },
                      { label: "Avg response", value: "0.3s" },
                      { label: "Tasks / day", value: "2,847" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg p-3"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <span
                          className="block text-[17px] font-medium mb-0.5"
                          style={{
                            color: "#FFFFFF",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {m.value}
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Activity log */}
                  <div className="flex flex-col gap-2">
                    {[
                      {
                        action: "Auto-scaled processing queue",
                        time: "2m ago",
                        status: "resolved",
                      },
                      {
                        action: "Weekly performance report sent",
                        time: "4h ago",
                        status: "complete",
                      },
                      {
                        action: "New workflow variant deployed",
                        time: "1d ago",
                        status: "complete",
                      },
                      {
                        action: "Edge case flagged for review",
                        time: "2d ago",
                        status: "reviewed",
                      },
                    ].map((item) => (
                      <div
                        key={item.action}
                        className="flex items-center gap-3 rounded-lg p-2.5"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background:
                              item.status === "resolved"
                                ? "#4ade80"
                                : "rgba(74,222,128,0.4)",
                          }}
                        />
                        <span
                          className="flex-1 text-[11px] font-medium truncate"
                          style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {item.action}
                        </span>
                        <span
                          className="text-[10px] font-mono shrink-0"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          {item.time}
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
