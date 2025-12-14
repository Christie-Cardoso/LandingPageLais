import { Star, Clock, Video } from "lucide-react";
import type { ServiceType, LocationType } from "./types";

export const SERVICES: ServiceType[] = [
  {
    id: "primeira",
    title: "Primeira Consulta",
    duration: "1h 30min",
    price: "R$ 250",
    description: "Avaliação completa, bioimpedância e plano alimentar.",
    icon: Star,
    type: "presencial",
  },
  {
    id: "retorno",
    title: "Consulta de Retorno",
    duration: "45min",
    price: "R$ 150",
    description: "Acompanhamento de resultados e ajustes na dieta.",
    icon: Clock,
    type: "presencial",
  },
  {
    id: "online",
    title: "Atendimento Online",
    duration: "1h",
    price: "R$ 200",
    description: "Videoconferência via Google Meet.",
    icon: Video,
    type: "online",
  },
];

export const LOCATIONS: LocationType[] = [
  {
    id: "savassi",
    name: "Unidade Savassi",
    address: "Av. do Contorno, 6000 - Savassi",
    city: "Belo Horizonte, MG",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "lourdes",
    name: "Espaço Lourdes",
    address: "Rua da Bahia, 2500 - Lourdes",
    city: "Belo Horizonte, MG",
    image:
      "https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "pampulha",
    name: "Pampulha Office",
    address: "Av. Pres. Antônio Carlos, 7000",
    city: "Belo Horizonte, MG",
    image:
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=600&auto=format&fit=crop",
  },
];
