"use client";

import { useState } from "react";
import { X, ArrowRight, BrainCircuit, CheckCircle } from "lucide-react";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinish: (result: string) => void;
}

const QUESTIONS = [
  {
    id: 1,
    text: "Qual seu maior obstáculo hoje?",
    options: [
      { label: "Falta de tempo para cozinhar", type: "Prático" },
      { label: "Vontade incontrolável de doce", type: "Formiga" },
      { label: "Ansiedade e descontar na comida", type: "Emocional" },
      { label: "Não sei o que comer", type: "Iniciante" },
    ],
  },
  {
    id: 2,
    text: "Como é sua rotina de exercícios?",
    options: [
      { label: "Intensa (5x+ semana)", type: "Atleta" },
      { label: "Moderada (2-3x semana)", type: "Equilibrado" },
      { label: "Sedentário / Iniciando", type: "Iniciante" },
      { label: "Irregular (quando dá)", type: "Prático" },
    ],
  },
  {
    id: 3,
    text: "Qual sua relação com vegetais?",
    options: [
      { label: "Amo, como sempre", type: "Saudável" },
      { label: "Como obrigado", type: "Seletivo" },
      { label: "Não entra no meu prato", type: "Seletivo" },
      { label: "Faço suco verde", type: "Fit" },
    ],
  },
];

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onFinish,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleOptionClick = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    // Simple logic: most frequent type or combination
    const counts: { [key: string]: number } = {};
    finalAnswers.forEach((a) => (counts[a] = (counts[a] || 0) + 1));

    const topType = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    let profileName = "";
    let profileDesc = "";

    if (topType === "Formiga") {
      profileName = "Perfil 'Formiguinha'";
      profileDesc =
        "Você luta contra o açúcar, mas não precisa cortar tudo! Precisamos de estratégias de saciedade.";
    } else if (topType === "Prático") {
      profileName = "Perfil 'Correria'";
      profileDesc =
        "Sua rotina é cheia. Você precisa de um plano alimentar flexível e marmitas práticas.";
    } else if (topType === "Emocional") {
      profileName = "Perfil Emocional";
      profileDesc =
        "A comida é sua válvula de escape. Vamos trabalhar comportamento alimentar e gatilhos.";
    } else {
      profileName = "Perfil em Evolução";
      profileDesc =
        "Você já tem consciência, mas precisa de ajuste fino para atingir seus objetivos.";
    }

    setResult(`${profileName}|${profileDesc}`);
  };

  const finishQuiz = () => {
    if (result) {
      onFinish(result);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 z-10"
        >
          <X size={24} />
        </button>

        {!result ? (
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">
                Pergunta {currentStep + 1}/{QUESTIONS.length}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-8 leading-tight">
              {QUESTIONS[currentStep].text}
            </h3>

            <div className="space-y-3">
              {QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt.type)}
                  className="w-full text-left p-4 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all font-medium text-stone-700 flex justify-between items-center group"
                >
                  {opt.label}
                  <ArrowRight
                    size={18}
                    className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center bg-linear-to-b from-emerald-50 to-white h-full flex flex-col justify-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
              <BrainCircuit size={40} />
            </div>

            <h3 className="text-xl text-stone-500 font-medium mb-2">
              Seu perfil é:
            </h3>
            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">
              {result.split("|")[0]}
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              {result.split("|")[1]}
            </p>

            <button
              onClick={finishQuiz}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Agendar para esse Perfil <CheckCircle size={20} />
            </button>

            <p className="text-xs text-stone-400 mt-4">
              A Lais receberá esse resultado antes da consulta.
            </p>
          </div>
        )}

        {/* Progress Bar */}
        {!result && (
          <div className="h-2 bg-stone-100 w-full">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
