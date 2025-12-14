import {
  ArrowRight,
  Calendar,
  FileText,
  Video,
  Smartphone,
  MessageCircle,
} from "lucide-react";
import { useModalStore } from "../store/modalStore";

export const JourneySection: React.FC = () => {
  const openBookingModal = useModalStore((state) => state.openBookingModal);
  const steps = [
    {
      icon: <Calendar size={24} />,
      title: "1. Agendamento",
      desc: "Você escolhe o melhor horário pelo site em 1 minuto.",
    },
    {
      icon: <FileText size={24} />,
      title: "2. Pré-Consulta",
      desc: "Responde a Anamnese no seu celular, do sofá de casa.",
    },
    {
      icon: <Video size={24} />,
      title: "3. A Consulta",
      desc: "1h30 de avaliação profunda (Online ou Presencial).",
    },
    {
      icon: <Smartphone size={24} />,
      title: "4. Plano no App",
      desc: "Recebe dieta, lista de compras e receitas no app.",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "5. Suporte",
      desc: "Acesso direto ao meu WhatsApp para tirar dúvidas.",
    },
  ];
  return (
    <section className="py-24 bg-stone-50 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-800">
            Sua Jornada de Transformação
          </h2>
          <p className="text-stone-500 mt-2">
            Um processo organizado para garantir seus resultados.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-stone-50 text-emerald-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:border-emerald-100 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="font-bold text-stone-800 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 leading-snug px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={openBookingModal}
            className="bg-stone-900 cursor-pointer text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-stone-800 transition-all flex items-center gap-2 mx-auto"
          >
            Começar Minha Jornada <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
