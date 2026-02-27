"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the engagement start?",
    answer:
      "We begin with a discovery call to understand your operations. From there, we run a diagnosis phase, mapping your workflows, identifying bottlenecks, and scoping the systems that will have the highest impact. No code is written until we have a clear plan.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most companies see their first system live within 4-6 weeks. The diagnosis and scoping phase typically takes 1-2 weeks, followed by build and deployment. Ongoing optimization continues after launch.",
  },
  {
    question: "What kind of companies do you work with?",
    answer:
      "We work with growth-stage companies and established organizations that are losing significant time to repetitive operations. Our clients typically have 20-500 employees and are ready to invest in infrastructure that compounds over time.",
  },
  {
    question: "Is this just another automation tool?",
    answer:
      "No. We don't sell software off the shelf. Murph takes a consulting-led approach: we diagnose, design, build, and deploy custom systems tailored to your specific operations. The result is infrastructure that feels like it was always part of your company.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "We provide ongoing support and optimization. Your systems are monitored, maintained, and improved over time. As your operations evolve, we adapt the infrastructure to match.",
  },
  {
    question: "How is my data handled?",
    answer:
      "All data is encrypted in transit and at rest. We are SOC 2 Type I certified, and your data is never used to train AI models. Our providers guarantee zero data retention.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 sm:py-5 text-left"
      >
        <span className="text-sm font-medium pr-4" style={{ color: "#FFFFFF" }}>
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <path
            d="M10 4.167v11.666M4.167 10h11.666"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="pb-4 sm:pb-5 text-sm leading-relaxed pr-2 sm:pr-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
          <div>
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl"
              style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
            >
              Frequently asked{" "}
              <span style={{ fontStyle: "italic" }}>questions</span>
            </h2>
            <p className="mt-3" style={{ wordSpacing: "0.02em", color: "rgba(255,255,255,0.5)" }}>
              Can&apos;t find what you&apos;re looking for? Reach out to our team
              and we&apos;ll get back to you.
            </p>
            <a
              href="mailto:sejer@trymurph.com"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
              style={{ color: "#f97316" }}
            >
              Contact us
              <svg width="16" height="16" fill="none">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                  d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                />
              </svg>
            </a>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
