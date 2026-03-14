import Image from "next/image";
import logo from "@/brand/DNA/Screenshot_2026-02-14_at_22.34.03-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-10 lg:py-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <a href="/">
              <Image
                src={logo}
                alt="Murph"
                height={22}
                style={{ width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p className="text-sm max-w-[20rem]" style={{ color: "rgba(255,255,255,0.4)" }}>
              AI execution partner for operators who don&apos;t wait. We design, build, and own the systems that buy you time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Company
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="/case-studies">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="/#how-we-work">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="/supply-chain-and-logistics">
                    Supply Chain & Logistics
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Resources
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="/case-studies">
                    Case studies
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Legal
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="/privacy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="transition-colors duration-150" style={{ color: "rgba(255,255,255,0.5)" }} href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; {new Date().getFullYear()} Murph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
