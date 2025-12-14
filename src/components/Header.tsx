"use client";

import { useState } from "react";
import { Menu, X, Leaf, Calendar } from "lucide-react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-emerald-100 p-2.5 rounded-full group-hover:bg-emerald-200 transition-colors">
              <Leaf className="text-emerald-700" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-stone-800 tracking-tight">
                Lais Nutri
              </h1>
              <p className="text-[10px] text-emerald-600 font-bold tracking-[0.2em] uppercase">
                Saúde Integrativa
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
            >
              O Método
            </button>

            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection("duvidas")}
              className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
            >
              Dúvidas
            </button>

            <button
              // onClick={}
              className="flex items-center gap-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all px-6 py-2.5 rounded-full shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              Agendar Consulta
            </button>
          </nav>

          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl z-50 animate-slide-up">
          <div className="flex flex-col p-6 gap-4 text-center">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-lg font-medium text-stone-600 py-2"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-lg font-medium text-stone-600 py-2"
            >
              O Método
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-lg font-medium text-stone-600 py-2"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection("duvidas")}
              className="text-lg font-medium text-stone-600 py-2"
            >
              Dúvidas
            </button>

            <div className="pt-4 border-t border-stone-100">
              <button
                // onClick={}

                className="w-full flex items-center cursor-pointer justify-center gap-2 text-white bg-emerald-600 font-bold py-4 rounded-xl shadow-md"
              >
                <Calendar size={20} /> Agendar Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
