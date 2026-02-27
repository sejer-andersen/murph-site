import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import ProductShowcase from "./components/ProductShowcase";
import SmartSuggestions from "./components/SmartSuggestions";
import SmartInsightsCard from "./components/SmartInsightsCard";
import NaturalVoice from "./components/NaturalVoice";
import VoiceExperienceCard from "./components/VoiceExperienceCard";
import Reviews from "./components/Reviews";
import BentoGrid from "./components/BentoGrid";
import Integrations from "./components/Integrations";
import MentionedIn from "./components/MentionedIn";

import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="isolate text-base overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ProductShowcase />
        <SmartSuggestions />
        <SmartInsightsCard />
        <NaturalVoice />
        <VoiceExperienceCard />
        <Reviews />
        {/* <BentoGrid /> */}
        <Integrations />
        <MentionedIn />

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
