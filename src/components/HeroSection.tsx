"use client";
import Image from "next/image";
import { ArrowRight, BrainCircuit, ChevronDown } from "lucide-react";
import { useModalStore } from "../store/modalStore";

export const HeroSection: React.FC = () => {
  const { openBookingModal, openQuizModal } = useModalStore();
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-stone-900">
      <Image
        src="/background.png"
        alt="Background Nutrição"
        fill
        className="object-cover object-center opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-stone-900 via-stone-900/90 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-900/50 backdrop-blur px-4 py-1.5 rounded-full border border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Agenda Aberta 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
            Nutrição além <br /> do{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-200">
              básico
            </span>
            .
          </h1>

          <p className="text-xl text-stone-300 max-w-lg leading-relaxed border-l-2 border-emerald-600 pl-6">
            Uma abordagem que une <strong>Ciência Comportamental</strong> e{" "}
            <strong>Nutrição Eficiente</strong> para resultados definitivos, sem
            terrorismo nutricional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={openBookingModal}
              className="px-8 py-4 cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
            >
              Agendar Consulta <ArrowRight size={20} />
            </button>

            <button
              onClick={openQuizModal}
              className="px-8 py-4 cursor-pointer bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <BrainCircuit size={20} />
              Descobrir meu Perfil
            </button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-stone-400 text-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-stone-900 bg-stone-700 flex items-center justify-center overflow-hidden"
                >
                  {/* <Image
                    src={}
                    alt="user"
                    width={40}
                    height={40}
                  /> */}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                +500
              </div>
            </div>
            <p>
              Vidas transformadas <br /> este ano.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="text-white/30" size={32} />
      </div>
    </section>
  );
};
