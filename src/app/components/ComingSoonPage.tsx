"use client";

import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { heroImage, TimeSavedBanner, LogoCarousel } from "./Hero";

export default function ComingSoonPage() {
  return (
    <>
      <Header />
      <main>
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

          {/* Overlay gradient */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.48) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.58) 100%)",
            }}
          />

          {/* Content vertically centered */}
          <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-32">
            <TimeSavedBanner />

            {/* Main heading */}
            <h1
              className="mt-6 text-center text-4xl lg:text-6xl xl:text-7xl animate-fade-in-up delay-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                opacity: 0,
              }}
            >
              Coming soon.
            </h1>

            {/* CTA buttons */}
            <div
              className="mt-8 flex items-center gap-x-4 animate-fade-in-up delay-400"
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
                Trusted by people who value their time
              </p>
              <div
                className="animate-fade-in-up delay-600"
                style={{ opacity: 0 }}
              >
                <LogoCarousel />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
