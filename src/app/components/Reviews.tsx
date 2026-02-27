"use client";

import Image from "next/image";
import stevenImg from "@/Images/Steven Bennet.jpeg";
import robertImg from "@/Images/Robert Herr.jpeg";
import domenicImg from "@/Images/Domenic Maiani.jpeg";
import elenaImg from "@/Images/Elena.jpeg";
import isaacImg from "@/Images/Isaac Donnelly.jpeg";
import hasanImg from "@/Images/Hasan Veletanlic.jpeg";
import noahImg from "@/Images/Noah Blanchard.jpeg";
import danImg from "@/Images/Dan Rozga.jpeg";
import ahmedImg from "@/Images/Ahmed Bilal.jpeg";
import barryImg from "@/Images/Barry Case.jpeg";
import dennisImg from "@/Images/Dennis Dabalos.jpeg";
import andreasImg from "@/Images/Andreas ommedal.jpeg";
import idaImg from "@/Images/Ida Lodal.jpeg";

type Review = {
  text: string;
  name: string;
  role: string;
  img: typeof stevenImg | null;
  url?: string;
};

const reviews: Review[] = [
  {
    text: "I've been in software engineering for over 20 years, so I've seen my fair share of projects, pitches, and promises. Most don't live up to the hype. What Murph built for my agency absolutely did. The quality, precision, and creativity stood out immediately. You don't need to be an engineer to feel when something is world-class, but with my background, I can say with confidence it's the kind of work that drives real ROI.",
    name: "Steven Bennett",
    role: "Staff Engineer, 20+ years",
    img: stevenImg,
    url: "https://www.linkedin.com/in/stevenjbennett/",
  },
  {
    text: "Murph is a WILDLY powerful partner for myself and DLVR Logistics. They built an AI system that automated our dispatch routing and quote generation, saving us hours every single day. An incredibly smart team with a meticulous process. They provide consistent updates and analytics, and will adjust on the fly if something isn't working. HIGHLY recommend!!!",
    name: "Robert Herr",
    role: "Owner, DLVR Logistics",
    img: robertImg,
    url: "https://www.linkedin.com/in/yoursimplyfreight/",
  },
  {
    text: "Murph is in a class of their own. They built an AI-powered candidate matching system for our recruiting firm that cut our screening time in half. Curiosity, intelligence, and drive. They have all the qualities I look for in top partners. Knowledgeable, professional, and truly the best to work with.",
    name: "Domenic Maiani",
    role: "Founder, Lazio Search Group",
    img: domenicImg,
    url: "https://www.linkedin.com/in/domenic-maiani-lazio/",
  },
  {
    text: "The Murph team is one of the most productive I've ever worked with. The focus on the task and the ability to deliver results quickly is their key feature. They built LinkedIn lead generation for our group, implementing new automation tools and creating an AI system through multiple instruments.",
    name: "Elena Baranova",
    role: "Marketing Manager, ACN Group",
    img: elenaImg,
    url: "https://www.linkedin.com/in/elena-baranova-9750771b/",
  },
  {
    text: "If you're a company looking to automate outreach and client acquisition, I highly recommend Murph. They built an AI-driven lead generation system for my business that identifies and contacts potential clients automatically. Very thorough, highly intelligent, and most importantly always there to be contacted if you need help on any situation.",
    name: "Isaac Donnelly",
    role: "Founder, AI Dental Automations",
    img: isaacImg,
    url: "https://www.linkedin.com/in/isaac-donnelly08/",
  },
  {
    text: "An extremely talented team. Their knowledge of AI and the implementation of it is next to no one else's. They always show up prepared and blow us away with their knowledge. Absolute privilege to work with them. If you're considering whether or not to hire Murph, I would recommend it a thousand times.",
    name: "Daniel Spence",
    role: "Founder, Automation X",
    img: null,
    url: "https://www.linkedin.com/in/daniel-spence-/",
  },
  {
    text: "Murph is THE authority when it comes to AI automation. They've gained a hard-won reputation for making their clients' lives easier by building intelligent systems that handle repetitive work, making and saving them money as a result. They forensically get to the actual business problem, distinguishing symptoms from the problem. They also mentor business owners on leveraging AI effectively.",
    name: "Hasan Veletanlic",
    role: "Investment Operations & Compliance",
    img: hasanImg,
    url: "https://www.linkedin.com/in/hasan-veletanlic/",
  },
  {
    text: "I have partnered with Murph on multiple projects. Recently we built an AI that gives quotes and books shipments for an air cargo company, saving hours of manual work. What sets Murph apart is their indefatigable drive. They treat your business like their own, go above and beyond, and live by 'do what is required, not what is expected.'",
    name: "Noah Blanchard",
    role: "Founder & CEO, AI Phone Agents",
    img: noahImg,
    url: "https://www.linkedin.com/in/foundernoahblanchard/",
  },
  {
    text: "I have had the pleasure of witnessing Murph grow as a driven company. Their AI expertise, creativity, and ability to deliver tailored automation solutions have impressed me greatly. They possess a rare combination of strategic thinking and hands-on execution that enables them to build AI systems that genuinely enhance productivity. It was a great pleasure working with them.",
    name: "Dan Rozga",
    role: "Client",
    img: danImg,
    url: "https://www.linkedin.com/in/daniel-rozga/",
  },
  {
    text: "I had the opportunity to review Murph's work in AI, automation, and intelligent workflow design. Their innovative approach and expertise in leveraging AI to drive measurable results stood out to me. Murph's skills make them a valuable asset to any organization focused on efficiency and growth.",
    name: "Ahmed Bilal Afzal",
    role: "Founder",
    img: ahmedImg,
    url: "https://www.linkedin.com/in/ahmed-bilal-afzal/",
  },
  {
    text: "Murph was such a pleasure to work with. They built an AI-powered lead qualification system that automatically identifies and scores prospects for our staffing business. Super flexible, quick to reply, very strong work ethic, and truly a pleasure to work with. I would highly recommend Murph!",
    name: "Barry Case",
    role: "Co-Founder, StaffEdge Group",
    img: barryImg,
    url: "https://www.linkedin.com/in/barry-case/",
  },
  {
    text: "Murph is an outstanding team who consistently brings valuable AI insights to every project. They built an intelligent intake automation for our recruiting firm that delivers impressive results. Strong communication, empathy, and a disciplined approach. Their AI expertise, drive, and commitment to growth make them a true standout.",
    name: "Tim Lohse",
    role: "Founder, Birch Hill Recruiting",
    img: null,
    url: "https://www.linkedin.com/in/timlohse/",
  },
  {
    text: "Murph built a great AI content automation system for some of our client's businesses. They are able to communicate and deliver on time. They're great at what they do and I vouch for their skills and talent.",
    name: "Dennis Dabalos",
    role: "Business Development",
    img: dennisImg,
  },
  {
    text: "Great team! They are passionate about their work and will do their best to deliver fantastic results. I would personally recommend them to anyone seeking help with AI automation. They're the go-to team!",
    name: "Andreas Ommedal Aa",
    role: "Entrepreneur",
    img: andreasImg,
    url: "https://www.linkedin.com/in/andreas-ommedal-aa-b517442b2/",
  },
  {
    text: "Murph is brilliant at designing AI systems and will obsess over a problem until it's solved. Their ability to turn complex workflows into intelligent automation is impressive. Besides that they have a noble work ethic, which makes them a great partner to work with.",
    name: "Ida Lodal",
    role: "Collaborator",
    img: idaImg,
    url: "https://www.linkedin.com/in/ida-lodal-b6450430a/",
  },
];

function ReviewCard({ review }: { review: Review }) {
  const card = (
    <div
      className="flex flex-col gap-4 sm:gap-6 rounded-xl p-3 sm:p-4"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        {review.img ? (
          <Image
            src={review.img}
            alt={review.name}
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
          />
        ) : (
          <div
            className="size-10 rounded-full flex items-center justify-center text-sm font-medium"
            style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80" }}
          >
            {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>{review.name}</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{review.role}</p>
        </div>
      </div>
    </div>
  );

  if (review.url) {
    return (
      <a href={review.url} target="_blank" rel="noopener noreferrer" className="block hover:brightness-110 transition-all duration-150">
        {card}
      </a>
    );
  }

  return card;
}

export default function Reviews() {
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative pt-10 sm:pt-12 lg:pt-18 bg-[#0a0a0a]">
      <div className="relative">
        {/* Section title */}
        <div className="container pt-10 md:pt-16 pb-0 md:pb-0">
          <div className="flex max-w-[37rem] flex-col sm:mx-auto sm:items-center items-center">
            <h2
              className="font-medium text-2xl sm:text-3xl lg:text-4xl text-center"
              style={{ wordSpacing: "0.02em", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}
            >
              Built for <span style={{ fontStyle: "italic" }}>experts who scale</span>
            </h2>
            <p
              className="lg:mt-3 sm:text-center mt-3 text-center"
              style={{ wordSpacing: "0.02em", color: "rgba(255,255,255,0.5)" }}
            >
              You already know what AI can do. You just need someone to build
              the real thing, end to end, so you stop being the bottleneck.
            </p>
          </div>
        </div>

        {/* Rating badge */}
        <div className="flex flex-col gap-y-6 pt-6">
          <div className="container flex justify-center">
            <div
              className="flex items-center gap-x-1.5 py-[3px] pr-[11px] pl-[7px] rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg width="20" height="20" fill="none">
                <path
                  fill="#4ade80"
                  d="M9.287 4.195c.224-.69 1.202-.69 1.426 0l.915 2.815a.75.75 0 0 0 .713.518h2.96c.726 0 1.028.93.44 1.357l-2.394 1.739a.75.75 0 0 0-.272.838l.914 2.815c.224.69-.566 1.265-1.154.838l-2.394-1.739a.75.75 0 0 0-.882 0l-2.394 1.74c-.588.426-1.378-.148-1.154-.84l.914-2.813a.75.75 0 0 0-.272-.839l-2.394-1.74c-.588-.426-.286-1.356.44-1.356h2.96a.75.75 0 0 0 .713-.518l.915-2.815Z"
                />
              </svg>
              <span className="text-xs font-medium" style={{ color: "#FFFFFF" }}>4.95</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>from 60+ companies</span>
            </div>
          </div>

          {/* Review columns */}
          <div className="relative">
            <div className="reviews-mask relative h-[500px] sm:h-[632px] md:h-[754px] overflow-hidden">
              <div className="h-full overflow-hidden">
                <div className="container">
                  <div className="md:px-2">
                    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Column 1 - scrolls up */}
                      <div
                        className="flex flex-col gap-4 reviews-column-up"
                        style={{ "--duration": "120s" } as React.CSSProperties}
                      >
                        {[...col1, ...col1].map((review, i) => (
                          <ReviewCard key={`col1-${i}`} review={review} />
                        ))}
                      </div>
                      {/* Column 2 - scrolls down */}
                      <div
                        className="hidden sm:flex flex-col gap-4 reviews-column-down"
                        style={{ "--duration": "140s" } as React.CSSProperties}
                      >
                        {[...col2, ...col2].map((review, i) => (
                          <ReviewCard key={`col2-${i}`} review={review} />
                        ))}
                      </div>
                      {/* Column 3 - scrolls up */}
                      <div
                        className="hidden lg:flex flex-col gap-4 reviews-column-up"
                        style={{ "--duration": "130s" } as React.CSSProperties}
                      >
                        {[...col3, ...col3].map((review, i) => (
                          <ReviewCard key={`col3-${i}`} review={review} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
