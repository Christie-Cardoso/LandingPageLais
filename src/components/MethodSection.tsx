import { ShieldCheck, Smartphone, Clock } from "lucide-react";

export const MethodSection: React.FC = () => {
  const items = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Sem Restrições Malucas",
      desc: "Você não vai cortar carboidratos ou parar de comer o que gosta. Vamos aprender a combinar os alimentos para ter saciedade.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Aplicativo Exclusivo",
      desc: "Tenha acesso ao seu plano alimentar, lista de compras e receitas direto no seu celular.",
    },
    {
      icon: <Clock size={32} />,
      title: "Suporte Real",
      desc: "Não espere a próxima consulta para tirar dúvidas. Tenha suporte próximo via WhatsApp durante todo o processo.",
    },
  ];

  return (
    <section id="metodo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">
            Diferenciais
          </span>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">
            Por que funciona?
          </h2>
          <p className="text-stone-600 text-lg">
            Esqueça a folha de papel impressa que vai para a gaveta. Meu método
            oferece acompanhamento próximo para estar com você 24h por dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl bg-stone-50 hover:bg-emerald-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-stone-800 group-hover:text-emerald-600 shadow-sm mb-6 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
