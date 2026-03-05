"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntegrationsDiagram from "../components/IntegrationsDiagram";

// Images (reusing existing)
import heroImage from "@/Images/treptoweralex-usa-2868732_1920.jpg";
import showcaseImage from "@/Images/nikhilens-antelope-canyon-8509243_1920.jpg";
import monitorImage from "@/Images/keyang-horseshoe-bend-1908283_1920.jpg";
import jocLogo from "@/Images/Journal of commerce removed bg.png";
import jocImage from "@/Images/Journal of commerce image.webp";

// Review images
import stevenImg from "@/Images/Steven Bennet.jpeg";
import robertImg from "@/Images/Robert Herr.jpeg";
import domenicImg from "@/Images/Domenic Maiani.jpeg";
import elenaImg from "@/Images/Elena.jpeg";
import hasanImg from "@/Images/Hasan Veletanlic.jpeg";
import noahImg from "@/Images/Noah Blanchard.jpeg";
import danImg from "@/Images/Dan Rozga.jpeg";
import ahmedImg from "@/Images/Ahmed Bilal.jpeg";
import barryImg from "@/Images/Barry Case.jpeg";
import dennisImg from "@/Images/Dennis Dabalos.jpeg";
import andreasImg from "@/Images/Andreas ommedal.jpeg";
import idaImg from "@/Images/Ida Lodal.jpeg";

// Logos
import vittiLogo from "@/Images/Vittilogistics_W_bagground-removebg-preview.png";
import dlvrLogo from "@/Images/DLVR logistics logo updated updated version.png";
import prestigeLogo from "@/Images/Prestige_logistics-removebg-preview.png";
import razrLogo from "@/Images/RAZR_logistics_lofg-removebg-preview.png";
import tradeHarmonizerLogo from "@/Images/Trade_harmonizer-removebg-preview.png";
import atlasLogo from "@/Images/Atlas_people_logo_W_bagground-removebg-preview.png";
import bifrostLogo from "@/Images/Bifrost group logo.webp";
import promptLogo from "@/Images/Prompt global logo.png";

export default function SupplyChainAndLogistics() {
  return (
    <div className="isolate text-base overflow-x-hidden">
      <Header />
      <main>
        <SCLHero />
        <SCLStatsBar />
        <SCLProductShowcase />
        <SCLWhoWeHelp />
        <SCLCaseStudy />
        <SCLDifference />
        <SCLAfterWeShip />
        <SCLReviews />
        <SCLIntegrations />
        <SCLMentionedIn />
        <SCLFAQ />
        <SCLCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */

type LogoEntry = { name: string; src: typeof atlasLogo; url?: string; w?: number; h?: number };

const logos: LogoEntry[] = [
  { name: "Vitti Logistics", src: vittiLogo, url: "https://vittilog.com/", w: 180, h: 40 },
  { name: "DLVR Logistics", src: dlvrLogo, url: "https://dlvrlog.com/" },
  { name: "Prestige Logistics", src: prestigeLogo, url: "https://prestigelogisticsgroup.com/", w: 140, h: 32 },
  { name: "RAZR Logistics", src: razrLogo, url: "https://www.razrlogistics.com/" },
  { name: "Trade Harmonizer", src: tradeHarmonizerLogo, url: "https://www.tradeharmonizer.co.uk/" },
  { name: "Atlas People", src: atlasLogo, url: "https://www.atlaspeople.io/" },
  { name: "Bifrost Group", src: bifrostLogo, url: "https://www.bifroststudios.com/" },
  { name: "Prompt Global", src: promptLogo, url: "https://prompt.global/", w: 140, h: 32 },
];

function SCLHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Image src={heroImage} alt="" fill priority className="object-cover" style={{ zIndex: 0 }} />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.48) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.58) 100%)",
        }}
      />

      <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-24 sm:pt-24 sm:pb-32">
        {/* Industry badge */}
        <div className="flex flex-col items-center animate-fade-in-up delay-100" style={{ opacity: 0 }}>
          <div
            className="flex items-center gap-x-2 py-2 pr-3 pl-4 rounded-full border border-white/15 backdrop-blur-[12px] text-xs font-medium"
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span style={{ color: "#FFFFFF" }}>Supply Chain & Logistics</span>
            <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.7)" }}>
              — AI systems built for your operations
            </span>
          </div>
        </div>

        <h1
          className="mt-6 text-center text-3xl sm:text-4xl lg:text-6xl xl:text-7xl animate-fade-in-up delay-200"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1.1,
            opacity: 0,
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}
        >
          Move more freight.<br />With fewer bottlenecks.
        </h1>

        <p
          className="mt-5 max-w-[34rem] text-center text-base lg:text-lg animate-fade-in-up delay-300"
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            opacity: 0,
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          We build custom AI systems that automate quoting, dispatch, tracking,
          and coordination — so your team can focus on moving cargo, not managing spreadsheets.
        </p>

        <div className="mt-8 flex items-center gap-x-3 sm:gap-x-4 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
          <a
            href="https://calendly.com/sejer-anthemagency/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
          >
            Book a discovery call
          </a>
          <a
            href="#how-we-work"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full border border-white/30 bg-white/15 text-white text-sm font-medium hover:bg-white/25 transition-colors duration-150 backdrop-blur-sm"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Logo bar */}
      <div className="relative z-[2] pb-8 lg:pb-10">
        <div className="flex flex-col items-center gap-5">
          <p
            className="text-center text-xs lg:text-sm tracking-wide uppercase animate-fade-in-up delay-500"
            style={{
              fontFamily: "var(--font-lato)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.08em",
              opacity: 0,
            }}
          >
            Trusted by logistics companies worldwide
          </p>
          <div className="animate-fade-in-up delay-600" style={{ opacity: 0 }}>
            <div className="overflow-x-clip overflow-y-visible">
              <div className="logo-scroll">
                <div className="logo-track">
                  {[0, 1, 2].map((prefix) =>
                    logos.map((entry) => (
                      <div className="block" key={`${prefix}-${entry.name}`}>
                        <div className="logo-item">
                          {entry.url ? (
                            <a href={entry.url} target="_blank" rel="noopener noreferrer">
                              <div className="relative shrink-0" style={{ width: entry.w ?? 100, height: entry.h ?? 24 }}>
                                <Image
                                  src={entry.src}
                                  alt={entry.name}
                                  fill
                                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }}
                                />
                              </div>
                            </a>
                          ) : (
                            <div className="relative shrink-0" style={{ width: entry.w ?? 100, height: entry.h ?? 24 }}>
                              <Image
                                src={entry.src}
                                alt={entry.name}
                                fill
                                style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATS BAR
   ═══════════════════════════════════════════════════════════ */

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

function SCLStatsBar() {
  const stat1 = useCountUp(300, "+");
  const stat2 = useCountUp(40, "+");

  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-24">
          <div className="lg:w-[55%]">
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5 }}
            >
              Automate quoting, dispatch, tracking, and reporting across your supply chain —
              up and running in weeks, not months.
            </p>
          </div>
          <div className="flex items-stretch gap-6 sm:gap-12 lg:gap-16">
            <div ref={stat1.ref}>
              <p
                className="uppercase tracking-[0.12em] text-[11px] mb-3"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em" }}
              >
                Logistics Systems Built
              </p>
              <p
                className="text-4xl sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#FFFFFF", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}
              >
                {stat1.display}
              </p>
            </div>
            <div className="w-px self-stretch" style={{ backgroundColor: "#333" }} />
            <div ref={stat2.ref}>
              <p
                className="uppercase tracking-[0.12em] text-[11px] mb-3"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em" }}
              >
                Supply Chain Clients
              </p>
              <p
                className="text-4xl sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#FFFFFF", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}
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

/* ═══════════════════════════════════════════════════════════
   PRODUCT SHOWCASE (How We Work)
   ═══════════════════════════════════════════════════════════ */

const TOTAL_DURATION = 6000;
const FAST_PHASE_END = 0.4;
const FAST_PHASE_TIME = 1500;
const SLOW_PHASE_TIME = 4500;

function getProgress(elapsed: number): number {
  if (elapsed <= FAST_PHASE_TIME) return (elapsed / FAST_PHASE_TIME) * FAST_PHASE_END;
  const slowElapsed = elapsed - FAST_PHASE_TIME;
  return FAST_PHASE_END + (slowElapsed / SLOW_PHASE_TIME) * (1 - FAST_PHASE_END);
}

const showcaseSteps = [
  {
    title: "Diagnose",
    description:
      "We audit your logistics operations end-to-end. Every handoff, carrier interaction, and decision point. We find exactly where time and margin are being lost.",
    badge: "Discovery",
  },
  {
    title: "Design",
    description:
      "We architect a custom system around your actual freight flows. Every routing rule, rate logic, and exception your team handles gets encoded into automation.",
    badge: "Architecture",
  },
  {
    title: "Build",
    description:
      "Our team engineers and tests the full system. No off-the-shelf TMS modules. Custom infrastructure built for your specific lanes, carriers, and workflows.",
    badge: "Development",
  },
  {
    title: "Deploy",
    description:
      "We launch the system into your operations with staged rollouts. Everything is monitored from day one. Zero disruption to your shipments or your team.",
    badge: "Launch",
  },
  {
    title: "Own",
    description:
      "After launch, we maintain, monitor, and improve the system. Your freight keeps moving. We handle everything behind the scenes.",
    badge: "Ongoing",
  },
];

function SCLProductShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(Date.now());
  const pauseStartRef = useRef(0);

  const advanceStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % showcaseSteps.length);
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
        if (elapsed >= TOTAL_DURATION) { advanceStep(); return; }
        setProgress(getProgress(elapsed));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, activeStep, advanceStep]);

  const handleMouseEnter = useCallback(() => { setIsPaused(true); pauseStartRef.current = Date.now(); }, []);
  const handleMouseLeave = useCallback(() => {
    const pauseDuration = Date.now() - pauseStartRef.current;
    startTimeRef.current += pauseDuration;
    setIsPaused(false);
  }, []);

  return (
    <section id="how-we-work" className="relative bg-[#0a0a0a] py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden" style={{ backgroundColor: "#111", border: "1px solid #1a1a1a", borderRadius: 18 }}>
          <div className="grid lg:grid-cols-[40%_60%]">
            {/* Left Column */}
            <div className="flex flex-col p-5 sm:p-8 lg:p-10 xl:p-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="mb-3">
                <h2 className="text-white text-[22px] lg:text-[26px]" style={{ fontFamily: "var(--font-inter)", fontWeight: 600 }}>
                  How we work
                </h2>
              </div>
              <p className="text-[15px] lg:text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                A consulting-led process designed for logistics operations. We diagnose, design, build, deploy, then stay to run it.
              </p>
              <div className="mb-10 lg:mb-14">
                <a
                  href="mailto:sejer@trymurph.com"
                  className="inline-flex items-center px-5 py-2.5 text-sm text-white rounded-full transition-colors duration-150"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                >
                  Book a discovery call
                </a>
              </div>
              <div className="flex flex-col">
                {showcaseSteps.map((step, i) => {
                  const isActive = i === activeStep;
                  return (
                    <div key={i}>
                      {i > 0 && i !== activeStep && i - 1 !== activeStep && (
                        <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
                      )}
                      {isActive ? (
                        <div
                          className="relative my-1 p-4 rounded-[10px] cursor-pointer"
                          style={{ border: "1px dashed rgba(74,222,128,0.6)" }}
                          onClick={() => selectStep(i)}
                        >
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[10px] overflow-hidden">
                            <div className="h-full" style={{ width: `${progress * 100}%`, background: "#4ade80" }} />
                          </div>
                          <h3 className="text-white text-[15px] lg:text-base mb-2" style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                            {step.title}
                          </h3>
                          <p className="text-[13px] lg:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        <button className="w-full text-left py-4 px-1 cursor-pointer" onClick={() => selectStep(i)}>
                          <h3
                            className="text-[15px] lg:text-base transition-colors duration-200"
                            style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
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

            {/* Right Column */}
            <div className="relative hidden lg:block min-h-[560px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Image src={showcaseImage} alt="" fill className="object-cover" style={{ borderTopRightRadius: 17, borderBottomRightRadius: 17 }} />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)", borderTopRightRadius: 17, borderBottomRightRadius: 17 }}
              />
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
                      style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80" }}
                    >
                      {showcaseSteps[activeStep].badge}
                    </div>
                  </div>
                  <div className="relative min-h-[380px]">
                    {showcaseSteps.map((step, i) => (
                      <div
                        key={step.title}
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          opacity: i === activeStep ? 1 : 0,
                          transform: i === activeStep ? "translateY(0)" : i < activeStep ? "translateY(-8px)" : "translateY(8px)",
                          pointerEvents: i === activeStep ? "auto" : "none",
                        }}
                      >
                        {i === 0 && <DemoAudit />}
                        {i === 1 && <DemoDesign />}
                        {i === 2 && <DemoOutput />}
                        {i === 3 && <DemoBuild />}
                        {i === 4 && <DemoOwnership />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:hidden h-48 sm:h-64 overflow-hidden">
              <Image src={showcaseImage} alt="" fill className="object-cover" style={{ borderBottomLeftRadius: 17, borderBottomRightRadius: 17 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Demo panels — logistics-specific */

function DemoAudit() {
  const triggers = [
    { source: "Quote request via email", type: "Inbox", active: true },
    { source: "Shipment status check", type: "Webhook", active: true },
    { source: "Carrier rate update", type: "API", active: false },
    { source: "BOL generation needed", type: "Event", active: false },
    { source: "Dispatch assignment pending", type: "Queue", active: true },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Workflow Audit</span>
        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>5 workflows identified</span>
      </div>
      {triggers.map((t) => (
        <div key={t.source} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.active ? "rgba(74,222,128,0.7)" : "rgba(255,255,255,0.15)" }} />
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-medium truncate block" style={{ color: "rgba(255,255,255,0.7)" }}>{t.source}</span>
          </div>
          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full shrink-0" style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}>{t.type}</span>
        </div>
      ))}
    </div>
  );
}

function DemoDesign() {
  const nodes = [
    { label: "Inbound", sub: "Quote request" },
    { label: "Route & Match", sub: "Carrier selection" },
    { label: "Dispatch", sub: "Booking confirmed" },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Freight Flow</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}>Live</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-6">
        <div className="flex items-center gap-0 w-full max-w-[320px]">
          {nodes.map((node, i) => (
            <div key={node.label} className="contents">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center design-flow-dot"
                  style={{ background: "rgba(74,222,128,0.12)", border: "1.5px solid rgba(74,222,128,0.4)", animationDelay: `${i * 0.6}s` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ade80" }} />
                </div>
                <span className="text-[11px] font-medium" style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>{node.label}</span>
                <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>{node.sub}</span>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex-1 mx-2 relative h-[2px]">
                  <div className="absolute inset-0 rounded-full" style={{ background: "rgba(74,222,128,0.12)" }} />
                  <div className="absolute inset-y-0 left-0 rounded-full design-flow-line" style={{ background: "#4ade80", animationDelay: `${i * 0.6 + 0.3}s` }} />
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
    { action: "Rate quote sent to shipper", time: "0.3s" },
    { action: "Carrier matched by lane & capacity", time: "0.1s" },
    { action: "BOL generated and filed", time: "0.8s" },
    { action: "Tracking link sent to customer", time: "0.2s" },
    { action: "Invoice created from POD", time: "0.5s" },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Output Specification</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(74,222,128,0.1)", color: "rgba(74,222,128,0.7)" }}>All delivered</span>
      </div>
      {outputs.map((o) => (
        <div key={o.action} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
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

function DemoBuild() {
  const phases = [
    { label: "Operations audit", status: "complete", progress: 100 },
    { label: "System architecture", status: "complete", progress: 100 },
    { label: "Carrier API integration", status: "active", progress: 72 },
    { label: "Testing & QA", status: "pending", progress: 0 },
    { label: "Staged deployment", status: "pending", progress: 0 },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Build Progress</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80" }}>In progress</span>
      </div>
      {phases.map((p) => (
        <div key={p.label} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: p.status === "complete" ? "rgba(74,222,128,0.1)" : p.status === "active" ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.04)" }}
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
            <span className="text-[11px] font-medium block mb-1" style={{ color: p.status === "pending" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.7)" }}>
              {p.label}
            </span>
            <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="h-full rounded-full" style={{ width: `${p.progress}%`, background: p.status === "complete" ? "rgba(74,222,128,0.5)" : "#4ade80" }} />
            </div>
          </div>
          <span className="text-[10px] font-mono shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>{p.progress}%</span>
        </div>
      ))}
    </div>
  );
}

function DemoOwnership() {
  const items = [
    { label: "Operations consulting", us: true, them: true },
    { label: "System design", us: true, them: true },
    { label: "Carrier API integration", us: true, them: false },
    { label: "Deployment & rollout", us: true, them: false },
    { label: "24/7 monitoring", us: true, them: false },
    { label: "Continuous optimization", us: true, them: false },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Murph vs. Traditional Consultants</span>
      </div>
      <div className="rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="grid grid-cols-[1fr_72px_72px] gap-0 px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-[9px] uppercase tracking-wider font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Phase</span>
          <span className="text-[9px] uppercase tracking-wider font-medium text-center" style={{ color: "#4ade80" }}>Murph</span>
          <span className="text-[9px] uppercase tracking-wider font-medium text-center" style={{ color: "rgba(255,255,255,0.3)" }}>Others</span>
        </div>
        {items.map((item) => (
          <div key={item.label} className="grid grid-cols-[1fr_72px_72px] gap-0 px-3 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
            <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
            <div className="flex justify-center">
              <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(74,222,128,0.15)" }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 4L3.5 5.5L6 2.5" stroke="#4ade80" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <div className="flex justify-center">
              {item.them ? (
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 4L3.5 5.5L6 2.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(249,115,22,0.08)" }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2.5 2.5L5.5 5.5M5.5 2.5L2.5 5.5" stroke="rgba(249,115,22,0.5)" strokeWidth="1.25" strokeLinecap="round" /></svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg p-3 mt-auto" style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.1)" }}>
        <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          We don&apos;t hand off projects. We build the system, deploy it, and take full ownership of your logistics automation.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHO WE HELP
   ═══════════════════════════════════════════════════════════ */

const departments = [
  {
    title: "Freight forwarders & brokers",
    description:
      "You manage hundreds of shipments across carriers, modes, and time zones. We automate quoting, matching, and booking so your team stops drowning in emails and spreadsheets.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="22" height="12" rx="2"/><path d="M1 10h22"/></svg>`,
  },
  {
    title: "3PLs & warehouse operators",
    description:
      "Inventory tracking, order routing, and carrier coordination eat your margins. We build systems that keep goods moving and data flowing without manual intervention.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  },
  {
    title: "Carriers & fleet operators",
    description:
      "Dispatch, load optimization, and driver coordination should run on systems, not phone calls. We build the infrastructure that lets your fleet scale without adding overhead.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  },
];

function SCLWhoWeHelp() {
  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-20">
          <div className="lg:w-[38%] shrink-0">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
              <span
                className="uppercase text-[11px] tracking-[0.1em]"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}
              >
                Who We Help
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}
            >
              Built for
              <br />
              logistics operators
            </h2>
          </div>
          <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-0">
            {departments.map((dept, i) => (
              <div
                key={dept.title}
                className={`${i > 0 ? "border-t border-[#222] lg:border-t-0 lg:border-l lg:border-[#333] pt-8 lg:pt-0 lg:pl-8" : ""} ${i < departments.length - 1 ? "pb-8 lg:pb-0 lg:pr-8" : ""}`}
              >
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: dept.icon }} />
                <h3 className="text-base mb-2" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#FFFFFF" }}>
                  {dept.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
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

/* ═══════════════════════════════════════════════════════════
   CASE STUDY CARD
   ═══════════════════════════════════════════════════════════ */

const caseStudySteps = [
  {
    title: "Dispatch time cut by 80%",
    description:
      "Hours previously spent matching loads to carriers now happen in seconds. Your team focuses on exceptions, not routine bookings.",
  },
  {
    title: "Quote accuracy at 98%",
    description:
      "AI-generated quotes match historical rates and carrier pricing within 2%. No more manual rate lookups or margin guesswork.",
  },
  {
    title: "Scaled without hiring",
    description:
      "Shipment volume doubled while headcount stayed flat. The system handles the growth, your team handles the relationships.",
  },
];

function SCLCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-[#0a0a0a] py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden" style={{ backgroundColor: "#111", border: "1px solid #1a1a1a", borderRadius: 18 }}>
          <div className="grid lg:grid-cols-[60%_40%]">
            {/* Left Column Image + floating case study card */}
            <div className="relative hidden lg:block min-h-[540px]">
              <Image src={heroImage} alt="" fill className="object-cover" style={{ borderTopLeftRadius: 17, borderBottomLeftRadius: 17 }} />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)", borderTopLeftRadius: 17, borderBottomLeftRadius: 17 }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-10">
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
                  <div
                    className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider mb-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
                  >
                    Case study
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]" style={{ backgroundColor: "rgba(74,222,128,0.08)", color: "rgba(74,222,128,0.8)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 8V2M3 4l2-2 2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      5 hrs/day saved
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]" style={{ backgroundColor: "rgba(74,222,128,0.08)", color: "rgba(74,222,128,0.8)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5L4.5 7L7.5 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      98% accuracy
                    </span>
                  </div>
                  <h4 className="text-base mb-2" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#FFFFFF" }}>
                    Automated dispatch & quoting for air cargo
                  </h4>
                  <p className="text-[13px] mb-4" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                    AI system that quotes, routes, and books shipments for an air cargo company, replacing hours of manual coordination across carriers and lanes.
                  </p>
                  <div className="h-px mb-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
                  <p className="text-sm font-medium mb-3" style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>What changed</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      "Quote generation reduced from 45 min to instant",
                      "Carrier matching automated based on lane and capacity",
                      "BOL and booking confirmations sent without human input",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(74,222,128,0.1)" }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2.5 5L4.5 7L7.5 3" stroke="rgba(74,222,128,0.8)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:hidden h-48 sm:h-64 overflow-hidden">
              <Image src={heroImage} alt="" fill className="object-cover" style={{ borderTopLeftRadius: 17, borderTopRightRadius: 17 }} />
            </div>

            {/* Right Column */}
            <div className="flex flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-3">
                <h2 className="text-[22px] lg:text-[26px]" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#FFFFFF" }}>
                  What changes
                </h2>
              </div>
              <p className="text-[15px] lg:text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-lato)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                After deployment, your logistics operations run faster, more accurately, and with far less manual overhead. Every system we build keeps improving as your freight volumes grow.
              </p>
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
              <div className="flex flex-col">
                {caseStudySteps.map((step, i) => {
                  const isActive = i === activeStep;
                  return (
                    <div key={i}>
                      {i > 0 && !isActive && i !== activeStep + 1 && (
                        <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
                      )}
                      {isActive ? (
                        <div className="my-1 p-4 rounded-[10px] cursor-pointer" style={{ border: "1px dashed rgba(74,222,128,0.6)" }} onClick={() => setActiveStep(i)}>
                          <h3 className="text-[15px] lg:text-base mb-2" style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#FFFFFF" }}>{step.title}</h3>
                          <p className="text-[13px] lg:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{step.description}</p>
                        </div>
                      ) : (
                        <button className="w-full text-left py-4 px-1 cursor-pointer" onClick={() => setActiveStep(i)}>
                          <h3 className="text-[15px] lg:text-base" style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>{step.title}</h3>
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

/* ═══════════════════════════════════════════════════════════
   THE DIFFERENCE
   ═══════════════════════════════════════════════════════════ */

const differentiators = [
  {
    title: "We don't hand off",
    description:
      "Most logistics consultants scope a project, present a deck, and leave. We design, build, deploy, and take full ownership of the result — from first mile to last.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    title: "Custom, not off-the-shelf",
    description:
      "No generic TMS repackaged with your logo. Every system is designed around your specific lanes, carriers, rates, and operational workflows.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  },
  {
    title: "Systems that compound",
    description:
      "Every system we deploy keeps running and improving. The more shipments it processes, the smarter it gets. Compounding efficiency, by design.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
];

function SCLDifference() {
  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-20">
          <div className="lg:w-[38%] shrink-0">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
              <span className="uppercase text-[11px] tracking-[0.1em]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}>
                The Difference
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}
            >
              Not another
              <br />
              TMS vendor
            </h2>
          </div>
          <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-0">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className={`${i > 0 ? "border-t border-[#222] lg:border-t-0 lg:border-l lg:border-[#333] pt-8 lg:pt-0 lg:pl-8" : ""} ${i < differentiators.length - 1 ? "pb-8 lg:pb-0 lg:pr-8" : ""}`}
              >
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="text-base mb-2" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#FFFFFF" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato)", fontWeight: 400, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   AFTER WE SHIP (Monitoring)
   ═══════════════════════════════════════════════════════════ */

function SCLAfterWeShip() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden" style={{ backgroundColor: "#111", border: "1px solid #1a1a1a", borderRadius: 18 }}>
          <div className="grid lg:grid-cols-[40%_60%]">
            <div className="flex flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-3">
                <h2 className="text-[22px] lg:text-[26px]" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#FFFFFF" }}>
                  After we ship
                </h2>
              </div>
              <p className="text-[15px] lg:text-base leading-relaxed mb-8" style={{ fontFamily: "var(--font-lato)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                Deployment isn&apos;t the finish line — it&apos;s where the value starts. We monitor system performance, flag issues before they become delays, and continuously optimize as your freight volumes and carrier network evolve.
              </p>
              <div>
                <a
                  href="mailto:sejer@trymurph.com"
                  className="inline-flex items-center px-5 py-2.5 text-sm text-white rounded-full transition-colors duration-150"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                >
                  Learn about our process
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block min-h-[480px]">
              <Image src={monitorImage} alt="" fill className="object-cover" style={{ borderTopRightRadius: 17, borderBottomRightRadius: 17 }} />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 100%)", borderTopRightRadius: 17, borderBottomRightRadius: 17 }}
              />
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
                    <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Dispatch System Health</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80" }}>All systems live</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Uptime", value: "99.98%" },
                      { label: "Avg quote time", value: "1.2s" },
                      { label: "Shipments / day", value: "847" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <span className="block text-[17px] font-medium mb-0.5" style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>{m.value}</span>
                        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { action: "Rate table auto-updated from carriers", time: "2m ago", status: "resolved" },
                      { action: "Weekly lane performance report sent", time: "4h ago", status: "complete" },
                      { action: "New carrier onboarded to routing", time: "1d ago", status: "complete" },
                      { action: "Exception flagged: delayed pickup", time: "2d ago", status: "reviewed" },
                    ].map((item) => (
                      <div key={item.action} className="flex items-center gap-3 rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.status === "resolved" ? "#4ade80" : "rgba(74,222,128,0.4)" }} />
                        <span className="flex-1 text-[11px] font-medium truncate" style={{ color: "rgba(255,255,255,0.6)" }}>{item.action}</span>
                        <span className="text-[10px] font-mono shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:hidden h-48 sm:h-64 overflow-hidden">
              <Image src={monitorImage} alt="" fill className="object-cover" style={{ borderBottomLeftRadius: 17, borderBottomRightRadius: 17 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   REVIEWS (reusing original data — logistics-relevant intro)
   ═══════════════════════════════════════════════════════════ */

type Review = { text: string; name: string; role: string; img: typeof stevenImg | null; url?: string };

const reviews: Review[] = [
  {
    text: "Murph is a WILDLY powerful partner for myself and DLVR Logistics. They built an AI system that automated our dispatch routing and quote generation, saving us hours every single day. An incredibly smart team with a meticulous process. They provide consistent updates and analytics, and will adjust on the fly if something isn't working. HIGHLY recommend!!!",
    name: "Robert Herr",
    role: "Owner, DLVR Logistics",
    img: robertImg,
    url: "https://www.linkedin.com/in/yoursimplyfreight/",
  },
  {
    text: "I have partnered with Murph on multiple projects. Recently we built an AI that gives quotes and books shipments for an air cargo company, saving hours of manual work. What sets Murph apart is their indefatigable drive. They treat your business like their own, go above and beyond, and live by 'do what is required, not what is expected.'",
    name: "Noah Blanchard",
    role: "Founder & CEO, AI Phone Agents",
    img: noahImg,
    url: "https://www.linkedin.com/in/foundernoahblanchard/",
  },
  {
    text: "I've been in software engineering for over 20 years, so I've seen my fair share of projects, pitches, and promises. Most don't live up to the hype. What Murph built for my agency absolutely did. The quality, precision, and creativity stood out immediately. You don't need to be an engineer to feel when something is world-class, but with my background, I can say with confidence it's the kind of work that drives real ROI.",
    name: "Steven Bennett",
    role: "Staff Engineer, 20+ years",
    img: stevenImg,
    url: "https://www.linkedin.com/in/stevenjbennett/",
  },
  {
    text: "Murph is THE authority when it comes to AI automation. They've gained a hard-won reputation for making their clients' lives easier by building intelligent systems that handle repetitive work, making and saving them money as a result. They forensically get to the actual business problem, distinguishing symptoms from the problem. They also mentor business owners on leveraging AI effectively.",
    name: "Hasan Veletanlic",
    role: "Investment Operations & Compliance",
    img: hasanImg,
    url: "https://www.linkedin.com/in/hasan-veletanlic/",
  },
  {
    text: "Murph is in a class of their own. They built an AI-powered candidate matching system for our recruiting firm that cut our screening time in half. Curiosity, intelligence, and drive. They have all the qualities I look for in top partners. Knowledgeable, professional, and truly the best to work with.",
    name: "Domenic Maiani",
    role: "Founder, Lazio Search Group",
    img: domenicImg,
    url: "https://www.linkedin.com/in/domenic-maiani-lazio/",
  },
  {
    text: "The Murph team is one of the most productive I've ever worked with. The focus on the task and the ability to deliver results quickly is their key feature. They built LinkedIn lead generation for our group, implementing new automation tools and creating an AI system through multiple instruments.",
    name: "Elena Baranova",
    role: "Marketing Manager, ACN Group",
    img: elenaImg,
    url: "https://www.linkedin.com/in/elena-baranova-9750771b/",
  },
  {
    text: "I have had the pleasure of witnessing Murph grow as a driven company. Their AI expertise, creativity, and ability to deliver tailored automation solutions have impressed me greatly. They possess a rare combination of strategic thinking and hands-on execution that enables them to build AI systems that genuinely enhance productivity. It was a great pleasure working with them.",
    name: "Dan Rozga",
    role: "Client",
    img: danImg,
    url: "https://www.linkedin.com/in/daniel-rozga/",
  },
  {
    text: "I had the opportunity to review Murph's work in AI, automation, and intelligent workflow design. Their innovative approach and expertise in leveraging AI to drive measurable results stood out to me. Murph's skills make them a valuable asset to any organization focused on efficiency and growth.",
    name: "Ahmed Bilal Afzal",
    role: "Founder",
    img: ahmedImg,
    url: "https://www.linkedin.com/in/ahmed-bilal-afzal/",
  },
  {
    text: "Murph was such a pleasure to work with. They built an AI-powered lead qualification system that automatically identifies and scores prospects for our staffing business. Super flexible, quick to reply, very strong work ethic, and truly a pleasure to work with. I would highly recommend Murph!",
    name: "Barry Case",
    role: "Co-Founder, StaffEdge Group",
    img: barryImg,
    url: "https://www.linkedin.com/in/barry-case/",
  },
  {
    text: "Murph built a great AI content automation system for some of our client's businesses. They are able to communicate and deliver on time. They're great at what they do and I vouch for their skills and talent.",
    name: "Dennis Dabalos",
    role: "Business Development",
    img: dennisImg,
  },
  {
    text: "Great team! They are passionate about their work and will do their best to deliver fantastic results. I would personally recommend them to anyone seeking help with AI automation. They're the go-to team!",
    name: "Andreas Ommedal Aa",
    role: "Entrepreneur",
    img: andreasImg,
    url: "https://www.linkedin.com/in/andreas-ommedal-aa-b517442b2/",
  },
  {
    text: "Murph is brilliant at designing AI systems and will obsess over a problem until it's solved. Their ability to turn complex workflows into intelligent automation is impressive. Besides that they have a noble work ethic, which makes them a great partner to work with.",
    name: "Ida Lodal",
    role: "Collaborator",
    img: idaImg,
    url: "https://www.linkedin.com/in/ida-lodal-b6450430a/",
  },
];

function ReviewCard({ review }: { review: Review }) {
  const card = (
    <div
      className="flex flex-col gap-4 sm:gap-6 rounded-xl p-3 sm:p-4"
      style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-4">
        {review.img ? (
          <Image src={review.img} alt={review.name} width={40} height={40} className="size-10 rounded-full object-cover" />
        ) : (
          <div className="size-10 rounded-full flex items-center justify-center text-sm font-medium" style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80" }}>
            {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>{review.name}</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{review.role}</p>
        </div>
      </div>
    </div>
  );

  if (review.url) {
    return (
      <a href={review.url} target="_blank" rel="noopener noreferrer" className="block hover:brightness-110 transition-all duration-150">
        {card}
      </a>
    );
  }
  return card;
}

function SCLReviews() {
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative pt-10 sm:pt-12 lg:pt-18 bg-[#0a0a0a]">
      <div className="relative">
        <div className="container pt-10 md:pt-16 pb-0 md:pb-0">
          <div className="flex max-w-[37rem] flex-col sm:mx-auto sm:items-center items-center">
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl text-center"
              style={{ wordSpacing: "0.02em", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}
            >
              Trusted by <span style={{ fontStyle: "italic" }}>logistics leaders</span>
            </h2>
            <p className="lg:mt-3 sm:text-center mt-3 text-center" style={{ wordSpacing: "0.02em", color: "rgba(255,255,255,0.5)" }}>
              From freight forwarders to 3PLs, supply chain companies trust Murph to build the systems that let them scale.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 pt-6">
          <div className="container flex justify-center">
            <div
              className="flex items-center gap-x-1.5 py-[3px] pr-[11px] pl-[7px] rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <svg width="20" height="20" fill="none">
                <path fill="#4ade80" d="M9.287 4.195c.224-.69 1.202-.69 1.426 0l.915 2.815a.75.75 0 0 0 .713.518h2.96c.726 0 1.028.93.44 1.357l-2.394 1.739a.75.75 0 0 0-.272.838l.914 2.815c.224.69-.566 1.265-1.154.838l-2.394-1.739a.75.75 0 0 0-.882 0l-2.394 1.74c-.588.426-1.378-.148-1.154-.84l.914-2.813a.75.75 0 0 0-.272-.839l-2.394-1.74c-.588-.426-.286-1.356.44-1.356h2.96a.75.75 0 0 0 .713-.518l.915-2.815Z" />
              </svg>
              <span className="text-xs font-medium" style={{ color: "#FFFFFF" }}>4.95</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>from 60+ companies</span>
            </div>
          </div>

          <div className="relative">
            <div className="reviews-mask relative h-[500px] sm:h-[632px] md:h-[754px] overflow-hidden">
              <div className="h-full overflow-hidden">
                <div className="container">
                  <div className="md:px-2">
                    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="flex flex-col gap-4 reviews-column-up" style={{ "--duration": "120s" } as React.CSSProperties}>
                        {[...col1, ...col1].map((review, i) => <ReviewCard key={`col1-${i}`} review={review} />)}
                      </div>
                      <div className="hidden sm:flex flex-col gap-4 reviews-column-down" style={{ "--duration": "140s" } as React.CSSProperties}>
                        {[...col2, ...col2].map((review, i) => <ReviewCard key={`col2-${i}`} review={review} />)}
                      </div>
                      <div className="hidden lg:flex flex-col gap-4 reviews-column-up" style={{ "--duration": "130s" } as React.CSSProperties}>
                        {[...col3, ...col3].map((review, i) => <ReviewCard key={`col3-${i}`} review={review} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTEGRATIONS
   ═══════════════════════════════════════════════════════════ */

function SCLIntegrations() {
  return (
    <section className="bg-[#0a0a0a] py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
              <span className="uppercase text-[11px] tracking-[0.1em]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}>
                Your tools, connected
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}
            >
              We build around
              <br />
              your existing stack
            </h2>
            <p
              className="text-[15px] lg:text-base leading-relaxed mb-8 sm:mb-10"
              style={{ fontFamily: "var(--font-lato)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}
            >
              Your TMS, your ERP, your carrier portals — they stay. We don&apos;t replace
              your systems or ask your team to learn something new. We build the
              connecting layer that makes your existing tools work together, so rates
              flow automatically, shipments get booked in real-time, and your
              operations run on the infrastructure you&apos;ve already invested in.
            </p>
            <a
              href="mailto:sejer@trymurph.com"
              className="inline-flex items-center px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#0a0a0a] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
            >
              Book a discovery call
            </a>
          </div>
          <div className="hidden lg:block">
            <IntegrationsDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MENTIONED IN
   ═══════════════════════════════════════════════════════════ */

const article = {
  publication: "Journal of Commerce",
  title: "Code generation tools altering efficiency, capacity for logistics technology providers",
  excerpt:
    "A wave of AI-based tools for software developers is likely to raise shipper expectations around the effectiveness and cost of logistics software applications.",
  url: "https://www.joc.com/article/code-generation-tools-altering-efficiency-capacity-for-logistics-technology-providers-6052945",
};

function SCLMentionedIn() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex max-w-[37rem] flex-col sm:mx-auto sm:items-center items-center mb-12 lg:mb-16">
          <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-center" style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
            Featured in <span style={{ fontStyle: "italic" }}>industry press</span>
          </h2>
          <p className="lg:mt-3 sm:text-center mt-3 text-center text-base" style={{ wordSpacing: "0.02em", color: "rgba(255,255,255,0.5)" }}>
            Recognised by the leading publication in supply chain and logistics
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl" style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}>
            <div className="grid md:grid-cols-[1fr_280px] items-stretch">
              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                <div className="mb-4">
                  <Image src={jocLogo} alt="Journal of Commerce" height={24} style={{ width: "auto", filter: "brightness(0) invert(1)", opacity: 0.7 }} />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium leading-snug mb-3" style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{article.excerpt}</p>
                <div className="mt-6">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    style={{ color: "#4ade80" }}
                  >
                    Read article
                    <svg width="16" height="16" fill="none">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative hidden md:block">
                <Image alt={article.publication} src={jocImage} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "How does the engagement start?",
    answer:
      "We begin with a discovery call to understand your logistics operations — your lanes, carriers, systems, and pain points. From there, we run a diagnosis phase, mapping your workflows and identifying the bottlenecks that cost the most time and margin. No code is written until we have a clear plan.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Most logistics companies see their first system live within 4-6 weeks. The diagnosis and scoping phase typically takes 1-2 weeks, followed by build and deployment. Ongoing optimization continues after launch as your freight volumes grow.",
  },
  {
    question: "Do you replace our TMS or ERP?",
    answer:
      "No. We build around your existing tools. Your TMS, ERP, carrier portals, and spreadsheets stay in place. We create the automation layer that connects them and eliminates the manual work in between.",
  },
  {
    question: "What kind of logistics companies do you work with?",
    answer:
      "We work with freight forwarders, 3PLs, carriers, and supply chain operators who are losing significant time to manual quoting, dispatch, tracking, and reporting. Our clients typically handle hundreds to thousands of shipments per month and are ready to scale without proportionally scaling headcount.",
  },
  {
    question: "Is this just another automation tool?",
    answer:
      "No. We don't sell software off the shelf. Murph takes a consulting-led approach: we diagnose, design, build, and deploy custom systems tailored to your specific lanes, carriers, and operational workflows. The result is infrastructure that feels like it was always part of your company.",
  },
  {
    question: "How is our data handled?",
    answer:
      "All data is encrypted in transit and at rest. We are SOC 2 Type I certified, and your shipment data is never used to train AI models. Our providers guarantee zero data retention. We understand the sensitivity of rate data, carrier agreements, and customer information.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button onClick={onToggle} className="flex w-full items-center justify-between py-4 sm:py-5 text-left">
        <span className="text-sm font-medium pr-4" style={{ color: "#FFFFFF" }}>{question}</span>
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          className="shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <path d="M10 4.167v11.666M4.167 10h11.666" stroke="rgba(255,255,255,0.4)" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </button>
      <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}>
        <div className="overflow-hidden">
          <p className="pb-4 sm:pb-5 text-sm leading-relaxed pr-2 sm:pr-8" style={{ color: "rgba(255,255,255,0.5)" }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

function SCLFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
          <div>
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl" style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
              Frequently asked <span style={{ fontStyle: "italic" }}>questions</span>
            </h2>
            <p className="mt-3" style={{ wordSpacing: "0.02em", color: "rgba(255,255,255,0.5)" }}>
              Can&apos;t find what you&apos;re looking for? Reach out to our team and we&apos;ll get back to you.
            </p>
            <a href="mailto:sejer@trymurph.com" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:underline" style={{ color: "#f97316" }}>
              Contact us
              <svg width="16" height="16" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5" />
              </svg>
            </a>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════════ */

function SCLCTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-2xl px-4 py-12 sm:px-12 sm:py-20 text-center"
          style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
        >
          <div className="relative flex flex-col items-center">
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl max-w-[30rem]"
              style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
            >
              Your freight operations should run themselves. We build the systems that make it happen.
            </h2>
            <p className="mt-4 max-w-[26rem] text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              Tell us where the bottleneck is. We&apos;ll scope it, build it, and deploy it — end to end.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4">
              <a
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
                href="https://calendly.com/sejer-anthemagency/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a discovery call
              </a>
              <a
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors duration-150"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                href="#how-we-work"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
