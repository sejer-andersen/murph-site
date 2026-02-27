"use client";

import Image from "next/image";

/* ─── Card 1: Dedicated Support ─── */
function BentoChat() {
  return (
    <div className="relative h-full w-full min-h-[25.125rem] p-6 lg:px-16 lg:pb-10 rounded-xl border border-finta-200/50 bg-finta-50 overflow-hidden">
      {/* Background faux-device frame */}
      <div className="absolute inset-0">
        <div className="relative flex h-full justify-center overflow-hidden">
          <div className="relative flex flex-col justify-end px-10 pb-30 h-full w-full max-w-[24.5rem] md:pb-[9.125rem] lg:px-6">
            {/* Shadow panel with mask */}
            <div
              className="absolute top-0 right-0 bottom-0 left-0 px-4 lg:-right-5 lg:-left-5 lg:px-5"
              style={{
                maskImage:
                  "linear-gradient(180deg, transparent 0%, transparent 10%, #000 35%, #000 85%, transparent 93.78%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, transparent 0%, transparent 10%, #000 35%, #000 85%, transparent 93.78%)",
              }}
            >
              <div className="h-full w-full shadow-[0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_0px_2px_0px_rgba(15,12,12,0.10),0px_1px_2px_0px_rgba(15,12,12,0.10)]" />
            </div>

            {/* Chat bubbles */}
            <div className="relative">
              {/* User message */}
              <div className="z-[1] flex flex-col items-end self-end">
                <div className="px-3 py-2 bg-finta-25 rounded-xl shadow-[0px_-1px_1px_0px_rgba(255,255,255,0.45)_inset,0px_1px_1.5px_0px_rgba(32,32,32,0.16),0px_0px_1.5px_0px_rgba(0,0,0,0.24)] rounded-br-md font-book text-sm max-w-[min(254px,calc(100%-44px))]">
                  Hey, can we automate the client intake process too?
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  {/* Double checkmark */}
                  <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
                    <svg width="10" height="10" fill="none">
                      <path
                        stroke="#8D8D8E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m1.75 5.65 2.528 2.6 3.972-6.5"
                      />
                    </svg>
                    <svg className="-translate-x-[3px]" width="10" height="10" fill="none">
                      <path
                        stroke="#8D8D8E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m1.75 5.65 2.528 2.6 3.972-6.5"
                      />
                    </svg>
                  </div>
                  <span className="text-finta-800 font-book text-[10px]/5 tracking-normal">
                    10:55PM
                  </span>
                </div>
              </div>

              {/* Reply from Murph team */}
              <div className="flex items-end gap-3 pt-4 pb-6">
                {/* Avatar */}
                <div className="relative size-8 overflow-hidden rounded-full bg-finta-200 shrink-0">
                  <div className="absolute inset-0 rounded-full border border-black/10" />
                  <div className="flex items-center justify-center h-full text-[10px] font-medium text-finta-800">
                    MT
                  </div>
                </div>
                {/* Typing bubble */}
                <div className="relative">
                  <div className="px-3 py-2 rounded-xl shadow-[0px_-1px_1px_0px_rgba(255,255,255,0.45)_inset,0px_1px_1.5px_0px_rgba(32,32,32,0.16),0px_0px_1.5px_0px_rgba(0,0,0,0.24)] rounded-bl-md font-book text-sm"
                    style={{ background: "linear-gradient(to top, #F1F1F1, #FAFAFA)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle className="typing-dot-1" cx="4" cy="10" r="2" fill="#828283" />
                      <circle className="typing-dot-2" cx="10" cy="10" r="2" fill="#828283" />
                      <circle className="typing-dot-3" cx="16" cy="10" r="2" fill="#828283" />
                    </svg>
                  </div>
                  <div className="absolute top-[calc(100%+4px)] text-finta-800 text-[10px]/5 font-medium tracking-normal whitespace-nowrap">
                    Your Murph team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="flex h-full flex-col justify-end">
        <div className="relative flex flex-col gap-y-3 sm:mx-auto sm:max-w-md sm:items-center sm:text-center">
          <h3 className="text-brand-blue flex items-center gap-x-2 tracking-[0.04em] uppercase text-[11px] leading-4 font-bold">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C5.58 2 2 5.13 2 9c0 2.08 1.07 3.95 2.75 5.2L4 17l3.2-1.6c.9.26 1.84.4 2.8.4 4.42 0 8-3.13 8-7s-3.58-7-8-7z"
                fill="#257af3"
              />
            </svg>
            DEDICATED SUPPORT
          </h3>
          <p className="font-book text-sm text-pretty md:text-base" style={{ wordSpacing: "0.02em" }}>
            Direct line to your Murph team. Strategy questions, system updates, and operational guidance, whenever you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Card 2: Diagnosis & Scoping ─── */
function BentoRnD() {
  return (
    <div className="relative h-full w-full min-h-[25.125rem] p-6 lg:px-16 lg:pb-10 rounded-xl border border-finta-200/50 bg-finta-50 overflow-hidden">
      {/* Workflow diagram visual */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[24.5rem] px-10 pt-10 lg:px-6"
        style={{
          maskImage: "linear-gradient(180deg, #000 50%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 50%, transparent 95%)",
        }}
      >
        <div className="rounded-lg bg-white border border-finta-200/50 shadow-[0px_2px_4px_-2px_rgba(15,12,12,0.06)] p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#E74C3C]" />
            <div className="w-2 h-2 rounded-full bg-[#F39C12]" />
            <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
            <span className="text-[10px] text-finta-800 ml-1">operations-audit.murph</span>
          </div>
          {/* Workflow nodes */}
          <div className="space-y-3">
            {[
              { label: "Client intake", status: "bottleneck", time: "4.2 hrs/wk" },
              { label: "Invoice processing", status: "bottleneck", time: "3.8 hrs/wk" },
              { label: "Report generation", status: "optimizable", time: "2.1 hrs/wk" },
              { label: "Email follow-ups", status: "bottleneck", time: "5.6 hrs/wk" },
              { label: "Data entry", status: "optimizable", time: "1.9 hrs/wk" },
            ].map((node) => (
              <div key={node.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: node.status === "bottleneck" ? "#257af3" : "#B9D7EC",
                    }}
                  />
                  <span className="text-xs" style={{ color: "#212121" }}>{node.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-finta-800">{node.time}</span>
                  <span
                    className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: node.status === "bottleneck" ? "#257af3" : "#E7EDFD",
                      color: node.status === "bottleneck" ? "#FFFFFF" : "#257af3",
                    }}
                  >
                    {node.status === "bottleneck" ? "automate" : "optimize"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-finta-200/50 flex items-center justify-between">
            <span className="text-[10px] text-finta-800">Total recoverable</span>
            <span className="text-xs font-medium text-brand-blue">17.6 hrs/wk</span>
          </div>
        </div>
      </div>
      {/* Bottom text */}
      <div className="flex h-full flex-col justify-end">
        <div className="relative flex flex-col gap-y-3 sm:mx-auto sm:max-w-md sm:items-center sm:text-center mt-4">
          <h3 className="text-brand-blue flex items-center gap-x-2 tracking-[0.04em] uppercase text-[11px] leading-4 font-bold">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" rx="3" fill="#257af3" fillOpacity="0.15" />
              <path d="M7 10l2 2 4-4" stroke="#257af3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            DIAGNOSIS &amp; SCOPING
          </h3>
          <p className="font-book text-sm text-pretty md:text-base" style={{ wordSpacing: "0.02em" }}>
            We map your operations, identify where time is lost, and design systems that eliminate the bottleneck.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Card 3: Build & Deploy ─── */
function BentoExpertise() {
  return (
    <div className="relative h-full w-full min-h-[25.125rem] p-6 lg:px-16 lg:pb-10 rounded-xl border border-finta-200/50 bg-finta-50 overflow-hidden">
      {/* Terminal / deploy log visual */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[24.5rem] px-10 pt-10 lg:px-6"
        style={{
          maskImage: "linear-gradient(180deg, #000 50%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 50%, transparent 95%)",
        }}
      >
        <div className="rounded-lg bg-[#1a1a2e] border border-[#2a2a4a] shadow-[0px_2px_4px_-2px_rgba(15,12,12,0.06)] p-4 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#E74C3C]" />
            <div className="w-2 h-2 rounded-full bg-[#F39C12]" />
            <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
            <span className="text-[10px] text-[#6699C2] ml-1">murph deploy</span>
          </div>
          <div className="space-y-1.5 font-mono text-[10px] leading-relaxed">
            <p className="text-[#6699C2]">$ murph deploy --client acme-corp</p>
            <p className="text-[#8a8a9a]">  Validating workflow config...</p>
            <p className="text-[#2ECC71]">  ✓ 3 automations validated</p>
            <p className="text-[#8a8a9a]">  Connecting integrations...</p>
            <p className="text-[#2ECC71]">  ✓ CRM webhook active</p>
            <p className="text-[#2ECC71]">  ✓ n8n pipeline linked</p>
            <p className="text-[#8a8a9a]">  Running test suite...</p>
            <p className="text-[#2ECC71]">  ✓ 12/12 tests passed</p>
            <p className="text-[#8a8a9a]">  Deploying to production...</p>
            <p className="text-[#2ECC71]">  ✓ Live, saving 15.2 hrs/week</p>
          </div>
        </div>
      </div>
      {/* Bottom text */}
      <div className="flex h-full flex-col justify-end">
        <div className="relative flex flex-col gap-y-3 sm:mx-auto sm:max-w-md sm:items-center sm:text-center mt-4">
          <h3 className="text-brand-blue flex items-center gap-x-2 tracking-[0.04em] uppercase text-[11px] leading-4 font-bold">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" fill="#257af3" fillOpacity="0.15" />
              <path d="M10 6v4l3 2" stroke="#257af3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            BUILD &amp; DEPLOY
          </h3>
          <p className="font-book text-sm text-pretty md:text-base" style={{ wordSpacing: "0.02em" }}>
            From architecture to deployment, Murph owns the entire process. Your systems are built, tested, and running, end to end.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Card 4: Continuous Optimization ─── */
function BentoOptimization() {
  return (
    <div className="relative h-full w-full min-h-[25.125rem] p-6 lg:px-16 lg:pb-10 rounded-xl border border-finta-200/50 bg-finta-50 overflow-hidden">
      {/* Background visual stacked progress bars */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[24.5rem] px-10 pt-12 lg:px-6">
        <div className="space-y-4">
          {[
            { label: "Week 1", width: "35%" },
            { label: "Month 1", width: "58%" },
            { label: "Month 3", width: "78%" },
            { label: "Month 6", width: "92%" },
          ].map((bar) => (
            <div key={bar.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-medium text-finta-800">{bar.label}</span>
                <span className="text-[10px] font-medium text-brand-blue">{bar.width}</span>
              </div>
              <div className="h-2 rounded-full bg-white border border-finta-200/50">
                <div
                  className="h-full rounded-full bg-brand-blue/20"
                  style={{ width: bar.width }}
                >
                  <div
                    className="h-full rounded-full bg-brand-blue"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom text */}
      <div className="flex h-full flex-col justify-end">
        <div className="relative flex flex-col gap-y-3 sm:mx-auto sm:max-w-md sm:items-center sm:text-center mt-4">
          <h3 className="text-brand-blue flex items-center gap-x-2 tracking-[0.04em] uppercase text-[11px] leading-4 font-bold">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 14l4-4 3 3 7-8" stroke="#257af3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            CONTINUOUS OPTIMIZATION
          </h3>
          <p className="font-book text-sm text-pretty md:text-base" style={{ wordSpacing: "0.02em" }}>
            Your systems don&apos;t just run, they improve. We monitor, refine, and expand coverage so the time saved keeps compounding.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Card 5: Quote ─── */
function BentoQuote() {
  return (
    <div className="flex w-full items-center justify-center md:col-span-2 rounded-xl border border-finta-200/50 bg-finta-50">
      <div className="flex items-center min-h-64 px-6 py-3 lg:min-h-72 lg:max-w-[53.5rem] lg:px-16 lg:py-3">
        <div>
          <p className="text-2xl lg:text-3xl" style={{ wordSpacing: "0.02em" }}>
            &ldquo;Murph rebuilt our entire client operations pipeline. We went from 40 hours a week of manual work to nearly zero. The&nbsp;ROI&nbsp;was&nbsp;obvious&nbsp;within&nbsp;the&nbsp;first&nbsp;month.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Image
              alt="Alex Danilowicz"
              width={800}
              height={800}
              className="size-12 rounded-full object-cover"
              src="https://a-us.storyblok.com/f/1023015/800x800/7ac5954496/alex-danilowicz-v2.png"
            />
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium">Alex Danilowicz</p>
              <p className="font-book text-finta-800 text-xs">
                COO at ScaleWorks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Bento Grid ─── */
export default function BentoGrid() {
  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2">
          <BentoChat />
          <BentoRnD />
          <BentoExpertise />
          <BentoOptimization />
          <BentoQuote />
        </div>
      </div>
    </section>
  );
}
