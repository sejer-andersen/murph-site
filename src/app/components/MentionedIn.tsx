"use client";

import Image from "next/image";
import jocLogo from "@/Images/Journal of commerce removed bg.png";
import jocImage from "@/Images/Journal of commerce image.webp";

const article = {
  publication: "Journal of Commerce",
  title: "Code generation tools altering efficiency, capacity for logistics technology providers",
  excerpt:
    "A wave of AI-based tools for software developers is likely to raise shipper expectations around the effectiveness and cost of logistics software applications.",
  url: "https://www.joc.com/article/code-generation-tools-altering-efficiency-capacity-for-logistics-technology-providers-6052945",
};

export default function MentionedIn() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex max-w-[37rem] flex-col sm:mx-auto sm:items-center items-center mb-12 lg:mb-16">
          <h2
            className="font-medium text-2xl sm:text-3xl lg:text-4xl text-center"
            style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
          >
            Internationally{" "}
            <span style={{ fontStyle: "italic" }}>recognised</span>
          </h2>
          <p
            className="lg:mt-3 sm:text-center mt-3 text-center text-base"
            style={{ wordSpacing: "0.02em", color: "rgba(255,255,255,0.5)" }}
          >
            We have been mentioned in
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              backgroundColor: "#111",
              border: "1px solid #1a1a1a",
            }}
          >
            <div className="grid md:grid-cols-[1fr_280px] items-stretch">
              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                <div className="mb-4">
                  <Image
                    src={jocLogo}
                    alt="Journal of Commerce"
                    height={24}
                    style={{ width: "auto", filter: "brightness(0) invert(1)", opacity: 0.7 }}
                  />
                </div>
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-medium leading-snug mb-3"
                  style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
                >
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {article.excerpt}
                </p>
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
              </div>

              <div className="relative hidden md:block">
                <Image
                  alt={article.publication}
                  src={jocImage}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
