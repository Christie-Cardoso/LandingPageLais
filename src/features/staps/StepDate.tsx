import { ChevronLeft, ArrowRight } from "lucide-react";
import { StepDateProps } from "@/src/lib/types";
import { getAvailableTimeSlots } from "../../service/calendarService";

const generateCalendarDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) days.push(d);
  }
  return days;
};

export const StepDate: React.FC<StepDateProps> = ({
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  setStep,
  handleBack,
}) => {
  const calendarDays = generateCalendarDays();
  const timeSlots = selectedDate ? getAvailableTimeSlots(selectedDate) : [];

  return (
    <div className="animate-fade-in h-full flex flex-col">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 text-stone-400 hover:text-stone-600 mb-6 w-fit text-sm font-bold cursor-pointer"
      >
        <ChevronLeft size={16} /> Voltar
      </button>

      <div className="flex-1 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4">
            Escolha o dia
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {calendarDays.map((date, i) => {
              const isSelected =
                selectedDate?.toDateString() === date.toDateString();
              return (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedDate(date);
                    setSelectedTime("");
                  }}
                  className={`aspect-square rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-stone-800 text-white border-stone-800 shadow-lg"
                      : "bg-white border-stone-200 text-stone-600 hover:border-emerald-400 hover:bg-emerald-50"
                  }`}
                >
                  <span className="text-xs uppercase font-bold opacity-70">
                    {date.toLocaleDateString("pt-BR", {
                      weekday: "short",
                    })}
                  </span>
                  <span className="text-xl font-bold">{date.getDate()}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-48 border-l border-stone-100 pl-8 md:block flex flex-col">
          <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4">
            Horário
          </h4>
          {selectedDate ? (
            <div className="space-y-2 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setSelectedTime(time);
                    setStep("details");
                  }}
                  className={`w-full py-3 px-4 rounded-lg border font-bold text-sm transition-all flex justify-between cursor-pointer items-center group ${
                    selectedTime === time
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                      : "bg-white border-stone-200 text-stone-600 hover:border-emerald-400 hover:text-emerald-700"
                  }`}
                >
                  {time}
                  <ArrowRight
                    size={14}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                      selectedTime === time ? "text-white" : "text-emerald-500"
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-stone-300 text-sm italic py-10 text-center">
              Selecione uma data primeiro
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
