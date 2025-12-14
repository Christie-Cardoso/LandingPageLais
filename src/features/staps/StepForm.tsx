import { ChevronLeft, CheckCircle } from "lucide-react";
import { StepFormProps } from "../../lib/types";

export const StepForm: React.FC<StepFormProps> = ({
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
  handleBack,
  handleFinish,
}) => {
  return (
    <div className="animate-fade-in max-w-md mx-auto h-full flex flex-col">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 text-stone-400 hover:text-stone-600 mb-6 w-fit text-sm font-bold cursor-pointer"
      >
        <ChevronLeft size={16} /> Voltar
      </button>

      <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">
        Estamos quase lá!
      </h3>

      <div className="space-y-4 flex-1">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-stone-50 focus:bg-white transition-colors"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">
            WhatsApp
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-stone-50 focus:bg-white transition-colors"
            placeholder="(31) 99999-9999"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">
            Email (Opcional)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-stone-50 focus:bg-white transition-colors"
            placeholder="exemplo@email.com"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-stone-100">
        <button
          onClick={handleFinish}
          disabled={!name || !phone}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
        >
          Agendar no WhatsApp <CheckCircle size={20} />
        </button>
      </div>
    </div>
  );
};
