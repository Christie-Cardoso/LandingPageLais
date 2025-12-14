import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                Lais Lima
              </h3>
              <p className="text-[10px] text-emerald-600 font-bold tracking-[0.2em] uppercase">
                Nutricionista
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

        <div className="border-t border-stone-800 pt-8 flex flex-col justify-center items-center gap-6 text-xs">
          <p className="text-stone-400">
            © {new Date().getFullYear()} Lais Nutricionista. Todos os direitos
            reservados.
          </p>
          <p className="flex justify-center gap-2 items-center text-stone-400">
            Dev by{" "}
            <a
              href="https://github.com/ChristieCardoso"
              rel="noreferrer"
              target="_blank"
              className="text-emerald-500 hover:text-emerald-400 transition-colors font-medium"
            >
              Christie
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github hover:text-emerald-400 transition-colors"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
};
