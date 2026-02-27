"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Scoped access only",
    description:
      "Every system we build connects only to the tools and data it needs. No broad permissions, no unnecessary access.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
        <path
          d="M13.75 8.125V6.25c0-2.312-1.437-3.75-3.75-3.75S6.25 3.938 6.25 6.25v1.875h-2.5V17.5h12.5V8.125zM8.125 6.25c0-1.278.597-1.875 1.875-1.875s1.875.597 1.875 1.875v1.875h-3.75z"
          fill="#4ade80"
        />
      </svg>
    ),
  },
  {
    title: "Your data stays yours",
    description:
      "We don't store client data beyond what's needed for active workflows. When a project ends, your data doesn't linger.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 1.875l-6.25 3.125v4.375c0 4.347 2.669 8.406 6.25 9.375 3.581-.969 6.25-5.028 6.25-9.375V5z"
          stroke="#4ade80"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M7.5 10l1.875 1.875L12.5 8.125"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Transparent tooling",
    description:
      "We build on tools like n8n and Claude, and we're upfront about it. You always know what's running under the hood.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#4ade80" strokeWidth="1.5" fill="none" />
        <path
          d="M10 6.25v3.75l2.5 1.25"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const headingWords = ["Security", "you", "can", "trust."];

export default function Security() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [wordOpacities, setWordOpacities] = useState(headingWords.map(() => 0.1));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            const newOpacities = headingWords.map((_, i) => {
              const wordProgress = Math.max(0, Math.min(1, (ratio - i * 0.15) / 0.25));
              return 0.1 + wordProgress * 0.9;
            });
            setWordOpacities(newOpacities);
          }
        });
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 19) }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-6 lg:px-10">
        <div className="mb-10 lg:mb-14">
          <h2
            className="font-medium text-3xl lg:text-5xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {headingWords.map((word, i) => (
              <span
                key={word}
                className="inline-block mr-[0.25em] transition-opacity duration-300"
                style={{
                  opacity: wordOpacities[i],
                  color: i >= 2 ? "#4ade80" : "#FFFFFF",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
