// src/app/page.tsx
import { AboutSection } from "../components/AboutSection";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { JourneySection } from "../components/JourneySection";
import { MethodSection } from "../components/MethodSection";
import { TickerSection } from "../components/TickerSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-stone-50 selection:bg-emerald-200 scroll-smooth">
      <TickerSection />

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <MethodSection />
        <JourneySection />
      </main>
    </div>
  );
}
