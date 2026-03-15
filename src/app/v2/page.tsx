"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "@/Images/treptoweralex-usa-2868732_1920.jpg";

// Review images
import stevenImg from "@/Images/Steven Bennet.jpeg";
import robertImg from "@/Images/Robert Herr.jpeg";
import domenicImg from "@/Images/Domenic Maiani.jpeg";
import elenaImg from "@/Images/Elena.jpeg";
import hasanImg from "@/Images/Hasan Veletanlic.jpeg";
import noahImg from "@/Images/Noah Blanchard.jpeg";
import danImg from "@/Images/Dan Rozga.jpeg";
import barryImg from "@/Images/Barry Case.jpeg";
import dennisImg from "@/Images/Dennis Dabalos.jpeg";
import andreasImg from "@/Images/Andreas ommedal.jpeg";
import idaImg from "@/Images/Ida Lodal.jpeg";

// Logos
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

/* ═══════════════════════════════════════════════════════════
   TIME COUNTER MODEL
   ═══════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE — 6 SECTIONS
   Hero → Before/After → Case Studies → Reviews → FAQ → CTA
   ═══════════════════════════════════════════════════════════ */

export default function V2Page() {
  return (
    <div className="isolate text-base overflow-x-hidden">
      <Header />
      <main>
        <V2Hero />
        <V2BeforeAfter />
        <V2CaseStudies />
        <V2Reviews />
        <V2FAQ />
        <V2CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   1. HERO — Counter + visceral time waste + logos
   ═══════════════════════════════════════════════════════════ */

function V2Hero() {
  const [minutes, setMinutes] = useState(getMinutesSaved);
  const [pageSeconds, setPageSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMinutes(getMinutesSaved()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPageSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // Average: 60 companies × 3 employees × 5 hrs/week = 900 hrs/week
  // = 900 * 60 / (7*24*60*60) = ~0.089 minutes/second wasted across all clients
  const wastedMinutes = Math.floor(pageSeconds * 0.089);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden time-grain">
      <Image src={heroImage} alt="" fill priority className="object-cover" style={{ zIndex: 0 }} />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.60) 70%, rgba(0,0,0,0.70) 100%)",
        }}
      />

      <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-24 sm:pt-24 sm:pb-32">
        {/* Live counter pill */}
        <div className="flex flex-col items-center animate-fade-in-up delay-100" style={{ opacity: 0 }}>
          <a
            href="/time-saved"
            className="flex items-center gap-x-2 py-2 pr-3 pl-4 rounded-full border border-white/15 backdrop-blur-[12px] hover:bg-white/15 text-xs font-medium transition-all duration-150 cursor-pointer time-pulse"
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

        {/* Visceral subtitle — shows time wasted while on page */}
        <div
          className="mt-6 flex flex-col items-center gap-2 animate-fade-in-up delay-300"
          style={{ opacity: 0 }}
        >
          {pageSeconds < 5 ? (
            <p
              className="max-w-[28rem] text-center text-base lg:text-lg"
              style={{ fontFamily: "var(--font-lato)", color: "rgba(255,255,255,0.7)" }}
            >
              Time is the one thing you can&apos;t make more of. Until now.
            </p>
          ) : (
            <p
              className="max-w-[34rem] text-center text-base lg:text-lg transition-all duration-500"
              style={{ fontFamily: "var(--font-lato)", color: "rgba(255,255,255,0.7)" }}
            >
              In the{" "}
              <span style={{ color: "#FFFFFF", fontFamily: "var(--font-inter)", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>
                {pageSeconds}
              </span>{" "}
              seconds you&apos;ve been here, teams without Murph lost{" "}
              <span style={{ color: "#4ade80", fontFamily: "var(--font-inter)", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>
                {wastedMinutes > 0 ? wastedMinutes : "<1"}
              </span>{" "}
              minutes to work a system should handle.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 flex items-center gap-x-3 sm:gap-x-4 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
          <a
            href="https://calendly.com/sejer-anthemagency/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
          >
            Get your time audit
          </a>
          <a
            href="#before-after"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full border border-white/30 bg-white/15 text-white text-sm font-medium hover:bg-white/25 transition-colors duration-150 backdrop-blur-sm"
          >
            See the difference
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
            Trusted by people who value their time
          </p>
          <div className="animate-fade-in-up delay-600" style={{ opacity: 0 }}>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   2. BEFORE / AFTER — The time comparison
   ═══════════════════════════════════════════════════════════ */

const comparisons = [
  { task: "Quote generation", before: "45 min", after: "Instant", saved: "45 min/request" },
  { task: "Candidate screening", before: "2 FTEs", after: "0.5 FTE", saved: "1.5 FTEs freed" },
  { task: "Dispatch routing", before: "3 hrs/day", after: "Automated", saved: "15 hrs/week" },
  { task: "Lead qualification", before: "Manual review", after: "AI-scored", saved: "10 hrs/week" },
  { task: "Report generation", before: "2 hrs/week", after: "Auto-sent", saved: "100+ hrs/year" },
];

function V2BeforeAfter() {
  return (
    <section id="before-after" className="bg-[#0a0a0a] py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
            <span
              className="uppercase text-[11px] tracking-[0.1em]"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}
            >
              Before & After
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}
          >
            Where does your<br />time actually go?
          </h2>
        </div>

        {/* Comparison table */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
        >
          {/* Header row */}
          <div
            className="grid grid-cols-[1fr_100px_100px_140px] sm:grid-cols-[1fr_120px_120px_160px] gap-0 px-4 sm:px-6 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Task</span>
            <span className="text-[10px] uppercase tracking-wider font-medium text-center" style={{ color: "rgba(249,115,22,0.6)" }}>Before</span>
            <span className="text-[10px] uppercase tracking-wider font-medium text-center" style={{ color: "#4ade80" }}>After Murph</span>
            <span className="text-[10px] uppercase tracking-wider font-medium text-right" style={{ color: "rgba(255,255,255,0.3)" }}>Time saved</span>
          </div>

          {/* Data rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.task}
              className="grid grid-cols-[1fr_100px_100px_140px] sm:grid-cols-[1fr_120px_120px_160px] gap-0 px-4 sm:px-6 py-4 items-center"
              style={{ borderBottom: i < comparisons.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
            >
              <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)" }}>
                {row.task}
              </span>
              <span className="text-sm text-center" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "line-through", textDecorationColor: "rgba(249,115,22,0.4)" }}>
                {row.before}
              </span>
              <span className="text-sm text-center font-medium" style={{ color: "#4ade80" }}>
                {row.after}
              </span>
              <div className="flex justify-end">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{ backgroundColor: "rgba(74,222,128,0.08)", color: "rgba(74,222,128,0.8)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 8V2M3 4l2-2 2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {row.saved}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="mt-6 text-sm text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
          Real numbers from real deployments. Every row is time your team gets back.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   3. CASE STUDIES — Inline, not hidden on a subpage
   ═══════════════════════════════════════════════════════════ */

const cases = [
  {
    company: "DLVR Logistics",
    industry: "Air Cargo",
    timeSaved: "5 hrs/day",
    pain: "Ops team spent 5 hours daily on manual quote generation and dispatch coordination.",
    solution: "AI system that quotes, routes, and books shipments automatically.",
    outcome: "5 hours recovered daily. Quote time: 45 min → instant.",
  },
  {
    company: "Lazio Search Group",
    industry: "Recruiting",
    timeSaved: "50% faster screening",
    pain: "Senior recruiters spending their best hours on initial candidate screening instead of closing.",
    solution: "AI-powered candidate matching that scores, ranks, and routes automatically.",
    outcome: "Screening time cut in half. Recruiters freed for client work.",
  },
  {
    company: "ACN Group",
    industry: "Lead Generation",
    timeSaved: "20+ hrs/week",
    pain: "Manual prospecting and follow-ups across multiple LinkedIn accounts eating 20+ hours weekly.",
    solution: "AI-driven outreach system that identifies, contacts, and nurtures leads automatically.",
    outcome: "20+ hours/week recovered. Response rates improved with personalized sequencing.",
  },
];

function V2CaseStudies() {
  return (
    <section className="bg-[#0a0a0a] py-16 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f97316" }} />
              <span
                className="uppercase text-[11px] tracking-[0.1em]"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.1em" }}
              >
                Time Bought Back
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.1 }}
            >
              Real systems.<br />Real hours recovered.
            </h2>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium shrink-0"
            style={{ color: "#4ade80" }}
          >
            View all case studies
            <svg width="16" height="16" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((cs) => (
            <div
              key={cs.company}
              className="flex flex-col rounded-xl p-5 sm:p-6 group hover:border-[rgba(74,222,128,0.2)] transition-colors duration-200"
              style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium" style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}>
                    {cs.company}
                  </h3>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{cs.industry}</p>
                </div>
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{ backgroundColor: "rgba(74,222,128,0.08)", color: "#4ade80" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 8V2M3 4l2-2 2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {cs.timeSaved}
                </span>
              </div>

              {/* Pain */}
              <p className="text-[13px] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
                {cs.pain}
              </p>

              {/* Divider */}
              <div className="h-px my-3" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

              {/* Solution */}
              <p className="text-[13px] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                <span className="font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>What we built: </span>
                {cs.solution}
              </p>

              {/* Outcome */}
              <div className="mt-auto pt-3">
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(74,222,128,0.04)", border: "1px solid rgba(74,222,128,0.08)" }}
                >
                  <p className="text-[13px] font-medium" style={{ color: "rgba(74,222,128,0.8)" }}>
                    {cs.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   4. REVIEWS — Scrolling columns (reused from original)
   ═══════════════════════════════════════════════════════════ */

type Review = { text: string; name: string; role: string; img: typeof stevenImg | null; url?: string };

const reviews: Review[] = [
  { text: "I've been in software engineering for over 20 years, so I've seen my fair share of projects, pitches, and promises. Most don't live up to the hype. What Murph built for my agency absolutely did. The quality, precision, and creativity stood out immediately.", name: "Steven Bennett", role: "Staff Engineer, 20+ years", img: stevenImg, url: "https://www.linkedin.com/in/stevenjbennett/" },
  { text: "Murph is a WILDLY powerful partner for myself and DLVR Logistics. They built an AI system that automated our dispatch routing and quote generation, saving us hours every single day. HIGHLY recommend!!!", name: "Robert Herr", role: "Owner, DLVR Logistics", img: robertImg, url: "https://www.linkedin.com/in/yoursimplyfreight/" },
  { text: "Murph is in a class of their own. They built an AI-powered candidate matching system for our recruiting firm that cut our screening time in half. Knowledgeable, professional, and truly the best to work with.", name: "Domenic Maiani", role: "Founder, Lazio Search Group", img: domenicImg, url: "https://www.linkedin.com/in/domenic-maiani-lazio/" },
  { text: "The Murph team is one of the most productive I've ever worked with. The focus on the task and the ability to deliver results quickly is their key feature.", name: "Elena Baranova", role: "Marketing Manager, ACN Group", img: elenaImg, url: "https://www.linkedin.com/in/elena-baranova-9750771b/" },
  { text: "An extremely talented team. Their knowledge of AI and the implementation of it is next to no one else's. If you're considering whether or not to hire Murph, I would recommend it a thousand times.", name: "Daniel Spence", role: "Founder, Automation X", img: null, url: "https://www.linkedin.com/in/daniel-spence-/" },
  { text: "Murph is THE authority when it comes to AI automation. They forensically get to the actual business problem, distinguishing symptoms from the problem.", name: "Hasan Veletanlic", role: "Investment Operations & Compliance", img: hasanImg, url: "https://www.linkedin.com/in/hasan-veletanlic/" },
  { text: "I have partnered with Murph on multiple projects. Recently we built an AI that gives quotes and books shipments for an air cargo company, saving hours of manual work. They treat your business like their own.", name: "Noah Blanchard", role: "Founder & CEO, AI Phone Agents", img: noahImg, url: "https://www.linkedin.com/in/foundernoahblanchard/" },
  { text: "Murph is brilliant at designing AI systems and will obsess over a problem until it's solved. Their ability to turn complex workflows into intelligent automation is impressive.", name: "Ida Lodal", role: "Collaborator", img: idaImg, url: "https://www.linkedin.com/in/ida-lodal-b6450430a/" },
  { text: "I had the opportunity to review Murph's work in AI, automation, and intelligent workflow design. Murph's skills make them a valuable asset to any organization focused on efficiency and growth.", name: "Ahmed Bilal Afzal", role: "Founder", img: null, url: "https://www.linkedin.com/in/ahmed-bilal-afzal/" },
  { text: "Murph was such a pleasure to work with. They built an AI-powered lead qualification system that automatically identifies and scores prospects for our staffing business.", name: "Barry Case", role: "Co-Founder, StaffEdge Group", img: barryImg, url: "https://www.linkedin.com/in/barry-case/" },
  { text: "Murph built a great AI content automation system for some of our client's businesses. They are able to communicate and deliver on time.", name: "Dennis Dabalos", role: "Business Development", img: dennisImg },
  { text: "Great team! They are passionate about their work and will do their best to deliver fantastic results. I would personally recommend them to anyone seeking help with AI automation.", name: "Andreas Ommedal Aa", role: "Entrepreneur", img: andreasImg, url: "https://www.linkedin.com/in/andreas-ommedal-aa-b517442b2/" },
];

function ReviewCard({ review }: { review: Review }) {
  const card = (
    <div
      className="flex flex-col gap-4 sm:gap-5 rounded-xl p-3 sm:p-4"
      style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {review.img ? (
          <Image src={review.img} alt={review.name} width={36} height={36} className="size-9 rounded-full object-cover" />
        ) : (
          <div className="size-9 rounded-full flex items-center justify-center text-xs font-medium" style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80" }}>
            {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
        )}
        <div>
          <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>{review.name}</p>
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{review.role}</p>
        </div>
      </div>
    </div>
  );

  return review.url ? (
    <a href={review.url} target="_blank" rel="noopener noreferrer" className="block hover:brightness-110 transition-all duration-150">{card}</a>
  ) : card;
}

function V2Reviews() {
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative bg-[#0a0a0a] pt-10 sm:pt-12 lg:pt-18">
      <div className="relative">
        <div className="container pt-10 md:pt-16 pb-0">
          <div className="flex max-w-[37rem] flex-col sm:mx-auto items-center">
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl text-center"
              style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
            >
              Time <span style={{ fontStyle: "italic" }}>bought back</span>
            </h2>
            <p className="mt-3 text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
              Real companies. Real time saved. Here&apos;s what they say.
            </p>
          </div>
        </div>

        {/* Rating badge */}
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
                        {[...col1, ...col1].map((r, i) => <ReviewCard key={`c1-${i}`} review={r} />)}
                      </div>
                      <div className="hidden sm:flex flex-col gap-4 reviews-column-down" style={{ "--duration": "140s" } as React.CSSProperties}>
                        {[...col2, ...col2].map((r, i) => <ReviewCard key={`c2-${i}`} review={r} />)}
                      </div>
                      <div className="hidden lg:flex flex-col gap-4 reviews-column-up" style={{ "--duration": "130s" } as React.CSSProperties}>
                        {[...col3, ...col3].map((r, i) => <ReviewCard key={`c3-${i}`} review={r} />)}
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
   5. FAQ — Tight, sharp
   ═══════════════════════════════════════════════════════════ */

const faqs = [
  { question: "How does it start?", answer: "Discovery call. We map where your time is going, find the biggest bottlenecks, and scope the systems with highest impact. No code until we have a clear plan." },
  { question: "How fast do I get time back?", answer: "First system live in 4-6 weeks. Diagnosis takes 1-2 weeks. The time savings start from day one of deployment and compound from there." },
  { question: "Who is this for?", answer: "Directors, founders, and C-level who already use AI daily. High standards for execution. Would rather pay for excellent work than cheap hours. If you're still wondering whether AI works — we're not the right fit." },
  { question: "Is this just another automation tool?", answer: "No. We don't sell software. We're an execution partner. We diagnose, design, build, and deploy custom systems tailored to your operations. The result feels like it was always part of your company." },
  { question: "What happens after you deploy?", answer: "We own it. Monitored, maintained, and improved. As your operations evolve, the systems adapt. The longer they run, the more time they save." },
  { question: "How is my data handled?", answer: "Encrypted in transit and at rest. SOC 2 Type I certified. Your data is never used to train AI models. Zero data retention from our providers." },
];

function V2FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
          <div>
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
            >
              Questions about{" "}
              <span style={{ fontStyle: "italic" }}>time</span>
            </h2>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              Can&apos;t find what you&apos;re looking for?
            </p>
            <a
              href="mailto:sejer@trymurph.com"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
              style={{ color: "#4ade80" }}
            >
              sejer@trymurph.com
              <svg width="16" height="16" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5" />
              </svg>
            </a>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {faqs.map((faq, i) => (
              <div key={faq.question} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between py-4 sm:py-5 text-left">
                  <span className="text-sm font-medium pr-4" style={{ color: "#FFFFFF" }}>{faq.question}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 transition-transform duration-200" style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    <path d="M10 4.167v11.666M4.167 10h11.666" stroke="rgba(255,255,255,0.4)" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: openIndex === i ? "1fr" : "0fr", opacity: openIndex === i ? 1 : 0 }}>
                  <div className="overflow-hidden">
                    <p className="pb-4 sm:pb-5 text-sm leading-relaxed pr-2 sm:pr-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   6. CTA — "Get your time audit"
   ═══════════════════════════════════════════════════════════ */

function V2CTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-2xl px-4 py-12 sm:px-12 sm:py-20 text-center time-grain"
          style={{ backgroundColor: "#111", border: "1px solid #1a1a1a" }}
        >
          <div className="relative z-[3] flex flex-col items-center">
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl max-w-[30rem]"
              style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
            >
              Every day you wait is another day of lost time.
            </h2>
            <p className="mt-4 max-w-[28rem] text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              30-minute call. We&apos;ll map where your time is going and show you exactly what we&apos;d build to get it back.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4">
              <a
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
                href="https://calendly.com/sejer-anthemagency/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get your free time audit
              </a>
              <a
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors duration-150"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                href="mailto:sejer@trymurph.com"
              >
                sejer@trymurph.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   LOGO CAROUSEL (reused)
   ═══════════════════════════════════════════════════════════ */

type LogoEntry = { name: string; src: typeof atlasLogo; url?: string; w?: number; h?: number };

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

function LogoCarousel() {
  const renderLogos = (prefix: string) =>
    logos.map((entry) => (
      <div className="block" key={`${prefix}-${entry.name}`}>
        <div className="logo-item">
          {entry.url ? (
            <a href={entry.url} target="_blank" rel="noopener noreferrer">
              <div className="relative shrink-0" style={{ width: entry.w ?? 100, height: entry.h ?? 24 }}>
                <Image src={entry.src} alt={entry.name} fill style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
              </div>
            </a>
          ) : (
            <div className="relative shrink-0" style={{ width: entry.w ?? 100, height: entry.h ?? 24 }}>
              <Image src={entry.src} alt={entry.name} fill style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
            </div>
          )}
        </div>
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
