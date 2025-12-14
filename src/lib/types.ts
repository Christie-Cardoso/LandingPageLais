// Representação de um serviço oferecido (duração, preço, ícone, tipo)

export type ServiceType = {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  icon: React.ElementType;
  type: "presencial" | "online";
};

// Representação de uma unidade/loja onde atendimentos presenciais ocorrem

export type LocationType = {
  id: string;
  name: string;
  address: string;
  city: string;
  image: string;
};

// Tipos auxiliares usados dentro de agendamentos e perfis de paciente
export interface PastConsultation {
  date: string;
  type: string;
  weightRecorded: number;
  notes: string;
}

// Dados de integração com dispositivos/fitness (opcional)
export interface FitnessData {
  lastSync: string;
  stepsToday: number;
  caloriesBurned: number;
  activeMinutes: number;
  weeklyAverageSteps: number;
}

// Dieta: itens e estrutura de refeições
export interface DietItem {
  id: string;
  food: string;
  quantity: string;
  substitute?: string;
}

export interface Meal {
  id: string;
  title: string;
  time: string;
  items: DietItem[];
}

export interface DietPlan {
  lastUpdated: string;
  meals: Meal[];
  notes: string;
}

// Fotos de progresso do paciente
export interface ProgressPhoto {
  id: string;
  date: string;
  url: string; // Base64 ou URL externa
  view: "front" | "side" | "back";
  notes?: string;
}

// Anamnese digital resumida
export interface AnamnesisData {
  completed: boolean;
  lastUpdated: string;
  lifestyle: {
    wakeUpTime: string;
    bedTime: string;
    occupation: string;
    stressLevel: "Baixo" | "Médio" | "Alto" | "Muito Alto";
    alcoholFrequency: string;
    smoker: boolean;
  };
  health: {
    waterIntake: string;
    bowelFunction: string;
    sleepQuality: "Ruim" | "Regular" | "Boa" | "Excelente";
    medications: string;
    symptoms: string[];
  };
  nutrition: {
    favoriteFoods: string;
    dislikedFoods: string;
    eatingOutFrequency: string;
    whoCooks: string;
  };
}

// Detalhes do paciente usados em agendamentos
export interface PatientDetails {
  age: number;
  weight: number;
  height: number;
  goal: string;
  allergies: string[];
  patientMessage: string;
  lastVisit?: string;
  history: string;
  pastConsultations?: PastConsultation[];
  fitnessData?: FitnessData | null;
  dietPlan?: DietPlan;
  progressPhotos?: ProgressPhoto[];
  anamnesis?: AnamnesisData;
}

// Representação de um agendamento salvo
export interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  date: string;
  time: string;
  type: "Primeira Consulta" | "Retorno" | "Online";
  location?: string;
  status: "confirmado" | "pendente" | "cancelado" | "realizada";
  notes?: string;
  details: PatientDetails;
}

// Props do modal de agendamento
export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
  onBookingSuccess?: (apt: Appointment) => void;
}

// Steps do fluxo de agendamento

export interface StepDateProps {
  selectedDate: Date | null;
  selectedTime: string;
  setSelectedDate: (date: Date) => void;
  setSelectedTime: (time: string) => void;
  setStep: (step: "details") => void;
  handleBack: () => void;
}

export interface StepFormProps {
  name: string;
  phone: string;
  email: string;
  setName: (name: string) => void;
  setPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  handleBack: () => void;
  handleFinish: () => void;
}

export interface StepLocationProps {
  selectedLocation: LocationType;
  setSelectedLocation: (location: LocationType) => void;
  setStep: (step: "calendar") => void;
  handleBack: () => void;
  LOCATIONS: LocationType[];
}

export interface StepServiceProps {
  selectedService: ServiceType;
  handleServiceSelect: (service: ServiceType) => void;
  SERVICES: ServiceType[];
}
