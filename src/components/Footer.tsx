import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-emerald-500 mb-1">
                Lais Nutrição
              </h3>
              <p className="text-xs text-stone-500 uppercase tracking-widest">
                Saúde Integrativa & Comportamental
              </p>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Acreditamos que a alimentação saudável deve ser leve, prazerosa e
              possível. Transformando vidas através do equilíbrio e da ciência
              nutricional.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="font-bold text-stone-300">
                  Unidade Savassi
                </span>
                <span>Av. do Contorno, 6000</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-stone-300">
                  Unidade Pampulha
                </span>
                <span>Av. Antônio Carlos, 7000</span>
              </li>
              <li className="pt-2">
                <span className="block text-emerald-500 font-bold">
                  contato@laisnutri.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
