import { ArrowRight, CheckCircle, Star } from "lucide-react";

import { useModalStore } from "../store/modalStore";

export const ServicesSection: React.FC = () => {
  const openBookingModal = useModalStore((state) => state.openBookingModal);
  const features = [
    "Anamnese Metabólica Detalhada",
    "Avaliação por Bioimpedância (Presencial)",
    "Plano Alimentar no App",
    "Lista de Compras & Receitas",
    "Suporte WhatsApp 30 dias",
  ];

  return (
    <section id="servicos" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-stone-800">
              Investimento na sua vida
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Não é um gasto, é o único investimento que traz retorno garantido
              para sua autoestima e longevidade.
            </p>
            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle size={20} className="text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
            <button
              onClick={openBookingModal}
              className="mt-4 cursor-pointer bg-stone-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-stone-800 transition-colors"
            >
              Verificar Disponibilidade <ArrowRight size={18} />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform rotate-3 translate-x-2 translate-y-2"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-stone-500 font-bold uppercase text-xs">
                    Consulta Presencial ou Online
                  </p>
                  <h3 className="text-3xl font-serif font-bold text-stone-800 mt-1">
                    Completa
                  </h3>
                </div>
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Star
                    className="text-emerald-600"
                    fill="currentColor"
                    size={24}
                  />
                </div>
              </div>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-bold text-stone-800">
                  R$ 250
                </span>
                <span className="text-stone-500 mb-1">/sessão</span>
              </div>
              <p className="text-xs text-center text-stone-400 border-t border-stone-100 pt-4">
                *Valor sujeito a alteração. Aceitamos Reembolso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
