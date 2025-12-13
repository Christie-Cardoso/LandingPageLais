import { create } from "zustand";

interface ModalState {
  isBookingOpen: boolean;
  isQuizOpen: boolean;
  quizResult: string | null;
  openBookingModal: () => void;
  closeBookingModal: () => void;
  openQuizModal: () => void;
  closeQuizModal: () => void;
  finishQuiz: (result: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isBookingOpen: false,
  isQuizOpen: false,
  quizResult: null,
  openBookingModal: () => set({ isBookingOpen: true }),
  closeBookingModal: () => set({ isBookingOpen: false, quizResult: null }), // Limpa o resultado ao fechar
  openQuizModal: () => set({ isQuizOpen: true }),
  closeQuizModal: () => set({ isQuizOpen: false }),
  finishQuiz: (result: string) =>
    set({
      quizResult: result,
      isQuizOpen: false,
      isBookingOpen: true,
    }),
}));
