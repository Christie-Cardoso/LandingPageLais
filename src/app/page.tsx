// src/app/page.tsx
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { TickerSection } from "../components/TickerSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-stone-50 selection:bg-emerald-200 scroll-smooth">
      <TickerSection />

      <Header />

      <main>
        <HeroSection />
      </main>
    </div>
  );
}
