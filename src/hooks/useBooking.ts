"use client";

import { useReducer, useEffect } from "react";
import {
  formatDateForWhatsApp,
  generateGoogleCalendarLink,
} from "../services/CalendarService";
import { type ServiceType, type LocationType } from "../lib/types";
import { SERVICES, LOCATIONS } from "../lib/constants";

type Step = "service" | "location" | "calendar" | "details" | "confirm";

interface BookingState {
  step: Step;
  selectedService: ServiceType;
  selectedLocation: LocationType;
  selectedDate: Date | null;
  selectedTime: string;
  name: string;
  phone: string;
  email: string;
  prefilledNotes: string;
}

type BookingAction =
  | { type: "SET_STEP"; payload: Step }
  | { type: "SET_SERVICE"; payload: ServiceType }
  | { type: "SET_LOCATION"; payload: LocationType }
  | { type: "SET_DATE"; payload: Date | null }
  | { type: "SET_TIME"; payload: string }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PREFILLED_NOTES"; payload: string };

const bookingReducer = (
  state: BookingState,
  action: BookingAction
): BookingState => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "SET_SERVICE":
      return { ...state, selectedService: action.payload };
    case "SET_LOCATION":
      return { ...state, selectedLocation: action.payload };
    case "SET_DATE":
      return { ...state, selectedDate: action.payload };
    case "SET_TIME":
      return { ...state, selectedTime: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PREFILLED_NOTES":
      return { ...state, prefilledNotes: action.payload };
    default:
      return state;
  }
};

interface UseBookingProps {
  initialPrefilledNotes?: string;
  onClose: () => void;
}

export const useBooking = ({
  initialPrefilledNotes = "",
  onClose,
}: UseBookingProps) => {
  const [state, dispatch] = useReducer(bookingReducer, {
    step: "service",
    selectedService: SERVICES[0],
    selectedLocation: LOCATIONS[0],
    selectedDate: null,
    selectedTime: "",
    name: "",
    phone: "",
    email: "",
    prefilledNotes: initialPrefilledNotes,
  });

  useEffect(() => {
    dispatch({ type: "SET_PREFILLED_NOTES", payload: initialPrefilledNotes });
  }, [initialPrefilledNotes]);

  const setStep = (step: Step) => dispatch({ type: "SET_STEP", payload: step });
  const setSelectedService = (service: ServiceType) =>
    dispatch({ type: "SET_SERVICE", payload: service });
  const setSelectedLocation = (location: LocationType) =>
    dispatch({ type: "SET_LOCATION", payload: location });
  const setSelectedDate = (date: Date | null) =>
    dispatch({ type: "SET_DATE", payload: date });
  const setSelectedTime = (time: string) =>
    dispatch({ type: "SET_TIME", payload: time });
  const setName = (name: string) =>
    dispatch({ type: "SET_NAME", payload: name });
  const setPhone = (phone: string) =>
    dispatch({ type: "SET_PHONE", payload: phone });
  const setEmail = (email: string) =>
    dispatch({ type: "SET_EMAIL", payload: email });

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    if (service.type === "online") {
      setStep("calendar");
    } else {
      setStep("location");
    }
  };

  const handleBack = () => {
    if (state.step === "calendar") {
      if (state.selectedService.type === "online") setStep("service");
      else setStep("location");
    } else if (state.step === "location") {
      setStep("service");
    } else if (state.step === "details") {
      setStep("calendar");
    }
  };

  const handleFinish = () => {
    const dateStr = state.selectedDate
      ? formatDateForWhatsApp(state.selectedDate)
      : "";
    const locationText =
      state.selectedService.type === "online"
        ? "Online (Google Meet)"
        : `${state.selectedLocation.name} (${state.selectedLocation.address})`;

    const calendarLink = state.selectedDate
      ? generateGoogleCalendarLink(
          state.selectedDate,
          state.selectedTime,
          state.name,
          locationText
        )
      : "";

    const message = `Olá! 🌿 Gostaria de confirmar o agendamento no site:

📝 *Serviço:* ${state.selectedService.title}
📍 *Local:* ${locationText}
📅 *Data:* ${dateStr}
⏰ *Horário:* ${state.selectedTime}
👤 *Nome:* ${state.name}
📧 *Email:* ${state.email}
${state.prefilledNotes ? `📋 *Perfil:* ${state.prefilledNotes}` : ""}

🔗 *Adicionar na Agenda:*
${calendarLink}

Aguardo a confirmação!`;

    const whatsappUrl = `https://wa.me/5531993034536?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setTimeout(onClose, 1000);
  };

  return {
    state,
    setStep,
    setSelectedService,
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
  };
};
