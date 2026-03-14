"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, suffix = "", duration = 2000) {
  const [display, setDisplay] = useState("0" + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !animated.current) {
          animated.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const ease = 1 - (1 - p) ** 3;
            setDisplay(Math.floor(ease * end) + suffix);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, duration]);

  return { display, ref };
}

export default function StatsBar() {
  const stat1 = useCountUp(300, "+");
  const stat2 = useCountUp(60, "+");

  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-24">
          {/* Left body text */}
          <div className="lg:w-[55%]">
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-lato)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.5,
              }}
            >
              Every hour your team spends on repetitive work is an hour you can&apos;t buy back.{"\n"}
              Until now.
            </p>
          </div>

          {/* Right stats */}
          <div className="flex items-stretch gap-6 sm:gap-12 lg:gap-16">
            <div ref={stat1.ref}>
              <p
                className="uppercase tracking-[0.12em] text-[11px] mb-3"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.12em",
                }}
              >
                Systems Deployed
              </p>
              <p
                className="text-4xl sm:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1,
                }}
              >
                {stat1.display}
              </p>
            </div>

            <div className="w-px self-stretch" style={{ backgroundColor: "#333" }} />

            <div ref={stat2.ref}>
              <p
                className="uppercase tracking-[0.12em] text-[11px] mb-3"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.12em",
                }}
              >
                Companies Worked With
              </p>
              <p
                className="text-4xl sm:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1,
                }}
              >
                {stat2.display}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
