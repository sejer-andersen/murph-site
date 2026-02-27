"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/brand/DNA/Screenshot_2026-02-14_at_22.34.03-removebg-preview.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-10">
      <div
        className={`absolute inset-0 backdrop-blur-[15px] transition-opacity duration-400 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(10,10,10,0.8)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      />
      <div className="relative container">
        <div className="flex items-center justify-between py-3.5 pl-2 sm:px-4 sm:py-3 md:px-0">
          <div className="animate-fade-in">
            <a href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Murph"
                height={22}
                style={{
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                }}
                priority
              />
            </a>
          </div>
          <button
            className="-mr-0.5 p-2.5 sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="16" height="16" fill="none">
              <path
                stroke="#FFFFFF"
                strokeLinecap="square"
                strokeWidth="2"
                d="M2 4h12M2 12h12"
              />
            </svg>
          </button>
          <div className="hidden sm:block animate-fade-in">
            <nav>
              <ul className="flex flex-col items-center gap-x-6 gap-y-4 text-lg sm:flex-row sm:text-sm">
                <li>
                  <a
                    className="block transition-colors duration-300 hover:text-white/60"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                    href="/case-studies"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    className="block transition-colors duration-300 hover:text-white/60"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                    href="/#how-we-work"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    className="block transition-colors duration-300 hover:text-white/60"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="block transition-colors duration-300 hover:text-white/60"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                    href="/founders"
                  >
                    Founders
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3.5 py-2 text-center bg-white rounded-lg text-sm font-medium text-[#0a0a0a] hover:bg-white/85 transition-all duration-150"
                    href="https://calendly.com/sejer-anthemagency/30min" target="_blank" rel="noopener noreferrer"
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            className="sm:hidden absolute left-0 right-0 top-full backdrop-blur-[15px]"
            style={{
              backgroundColor: "rgba(10,10,10,0.95)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <nav className="container py-4">
              <ul className="flex flex-col items-center gap-y-4 text-base">
                <li><a className="block transition-colors duration-150" style={{ color: "rgba(255,255,255,0.9)" }} href="/case-studies">Case Studies</a></li>
                <li><a className="block transition-colors duration-150" style={{ color: "rgba(255,255,255,0.9)" }} href="/#how-we-work">How it works</a></li>
                <li><a className="block transition-colors duration-150" style={{ color: "rgba(255,255,255,0.9)" }} href="/about">About</a></li>
                <li><a className="block transition-colors duration-150" style={{ color: "rgba(255,255,255,0.9)" }} href="/founders">Founders</a></li>
                <li>
                  <a className="block px-3.5 py-2 text-center bg-white rounded-lg text-sm font-medium text-[#0a0a0a]" href="https://calendly.com/sejer-anthemagency/30min" target="_blank" rel="noopener noreferrer">
                    Get in touch
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
