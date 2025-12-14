import { CheckCircle, Smartphone, Zap, Clock } from "lucide-react";

export const EcosystemSection: React.FC = () => {
  const items = [
    {
      icon: <Smartphone size={24} />,
      title: "Aplicativo Exclusivo",
      desc: "Acesse sua dieta, lista de compras e evolução na palma da mão.",
    },

    {
      icon: <Zap size={24} />,
      title: "Chat VIP",
      desc: "Canal direto comigo (sem secretária) para tirar dúvidas urgentes.",
    },
  ];
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                Muito além da consulta
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-800 mt-6 leading-tight">
                Um Ecossistema Completo para sua Saúde
              </h2>
              <p className="text-stone-600 text-lg mt-4 leading-relaxed">
                Você não sai apenas com um papel. Você ganha acesso a um
                conjunto de ferramentas digitais e materiais exclusivos para
                facilitar sua rotina.
              </p>
            </div>

            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex items-center gap-3 w-full sm:w-auto justify-center">
                Quero acesso a tudo isso <CheckCircle size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-100 to-purple-100 rounded-full blur-[100px] opacity-60"></div>

            <div className="relative z-10 mx-auto w-75 h-150 bg-stone-900 rounded-[40px] border-8 border-stone-900 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-stone-900 rounded-b-xl z-20"></div>

              <div className="w-full h-full bg-stone-50 overflow-hidden flex flex-col">
                <div className="bg-emerald-600 p-6 pt-12 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-emerald-100 text-xs uppercase">
                        Bom dia,
                      </p>
                      <h3 className="font-bold text-xl">Maria Silva</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-xs text-emerald-100 mb-1">
                      Próxima Refeição
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="font-bold">12:30 • Almoço</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 overflow-hidden">
                  <div className="flex gap-2 mb-2">
                    <div className="bg-white p-3 rounded-xl shadow-sm flex-1 text-center border border-stone-100">
                      <p className="text-xs text-stone-400">Peso</p>
                      <p className="font-bold text-stone-800">62kg</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm flex-1 text-center border border-stone-100">
                      <p className="text-xs text-stone-400">Meta</p>
                      <p className="font-bold text-emerald-600">-2kg</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                    <h4 className="font-bold text-stone-800 text-sm mb-3">
                      Plano Alimentar
                    </h4>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex gap-3 mb-3 last:mb-0 items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <div className="h-2 bg-stone-100 rounded flex-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow max-w-45">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={16} className="text-emerald-500" />
                <span className="font-bold text-xs text-stone-800">
                  Meta Batida!
                </span>
              </div>
              <p className="text-[10px] text-stone-500">
                Lais, consegui entrar na calça jeans antiga!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
