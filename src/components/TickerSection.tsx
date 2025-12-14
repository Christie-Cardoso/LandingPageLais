import { ArrowRight } from "lucide-react";
import { useModalStore } from "../store/modalStore";

export const TickerSection: React.FC = () => {
  const openBookingModal = useModalStore((state) => state.openBookingModal);
  const currentMonth = new Date().toLocaleDateString("pt-BR", {
    month: "long",
  });
  const formattedMonth =
    currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

  return (
    <div
      onClick={openBookingModal}
      className="bg-stone-900 text-white text-xs md:text-sm py-2.5 px-4 text-center cursor-pointer hover:bg-stone-800 transition-colors relative z-50"
    >
      <div className="flex items-center justify-center gap-3 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <p className="tracking-wide">
          Agenda de{" "}
          <span className="text-emerald-400 font-bold uppercase">
            {formattedMonth}
          </span>{" "}
          quase lotada:
          <span className="font-bold ml-1 border-b border-emerald-500/30 pb-0.5">
            Restam apenas 3 vagas
          </span>
        </p>
        <ArrowRight size={14} className="text-emerald-400 hidden sm:block" />
      </div>
    </div>
  );
};
