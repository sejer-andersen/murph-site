"use client";

import Image, { StaticImageData } from "next/image";

import linkedinLogo from "@/Images/linkedin icon.png";
import linearLogo from "@/Images/Linear logo.svg";
import stripeLogo from "@/Images/Stripe icon.jpeg";
import canvaLogo from "@/Images/Canva logo.jpeg";
import miroLogo from "@/Images/Miro logo.png";
import claudeLogo from "@/Images/Claude icon.png";
import todoistLogo from "@/Images/todoist logo.jpg";
import apolloLogo from "@/Images/A leads logo.webp";
import bufferLogo from "@/Images/Buffer logo.png";
import geminiLogo from "@/Images/Gemini icon.webp";

/* ── Integration data ────────────────────────────────────── */
const integrations: { name: string; logo: StaticImageData }[] = [
  { name: "LinkedIn", logo: linkedinLogo },
  { name: "Linear", logo: linearLogo },
  { name: "Stripe", logo: stripeLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Miro", logo: miroLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Todoist", logo: todoistLogo },
  { name: "Apollo", logo: apolloLogo },
  { name: "Buffer", logo: bufferLogo },
  { name: "Gemini", logo: geminiLogo },
];

/* ── Icon card (dark theme) ──────────────────────────────── */
function IntegrationCard({
  integration,
}: {
  integration: (typeof integrations)[number];
}) {
  return (
    <div
      className="flex items-center justify-center w-16 h-16 rounded-2xl border shadow-sm overflow-hidden"
      style={{ backgroundColor: "#111", borderColor: "#1a1a1a" }}
    >
      <Image
        src={integration.logo}
        alt={integration.name}
        width={36}
        height={36}
        className="object-contain rounded-lg"
      />
    </div>
  );
}

/* ── Scrolling icon column ───────────────────────────────── */
function ScrollingIcons() {
  const allIcons = [...integrations, ...integrations];

  return (
    <div className="integrations-scroll-mask h-[480px] overflow-hidden relative">
      <div
        className="integrations-scroll-up flex flex-col gap-4 will-change-transform"
        style={{ "--duration": "25s" } as React.CSSProperties}
      >
        {allIcons.map((integration, i) => (
          <div
            key={`${integration.name}-${i}`}
            className="flex items-center justify-center"
          >
            <IntegrationCard integration={integration} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Two-layer flow path (base + animated dash) ──────────── */
function FlowPath({ d }: { d: string }) {
  return (
    <g>
      <path
        d={d}
        stroke="rgba(74,222,128,0.10)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={d}
        stroke="rgba(74,222,128,0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        className="path-flow"
      />
    </g>
  );
}

/* ── Output icons (system outcomes) ───────────────────────── */
function AutomatedWorkflowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M6 14h4l3-6 4 12 3-6h4"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SyncedDataIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M20 8l2 2-2 2"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10h16"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 20l-2-2 2-2"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 18H6"
        stroke="#4ade80"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Main diagram ────────────────────────────────────────── */
export default function IntegrationsDiagram() {
  return (
    <div className="relative flex items-center justify-between w-full h-[480px] gap-0">
      {/* LEFT: Scrolling integration icons */}
      <div className="relative z-10 w-[72px] shrink-0">
        <ScrollingIcons />
      </div>

      {/* MIDDLE: SVG bracket paths + Murph hub */}
      <div className="flex-1 relative h-full flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 480"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Left bracket: top curve */}
          <FlowPath d="M 20 40 Q 80 40, 80 100" />
          {/* Left bracket: vertical trunk */}
          <FlowPath d="M 80 100 L 80 380" />
          {/* Left bracket: bottom curve */}
          <FlowPath d="M 80 380 Q 80 440, 20 440" />

          {/* Trunk → hub horizontal connector */}
          <FlowPath d="M 80 240 L 160 240" />

          {/* Hub → Slack (top-right curve) */}
          <FlowPath d="M 240 220 C 280 200, 320 170, 370 160" />
          {/* Hub → Gmail (bottom-right curve) */}
          <FlowPath d="M 240 260 C 280 280, 320 310, 370 320" />

          {/* Branch stubs off the trunk */}
          <FlowPath d="M 20 120 L 80 120" />
          <FlowPath d="M 20 200 L 80 200" />
          <FlowPath d="M 20 280 L 80 280" />
          <FlowPath d="M 20 360 L 80 360" />
        </svg>

        {/* Murph hub */}
        <div className="relative z-10">
          {/* Glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 120,
              height: 120,
              left: -12,
              top: -12,
              background:
                "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
            }}
          />
          {/* Hub card */}
          <div
            className="relative w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden"
            style={{
              backgroundColor: "#111",
              border: "1.5px solid rgba(74,222,128,0.3)",
              boxShadow: "0 0 40px rgba(74,222,128,0.08)",
            }}
          >
            <span
              className="text-3xl font-bold"
              style={{ color: "#4ade80", fontFamily: "var(--font-inter)" }}
            >
              M
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: System outcomes */}
      <div className="relative z-10 flex flex-col gap-20 shrink-0">
        {/* Automated workflows */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl border shadow-sm"
            style={{ backgroundColor: "#111", borderColor: "#1a1a1a" }}
          >
            <AutomatedWorkflowIcon />
          </div>
          <span
            className="text-[11px] leading-tight"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Automated
            <br />
            workflows
          </span>
        </div>
        {/* Synced data */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl border shadow-sm"
            style={{ backgroundColor: "#111", borderColor: "#1a1a1a" }}
          >
            <SyncedDataIcon />
          </div>
          <span
            className="text-[11px] leading-tight"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Synced
            <br />
            data
          </span>
        </div>
      </div>
    </div>
  );
}
