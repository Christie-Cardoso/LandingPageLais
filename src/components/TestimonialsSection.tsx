/* eslint-disable react/no-unescaped-entities */
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/constants";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-16">
          O que dizem meus pacientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-stone-50 p-8 rounded-2xl relative border border-stone-100"
            >
              <Quote
                className="text-emerald-200 absolute top-6 right-6"
                size={40}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-stone-800">{t.name}</p>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {t.loss}
                  </span>
                </div>
              </div>
              <p className="text-stone-600 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
