"use client";
import React from "react";
import {
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Users,
  Heart,
  Smartphone,
} from "lucide-react";
import { useModalStore } from "../store/modalStore";
import Image from "next/image";

export const AboutSection: React.FC = () => {
  const openBookingModal = useModalStore((state) => state.openBookingModal);

  return (
    <section id="sobre" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-emerald-200 rounded-4xl -z-10 hidden md:block"></div>

            <div className="relative rounded-4xl overflow-hidden shadow-2xl aspect-3/4 group">
              {/* <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=1000&auto=format&fit=crop"
                alt="Dra. Lais Nutricionista"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              /> */}

              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif font-bold text-3xl mb-1">Dra. Lais</p>
                <div className="h-1 w-12 bg-emerald-500 rounded-full mb-2"></div>
                <p className="text-white/90 text-sm font-medium">
                  Nutrição Comportamental & Esportiva
                </p>
                <p className="text-white/70 text-xs">CRN-9: 12345</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow max-w-50">
              <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-stone-400 font-bold">
                  Respondo Rápido
                </p>
                <p className="text-sm font-bold text-stone-800">Mande um Oi!</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                Muito prazer
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 leading-tight">
                Não é sobre fechar a boca. <br /> É sobre{" "}
                <span className="text-emerald-600">abrir a mente</span>.
              </h2>
            </div>

            <div className="text-stone-600 text-lg space-y-4 leading-relaxed">
              <p>
                Olá! Eu sou a <strong>Lais</strong>. Minha missão na nutrição
                nasceu de uma frustração pessoal: ver pessoas sofrendo com
                dietas de gaveta que duravam apenas duas semanas.
              </p>
              <p>
                Acredito que a comida não é apenas combustível, é cultura, é
                família e é prazer. Por isso, desenvolvi o{" "}
                <strong>Método Lais Nutri</strong>, que une a precisão da
                ciência nutricional com o acolhimento humano.
              </p>
              <p>
                Aqui, você não vai encontrar julgamentos ou proibições absurdas.
                Vamos construir juntos um estilo de vida que você consiga manter
                para sempre.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-emerald-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-stone-800">Especialista</h4>
                  <p className="text-sm text-stone-500">
                    Pós-graduada em Comportamento Alimentar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-emerald-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-stone-800">+500 Pacientes</h4>
                  <p className="text-sm text-stone-500">
                    Vidas transformadas com o método.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-emerald-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-stone-800">Abordagem Gentil</h4>
                  <p className="text-sm text-stone-500">
                    Sem terrorismo nutricional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone className="text-emerald-500 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-stone-800">100% Digital</h4>
                  <p className="text-sm text-stone-500">
                    Acompanhamento na palma da mão.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={openBookingModal}
                className="text-stone-800 font-bold border-b-2 border-emerald-500 hover:text-emerald-600 transition-colors pb-1 inline-flex items-center gap-2"
              >
                Agendar uma conversa comigo <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
