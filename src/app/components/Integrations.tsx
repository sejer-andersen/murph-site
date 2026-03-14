"use client";

import IntegrationsDiagram from "./IntegrationsDiagram";


export default function Integrations() {
  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Text */}
          <div>
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
                Your tools, connected
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              We build around
              <br />
              what you have
            </h2>

            <p
              className="text-[15px] lg:text-base leading-relaxed mb-8 sm:mb-10"
              style={{
                fontFamily: "var(--font-lato)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
              }}
            >
              Switching tools costs time. Learning new tools costs time. We
              don&apos;t touch your stack. We build the layer that connects
              everything you already use — so your team spends zero time
              adapting and all their time on work that matters.
            </p>

            {/* CTA */}
            <a
              href="mailto:sejer@trymurph.com"
              className="inline-flex items-center px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#0a0a0a] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
            >
              Book a discovery call
            </a>
          </div>

          {/* Right Hub-and-spoke diagram (desktop only) */}
          <div className="hidden lg:block">
            <IntegrationsDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
