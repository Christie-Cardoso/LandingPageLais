"use client";

import { AboutSection } from "../components/AboutSection";
import { BookingModal } from "../components/BookingModal";
import { EcosystemSection } from "../components/EcosystemSection";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { JourneySection } from "../components/JourneySection";
import { MethodSection } from "../components/MethodSection";
import { ServicesSection } from "../components/ServicesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TickerSection } from "../components/TickerSection";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { QuizModal } from "../features/quiz/QuizModal";
import { useModalStore } from "../store/modalStore";

export default function Home() {
  const {
    isBookingOpen,
    isQuizOpen,
    quizResult,
    closeBookingModal,
    finishQuiz,
    closeQuizModal,
  } = useModalStore();

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-stone-50 selection:bg-emerald-200 scroll-smooth">
      <TickerSection />

      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        <MethodSection />

        <JourneySection />

        <EcosystemSection />

        <ServicesSection />

        <TestimonialsSection />

        <FaqSection />
      </main>

      <Footer />

      <WhatsAppButton variant="floating" />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBookingModal}
        prefilledNotes={
          quizResult ? `Resultado Quiz: ${quizResult.split("|")[0]}` : ""
        }
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={closeQuizModal}
        onFinish={finishQuiz}
      />
    </div>
  );
}
