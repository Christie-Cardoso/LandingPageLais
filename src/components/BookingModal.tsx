/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { X, Calendar as CalendarIcon, ArrowRight, MapPin } from "lucide-react";
import { StepService } from "../features/staps/StepService";
import { StepLocation } from "../features/staps/StepLocation";
import { StepDate } from "../features/staps/StepDate";
import { StepForm } from "../features/staps/StepForm";
import { useBooking } from "../hooks/useBooking";
import { BookingModalProps } from "../lib/types";

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledNotes = "",
}) => {
  const {
    state,
    setStep,
    setSelectedLocation,
    setSelectedDate,
    setSelectedTime,
    setName,
    setPhone,
    setEmail,
    handleServiceSelect,
    handleBack,
    handleFinish,
    SERVICES,
    LOCATIONS,
  } = useBooking({ initialPrefilledNotes: prefilledNotes, onClose });

  const {
    step,
    selectedService,
    selectedLocation,
    selectedDate,
    selectedTime,
    name,
    phone,
    email,
  } = state;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row h-162.5 max-h-[90vh]">
        <div className="hidden md:flex w-1/3 bg-stone-50 border-r border-stone-200 flex-col p-8 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8 text-stone-400 font-bold text-xs uppercase tracking-widest">
              <ArrowRight size={14} className="text-emerald-500" /> Agendamento
              Online
            </div>

            <div className="flex gap-2 mb-8">
              {["service", "location", "calendar", "details"].map((s, _i) => {
                if (s === "location" && selectedService.type === "online")
                  return null;

                const isActive = step === s;
                const isPast =
                  ["service", "location", "calendar", "details"].indexOf(step) >
                  ["service", "location", "calendar", "details"].indexOf(s);

                return (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      isActive || isPast ? "bg-emerald-500" : "bg-stone-200"
                    }`}
                  ></div>
                );
              })}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4 leading-tight">
                  {step === "service" && "Selecione o Serviço"}
                  {step === "location" && "Onde será o atendimento?"}
                  {step === "calendar" && "Melhor data e horário"}
                  {step === "details" && "Seus dados finais"}
                </h2>

                <div className="space-y-4 text-stone-600">
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 ${
                        step !== "service"
                          ? "text-emerald-600"
                          : "text-stone-300"
                      }`}
                    >
                      <selectedService.icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-stone-800">
                        {selectedService.title}
                      </p>
                      <p className="text-xs text-stone-500">
                        {selectedService.duration} • {selectedService.price}
                      </p>
                    </div>
                  </div>

                  {selectedService.type !== "online" &&
                    (step === "calendar" || step === "details") && (
                      <div className="flex items-start gap-3 animate-fade-in">
                        <div className="mt-0.5 text-emerald-600">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-stone-800">
                            {selectedLocation.name}
                          </p>
                          <p className="text-xs text-stone-500 max-w-45">
                            {selectedLocation.address}
                          </p>
                        </div>
                      </div>
                    )}

                  {selectedDate && (
                    <div className="flex items-start gap-3 animate-fade-in">
                      <div className="mt-0.5 text-emerald-600">
                        <CalendarIcon size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-stone-800">
                          {selectedDate.toLocaleDateString("pt-BR", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })}
                        </p>
                        {selectedTime && (
                          <p className="text-xs text-stone-500">
                            às {selectedTime}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-stone-400 border-t border-stone-200 pt-4">
            <p className="mb-1">Cancelamento gratuito até 24h antes.</p>
            <span className="text-emerald-600 font-bold cursor-pointer hover:underline">
              Precisa de ajuda?
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative bg-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600rounded-full  transition-colors z-20 cursor-pointer"
          >
            <X size={20} />
          </button>

          <div className="flex-1 overflow-y-auto p-6 md:p-10 relative">
            {step === "service" && (
              <StepService
                selectedService={selectedService}
                handleServiceSelect={handleServiceSelect}
                SERVICES={SERVICES}
              />
            )}

            {step === "location" && (
              <StepLocation
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                setStep={(s) => setStep(s)}
                handleBack={handleBack}
                LOCATIONS={LOCATIONS}
              />
            )}

            {step === "calendar" && (
              <StepDate
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                setSelectedDate={setSelectedDate}
                setSelectedTime={setSelectedTime}
                setStep={(s) => setStep(s)}
                handleBack={handleBack}
              />
            )}

            {step === "details" && (
              <StepForm
                name={name}
                phone={phone}
                email={email}
                setName={setName}
                setPhone={setPhone}
                setEmail={setEmail}
                handleBack={handleBack}
                handleFinish={handleFinish}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
