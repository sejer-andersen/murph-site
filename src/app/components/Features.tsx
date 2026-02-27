import Image from "next/image";

const features = [
  {
    title: "Operations diagnosis",
    description:
      "We map your workflows end-to-end, identify where time is lost, and pinpoint the highest-leverage opportunities for automation.",
    image: "https://a-us.storyblok.com/f/1023015/2880x1638/9ebda5ebab/hero-ui-v6.png",
  },
  {
    title: "Custom system design",
    description:
      "Every system is designed specifically for your company. No templates, no generic tools. Just infrastructure built around how you actually work.",
    image: "https://a-us.storyblok.com/f/1023015/2880x1638/9ebda5ebab/hero-ui-v6.png",
  },
  {
    title: "End-to-end deployment",
    description:
      "From architecture to launch, Murph owns the entire process. Your systems are built, tested, and running, with ongoing support included.",
    image: "https://a-us.storyblok.com/f/1023015/2880x1638/9ebda5ebab/hero-ui-v6.png",
  },
];

export default function Features() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
      <div className="container px-6 lg:px-10">
        <div className="flex max-w-[37rem] flex-col sm:mx-auto sm:items-center items-center mb-12 lg:mb-16">
          <h2
            className="font-medium text-3xl sm:text-center lg:text-4xl text-center"
            style={{ wordSpacing: "0.02em", fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
          >
            Everything you need,{" "}
            <span style={{ fontStyle: "italic" }}>nothing you don&apos;t</span>
          </h2>
          <p
            className="lg:mt-3 sm:text-center mt-3 text-center"
            style={{ wordSpacing: "0.02em", color: "rgba(255,255,255,0.5)" }}
          >
            We diagnose, design, and deploy. One process, one team,
            no handoffs. Just systems that run without you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-xl overflow-hidden"
              style={{
                backgroundColor: "#111",
                border: "1px solid #1a1a1a",
              }}
            >
              <div className="p-6">
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {feature.description}
                </p>
              </div>
              <div className="px-4 pb-0 mt-auto">
                <Image
                  alt={feature.title}
                  width={2880}
                  height={1638}
                  className="w-full rounded-t-lg"
                  style={{ opacity: 0.6 }}
                  src={feature.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
