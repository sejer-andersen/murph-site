export default function CTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-4 sm:px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-2xl px-4 py-12 sm:px-12 sm:py-20 text-center"
          style={{
            backgroundColor: "#111",
            border: "1px solid #1a1a1a",
          }}
        >
          <div className="relative flex flex-col items-center">
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl max-w-[30rem]"
              style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
            >
              You know what needs to be built. We make it run.
            </h2>
            <p className="mt-4 max-w-[26rem] text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              Tell us where the bottleneck is. We&apos;ll scope it, build it, and deploy it, end to end.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4">
              <a
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-colors duration-150"
                href="https://calendly.com/sejer-anthemagency/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </a>
              <a
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors duration-150"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                href="/#how-we-work"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
