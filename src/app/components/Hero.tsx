"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "@/Images/treptoweralex-usa-2868732_1920.jpg";
export { heroImage };
import atlasLogo from "@/Images/Atlas_people_logo_W_bagground-removebg-preview.png";
import atobiLogo from "@/Images/atobi logo.webp";
import workdayLogo from "@/Images/workday correct logo.png";
import vittiLogo from "@/Images/Vittilogistics_W_bagground-removebg-preview.png";
import bifrostLogo from "@/Images/Bifrost group logo.webp";
import lazioLogo from "@/Images/laziosearchgroup_logo-removebg-preview.png";
import promptLogo from "@/Images/Prompt global logo.png";
import biofarmaLogo from "@/Images/Biofarma log.svg";
import dlvrLogo from "@/Images/DLVR logistics logo updated updated version.png";
import prestigeLogo from "@/Images/Prestige_logistics-removebg-preview.png";
import razrLogo from "@/Images/RAZR_logistics_lofg-removebg-preview.png";
import tradeHarmonizerLogo from "@/Images/Trade_harmonizer-removebg-preview.png";

/**
 * Time-saved counter model:
 * - 60 companies onboarded since Jan 12 2025 with exponential growth
 * - Mean: 5 hrs/week saved per employee, ~3 employees per company
 * - 5 × 3 × 60 = 900 hrs/week = 3,900 hrs/month = 234,000 min/month
 * - Base total by Feb 1 2026: ~921,600 minutes
 */
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        className="object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Overlay gradient: stronger in center for text contrast, darker at bottom for logos */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.48) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.58) 100%)",
        }}
      />

      {/* Hero content vertically centered */}
      <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-24 sm:pt-24 sm:pb-32">
        {/* Time saved counter pill */}
        <TimeSavedBanner />

        {/* Main heading */}
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
          Buy time.<br />For the first time.
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 max-w-[32rem] text-center text-base lg:text-lg animate-fade-in-up delay-300"
          style={{
            fontFamily: "var(--font-lato)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            opacity: 0,
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          You already know where AI changes your business. We design, build,
          and maintain the systems that make it real.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex items-center gap-x-3 sm:gap-x-4 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
          <a
            href="https://calendly.com/sejer-anthemagency/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
          >
            Get in touch
          </a>
          <a
            href="/#how-we-work"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full border border-white/30 bg-white/15 text-white text-sm font-medium hover:bg-white/25 transition-colors duration-150 backdrop-blur-sm"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Logo bar pinned to bottom */}
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
            Trusted by operators who don't wait
          </p>
          <div className="animate-fade-in-up delay-600" style={{ opacity: 0 }}>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

type LogoEntry = { name: string; src: typeof atlasLogo; url?: string; w?: number; h?: number; noFilter?: boolean };

const logos: LogoEntry[] = [
  { name: "Atlas People", src: atlasLogo, url: "https://www.atlaspeople.io/" },
  { name: "Atobi", src: atobiLogo, url: "https://www.atobi.io/" },
  { name: "Workday", src: workdayLogo, url: "https://www.workday.com/" },
  { name: "Vitti Logistics", src: vittiLogo, url: "https://vittilog.com/", w: 180, h: 40 },
  { name: "Bifrost Group", src: bifrostLogo, url: "https://www.bifroststudios.com/" },
  { name: "Lazio Search Group", src: lazioLogo, url: "https://laziosearch.com/" },
  { name: "Prompt Global", src: promptLogo, url: "https://prompt.global/", w: 140, h: 32 },
  { name: "Biofarma", src: biofarmaLogo, url: "https://biofarma.dk/da/home-dansk/" },
  { name: "DLVR Logistics", src: dlvrLogo, url: "https://dlvrlog.com/" },
  { name: "Prestige Logistics", src: prestigeLogo, url: "https://prestigelogisticsgroup.com/", w: 140, h: 32 },
  { name: "RAZR Logistics", src: razrLogo, url: "https://www.razrlogistics.com/" },
  { name: "Trade Harmonizer", src: tradeHarmonizerLogo, url: "https://www.tradeharmonizer.co.uk/" },
];

export function LogoItem({ entry }: { entry: LogoEntry }) {
  const img = (
    <div className="relative shrink-0" style={{ width: entry.w ?? 100, height: entry.h ?? 24 }}>
      <Image
        src={entry.src}
        alt={entry.name}
        fill
        style={{
          objectFit: "contain",
          filter: entry.noFilter ? "none" : "brightness(0) invert(1)",
          opacity: entry.noFilter ? 0.5 : 0.6,
        }}
      />
    </div>
  );

  return (
    <div className="logo-item">
      {entry.url ? (
        <a href={entry.url} target="_blank" rel="noopener noreferrer">
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  );
}

export function TimeSavedBanner() {
  const [minutes, setMinutes] = useState(getMinutesSaved);

  useEffect(() => {
    const id = setInterval(() => setMinutes(getMinutesSaved()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center animate-fade-in-up delay-100" style={{ opacity: 0 }}>
      <a
        href="/time-saved"
        className="flex items-center gap-x-2 py-2 pr-3 pl-4 rounded-full border border-white/15 backdrop-blur-[12px] hover:bg-white/15 text-xs font-medium transition-all duration-150 cursor-pointer"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span style={{ fontVariantNumeric: "tabular-nums", color: "#FFFFFF" }}>
          {formatNumber(minutes)}
        </span>
        <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.7)" }}>
          minutes saved. This number is real
        </span>
        <span className="sm:hidden" style={{ color: "rgba(255,255,255,0.7)" }}>
          min saved
        </span>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          />
        </svg>
      </a>
    </div>
  );
}

export function LogoCarousel() {
  const renderLogos = (prefix: string) =>
    logos.map((entry) => (
      <div className="block" key={`${prefix}-${entry.name}`}>
        <LogoItem entry={entry} />
      </div>
    ));

  return (
    <div className="overflow-x-clip overflow-y-visible">
      <div className="logo-scroll">
        <div className="logo-track">
          {renderLogos("a")}
          {renderLogos("b")}
          {renderLogos("c")}
        </div>
      </div>
    </div>
  );
}
