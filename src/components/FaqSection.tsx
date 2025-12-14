"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const FAQ_ITEMS = [
  {
    question: "Você aceita plano de saúde?",
    answer:
      "Meus atendimentos são particulares para garantir a qualidade e o tempo necessário (1h30) que você merece. Porém, emito recibo detalhado para que você solicite o reembolso junto ao seu convênio. A maioria dos planos reembolsa uma boa parte do valor.",
  },
  {
    question: "A consulta online funciona mesmo?",
    answer:
      "Com certeza! A metodologia é a mesma. A única diferença é a bioimpedância, que substituímos por medidas corporais que ensino você a tirar, e análise visual. A consulta é via Google Meet, olho no olho, com a mesma duração e entrega.",
  },
  {
    question: "Terei acesso ao aplicativo?",
    answer:
      "Sim! Todos os pacientes (presencial ou online) ganham acesso exclusivo ao aplicativo. Lá você terá seu plano alimentar, lista de compras, chat direto comigo e acesso a conteúdos exclusivos.",
  },
  {
    question: "O retorno está incluso?",
    answer:
      "Trabalho com planos de acompanhamento. A consulta avulsa (Primeira Consulta) inclui suporte por 30 dias para ajustes, mas não inclui uma nova consulta de retorno presencial. Para acompanhamento contínuo, temos pacotes com valores especiais.",
  },
  {
    question: "E se eu não gostar da dieta?",
    answer:
      "Impossível! Brincadeiras à parte, o plano é montado COM você, na hora. Não entrego nada pronto. Negociamos cada refeição baseada no que você gosta e pode comprar. Se mesmo assim precisar mudar algo, ajustamos na hora pelo WhatsApp.",
  },
];

export const FaqSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-800 mt-2">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeAccordion === index
                  ? "border-emerald-200 shadow-md bg-stone-50"
                  : "border-stone-200 hover:border-emerald-200"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-stone-800 text-lg">
                  {item.question}
                </span>
                <div
                  className={`p-1 rounded-full transition-transform duration-300 ${
                    activeAccordion === index
                      ? "bg-emerald-100 text-emerald-600 rotate-180"
                      : "text-stone-400"
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeAccordion === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-stone-100/50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
          <p className="text-emerald-900 font-bold mb-2">
            Ainda tem alguma dúvida específica?
          </p>
          <p className="text-stone-600 text-sm mb-4">
            Minha equipe está pronta para te responder no WhatsApp.
          </p>
          <WhatsAppButton
            label="Falar com a Equipe"
            className="shadow-none bg-emerald-600 hover:bg-emerald-700"
          />
        </div>
      </div>
    </section>
  );
};
