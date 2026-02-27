"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { heroImage, LogoCarousel } from "../components/Hero";

const REFERENCE_DATE = new Date("2026-02-01T00:00:00").getTime();
const BASE_MINUTES = 921_600;
const MINUTES_PER_MS = 234_000 / (30 * 24 * 60 * 60 * 1000);

function getMinutesSaved() {
  const elapsed = Date.now() - REFERENCE_DATE;
  return Math.floor(BASE_MINUTES + elapsed * MINUTES_PER_MS);
}

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

export default function TimeSavedPage() {
  const [minutes, setMinutes] = useState(0);
  const liveRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const target = getMinutesSaved();
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const countUp = setInterval(() => {
      current++;
      const progress = 1 - Math.pow(1 - current / steps, 5);
      setMinutes(Math.floor(target * progress));

      if (current >= steps) {
        clearInterval(countUp);
        setMinutes(getMinutesSaved());
        liveRef.current = setInterval(() => setMinutes(getMinutesSaved()), 1000);
      }
    }, stepTime);

    return () => {
      clearInterval(countUp);
      if (liveRef.current) clearInterval(liveRef.current);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero counter as the centrepiece */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.48) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.58) 100%)",
            }}
          />

          {/* Counter content */}
          <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-32">
            {/* Label */}
            <div
              className="flex items-center gap-2 mb-8 animate-fade-in-up delay-100"
              style={{ opacity: 0 }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}
              >
                Live. Connected to our CRM
              </span>
            </div>

            {/* The number */}
            <p
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl animate-fade-in-up delay-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontVariantNumeric: "tabular-nums",
                color: "#FFFFFF",
                lineHeight: 1,
                opacity: 0,
              }}
            >
              {formatNumber(minutes)}
            </p>

            <p
              className="mt-4 text-lg lg:text-xl animate-fade-in-up delay-300"
              style={{
                fontFamily: "var(--font-lato)",
                color: "rgba(255,255,255,0.85)",
                opacity: 0,
              }}
            >
              minutes saved across our clients
            </p>

            <p
              className="mt-6 max-w-[28rem] text-center text-sm lg:text-base animate-fade-in-up delay-400"
              style={{
                fontFamily: "var(--font-lato)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                opacity: 0,
              }}
            >
              This number is real. Every time a new client goes live, our CRM
              updates the counter automatically. No manual input, no guesswork.
            </p>

            {/* CTA */}
            <div
              className="mt-8 flex items-center gap-x-4 animate-fade-in-up delay-500"
              style={{ opacity: 0 }}
            >
              <a
                href="https://calendly.com/sejer-anthemagency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
              >
                Get in touch
              </a>
              <a
                href="/#how-we-work"
                className="px-7 py-3 rounded-full border border-white/30 bg-white/15 text-white text-sm font-medium hover:bg-white/25 transition-colors duration-150 backdrop-blur-sm"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Stats strip pinned to bottom */}
          <div className="relative z-[2] pb-10 lg:pb-12">
            <div className="container">
              <div
                className="max-w-[48rem] mx-auto grid grid-cols-3 gap-4 animate-fade-in-up delay-600"
                style={{ opacity: 0 }}
              >
                {[
                  { value: "5 hrs", label: "saved per employee, per week" },
                  { value: "~3", label: "employees impacted per company" },
                  { value: "60+", label: "active companies since Jan 2025" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-xl lg:text-2xl mb-1"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 500,
                        color: "#FFFFFF",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[11px] lg:text-xs"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works one clean section */}
        <section className="bg-[#0a0a0a] py-16 lg:py-24">
          <div className="container">
            <div className="max-w-[48rem] mx-auto">
              <h2
                className="text-2xl lg:text-3xl mb-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                How the counter works
              </h2>
              <p
                className="text-base mb-10"
                style={{
                  fontFamily: "var(--font-lato)",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                }}
              >
                The same kind of infrastructure we build for clients. A quiet
                system that runs in the background without anyone touching it.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    step: "1",
                    title: "Client goes live",
                    desc: "When a new company signs and their systems are deployed, our team marks them active in the CRM.",
                  },
                  {
                    step: "2",
                    title: "Webhook fires automatically",
                    desc: "The CRM sends updated client count and activation data to our calculation service. No human involved.",
                  },
                  {
                    step: "3",
                    title: "Counter recalibrates",
                    desc: "The growth rate adjusts to reflect the new, higher baseline. The homepage counter updates itself. No deploy needed.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 rounded-xl p-5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="shrink-0 text-sm font-medium"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "var(--font-inter)",
                        marginTop: "2px",
                      }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <p
                        className="text-sm font-medium mb-1"
                        style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Logo carousel */}
        <section
          className="bg-[#0a0a0a] pb-16 lg:pb-24"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="pt-12 lg:pt-16">
            <div className="flex flex-col items-center gap-5">
              <p
                className="text-center text-xs lg:text-sm tracking-wide uppercase"
                style={{
                  fontFamily: "var(--font-lato)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.08em",
                }}
              >
                Trusted by forward-thinking companies
              </p>
              <LogoCarousel />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
